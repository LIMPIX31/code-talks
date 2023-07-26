'use client'

import { FC, useCallback, useEffect, useState } from 'react'
import { useMutation, useQuery } from '@tanstack/react-query'
import { RolePicker } from '@feature/viewer-change-roles'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { enqueueSnackbar, SnackbarProvider } from 'notistack'

interface Role {
	group: string
	name: string
	color: string
	id: string
	assigned: boolean
}

export const RolePickerFragment: FC = () => {
	const [selectedRoles, setSelectedRoles] = useState<string[]>([])
	const [touched, setTouched] = useState(false)

	const { data, error, isLoading } = useQuery<Role[]>({
		queryKey: ['roles'],
		queryFn: () => fetch(new URL('api/discord/member/roles', process.env['NEXT_PUBLIC_URL'])).then((res) => res.json()),
	})

	const mutation = useMutation({
		mutationFn: (roles: string[]) =>
			fetch(new URL('api/discord/member/update-roles', process.env['NEXT_PUBLIC_URL']), {
				method: 'PATCH',
				body: JSON.stringify({ roles }),
			}),
	})

	const reset = useCallback(() => {
		if (data) {
			setSelectedRoles(data.filter(({ assigned }) => assigned).map(({ id }) => id))
			setTouched(false)
		}
	}, [data])

	const change = useCallback((roles: string[]) => {
		setTouched(true)
		setSelectedRoles(roles)
	}, [])

	const submit = useCallback(() => {
		setTouched(false)
		mutation.mutate(selectedRoles)
	}, [mutation, selectedRoles])

	useEffect(() => {
		if (!isLoading && data) {
			reset()
		}
	}, [data, isLoading, reset])

	useEffect(() => {
		if (mutation.isSuccess) {
			enqueueSnackbar('Roles assigned!', { variant: 'success' })
		}

		if (mutation.isError) {
			enqueueSnackbar(`Failed to assign roles: ${mutation.error?.message}`, {
				variant: 'error',
				autoHideDuration: 2000,
			})
			reset()
		}
	}, [mutation.isSuccess, mutation.isError, mutation.error?.message, reset])

	return (
		<Box>
			<SnackbarProvider />
			<Typography sx={{ my: 4, fontWeight: '900', fontSize: '3rem' }} textAlign='left'>
				Roles
			</Typography>
			{error ? (
				<Box>{error?.message}</Box>
			) : (
				<RolePicker roles={data} loading={isLoading || mutation.isPending} value={selectedRoles} onChange={change} />
			)}
			<Box display='flex' justifyContent='right' gap={2}>
				{touched && (
					<>
						<Button onClick={reset}>Revert</Button>
						<Button variant='contained' disabled={mutation.isPending} onClick={submit}>
							Save
						</Button>
					</>
				)}
			</Box>
		</Box>
	)
}

export default RolePickerFragment
