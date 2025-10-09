import { Outlet, useNavigation } from "react-router";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Loader from "../../components/Loader";

const Root = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="flex flex-col min-h-screen relative">
      <Navbar />
      <main className="flex-grow mt-[80px]">
        {isLoading && <Loader />}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Root;