import React, { useState, useRef } from 'react';
import { Send } from 'lucide-react';
import FormInput from './FormInput';
import FormTextarea from './FormTextarea';
import emailjs from '@emailjs/browser';



// const form = useRef();

// const sendEmail = (e) => {
//   e.preventDefault();

//   emailjs.sendForm('service_7z4yj0d', 'template_2q2zqyj', form.current, 'G4rQfLdXq4o9yKt4T')

//     e.target.reset();


//     // const [formData, setFormData] = useState({
//     //   name: '',
//     //   email: '',
//     //   message: ''
//     // });

// };






// // const handleSubmit = (e) => {
// //   e.preventDefault();
// //   console.log('Form submitted:', formData);
// // };

// // const handleChange = (e) => {
// //   setFormData({
// //     ...formData,
// //     [e.target.name]: e.target.value
// //   });
// };


const ContactForm = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    social: '',
    buttonName: '',
    code: ''
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_c81qoon', 'template_eljrmhk', form.current, 'cpT4I806WzwIzaReo');

    e.target.reset();
    alert("Thank you for sending your button styles request! As soon as we review your request, we'll get back to you soon!");
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setFormData("");

  };

  return (
    // <section id="contact" className="py-20 bg-gray-50">
      // <div className="container mx-auto px-6">
      //   <div className="max-w-2xl mx-auto">
      //     <h2 className="text-4xl font-bold text-center mb-8">Share your Button</h2>
      //     <p className="text-gray-600 text-center mb-12">
      //       If you have a button style you'd like to share, please fill out the form below and we'll share it with our community.
      //     </p>

    //       <form ref={form} onSubmit={sendEmail} className="space-y-6">

    //         <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
    //           <div className="sm:col-span-2">
    //             <div className="mt-2">
    //               <FormInput
    //                 label="Name"
    //                 type="text"
    //                 name="name"
    //                 value={formData.name}
    //                 onChange={handleChange}
    //                 required
    //                 className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
    //               />

    //             </div>
    //           </div>

    //           <div className="sm:col-span-2">

    //             <div className="mt-2">
    //               <FormInput
    //                 label="Email"
    //                 type="email"
    //                 name="email"
    //                 value={formData.email}
    //                 onChange={handleChange}
    //                 required
    //                 className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
    //               />
    //             </div>
    //           </div>

    //           <div className="sm:col-span-2">

    //             <div className="mt-2">
    //               <FormInput
    //                 label="Social Handle"
    //                 type="text"
    //                 name="name"
    //                 value={formData.social}
    //                 onChange={handleChange}
    //                 required
    //                 className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
    //               />
    //             </div>
    //           </div>

    //           <div className="sm:col-span-6">

    //             <div className="mt-2 grid grid-cols-1">
    //               <FormInput
    //                 label="Button Name and Styledesicription"
    //                 type="text"
    //                 name="name"
    //                 value={formData.buttonName}
    //                 onChange={handleChange}
    //                 required
    //                 className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
    //               />

    //             </div>
    //           </div>



    //           <div className="col-span-full">

    //             <div className="mt-2">
    //               <FormTextarea
    //                 label="Button Code"
    //                 name="code"
    //                 value={formData.code}
    //                 onChange={handleChange}
    //                 required
    //                 rows={5}
    //               />
    //             </div>
    //             <button
    //               type="submit"
    //               className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center space-x-2 mt-2"
    //             >
    //               <span>Send Your Button</span>
    //               <Send className="h-5 w-5" />
    //             </button>
    //           </div>

    //         </div>

    //       </form>
    //     </div>
    //   </div>
    // </section>


// const ContactForm = ({ formData, handleChange }) => {
//   return (


    <div className="flex flex-wrap min-h-screen">
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-900">
      <div className='p-8'>
      <img src="https://i.postimg.cc/02NkRVQr/img-light.png" alt="Contact Us" className="max-w-full h-auto shadow-[16px_16px_5px_0px_rgba(255,_255,_255,_0.55)]" />
      </div>
        
      </div>
      <div className="w-full md:w-1/2 flex items-center justify-center p-6">
      
      <form ref={form} onSubmit={sendEmail} className="space-y-6">
      <h2 className="text-4xl font-bold text-center mb-8">Share your Button</h2>
          <p className="text-gray-600 text-center mb-12">
            If you have a button style you'd like to share, please fill out the form below and we'll share it with our community.
          </p>

<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
  <div className="sm:col-span-2">
    <div className="mt-2">
      <FormInput
        label="Name"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
      />

    </div>
  </div>

  <div className="sm:col-span-2">

    <div className="mt-2">
      <FormInput
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
      />
    </div>
  </div>

  <div className="sm:col-span-2">

    <div className="mt-2">
      <FormInput
        label="Social Handle"
        type="text"
        name="name"
        value={formData.social}
        onChange={handleChange}
        required
        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
      />
    </div>
  </div>

  <div className="sm:col-span-6">

    <div className="mt-2 grid grid-cols-1">
      <FormInput
        label="Button Name and Styledesicription"
        type="text"
        name="name"
        value={formData.buttonName}
        onChange={handleChange}
        required
        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
      />

    </div>
  </div>



  <div className="col-span-full">

    <div className="mt-2">
      <FormTextarea
        label="Button Code"
        name="code"
        value={formData.code}
        onChange={handleChange}
        required
        rows={5}
      />
    </div>
    <button
      type="submit"
      className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center space-x-2 mt-2"
    >
      <span>Send Your Button</span>
      <Send className="h-5 w-5" />
    </button>
  </div>

</div>

</form>
      </div>
    </div>






  );
};

export default ContactForm;