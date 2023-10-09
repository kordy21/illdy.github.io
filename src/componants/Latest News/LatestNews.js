import "../../css/lastest-news.css"
import LastestNewsCards from "./Latest NewsCards";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

function LastestNews () {
    return (
        <div className="lastest-news">
            <div className="container-fluid">
                <div className="section-title">
                    <div className="row">
                        <div className="col-sm-12">
                            <h3 className="text-white">Latest News</h3>  
                        </div>
                        <div className="col-sm-1"></div>
                        <div className="col-sm-10">
                            <p className="text-white opacity-50">If you are interested in the latest articles in the industry, take a sneak peek at our blog. You have nothing to loose!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="btn-seeBlog">
                <a href="#">
                    <FontAwesomeIcon icon={faAngleRight} className="icon-seeBlog"/>
                    See Blog 
                </a>
            </div>
            <LastestNewsCards />
        </div>
    )
}

export default LastestNews;