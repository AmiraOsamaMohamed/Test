import React, {  useRef } from 'react';
// Function component

const ContactPage = () => {
    const contactUsForm = useRef([]);
    const contactUs = (event) => {

        event.preventDefault();
        console.log(contactUsForm.current);
    }

    return (
        <div style={{ textAlign: "center", margin: "50px auto" }}>
            <h1>Contact Us page</h1>
            <form onSubmit={(event) => contactUs(event)}>
                {/* Email */}
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        // it's like getting the value of email and put it in 
                        // contactUsForm.current['email']
                        ref={(ref)=>{contactUsForm.current['email'] = ref}}
                        required
                    >
                    </input>
                </div>
                <br></br>
                {/* message */}
                <div>
                    <label htmlFor="message" >Message</label>
                    <textarea
                        id='message'
                        rows="5"
                        ref={(ref)=>{contactUsForm.current['message'] = ref}}
                        required
                    >
                    </textarea>
                </div>
                {/* button */}
                <div className='submit'>
                <button>Submit</button>
</div>
            </form>

        </div>
    );
}

export default ContactPage;