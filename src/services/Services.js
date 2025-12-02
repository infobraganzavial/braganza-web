const API_URL = process.env.REACT_APP_URL_API;

export async function getServices() {
  const response = await fetch(`${API_URL}/api/servicios`);
  if (!response.ok) {
    throw new Error("No se pudo obtener los Servicios");
  }
  return await response.json();
}
