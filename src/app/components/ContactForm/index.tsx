// 'use client'
// import React from 'react'
// import { useState, useEffect } from 'react'

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     firstname: '',
//     lastname: '',
//     email: '',
//     phnumber: '',
//     Message: '',
//   })
//   const [submitted, setSubmitted] = useState(false)
//   const [showThanks, setShowThanks] = useState(false)
//   const [loader, setLoader] = useState(false)
//   const [isFormValid, setIsFormValid] = useState(false)

//   useEffect(() => {
//     const isValid = Object.values(formData).every(
//       (value) => value.trim() !== ''
//     )
//     setIsFormValid(isValid)
//   }, [formData])
//   const handleChange = (e: any) => {
//     const { name, value } = e.target
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }))
//   }
//   const reset = () => {
//     formData.firstname = ''
//     formData.lastname = ''
//     formData.email = ''
//     formData.phnumber = ''
//     formData.Message = ''
//   }
//   const handleSubmit = async (e: any) => {
//     e.preventDefault()
//     setLoader(true)

//     fetch('https://formsubmit.co/ajax/bhainirav772@gmail.com', {
//       method: 'POST',
//       headers: { 'Content-type': 'application/json' },
//       body: JSON.stringify({
//         Name: formData.firstname,
//         LastName: formData.lastname,
//         Email: formData.email,
//         PhoneNo: formData.phnumber,
//         Message: formData.Message,
//       }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.success) {
//           setSubmitted(true)
//           setShowThanks(true)
//           reset()

//           setTimeout(() => {
//             setShowThanks(false)
//           }, 5000)
//         }

//         reset()
//       })
//       .catch((error) => {
//         setLoader(false)
//         console.log(error.message)
//       })
//   }
//   return (
//     <section id='contact' className='scroll-mt-12'>
//       <div className='container'>
//         <div className='relative'>
//           <h2 className='mb-9 text-midnight_text'>Get in Touch</h2>
//           <div className='relative border px-6 py-2 rounded-2xl'>
//             <form
//               onSubmit={handleSubmit}
//               className='flex flex-wrap w-full m-auto justify-between'>
//               <div className='sm:flex gap-6 w-full'>
//                 <div className='mx-0 my-2.5 flex-1'>
//                   <label
//                     htmlFor='fname'
//                     className='pb-3 inline-block text-base'>
//                     First Name
//                   </label>
//                   <input
//                     id='fname'
//                     type='text'
//                     name='firstname'
//                     value={formData.firstname}
//                     onChange={handleChange}
//                     placeholder='John'
//                     className='w-full text-base px-4 rounded-2xl py-2.5 border-solid border transition-all duration-500 focus:border-primary focus:outline-0'
//                   />
//                 </div>
//                 <div className='mx-0 my-2.5 flex-1'>
//                   <label
//                     htmlFor='lname'
//                     className='pb-3 inline-block text-base'>
//                     Last Name
//                   </label>
//                   <input
//                     id='lname'
//                     type='text'
//                     name='lastname'
//                     value={formData.lastname}
//                     onChange={handleChange}
//                     placeholder='Doe'
//                     className='w-full text-base px-4 rounded-2xl py-2.5 border-solid border transition-all duration-500 focus:border-primary focus:outline-0'
//                   />
//                 </div>
//               </div>
//               <div className='sm:flex gap-6 w-full'>
//                 <div className='mx-0 my-2.5 flex-1'>
//                   <label
//                     htmlFor='email'
//                     className='pb-3 inline-block text-base'>
//                     Email Address
//                   </label>
//                   <input
//                     id='email'
//                     type='email'
//                     name='email'
//                     value={formData.email}
//                     onChange={handleChange}
//                     placeholder='john.doe@example.com'
//                     className='w-full text-base px-4 rounded-2xl py-2.5 border-solid border transition-all duration-500 focus:border-primary focus:outline-0'
//                   />
//                 </div>
//                 <div className='mx-0 my-2.5 flex-1'>
//                   <label
//                     htmlFor='Phnumber'
//                     className='pb-3 inline-block text-base'>
//                     Phone Number
//                   </label>
//                   <input
//                     id='Phnumber'
//                     type='tel'
//                     name='phnumber'
//                     placeholder='+1234567890'
//                     value={formData.phnumber}
//                     onChange={handleChange}
//                     className='w-full text-base px-4 rounded-2xl py-2.5 border-solid border transition-all duration-500 focus:border-primary focus:outline-0'
//                   />
//                 </div>
//               </div>
//               <div className='w-full mx-0 my-2.5 flex-1'>
//                 <label htmlFor='message' className='text-base inline-block'>
//                   Message
//                 </label>
//                 <textarea
//                   id='message'
//                   name='Message'
//                   value={formData.Message}
//                   onChange={handleChange}
//                   className='w-full mt-2 rounded-2xl px-5 py-3 border-solid border transition-all duration-500 focus:border-primary focus:outline-0'
//                   placeholder='Anything else you wanna communicate'></textarea>
//               </div>
//               <div className='mx-0 my-2.5 w-full'>
//                 <button
//                   type='submit'
//                   disabled={!isFormValid || loader}
//                   className={`border leading-none px-6 text-lg font-medium py-4 rounded-full
//                     ${
//                       !isFormValid || loader
//                         ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
//                         : 'bg-primary border-primary text-white hover:bg-transparent hover:text-primary cursor-pointer'
//                     }`}>
//                   Submit
//                 </button>
//               </div>
//             </form>
//           </div>
//           {showThanks && (
//             <div className='text-white bg-primary rounded-full px-4 text-lg mb-4.5 mt-1 absolute flex items-center gap-2'>
//               Thank you for contacting us! We will get back to you soon.
//               <div className='w-3 h-3 rounded-full animate-spin border-2 border-solid border-white border-t-transparent'></div>
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default ContactForm

