import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();
const baseUrl = "http://localhost:5129";

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Проверява дали юзер е логнат
  useEffect(() => {
    async function checkAuth() {
      try {
        const res = await fetch(`${baseUrl}/api/auth/me`, {
          credentials: "include",
        });

        if (res.ok) {
          const text = await res.text();

          if (text) {
            const data = JSON.parse(text);
            setUser(data);
          } else {
            setUser(null);
          }
        } else {
          setUser(null);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    checkAuth();
  }, []);

  // LOGIN -------------------------------------------------
  async function login(email, password) {
    const res = await fetch(`${baseUrl}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      throw new Error("Invalid email or password");
    }

    const me = await fetch(`${baseUrl}/api/auth/me`, {
      credentials: "include",
    });

    const userData = await me.json();
    setUser(userData);
    return userData;
  }

  // REGISTER ---------------------------------------------
  async function register(firstName, lastName, email, password) {
    const res = await fetch(`${baseUrl}/api/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password,
      }),
    });

    if (!res.ok) {
      throw new Error("Registration failed");
    }

    // auto-login
    return await login(email, password);
  }

  // LOGOUT ------------------------------------------------
  async function logout() {
    await fetch(`${baseUrl}/api/auth/logout`, {
      method: "POST",
      credentials: "include",
    });
    setUser(null);
  }

  const value = {
    user,
    loading,
    login,
    register,
    logout,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
