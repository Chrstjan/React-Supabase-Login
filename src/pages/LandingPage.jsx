import { useSupabase } from "../context/supabaseProvider";

export const LandingPage = () => {
  const { supabase } = useSupabase();

  console.log(supabase);
  return <div>LandingPage</div>;
};
