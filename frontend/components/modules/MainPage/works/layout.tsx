import { motion } from "framer-motion";

interface LayoutProps {
  id?: string;
  title: string;
  alternate?: boolean;
}

const ProjectLayout: React.FC<LayoutProps> = ({
  id,
  title,
  alternate = false,
  children,
}) => {
  return (
    <div
      id={id}
      className={
        "p-8 md:px-16 2xl:px-64 3xl:px-96 md:py-8 " +
        "md:flex md:flex-row md:space-x-5 md:items-stretch " +
        (alternate ? "bg-gray-800" : "bg-gray-200")
      }
    >
      <div className="w-full relative pb-8 md:w-1/5 flex-none">
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={
            "sticky top-5 font-montserrat font-bold text-4xl " +
            "text-center md:text-right " +
            (alternate ? "text-white" : "text-black")
          }
        >
          {title}
        </motion.h2>
      </div>
      <div className="hidden md:block md:w-1 rounded-full bg-gray-500" />
      <div className="flex flex-col space-y-4 grow">{children}</div>
    </div>
  );
};

export default ProjectLayout;
