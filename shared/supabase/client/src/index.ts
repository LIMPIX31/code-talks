import { createClientComponentClient, createServerComponentClient } from '@supabase/auth-helpers-nextjs'

export const useClient = createClientComponentClient

export const useServerClient = createServerComponentClient
