import { SignUpForm } from "../components/SignUpForm/SignUpForm";
import { useAuth } from "../context/authProvider";
import { useSupabase } from "../context/supabaseProvider";

export const LandingPage = ({ user, setUser }) => {
  // const { supabase } = useSupabase();
  // const { loginData, setLoginData } = useAuth();

  // console.log(supabase);
  // console.log("Login data:", loginData);

  // if (user) {
  //   return <Navigate to="/songs" />;
  // }

  return (
    <div>
      <SignUpForm />
    </div>
  );
};
