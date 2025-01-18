import React from 'react'
import './Contact.css'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "a50ce188-dc60-41e4-b60f-6a31f2b284a4");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (

    
    <div className='contact'>
        <div className='ContactUs'><h1>Contact Us</h1></div>
        
        <div className="contact"></div>
       
        <div className='SendUs'>
        <h3>Send Us a message</h3>
        <p>A Contact Us page is a dedicated section on a website that allows visitors to reach out to your business to ask questions, request support, or provide feedback.

</p>
</div>
   <ul>
    <div className='contact-address'>
       <li>Contact@Us.com</li>
       <li>+9122334455</li>
       <li>77 Kothrud, Pune <br/>STD 411021, India</li>
       </div>
   </ul>

   <div className="contact-col">

<form onSubmit={onSubmit}>
    <h3>For Contact</h3>
    <label>Your Name</label>
    <input type="text" name='name' placeholder='Enter your name' required />
    <label>Phone Number</label>
    <input type='tel' name='phone' placeholder='Enter Your mobile number' required/>
    <label>Write your Message here</label>
    <textarea name='Message' rows='6' placeholder='Enter your message' required></textarea>
<button type='submit' className='btn dark-btn'>Submit now</button>
</form>

<span>{result}</span>
</div>
    </div>

  )
}

export default Contact