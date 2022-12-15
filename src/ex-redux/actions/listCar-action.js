import { getApi } from "../../config/fetchApi.js";

export const BarchartData = (state) => async (dispatch) => {
  try {
    const { data } = await getApi("admin/v2/order", {
      from: "2022-01-01",
      until: "2022-01-31",
    });
    //     console.log(data);
    dispatch({
      type: "BAR_CHART",
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};
