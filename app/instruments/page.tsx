import { createClient } from '@/utils/supabase/server';

export default async function Instruments() {
  const supabase = await createClient();
  console.log(supabase);
  const { data: instruments } = await supabase.from("instruments").select();


  console.log(instruments);
  return <pre>{JSON.stringify(instruments, null, 2)}</pre>
}