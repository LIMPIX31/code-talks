import dynamic from 'next/dynamic'

const ThanksPage = dynamic(() => import('@page/thanks'))

export default function Page() {
	return <ThanksPage />
}
