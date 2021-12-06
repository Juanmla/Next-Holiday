import axios from "axios";

const KEY = "af0be7c444407de0ab87af89dcd8ee761fde1240";

export default axios.create({
  baseURL: "https://calendarific.com/api/v2",
  params: {
    api_key: `${KEY}`,
    country: "",
    year: 2020,
  },
});
