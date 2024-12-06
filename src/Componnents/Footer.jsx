import { IoLogoInstagram, IoLogoFacebook, IoLogoTwitter } from "react-icons/io";
import { GiMeal } from "react-icons/gi";
import { TbCashRegister } from "react-icons/tb";

const Footer = () => {
  return (
    <footer className="bg-[#eee] text-white py-16 px-20 dark:bg-gray-800 dark:text-light text-5xl">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12">
        {/* Logo and Social Links */}
        <div className="flex flex-col items-start space-y-6">
          <a href="#" className="flex items-center text-[#555]">
            <p className="mr-2 font-bold flex items-center gap-3  text-4xl ">
              Eat
              <GiMeal size={30} />
              Split
              <TbCashRegister size={30} />
            </p>
          </a>
          <ul className="flex space-x-6">
            <li>
              <a
                href="#"
                className="dark:text-white dark:hover:text-gray-400 hover:text-[#777] transition duration-300"
              >
                <IoLogoInstagram size={30} color="#555" />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="dark:text-white dark:hover:text-gray-400 hover:text-[#777] transition duration-300"
              >
                <IoLogoFacebook size={30} color="#555" />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="dark:text-white dark:hover:text-gray-400 hover:text-[#777] transition duration-300"
              >
                <IoLogoTwitter size={30} color="#555" />
              </a>
            </li>
          </ul>
          <p className="text-[#767676] font-semibold text-base">
            &copy; <span className="year">{new Date().getFullYear()}</span> by
            Salah Eddine, Inc. All rights reserved.
          </p>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-xl text-[#555] font-bold mb-6">Contact us</h3>
          <address className="not-italic text-[#777] text-base space-y-4">
            <p>623 Harrison St., 2nd Floor, San Francisco, CA 94107</p>
            <p>
              <a
                href="tel:415-201-6370"
                className="hover:text-[#222] transition duration-300"
              >
                415-201-6370
              </a>
            </p>
            <p>
              <a
                href="mailto:hello@discoverfood.com"
                className="hover:text-[#222] transition duration-300"
              >
                hello@eat-split.com
              </a>
            </p>
          </address>
        </div>

        {/* Account */}
        <div>
          <h3 className="text-xl text-[#555] font-bold mb-6">Account</h3>
          <ul className="text-[#777] text-base space-y-4">
            <li>
              <a href="#" className="hover:text-[#222] transition duration-300">
                Create account
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#222] transition duration-300">
                Sign in
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#222] transition duration-300">
                iOS app
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#222] transition duration-300">
                Android app
              </a>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-xl text-[#555] font-bold mb-6">Company</h3>
          <ul className="text-[#777] text-base space-y-4">
            <li>
              <a href="#" className="hover:text-[#222] transition duration-300">
                About discoverfood
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#222] transition duration-300">
                For Business
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#222] transition duration-300">
                Cooking partners
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#222] transition duration-300">
                Careers
              </a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-xl text-[#555] font-bold mb-6">Resources</h3>
          <ul className="text-[#777] text-base space-y-4">
            <li>
              <a href="#" className="hover:text-[#222] transition duration-300">
                Recipe directory
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#222] transition duration-300">
                Help center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#222] transition duration-300">
                Privacy & terms
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
