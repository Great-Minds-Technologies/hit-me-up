// pages/Cart.js
import React, { useState } from "react";
import CartItem from "../components/CartItem";
import OutlineButton from "../components/OutlineButton";
import "./css/Cart.css";
import DummyImg from "../assets/images/Asset_58x.png";
import axios from "axios";
import { useEffect } from "react";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [coupon, setCoupon] = useState("");
  const [subtotal, setSubTotal] = useState(0);

  const handleRemove = async (id) => {
    try {
      await axios.put(`http://localhost:5000/api/users/removeFromCart/${email}`,{
        productID: id
      });
      console.log("removedProduct");
      fetchProducts();
    } catch (error) {
      
    }
  };

  
  const discount = coupon === "DISCOUNT10" ? 0.1 * subtotal : 0;
  const grandTotal = subtotal - discount;
  const [displayMaxCount, setDisplayMaxCount] = useState(20);
  const [email, setEmail] = useState("");
   const fetchProducts = async () => {
      try {
        const userRes = await axios.get(
          `http://localhost:5000/api/users/${email}`
        );
        console.log("Found user" + userRes);

        const productIDs = userRes.data.cartIds;
        const productPromises = productIDs.map(async (id) => {
          try {
            const res = await axios.get(
              `http://localhost:5000/api/products/${id}`
            );
            return res.data;
          } catch (err) {
            //run logic to remove this from the users wishlist
            console.log(`Product not found: ${id}`, err.response?.status);
            return null;
          }
        });
        let productResponses = await Promise.all(productPromises);
        productResponses = productResponses.filter((data) => data != null);
        console.log(productResponses);
        let mergedResponses = [];

        productResponses.forEach((product) => {
          const index = mergedResponses.findIndex(
            (item) => item.product._id === product._id
          );

          if (index !== -1) {
            mergedResponses[index].quantity += 1;
          } else {
            mergedResponses.push({ product, quantity: 1 });
          }
        });
        console.log(mergedResponses);

        setCartItems(mergedResponses.map((res) => res));
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };
  useEffect(() => {
    const storedEmail = JSON.parse(localStorage.getItem("email"));
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  useEffect(() => {
    if (!email) return;

    console.log("Email found:", email);
    
    fetchProducts();
    
  }, [email]);
  useEffect(() =>{
    const tempSubTotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  setSubTotal(tempSubTotal);
  }, [cartItems])

  // Function to handle increase and decrease of quantity

 const handleIncrease = async (productId) => {
  if (!email) {
    console.warn("Email not set yet");
    return;
  }

  try {
   await axios.put(`http://localhost:5000/api/users/increaseFromCart/${email}`, {
      productID: productId
    });
    fetchProducts(); 
  } catch (error) {
    console.error("Error increasing quantity:", error);
  }
};

const handleDecrease = async (productId) => {
  if (!email) {
    console.warn("Email not set yet");
    return;
  }

  try {
    await axios.put(`http://localhost:5000/api/users/decreaseFromCart/${email}`, {
      productID: productId
    });
    fetchProducts();
  } catch (error) {
    console.error("Error decreasing quantity:", error);
  }
};



  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      <table className="cart-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <CartItem key={item.product._id} item={item} onRemove={handleRemove} onIncrease={handleIncrease}
               onDecrease={handleDecrease}/>
            ))
          ) : (
            <tr>
              <td colSpan="4" style={{ textAlign: "center" }}>
                Your cart is empty.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <div className="cart-summary">
        <div className="summary-box">
          <h3>Summary</h3>
          <div className="summary-line">
            <span>Subtotal:</span>
            <span>R{subtotal.toFixed(2)}</span>
          </div>
          <div className="summary-line">
            <label htmlFor="coupon">Coupon:</label>
            <input
              type="text"
              id="coupon"
              placeholder="Enter coupon"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
            />
          </div>
          <div className="summary-line total">
            <span>Grand Total:</span>
            <span>R{grandTotal.toFixed(2)}</span>
          </div>

          <button>BUY</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
