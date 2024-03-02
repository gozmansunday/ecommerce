const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

export const getBillboard = async (id: string): Promise<Billboard> => {
  const res = await fetch(`${URL}/${id}`, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed to fetch billboard!");
  }

  return res.json();
};