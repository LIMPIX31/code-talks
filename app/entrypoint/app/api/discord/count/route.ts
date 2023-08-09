import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET() {
	const info = await fetch(`https://discord.com/api/v10/invites/${process.env['TRACKING_INVITE']}?with_counts=true`, {
		method: 'GET',
		headers: {
			Authorization: `Bot ${process.env['DISCORD_BOT_TOKEN']}`,
		},
	}).then((res) => res.json())

	return NextResponse.json({ count: info['approximate_member_count'], online: info['approximate_presence_count'] })
}
