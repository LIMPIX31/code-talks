import Box from '@mui/material/Box'
import dynamic from 'next/dynamic'
import { useServerClient } from '@supabase/client'
import { cookies } from 'next/headers'

const TitleFragment = dynamic(() => import('./fragments/title'))
const JoinFragment = dynamic(() => import('./fragments/join'))
const FooterFragment = dynamic(() => import('./fragments/footer'))

export async function HomePage() {
	const supabase = await useServerClient({ cookies })

	const { data } = await supabase.auth.getSession()

	const auth = Boolean(data?.session)

	return (
		<Box>
			<TitleFragment />
			<JoinFragment auth={auth} />
			<FooterFragment />
		</Box>
	)
}

export default HomePage
