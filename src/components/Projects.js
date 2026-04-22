import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import projImg1 from "../assests/22-4 new.jpg";
import projImg2 from "../assests/22--4 new.jpg";
import projImg3 from "../assests/2---4 new.png";

const projects = [
  {
    title: "New DataBase",
    description: "Landing Page Design",
    imgUrl: projImg1,
    category: "first",
  },
  {
    title: "E-Commerce Site",
    description: "Frontend Development",
    imgUrl: projImg2,
    category: "first",
  },
  {
    title: "Admin Dashboard",
    description: "UI/UX Design",
    imgUrl: projImg3,
    category: "first",
  },

  {
    title: "Full Stack StartUp",
    description: "New Project",
    imgUrl: projImg2,
    category: "second",
  },
  {
    title: "Social Media App",
    description: "Web Development",
    imgUrl: projImg1,
    category: "second",
  },
  {
    title: "Task Manager",
    description: "Backend API",
    imgUrl: projImg3,
    category: "second",
  },

  {
    title: "Web Scraping",
    description: "New Idea",
    imgUrl: projImg3,
    category: "third",
  },
  {
    title: "Data Analytics",
    description: "Python Script",
    imgUrl: projImg2,
    category: "third",
  },
  {
    title: "Automation Bot",
    description: "Scripting",
    imgUrl: projImg1,
    category: "third",
  },
];

export const Projects = () => {
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Projects</h2>
            <p>It's Time to learn how to develop new skills to your projects</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab 3</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects
                      .filter((project) => project.category === "first")
                      .map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                  </Row>
                </Tab.Pane>

                <Tab.Pane eventKey="second">
                  <Row>
                    {projects
                      .filter((project) => project.category === "second")
                      .map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                  </Row>
                </Tab.Pane>

                <Tab.Pane eventKey="third">
                  <Row>
                    {projects
                      .filter((project) => project.category === "third")
                      .map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
