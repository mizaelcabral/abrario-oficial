import "@/assets/css/all.min.css";
import "@/assets/css/animate.css";
import "@/assets/scss/main.scss";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { RouterProvider } from "react-router-dom";
import BackTop from "./components/backTop";
import FloatingWhatsapp from "./components/floatingWhatsapp";
import MouseCursor from "./components/mouseCursor";
import Preloader from "./components/preloader";
import { router } from "./route/router";
const App = () => {
  return (
    <>
      <Preloader />
      <BackTop />
      <FloatingWhatsapp />
      <MouseCursor />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
