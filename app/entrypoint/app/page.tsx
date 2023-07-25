import dynamic from 'next/dynamic'

const Scroll = dynamic(() => import('@ux/scroll'))

const HomePage = dynamic(() => import('@page/home'))

export default function Page() {
	return (
		<Scroll>
			<HomePage />
		</Scroll>
	)
}
