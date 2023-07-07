

import React, { useState } from "react";
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_SB_URL;
const supabaseKey = process.env.REACT_APP_SB_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const Form = () => {
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Insert the form data into Supabase table using parameterized query
    const { data, error } = await supabase
      .from('prospects')
      .insert([{ first_name: firstname.trim(), last_name: lastname.trim(), email: email.trim() }]);

    if (error) {
      console.error('Error inserting data:', error);
    } else {
      console.log('Data inserted successfully:', data);
      // Do something else after successful submission
    }

    // Reset the form fields
    setFirstname('');
    setLastname('');
    setEmail('');
  };

  return (
    <div className="bg-white text-black border-l ml-20 border-black w-[80%] py-20 min-h-[650px] flex flex-row">
      <div className="flex felx-row justify-between items-center">
        <p className="text-6xl font-bold w-1/3 pl-4">Want to know more? Contact us!</p>
        <form onSubmit={handleSubmit} className="flex flex-col items-center py-10 px-16 bg-gray-100 rounded-lg">
          <div className="flex flex-row items-center">
            <div className="mr-12">
            <label
              htmlFor="firstname"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              First Name
            </label>
            <div className="">
              <div className="flex bg-white rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  autoComplete="username"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 w-[200px]"
                  placeholder="First Name"
                />
              </div>
            </div>

            </div>
            <div>
            <label
              htmlFor="lastname"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Last Name
            </label>
            <div className="">
              <div className="flex bg-white rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  autoComplete="username"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 w-[200px]"
                  placeholder="Last Name"
                />
              </div>
            </div>

            </div>
          </div>
          <div className="mt-4">
            
          </div>
          <div className="mt-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="mt-2">
              <div className="flex bg-white rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="username"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 w-[500px]"
                  placeholder="Email"
                />
              </div>
            </div>
          </div>
          <button type="submit" className="bg-blue-600 px-6 py-2 rounded text-white mt-8">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
