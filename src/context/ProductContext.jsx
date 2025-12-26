import React, { createContext, useContext, useEffect, useState } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  /* Load from localStorage */
  useEffect(() => {
    const saved =
      JSON.parse(localStorage.getItem("products")) || [];
    setProducts(saved);
  }, []);

  /* Persist to localStorage */
  useEffect(() => {
    localStorage.setItem(
      "products",
      JSON.stringify(products)
    );
  }, [products]);

  /* Add product */
  const addProduct = (product) => {
    setProducts((prev) => [...prev, product]);
  };

  /* Delete product */
  const deleteProduct = (id) => {
    setProducts((prev) =>
      prev.filter((p) => p.id !== id)
    );
  };

  /* Update product */
  const updateProduct = (updatedProduct) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === updatedProduct.id
          ? updatedProduct
          : p
      )
    );
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        addProduct,
        deleteProduct,
        updateProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

/* Custom hook */
export const useProducts = () =>
  useContext(ProductContext);
