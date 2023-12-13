// Layout
// Import 
    // React Router Dom
    import { Outlet } from "react-router-dom";
    // Navigation
        import Navigation from './Navigation/Navigation'
    // Footer 
        import Footer from "./Footer/Footer";

function Layout () {
    return (
        <>
            <Navigation />
                <Outlet />
            <Footer/>
        </>
    )
}
export default Layout