'use client'

import { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import { AnimatePresence, motion } from 'framer-motion'

export default function Spinner() {
	if (typeof window !== 'undefined') {
		window.addEventListener('load', hide)
	}

	const [visible, setVisible] = useState(true)

	function hide() {
		window.removeEventListener('load', hide)
		setVisible(false)
	}

	useEffect(() => {
		if (typeof window !== 'undefined') {
			hide()
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<AnimatePresence initial>
			{visible && (
				<Box
					component={motion.div}
					initial={{ opacity: 1 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ delay: 0.3 }}
					position='fixed'
					width='100vw'
					height='100vh'
					zIndex={1000}
					display='flex'
					alignItems='center'
					justifyContent='center'
					sx={{
						backgroundColor: 'background.default',
					}}
				>
					<CircularProgress color='primary' />
				</Box>
			)}
		</AnimatePresence>
	)
}
