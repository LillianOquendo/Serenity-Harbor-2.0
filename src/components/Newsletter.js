import React, { useState, useEffect } from 'react';
function NewsletterSignup() { // State for form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
    });
    
    // State for subscribers, form & submission status
    const [subscribers, setSubscribers] = useState([]);
    const [formSubmitted, setFormSubmitted] = useState(false)
    const [submissionStatus, setSubmissionStatus] = useState(null);
    
    // Fetch initial subscribers
    useEffect(() => {
        fetch('/newsletter')
            .then((response) => response.json())
            .then((subscribers) => setSubscribers(subscribers));
    }, []);
    // Handle form submission
    const handleSubmit = (event) => {
        //event.preventDefault();// Prevent default form submission

        // Create a new subscriber
        const new_subscriber = {
            name: formData.name,
            email: formData.email,
        };

        // Send a POST request to the server with the new subscriber data
        fetch('/newsletter', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify(new_subscriber),
        })
            .then((response) =>{
                console.log(response);//log response to console
                return response.json();
            })
            .then((new_subscriber) => {
                // Update subscribers state with the new subscriber
                setSubscribers([...subscribers, new_subscriber]);
                // Set form submission status to true
                setFormSubmitted(true);
                //Set submission status to 'successful'
                setSubmissionStatus('success');
                
                //Clear form fields after successful submssion
                setFormData({
                    name: '',
                    email: '',
                });
            })
            .catch ((error) =>{
                setSubmissionStatus('error');//set submission status to 'error' if issue occurs with submission
                console.error('Error submitting form:, ', error);
            });
    };
    // Handle input changes and update form data
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    }

    return (
        <footer className="bg-white">
            <div className="newsletter-bg flex-col bottom-0 align-right ">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <div className="flex flex-col items-center justify-between md:flex-row">
                        <div id='5' className="mb-3 text-center md:mb-0 md:text-left">
                            <span className="font-bold uppercase tracking-widest text-black">
                                Sign-Up for Our Newsletter!
                            </span>
                            {submissionStatus ==='success' && (
                                <p className="text-green-500">F</p>
                            )}
                        </div>

                        <form id='6' className=" items-center flex w-full gap-2 md:max-w-md md:w-auto" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Name"
                                className="w-72 flex-1 rounded border border-cyan-700 bg-white px-8 py-2 text-black placeholder-black  ring-customTeal transition duration-100 focus:ring"
                            />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email"
                                className="w-72 flex-1 rounded border border-cyan-700 bg-white px-8 py-2 text-black placeholder-black outline-none ring-customTeal transition duration-100 focus:ring"
                            />

                            <button type="submit" className="inline-block rounded border border-cyan-900 bg-white px-8 py-2 text-center text-sm font-bold text-customTeal outline-cyan-900 ring-customTeal transition duration-100">
                                Send
                            </button>

                        </form>
                    </div>
                </div>
            </div>

            <div className="border-t py-2 text-center text-sm text-gray-400">
                © 2023 - Created by Lillian Oquendo
            </div>
        </footer>
    );
}

export default NewsletterSignup;

