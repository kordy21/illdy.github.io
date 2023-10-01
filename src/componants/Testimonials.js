import "../css/testimonials.css"
import mike_img from "../image/mike-muller-127x127.jpg";
import john_img from "../image/hombre-joven-cara-alegre-estudiante-127x127.jpg";
import aigars_img from "../image/Aigars-Silkalns-127x127.jpg";
import jane_img from "../image/redhead-1123645_960_720-1-127x127.jpg";

function Testimonials (){
    return(
        <div className="">
            <div className="testimonials container-fluid">
            <div className="section-title">
                <div className="row mb-4">
                    <div className="col-sm-12">
                        <h3 className="text-white">Testimonials</h3>  
                    </div>
                </div>
            </div>
            <div id="carouselExampleCaptions" class="carousel slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>

                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div>
                            <img src={mike_img} />
                        </div>
                        <div class="carousel-caption d-block ">
                            <div>
                                <p>Awesome theme with great design and awesome support. If you don’t know how to code your own WordPress theme, but you still want a good-looking website for your business, Illdy might be exactly what you need. It is a slick theme with a lot of of features to choose from.</p>
                            </div>
                            <h4 className="mt-5">Mike Muller</h4>
                        </div>
                    </div>
                    <div class="carousel-item ">
                        <div>
                            <img src={john_img} />
                        </div>
                        <div class="carousel-caption d-block ">
                            <div>
                                <p>Awesome theme with great design and awesome support. If you don’t know how to code your own WordPress theme, but you still want a good-looking website for your business, Illdy might be exactly what you need. It is a slick theme with a lot of of features to choose from.</p>
                            </div>
                            <h4 className="mt-5">John Doe</h4>
                        </div>
                    </div>
                    <div class="carousel-item ">
                        <div>
                            <img src={aigars_img} />
                        </div>
                        <div class="carousel-caption d-block ">
                            <div>
                                <p>Awesome theme with great design and awesome support. If you don’t know how to code your own WordPress theme, but you still want a good-looking website for your business, Illdy might be exactly what you need. It is a slick theme with a lot of of features to choose from.</p>
                            </div>
                            <h4 className="mt-5">Aigars Silkalns</h4>
                        </div>
                    </div>
                    <div class="carousel-item ">
                        <div>
                            <img src={jane_img} />
                        </div>
                        <div class="carousel-caption d-block ">
                            <div>
                                <p>Awesome theme with great design and awesome support. If you don’t know how to code your own WordPress theme, but you still want a good-looking website for your business, Illdy might be exactly what you need. It is a slick theme with a lot of of features to choose from.</p>
                            </div>
                            <h4 className="mt-5">Jane Smith</h4>
                        </div>
                    </div>
                </div>
                
            </div>
            </div>
        </div>
    )
}
export default Testimonials;