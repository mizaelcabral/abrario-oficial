import AnimationProvider from "@/components/animationProvider";
import FooterTwo from "@/components/footer/footerTwo";
import Header from "@/components/header";
import TopHeaderTwo from "@/components/header/topHeaderTwo";
import { Outlet, ScrollRestoration } from "react-router-dom";

const LayoutTwo = () => {
  return (
    <>
      <AnimationProvider>
        <TopHeaderTwo />
        <Header className="header-2" logo="/img/logo/abrario-logo.png" />
        <Outlet />
        <FooterTwo />
        <ScrollRestoration />
      </AnimationProvider>
    </>
  );
};

export default LayoutTwo;
