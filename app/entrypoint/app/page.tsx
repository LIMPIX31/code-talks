import dynamic from 'next/dynamic'

const HomePage = dynamic(() => import('@page/home'))

export default function Page() {
	return <HomePage />
}
