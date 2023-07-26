import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { Database } from './types'

export const useClient = () => createClientComponentClient<Database>()
