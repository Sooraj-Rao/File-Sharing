import axios from "axios";

export const SendEmail = (data:any) => axios.post("/api/send", data);
