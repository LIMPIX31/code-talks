import dynamic from 'next/dynamic'
import type { Metadata } from 'next'

const ProfilePage = dynamic(() => import('@page/profile'))

export const metadata: Metadata = {
	title: 'Profile',
}

export default function Page() {
	return <ProfilePage />
}
