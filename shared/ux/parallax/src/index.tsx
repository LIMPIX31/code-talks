'use client'

import { ComponentProps, FC, useMemo } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'

export interface ScrollyProps<C extends keyof typeof motion> {
	distance: { [k: string]: { in?: number[]; out: number[] } }
	options: {
		component?: C
		bindTo?: string | 'root'
		offset?: [number | 'self', number | 'self'] | number
	}
}

const Scrolly = <C extends keyof typeof motion>({
	distance,
	options: { component, bindTo, offset = [0, 0] },
	...props
}: ComponentProps<C> & ScrollyProps<C>) => {
	const viewportHeight = typeof window !== 'undefined' ? window.innerHeight : 1

	const { scrollY } = useScroll()

	const range = useMemo(() => {
		if (typeof document === 'undefined') {
			return [0, 1]
		}

		const anchor = bindTo === 'root' ? document.body : document.querySelector(`[data-parallax-id="${bindTo}"]`)

		if (!anchor) {
			return [0, viewportHeight]
		}

		const { top, bottom } = anchor.getBoundingClientRect()

		let [offsetX, offsetY] = typeof offset === 'number' ? [offset, offset] : offset

		if (offsetX === 'self') {
			offsetX = -top
		}

		if (offsetY === 'self') {
			offsetY = -top
		}

		return [top + offsetX, bottom + offsetY]
	}, [bindTo, offset, viewportHeight])

	const deltas = Object.entries(distance).reduce<any>((a, [key, { in: iin, out }]) => {
		// eslint-disable-next-line react-hooks/rules-of-hooks
		a[key] = useTransform(scrollY, iin ?? range, out)
		return a
	}, {})

	const Component: any = motion[component ?? 'div']

	return <Component style={{ ...deltas }} {...props} />
}

export const scrolly =
	<C extends keyof typeof motion>(
		distance: { [k: string]: { in?: number[]; out: number[] } },
		options: {
			component?: C
			bindTo?: string | 'root'
			offset?: [number | 'self', number | 'self'] | number
		},
	): FC<ComponentProps<C>> =>
	(props) =>
		<Scrolly distance={distance} options={options} {...props} />
