import React, { useEffect, useState } from "react";
import { useAgencyContext } from "./AgencyContext";
import { Button } from "@material-tailwind/react";
import "../App.css"

function ConsultForm() {
    const { selectedCategory, setSelectedCategory, agencies, setAgencies } = useAgencyContext();
    const [consultations, setConsultations] = useState([]);
    const [value, setValue] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [editingConsultationId, setEditingConsultationId] = useState(false);
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        fetch('/consultations')
            .then(response => response.json())
            .then(consultations => setConsultations(consultations))
    }, [])

    const handleChange = (event) => {
        const newValue=(event.target.value);
        setValue(newValue);

        setSelectedCategory(newValue);
    };
    
    const handleEdit = (consultationId) => {
        const consultationToEdit = consultations.find((consultation) => consultation.id === consultationId);
        if (consultationToEdit) {
            //set which form areas/fields will be edited
            setValue(consultationToEdit.topic);
            setName(consultationToEdit.name);
            setEmail(consultationToEdit.email);
            setMessage(consultationToEdit.message);
            //set the edit mode and id to be edited
            setEditMode(true);
            setEditingConsultationId(consultationId)
        }
    };
    const handleSubmit = (event) => {
      event.preventDefault();
  
      // Make sure the user selects a topic
      if (value === "") {
          alert("Please select a topic before submitting.");
          return;
      }
  
      const new_consultation = {
          name: name,
          email: email,
          message: message
      };
  
      fetch('/consultations', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
          },
          body: JSON.stringify(new_consultation)
      })
      .then(response => response.json())
      .then(new_consultation => {
          // Add the new consultation to the consultations array
          setConsultations([...consultations, new_consultation]);
          // Reset the form fields and show a successful submission message
          setValue("");
          setName("");
          setEmail("");
          setMessage("");
          setFormSubmitted(true);
      });
  };
            //find the consultation to be edited


            // const handleEdit = (consultation) =>{
            //     setName(consultation.name);
            //     setEmail(consultation.email);
            //     setMessage(consultation.message);
            //     setEditMode(true);
            //     setEditingConsultationId(consultation.id);
            //forces system to display a successful form submission message
            
  


    return (
        
            <div >
                <div id ='1' className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
                    <div id ='2' className="flex justify-center">
                        <div id ='3'className="w-full max-w-2xl bg-white rounded-lg shadow-xl">
                            <div id ='4'className="p-6 sm:p-8">
                                <div id ='5'className="mt-3">
                                    <h3 className="text-2xl font-bold text-customTeal text-center lg:text-5xl">
                                        Request a Consultation
                                    </h3>
                                </div>
                            </div>
                                <div id ='6'className="mt-3 text-base text-gray-500 text-center">
                                    <p>We're Here to Help</p>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="consult-form">
                    <div id="div-9" className="mt-6 space-y-2 text-left text-lg">
                        <form onSubmit={handleSubmit}>
                            <label>
                                Select A Topic You Need Help In:
                            </label>
                            <select value={value} onChange={handleChange}>
                                <option value="">------------</option>
                                <option value="legal">Legal</option>
                                <option value="food">Food</option>
                                <option value="health">Health</option>
                                <option value="housing">Housing</option>
                            </select>
                            <div id="div-8" className="mt-6 space-y-2 text-left text-lg">
                                <div id="div-9">
                                    <label text-white>
                                        Name: 
                                    </label>
                                    <textarea
                                        id = 'name'
                                        className="h-10 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 resize-none overflow-hidden"
                                        type="text" name='name' value={name} onChange={(e) => { setName(e.target.value) }}
                                    ></textarea>
                                    <div id="div-10" className="mt-6 space-y-2 text-left text-lg">
                                        <div id="div-11">
                                            <label text-white>
                                                Email: 
                                            </label>
                                            <textarea
                                                id='email'
                                                className="h-10 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 resize-none overflow-hidden"
                                                type="text" email='email' value={email} onChange={(e) => { setEmail(e.target.value) }}
                                            ></textarea>
                                            <div id="div-12" className="mt-6 space-y-2 text-left text-lg">
                                                <div id="div-13">
                                                    <label text-white>
                                                        Message 
                                                    </label>
                                                    <textarea
                                                        id="message"
                                                        className="h-60 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 resize-none overflow-hidden"
                                                        type="text" message='message' value={message} onChange={(e) => { setMessage(e.target.value) }}
                                                        placeholder="Let us know how we can help. Please do not submit personal information via this form."
                                                    ></textarea>
                                                    <div className="items-center rounded-lg bg-customTeal px-8 py-3 text-center text-md font-semibold text-white ">                                                    
                                                    <button type='submit' >
                                                        Submit
                                                    </button>
                                                    </div>    
                                                </div>
                                            </div>  
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                        </div>
                    </div>
                    
                    
        </div>
        
    );
}

