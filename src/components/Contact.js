import React from "react";

const Contact = () => {
  return <div>
    <h1 className="p-2 m-2 text-2xl">Contact Us</h1>
    <form className="flex p-2 m-2">
      <input 
      type="text" 
      placeholder="Name" 
      className="border-2 p-1 mx-1 rounded-lg" />
      <input 
      type="text" 
      placeholder="message" 
      className="border-2 p-1 mx-1 rounded-lg" />
      <button 
      className="px-4  py-1 bg-green-100 border-2 mx-1 rounded-lg ">
      Submit
      </button>
    </form>
  </div>;
};

export default Contact;
