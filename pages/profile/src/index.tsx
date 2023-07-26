import { ViewerFullwidthCard } from '@entity/viewer'
import { cookies } from 'next/headers'
import { useServerClient } from '@supabase/client'
import Container from '@mui/material/Container'
import { redirect } from 'next/navigation'
import { RolePickerFragment } from './fragments/role-picker'

export async function ProfilePage() {
	const supabase = useServerClient({ cookies })

	const { data } = await supabase.auth.getSession()

	const { session } = data

	if (!session) {
		redirect('/')
	}

	const viewer = {
		uid: session.user.user_metadata['full_name'],
		avatar: session.user.user_metadata['picture'],
		name: session.user.user_metadata['custom_claims']?.['global_name'],
	}

	const isMember = await fetch(new URL('api/discord/member/is', process.env['NEXT_PUBLIC_URL'])).then((res) =>
		res.json(),
	)

	return (
		<Container
			maxWidth='lg'
			sx={{
				pt: 16,
				minHeight: '100vh',
			}}
		>
			<ViewerFullwidthCard viewer={viewer} />
			{isMember && <RolePickerFragment />}
		</Container>
	)
}

export default ProfilePage
