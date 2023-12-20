import "../css/about.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faA,faPen,faCode } from '@fortawesome/free-solid-svg-icons';

function About(){
    return(
        <div className="container-md" id="About">
            <div className="section-title">
                <div className="row">
                    <div className="col-sm-12">
                        <h3 className="mb-5">About</h3>  
                    </div>
                    <div className="col-sm-1"></div>
                    <div className="col-sm-10">
                        <p>It is an amazng one-page theme with great features that offers an incredible experience. It is easy to install, make changes, adapt for your business. A modern design with clean lines and styling for a wide variety of content, exactly how a business design should be. You can add as many images as you want to the main header area and turn them into slider.</p>
                    </div>
                </div>
            </div>
                <div className="skills">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="progress-bar-1">
                                <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                </div>
                            </div>
                                
                            <div className="skill-bottom-1">
                            <FontAwesomeIcon icon={faA} />
                                <span className="skill-botton-text">Typography</span>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="progress-bar-2">
                                <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                </div>
                            </div>
                            <div className="skill-bottom-2">
                                <FontAwesomeIcon icon={faPen} />
                                <span className="skill-botton-text">Design</span>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="progress-bar-3">
                                <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                </div>
                            </div>
                            <div className="skill-bottom-3">
                            <FontAwesomeIcon icon={faCode} />
                                <span className="skill-botton-text">Development</span>
                            </div>
                        </div>
                    </div>
                </div>

        </div>
    )
}
export default About;
