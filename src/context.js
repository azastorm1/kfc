// import React, { createContext, useState, useEffect } from "react";
// // import { json } from "react-router-dom";
// import product from "./components/Cards/data";
// const context = createContext();
// const ContextProvider = ({ children }) => {
//   // new functionality
// //   const [toggleSidebar, setToggleSidebar] = useState(false);
    
//   // products
  
//   const [array, setArray] = useState([]);
//   const [cart, setCart] = useState([]);
//   const getProduct =  () => {
//     // const response = await fetch("http://localhost:5000/api/v1/products");
//     // const propduct = await response.json();
//     const { data } = product;
//     setArray(data);
//   };

//   useEffect(() => {
//     getProduct();
//   }, []);

//   // add item to the cart
//   function addToCart(newItem) {
//     // localStorage.setItem("text", JSON.stringify(cart));
//     setCart([...cart, newItem]);
//     console.log(newItem);
//   }

// //   useEffect(() => {
// //     const cart = JSON.parse(localStorage.getItem("text"));
// //     if (cart) {
// //       setCart(cart);
// //     }
// //   }, []);

//   function removeCard(id) {
//     let newArray = cart.filter((el) => {
//       return el.id !== id;
//     });
//     localStorage.removeItem("text");
//     setCart(newArray);
//   }

//   return (
//     <context.Provider
//       value={{
//         // toggleSidebar,
//         // setToggleSidebar,
//         array,
//         addToCart,
//         cart,
//         removeCard,
//       }}
//     >
//       {children}
//     </context.Provider>
//   );
// };
// export { ContextProvider, context };