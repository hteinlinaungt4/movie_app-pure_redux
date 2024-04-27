import axios from "axios";

export const api = axios.create({
    baseURL : "https://api.themoviedb.org/3"
})

export const api_key = "44335d8613ccc33f41ab9237d9ffe22c"