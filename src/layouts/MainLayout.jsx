import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { Navbar } from "../components/Navbar/Navbar";
import { supabase } from "../../supabaseClient";

export const MainLayout = ({ user, setUser }) => {
  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error(error.message);
    } else {
      console.log("User logged out");
      setUser(null);
      console.log(user);
    }
  };

  return (
    <>
      {user ? (
        <Header>
          <Navbar />
          {user ? (
            <button onClick={() => handleSignOut()}>Sign out</button>
          ) : null}
        </Header>
      ) : null}
      <Outlet />
    </>
  );
};
