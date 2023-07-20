import { supabase } from '@supabase/client'

export function login() {
	return supabase.auth.signInWithOAuth({
		provider: 'discord',
		options: {
			scopes: 'identify, guilds.join',
		},
	})
}
