import { Navigate, Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";
import { Header } from "../components/Header/Header";
import { supabase } from "../../supabaseClient";

export const ProtecedLayout = ({ user }) => {
  if (!user) {
    return <Navigate to="/" redirect />;
  }

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
      <Header>
        <Navbar />
        {user ? (
          <button onClick={() => handleSignOut()}>Sign out</button>
        ) : null}
      </Header>
      <Outlet />
    </>
  );
};
