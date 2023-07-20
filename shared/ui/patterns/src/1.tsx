import type { ComponentProps, FC } from 'react'
import { useTheme } from '@mui/material/styles'

export const Pattern1: FC<ComponentProps<'svg'>> = (props) => {
	const { palette } = useTheme()

	return (
		<svg width='1400' height='5e3' version='1.1' viewBox='0 0 1400 5e3' xmlns='http://www.w3.org/2000/svg' {...props}>
			<defs>
				<linearGradient id='linear' x1='0%' y1='0%' x2='100%' y2='100%'>
					<stop offset='0%' stopColor={palette.primary.main} />
					<stop offset='100%' stopColor={palette.secondary.main} />
				</linearGradient>
			</defs>
			<path
				d='m86.6 50 409 236c61.2 35.3 111 121 111 192v244c0 70.7 49.6 99.3 111 64l298-172c61.2-35.3 111-121 111-192v-144c0-70.7-49.6-99.3-111-64l-38.1 22c-61.2 35.3-111 121-111 192v744c0 70.7-49.6 99.3-111 64l-385-222c-61.2-35.3-111-121-111-192v-244c0-70.7 49.6-99.3 111-64l731 422c61.2 35.3 111 121 111 192v544c0 70.7-49.6 99.3-111 64l-558-322c-61.2-35.3-111-6.69-111 64v544c0 70.7-49.6 99.3-111 64l-125-72c-61.2-35.3-111-121-111-192v-144c0-70.7 49.6-99.3 111-64l471 272c61.2 35.3 111 6.69 111-64v-344c0-70.7-49.6-99.3-111-64l-385 222c-61.2 35.3-61.2 92.7 0 128l644 372c61.2 35.3 111 6.69 111-64 0-39.8-49.6-101-111-136-34.4-19.9-62.4 21.3-62.4 92v344c0 70.7-49.6 99.3-111 64l-298-172c-61.2-35.3-111-6.69-111 64v844c0 70.7 49.6 99.3 111 64l558-322c61.2-35.3 111-121 111-192v-244c0-70.7-49.6-157-111-192l-211-122c-61.2-35.3-111-6.69-111 64v1444c0 70.7 49.6 99.3 111 64l298-172c61.2-35.3 111-121 111-192v-144c0-70.7-49.6-99.3-111-64l-818 472c-61.2 35.3-61.2 92.7 0 128l731 422c61.2 35.3 111 6.69 111-64v-1044c0-70.7-49.6-99.3-111-64l-38.1 22c-61.2 35.3-111 6.69-111-64v-144c0-70.7-49.6-157-111-192l-471-272c-61.2-35.3-111-6.69-111 64v1844c0 70.7 49.6 99.3 111 64l211-122c61.2-35.3 160-35.3 222 0l125 72c61.2 35.3 61.2 92.7 0 128l-211 122c-61.2 35.3-61.2 92.7 0 128l211 122c61.2 35.3 160 35.3 222 0l322-186'
				fill='none'
				stroke='url(#linear)'
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeMiterlimit='0'
			/>
		</svg>
	)
}
