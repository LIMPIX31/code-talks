'use client'

import { type Dispatch, type FC, type SetStateAction, useCallback, useEffect, useState } from 'react'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import Typography from '@mui/material/Typography'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'
import DialogContentText from '@mui/material/DialogContentText'
import { useDiscordlogin } from '@supabase/discord'

interface DialogController {
	isOpened: boolean
	onAgree: () => void
	onClose: () => void
	onCancel: () => void
}

export interface JoinContractProps {
	state: [boolean, Dispatch<SetStateAction<boolean>>]
	skipTerms?: boolean
}

const TermsDialog: FC<DialogController> = ({ isOpened, onAgree, onCancel, onClose }) => (
	<Dialog open={isOpened} onClose={onClose} maxWidth='xs'>
		<DialogTitle>Unboring Terms</DialogTitle>
		<DialogContent>
			<DialogContentText>
				<Typography fontWeight='900' fontSize='1.5rem'>
					1. Come on. Why you are reading it?
				</Typography>
				<Typography>We are going to authorize you via Discord so you can join us.</Typography>
				<ul>
					<li>
						<b>DO NOT</b> read next items below
					</li>
					<li>
						Your account <b>WILL</b> be used to connect you to the server and allow you to customize your profile on the
						server and to gather analytics about your activity on the server
					</li>
					<li>
						Why do you <b>KEEP</b> reading this?
					</li>
					<li>
						We <b>ONLY</b> store your public Discord data.
					</li>
					<li>
						We <b>DO NOT</b> read or store your private messages or other confidential Discord information.
					</li>
				</ul>
				<Typography fontSize='1.1rem' fontWeight='900'>
					Feel free to contact us
				</Typography>
			</DialogContentText>
		</DialogContent>
		<DialogActions>
			<Button onClick={onAgree}>Make sense</Button>
			<Button variant='contained' onClick={onCancel}>
				I am a barbie boy
			</Button>
		</DialogActions>
	</Dialog>
)

const DisagreeDialog: FC<DialogController> = ({ isOpened, onAgree, onCancel, onClose }) => (
	<Dialog open={isOpened} onClose={onClose} maxWidth='xs'>
		<DialogTitle>You missed, didn&apos;t you?</DialogTitle>
		<DialogContent>
			<DialogContentText>
				<Typography>We need you</Typography>
			</DialogContentText>
		</DialogContent>
		<DialogActions>
			<Button onClick={onAgree}>Please :3</Button>
			<Button variant='contained' onClick={onCancel}>
				Im ashamed
			</Button>
		</DialogActions>
	</Dialog>
)

export const JoinContract: FC<JoinContractProps> = ({ skipTerms, state: [state, set] }) => {
	const { login } = useDiscordlogin()

	const [termsDialog, setTermsDialog] = useState(false)
	const [disagreeDialog, setDisagreeDialog] = useState(false)

	const reset = useCallback(() => {
		set(false)
		setTermsDialog(false)
		setDisagreeDialog(false)
	}, [set])

	const submit = useCallback(() => {
		reset()
		login()
	}, [login, reset])

	function disagree() {
		setTermsDialog(false)
		setDisagreeDialog(true)
	}

	function tryAgain() {
		setTermsDialog(true)
		setDisagreeDialog(false)
	}

	useEffect(() => {
		if (state) {
			if (!skipTerms) {
				setTermsDialog(true)
			} else {
				submit()
			}
		}
	}, [skipTerms, state, submit])

	return (
		<>
			<TermsDialog
				isOpened={termsDialog}
				onAgree={() => submit()}
				onCancel={() => disagree()}
				onClose={() => reset()}
			/>
			<DisagreeDialog
				isOpened={disagreeDialog}
				onAgree={() => tryAgain()}
				onCancel={() => reset()}
				onClose={() => reset()}
			/>
		</>
	)
}
