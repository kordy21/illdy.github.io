import "../../css/header/header.css";
import HeaderContect from "./HeaderContect";
import Navbar from "./Navbar";
function Header (){
    return (
        <div className="header">
            <Navbar />
            <HeaderContect />
        </div>
    )
}
export default Header;