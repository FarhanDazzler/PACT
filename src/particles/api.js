import axios from "axios";

export async function getApi({
  url,
  routes = "",
  data = {},
  config = {
    headers: {
      Authorization: localStorage.getItem("id_token"),
    },
  },
}) {
  return axios
    .get(`http://localhost:3001/${routes}`, data, {
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
