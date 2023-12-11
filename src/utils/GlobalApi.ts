import axios from "axios";

export const SendEmail = (data) => axios.post("/api/send", data);