"use client";

import { useState } from "react";

const INITIAL_FORM_DATA = {
  firstname: "",
  lastname: "",
  email: "",
  phnumber: "",
  Message: "",
};

const ContactForm = () => {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [loader, setLoader] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);
  const [statusMessage, setStatusMessage] = useState("");

  const isFormValid = Object.values(formData).every(
    (value) => value.trim() !== "",
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setStatus(null);
    setStatusMessage("");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isFormValid || loader) return;

    setLoader(true);
    setStatus(null);
    setStatusMessage("");

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/grrcareersvlsi@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            _subject: `New Course Enquiry from ${formData.firstname} ${formData.lastname}`,
            _template: "table",
            Name: formData.firstname,
            "Last Name": formData.lastname,
            Email: formData.email,
            "Phone Number": formData.phnumber,
            Message: formData.Message,
          }),
        },
      );

      const result = await response.json();

      if (
        !response.ok ||
        (result.success !== "true" && result.success !== true)
      ) {
        throw new Error(
          typeof result.message === "string"
            ? result.message
            : "Unable to send your message. Please try again.",
        );
      }

      setStatus("success");
      setStatusMessage(
        "Thank you for contacting us! Your enquiry has been submitted successfully.",
      );
      setFormData({ ...INITIAL_FORM_DATA });
    } catch (error) {
      console.error("Contact form submission failed:", error);

      setStatus("error");
      setStatusMessage(
        "We couldn't send your enquiry. Please try again or contact us by email.",
      );
    } finally {
      setLoader(false);
    }
  };

  return (
    <section id="contact" className="scroll-mt-12 py-12 sm:py-16">
      <div className="container">
        <div className="relative">
          <div className="mb-8">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
              We would love to hear from you
            </p>

            <h2 className="text-midnight_text">Get in Touch</h2>

            <p className="mt-3 max-w-2xl text-base leading-7 text-black/60">
              Interested in our Embedded Systems courses? Send us your details
              and our team will get back to you.
            </p>
          </div>

          <div className="rounded-2xl border border-black/10 bg-white px-5 py-6 shadow-sm sm:px-8">
            <form
              onSubmit={handleSubmit}
              className="mx-auto flex w-full flex-wrap justify-between"
            >
              {/* First and Last Name */}
              <div className="flex w-full flex-col gap-4 sm:flex-row sm:gap-6">
                <div className="my-2.5 flex-1">
                  <label
                    htmlFor="fname"
                    className="mb-2 inline-block text-base font-medium"
                  >
                    First Name *
                  </label>
                  <input
                    id="fname"
                    type="text"
                    name="firstname"
                    value={formData.firstname}
                    onChange={handleChange}
                    placeholder="Enter your first name"
                    autoComplete="given-name"
                    required
                    maxLength={100}
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-base outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                  />
                </div>

                <div className="my-2.5 flex-1">
                  <label
                    htmlFor="lname"
                    className="mb-2 inline-block text-base font-medium"
                  >
                    Last Name *
                  </label>
                  <input
                    id="lname"
                    type="text"
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                    placeholder="Enter your last name"
                    autoComplete="family-name"
                    required
                    maxLength={100}
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-base outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                  />
                </div>
              </div>

              {/* Email and Phone */}
              <div className="flex w-full flex-col gap-4 sm:flex-row sm:gap-6">
                <div className="my-2.5 flex-1">
                  <label
                    htmlFor="email"
                    className="mb-2 inline-block text-base font-medium"
                  >
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                    maxLength={254}
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-base outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                  />
                </div>

                <div className="my-2.5 flex-1">
                  <label
                    htmlFor="phnumber"
                    className="mb-2 inline-block text-base font-medium"
                  >
                    Phone Number *
                  </label>
                  <input
                    id="phnumber"
                    type="tel"
                    name="phnumber"
                    value={formData.phnumber}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    autoComplete="tel"
                    required
                    maxLength={25}
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-base outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="my-2.5 w-full">
                <label
                  htmlFor="message"
                  className="mb-2 inline-block text-base font-medium"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="Message"
                  value={formData.Message}
                  onChange={handleChange}
                  placeholder="Tell us which course you're interested in or ask us a question."
                  rows={5}
                  required
                  maxLength={5000}
                  className="w-full resize-y rounded-xl border border-gray-200 px-4 py-3 text-base outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                />
              </div>

              {/* Submission Status */}
              {status && (
                <div
                  role="status"
                  aria-live="polite"
                  className={`my-3 w-full rounded-xl p-4 text-sm ${
                    status === "success"
                      ? "bg-green-50 text-green-800"
                      : "bg-red-50 text-red-700"
                  }`}
                >
                  {statusMessage}
                </div>
              )}

              {/* Submit Button */}
              <div className="my-3 w-full">
                <button
                  type="submit"
                  disabled={!isFormValid || loader}
                  className={`inline-flex items-center justify-center gap-2 rounded-full border px-8 py-4 text-base font-semibold transition duration-300 ${
                    !isFormValid || loader
                      ? "cursor-not-allowed border-gray-200 bg-gray-200 text-gray-500"
                      : "border-primary bg-primary text-white hover:bg-transparent hover:text-primary"
                  }`}
                >
                  {loader ? (
                    <>
                      <span className="h-5 w-5 animate-spin rounded-full border-2 border-current border-t-transparent" />
                      Sending...
                    </>
                  ) : (
                    <>Submit Enquiry</>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
