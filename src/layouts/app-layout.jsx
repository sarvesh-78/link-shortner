import Header from "@/components/header";
import {Outlet} from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="">
      <main className="min-h-screen">
        <Header />
        <Outlet />
      </main>
      {/* Footer */}
      <div className="p-5 text-center text-2xl font-semibold border-t-4 mt-10">
        Made by  Microsoft Club Sathyabama
      </div>
    </div>
  );
};

export default AppLayout;