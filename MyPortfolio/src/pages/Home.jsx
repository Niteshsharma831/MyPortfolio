import React from "react";
import profileImg from "../assets/selfPic.png";
import { TypeAnimation } from "react-type-animation";
import flutterCertiicate from "../assets/DataFlair.jpeg";
import flipkartCertiicate from "../assets/flipkart.jpeg";
import HackathoneCertiicate from "../assets/Hackathone.jpg";
import TataCertificate from "../assets/Tata.jpeg";
import fiverrLogo from "../assets/fiverr.png";
import UpWorkLogo from "../assets/upwork.png";
import FreelancerLogo from "../assets/freelancer.png";
import WelfoundLogo from "../assets/wellfound.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* Home / Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between min-h-screen px-6 md:px-20 bg-gradient-to-r from-slate-900 via-gray-900 to-black text-white">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl lg:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">
            Nitesh Kumar Sharma
          </h1>

          <div className="text-2xl md:text-4xl font-semibold mb-6">
            <span className="text-white mr-2">I'm</span>
            <TypeAnimation
              sequence={[
                "a Frontend Developer",
                2000,
                "a Backend Developer",
                2000,
                "a UX/UI Designer",
                2000,
                "a Freelancer",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
              className="text-red-400 inline-block"
            />
          </div>

          <p className="text-lg text-gray-300 mb-6 max-w-xl leading-relaxed">
            I craft visually engaging, intuitive, and performance-driven digital
            experiences. Let's build something meaningful together.
          </p>

          <ul className="text-gray-400 space-y-2 text-left text-sm sm:text-base mb-8">
            <li>
              ✅ MERN Stack Developer — MongoDB, Express.js, React, Node.js
            </li>
            <li>🎨 1+ Year of UX/UI Design using Figma & Sketch</li>
            <li>
              🚀 Delivered real-world projects: E-commerce, Admin Dashboards
            </li>
            <li>🛠️ Clean, scalable, maintainable code with best practices</li>
          </ul>

          <div className="flex gap-4 flex-wrap justify-center md:justify-start">
            <a
              href="/resume.pdf"
              download="Nitesh_Resume.pdf"
              className="bg-gradient-to-r from-red-500 to-pink-500 hover:opacity-90 text-white font-medium px-6 py-3 rounded-md shadow-lg transition duration-300"
            >
              📄 Download Resume
            </a>

            <Link
              to="/contact"
              className="border border-red-500 text-red-400 hover:bg-red-500 hover:text-white font-medium px-6 py-3 rounded-md shadow-lg transition duration-300"
            >
              Contact Me
            </Link>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center mb-12 md:mb-0">
          <img
            src={profileImg}
            alt="Nitesh Kumar Sharma"
            className="w-full h-auto object-contain md:h-[70vh]"
            style={{ background: "none" }}
          />
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="bg-gradient-to-r from-slate-600 via-gray-600 to-black text-white py-20 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-gray-800 p-6 rounded-xl shadow-md transform hover:-translate-y-2 hover:shadow-xl transition duration-300 ease-in-out">
              <img
                src="https://kenfavors.com/wp-content/uploads/2021/11/flutter-image-2.png"
                alt="Apna Store App"
                className="h-48 w-full object-cover rounded-md mb-4"
              />
              <h3 className="text-yellow-400 text-xl font-semibold mb-2">
                Apna Store (Mobile App)
              </h3>
              <p className="text-gray-300 mb-4">
                A modern e-commerce mobile app built using Flutter. It includes
                product listing, cart management, payment gateway integration,
                and user authentication.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-red-400 font-medium hover:underline"
                >
                  Live Demo
                </a>
                <a href="#" className="text-white font-medium hover:underline">
                  GitHub
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-gray-800 p-6 rounded-xl shadow-md transform hover:-translate-y-2 hover:shadow-xl transition duration-300 ease-in-out">
              <img
                src="https://seldomindia.com/wp-content/uploads/2023/12/mern-stack-development-1.jpg"
                alt="Apna Store Website"
                className="h-48 w-full object-cover rounded-md mb-4"
              />
              <h3 className="text-yellow-400 text-xl font-semibold mb-2">
                Apna Store Website
              </h3>
              <p className="text-gray-300 mb-4">
                A full-featured MERN stack e-commerce website with admin panel,
                product CRUD, user registration/login, order management, and
                responsive UI.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-red-400 font-medium hover:underline"
                >
                  Live Demo
                </a>
                <a href="#" className="text-white font-medium hover:underline">
                  GitHub
                </a>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-gray-800 p-6 rounded-xl shadow-md transform hover:-translate-y-2 hover:shadow-xl transition duration-300 ease-in-out">
              <img
                src="https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149052117.jpg"
                alt="UI/UX Design"
                className="h-48 w-full object-cover rounded-md mb-4"
              />
              <h3 className="text-yellow-400 text-xl font-semibold mb-2">
                UX/UI Design Portfolio
              </h3>
              <p className="text-gray-300 mb-4">
                A curated collection of creative UI/UX designs created in Figma.
                Includes mobile app screens, dashboards, and website templates
                showcasing design skills.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-red-400 font-medium hover:underline"
                >
                  View Designs
                </a>
                <a href="#" className="text-white font-medium hover:underline">
                  Figma Link
                </a>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-end mt-8">
            <Link to="/projects">
              <button className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-pink-500 to-red-500 rounded hover:opacity-90 transition cursor-pointer">
                More Projects
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section id="skills" className="bg-white text-gray-900 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10">Skills & Technologies</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {[
              {
                name: "HTML",
                color: "from-orange-100 to-yellow-200",
                icon: "📄",
              },
              { name: "CSS", color: "from-blue-100 to-indigo-100", icon: "🎨" },
              {
                name: "JavaScript",
                color: "from-yellow-100 to-yellow-200",
                icon: "🟨",
              },
              {
                name: "Bootstrap",
                color: "from-purple-100 to-purple-200",
                icon: "💠",
              },
              { name: "React", color: "from-blue-100 to-cyan-100", icon: "⚛️" },
              {
                name: "Node.js",
                color: "from-lime-100 to-green-200",
                icon: "🟢",
              },
              {
                name: "MongoDB",
                color: "from-green-200 to-green-100",
                icon: "🍃",
              },
              {
                name: "Express",
                color: "from-gray-100 to-gray-200",
                icon: "🚂",
              },
              {
                name: "Tailwind CSS",
                color: "from-cyan-100 to-blue-200",
                icon: "🌬️",
              },
              {
                name: "PHP",
                color: "from-indigo-100 to-indigo-200",
                icon: "🐘",
              },
              {
                name: "Flutter",
                color: "from-sky-100 to-blue-200",
                icon: "📱",
              },
              {
                name: "Figma",
                color: "from-pink-100 to-purple-100",
                icon: "🎨",
              },
            ].map((skill) => (
              <div
                key={skill.name}
                className={`rounded-lg p-6 shadow-md bg-gradient-to-r ${skill.color}`}
              >
                <div className="text-3xl mb-2">{skill.icon}</div>
                <p className="font-semibold">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="experience" className="bg-white text-gray-900 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="border-l-4 border-red-500 pl-6">
              <h3 className="text-xl font-semibold">Freelance Web Developer</h3>
              <span className="text-sm text-gray-500">
                2023 – Present | Fiverr
              </span>
              <p className="text-gray-600 mt-2">
                Delivered responsive websites, dashboards, and mobile-first
                interfaces to clients worldwide. Focus on UX/UI, React.js,
                Node.js.
              </p>
            </div>
            <div className="border-l-4 border-red-500 pl-6">
              <h3 className="text-xl font-semibold">UX/UI Design Intern</h3>
              <span className="text-sm text-gray-500">
                2022 – 2023 | InternPe
              </span>
              <p className="text-gray-600 mt-2">
                Designed interactive user flows, wireframes, and prototypes
                using Figma. Created user-first designs for web and mobile apps.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        id="certificates"
        className="bg-zinc-100 text-gray-900 py-20 px-6 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">
            Certificates or <span className="text-blue-600">Achievements</span>
          </h2>

          <div className="relative w-full overflow-x-hidden">
            <div className="flex w-max animate-scroll gap-6">
              {[
                {
                  title: "Flipkart Grid",
                  image: flipkartCertiicate,
                  platform: "Flipkart",
                },
                {
                  title: "Tata Quiz",
                  image: TataCertificate,
                  platform: "Tata Group",
                },
                {
                  title: "Smart Minds Hackathon",
                  image: HackathoneCertiicate,
                  platform: "Smart Minds",
                },
                {
                  title: "Flutter - Data Flair",
                  image: flutterCertiicate,
                  platform: "Data Flair",
                },
              ]
                .concat([
                  {
                    title: "Flipkart Grid",
                    image: flipkartCertiicate,
                    platform: "Flipkart",
                  },
                  {
                    title: "Tata Quiz",
                    image: TataCertificate,
                    platform: "Tata Group",
                  },
                  {
                    title: "Smart Minds Hackathon",
                    image: HackathoneCertiicate,
                    platform: "Smart Minds",
                  },
                  {
                    title: "Flutter - Data Flair",
                    image: flutterCertiicate,
                    platform: "Data Flair",
                  },
                ])
                .map((cert, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-64 sm:w-72 md:w-[300px] lg:w-[440px] bg-white rounded-xl shadow-md p-4 border hover:shadow-lg transition duration-300 ease-in-out"
                  >
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-32 sm:h-36 md:h-44 object-cover rounded-md mb-3"
                    />
                    <h3 className="text-lg font-semibold text-red-600 mb-1">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      Issued by {cert.platform}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </div>

        <style>
          {`
      @keyframes scroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .animate-scroll {
        animation: scroll 30s linear infinite;
      }
    `}
        </style>
      </section>
      <section id="freelancing" className="bg-white text-gray-800 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Freelancing <span className="text-blue-600">Platforms</span>
          </h2>
          <hr className="border-t w-1/2 mx-auto mb-12" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">
            <img src={UpWorkLogo} alt="Upwork" className="h-40 mx-auto" />
            <img src={fiverrLogo} alt="Fiverr" className="h-25 mx-auto" />
            <img
              src={FreelancerLogo}
              alt="Freelancer"
              className="h-30 mx-auto"
            />
            <img src={WelfoundLogo} alt="Wellfound" className="h-30 mx-auto" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
