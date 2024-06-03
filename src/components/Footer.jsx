import Logo from "../assets/icons/Logo.jsx";
import { Link } from "react-router-dom";
import { footerLinks, personalLinks } from "../constants";

function Footer() {
  return (
    <footer className="section">
      <div className="w-full p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Logo logoClasses="scale-75" textClasses="text-small" />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6">
            <div>
              <h2 className="mb-6 text-lg font-semibold text-gray-900 uppercase dark:text-white">
                Links
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                {footerLinks.map((link) => (
                  <li key={link.title} className="mt-4">
                    <Link to={link.path} className="hover:underline">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-6  text-lg font-semibold text-gray-900 uppercase dark:text-white">
                Follow me
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                {personalLinks.map((link) => (
                  <li key={link.title} className="mt-4">
                    <a
                      href={link.path}
                      className="hover:underline "
                      target="_blank"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 sm:mx-auto border-primary lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-secondary sm:text-center ">
            © 2024 Food Universe . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
