import logo from "../../image/cropped-footer-logo-1.png"
import "../../css/header/navbar.css"
function Navbar (){
    return (
        <div className="container-md navbar-header">
            <nav className="navbar navbar-expand-lg bg-transperant">
                <div className="container-fluid">
                    {/* <a className="navbar-brand " href="#"> */}
                        <img src={logo} />
                    {/* </a> */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse fw-bold" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 me-4 mb-lg-0">
                            <li className="nav-item me-3">
                                <a className="nav-link active" aria-current="page" href="#About">About</a>
                            </li>
                            <li className="nav-item me-3">
                                <a className="nav-link " aria-current="page" href="#Portfolio">Portfolio</a>
                            </li>
                            <li className="nav-item me-3">
                                <a className="nav-link " aria-current="page" href="#Testimonials">Testimonials</a>
                            </li>
                            <li className="nav-item me-3">
                                <a className="nav-link " aria-current="page" href="#Services">Services</a>
                            </li>
                            <li className="nav-item me-3">
                                <a className="nav-link " aria-current="page" href="#">Blog</a>
                            </li>
                            <li className="nav-item me-3">
                                <a className="nav-link" aria-current="page" href="#Team">Out Team</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#ContactUs">Contact Us</a>
                            </li> 
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar;