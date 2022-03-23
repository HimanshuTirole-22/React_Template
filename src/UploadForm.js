import React from 'react'
import './uploadForm.css'
import logo1 from './assests/4.jpg';


function UploadForm() {
    const validate = () => {
        var name = document.getElementById("name").value;
        // var phone = document.getElementById("phone").value;
        // var x = document.getElementById("email").value;
        // var atposition = x.indexOf("@");



        if (name === null || name === "") {
            alert("Name can't be blank!");
        }
        // else if (phone.length < 10) {
        //     alert("Phone number must be 10 digits long!");
        // }
        // if (atposition < 1) {
        //     alert("Please enter a valid e-mail address!");
        // }
    }
    return (
    <>
        <div className="upload-container">
            {/* <h1 className="glow">
                Your Post
            </h1> */}
            <p className='heading1'>
            Capture and Share the World's Moments
            </p>

            <div className="contactbox">
                <div className="contactleft">
                    <h3>Your Post</h3>
                    <form name="myform" action="forms" autoComplete="off">
                        <div className="inputrow">
                            <div className="inputgroup">
                                <label for="name">Name</label>
                                <input type="text" id="name"  name="name" />
                            </div>
                            {/* <div className="inputgroup">
                                <label for="phone">Phone</label>
                                <input type="tel" id="phone" placeholder="9009456723" name="phone" />
                            </div> */}
                        </div>
                        <br/><br/>
                        <div className="inputrow">
                            <div className="inputgroup">
                                <label htmlFor="file">Select File</label>
                                <input type="file" id="file"  name="file" />
                            </div>
                            {/* <div className="inputgroup">
                                <label htmlFor="branch">Branch</label>
                                <input type="text" id="branch" placeholder="Computer Science Engineering" required />
                            </div> */}
                        </div>

                        <br/><br/>
                        <label for="message">Comment</label>
                        <textarea name="" id="message" cols="1" rows="5"></textarea>

                        <br/><br/>

                        <button type="submit" onClick={validate}>Upload</button>

                    </form>

                </div>

                <div className="contactright">
                    <img src={logo1} alt="" style={{"height": "100%","width": "100%"}} />


                </div>



            </div>


        </div>


    </>
    )
}

export default UploadForm
