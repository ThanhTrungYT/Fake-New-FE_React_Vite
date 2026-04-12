export async function predictNews(payload: {
  text?: string;
  url?: string;
}) {
  const res = await fetch("https://predict-fake-news-python-sklearn.vercel.app/api/predict/", {
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