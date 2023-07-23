'use client'

import { ComponentProps, FC, useEffect, useMemo, useState } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'

export interface ScrollyProps<C extends keyof typeof motion> {
	distance: { [k: string]: (number | string)[] }
	options: {
		component?: C
		bindTo?: string | 'root'
		offset?: [number | 'self', number | 'self'] | number
		sticky?: string
		speed?: number
	}
}

const Scrolly = <C extends keyof typeof motion>({
	distance,
	options: { component, bindTo = 'root', offset = [0, 0], sticky, speed = 1 },
	...props
}: ComponentProps<C> & ScrollyProps<C>) => {
	const viewportHeight = typeof window !== 'undefined' ? window.innerHeight : 1

	const [update, setUpdate] = useState(0)

	useEffect(() => {
		const observer = new ResizeObserver(() => setUpdate((u) => u + 1))

		observer.observe(document.body)

		return () => {
			observer.unobserve(document.body)
		}
	}, [])

	const anchor = useMemo(
		() =>
			typeof document !== 'undefined'
				? bindTo === 'root'
					? document.body
					: document.querySelector(`[data-parallax-id="${bindTo}"]`)
				: undefined,
		[bindTo],
	)

	const { scrollY } = useScroll()

	const range = useMemo(() => {
		if (typeof document === 'undefined') {
			return [0, 0, 1]
		}

		if (!anchor) {
			return [0, 0, viewportHeight]
		}

		const { top: topAnchor, bottom: bottomAnchor, height } = anchor.getBoundingClientRect()

		let top = topAnchor + window.scrollY
		let bottom = bottomAnchor + window.scrollY

		if (sticky) {
			const relation = document.querySelector(`[data-parallax-sticky="${sticky}"]`)
			if (relation) {
				const { top: topRelLocal, bottom: bottomRelLocal } = relation.getBoundingClientRect()

				const topRel = topRelLocal + window.scrollY
				const bottomRel = bottomRelLocal + window.scrollY

				top = topRel
				bottom = bottomRel
			}
		}

		let [offsetX, offsetY] = typeof offset === 'number' ? [offset, offset] : offset

		if (offsetX === 'self') {
			offsetX = -height
		}

		if (offsetY === 'self') {
			offsetY = -height
		}

		return [(top + offsetX - height) * speed, top + offsetX, (bottom + offsetY) * speed]
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [anchor, offset, speed, sticky, viewportHeight, update])

	const deltas = Object.entries(distance).reduce<any>((a, [key, out]) => {
		out = out.map((o) => {
			if (o === 'height') {
				return anchor?.getBoundingClientRect().height ?? 0
			}

			return o
		})
		// eslint-disable-next-line react-hooks/rules-of-hooks
		a[key] = useTransform(scrollY, range, out)
		return a
	}, {})

	const Component: any = motion[component ?? 'div']

	return <Component style={{ ...deltas }} {...props} />
}

export const scrolly =
	<C extends keyof typeof motion>(
		distance: { [k: string]: (number | string)[] },
		options: {
			component?: C
			bindTo?: string | 'root'
			offset?: [number | 'self', number | 'self'] | number
			sticky?: string
			speed?: number
		},
	): FC<ComponentProps<C>> =>
	(props) => <Scrolly distance={distance} options={options} {...props} />
