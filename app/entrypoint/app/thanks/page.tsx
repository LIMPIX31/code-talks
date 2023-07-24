import dynamic from 'next/dynamic'
import type { Metadata } from 'next'

const ThanksPage = dynamic(() => import('@page/thanks'))

export const metadata: Metadata = {
	title: 'Thanks',
}

export default function Page() {
	return <ThanksPage />
}
