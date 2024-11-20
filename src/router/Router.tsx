import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/public/auth/LoginPage";

function Router() {
    return (
        <BrowserRouter>
            <Routes >
                <Route path="*" element={<>Not found</>} />
                <Route path={"/"} element={<>Home</>} />
                <Route path={"/login"} element={<LoginPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
