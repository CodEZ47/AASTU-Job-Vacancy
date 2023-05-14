import { BASE_URL } from "../constant";
export async function getVacancies() {
    const res = await fetch(`${BASE_URL}/vacancies`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`
        },
      });
    const json = await res.json();
    let d = json.map((vacancy) => {
        return {
          id: vacancy.id,
          title: vacancy.name,
          description: vacancy.description,
          requirement: vacancy.position.requirement,
          applied: vacancy.applied,
        }
    });
    return d;
}
export async function getVacancy(id) {
    const res = await fetch(`${BASE_URL}/vacancies/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`
        },
      });
    const json = await res.json();
    return json;
}
export async function applyVacancy(id, data) {
    console.log(data);
    console.log(JSON.stringify(data)); 
    
    const res = await fetch(`${BASE_URL}/vacancies/${id}/applications`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(data),
      });
    if(!res.ok){
        throw new Error("Something went wrong");
    }
    const json = await res.json();
    return json;
}
export async function createVacancy(data) {
    const res = await fetch(`${BASE_URL}/vacancies`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(data),
      });
    const json = await res.json();
    return json;
}
export async function extendVacancy(id){
    const res = await fetch(`${BASE_URL}/vacancies/${id}/extend`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`
        },
      });
    const json = await res.json();
    return json;
}
export async function getApplicationsUser(){
    const res = await fetch(`${BASE_URL}/vacancies/applications/user`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`
        },
      });
    const json = await res.json();
    return json;
}