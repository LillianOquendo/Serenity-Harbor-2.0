
import React, { createContext, useContext, useEffect, useState } from "react";
import { Button } from "@material-tailwind/react"

//const EmailContext = createContext();

//this hook will consume the email context 
//const useEmailContext = () => useContext(EmailContext);

function SafetyPlanForm() {
    const [value, setValue] = useState("");
    const [safetyplans, setSafetyPlans] = useState([]);
    //const [email, setEmail] = useState("");
    const [question1, setQuestion1] = useState("");
    const [question2, setQuestion2] = useState("");
    const [question3, setQuestion3] = useState("");
    const [question4, setQuestion4] = useState("");
    const [question5, setQuestion5] = useState("");
    
    useEffect(() => {
        fetch("/generate_safety_plan")
            .then((response) => response.json())
            .then((safetyplans) => setSafetyPlans(safetyplans));
    }, []);

    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleSubmit = (event) => {
        // event.prevent.Default();
        setValue((event.target.value))
        if (!question1 || !question2 || !question3 || !question4 || !question5) {
            alert(
                "Please fill in answers to all questions. If you wish to leave one blank type in 'None'."
            );
            return;
        }
        const new_safety_plan = {
            //email: email,
            question1: question1,
            question2: question2,
            question3: question3,
            question4: question4,
            question5: question5,
        };

        fetch("/generate_safety_plan", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(new_safety_plan),
        })
            .then((response) => response.json())
            .then((new_safety_plan) => {
                setSafetyPlans([...safetyplans, new_safety_plan]);

                //form submission confirmation
                setFormSubmitted(true);
            });
    };

    // Send the email data to the backend
    // const emailData = {
    //     username: "Serenity Harbor",
    //     recipient_email: email, // Use the entered email
    //     sender_email: "SerenityHarbor.DefaultEmail@gmail.com",
    //     message:
    //         "Thank you for trusting us. Please see your safety plan below. Keep it in a safe place incase of emergencies",
    // };

    // fetch("/send_email", {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //         Accept: "application/json",
    //     },
    //     body: JSON.stringify(emailData),
    // })
    //     .then((response) => response.json())
    //     .then((data) => {
    //         console.log(data);
    //     })
    //     .catch((error) => {
    //         console.error("Error sending email:", error);
    //     });
    // const handleEmailChange = (event) => {
    //     setEmail(event.target.value);
    // };

    return (
        <div  id="sp1" class="bg-gray-200 w-full h-full flex items-center justify-center">
            {formSubmitted ? (
            <p>Thank you for your answers. Please see your generated plan below!</p>
            ) : (
        <div id="sp2" class="lg:flex items-center space-x-16">
            <div id="sp3" class="w-5/6 md:w-3/4 lg:w-2/3 xl:w-2/3 2xl:w-2/3 mt-8 mx-auto px-16 py-8 rounded-lg">

                <h2 class="text-center text-6xl font-bold tracking-wide text-gray-800">Safety Plan Generator</h2>
                <p class="text-center text-xl text-gray-600 mt-2">Answer each question and we will be able to send you a personalized safety plan directly and discreetly to your email</p>

                <form class="my-10 text-lg" onSubmit={handleSubmit}>
                <div id="sp4" class="flex flex-col my-4">
                        <label for="name" class="text-gray-700">1. Who are your trusted friends, family members, or
                                        neighbors that you can reach out to in case of an emergency?
                                        Include phone numbers if possible</label>
                        <input onChange={(e)=>setQuestion1(e.target.value)} type="text" name="q1" id="q1" class="mt-2 p-2 border h-10 border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900" placeholder="If you have no answer type 'No Answer'"></input>
                    </div>
                    <div id="sp5" class="flex flex-col my-4">
                        <label for="name" class="text-gray-700">2. Is there reliable transportation available to you if you
                                        need to leave quickly, and if not, who can you rely on for
                                        transportation assistance?</label>
                        <input onChange={(e)=>setQuestion2(e.target.value)} type="text" name="q2" id="q2" class="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900" placeholder="If you have no answer type 'No Answer'"></input>
                    </div>
                    <div id="sp6" class="flex flex-col my-4">
                        <label for="name" class="text-gray-700">3. List 3 safe location outside your home where you can go
                                        if you feel threatened or need to leave quickly?</label>
                        <input onChange={(e)=>setQuestion3(e.target.value)} type="text" name="q3" id="q3" class="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900" placeholder="If you have no answer type 'No Answer'"></input>
                    </div>
                    <div id="sp7" class="flex flex-col my-4">
                        <label for="name" class="text-gray-700">4. Who are the people you can trust and confide in about the
                                        abuse you're experiencing?</label>
                        <input onChange={(e)=>setQuestion4(e.target.value)} type="text" name="q4" id="q4" class="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900" placeholder="If you have no answer type 'No Answer'"></input>
                    </div>
                    <div id="sp8" class="flex flex-col my-4">
                        <label for="name" class="text-gray-700">  5. Can you provide a physical description of your abuser,
                                        including details such as their gender, age, height, weight,
                                        hair color, eye color, and any distinguishing features or
                                        tattoos?</label>
                        <input onChange={(e)=>setQuestion5(e.target.value)}  type="text" name="q5" id="q5" class="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900" placeholder="If you have no answer type 'No Answer'"></input>
                    </div>

                    
                    <div id="sp11" class="flex flex-col my-4">
                        <label for="password" class="text-gray-700">Email</label>
                        <div id="sp12" x-data="{ show: false }" class="relative flex items-center mt-2">
                            {/* <input onChange={(e)=>setEmail(e.target.value)} type="text" name="email" id="email" class="flex-1 p-2 border pr-10 border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900" placeholder="Enter your email"></input> */}
                            <button type="submit" class="absolute right-2 bg-transparent flex items-center justify-center text-gray-700">
                                
                            </button>
                        </div>
                    </div>
                    <div id="sp13" class="my-4 flex items-center justify-end space-x-4">
                        <Button type='submit'> Send Personal Safety Plan</Button>
                    </div>
                
            
            
            <div id="sp14" class="flex items-center justify-center">
                
            </div>
            </form>
            </div>
            </div>
            )}
            </div>

    )
    };        

