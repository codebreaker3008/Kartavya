import React, { useState } from 'react';

const NgoRegistration = () => {
  const [formData, setFormData] = useState({

    name: '',
    email: '',
    phoneNumber: '',
    location : '',

  });

 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };





  const handleSubmit = async(e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/ngo-registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.status === 201) {
        const data = await response.json();
        console.log('Form data submitted successfully:', data);
        e.clear();
        // You can also reset the form or redirect the user to a success page here
      } else {
        console.error('Form submission failed:', response);
        // Handle other possible response codes (e.g., server error)
        // You can display an error message to the user or take appropriate action
      }
    } catch (error) {
      console.error('An error occurred during form submission:', error);
      // Handle any network errors or exceptions
      // You can display an error message to the user or take appropriate action
    }
    // Handle form submission (e.g., send data to server)
    console.log(formData);
  };

  return (
    <div className='lg:grid lg:grid-cols-2 w-[100%]'>

        <div className='lg:mt-10 w-[100%]  lg:order-last'>
          
          <img src="image/ngo-registration.webp" className=' mt-10  lg:mt-20' alt="" />
        </div> 

        <div className="max-w-md mx-auto lg:mt-20 mt-10 md:w-[90%] w-[90%] ">
        {/* <h2 className='font-bold text-3xl text-center lg:mt-10 mb-20 mt-5  '><span className='text-orange-500 animate-pulse text-5xl'>NGO </span> Registration</h2> */}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                NGO Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-600">
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-600">
                Enter NGO Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-blue-500"
                required
              />
            </div>



            <div className="mb-10 mt-10 justify-center text-center">
              <button
                type="submit"
                className= " bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
              >
                Submit Data
              </button>
            </div>
          </form>
        </div>   
  
    </div>

  );
};

export default NgoRegistration;
