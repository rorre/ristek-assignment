import axios, { AxiosResponse } from "axios";
import toast from "react-hot-toast";
import { DefaultResponse, ErrorData } from "types/responses";

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
            toast.error("Invalid data sent.", { id: toastId });
          } else {
            toast.error("An error has occured.", { id: toastId });
          }
        }
      } else {
        toast.error("An error occured.", { id: toastId });
      }
    }
    setIsLoading(false);
  };
}

export { axiosInstance, submitHandler };
