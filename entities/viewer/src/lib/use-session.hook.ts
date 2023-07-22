'use client'

import { supabase } from '@supabase/client'
import { suspend } from 'suspend-react'

export function useSession() {
	return suspend(() => supabase.auth.getSession(), ['session'])
}
