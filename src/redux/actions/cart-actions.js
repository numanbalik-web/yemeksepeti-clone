import api from "../../utils/api";
import AT from "./action-types";

export const getCart = () => (dispatch) => {
  dispatch({ type: AT.CART_LOADING });

  api
    .get("/cart")
    .then((res) => dispatch({ type: AT.CART_SUCCESS, payload: res.data }))
    .catch((err) => dispatch({ type: AT.CART_ERROR, payload: err.message }));
};

export const addToCart = (product) => (dispatch) => {
  const newItem = {
    id: product.id,
    title: product.title,
    price: product.price,
    photo: product.photo,
    restaurantId: product.restaurantId,
    amount: 1,
  };

  api
    .post("/cart", newItem)

    .then((res) => dispatch({ type: AT.ADD_TO_CART, payload: res.data }))
    .catch(() => alert("Bir sorun oluştu"));
};

export const updateAmount = (productId, newAmount) => (dispatch) => {
  api
    .patch(`/cart/${productId}`, { amount: newAmount })

    .then((res) => dispatch({ type: AT.UPDATE_AMOUNT, payload: res.data }));
};

export const deleteFromBasket = (productId) => (dispatch) => {
  api
    .delete(`/cart/${productId}`)

    .then(() => dispatch({ type: AT.DELETE_FROM_CART, payload: productId }))
    .catch(() => alert("işlem başarısız"));
};
