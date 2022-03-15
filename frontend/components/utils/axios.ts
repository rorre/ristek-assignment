import axios, { AxiosResponse } from "axios";
import toast from "react-hot-toast";
import { DefaultResponse, ErrorData, ErrorResponse } from "types/responses";
import { formatRequestError } from "./response";

const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

function submitHandler<DefaultResponse>(
  url: string,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  onSuccess?: (response: AxiosResponse<DefaultResponse>) => void,
  method?: "POST" | "PUT" | "PATCH" | "DELETE"
): React.FormEventHandler<HTMLFormElement>;
function submitHandler<T>(
  url: string,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  onSuccess?: (response: AxiosResponse<T>) => void,
  method: "POST" | "PUT" | "PATCH" | "DELETE" = "POST"
): React.FormEventHandler<HTMLFormElement> {
  return async (event) => {
    event.preventDefault();
    const toastId = toast.loading("Sending...");

    setIsLoading(true);

    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData);
    try {
      let response = await axiosInstance.request({
        url: url,
        method: method,
        data: formJson,
      });
      toast.success(response.data.message || "Done!", { id: toastId });

      if (onSuccess) onSuccess(response);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        let message: string | ErrorData[] =
          err.response?.data?.detail ?? err.message ?? "An error occured.";

        if (typeof message === "string") {
          toast.error(message, { id: toastId });
        } else {
          if (err.response?.status === 422) {
            // Data sent is not satisfied by server
            let responseData: ErrorResponse = err.response.data;

            // Never happens, just let typescript happy
            if (typeof responseData.detail === "string") {
              return;
            }

            let toastMsg = formatRequestError(responseData.detail).join("\n");
            toast.error(toastMsg, { id: toastId });
          } else {
            // Anything else
            toast.error("An error has occured.", { id: toastId });
          }
        }
      } else {
        // Not an axios error, what happened?
        console.error(err);
        toast.error("An error occured.", { id: toastId });
      }
    }
    setIsLoading(false);
  };
}

export { axiosInstance, submitHandler };
