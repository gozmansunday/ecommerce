const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`;

export const getColors = async (): Promise<Color[]> => {
  const res = await fetch(URL, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed to fetch colors!");
  }

  return res.json();
};