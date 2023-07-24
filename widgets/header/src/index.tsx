import { Header as SharedHeader } from '@ui/header'
import { ViewerHeaderAvatar } from '@entity/viewer'
import { useServerClient } from '@supabase/client'
import { cookies } from 'next/headers'
import { LogoutMenuItem } from '@feature/auth-logout'

export async function Header() {
	const supabase = useServerClient({ cookies })

	const { data } = await supabase.auth.getSession()

	if (!data?.session) {
		return <SharedHeader features={[<div key='vwr' />]} />
	}

	const { session } = data

	const viewer = {
		uid: session.user.user_metadata['full_name'],
		avatar: session.user.user_metadata['picture'],
	}

	return <SharedHeader features={[<ViewerHeaderAvatar features={[<LogoutMenuItem />]} viever={viewer} key='vwr' />]} />
}
