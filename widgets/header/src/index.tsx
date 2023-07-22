'use client'

import { FC, useMemo } from 'react'
import { Header as SharedHeader } from '@ui/header'
import { useSession, ViewerHeaderAvatar } from '@entity/viewer'

export const Header: FC = () => {
	const { data } = useSession()

	const viewer = useMemo(() => {
		if (!data?.session) {
			return
		}

		const { session } = data

		// eslint-disable-next-line consistent-return
		return {
			uid: session.user.user_metadata['full_name'],
			avatar: session.user.user_metadata['picture'],
		}
	}, [data])

	return <SharedHeader features={[viewer ? <ViewerHeaderAvatar viever={viewer} key='vwr' /> : <div />]} />
}
