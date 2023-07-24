import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
	const requestUrl = new URL(request.url)
	const code = requestUrl.searchParams.get('code')

	if (code) {
		const supabase = createRouteHandlerClient({ cookies })
		await supabase.auth.exchangeCodeForSession(code)

		const { data } = await supabase.auth.getSession()
		if (!data?.session) {
			return NextResponse.redirect(requestUrl.origin)
		}

		const { session } = data

		const { status } = await fetch(new URL('api/discord/join', process.env['NEXT_PUBLIC_URL']), {
			method: 'POST',
			body: JSON.stringify({
				token: session.provider_token,
				user: session.user.user_metadata['provider_id'],
			}),
		})

		if (status === 201) {
			return NextResponse.redirect(new URL('thanks', process.env['NEXT_PUBLIC_URL']))
		}
	}

	return NextResponse.redirect(requestUrl.origin)
}
