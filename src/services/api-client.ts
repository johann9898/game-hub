import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "223a597e38324328a1582ad5f31f73cb"
    }
});