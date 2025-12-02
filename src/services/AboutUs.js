const API_URL = process.env.REACT_APP_URL_API;

export async function getAboutUs() {
  const response = await fetch(`${API_URL}/api/about-uses`);
  if (!response.ok) {
    throw new Error("No se pudo obtener la información de About Us");
  }
  return await response.json();
}
