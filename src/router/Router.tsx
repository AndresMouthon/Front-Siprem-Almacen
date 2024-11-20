import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/public/auth/LoginPage";
import { AuthGuard } from "../utils/guards/AuthGuard";
import PrivateRouter from "./PrivateRouter";

function Router() {
    return (
        <BrowserRouter>
            <Routes >
                {/* Public routes */}
                <Route path="*" element={<>Not found</>} />
                <Route path={"/"} element={<>Home</>} />
                <Route path={"/login"} element={<LoginPage />} />

                {/* Private routes */}
                <Route element={<AuthGuard />} >
                    <Route path={`/app/*`} element={<PrivateRouter />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router
