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
    .post(`http://localhost:3001/${routes}`, data, {
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
