import React from "react";

const LoadingSpinner: React.FC = () => (
  <div className="flex justify-center items-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
  </div>
);

export default LoadingSpinner;
