import { createClient } from '@supabase/supabase-js'

// eslint-disable-next-line dot-notation
export const supabase = createClient(process.env['NEXT_PUBLIC_SUPABASE_URL']!, process.env['NEXT_PUBLIC_SUPABASE_KEY']!)
