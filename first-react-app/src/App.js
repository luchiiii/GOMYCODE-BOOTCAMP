import products from "./product";
import ProductCard from "./components/ProductCard";

const App = () => {
  return (
    <section className="container">
      <div className="row">
        {products.length > 0 &&
          products.map((product) => {
            return <ProductCard 
            key={product.id}
            productName={product.name}
            productPrice={product.price}
            productImage={product.image}
            productDescription={product.description}
            />;
          })}

        {products.length === 0 && <h1>No Products Found</h1>}
      </div>
    </section>
  );
};

export default App;
