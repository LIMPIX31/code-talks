import { cookies } from 'next/headers'
import { useServerClient } from '@supabase/client'
import { redirect } from 'next/navigation'
import dynamic from 'next/dynamic'

const Container = dynamic(() => import('@mui/material/Container'))
const ViewerFullwidthCard = dynamic(() =>
	import('@entity/viewer').then(({ ViewerFullwidthCard }) => ViewerFullwidthCard),
)
const RolePickerFragment = dynamic(() => import('./fragments/role-picker'))

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
