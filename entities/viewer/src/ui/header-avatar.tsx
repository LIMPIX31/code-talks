import { FC } from 'react'
import { ViewerPreview } from '../model'
import Avatar from '@mui/material/Avatar'

export interface HeaderAvatarProps {
	viever: ViewerPreview
}

export const HeaderAvatar: FC<HeaderAvatarProps> = ({ viever }) => (
	<Avatar key='avatar' src={viever.avatar} sx={{ width: 54, height: 54 }} variant='rounded' />
)
