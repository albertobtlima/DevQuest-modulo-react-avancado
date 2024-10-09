import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme-context";

export const Card = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div style={{ color: theme.color, backgroundColor: theme.background }}>
      <h1>Título do Card</h1>
      <p>
        Texto do card, ajbwbdv ovnuowbvowv oubdv ovuwdbvojwvdb ovuobv, nuiwd, niudwbcuivbi ijbdvjbv
        jibdvibwv, bijdwbviwjdvb. Texto do card, ajbwbdv ovnuowbvowv oubdv ovuwdbvojwvdb ovuobv,
        nuiwd, niudwbcuivbi ijbdvjbv jibdvibwv, bijdwbviwjdvb.
      </p>
    </div>
  );
};
