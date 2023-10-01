
import "../css/services.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen,faCode,faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
function Services (){
    return (
        <div className="container-fluid">
            <div className="section-title">
                <div className="row">
                    <div className="col-sm-12">
                        <h3>Services</h3>  
                    </div>
                    <div className="col-sm-1"></div>
                    <div className="col-sm-10">
                        <p>In order to help you grow your business, our carefully selected experts can advise you in in the following areas:</p>
                    </div>
                </div>
            </div>
            <div className="container-md">
                <div className="row mb-4">
                    <div className="col-md-4">
                        <div className="service">
                            <div>
                                <FontAwesomeIcon icon={faPen} className="service-icon"/>
                                <h4 className="fw-bold">Web Design</h4>
                            </div>
                            <p>
                            Consectetur adipiscing elit. Praesent molestie urna hendrerit erat tincidunt tempus. Aliquam a leo risus. Fusce a metus non augue dapibus porttitor at in mauris. Pellentesque commodo...
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="service">
                            <div>
                                <FontAwesomeIcon icon={faCode} className="service-icon"/>
                                <h4 className="fw-bold">Web Design</h4>
                            </div>
                            <p>
                            Consectetur adipiscing elit. Praesent molestie urna hendrerit erat tincidunt tempus. Aliquam a leo risus. Fusce a metus non augue dapibus porttitor at in mauris. Pellentesque commodo...
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="service">
                            <div>
                                <FontAwesomeIcon icon={faMagnifyingGlass} className="service-icon"/>
                                <h4 className="fw-bold">Web Design</h4>
                            </div>
                            <p>
                            Consectetur adipiscing elit. Praesent molestie urna hendrerit erat tincidunt tempus. Aliquam a leo risus. Fusce a metus non augue dapibus porttitor at in mauris. Pellentesque commodo...
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;