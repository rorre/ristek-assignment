import { motion } from "framer-motion";
import { useState } from "react";
import { IconRow } from "./icons";

interface ProjectProps {
  title: string;
  description: string;
  image?: string;
  tech: string[];
  datetime?: string;
  site?: string;
  github?: string;
  role?: string;
  roles?: string[];
}

const Project: React.FC<ProjectProps> = ({
  title,
  description,
  image,
  tech,
  datetime,
  site,
  github,
  role,
  roles,
}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.025 }}
        viewport={{ once: true }}
        className="flex flex-col-reverse sm:flex-row justify-between
                 bg-white sm:space-x-2 rounded-md p-4 w-full"
        onClick={() => setShowModal(!showModal)}
      >
        <div className="flex flex-col pt-2 sm:pt-0">
          <div className="flex flex-col-reverse sm:flex-row sm:space-x-2 items-center">
            <p className="font-sans text-lg font-bold">{title}</p>
            <IconRow tech={tech} />
          </div>

          <p className="font-assistant italic text-sm">
            {role} {datetime && "| " + datetime}
          </p>
          <p className="font-assistant">{description}</p>

          <ul className="list-disc text-sm pl-5">
            {roles &&
              roles.map((value, i) => (
                <li key={i} className="font-assistant">
                  {value}
                </li>
              ))}
          </ul>

          <div className="flex flex-row justify-between pt-2 mt-auto max-w-[10rem]">
            {site && (
              <a
                href={site}
                onClick={(e) => e.stopPropagation()}
                className="font-sans font-bold text-sky-700
                           transition hover:underline hover:text-sky-600"
              >
                Site URL
              </a>
            )}
            {github && (
              <a
                href={github}
                onClick={(e) => e.stopPropagation()}
                className="font-sans font-bold text-sky-700
                           transition hover:underline hover:text-sky-600"
              >
                Repository
              </a>
            )}
          </div>
        </div>

        {image && (
          <div className="aspect-square max-w-[6rem] m-auto">
            <img src={image} className="rounded-full" />
          </div>
        )}
      </motion.div>
    </>
  );
};

export default Project;
