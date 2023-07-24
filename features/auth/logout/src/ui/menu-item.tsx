'use client'

import { FC } from 'react'
import { useLogout } from '../lib'
import MuiMenuItem from '@mui/material/MenuItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import Logout from '@mui/icons-material/Logout'

export const MenuItem: FC = () => {
	const { logout } = useLogout()

	return (
		<MuiMenuItem onClick={logout}>
			<ListItemIcon>
				<Logout fontSize='small' />
			</ListItemIcon>
			Logout
		</MuiMenuItem>
	)
}
