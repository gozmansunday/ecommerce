import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

type CheckoutType = {
  productIds: string[];
};

export async function checkout(data: CheckoutType) {
  const response = await axios.post(`${baseUrl}/checkout`, data);
  return response.data;
}