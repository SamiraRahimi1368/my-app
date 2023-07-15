import React, { useContext, useReducer } from "react";
import Image from "../Image/Image";
import "./ProductItem.css";
import { MdAdd, MdRemove } from "react-icons/md";
import Button from "../Button/Button";
import ThemeContext from "../../contexts/ThemeContext";
import ProductItemReducer from "./ProductItemReducer";
import CartContext from "../../contexts/CartContext";

const ProductItem = ({ data }) => {
  const themeValues = useContext(ThemeContext);

  return (
    <ul className="products">
      {data.map((product) => (
        <ProductItemDetails key={product.id} product={product} />
      ))}
    </ul>
  );
};

const ProductItemDetails = ({ product }) => {
  const themeValues = useContext(ThemeContext);
  const {dispatchCart} = useContext(CartContext);

  // const [added, setAdded] = useState(false);
  const [state, dispatch] = useReducer(ProductItemReducer, {
    added: false,
  });
    

  const handleAdd = () => {
    // setAdded(!added);
    if (state.added) {
      dispatch({
        type: "REMOVE_FROM_CART",
      });
      dispatchCart({
        type: "REMOVE_FROM_CART",
      });
    } else {
      dispatch({
        type: "ADD_TO_CART",
      });
      dispatchCart({
        type: "ADD_TO_CART",
      });
    }
  };
  console.log("state", state);
  return (
    <li>
      <h3>{product.name}</h3>
      <Image imgSrc={product.image} />
      <span>{product.price}</span>
      <Button
        handleClick={handleAdd}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {state.added ? (
          <>
            <MdRemove /> Remove from Cart
          </>
        ) : (
          <>
            <MdAdd /> Add to Cart
          </>
        )}
      </Button>
    </li>
  );
};

export default ProductItem;
