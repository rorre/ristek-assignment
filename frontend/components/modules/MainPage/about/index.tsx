const About: React.FC = () => {
  return (
    <div id="about" className="py-8 bg-gray-200">
      <h2 className="font-montserrat font-bold text-3xl text-center pb-4">
        About Me
      </h2>
      <div
        className="px-8 sm:px-16 md:px-32 lg:px-64 2xl:px-96 3xl:px-[30rem] font-assistant pb-4
                      flex flex-col space-y-2"
      >
        <p>
          I am an undergraduate Computer Science student with interest in
          various Web Development and Software Engineering technologies. I also
          have interest in the world of Data Science. I have used a few common
          technologies used in the world, such as Next.js, Strapi, and Redis.
          However I also like to experiment with new technologies, such as
          Starlette as I strive for new experience.
        </p>
        <p>
          I have started programming ever since middle school, but never got
          into it seriously until my 2nd year of high school. From there, I have
          made various web applications, some of which are available in the
          Works section below.
        </p>
        <p>
          I am always open for new environment, and I am fairly adept into new
          environment. This includes adapting to pre-existing codebase and flow
          as I try to match into the standards as much as possible.
        </p>
      </div>
    </div>
  );
};

export default About;
