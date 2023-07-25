import { ViewerFullwidthCard } from '@entity/viewer'
import { cookies } from 'next/headers'
import { useServerClient } from '@supabase/client'
import Container from '@mui/material/Container'

export async function ProfilePage() {
	const supabase = useServerClient({ cookies })

	const { data } = await supabase.auth.getSession()

	const { session } = data

	const viewer = {
		uid: session.user.user_metadata['full_name'],
		avatar: session.user.user_metadata['picture'],
		name: session.user.user_metadata['custom_claims']?.['global_name'],
	}

	return (
		<Container maxWidth='lg' sx={{ mt: 16 }}>
			<ViewerFullwidthCard viewer={viewer} />
		</Container>
	)
}

export default ProfilePage
