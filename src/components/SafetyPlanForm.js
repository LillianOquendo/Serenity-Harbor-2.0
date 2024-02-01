
import React, { createContext, useContext, useEffect, useState } from "react";
import NewsletterSignup from "./Newsletter";
import emailjs from 'emailjs-com'
import { api_key } from "./Secret/secret";


function SafetyPlanForm() {
    const [value, setValue] = useState("");
    const [safetyplans, setSafetyPlans] = useState([]);
    const [question1, setQuestion1] = useState("");
    const [question2, setQuestion2] = useState("");
    const [question3, setQuestion3] = useState("");
    const [question4, setQuestion4] = useState("");
    const [question5, setQuestion5] = useState("");
    const [email, setEmail] = useState("");
    // const [emailjsApiKey, setEmailjsApiKey]=useState("")//state to store the emailjs api key
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [submittedSafetyPlan, setSubmittedSafetyPlan] = useState(null)
    
    useEffect(() => {
        //Initialize EmailJS with my public key
        emailjs.init(api_key)
        fetch("/generate_safety_plan")
            .then((response) => response.json())
            .then((safetyplans) => setSafetyPlans(safetyplans));
    }, []);
    // useEffect(()=>{
    //     fetch("/generate_safety_plan")
    //     .then(response => response.json())
    //     .then(data =>{
    //         setEmailjsApiKey(data.api.key);
    //         setSafetyPlans(data.safetyplans);
    //     })
    //     .catch(error => console.error('Error: ', error));
    // },[]);

    
    const handleSubmit = (event) => {
        event.preventDefault();
        setValue((event.target.value))
        if (!question1 || !question2 || !question3 || !question4 || !question5 || !email ) {
            alert(
                "Please fill in answers to all questions. If you wish to leave one blank type in 'None'."
            );
            return;
        }
        const new_safety_plan = {
            question1: question1,
            question2: question2,
            question3: question3,
            question4: question4,
            question5: question5,
            
        };
                //store submitted saftey plan
                setSubmittedSafetyPlan(new_safety_plan);
                console.log("State Variables: ", question1, question2, question3, question4, question5);
                //form submission confirmation
                setFormSubmitted(true);

                // console.log('this is doing something');
                // console.log(formSubmitted);
                // console.log("Safety Plan information: ", new_safety_plan);

        //EmailJS functionality
        const formElement = document.getElementById('contact-form');

        emailjs.sendForm('service_lnmx7l8', 'template_92dhvpp', formElement)
        .then(
            (response)=>{
                console.log("Email sent successfully: ", response);
                },
            (error)=>{
                console.error("Error sending email: ", error);
            }
            
        )
            
        // fetch("/generate_safety_plan", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //         Accept: "application/json",
        //     },
        //     body: JSON.stringify(new_safety_plan),
        // })
        //     .then((response) => response.json())
        //     .then((new_safety_plan) => {
        //         setSafetyPlans([...safetyplans, new_safety_plan]);



        //         // //store submitted saftey plan
        //         // setSubmittedSafetyPlan(new_safety_plan);
                
        //         // //form submission confirmation
        //         // setFormSubmitted(true);
        //         // console.log('this is doing something');
        //         // console.log(formSubmitted);
        //     })
        //     .catch((error) => {
        //         console.error("Error fetching safety plan:", error)
        //     });

    };
//EmailJs send the value contained within the id's of the labels in your form
//the sendForm function takes in a session id, the email template id and an HTML element contating the form and all of the inputs
//when this form is sent to the Emailjs server it reads the form and the {{}} are the variables that contain the ids of the inputs
//you're trying to reference. 

    return (
        <>
            <div class="p-12 w-full md:w-3/4 md:max-w-full mx-left">

                <div class="p-6 border border-white-300 sm:rounded-md">
                    {!formSubmitted ?
                        <form id="contact-form" class="my-10 text-lg" onSubmit={handleSubmit}>
                            <label class="block mb-6">
                                <span class="text-white">1. Who are your trusted friends, family members, or
                                    neighbors that you can reach out to in case of an emergency?
                                    Include phone numbers if possible</span>
                                <input
                                    id="Q1"
                                    name="Q1"
                                    type="text"
                                    class="block w-full mt-1 border-white-300 rounded-md shadow-sm  focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    onChange={(e) => setQuestion1(e.target.value)}
                                    placeholder="Joe Bloggs"
                                    
                                />
                            </label>
                            <label class="block mb-6">
                                <span class="text-white">2. Is there reliable transportation available to you if you
                                    need to leave quickly, and if not, who can you rely on for
                                    transportation assistance?</span>
                                <input
                                    id="Q2"
                                    name="Q2"
                                    type="text"
                                    class="block w-full mt-1 border-white-300 rounded-md shadow-sm  focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    onChange={(e) => setQuestion2(e.target.value)}
                                    placeholder="If you have no answer type 'No Answer'"
                                />
                            </label>
                            <label class="block mb-6">
                                <span class="text-white">3. List 3 safe location outside your home where you can go
                                    if you feel threatened or need to leave quickly?</span>
                                <input
                                    id="Q3"
                                    name="Q3"
                                    type="text"
                                    class="block w-full mt-1 border-white-300 rounded-md shadow-sm  focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    onChange={(e) => setQuestion3(e.target.value)}
                                />
                            </label>
                            <label class="block mb-6">
                                <span class="text-white">4. Who are the people you can trust and confide in about the
                                    abuse you're experiencing?</span>
                                <input
                                    id="Q4" 
                                    name="Q4"
                                    type="text"
                                    class="block w-full mt-1 border-white-300 rounded-md shadow-sm  focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    onChange={(e) => setQuestion4(e.target.value)}
                                />
                            </label>
                            <label class="block mb-6">
                                <span class="text-white">5. Can you provide a physical description of your abuser,
                                    including details such as their gender, age, height, weight,
                                    hair color, eye color, and any distinguishing features or
                                    tattoos?</span>
                                <input
                                    id="Q5"
                                    name="Q5"
                                    type="text"
                                    class="block w-full mt-1 border-white-300 rounded-md shadow-sm  focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    onChange={(e) => setQuestion5(e.target.value)}
                                />
                            </label>
                            <label class="block mb-6">
                                <span class="text-white">Email: </span>
                                <input
                                name="email"
                                type="text"
                                class="block w-full mt-1 border-white-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                onChange={(e)=> setEmail(e.target.value)}
                              
                                />
                            </label>


                            <div class="mb-6">
                                <button
                                    type="submit" className="inline-block rounded border border-cyan-700 bg-white px-8 py-2 text-center text-sm font-bold text-customTeal outline-cyan-700 ring-customTeal transition duration-100">
                                    Send Answers
                                </button>
                            </div>

{/* edit box size, header size, font weight, picture size and location*/}
                        </form> : <div class="text-white mt-8">
                            <h2 class="text-xl font-bold mb-2">Safety Plan Submitted!</h2>
                            <p>Your safety plan details:</p>
                            <ul>
                                <li>1. Reach out to these trusted people: {submittedSafetyPlan.question1}</li>
                                <li>2. This is how you're going to travel to safety: {submittedSafetyPlan.question2}</li>
                                <li>3. Safe locations outside your home: {submittedSafetyPlan.question3}</li>
                                <li>4. People you can trust and confide in about your situation: {submittedSafetyPlan.question4}</li>
                                <li>5. Physical description of the person: {submittedSafetyPlan.question5}</li>
                            </ul>


                        </div>}
                </div>
            </div>



            <div>
                <div class="relative -mt-12 lg:-mt-24">
                    <svg
                        viewBox="0 0 1428 174"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink">
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g transform="translate(-2.000000, 44.000000)" fill="#FFFFFF" fill-rule="nonzero">
                                <path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001"></path>
                                <path
                                    d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                                    opacity="0.100000001"
                                ></path>
                                <path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" id="Path-4" opacity="0.200000003"></path>
                            </g>
                            <g transform="translate(-4.000000, 76.000000)" fill="#FFFFFF" fill-rule="nonzero">
                                <path
                                    d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"
                                ></path>
                            </g>
                        </g>
                    </svg>

                </div>
            </div>
            <div class="white-rectangle"></div>

            <NewsletterSignup />
        </>
    )
};

export default SafetyPlanForm;
