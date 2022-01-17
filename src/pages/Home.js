import React from "react";
import { useSelector } from "react-redux";

export default function Home() {
  const isUserConnected = useSelector((state) => state.auth.value);

  return (
    <div className="container p-5">
      {!isUserConnected ? (
        <>
          <h1 className="display-3 text-light">
            Welcome on your Note application
          </h1>
          <p className="text-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore
          </p>
          <p className="text-light">
            Please register or log in to use the application.
          </p>
        </>
      ) : (
        <>
          <h1 className="display-3 text-light">
            Welcome you !
          </h1>
          <p className="text-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </>
      )}
    </div>
  );
}
