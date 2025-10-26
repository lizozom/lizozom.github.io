import React from 'react';

import Section from '../section';
import ProjectCard from '../project-card';

const SectionProjects = ({ projects }) => {
  if (!projects.length) return null;

  return (
    <Section 
      title="Projects" 
      extraClass="hide-in-print" 
      id="projects"
      background="bg-gradient-to-br from-accent-50/20 via-white to-primary-50/30"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.name}
            name={project.name}
            description={project.description}
            link={project.link}
            image_link={project.image_link}
            featured={index === 0}
          />
        ))}
      </div>
    </Section>
  );
};

export default SectionProjects;
