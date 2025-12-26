import Layout from "@theme/Layout";
import Hero from "../components/Hero";
import Card from "../components/Card";
import ExperienceCard from "../components/ExperienceCard";
import EducationCard from "../components/EducationCard";
import PageSection from "../components/PageSection";

export default function Home() {
  return (
    <Layout title="Abhay Ojha">
      <Hero />

      <PageSection title="💼 Experience">
        <div className="row row--center">
          <div className="col col--12">
            <ExperienceCard
              role="Graduate Intern – Technical"
              company="Intel Corporation"
              duration="2024 – Present"
              details={[
                "Built Python automation frameworks reducing manual effort",
                "Developed scalable scripts for data validation and reporting",
                "Improved productivity across engineering workflows",
              ]}
              tech={["Python", "Linux", "Automation"]}
            />
          </div>
        </div>
      </PageSection>

      <PageSection title="🎓 Education">
        <div className="row row--center">
          <div className="col col--6">
            <EducationCard
              degree="M.Tech – Computer Science & Information Security"
              institute="NIT Warangal"
              duration="2023 – 2025"
              score="CGPA: 9.13"
              // details={[
              //   "Focus on Security, Trust Models, and Machine Learning",
              //   "Coursework: Advanced OS, Cryptography, Network Security",
              // ]}
            />
          </div>

          <div className="col col--6">
            <EducationCard
              degree="B.Tech – Computer Science & Engineering"
              institute="RGPV"
              duration="2019 – 2023"
              score="CGPA: 8.83"
              // details={[
              //   "Strong foundation in DSA, DBMS, and OS",
              //   "Final year project on security systems",
              // ]}
            />
          </div>
        </div>
      </PageSection>
    </Layout>
  );
}
