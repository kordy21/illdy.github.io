import "../css/footer.css"
import { FaAngleRight } from "react-icons/fa";

function Footer(){
    return(
        <>
            <div className="footer">
                <div className="container-md" >
                    <div className="row">
                        <div className="col-md-3">
                            <div className="widget">
                                <div className="title_widget">
                                    <h4>PRODUCTS</h4>
                                </div>
                                <div className="text_widget text-secondary">
                                    <ul>
                                        <li>
                                            <FaAngleRight className="fs-6"/>
                                            <a href="#" className="text-secondary" >Our work</a>
                                        </li>
                                        <li>
                                            <FaAngleRight className="fs-6"/>
                                            <a href="#" className="text-secondary" >Club</a>
                                        </li>
                                        <li>
                                            <FaAngleRight className="fs-6"/>
                                            <a href="#" className="text-secondary" >News</a>
                                        </li>
                                        <li>
                                            <FaAngleRight className="fs-6"/>
                                            <a href="#" className="text-secondary" >Announcement</a>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="widget">
                                <div className="title_widget">
                                    <h4>INFORMATION</h4>
                                </div>
                                <div className="text_widget text-secondary">
                                    <ul>
                                        <li>
                                            <FaAngleRight className="fs-6"/>
                                            <a href="#" className="text-secondary" >Pricing</a>
                                        </li>
                                        <li>
                                            <FaAngleRight className="fs-6"/>
                                            <a href="#" className="text-secondary" >Terms</a>
                                        </li>
                                        <li>
                                            <FaAngleRight className="fs-6"/>
                                            <a href="#" className="text-secondary" >Affiliates</a>
                                        </li>
                                        <li>
                                            <FaAngleRight className="fs-6"/>
                                            <a href="#" className="text-secondary" >Blog</a>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="widget">
                                <div className="title_widget">
                                    <h4>SUPPORT</h4>
                                </div>
                                <div className="text_widget text-secondary">
                                    <ul>
                                        <li>
                                            <FaAngleRight className="fs-6"/>
                                            <a href="#" className="text-secondary" >Documentation</a>
                                        </li>
                                        <li>
                                            <FaAngleRight className="fs-6"/>
                                            <a href="#" className="text-secondary" >FAQs</a>
                                        </li>
                                        <li>
                                            <FaAngleRight className="fs-6"/>
                                            <a href="#" className="text-secondary" >Forums</a>
                                        </li>
                                        <li>
                                            <FaAngleRight className="fs-6"/>
                                            <a href="#" className="text-secondary" >Contact</a>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3"></div>
                    </div>  
                </div>
            </div>
            <div className="bottom-footer">
                <div className="container-md">
                    <div className="row">
                        <div className="col-12 pt-4 pb-4">
                            <p className="copyright">
                                <span className="text-secondary">
                                    Theme: 
                                    <a href="#" className="text-secondary">Illdy</a>
                                    .
                                </span>
                                <span>© Copyright 2017. All Rights Reserved.</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>  
        </>
    )
}
export default Footer;