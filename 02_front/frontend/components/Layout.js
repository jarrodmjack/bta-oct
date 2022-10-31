import Navbar from "./Navbar"
import Footer from "./Footer"

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col justify-between min-h-screen">
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}
export default Layout