import axios from "axios";
import { url } from "../login/api";
import { Orders } from "../../types/orders";

export async function getOrders(): Promise<Orders[]> {
    const response = await axios.get<Orders[]>(`${url}/orders`);
    return response.data;
}