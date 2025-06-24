import React from "react";
import profileImg from "../assets/selfPic.png";

const About = () => {
  return (
    <section className="bg-white text-gray-900 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
          About <span className="text-gray-800">Me</span>
        </h2>

        {/* Profile Image and Bio */}
        <div className="flex flex-col md:flex-row items-center gap-10 mb-12">
          <div className="w-full md:w-1/3 flex justify-center">
            <img
              src={profileImg}
              alt="Nitesh Kumar Sharma"
              className="rounded-lg shadow-lg w-72 h-auto hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="w-full md:w-2/3">
            <p className="text-lg leading-relaxed">
              I'm{" "}
              <span className="font-bold text-red-500">
                Nitesh Kumar Sharma
              </span>
              , a passionate and creative full-stack web and mobile developer,
              specialized in the MERN stack and Flutter. With a strong
              foundation in UI/UX design, I enjoy transforming complex problems
              into elegant digital solutions. I have over 1 year of freelance
              experience building modern web apps and intuitive user interfaces.
              I'm currently pursuing B.Tech in Computer Engineering from RK
              University.
            </p>
            <p className="mt-4 text-base text-gray-600">
              My mission is to build user-centric, fast-performing applications
              and experiences. Whether it's coding, designing, or solving
              problems, I always aim for excellence.
            </p>
          </div>
        </div>

        {/* Highlights Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
          <div className="bg-gradient-to-r from-red-100 to-pink-100 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-red-500 mb-2">
              Education
            </h3>
            <p className="text-gray-700">
              B.Tech in Computer Engineering (RK University)
            </p>
            <p className="text-gray-600">
              Intermediate - Mahavir Inter College (72%)
            </p>
          </div>
          <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-blue-500 mb-2">
              Experience
            </h3>
            <p className="text-gray-700">1+ Year in Freelancing (Fiverr)</p>
            <p className="text-gray-600">
              Interned at InternPe (Web Development)
            </p>
          </div>
          <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-yellow-500 mb-2">
              Strengths
            </h3>
            <p className="text-gray-700">
              Quick Learner, Problem Solver, Creative Thinker
            </p>
            <p className="text-gray-600">Dedicated & Team-Oriented</p>
          </div>
          <div className="bg-gradient-to-r from-green-100 to-lime-100 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-green-600 mb-2">
              Tools & Platforms
            </h3>
            <p className="text-gray-700">VS Code, GitHub, Firebase, Postman</p>
            <p className="text-gray-600">
              Figma, Sketch, Canva, MongoDB Compass
            </p>
          </div>
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-purple-600 mb-2">
              Passion Projects
            </h3>
            <p className="text-gray-700">Apna Store (Flutter App + Website)</p>
            <p className="text-gray-600">
              Sharma Furniture House (MERN Full-stack)
            </p>
          </div>
          <div className="bg-gradient-to-r from-gray-200 to-gray-100 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Why Me?
            </h3>
            <p className="text-gray-700">
              Client-first mindset, transparent communication, and clean
              scalable code delivery on time.
            </p>
          </div>
        </div>

        {/* Extras */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-r from-pink-200 to-purple-200 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-purple-700 mb-3">
              Achievements
            </h3>
            <ul className="list-disc pl-5 text-left text-gray-700">
              <li>Finalist in Tata Imagination Challenge</li>
              <li>Hackathon Winner in College TechFest</li>
              <li>Top Rated Fiverr Designer in 2024</li>
              <li>Successfully built cross-platform apps using Flutter</li>
              <li>Open Source Contributor on GitHub</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-blue-200 to-cyan-200 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-cyan-700 mb-3">
              Languages I Speak
            </h3>
            <ul className="list-disc pl-5 text-left text-gray-700">
              <li>English</li>
              <li>Hindi</li>
              <li>Bhojpuri</li>
              <li>Gujarati (Basic)</li>
            </ul>
          </div>
        </div>

        {/* Personal Traits */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-r from-yellow-100 to-yellow-200 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-yellow-700 mb-3">
              Hobbies & Interests
            </h3>
            <ul className="list-disc pl-5 text-left text-gray-700">
              <li>UI Animation & Microinteractions</li>
              <li>Reading Tech Blogs</li>
              <li>Exploring Startups & Product Design</li>
              <li>Mentoring Junior Developers</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-red-100 to-red-200 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-red-700 mb-3">Vision</h3>
            <p className="text-gray-700">
              To become a versatile full-stack engineer and creative designer
              who builds products that make lives easier and businesses smarter.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
