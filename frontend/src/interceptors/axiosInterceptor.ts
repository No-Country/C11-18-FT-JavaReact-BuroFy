import { axios } from "@/lib";
import { SnackbarUtilities, getValidation } from "../utils";

export const AxiosInterceptor = () => {
  axios.interceptors.response.use(
    (response) => {
      console.log("response", response);
      SnackbarUtilities.success("Success");
      return response;
    },
    (error) => {
      SnackbarUtilities.error(getValidation(error.code));
      return Promise.reject(error);
    },
  );
};
