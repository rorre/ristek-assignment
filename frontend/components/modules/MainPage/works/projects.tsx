import { Project } from "@elements";
import ProjectLayout from "./layout";

const Projects = () => {
  return (
    <ProjectLayout id="projects" title="Projects">
      <Project
        title="KATALY"
        description="KATALY is a clone of WORDLE with Indonesian words."
        image="/assets/kataly.png"
        site="https://kataly.rorre.xyz/"
        github="https://github.com/rorre/KATALY"
        tech={["react", "typescript"]}
      />
      <Project
        title="Tutor Angkatan Bakung"
        description="A collaborative site for people in University of Indonesia's Faculty of Computer Science to open and organize tutor events."
        tech={["python", "fastapi", "node", "typescript", "nextjs"]}
        github="https://github.com/rorre/frames2osb"
        site="https://ta.rorre.xyz/"
      />
      <Project
        title="BNStats"
        description="BNStats is a site to look at various statistical information regarding osu!'s Beatmap Nominator activity."
        image="/assets/bnstats.png"
        roles={[
          "Implements routines to fetch to osu! for nomination data",
          "Experimented with scoring system together with Naxess to quantitize activity based on requirements",
        ]}
        github="https://github.com/rorre/BNStats"
        site="https://bnstats.rorre.xyz/"
        tech={["python"]}
      />
      <Project
        title="DDPValidator"
        description="A tool for people in 2021 class of Programming Basics in University of Indonesia's Faculty of Computer Science to check their assignment if it is up to specs."
        tech={["python"]}
        github="https://github.com/rorre/DDPValidator"
      />
      <Project
        title="frames2osb"
        description="Converts frames (or video) into osu!storyboard with QuadTree data structure."
        tech={["python"]}
        github="https://github.com/rorre/frames2osb"
      />
      <Project
        title="ModRequests"
        description="Personal website to organize osu! Beatmap Nominator mod requests and nominations."
        tech={["python", "flask"]}
        github="https://github.com/rorre/ModRequests"
      />
      <Project
        title="Phillip"
        description="Event-driven library to subscribe to osu! beatmapset feeds."
        tech={["python"]}
        github="https://github.com/rorre/Phillip"
        site="https://rorre.github.io/Phillip/"
      />
    </ProjectLayout>
  );
};

export default Projects;
