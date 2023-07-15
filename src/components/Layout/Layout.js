import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import CartContext from "../../contexts/CartContext";
import CartReducer from "../../reducers/CartReducer";

import { useReducer } from "react";


const Layout = () => {
  const [state, dispatch] = useReducer(CartReducer, {
    carts: [],
  });
  return (
    <CartContext.Provider
      value={{
        carts: state.carts,
        dispatchCart:dispatch,
      }}
    >
      <div>
        <Header />
        <Footer />
      </div>
    </CartContext.Provider>
  );
};

export default Layout;
