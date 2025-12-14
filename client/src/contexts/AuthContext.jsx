import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();
const baseUrl = "http://localhost:5129";

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const token = localStorage.getItem("token");
    return token ? { token } : null;
  });

  const [loading, setLoading] = useState(false);

  // LOGIN -------------------------------------------------
  async function login(email, password) {
    setLoading(true);
    try {
      const res = await fetch(`${baseUrl}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        const errText = await res.text();
        throw new Error(errText || "Invalid email or password");
      }

      const data = await res.json(); // { token: "..." }
      localStorage.setItem("token", data.token);

      // 🔹 fetch user info
      const meRes = await fetch(`${baseUrl}/api/auth/me`, {
        headers: { Authorization: `Bearer ${data.token}` },
      });
      const meData = await meRes.json();

      // save token + user data
      setUser({ token: data.token, ...meData });

      return meData;
    } finally {
      setLoading(false);
    }
  }


  // REGISTER ---------------------------------------------
  async function register(firstName, lastName, email, password) {
    const res = await fetch(`${baseUrl}/api/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstName, lastName, email, password }),
    });

    if (!res.ok) {
      const errText = await res.text();
      throw new Error(errText || "Registration failed");
    }

    // auto-login
    return await login(email, password);
  }

  // LOGOUT ------------------------------------------------
  function logout() {
    localStorage.removeItem("token");
    setUser(null);
  }

  // helper: get token
  const getToken = () => (user ? user.token : null);

  const value = {
    user,
    loading,
    login,
    register,
    logout,
    getToken,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}