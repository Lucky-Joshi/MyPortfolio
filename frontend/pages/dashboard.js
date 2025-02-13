import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import jwt_decode from "jwt-decode";

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) router.push("/login");
    else setUser(jwt_decode(token));
  }, []);

  return user ? <h1>Welcome, {user.role === "seller" ? "Seller" : "Buyer"} {user.name}!</h1> : <p>Loading...</p>;
}
s