import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { token, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px 24px",
        backgroundColor: "#f5f5f5",
        borderBottom: "1px solid #ddd",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <img
          src={"https://medingen.in/migfulllogo.png"}
          alt="Medingen Logo"
          style={{ height: "40px" }}
        />
        <h2 style={{ margin: 0 }}>Medingen</h2>
      </div>
      {token && (
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span style={{ margin: 0, fontWeight: "bold" }}>👤 Logged in</span>
          <button
            onClick={handleLogout}
            style={{
              backgroundColor: "#f44336",
              color: "white",
              border: "none",
              borderRadius: "4px",
              padding: "6px 12px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Logout
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
