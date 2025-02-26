import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { ReactNode } from "react";

const CommonLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen mx-auto">{children}</main>
      <Footer />
    </>
  );
};

export default CommonLayout;
