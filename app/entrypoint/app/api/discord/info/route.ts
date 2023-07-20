import { NextResponse } from 'next/server'

export async function GET(request: Request) {
	console.log(process.env['DISCORD_BOT_TOKEN'])

	const info = await fetch(`https://discord.com/api/v10/guilds/${process.env['GUILD_ID']}`, {
		method: 'GET',
		headers: {
			Authorization: `Bot ${process.env['DISCORD_BOT_TOKEN']}`,
		},
	}).then((res) => res.json())

	return NextResponse.json(info)
}
