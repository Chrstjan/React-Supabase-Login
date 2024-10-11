import { useState } from "react";
import { supabase } from "../../../supabaseClient";
import style from "./SignUpForm.module.scss";
import { Link } from "react-router-dom";

export const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) {
      console.error(error.message);
    } else {
      console.log("Signed up", data);
    }
  };

  return (
    <form className={style.formStyling} onSubmit={(e) => handleSignUp(e)}>
      <header>
        <h2>Sign Up</h2>
        <span>
          Already have an Account? <Link to="/login">Login</Link>
        </span>
      </header>
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
      <input type="submit" value="Sign Up" />
    </form>
  );
};
