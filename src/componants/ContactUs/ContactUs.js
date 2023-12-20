import "../../css/contactUs.css"
import { FaFacebookF ,FaTwitter ,FaLinkedinIn} from "react-icons/fa";
import ContactUsForm from "./ContactUsForm";
function ContactUs (){
    return(
        <>
            <div className="container-md mb-4" id="ContactUs">
                <div className="section-title">
                    <div className="row">
                        <div className="col-sm-12">
                            <h3>Contact us</h3>  
                        </div>
                    </div>
                </div>
                <div className="row text-secondary mb-4 g-3">
                    <div className="col-md-4 col-sm-12">
                        <div className="contact-us-box">
                            <div className="box-left">
                                Address
                            </div>
                            <div className="box-right">
                                <span className="d-block">
                                    Street 221B Baker Street,
                                </span>
                                <span className="d-block">
                                    London, UK
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 col-sm-12">
                        <div className="contact-us-box">
                            <div className="box-left">               
                                Customer Support 
                            </div>
                            <div className="box-right">
                                <span className="d-block">
                                    E-mail: 
                                </span>
                                <a href="#" className="text-secondary">
                                    <span className="d-block">
                                        contact@site.com
                                    </span>
                                </a>
                                <span className="d-block">
                                    Phone: (555) 555-5555
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-12">
                        <div className="contactUsSocial">
                            <a href="#" className="text-secondary">
                                <FaTwitter className="fs-4 p-1 me-3 "/>
                            </a>
                            <a href="#" className="text-secondary">
                                <FaFacebookF  className="fs-4 p-1 me-3"/>
                            </a>
                            <a href="#" className="text-secondary">
                                <FaLinkedinIn className="fs-4 p-1 me-3 "/>
                            </a>
                            
                        </div>
                    </div>
                </div>
                <ContactUsForm />
            </div>
        </>
    )
}

export default ContactUs;