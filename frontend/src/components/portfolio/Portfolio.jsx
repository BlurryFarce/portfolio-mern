import { useEffect, useState } from "react";
import PortfolioBlock from "./PortfolioBlock";
import { Box, Grid } from "@mui/material";
import { info } from "../../info/Info";

export default function Portfolio({ innerRef }) {
  const [projects, setProjects] = useState();

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch("https://portfolio-backend-api-dun.vercel.app/api/projects");
        const data = await response.json();

        // Check if data is an array and has at least one item
        if (Array.isArray(data) && data.length > 0) {
          setProjects(data);
        } else {
          console.error("No projects data found.");
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    }

    fetchProjects();
  }, []);

  if (!projects) {
    return <p>Loading projects...</p>;
  }
  return (
    <Box id={"portfolio"} ref={innerRef}>
      <Grid container display={"flex"} justifyContent={"center"}>
        {projects.map((project, index) => (
          <Grid item xs={10} md={5} key={index}>
            <PortfolioBlock
              image={project.imageUrl}
              live={project.liveLink}
              source={project.sourceLink}
              title={project.title}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
