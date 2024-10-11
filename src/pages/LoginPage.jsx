import { LoginForm } from "../components/LoginForm/LoginForm";

export const LoginPage = ({ user, setUser }) => {
  return (
    <div>
      <LoginForm user={user} setUser={setUser} />
    </div>
  );
};
