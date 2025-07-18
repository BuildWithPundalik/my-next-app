import React from "react";

const About = () => {
  return (
    <section className="space-y-10 m-10 bg-gray-50">
      <div className="flex justify-center gap-10 xs:flex-row">
        <div className="flex gap-10  items-baseline ">
          <img
            src="https://images.unsplash.com/photo-1565665527588-8b548729bd04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM3fHx8ZW58MHx8fHx8"
            className="w-40 h-40 rounded-lg"
            alt="dog"
          />
          <img
            src="https://plus.unsplash.com/premium_photo-1663012968224-b0fe74986c3f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-45 h-50 rounded-lg"
            alt="mountain"
          />
        </div>
        <div className="w-auto max-w-md md:max-w-sm">
        <p className=" text-blue-400 text-xl">About us</p><br/>
          <h3 className="text-black font-bold font-sans-serif text-2xl">Lorem Ipsum is simply dummy text of the printing.</h3><br/>
          <p className="text-gray-400 text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo numquam beatae minima tenetur incidunt nulla magnam delectus! Nulla, cum est!</p>
        </div>
      </div>
      <div className="flex gap-10 justify-center space-x-5">
        <img className="w-70 h-46 rounded-lg" src="https://plus.unsplash.com/premium_photo-1726711426589-e9b912dd2f6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D" alt="dog2" />
        <img className="w-70 h-46 rounded-lg" src="https://plus.unsplash.com/premium_photo-1661526579038-aea87aecd898?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="dog3" />
      </div>
    </section>
  );
};

export default About;
