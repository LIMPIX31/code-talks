'use client'

import { ComponentProps, FC, RefObject, useMemo } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'

export interface ScrollyProps<C extends keyof typeof motion> {
	distance: { [k: string]: [number, number, number] }
	options: {
		component?: C
		bindTo?: string | 'root'
		offset?: [number | 'self', number | 'self'] | number
		relativeTo?: RefObject<HTMLElement>
		speed?: number
	}
}

const Scrolly = <C extends keyof typeof motion>({
	distance,
	options: { component, bindTo, offset = [0, 0], relativeTo, speed = 1 },
	...props
}: ComponentProps<C> & ScrollyProps<C>) => {
	const viewportHeight = typeof window !== 'undefined' ? window.innerHeight : 1

	const { scrollY } = useScroll()

	const range = useMemo(() => {
		if (typeof document === 'undefined') {
			return [0, 0, 1]
		}

		const anchor = bindTo === 'root' ? document.body : document.querySelector(`[data-parallax-id="${bindTo}"]`)

		if (!anchor) {
			return [0, 0, viewportHeight]
		}

		const { top: topV, bottom: bottomV, height } = anchor.getBoundingClientRect()

		const relative = relativeTo?.current?.scrollTop ?? window.scrollY

		const top = topV + relative
		const bottom = bottomV + relative

		let [offsetX, offsetY] = typeof offset === 'number' ? [offset, offset] : offset

		if (offsetX === 'self') {
			offsetX = -height
		}

		if (offsetY === 'self') {
			offsetY = -height
		}

		return [(top + offsetX - height) * speed, top + offsetX, (bottom + offsetY) * speed]
	}, [bindTo, offset, relativeTo, speed, viewportHeight])

	const deltas = Object.entries(distance).reduce<any>((a, [key, out]) => {
		// eslint-disable-next-line react-hooks/rules-of-hooks
		a[key] = useTransform(scrollY, range, out)
		return a
	}, {})

	const Component: any = motion[component ?? 'div']

	return <Component style={{ ...deltas }} {...props} />
}

export const scrolly =
	<C extends keyof typeof motion>(
		distance: { [k: string]: [number, number, number] },
		options: {
			component?: C
			bindTo?: string | 'root'
			offset?: [number | 'self', number | 'self'] | number
			relativeTo?: RefObject<HTMLElement>
			speed?: number
		},
	): FC<ComponentProps<C>> =>
	(props) => <Scrolly distance={distance} options={options} {...props} />
