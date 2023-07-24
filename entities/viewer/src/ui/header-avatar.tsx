'use client'

import { FC, useState, MouseEvent, useCallback, ReactNode } from 'react'
import { ViewerPreview } from '../model'
import Avatar from '@mui/material/Avatar'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'

export interface HeaderAvatarProps {
	viever: ViewerPreview
	features: ReactNode[]
}

export const HeaderAvatar: FC<HeaderAvatarProps> = ({ viever, features }) => {
	const [anchor, setAnchor] = useState<null | HTMLElement>(null)
	const open = Boolean(anchor)

	const handleClick = useCallback((event: MouseEvent<HTMLElement>) => {
		setAnchor(event.currentTarget)
	}, [])

	const handleClose = useCallback(() => {
		setAnchor(null)
	}, [])

	return (
		<>
			<Tooltip title='Profile'>
				<IconButton size='small' sx={{ ml: 2 }} onClick={handleClick}>
					<Avatar key='avatar' src={viever.avatar} sx={{ width: 54, height: 54 }} variant='rounded' />
				</IconButton>
			</Tooltip>
			<Menu
				open={open}
				anchorEl={anchor}
				onClose={handleClose}
				onClick={() => handleClose()}
				transformOrigin={{ horizontal: 'right', vertical: 'top' }}
				anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
			>
				{features}
			</Menu>
		</>
	)
}
