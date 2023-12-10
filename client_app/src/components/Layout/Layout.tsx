
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { RefProvider } from "./RefContext";

export default function RootLayout() {
    return (<>
        <RefProvider>
            <Header />
            <Outlet />
            <Footer />
        </RefProvider>
    </>
    )
}
