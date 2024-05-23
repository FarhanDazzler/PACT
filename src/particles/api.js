import axios from "axios";

export async function postApi({
  url,
  routes = "",
  data = {},
  config = {
    headers: {
      Authorization: localStorage.getItem("id_token"),
    },
  },
}) {
  return await axios
    .post(`${process.env.VITE_REACT_API_URL}/${routes}`, data, {
      ...config,
      headers: {
        ...(config?.headers ?? {}),
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
    .get(`http://localhost:3001/${routes}`, {
      headers,
    })
    .then((response) =>
      response?.data?.success ? response?.data?.data : response?.data
    )
    .catch((error) => console.error(error));
}
