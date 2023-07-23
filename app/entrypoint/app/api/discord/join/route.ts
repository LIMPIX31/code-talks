import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
	if (process.env['DISALLOW_INVITES'] && process.env['DISALLOW_INVITES'] !== 'false') {
		return new Response(JSON.stringify({ message: process.env['DISALLOW_INVITES'] }), { status: 403 })
	}

	const { token, user } = await req.json()

	if (!token || !user) {
		return new Response(null, { status: 401 })
	}

	const { status } = await fetch(`https://discord.com/api/v10/guilds/${process.env['GUILD_ID']}/members/${user}`, {
		method: 'PUT',
		body: JSON.stringify({
			access_token: token,
		}),
		headers: {
			Authorization: `Bot ${process.env['DISCORD_BOT_TOKEN']}`,
		},
	})

	if (status !== 201 && status !== 204) {
		return new Response(null, { status: 403 })
	}

	return NextResponse.json({ ok: true })
}
