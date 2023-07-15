import "./Header.css";
import NavBar from "../NavBar//NavBar";
import { useLocation } from "react-router-dom";
import { MdAddShoppingCart } from "react-icons/md";
import CartContext from "../../contexts/CartContext";
import { useContext } from "react";
const Header = () => {
  let { pathname } = useLocation();
  let title = "";
  const { carts } = useContext(CartContext);

  switch (pathname) {
    case "/":
      title = "Shop";
      break;
    case "/about":
      title = "About";
      break;
    case "/blog":
      title = "Blog";
      break;
    case "/contact":
      title = "Contact";
      break;
    default:
      title = "";
      break;
  }

  return (
    <div className="Header">
      <NavBar />
      <div className="cart-icon">
        <h4>{carts.length}</h4>
        <MdAddShoppingCart />
      </div>
      <h3>{title}</h3>
    </div>
  );
};

export default Header;