export default SafetyPlanForm;
{/* <div>


                {formSubmitted ? (
            <p>Thank you for your answers. Please see your generated plan below!</p>
            ) : (
            <div>
                <section className="bg-gradient-to-r from-cyan-500 to-blue-500">
                <div id ='1' className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
                        <div id='2' className="flex justify-center">
                        <div id ='3'className="w-full max-w-2xl bg-white rounded-lg shadow-xl">
                                <div id='4' className="p-6 sm:p-8">
                                    <div id='5' className="mt-3">
                                        <h3 className="text-2xl font-bold text-customTeal text-center lg:text-5xl">
                                            Safety Plan Generator
                                        </h3>
                                    </div>
                                    <div id='6' className="mt-3 text-base text-gray-500 text-center">
                                        <p>We're Here to Help</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                            <form onSubmit={handleSubmit}>
                        <div id="div-8" className="mt-6 space-y-2 text-center text-xl text-white p-4">
                                <div id="div-9">
                                    <label>
                                        1. Who are your trusted friends, family members, or
                                        neighbors that you can reach out to in case of an emergency?
                                        Include phone numbers if possible
                                    </label>
                                    <textarea
                                        name="message"
                                        className="h-60 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring focus:border-customTeal"
                                        placeholder="If you have no answer type 'None'"
                                    ></textarea>
                                </div>
                                <div id="div-10 text-xl text-white p-4">
                                    <label>
                                        2. Is there reliable transportation available to you if you
                                        need to leave quickly, and if not, who can you rely on for
                                        transportation assistance?
                                    </label>
                                    <textarea
                                        name="message"
                                        className="h-60 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring focus:border-customTeal"
                                        placeholder="If you have no answer type 'None'"
                                    ></textarea>
                                </div>
                                <div id="div-11 text-xl text-white p-4">
                                    <label>
                                        3. List 3 safe location outside your home where you can go
                                        if you feel threatened or need to leave quickly?
                                    </label>
                                    <textarea
                                        name="message"
                                        className="h-60 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring focus:border-customTeal"
                                        placeholder="If you have no answer type 'None'"
                                    ></textarea>
                                </div>
                                <div id="div-12 text-xl text-white p-4">
                                    <label>
                                        4. Who are the people you can trust and confide in about the
                                        abuse you're experiencing?
                                    </label>
                                    <textarea
                                        name="message"
                                        className="h-60 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring focus:border-customTeal"
                                        placeholder="If you have no answer type 'None'"
                                    ></textarea>
                                </div>
                                <div id="div-13 text-xl text-white p-4">
                                    <label>
                                        5. Can you provide a physical description of your abuser,
                                        including details such as their gender, age, height, weight,
                                        hair color, eye color, and any distinguishing features or
                                        tattoos?
                                    </label>
                                    <textarea
                                        name="message"
                                        className="h-60 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring focus:border-customTeal"
                                        placeholder="If you have no answer type 'None'"
                                    ></textarea>
                                    </div>
                                    <div className="mt-6">
                            
                            <div>
                                <label>
                                    Email a copy of your safetyplan to yourself:
                                    <br></br>
                                    <input type='email' name='email' value={email} onChange={handleEmailChange} />
                                </label>
                            </div>
                            <br></br>
                            <button type = 'submit' className="inline-block rounded-lg bg-customTeal px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-customLightBlue transition duration-100 hover:bg-customLightBlue focus-visible:ring active:bg-customLightBlue md:text-base">Generate Safety Plan</button>
                            
                        </div>
                    </div>
                    </form>
                </div>
            </section>
        </div>
        
    )}
    </div>
    )
        } */}