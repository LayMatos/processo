// src/components/ErrorMessage.tsx
import React from "react";

const ErrorMessage: React.FC<{ message: string }> = ({ message }) => (
  <div className="text-center text-xl mt-10 text-red-500 font-semibold">{message}</div>
);

export default ErrorMessage;
