import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "German Mechatronics | Premium Automotive Service",
  description:
    "Premium BMW, Mercedes-Benz, Audi & Porsche service, repair, spare parts and luxury used car sales. Factory-trained technicians. OEM parts. Munich, Germany.",
  keywords: [
    "BMW service Munich",
    "Mercedes repair Germany",
    "Audi specialist",
    "Porsche maintenance",
    "German car workshop",
    "luxury car service",
    "German Mechatronics",
  ],
  openGraph: {
    title: "German Mechatronics | Premium Automotive Service",
    description: "German Engineering. Luxury Performance. Perfect Maintenance.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#1A1A1A",
              color: "#F5F5F5",
              border: "1px solid #C9A84C",
              borderRadius: "2px",
            },
          }}
        />
      </body>
    </html>
  );
}
