import Box from '@mui/material/Box'
import dynamic from 'next/dynamic'
import { useServerClient } from '@supabase/client'
import { cookies } from 'next/headers'
import * as process from 'process'

const TitleFragment = dynamic(() => import('./fragments/title'))
const JoinFragment = dynamic(() => import('./fragments/join'))
const FooterFragment = dynamic(() => import('./fragments/footer'))

export async function HomePage() {
	const supabase = await useServerClient({ cookies })

	const { data } = await supabase.auth.getSession()

	const auth = Boolean(data?.session)

	const { count, online } = await fetch(new URL('api/discord/count', process.env['NEXT_PUBLIC_URL'])).then((res) =>
		res.json(),
	)

	return (
		<Box>
			<TitleFragment count={count} online={online} />
			<JoinFragment auth={auth} />
			<FooterFragment />
		</Box>
	)
}

export default HomePage
