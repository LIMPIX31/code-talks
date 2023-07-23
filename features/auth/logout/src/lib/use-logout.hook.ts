import { useClient } from '@supabase/client'
import { useCallback } from 'react'
import { useRouter } from 'next/navigation'

export function useLogout() {
	const supabase = useClient()
	const { replace } = useRouter()

	const logout = useCallback(() => {
		supabase.auth.signOut().then(() => replace('/'))
	}, [replace, supabase.auth])

	return { logout }
}
