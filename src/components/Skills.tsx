import React from 'react';
import { cn } from '@/lib/utils';

type Skill = {
  name: string;
  level: number;
  category: string;
  icon: string;
};

const skills: Skill[] = [
  // Programming Languages
  { name: 'Python', level: 90, category: 'Languages', icon: '🐍' },
  { name: 'Java', level: 85, category: 'Languages', icon: '☕' },
  { name: 'JavaScript', level: 80, category: 'Languages', icon: '🟨' },
  { name: 'C++', level: 90, category: 'Languages', icon: '⚙️' },
  { name: 'C', level: 85, category: 'Languages', icon: '🔧' },
  
  // Frontend
  { name: 'HTML/CSS', level: 85, category: 'Frontend', icon: '🎨' },
  { name: 'React', level: 75, category: 'Frontend', icon: '⚛️' },
  { name: 'Bootstrap', level: 80, category: 'Frontend', icon: '🅱️' },
  { name: 'Tailwind CSS', level: 70, category: 'Frontend', icon: '💨' },
  
  // Backend & Databases
  { name: 'Node.js', level: 75, category: 'Backend', icon: '🟢' },
  { name: 'Express', level: 70, category: 'Backend', icon: '🚂' },
  { name: 'MySQL', level: 85, category: 'Backend', icon: '🗃️' },
  { name: 'MongoDB', level: 75, category: 'Backend', icon: '🍃' },
  
  // Cybersecurity
  { name: 'Network Security', level: 85, category: 'Cybersecurity', icon: '🔒' },
  { name: 'Ethical Hacking', level: 80, category: 'Cybersecurity', icon: '🛡️' },
  { name: 'Security Analysis', level: 75, category: 'Cybersecurity', icon: '🔍' },
  { name: 'Penetration Testing', level: 70, category: 'Cybersecurity', icon: '🔨' },
  
  // Others
  { name: 'Git', level: 85, category: 'Others', icon: '🔀' },
  { name: 'Linux', level: 80, category: 'Others', icon: '🐧' },
  { name: 'Docker', level: 70, category: 'Others', icon: '🐳' },
  { name: 'Problem Solving', level: 90, category: 'Others', icon: '🧩' },
];

const categories = [...new Set(skills.map(skill => skill.category))];

const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => {
  return (
    <div className="blur-panel p-4 rounded-lg transition-all duration-300 hover:shadow-md hover:-translate-y-1">
      <div className="flex items-center mb-2">
        <span className="text-xl mr-2">{skill.icon}</span>
        <h3 className="font-medium">{skill.name}</h3>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div 
          className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${skill.level}%`, transitionDelay: '0.1s' }}
        />
      </div>
      <div className="flex justify-end mt-1">
        <span className="text-xs text-gray-500">{skill.level}%</span>
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = React.useState('All');
  
  const filteredSkills = activeCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);
  
  return (
    <section id="skills" className="py-24 bg-blue-50">
      <div className="section-container">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold tracking-wide">
            My Expertise
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 tracking-tight">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            I've developed a diverse set of skills across programming and cybersecurity, with a focus on building secure and efficient solutions.
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill, index) => (
            <div key={skill.name} className="animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
              <SkillCard skill={skill} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
