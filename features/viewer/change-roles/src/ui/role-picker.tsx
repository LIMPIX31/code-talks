'use client'

import { FC, useCallback, useMemo } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { RoleChip } from './role-chip'
import Grid from '@mui/material/Unstable_Grid2'
import { Divider } from '@mui/material'
import { load } from '../../../../../.pnp.loader.mjs'
import CircularProgress from '@mui/material/CircularProgress'

export interface RolePickerRole {
	group: string
	name: string
	color: string
	id: string
}

export interface RolePickerProps {
	roles?: RolePickerRole[]
	value: string[]
	onChange?: (roles: string[]) => void
	loading?: boolean
}

export const RolePicker: FC<RolePickerProps> = ({ roles, loading, onChange, value }) => {
	const grouped = useMemo(
		() =>
			roles?.reduce(
				(a, role) => {
					a[role.group] ??= []
					a[role.group]!.push(role)
					return a
				},
				{} as Record<string, RolePickerRole[]>,
			) ?? {},
		[roles],
	)

	const toggleRole = useCallback(
		(id: string) => {
			if (value.includes(id)) {
				onChange?.(value.filter((uid) => uid !== id))
			} else {
				onChange?.([...value, id])
			}
		},
		[onChange, value],
	)

	if (loading && !roles) {
		return (
			<Box display='flex' alignItems='center' justifyContent='center' sx={{ p: 16 }}>
				<CircularProgress />
			</Box>
		)
	}

	return (
		<Box>
			{loading && (
				<Box position='absolute' top='50%' left='50%' sx={{ translate: '-50% -50%' }}>
					<CircularProgress />
				</Box>
			)}
			<Grid
				container
				spacing={2}
				position='relative'
				sx={{
					overflow: 'hidden',
					pointerEvents: loading ? 'none' : 'initial',
					filter: loading ? 'blur(10px) saturate(0%)' : 'none',
					transition: 'all .3s',
				}}
			>
				{Object.entries(grouped).map(([group, roles]) => (
					<Grid md={6} display='flex' flexDirection='column'>
						<Typography fontSize='1.2rem' color='primary'>
							{group}
						</Typography>
						<Divider variant='fullWidth' sx={{ mb: 1 }} light />
						<Grid container spacing={2}>
							{roles.map(({ name, color, id }) => (
								<Grid xs={12}>
									<RoleChip name={name} color={color} active={value.includes(id)} onClick={() => toggleRole(id)} />
								</Grid>
							))}
						</Grid>
					</Grid>
				))}
			</Grid>
		</Box>
	)
}
