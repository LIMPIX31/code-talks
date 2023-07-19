'use client'

import { PropsWithChildren } from 'react'
import { ReactLenis } from '@studio-freight/react-lenis'

export default function Scroll({ children }: PropsWithChildren) {
	return (
		<ReactLenis
			root
			options={{
				smoothTouch: true,
				touchMultiplier: 0.5,
				smoothWheel: true,
			}}
		>
			{children}
		</ReactLenis>
	)
}
