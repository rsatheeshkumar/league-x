import axios from "axios";

axios.defaults.baseURL =
  "https://cors-anywhere.herokuapp.com/http://15.206.110.130:5001";
axios.defaults.headers.common["x-access-token"] =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTg1NjQxLCJtb2JpbGVfbnVtYmVyIjoiODQ5OTQ5NDk0OSIsImlzVGVtcFVzZXIiOmZhbHNlLCJ0ZWFtX25hbWUiOiJ0ZXN0MTQiLCJpYXQiOjE2MTU4MDUwOTEsImV4cCI6MTAyNTU4MDUwOTEsImF1ZCI6IjE4NTY0MSIsImlzcyI6IkxlYWd1ZSBYIn0.sBzG7bkv3hixuVye2LPJXi7q3XwubLXu2C1aB4nlW3k";

export default axios;
