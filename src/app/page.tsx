import React from "react";
import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { Divider } from "@/components/divider";
import { ProjectItem } from "@/components/project-item";
import { ExperienceItem } from "@/components/experience-item";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navigation />

      <main className="flex-grow bg-black text-white relative">
        <Container>
          {/* Hero Section */}
          <Hero />

          {/* Selected Work Section */}
          <Section id="work">
            <h2 className="text-white text-3xl font-medium tracking-tight mb-16">
              Selected Work
            </h2>
            <div className="flex flex-col space-y-4">
              <ProjectItem
                index="01"
                title="WaveGlitchNet"
                description="CNN classifier for LIGO gravitational wave glitch detection — 92% accuracy across 8 categories, 25% false positive reduction · TensorFlow · Keras · Python"
                githubUrl="https://github.com/Sarvesh-Ramani/WaveGlitchNet"
                caseStudyUrl="#work"
              />
              <Divider />
              <ProjectItem
                index="02"
                title="CERT-V2X"
                description="IEEE 1609.2-compliant PKI backend for V2X certificate issuance and lifecycle management "
                githubUrl="https://github.com/Sarvesh-Ramani/CERT-V2X"
                caseStudyUrl="#work"
              />
              <Divider />
              <ProjectItem
                index="03"
                title="AI-for-Lunar-Rover"
                description="U-Net semantic segmentation of lunar terrain across 3 classes — sky, small rocks, large obstacles — trained on 9,766 synthetic Terragen renders · TensorFlow · Keras"
                githubUrl="https://github.com/Sarvesh-Ramani/AI-for-Lunar-Rover"
                caseStudyUrl="#work"
              />
              <Divider />
              <ProjectItem
                index="04"
                title="Facial-Recognition-OpenCV"
                description="Real-time face detection using OpenCV Haar Cascade classifier — live webcam stream with bounding box overlay, zero ML training required · Python · OpenCV"
                githubUrl="https://github.com/Sarvesh-Ramani/Facial-Recognition-OpenCV"
                caseStudyUrl="#work"
              />
            </div>
          </Section>

          <Divider className="my-0" />

          {/* Experience Section */}
          <Section id="experience">
            <h2 className="text-white text-3xl font-medium tracking-tight mb-16">
              Experience
            </h2>
            <div className="flex flex-col">
              <ExperienceItem
                period="August 2023 — Present"
                role="Software Engineer II"
                company="AppViewX"
                description="Designing and scaling robust backend services, optimizing enterprise systems, resolving critical production bottlenecks, and leading customer-facing engineering feature delivery."
              />
              <Divider />
              <ExperienceItem
                period="May 2023 — September 2023"
                role="ML Research Intern"
                company="Spartificial"
                description="Developed a CNN-based deep learning model for LIGO gravitational wave glitch classification, achieving 92% accuracy across 8 distinct glitch categories."
              />
              <Divider />
              <ExperienceItem
                period="January 2023 — August 2023"
                role="Software Engineer Intern"
                company="AppViewX"
                description="Engineered product additions, improved platform performance, refactored backend modules, and assisted in onboarding enterprise client integrations."
              />
            </div>
          </Section>

          <Divider className="my-0" />

          {/* About Section */}
          <Section id="about">
            <h2 className="text-white text-3xl font-medium tracking-tight mb-16">
              About
            </h2>
            <p className="text-secondary text-base sm:text-lg leading-relaxed max-w-[640px]">
              I am a software engineer focused on building robust backend systems, enterprise-grade architectures, and intelligent AI-powered integrations. At AppViewX, I specialize in designing scalable APIs, optimizing database performance, and building systems that solve complex, real-world customer problems.
            </p>
            <p className="text-secondary text-base sm:text-lg leading-relaxed max-w-[640px] mt-6">
              I approach software engineering with a commitment to simplicity and structural integrity. Whether designing low-latency architectures or orchestrating multi-agent retrieval platforms, my goal is to write clean, resilient code that performs reliably at scale. I am constantly exploring new paradigms, from distributed consensus to modern LLM execution environments, ensuring that the systems I build remain durable and state-of-the-art.
            </p>
          </Section>

          <Divider className="my-0" />

          {/* Contact Section */}
          <Section id="contact" className="pb-32">
            <h2 className="text-white text-3xl font-medium tracking-tight mb-16">
              Contact
            </h2>
            <div className="flex flex-col sm:flex-row sm:space-x-8 space-y-4 sm:space-y-0 text-base font-normal">
              <a
                href="https://github.com/Sarvesh-Ramani"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-white transition-colors duration-200 underline-offset-4 hover:underline focus-visible:outline-white"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/sarvesh-ramani/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-white transition-colors duration-200 underline-offset-4 hover:underline focus-visible:outline-white"
              >
                LinkedIn
              </a>
              <a
                href="mailto:sarveshramani1004@gmail.com"
                className="text-secondary hover:text-white transition-colors duration-200 underline-offset-4 hover:underline focus-visible:outline-white"
              >
                Email
              </a>
              <a
                href="assets/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-white transition-colors duration-200 underline-offset-4 hover:underline focus-visible:outline-white"
              >
                Resume
              </a>
            </div>
          </Section>
        </Container>
      </main>

      <Footer />
    </>
  );
}
