import { fetchApi } from "../../config/fetchApi.js";

export const BarchartData = (state) => async (dispatch) => {
  try {
    const { data } = await fetchApi("admin/order/reports", {
      from: "2022-01-01",
      until: "2022-01-31",
    });
    console.log("x");
    console.log(data);
    dispatch({
      type: "FETCH_DATA_CHART_BAR",
    });
  } catch (error) {
    console.log(error.message);
  }
};
