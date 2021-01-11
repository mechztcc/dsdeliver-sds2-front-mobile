import axios from "axios";

const API_URL = 'https://alberto-paiva-ds-delivery.herokuapp.com'

export function fetchOrders() {
    return axios(`${API_URL}/orders`);
}