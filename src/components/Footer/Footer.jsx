import "./Footer.css";
import { useContext } from "react";
import ThemeContext from "../../contexts/ThemeContext";

const Footer = () => {
  const { setActiveTheme } = useContext(ThemeContext);

  const handleThemeChange = (theme) => {
    setActiveTheme(theme);
  };

  return (
    <div className="Footer">
      Developed By Samira
      <div>
        <button
          onClick={() => handleThemeChange("green")}
          className="green"
        >
          Green
        </button>
        <button
          onClick={() => handleThemeChange("blue")}
          className="blue"
        >
          Blue
        </button>
      </div>
    </div>
  );
};

export default Footer;
