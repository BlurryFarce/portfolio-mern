import { useEffect, useState } from "react";
import Style from "./About.module.scss";
import Terminal from "./Terminal";
import { Box } from "@mui/material";
import { info } from "../../info/Info";

export default function About({ innerRef }) {
  const firstName = info.firstName.toLowerCase();
  const [skills, setSkills] = useState();

  useEffect(() => {
    async function fetchSkills() {
      try {
        const response = await fetch('https://portfolio-backend-api-dun.vercel.app/api/skills'); // Adjust URL if needed
        const data = await response.json();

        // Check if data is an array and has at least one item
        if (Array.isArray(data) && data.length > 0) {
          setSkills(data[0]);
        } else {
          console.error('No skills data found.');
        }
      } catch (error) {
        console.error('Error fetching skills:', error);
      }
    }

    fetchSkills();
  }, []);

  function aboutMeText() {
    return (
      <>
        <p>
          <span style={{ color: info.baseColor }}>
            ~/{firstName}
            {info.lastName.toLowerCase()} $
          </span>{" "}
          cd about{firstName}{" "}
        </p>
        <p>
          <span style={{ color: info.baseColor }}>
            ~/{firstName}
            {info.lastName.toLowerCase()}/about{firstName}{" "}
            <span className={Style.green}>(main)</span> ${" "}
          </span>
          <span>cat README.md</span>
          <p>{info.bio}</p>
          <p> {info.bio2}</p>
        </p>
      </>
    );
  }

  function skillsText() {
    // If skills is null or not yet loaded, display a loading message
    if (!skills) {
      return <p>Loading skills...</p>;
    }
    return (
      <>
        <p>
          <span style={{ color: info.baseColor }}>
            ~/{firstName}
            {info.lastName.toLowerCase()} $
          </span>{" "}
          cd skillsAndTools
        </p>
        <p>
          <span style={{ color: info.baseColor }}>
            ~/{firstName}
            {info.lastName.toLowerCase()}/skillsAndTools{" "}
            <span className={Style.green}>(main)</span> $
          </span>{" "}
          ls
        </p>
        <p style={{ color: info.secondColor }}> Languages/</p>
        <ul className={Style.skills}>
          {skills.languages.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
        <p style={{ color: info.secondColor }}>FrameworksAndLibraries/</p>
        <ul className={Style.skills}>
          {skills.frameworksandlibraries.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
        <p style={{ color: info.secondColor }}> DatabasesAndCloud/</p>
        <ul className={Style.skills}>
          {skills.databasesandcloud.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
        <p style={{ color: info.secondColor }}> Testing/</p>
        <ul className={Style.skills}>
          {skills.testing.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
        <p style={{ color: info.secondColor }}> Tools/</p>
        <ul className={Style.skills}>
          {skills.tools.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </>
    );
  }

  function miscText() {
    return (
      <>
        <p>
          <span style={{ color: info.baseColor }}>
            ~/{firstName}
            {info.lastName.toLowerCase()} $
          </span>{" "}
          cd hobbiesAndInterests
        </p>
        <p>
          <span style={{ color: info.baseColor }}>
            ~/{firstName}
            {info.lastName.toLowerCase()}/hobbiesAndInterests{" "}
            <span className={Style.green}>(main)</span> $
          </span>{" "}
          ls
        </p>
        <ul>
          {info.hobbies.map((hobby, index) => (
            <li key={index}>
              <Box component={"span"} mr={"1rem"}>
                {hobby.emoji}
              </Box>
              {hobby.label}
            </li>
          ))}
        </ul>
      </>
    );
  }

  return (
    <Box
      ref={innerRef}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      mt={"3rem"}
      id={"about"}
    >
      <Terminal text={aboutMeText()} />
      <Terminal text={skillsText()} />
      <Terminal text={miscText()} />
    </Box>
  );
}
