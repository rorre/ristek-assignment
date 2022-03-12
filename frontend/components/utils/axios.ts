import axios, { AxiosResponse } from "axios";

const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

function submitHandler<T>(
  url: string,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setError: React.Dispatch<React.SetStateAction<string>>,
  setMessage: React.Dispatch<React.SetStateAction<string>>,
  onSuccess?: (response: AxiosResponse<T>) => void
): React.FormEventHandler<HTMLFormElement> {
  return async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError("");
    setMessage("");

    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData);
    try {
      let response = await axiosInstance.post(url, formJson);
      if (response.status !== 200) {
        setError(response.data?.detail ?? "An error occured.");
      } else {
        setMessage(response.data.message);
        if (onSuccess) onSuccess(response);
      }
    } catch {
      setError("An error occured.");
    }
    setIsLoading(false);
  };
}

export { axiosInstance, submitHandler };
