import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <h1>i am main layout</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;