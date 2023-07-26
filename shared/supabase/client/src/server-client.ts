import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { Database } from './types'

export const useServerClient = (...args: Parameters<typeof createServerComponentClient>) =>
	createServerComponentClient<Database>(...args)
