"use client";
import { Toaster } from "react-hot-toast";

export default function ToasterProvider() {
  return (
    <Toaster
      position="bottom-right"
      toastOptions={{
        style: {
          background: "#1A1A1A",
          color: "#F5F5F5",
          border: "1px solid #DD0000",
          borderRadius: "2px",
        },
      }}
    />
  );
}
