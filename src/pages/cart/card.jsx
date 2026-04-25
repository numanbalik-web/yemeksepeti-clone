import { Minus, Plus, Trash } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  addToCart,
  updateAmount,
  deleteFromBasket,
} from "../../redux/actions/cart-actions";

const Card = ({ product }) => {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(updateAmount(product.id, product.amount + 1));
  };

  const handleDecrease = () => {
    dispatch(updateAmount(product.id, product.amount - 1));
  };

  const handleDelete = () => {
    dispatch(deleteFromBasket(product.id));
  };

  return (
    <div className="box overflow-hidden cursor-pointer transition duration-300 hover:-translate-y-1 mb-6 flex gap-4 p-4 border border-zinc-200">
      <img
        src={product.photo}
        alt={product.title}
        className="size-27.5 rounded-2xl object-cover"
      />

      <div className="w-full flex flex-col gap-4">
        <Link
          to={`/restaurant/${product.restaurantId}`}
          className="text-xl font-semibold text-red-500 hover:underline"
        >
          {product.title}
        </Link>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-lg font-semibold text-red-500">{product.price}₺</p>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-3 rounded-full border border-red-100 bg-white-50/70 px-2">
              <button
                disabled={product.amount === 1}
                onClick={handleDecrease}
                className="card-button"
              >
                <Minus className="size-4" />
              </button>

              <span className="text-lg font-semibold">{product.amount}</span>

              <button onClick={handleIncrease} className="card-button">
                <Plus className="size-4" />
              </button>
            </div>

            <button
              onClick={handleDelete}
              className="rounded-full border border-red-100 p-2 text-red-400 hover:bg-red-50 hover:text-red-600"
            >
              <Trash className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
