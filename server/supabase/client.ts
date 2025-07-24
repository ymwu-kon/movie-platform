// /server/supabase/client.ts
import { createClient } from '@supabase/supabase-js'
const config = useRuntimeConfig()

const supabaseUrl = process.env.SUPABASE_URL!
const supabaseKey = process.env.SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseKey)
