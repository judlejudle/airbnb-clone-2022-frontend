import axios from "axios"
const instance = axios.create({
    baseURL: "http://127.0.0.1:8080/api/v1"
})

export const getRooms = () => instance.get("rooms/").then((response) => response.data)

export const getRoom = () => instance.get(`rooms/2`).then((response)=>response.data)