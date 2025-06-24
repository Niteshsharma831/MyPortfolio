import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-10 pb-6">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-xl font-bold text-yellow-500 mb-4">
              Nitesh Kumar Sharma
            </h2>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Skills Section</h3>
            <ul className="space-y-1 text-gray-400">
              <li>UX / UI</li>
              <li>Web Development</li>
              <li>App Development</li>
              <li>Freelancing</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Projects Section</h3>
            <ul className="space-y-1 text-gray-400">
              <li>First Flutter App</li>
              <li>Notepad Application (Windows Forms)</li>
              <li>Blood Donation App</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Contact Section</h3>
            <ul className="space-y-1 text-gray-400">
              <li>
                <a
                  href="mailto:Niteshkumarsharma831@gmail.com?subject=Subscribe&body=I%20would%20like%20to%20subscribe%20to%20your%20updates."
                  className="hover:text-blue-400"
                >
                  Subscribe via Email
                </a>
              </li>
              <li>
                <a href="tel:+91-9572861917" className="hover:text-blue-400">
                  Phone: +91 9572861917
                </a>
              </li>
              <li>
                <a
                  href="mailto:Niteshkumarsharma831@gmail.com"
                  className="hover:text-blue-400"
                >
                  Email: Niteshkumarsharma831@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-700 my-6" />

        <div className="text-center">
          <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
          <div className="flex justify-center space-x-4 mb-4">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-600"
            >
              <i className="fab fa-facebook fa-2x"></i>
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400"
            >
              <i className="fab fa-twitter fa-2x"></i>
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-700"
            >
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-500"
            >
              <i className="fab fa-instagram fa-2x"></i>
            </a>
          </div>
          <a
            href="mailto:Niteshkumarsharma831@gmail.com?subject=Subscribe&body=I%20would%20like%20to%20subscribe%20to%20your%20updates."
            className="inline-block bg-yellow-500 text-gray-900 px-4 py-2 rounded-md font-semibold hover:bg-yellow-400 transition"
          >
            Subscribe via Email
          </a>
          <p className="mt-4 text-sm text-gray-400">
            &copy; 2025 Nitesh Kumar Sharma. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
