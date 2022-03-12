import { useState } from "react";
import { Modal, Button } from "@elements";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const onButtonClick = (target: string) => {
    document.querySelector(target)!.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <>
      <Modal show={showModal} setShow={setShowModal} title="What's This?">
        <p>
          This is my fursona! His name is Shizu. There are more arts of him, but
          you wouldn&apos;t be able to see it here. You can ask for it though!
          Shoot me a DM somewhere and I might give you.
        </p>
        <hr className="border-t border-slate-500" />
        <p>
          Artwork is made by{" "}
          <a
            href="https://twitter.com/JoyfulTora"
            className="font-sans text-sky-600 transition hover:underline hover:text-sky-800"
          >
            @JoyfulTora
          </a>{" "}
          on Twitter!
        </p>
      </Modal>
      <div
        className="flex flex-col-reverse md:flex-row items-center justify-center md:justify-between
                       min-h-screen md:min-h-[16rem] md:max-h-screen bg-teal-800
                     text-white text-xl font-montserrat font-bold p-16 2xl:px-32"
      >
        <div className="flex flex-col space-y-2 pt-4 md:pt-0">
          <div className="flex flex-col border-l-4 pl-2">
            <p>Hello, I&apos;m Ren.</p>
            <p className="font-assistant font-normal text-base">
              I am a web developer and a CS student.
            </p>
          </div>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 pl-3">
            <Button
              onClick={() => onButtonClick("#about")}
              className="transition hover:cursor-pointer hover:bg-teal-700"
            >
              About
            </Button>
            <Button
              onClick={() => onButtonClick("#works")}
              className="transition hover:cursor-pointer hover:bg-teal-700"
            >
              Works
            </Button>
            <a href="https://blog.rorre.xyz">
              <Button className="transition hover:cursor-pointer hover:bg-teal-700 w-full">
                Blog
              </Button>
            </a>
          </div>
        </div>

        <div className="md:max-h-[24rem]">
          <img src="/assets/coffee-nobg.png" />
          <p
            onClick={() => setShowModal(true)}
            className="font-assistant text-sm text-center font-normal pt-2 underline cursor-pointer"
          >
            What&apos;s this?
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;
