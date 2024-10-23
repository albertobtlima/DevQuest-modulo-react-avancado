import { useState } from "react";
import { Products } from "../../components/products";

const CartProducts = () => {
  const cartProducts = useState((state) => state.cartProducts);

  return (
    <main>
      <h1>Cart Products</h1>
      <section>
        <Products products={cartProducts} />
      </section>
    </main>
  );
};

export { CartProducts };
