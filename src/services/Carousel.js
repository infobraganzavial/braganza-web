const API_URL = process.env.REACT_APP_URL_API;

export async function getCarousel() {
  const response = await fetch(`${API_URL}/api/carousels`);
  if (!response.ok) {
    throw new Error("No se pudo obtener el Carousel");
  }
  return await response.json();
}
