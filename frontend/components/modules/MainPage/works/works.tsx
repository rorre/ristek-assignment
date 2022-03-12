import { Project } from "@elements";
import ProjectLayout from "./layout";

const Works = () => {
  return (
    <ProjectLayout id="works" title="Works" alternate>
      <Project
        title="Open House Fasilkom UI 2021"
        description="Open House Fasilkom UI is an event where Computer Science students of University of Indonesia introduces their faculty to highschool students."
        image="/assets/oh.jpg"
        role="Web Developer"
        roles={["Develops front-end of landing page and staff recruitment"]}
        site="https://oh.cs.ui.ac.id/"
        datetime="July 2021 - November 2021"
        tech={["node", "react", "nextjs", "typescript"]}
      />
      <Project
        title="PERAK 2022"
        description="PERAK is an internal event at Computer Science Faculty in University of Indonesia to bond together in various game events."
        image="/assets/perak.png"
        role="Web Developer"
        roles={[
          "Implements group invitational code with timeout using Redis",
          "Implements 3rd party games framing and score submission with cross window messaging",
          "Implements simple score tampering protection logic with AES and Redis",
        ]}
        site="https://perak.cs.ui.ac.id/"
        datetime="December 2021 - Present"
        tech={[
          "node",
          "react",
          "nextjs",
          "redis",
          "typescript",
          "strapi",
          "javascript",
        ]}
      />
    </ProjectLayout>
  );
};

export default Works;
