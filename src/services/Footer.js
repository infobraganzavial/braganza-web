const API_URL = process.env.REACT_APP_URL_API;

export async function getFooter() {
  const response = await fetch(`${API_URL}/api/footer`);
  if (!response.ok) {
    throw new Error("No se pudo obtener el footer");
  }
  return await response.json();
}

export async function getSocialNetworks() {
  const response = await fetch(`${API_URL}/api/social-networks`);
  if (!response.ok) {
    throw new Error("No se pudo obtener las redes sociales");
  }
  return await response.json();
}
