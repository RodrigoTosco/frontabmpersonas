import API from "./rulesApi";

export async function obtenerPersonas(search) {
  let url = "/persona/paginado";
  return await API.get(url, {
    params: {
      filtro: search.filtro,
      pageNumber: search.pageNumber,
      pageSize: search.pageSize,
    },
  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw Error(error || "Error procesando la solicitud");
    });
}
