import { useState } from "react";
import { supabase } from "../../../supabaseClient";
import style from "./LoginForm.module.scss";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      console.error(error.message);
    } else {
      console.log("Logged in:", data);
    }
  };
  return (
    <form className={style.formStyling} onSubmit={(e) => handleLogin(e)}>
      <h2>Log in</h2>
      <fieldset>
        <label htmlFor="email">Email:</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          value={email}
          name="email"
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          value={password}
          name="password"
          required
        />
      </fieldset>
      <input type="submit" value="Login" />
    </form>
  );
};
