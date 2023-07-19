'use client'

import { PropsWithChildren } from 'react'
import { ReactLenis } from '@studio-freight/react-lenis'

export default function Scroll({ children }: PropsWithChildren) {
	return <ReactLenis root>{children}</ReactLenis>
}
