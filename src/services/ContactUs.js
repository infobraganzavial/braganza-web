const API_URL = process.env.REACT_APP_URL_API;

export async function sendEmail({ name, email, subject, message }) {
  const response = await fetch(`${API_URL}/api/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, subject, message }),
  });

  const data = await response.json().catch(() => null);

  if (!response.ok) {
    throw new Error(data?.error?.message || "No se pudo enviar los emails");
  }

  return data;
}
