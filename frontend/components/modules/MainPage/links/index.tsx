import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

const Links = () => {
  return (
    <div id="links" className="py-8 bg-gray-800 text-white">
      <div className="flex flex-col items-center space-y-4">
        <div className="flex flex-row space-x-4 justify-center">
          <a href="https://github.com/rorre">
            <IoLogoGithub opacity={80} size={36} />
          </a>
          <a href="https://www.linkedin.com/in/rendyak/">
            <IoLogoLinkedin opacity={80} size={36} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Links;
