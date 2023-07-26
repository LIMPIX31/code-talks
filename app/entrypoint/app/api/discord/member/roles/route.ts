import type { NextRequest } from 'next/server'
import { useServerClient as createServerClient } from '@supabase/client'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

function numberToHex(n: number) {
	const r = (n & 0xff0000) >> 16
	const g = (n & 0x00ff00) >> 8
	const b = n & 0x0000ff
	return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`
}

export async function GET(req: NextRequest) {
	const supabase = createServerClient({ cookies })

	const { data } = await supabase.auth.getSession()

	if (!data?.session) {
		return new Response(null, { status: 401 })
	}

	const { session } = data

	const userId = session.user?.user_metadata?.provider_id

	if (!userId) {
		return new Response(null, { status: 401 })
	}

	const memberResult = await fetch(`https://discord.com/api/v10/guilds/${process.env['GUILD_ID']}/members/${userId}`, {
		method: 'GET',
		next: {
			revalidate: 60 * 10,
		},
		headers: {
			Authorization: `Bot ${process.env['DISCORD_BOT_TOKEN']}`,
		},
	})

	if (memberResult.status !== 200) {
		return new Response(JSON.stringify({ message: 'Not a member' }), { status: 403 })
	}

	const member = await memberResult.json()

	const { data: roles, error } = await supabase.from('role_whitelist').select()

	if (error) {
		throw error
	}

	const roleWhitelist = Object.fromEntries(roles.map(({ role_id, ...rest }) => [role_id, rest]))

	const guildRoles = await fetch(`https://discord.com/api/v10/guilds/${process.env['GUILD_ID']}/roles`, {
		method: 'GET',
		next: {
			revalidate: 60 * 10,
		},
		headers: {
			Authorization: `Bot ${process.env['DISCORD_BOT_TOKEN']}`,
		},
	}).then((res) => res.json())

	const memberRoleIds = member.roles

	return NextResponse.json(
		guildRoles
			.filter(({ id }) => Boolean(roleWhitelist[id]))
			.map(({ id, name, color }) => ({
				id,
				name,
				color: numberToHex(color),
				assigned: memberRoleIds.includes(id),
				group: roleWhitelist[id].group_name,
			})),
	)
}
