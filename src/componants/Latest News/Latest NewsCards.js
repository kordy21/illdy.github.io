import "../../css/lastest-news.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
function LastestNewsCards () {
    return (
        <section className="lastest-news-cards">
            <div className="container-md">
                <div className="row justify-content-around">
                    <div className="col-sm-12 col-md-6 col-lg-4 gx-5">
                        <div className="card-lestest">
                            <div className="col-12">
                                <div className="img-card1">
                                </div>
                                <div className="contect-card">
                                    <a href="#">
                                    We Have Made Illdy Theme SEO Friendly
                                    </a>
                                    <p>
                                        Illdy One Page WordPress theme is fully SEO friendly and is ready to help you to achieve the highest rankings… 
                                    </p>
                                    <div className="btn-readMore">
                                        <a href="#">
                                            <FontAwesomeIcon icon={faAngleRight} className="icon-readMore"/>
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 gx-5">
                        <div className="card-lestest">
                            <div className="col-12">
                                <div className="img-card2">
                                </div>
                                <div className="contect-card">
                                    <a href="#">
                                    Stunning One Page WordPress Theme For Masses
                                    </a>
                                    <p>
                                        Illdy One Page WordPress theme is fully SEO friendly and is ready to help you to achieve the highest rankings… 
                                    </p>
                                    <div className="btn-readMore">
                                        <a href="#">
                                            <FontAwesomeIcon icon={faAngleRight} className="icon-readMore"/>
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 gx-5">
                        <div className="card-lestest">
                            <div className="col-12">
                                <div className="img-card3">
                                </div>
                                <div className="contect-card">
                                    <a href="#">
                                    We Have Made Illdy Theme SEO Friendly
                                    </a>
                                    <p>
                                        Illdy One Page WordPress theme is fully SEO friendly and is ready to help you to achieve the highest rankings… 
                                    </p>
                                    <div className="btn-readMore">
                                        <a href="#">
                                            <FontAwesomeIcon icon={faAngleRight} className="icon-readMore"/>
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LastestNewsCards;