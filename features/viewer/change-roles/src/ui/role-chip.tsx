'use client'

import { FC } from 'react'
import Box from '@mui/material/Box'
import { rgba } from 'polished'
import Typography from '@mui/material/Typography'

export interface RoleChipProps {
	name: string
	color: string
	active?: boolean
	onClick?: () => void
}

export const RoleChip: FC<RoleChipProps> = ({ name, color, active, onClick }) => (
	<Box
		height='2rem'
		sx={{
			px: 2,
			backgroundColor: active ? rgba(color, 0.1) : 'primary.100',
			display: 'inline-flex',
			flexDirection: 'row',
			alignItems: 'center',
			borderRadius: 2,
			gap: 2,
			cursor: 'pointer',
			transition: 'all .3s',
		}}
		onClick={onClick}
	>
		<Box
			height='1rem'
			width='1rem'
			sx={{ borderRadius: '50%', backgroundColor: active ? color : 'primary.200', transition: 'all .3s' }}
		/>
		<Box lineHeight='0'>
			<Typography
				color={active ? color : 'primary.400'}
				sx={{ userSelect: 'none', translate: '0 1px', transition: 'all .3s' }}
			>
				{name}
			</Typography>
		</Box>
	</Box>
)
