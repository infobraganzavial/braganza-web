const API_URL = process.env.REACT_APP_URL_API;

export async function getClients() {
  const response = await fetch(`${API_URL}/api/clients`);
  if (!response.ok) {
    throw new Error("No se pudo obtener los Clientes");
  }
  return await response.json();
}
