import axios from "axios";
import React, { useState } from "react";

const LoginBox = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData);
    try {
      let response = await axios.post(
        process.env.NEXT_PUBLIC_API_URL + "/auth/login",
        formJson
      );
      if (response.status !== 200) {
        setError(response.data?.message ?? "An error occured.");
      }
    } catch {
      setError("An error occured.");
    }
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col space-y-4 bg-white p-4">
      <h2 className="font-montserrat font-bold text-xl">Login</h2>
      <form onSubmit={onSubmit} className="flex flex-col space-y-4">
        <div className="flex flex-col space-y-2">
          <label
            className="text-gray-700 font-bold font-sans"
            htmlFor="usernameLogin"
          >
            Username
          </label>
          <input
            type="text"
            id="usernameLogin"
            name="username"
            className="border shadow p-2"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label
            className="text-gray-700 font-bold font-sans"
            htmlFor="passwordLogin"
          >
            Password
          </label>
          <input
            type="password"
            id="passwordLogin"
            className="border shadow p-2"
            name="password"
          />
        </div>

        {error && <p className="text-red-700">{error}</p>}
        <button
          className={
            "rounded bg-teal-800 text-white font-bold font-sans p-2 shadow " +
            (isLoading ? "hover:cursor-not-allowed" : "hover:cursor-pointer")
          }
          disabled={isLoading}
        >
          {isLoading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default LoginBox;
