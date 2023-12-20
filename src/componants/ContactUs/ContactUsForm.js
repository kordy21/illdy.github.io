import "../../css/contactUs.css"
function ContactUsForm(){
    return(
        <>
            <from action="/action_page.php"  >
                <div className="row text-secondary mb-4">
                    <div className="col-md-4 col-sm-12">
                        <p>
                            <label> Your Name (required)</label>
                            <input type="text" name="your-name"required></input>
                        </p>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <p>
                            <label>  Your Email (required)</label>
                            <input type="text" name="your-email" required></input>
                        </p>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <p>
                            <label>  Subject</label>
                            <input type="text" name="your-subject" ></input>
                        </p>
                    </div>
                    <div className="col-12">
                        <p>
                            <label>   Your Message</label>
                            <textarea cols={40} rows={10} type="text" name="your-message" ></textarea>
                        </p>
                    </div>
                </div>
                <div className="btn-form">
                    <input type="submit" value="Send"></input>
                </div>
            </from>
        </>
    )
}

export default ContactUsForm;