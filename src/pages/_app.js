import Header from "@/components/Header";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <div className="mt-[65px]">
        <Component {...pageProps} />
      </div>
      <Toaster position="bottom-right" reverseOrder={false} />
    </>
  );
}
