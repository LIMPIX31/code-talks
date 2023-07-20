import { ComponentProps, FC } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'

export function makeVerticalParallax<C extends keyof typeof motion>(
	page: number,
	distance: { [k: string]: { in?: number[]; out: number[] } },
	component?: C,
): FC<ComponentProps<C>> {
	return (props) => {
		const viewportHeight = typeof window !== 'undefined' ? window.innerHeight : 1

		const { scrollY } = useScroll()

		const deltas = Object.entries(distance).reduce<any>((a, [key, { in: iin, out }]) => {
			a[key] = useTransform(scrollY, iin ?? [page * viewportHeight, page * viewportHeight + viewportHeight], out)
			return a
		}, {})

		const Component: any = motion[component ?? 'div']

		return <Component style={{ ...deltas }} {...props} />
	}
}
