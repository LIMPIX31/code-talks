import { FC } from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import SvgIcon from '@mui/material/SvgIcon'
import Link from 'next/link'

export const ThanksPage: FC = () => (
	<Container
		maxWidth='lg'
		sx={{
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
			minHeight: '100vh',
		}}
	>
		<Typography fontSize='4vmax' fontWeight='100' color='primary'>
			Thank you for being a part of our cozy home in this cruel world
		</Typography>
		<Link href='/'>
			<SvgIcon color='primary' sx={{ fontSize: '20vmax', cursor: 'pointer', px: 256, boxSizing: 'content-box' }}>
				<svg width='1024' height='349' version='1.1' viewBox='0 0 1024 349' xmlns='http://www.w3.org/2000/svg'>
					<path
						d='m5.63 174h1013c-225 0-225-169-225-169s0 169 225 169c-225 0-225 169-225 169'
						fill='none'
						stroke='currentColor'
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeMiterlimit='0'
						strokeWidth='0.5vmax'
					/>
				</svg>
			</SvgIcon>
		</Link>
		<Typography sx={{ opacity: 0.1 }} fontSize='0.45vmax'>
			There are no visual effects because I ran out of budget
		</Typography>
	</Container>
)

export default ThanksPage
