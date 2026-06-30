import React from "react";
import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { Divider } from "@/components/divider";
import { ProjectItem } from "@/components/project-item";
import { ExperienceItem } from "@/components/experience-item";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navigation />

      <main className="flex-grow bg-background text-foreground relative pt-16">
        <Container>
          {/* Hero Section */}
          <Hero />

          {/* Selected Work Section */}
          <ScrollReveal>
            <Section id="work">
              <h2 className="text-white text-3xl font-medium tracking-tight mb-12">
                Selected Work
              </h2>
              <div className="grid grid-cols-1 gap-6">
                <ProjectItem
                  index="01"
                  title="WaveGlitchNet"
                  description="CNN classifier for LIGO gravitational wave glitch detection — 92% accuracy across 8 categories, 25% false positive reduction."
                  approach="Trained on 12,000+ preprocessed spectrogram images (normalization + augmentation) with a 20% training efficiency improvement. Used 5-fold cross-validation to cut false positives by 25% and achieve high stability across glitch types."
                  tags={["TensorFlow", "Keras", "Python", "Deep Learning", "CNN"]}
                  githubUrl="https://github.com/Sarvesh-Ramani/WaveGlitchNet"
                />

                <ProjectItem
                  index="02"
                  title="CERT-V2X"
                  description="IEEE 1609.2-compliant PKI backend for V2X certificate issuance and lifecycle management, MQTT-integrated for real-time vehicle-to-CA communication."
                  approach="Designed for an internal hackathon and recognized among 40+ teams for concept novelty and implementation quality. Implemented secure certificate generation pipelines, real-time message handling via MQTT protocols, and compliant security layers for vehicle communication."
                  tags={["PKI", "IEEE 1609.2", "MQTT", "Backend", "Cryptography"]}
                  githubUrl="https://github.com/Sarvesh-Ramani/CERT-V2X"
                />

                <ProjectItem
                  index="03"
                  title="AI-for-Lunar-Rover"
                  description="U-Net semantic segmentation of lunar terrain across 3 classes (sky, small rocks, large obstacles), trained on 9,766 synthetic Terragen renders."
                  approach="Implemented pixel-level classification to guide rover navigation. Designed and optimized a customized U-Net architecture, preprocessing synthetic imagery to handle noise, shadows, and terrain irregularities."
                  tags={["TensorFlow", "Keras", "U-Net", "Computer Vision", "Semantic Segmentation"]}
                  githubUrl="https://github.com/Sarvesh-Ramani/AI-for-Lunar-Rover"
                />

                <ProjectItem
                  index="04"
                  title="Facial-Recognition-OpenCV"
                  description="Real-time face detection using OpenCV Haar Cascade classifier — live webcam stream with bounding box overlay, zero ML training required."
                  approach="Utilized pre-trained Haar Cascade classifiers for rapid face localization. Developed real-time video capture and rendering loops in Python, ensuring sub-50ms latency for streaming frames."
                  tags={["Python", "OpenCV", "Computer Vision", "Haar Cascade"]}
                  githubUrl="https://github.com/Sarvesh-Ramani/Facial-Recognition-OpenCV"
                />
              </div>
            </Section>
          </ScrollReveal>

          <Divider className="my-0" />

          {/* Skills / Tech Stack Section */}
          <ScrollReveal>
            <Section id="skills">
              <h2 className="text-white text-3xl font-medium tracking-tight mb-12">
                Skills & Tech Stack
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col space-y-3">
                  <h3 className="text-accent font-mono text-xs uppercase tracking-wider">{"// Backend"}</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Java 21", "Spring Boot", "REST APIs", "Python", "JavaScript", "PowerShell"].map((skill) => (
                      <span
                        key={skill}
                        className="text-sm bg-zinc-950/40 border border-border-custom hover:border-accent/40 text-secondary hover:text-white px-3 py-1.5 rounded transition-all duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col space-y-3">
                  <h3 className="text-accent font-mono text-xs uppercase tracking-wider">{"// PKI & Security"}</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Certificate Lifecycle Management", "Digital Certificates", "PKI", "CA Integration"].map((skill) => (
                      <span
                        key={skill}
                        className="text-sm bg-zinc-950/40 border border-border-custom hover:border-accent/40 text-secondary hover:text-white px-3 py-1.5 rounded transition-all duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col space-y-3">
                  <h3 className="text-accent font-mono text-xs uppercase tracking-wider">{"// AI / ML"}</h3>
                  <div className="flex flex-wrap gap-2">
                    {["TensorFlow", "Scikit-learn", "CNN Architectures", "Deep Learning", "Data Preprocessing & Augmentation"].map((skill) => (
                      <span
                        key={skill}
                        className="text-sm bg-zinc-950/40 border border-border-custom hover:border-accent/40 text-secondary hover:text-white px-3 py-1.5 rounded transition-all duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col space-y-3">
                  <h3 className="text-accent font-mono text-xs uppercase tracking-wider">{"// Data & Infra"}</h3>
                  <div className="flex flex-wrap gap-2">
                    {["MongoDB", "Data Pipelines", "Query Optimization", "Docker", "Kubernetes", "AWS (Fundamentals)", "Git/GitHub"].map((skill) => (
                      <span
                        key={skill}
                        className="text-sm bg-zinc-950/40 border border-border-custom hover:border-accent/40 text-secondary hover:text-white px-3 py-1.5 rounded transition-all duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Section>
          </ScrollReveal>

          <Divider className="my-0" />

          {/* Experience Section */}
          <ScrollReveal>
            <Section id="experience">
              <h2 className="text-white text-3xl font-medium tracking-tight mb-16">
                Experience
              </h2>
              <div className="flex flex-col space-y-8">
                <ExperienceItem
                  period="Aug 2023 — Present"
                  role="Software Development Engineer II"
                  company="AppViewX"
                  location="Chennai, India"
                  points={[
                    "SWAT Engineer: primary escalation point for P1/P2 incidents across enterprise clients in banking, healthcare, government, and Fortune 500 industries — handling 10+ critical incidents monthly with same-day workarounds and root-cause fixes.",
                    "Engineered 20+ secure REST APIs and 40+ feature enhancements across AppViewX's PKI and certificate lifecycle management platform, maintaining 100% on-time delivery across client-committed releases.",
                    "Delivered optimizations across certificate discovery, CA implementations, and inventory integrations, cutting discovery time and manual intervention for enterprise device onboarding.",
                    "Integrated GitHub Copilot and Claude into daily engineering workflows for test generation and log triage, cutting manual overhead by an estimated 30%."
                  ]}
                />

                <Divider />

                <ExperienceItem
                  period="May 2024 — Sep 2024"
                  role="ML Research Intern"
                  company="Spartificial"
                  location="Remote"
                  points={[
                    "Built a CNN-based deep learning model for LIGO gravitational wave glitch classification, achieving 92% accuracy across 8 categories.",
                    "Built preprocessing pipelines for 12,000+ spectrogram images (normalization + augmentation), improving training efficiency by 20% and cutting false positives by 25% via 5-fold cross-validation."
                  ]}
                />

                <Divider />

                <ExperienceItem
                  period="Jan 2023 — Jul 2023"
                  role="Software Development Engineer — R&D Intern"
                  company="AppViewX"
                  location="Coimbatore, India"
                  points={[
                    "Built foundational expertise in PKI infrastructure and CA security protocols through Java/Spring Boot feature development.",
                    "Contributed to the initial prototype of SIGN+ (a secure artifact-signing product) as part of a 4-person team, implementing the JAR signer pipeline."
                  ]}
                />
              </div>
            </Section>
          </ScrollReveal>

          <Divider className="my-0" />

          {/* Education & Awards Section */}
          <ScrollReveal>
            <Section id="credentials">
              <h2 className="text-white text-3xl font-medium tracking-tight mb-16">
                Education & Awards
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <h3 className="text-accent font-mono text-xs uppercase tracking-wider">{"// Education"}</h3>

                  <div className="space-y-8">
                    <div>
                      <span className="text-zinc-500 font-mono text-xs block mb-1">Jan 2026 — Present</span>
                      <h4 className="text-white text-lg font-medium">M.Tech, Artificial Intelligence & Machine Learning</h4>
                      <p className="text-secondary text-sm">BITS Pilani (Work-Integrated Learning Programme)</p>
                    </div>

                    <div>
                      <span className="text-zinc-500 font-mono text-xs block mb-1">2019 — 2023</span>
                      <h4 className="text-white text-lg font-medium">B.E, Mechanical Engineering</h4>
                      <p className="text-secondary text-sm">Coimbatore Institute of Technology</p>
                      <span className="inline-block mt-2 text-xs font-mono text-accent bg-accent/5 border border-accent/20 px-2.5 py-0.5 rounded">
                        GPA 9.23 / 10
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <h3 className="text-accent font-mono text-xs uppercase tracking-wider">{"// Recognition & Certifications"}</h3>

                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h4 className="text-white text-base font-medium">AppViewX Recognition</h4>
                      <ul className="space-y-1.5 text-secondary text-sm list-none pl-4">
                        <li className="relative before:content-['•'] before:absolute before:-left-3 before:text-accent">
                          Certificate of Excellence 2025–26
                        </li>
                        <li className="relative before:content-['•'] before:absolute before:-left-3 before:text-accent">
                          SPOT Award (Q2 2024)
                        </li>
                        <li className="relative before:content-['•'] before:absolute before:-left-3 before:text-accent">
                          Certificate of Excellence 2023–24
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-white text-base font-medium">Professional Certifications</h4>
                      <ul className="space-y-1.5 text-secondary text-xs list-none pl-4 font-mono">
                        <li className="relative before:content-['•'] before:absolute before:-left-3 before:text-accent">
                          AI Engineer Accelerator (Outskill)
                        </li>
                        <li className="relative before:content-['•'] before:absolute before:-left-3 before:text-accent">
                          Generative AI with AWS (Udacity)
                        </li>
                        <li className="relative before:content-['•'] before:absolute before:-left-3 before:text-accent">
                          AWS Educate – ML Foundations
                        </li>
                        <li className="relative before:content-['•'] before:absolute before:-left-3 before:text-accent">
                          Python Data Structures
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Section>
          </ScrollReveal>

          <Divider className="my-0" />

          {/* About Section */}
          <ScrollReveal>
            <Section id="about">
              <h2 className="text-white text-3xl font-medium tracking-tight mb-16">
                About
              </h2>
              <div className="space-y-6 text-secondary text-base sm:text-lg leading-relaxed max-w-[680px]">
                <p>
                  I am a software engineer specializing in building high-performance backend systems, enterprise-grade security structures, and robust AI integrations. As an SDE II at AppViewX, I operate as a <span className="text-white font-medium">SWAT Engineer</span> — acting as the primary escalation point for critical P1/P2 incidents for global banks, healthcare networks, and Fortune 500 systems. This role demands a calm, analytical approach under intense pressure to deliver rapid root-cause resolutions.
                </p>
                <p>
                  Driven by a deep interest in intelligence systems, I am currently pursuing an <span className="text-white font-medium">M.Tech in Artificial Intelligence & Machine Learning at BITS Pilani</span> alongside my full-time engineering work. I actively bridge the gap between software engineering and ML by integrating advanced LLM agents like Copilot and Claude to optimize developer velocity, reducing log triage and manual workflows by 30%.
                </p>
                <p>
                  Whether designing secure PKI pipelines or training computer vision models, my focus is writing clean, resilient, and audit-ready code. Outside of technology, you can find me playing football or capturing moments through my camera lens.
                </p>
              </div>
            </Section>
          </ScrollReveal>

          <Divider className="my-0" />

          {/* Contact Section */}
          <ScrollReveal>
            <Section id="contact" className="pb-32">
              <h2 className="text-white text-3xl font-medium tracking-tight mb-16">
                Contact
              </h2>
              <div className="flex flex-col space-y-8">
                <p className="text-secondary text-base sm:text-lg max-w-[600px] leading-relaxed">
                  I am always open to discussing backend architectures, digital security, PKI implementations, or AI/ML workloads.
                </p>

                <div className="flex items-center space-x-2">
                  <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-accent font-mono text-xs tracking-wider uppercase">
                    Open to backend & AI engineering conversations
                  </span>
                </div>

                <div className="flex flex-wrap gap-x-8 gap-y-4 pt-4 text-base font-normal">
                  <a
                    href="https://github.com/Sarvesh-Ramani"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:text-white transition-colors duration-200 underline-offset-4 hover:underline focus-visible:outline-accent"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sarvesh-ramani/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:text-white transition-colors duration-200 underline-offset-4 hover:underline focus-visible:outline-accent"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="mailto:sarveshramani1004@gmail.com"
                    className="text-secondary hover:text-white transition-colors duration-200 underline-offset-4 hover:underline focus-visible:outline-accent"
                  >
                    Email
                  </a>
                  <a
                    href="assets/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:text-white transition-colors duration-200 underline-offset-4 hover:underline focus-visible:outline-accent"
                  >
                    Resume
                  </a>
                </div>
              </div>
            </Section>
          </ScrollReveal>
        </Container>
      </main>

      <Footer />
    </>
  );
}
