import { useRouter } from "next/router";
import Meta from "../components/Meta";
import Navbar from "../components/Navbar";

const hideNavbarPages = ["/success"];
export default function AppLayout({ children }) {
  const router = useRouter();

  const hideNabar = hideNavbarPages.includes(router.asPath);

  return (
    <>
      <Meta />
      {hideNabar ? null : <Navbar />}
      {children}
    </>
  );
}
