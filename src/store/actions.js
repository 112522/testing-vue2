import { fetchData } from "../api/api";

export default {
  increment: (context) => {
    context.commit("increment");
  },
  fetchData: (context) => {
    fetchData().then((data) => {
      context.commit("setUsers", data);
    });
  },
};
