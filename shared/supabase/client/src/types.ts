export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export interface Database {
	public: {
		Tables: {
			role_whitelist: {
				Row: {
					group_name: string | null
					id: number
					role_id: string | null
				}
				Insert: {
					group_name?: string | null
					id?: number
					role_id?: string | null
				}
				Update: {
					group_name?: string | null
					id?: number
					role_id?: string | null
				}
				Relationships: []
			}
		}
		Views: {
			[_ in never]: never
		}
		Functions: {
			[_ in never]: never
		}
		Enums: {
			[_ in never]: never
		}
		CompositeTypes: {
			[_ in never]: never
		}
	}
}
