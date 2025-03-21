
import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { cn } from '@/lib/utils';

type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  category: string;
  demoLink?: string;
  githubLink?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: 'FindYourHome',
    description: 'A real estate platform that helps users find their perfect home with advanced search filters and property listings.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80',
    category: 'Web App',
    githubLink: 'https://github.com/rafii300/findYourHome.git',
  }
];

const categories = [...new Set(projects.map(project => project.category))];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="group relative rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="aspect-video overflow-hidden bg-gray-200">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
      </div>
      
      <div className="relative p-6 bg-white">
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.slice(0, 3).map(tag => (
            <span key={tag} className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-700">
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700">
              +{project.tags.length - 3}
            </span>
          )}
        </div>
        
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        
        <div className="flex gap-3">
          {project.demoLink && (
            <a 
              href={project.demoLink} 
              className="flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <ExternalLink size={16} />
              <span>Live Demo</span>
            </a>
          )}
          {project.githubLink && (
            <a 
              href={project.githubLink} 
              className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Github size={16} />
              <span>Source Code</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);
  
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="section-container">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold tracking-wide">
            My Work
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 tracking-tight">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills and experience in different areas of computer science.
          </p>
        </div>
        
        <div className="flex justify-center mb-10 animate-on-scroll">
          <div className="inline-flex flex-wrap justify-center gap-2 p-1 bg-white rounded-lg shadow-sm">
            <button
              onClick={() => setActiveCategory('All')}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-md transition-all",
                activeCategory === 'All' 
                  ? "bg-primary text-white shadow" 
                  : "text-gray-700 hover:bg-gray-100"
              )}
            >
              All
            </button>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-md transition-all",
                  activeCategory === category 
                    ? "bg-primary text-white shadow" 
                    : "text-gray-700 hover:bg-gray-100"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={project.id} className="animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 animate-on-scroll">
          <a 
            href="https://github.com/rafii300" 
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-gray-100 text-gray-900 hover:bg-gray-200 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>View All Projects</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
