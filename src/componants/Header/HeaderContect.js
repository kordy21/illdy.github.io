import "../../css/header/header-contect.css"
function HeaderContect (){
    return(
        <div className="header-contect">
            <div className="container-md">
                <div className="row">
                    <div className='col-sm-12'>
                        <h1 className="">Clean<span className="span-dot">.</span>Slick<span className="span-dot">.</span>Pixel Perfect</h1>
                    </div>
                    <div className="col-sm-2">
                    </div>
                    <div className="col-sm-8">
                        <p className="fw-light">lldy is a great one-page theme, perfect for developers and designers but also for someone who just wants a new website for his business. Try it now!</p>
                    </div>
                    <div className="btn-header">
                        <div className="">
                            <a href="#" className="btn-header-1">Learn More</a>
                        </div>
                        <div className="">
                            <a href="#" className="btn-header-2">Download</a>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default HeaderContect ;