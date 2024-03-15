const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

export const getSizes = async (): Promise<Size[]> => {
  const res = await fetch(URL, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed to fetch sizes!");
  }

  return res.json();
};