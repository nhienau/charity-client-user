import { parseJwt } from "@/utils/helpers";

export async function login(username, password) {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });
  if (res.status === 401) {
    throw new Error("Login failed");
  }
  const data = await res.json();
  const { accessToken } = data;

  if (data.accessToken) {
    return parseJwt(accessToken);
  } else {
    throw new Error("Login failed");
  }
}

export async function getUserInfo() {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/info`, {
    credentials: "include",
  });
  const data = await res.json();
  if (data.status === 400) {
    return null;
  }
  return data;
}

export async function logout() {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/logout`, {
    credentials: "include",
  });
  const data = await res.text();
  return data;
}
