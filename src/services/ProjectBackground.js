const API_URL = process.env.REACT_APP_URL_API;

export async function getProjectBackground() {
  const response = await fetch(`${API_URL}/api/project-background`);
  if (!response.ok) {
    throw new Error("No se pudo obtener los Proyect background");
  }
  return await response.json();
}

export async function getProjects() {
  const response = await fetch(`${API_URL}/api/projects`);
  if (!response.ok) {
    throw new Error("No se pudo obtener los Proyectos");
  }
  return await response.json();
}
