import React from "react";
import UrlForm from "../components/UrlForm";
import UserUrl from "../components/UserUrl";
import { useSelector } from "react-redux";

const DashboardPage = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4 pt-10">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">URL Shortener</h1>
        <UrlForm />
      </div>
      {isAuthenticated && (
        <div className="mt-8 w-full max-w-4xl">
          <UserUrl />
        </div>
      )}
    </div>
  );
};

export default DashboardPage;
