import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import PRODUCTS from "./../App/PRODUCTS.json";
import ProductItem from "../ProductItem/ProductItem";

const HomePage = () => {
  return (
    <>
      <Header />
      <ProductItem data={PRODUCTS} />
      <Footer />
    </>
  );
};

export default HomePage;
