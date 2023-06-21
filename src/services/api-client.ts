import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "1432785e82b64a9ab16337777b21720f"
    }
});