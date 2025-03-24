import React, { useContext, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import SaltSection from "../components/SaltSection";
import ReviewSection from "../components/ReviewSection";
import CompareSection from "../components/CompareSection";
import FAQSection from "../components/FAQSection";
import Header from "../components/Header";

const MainPage = () => {
  const { token, products, setProducts } = useContext(AuthContext);

  useEffect(() => {
    if (!token) return;

    axios
      .get("http://localhost:5000/products", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Failed to load products:", err));
  }, [token]);

  return (
    <>
      <Header />
      <div style={{ padding: "20px" }}>
        <h2>Compare Medicines 💊</h2>

        <CompareSection />

        {products.length === 0 ? (
          <p>Loading products...</p>
        ) : (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}></div>
        )}

        {products[0] && (
          <>
            <SaltSection productId={products[0].id} />
            <ReviewSection productId={products[0].id} />
          </>
        )}
        <FAQSection />
      </div>
    </>
  );
};

export default MainPage;
