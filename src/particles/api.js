import axios from "axios";

export async function postApi({ url, routes = "", data = {}, headers = {} }) {
  // console.log('axios', routes, data)
  return await axios
    .post(`${import.meta.env.VITE_REACT_API_URL}/${routes}`, data, {
      headers: {
        Authorization: localStorage.getItem("id_token"),
        ...headers,
      },
    })
    .then((response) =>
      response?.data?.success ? response?.data?.data : response?.data
    )
    .catch((error) => console.error(error));
}

export async function getApi({
  url,
  routes = "",
  headers = {
    Authorization: localStorage.getItem("id_token"),
  },
}) {
  return await axios
    .get(`${import.meta.env.VITE_REACT_API_URL}/${routes}`, {
      headers,
    })
    .then((response) =>
      response?.data?.success ? response?.data?.data : response?.data
    )
    .catch((error) => console.error(error));
}