export default ConsultForm; 






    

// import React, { useEffect, useState } from "react";

// function ConsultForm() {
//     const [consultations, setConsultations] = useState([]);
//     const [value, setValue] = useState("");
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [message, setMessage] = useState("");
//     const [formSubmitted, setFormSubmitted] = useState(false);
//     const [editingConsultationId, setEditingConsultationId] = useState(false)
//     const [editMode, setEditMode] = useState(false);

//     useEffect(() => {
//         fetch('/consultations')
//             .then(response => response.json())
//             .then(consultations => setConsultations(consultations))
//     }, [])

//     const handleChange = (event) => {
//         setValue(event.target.value);
//     };
    
//     const handleEdit = (consultationId) => {
//         const consultationToEdit = consultations.find((consultation) => consultation.id === consultationId);
//         if (consultationToEdit) {
//             //set which form areas/fields will be edited
//             setValue(consultationToEdit.topic);
//             setName(consultationToEdit.name);
//             setEmail(consultationToEdit.email);
//             setMessage(consultationToEdit.message);
//             //set the edit mode and id to be edited
//             setEditMode(true);
//             setEditingConsultationId(consultationId)
//         }
//     };
//     const handleSubmit = (event) => {
//         event.preventDefault();

//         //make user select a topic
//         if (value === "") {
//             alert("Please select a topic before submitting.");
//             return;
//         }

//         const new_consultation = {
//             name: name,
//             email: email,
//             message: message
//         };

//         if (editMode) {
//             fetch(`/consultations/${editingConsultationId}`, {
//                 method: 'PATCH',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Accept': 'application/json'
//                 },
//                 body: JSON.stringify(new_consultation)
//             })
//                 .then(response => response.json())
//                 .then(updatedConsultation => {
//                     // Update the consultation in the consultations list
//                     setConsultations(consultations.map((consultation) =>
//                         consultation.id === editingConsultationId ? updatedConsultation : consultation
//                     ));
//                     setEditMode(false);
//                     setEditingConsultationId(null);
//                     setName("");
//                     setEmail("");
//                     setMessage("");
//                 })
//         } else {

//             fetch('/consultations', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Accept': 'application/json'
//                 },
//                 body: JSON.stringify(new_consultation)
//             })
//                 .then(response => response.json())
//                 .then(new_consultation => {
//                     setConsultations([...consultations, new_consultation]);
//                 });
//             //find the consultation to be edited


//             // const handleEdit = (consultation) =>{
//             //     setName(consultation.name);
//             //     setEmail(consultation.email);
//             //     setMessage(consultation.message);
//             //     setEditMode(true);
//             //     setEditingConsultationId(consultation.id);
//             //forces system to display a successful form submission message
//             setFormSubmitted(true);
//         }
//     };

//     const handleDelete = (id) => {
//         fetch(`/consultations/${id}`, {
//             method: 'DELETE'
//         })
//             .then(() => {
//                 setConsultations(consultations.filter((consultation) => consultation.id !== id));
//             })
//             .catch((error) => {
//                 console.error('Error deleting consultation:', error);
//             });
//     };

//     return (
//         <div>
//             {formSubmitted ? (
//                 <p>Thank you for submitting the form! We will get in touch with you soon.</p>
//             ) : (
//                 <form onSubmit={handleSubmit}>
//                     <h2>Request a Consultation:</h2>
//                     
//                     <br></br>
//                     <br></br>
//                     <label>Name: </label>
//                     <input type="text" id='name' name='name' value={name} onChange={(e) => { setName(e.target.value) }} />
//                     <br></br>
//                     <br></br>
//                     <label>Email: </label>
//                     <input type="text" id='email' email='email' value={email} onChange={(e) => { setEmail(e.target.value) }} />
//                     <br></br>
//                     <label>Message: </label>
//                     <input type="text" id='message' message='message' value={message} onChange={(e) => { setMessage(e.target.value) }} />
//                     <br></br>
//                     <button type="submit">Submit</button>
//                 </form>
//             )}

//             <h2>Consultations</h2>
//             <ul>
//                 {consultations.map((consultation) => (
//                     // Check if the consultation object exists before rendering its properties
//                     consultation && (
//                         <li key={consultation.id}>
//                             <p>Name: {consultation.name}</p>
//                             <p>Email: {consultation.email}</p>
//                             <p>Message: {consultation.message}</p>
//                             <button onClick={() => handleDelete(consultation.id)}>Delete Consultation</button>
//                             <button onClick={() => handleEdit(consultation.id)}>Edit Consultation</button>
//                         </li>
//                     )
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default ConsultForm;