import type { FC } from 'react'
import { Viewer } from '../model'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import Skeleton from '@mui/material/Skeleton'

export interface FullwidthCardProps {
	viewer?: Viewer
}

export const FullwidthCard: FC<FullwidthCardProps> = ({ viewer }) =>
	viewer ? (
		<Box display='flex' gap={[8, 16]}>
			<Avatar
				key='avatar'
				src={viewer.avatar}
				sx={{ width: [96, 192], height: [96, 192], backgroundColor: 'primary.100', borderRadius: 6 }}
				variant='rounded'
			/>
			<Box display='flex' flexDirection='column' justifyContent='space-between' sx={{ py: [1, 8] }}>
				<Typography fontWeight='900' fontSize={['3rem', '4rem']}>
					{viewer.name}
				</Typography>
				<Typography fontWeight='900' color='primary.400' fontSize={['1rem', '1.4rem']}>
					@{viewer.uid}
				</Typography>
			</Box>
		</Box>
	) : (
		<Box display='flex' gap={[8, 16]}>
			<Skeleton
				animation='wave'
				sx={{ width: [96, 192], height: [96, 192], backgroundColor: 'primary.100', borderRadius: 6 }}
				variant='rounded'
			/>
			<Box display='flex' flexDirection='column' justifyContent='space-between' sx={{ py: [1, 8] }}>
				<Skeleton variant='text' sx={{ fontSize: ['3rem', '4rem'], width: '20vmax' }} animation='wave' />
				<Skeleton variant='text' sx={{ fontSize: ['1rem', '1.4rem'], width: '5vmax' }} animation='wave' />
			</Box>
		</Box>
	)
