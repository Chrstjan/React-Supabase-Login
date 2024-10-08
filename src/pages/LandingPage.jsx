import { SignUpForm } from "../components/SignUpForm/SignUpForm";
import { useAuth } from "../context/authProvider";
import { useSupabase } from "../context/supabaseProvider";

export const LandingPage = () => {
  // const { supabase } = useSupabase();
  // const { loginData, setLoginData } = useAuth();

  // console.log(supabase);
  // console.log("Login data:", loginData);
  return (
    <div>
      <SignUpForm />
    </div>
  );
};
