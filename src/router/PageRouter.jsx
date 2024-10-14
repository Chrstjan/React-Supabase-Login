import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Paths } from "./Paths";
import { MainLayout } from "../Layouts/MainLayout";
import { ProtecedLayout } from "../layouts/ProtecedLayout";
import { LandingPage } from "../pages/LandingPage";
import { LoginPage } from "../pages/LoginPage";
import { SongsPage } from "../pages/SongsPage";
import { useEffect } from "react";
import { supabase } from "../../supabaseClient";

export const PageRouter = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    const getUserSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (session) {
        setUser(session.user);
      }
    };
    getUserSession();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === "SIGNED_IN" && session) {
          setUser(session.user);
        } else if (event === "SIGNED_OUT") {
          setUser(null);
        }
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [setUser]);

  return (
    <Routes>
      <Route
        path={Paths.home}
        element={<MainLayout user={user} setUser={setUser} />}
      >
        <Route
          index
          element={
            user ? (
              <SongsPage user={user} />
            ) : (
              <LandingPage user={user} setUser={setUser} />
            )
          }
        />
        <Route
          path={Paths.login}
          element={<LoginPage user={user} setUser={setUser} />}
        />
        <Route element={<ProtecedLayout user={user} />}>
          <Route path={Paths.songs} element={<SongsPage />} />
        </Route>
        <Route path={Paths.pageNotFound} element={<h2>404 not found...</h2>} />
      </Route>
    </Routes>
  );
};
