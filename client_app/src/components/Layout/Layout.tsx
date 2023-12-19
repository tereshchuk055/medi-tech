
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { RefProvider } from "./RefContext";

export default function RootLayout() {
    return (<>
        <Header />
        <div className="flex flex-col min-h-screen">

            <div className="flex-grow">
                <Outlet />
            </div>
            
        </div>
        <Footer />
    </>
    )
}
