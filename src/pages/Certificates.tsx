
import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { Shield, Award, ExternalLink } from 'lucide-react';

type Certificate = {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credential: string;
  link?: string;
};

const certificates: Certificate[] = [
  {
    id: 1,
    title: "Network Security Fundamentals",
    issuer: "Cisco Networking Academy",
    date: "March 2023",
    credential: "CRED12345",
    link: "#",
  },
  {
    id: 2,
    title: "Ethical Hacking Essentials",
    issuer: "EC-Council",
    date: "June 2023",
    credential: "EHE78901",
    link: "#",
  },
  {
    id: 3,
    title: "Cybersecurity Analyst Professional",
    issuer: "IBM",
    date: "September 2023",
    credential: "IBM45678",
    link: "#",
  },
  {
    id: 4,
    title: "Secure Coding Practices",
    issuer: "OWASP",
    date: "December 2023",
    credential: "SCP23456",
    link: "#",
  },
];

const CertificateCard: React.FC<{ certificate: Certificate }> = ({ certificate }) => {
  return (
    <div className="animate-on-scroll blur-panel p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-start gap-4">
        <div className="p-3 bg-blue-100 rounded-lg text-blue-700">
          <Shield size={24} />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold mb-2">{certificate.title}</h3>
          <p className="text-gray-600 mb-1">Issued by: {certificate.issuer}</p>
          <p className="text-gray-600 mb-1">Date: {certificate.date}</p>
          <p className="text-gray-600 mb-3">Credential ID: {certificate.credential}</p>
          {certificate.link && (
            <a 
              href={certificate.link} 
              className="inline-flex items-center gap-1 text-primary hover:text-primary/80 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Verify Certificate</span>
              <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Certificates: React.FC = () => {
  return (
    <MainLayout>
      <section className="py-24 pt-36 bg-blue-50">
        <div className="section-container">
          <div className="text-center mb-16 animate-on-scroll">
            <div className="inline-block mb-4 px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold tracking-wide">
              Professional Development
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 tracking-tight">
              Cybersecurity <span className="text-gradient">Certificates</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              I'm committed to continuously improving my cybersecurity skills through professional certification programs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificates.map((certificate, index) => (
              <div key={certificate.id} style={{ animationDelay: `${index * 0.1}s` }}>
                <CertificateCard certificate={certificate} />
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center animate-on-scroll">
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-lg bg-blue-100 text-blue-700">
              <Award size={20} />
              <span className="font-medium">Constantly adding new certifications</span>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Certificates;
