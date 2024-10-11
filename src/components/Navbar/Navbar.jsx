import { NavLink } from "react-router-dom";
import { Paths } from "../../router/Paths";

export const Navbar = () => {
  const navMenu = [
    {
      path: Paths.songs,
      text: "Home",
    },
  ];

  return (
    <nav>
      <ul>
        {navMenu.map((item) => {
          return (
            <li key={item.text}>
              <NavLink to={item.path}>{item.text}</NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
