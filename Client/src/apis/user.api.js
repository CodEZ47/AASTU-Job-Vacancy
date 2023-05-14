import { BASE_URL } from "../constant";
export async function login(email, password){
    const user = {
        email,
        password
    }
    const auth = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    });
    return await auth.json();
}
export async function register(user){
    const auth = await fetch(`${BASE_URL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    });
    return await auth.json();
}
