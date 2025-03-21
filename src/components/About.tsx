
import React from 'react';
import { Calendar, Code, GraduationCap, User } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="section-container">
        <div className="animate-on-scroll">
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold tracking-wide">
            About Me
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-10 tracking-tight">
            Crafting Digital Experiences <span className="text-gradient">With Passion</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-blue-500/20 to-indigo-500/20 blur-xl"></div>
              <div className="relative aspect-square rounded-xl overflow-hidden border border-slate-200/50 shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475"
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="animate-on-scroll delay-100">
            <p className="text-lg text-gray-600 mb-6">
              I'm a Computer Science Engineering student passionate about creating elegant, efficient solutions to complex problems. My journey in technology is driven by curiosity and a desire to make a meaningful impact through innovation.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Whether it's developing applications, designing algorithms, or exploring new technologies, I approach each challenge with enthusiasm and a commitment to excellence.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="blur-panel rounded-lg p-4 flex items-start gap-3">
                <div className="p-2 bg-blue-100 rounded-md text-blue-700">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Education</h3>
                  <p className="text-sm text-gray-600">Computer Science Engineering</p>
                </div>
              </div>

              <div className="blur-panel rounded-lg p-4 flex items-start gap-3">
                <div className="p-2 bg-blue-100 rounded-md text-blue-700">
                  <Code size={20} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Development</h3>
                  <p className="text-sm text-gray-600">Full-stack Development</p>
                </div>
              </div>

              <div className="blur-panel rounded-lg p-4 flex items-start gap-3">
                <div className="p-2 bg-blue-100 rounded-md text-blue-700">
                  <Calendar size={20} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Experience</h3>
                  <p className="text-sm text-gray-600">2+ Years Coding</p>
                </div>
              </div>

              <div className="blur-panel rounded-lg p-4 flex items-start gap-3">
                <div className="p-2 bg-blue-100 rounded-md text-blue-700">
                  <User size={20} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Interests</h3>
                  <p className="text-sm text-gray-600">AI, Web Dev, Cloud</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
