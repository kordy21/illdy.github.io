import Mark_img  from "../image/front-page-team-1.jpg";
import Jane_img  from "../image/front-page-team-2.jpg";
import John_img  from "../image/front-page-team-3.jpg";
import "../css/team.css"

import { FaFacebookF ,FaTwitter ,FaLinkedinIn} from "react-icons/fa";

function Teams (){
    return(
        <>
            <div className="container-md" id="Team">
                <div className="section-title">
                    <div className="row">
                        <div className="col-sm-12">
                            <h3>Team</h3>  
                        </div>
                        <div className="col-sm-1"></div>
                        <div className="col-sm-10">
                            <p>Meet the people that are going to take your business to the next level.</p>
                        </div>
                    </div>
                </div>
                <div className="container-md">
                    <div className="row justify-content-around   mb-4">
                        <div className="col-sm-12 col-md-6 col-lg-4 ">
                            <div className="team">
                                <img src={Mark_img}/>
                                <div className="contectTeam">
                                    <h4 className="fw-bold fs-5">Mark Lawrance</h4>
                                    <p className="orangeColor border-0">Web Designer</p>

                                    <p className="text-secondary">Creative, detail-oriented, always focused.</p>
                                    <div className="d-flex">
                                        <a href="#">
                                            <FaFacebookF  className="fs-3 p-1 orangeColor me-3 rounded-circle"/>
                                        </a>
                                        <a href="#">
                                            <FaTwitter className="fs-3 p-1 orangeColor me-3 rounded-circle"/>
                                        </a>
                                        <a href="#">
                                            <FaLinkedinIn className="fs-3 p-1 orangeColor me-3 rounded-circle"/>
                                        </a>

                                    </div>
                                </div>
                                <p>
                                
                                </p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 ">
                            <div className="team">
                                <img src={Jane_img}/>
                                <div className="contectTeam">
                                    <h4 className="fw-bold fs-5">Jane Stenton</h4>
                                    <p className="yellowColor border-0">SEO Specialist</p>

                                    <p className="text-secondary">Curious, tech-geeck and gets serious when it comes to work.</p>
                                    <div className="d-flex">
                                        <a href="#">
                                            <FaFacebookF  className="fs-3 p-1 yellowColor me-3 rounded-circle"/>
                                        </a>
                                        <a href="#">
                                            <FaTwitter className="fs-3 p-1 yellowColor me-3 rounded-circle"/>
                                        </a>
                                        <a href="#">
                                            <FaLinkedinIn className="fs-3 p-1 yellowColor me-3 rounded-circle"/>
                                        </a>
                                    </div>
                                </div>
                                <p>
                                
                                </p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 ">
                            <div className="team">
                                <img src={John_img}/>
                                <div className="contectTeam">
                                    <h4 className="fw-bold fs-5">John Smith</h4>
                                    <p className="purpleColor border-0">Developer</p>

                                    <p className="text-secondary">Enthusiastic, passionate with great sense of humor.</p>
                                    <div className="d-flex">
                                        <a href="#">
                                            <FaFacebookF  className="fs-3 p-1 purpleColor me-3 rounded-circle"/>
                                        </a>
                                        <a href="#">
                                            <FaTwitter className="fs-3 p-1 purpleColor me-3 rounded-circle"/>
                                        </a>
                                        <a href="#">
                                            <FaLinkedinIn className="fs-3 p-1 purpleColor me-3 rounded-circle"/>
                                        </a>

                                    </div>
                                </div>
                                <p>
                                
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Teams;