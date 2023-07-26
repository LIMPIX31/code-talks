import { useServerClient as createServerClient } from '@supabase/client'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET() {
	const supabase = createServerClient({ cookies })

	const { data } = await supabase.auth.getSession()

	if (!data?.session) {
		return new Response(JSON.stringify({ isMember: false }), { status: 401 })
	}

	const { session } = data

	const userId = session.user?.user_metadata?.provider_id

	if (!userId) {
		return new Response(JSON.stringify({ isMember: false }), { status: 401 })
	}

	const { status } = await fetch(`https://discord.com/api/v10/guilds/${process.env['GUILD_ID']}/members/${userId}`, {
		method: 'GET',
		next: {
			revalidate: 60 * 10,
		},
		headers: {
			Authorization: `Bot ${process.env['DISCORD_BOT_TOKEN']}`,
		},
	})

	return NextResponse.json({ isMember: status === 200 })
}
