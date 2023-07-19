import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://pbqtsxnalcqhotcgrqfy.supabase.co', process.env.SUPABASE_KEY)
