import { useSelector } from "react-redux";
import Loader from "../../components/loader";
import Error from "../../components/error";
import CartSummary from "./cart-summary";
import CartEmpty from "./cart-empty";
import Card from "./card";

const Cart = () => {
  const { isLoading, error, cart } = useSelector((store) => store.cartReducer);

  return (
    <div className="container space-y-6">
      <div>
        <h1 className="pill bg-white/80">Siparişiniz</h1>

        <h1 className="text-3xl font-bold">Sepet</h1>

        <p className="muted mt-1">
          Eklediğiniz ürünleri düzenleyin ve teslimata hazırlayın
        </p>
      </div>

      <div className="grid md:grid-cols-[1fr_320px] gap-6 items-start">
        <div>
          {isLoading ? (
            <Loader />
          ) : error ? (
            <Error message={erro} />
          ) : cart.length === 0 ? (
            <CartEmpty />
          ) : (
            cart.map((product) => <Card key={product.id} product={product} />)
          )}
        </div>

        <CartSummary cart={cart} />
      </div>
    </div>
  );
};

export default Cart;
