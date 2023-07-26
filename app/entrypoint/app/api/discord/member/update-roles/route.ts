import type { NextRequest } from 'next/server'
import { useServerClient as createServerClient } from '@supabase/client'
import { cookies } from 'next/headers'

export const dynamic = 'force-dynamic'

export async function PATCH(req: NextRequest) {
	const { roles: selectedRoles } = await req.json()

	if (!selectedRoles || !Array.isArray(selectedRoles)) {
		return new Response(null, { status: 400 })
	}

	const supabase = createServerClient({ cookies })

	const { data } = await supabase.auth.getSession()

	if (!data?.session) {
		return new Response(null, { status: 401 })
	}

	const { session } = data

	const userId = session.user?.user_metadata?.['provider_id']

	if (!userId) {
		return new Response(null, { status: 401 })
	}

	const memberResult = await fetch(`https://discord.com/api/v10/guilds/${process.env['GUILD_ID']}/members/${userId}`, {
		method: 'GET',
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

	const guildRoles: Array<{ id: string; name: string; color: number }> = await fetch(
		`https://discord.com/api/v10/guilds/${process.env['GUILD_ID']}/roles`,
		{
			method: 'GET',
			headers: {
				Authorization: `Bot ${process.env['DISCORD_BOT_TOKEN']}`,
			},
		},
	).then((res) => res.json())

	const guildRoleIds = guildRoles.map(({ id }) => id)

	const memberRoleIds: string[] = member.roles

	const rolesToUpdate = selectedRoles.filter((id) => roleWhitelist[id] && guildRoleIds.includes(id))

	const strippedMemberRoles = memberRoleIds.filter((id) => !roleWhitelist[id])

	const newRoleList = [...strippedMemberRoles, ...rolesToUpdate]

	const { status } = await fetch(`https://discord.com/api/v10/guilds/${process.env['GUILD_ID']}/members/${userId}`, {
		method: 'PATCH',
		body: JSON.stringify({
			roles: newRoleList,
		}),
		headers: {
			Authorization: `Bot ${process.env['DISCORD_BOT_TOKEN']}`,
			'Content-Type': 'application/json',
		},
	})

	return new Response(null, { status })
}
