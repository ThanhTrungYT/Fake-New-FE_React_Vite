export async function predictNews(payload: {
  text?: string;
  url?: string;
}) {
  const res = await fetch(`${process.env.API}` + "/api/predict/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.error || "API error");
  }

  return data;
}