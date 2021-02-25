import axios from "axios";

const instance = axios.create({
  baseURL: `http://localhost:8080/api`,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});

export async function getFilteredName(filteredSportBuildName) {
  return (await instance.get(`/items/search/${filteredSportBuildName}`)).data;
}

export default instance;
