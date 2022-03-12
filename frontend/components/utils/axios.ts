import axios, { AxiosResponse } from "axios";
import toast from "react-hot-toast";
import { DefaultResponse } from "types/responses";

const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

function submitHandler(
  url: string,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  onSuccess?: (response: AxiosResponse<DefaultResponse>) => void
): React.FormEventHandler<HTMLFormElement> {
  return async (event) => {
    event.preventDefault();
    const toastId = toast.loading("Sending...");

    setIsLoading(true);

    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData);
    try {
      let response = await axiosInstance.post(url, formJson);
      toast.success(response.data.message, { id: toastId });

      if (onSuccess) onSuccess(response);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        let message =
          err.response?.data?.detail ?? err.message ?? "An error occured.";
        toast.error(message, { id: toastId });
      } else {
        toast.error("An error occured.", { id: toastId });
      }
    }
    setIsLoading(false);
  };
}

export { axiosInstance, submitHandler };
