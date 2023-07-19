'use client'

import { type PropsWithChildren, useRef } from 'react'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'

export default function ScrollProvider({ children }: PropsWithChildren) {
	const containerRef = useRef(null)

	return (
		<LocomotiveScrollProvider
			options={{
				smooth: true,
			}}
			watch={[]}
			containerRef={containerRef}
		>
			<main data-scroll-container ref={containerRef}>
				{children}
			</main>
		</LocomotiveScrollProvider>
	)
}
