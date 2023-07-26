import { Header as SharedHeader } from '@ui/header'
import { ViewerHeaderAvatar } from '@entity/viewer'
import { useServerClient } from '@supabase/client'
import { cookies } from 'next/headers'
import { LogoutMenuItem } from '@feature/auth-logout'
import { FC } from 'react'
import MuiMenuItem from '@mui/material/MenuItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import AccountCircle from '@mui/icons-material/AccountCircle'
import Link from 'next/link'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'

const ProfileLinkMenuItem: FC = () => (
	<MuiMenuItem key='profile-menu-item'>
		<ListItemIcon>
			<AccountCircle fontSize='small' />
		</ListItemIcon>
		<Link href='/profile' style={{ textDecoration: 'none' }}>
			<Typography color='primary'>Profile</Typography>
		</Link>
	</MuiMenuItem>
)

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

	return (
		<SharedHeader
			features={[
				<ViewerHeaderAvatar
					features={[<ProfileLinkMenuItem />, <Divider light />, <LogoutMenuItem />]}
					viever={viewer}
					key='vwr'
				/>,
			]}
		/>
	)
}
