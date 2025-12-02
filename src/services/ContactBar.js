const API_URL = process.env.REACT_APP_URL_API;

export async function getContactBar() {
  const response = await fetch(`${API_URL}/api/contact-bar`);
  if (!response.ok) {
    throw new Error("No se pudo obtener el ContactBar");
  }
  return await response.json();
}

export async function getContactBarSocialNetwork() {
  const response = await fetch(`${API_URL}/api/contact-bar-social-network`);
  if (!response.ok) {
    throw new Error("No se pudo obtener el ContactBarSocialNetwork");
  }
  return await response.json();
}
