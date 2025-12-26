import Layout from "@theme/Layout";
import Hero from "../components/Hero";
import Card from "../components/Card";
import ExperienceCard from "../components/ExperienceCard";
import EducationCard from "../components/EducationCard";
import PageSection from "../components/PageSection";
import Skills from "../components/Skills/Skills";
import Experience from "../components/Experience/Experience";
import Education from "../components/Education/Education";
export default function Home() {
  return (
    <Layout title="Abhay Ojha">
      <Hero />
      <Skills />
      <Experience />
     <Education />
    </Layout>
  );
}
