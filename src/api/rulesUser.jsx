import API from "./rulesApi";

export async function loggin(user) {
  let url = "/usuario/auth";

  return await API.post(url, null, {
    params: {
      password: user.password,
      userName: user.userName,
    },
  })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
      }
      return response.status;
    })
    .catch((error) => {
      throw Error(error || "ERROR AL PROCESAR LA SOLICITUD");
    });
}
