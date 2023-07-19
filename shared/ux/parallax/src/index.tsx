import { ComponentProps, FC } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'

export function makeVerticalParallax<C extends keyof typeof motion>(
	distance: { [k: string]: [number, number] },
	component?: C,
): FC<ComponentProps<C>> {
	return (props) => {
		const { scrollYProgress } = useScroll()
		const deltas = Object.entries(distance).reduce<any>((a, [key, value]) => {
			a[key] = useTransform(scrollYProgress, [0, 1], value)
			return a
		}, {})

		const Component: any = motion[component ?? 'div']

		return <Component style={{ ...deltas }} {...props} />
	}
}
