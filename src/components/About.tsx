
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
                  src="/lovable-uploads/e8c86790-a1ce-46e0-bc7b-f50ac20cfdf6.png"
                  alt="K.M. Tahomid Ahasan" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="animate-on-scroll delay-100">
            <p className="text-lg text-gray-600 mb-6">
              I'm K.M. Tahomid Ahasan, a Computer Science Engineering student at Rajshahi University of Engineering and Technology (RUET) passionate about creating elegant, efficient solutions to complex problems.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              My interests span across programming, cybersecurity, and software development. I'm constantly learning and pushing myself to grow in these areas.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="blur-panel rounded-lg p-4 flex items-start gap-3">
                <div className="p-2 bg-blue-100 rounded-md text-blue-700">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Education</h3>
                  <p className="text-sm text-gray-600">CSE Student at RUET</p>
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
                  <p className="text-sm text-gray-600">Programming & Cybersecurity</p>
                </div>
              </div>

              <div className="blur-panel rounded-lg p-4 flex items-start gap-3">
                <div className="p-2 bg-blue-100 rounded-md text-blue-700">
                  <User size={20} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Interests</h3>
                  <p className="text-sm text-gray-600">Security, Web Dev, AI</p>
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
