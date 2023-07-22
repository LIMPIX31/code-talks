import { useClient } from '@supabase/client'
import { useCallback } from 'react'

export function useDiscordlogin() {
	const supabase = useClient()

	const login = useCallback(() => {
		supabase.auth.signInWithOAuth({
			provider: 'discord',
			options: {
				scopes: 'identify, guilds.join',
				redirectTo: new URL('api/auth/callback', process.env['NEXT_PUBLIC_URL']).toString(),
			},
		})
	}, [supabase])

	return { login }
}
