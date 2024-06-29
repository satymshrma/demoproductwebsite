import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="max-container ">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:felx-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img
              src={footerLogo}
              alt="nikefooterlogo"
              width={150}
              height={46}
            />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat sm:max-w-sm text-white-400">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon, index) => (
              <div
                key={index}
                className="flex justify-center items-center w-12 h-12 bg-white rounded-full"
              >
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1 flex-wrap max-md:flex-col justify-between lg:gap-10 gap-20">
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="text-white font-montserrat leading-normal font-medium mb-6 text-2xl">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link, index) => (
                  <li
                    className="mt-3 text-white-400 font-montserrat leading-normal text-base hover:text-slate-gray cursor-pointer"
                    key={index}
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col  gap-2 max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img src={copyrightSign} alt="copyright" width={16} height={16} />
          <p className="max-sm:text-center">
            Copyright Owned by Nike. Used only for educational purposes.
          </p>
        </div>
        <p className="font-montserrat max-sm:mt-3 cursor-pointer">
          Terms & Conditions
        </p>
      </div>
    </footer>
  );
};

export default Footer;
