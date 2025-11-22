import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="bg-white border-t-1.5 border-slate-500">
        <div className="w-full h-20 px-10 flex flex-row justify-between items-center ">
          <span className="text-sm">© Vinolia Cell 2024</span>
          <a href="https://www.github.com/mochammadsk" target="_blank">
            <FaGithub className="text-4xl" />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
