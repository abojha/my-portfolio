import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import Grid from "@mui/material/Grid";
import Link from "@docusaurus/Link";

const FeatureList = [
  {
    title: "My Research",
    link: "docs/category/my-research",
    Svg: require("@site/static/img/research.svg").default,
    description: (
      <>
        My research focuses on trust-based security mechanisms, DDoS attack
        detection in IoT and 6G networks, federated learning security, and
        Digital Twin–enabled industrial systems, with an emphasis on robustness
        against adversarial behavior.
      </>
    ),
  },
  {
    title: "Projects",
    link: "docs/category/projects",
    Svg: require("@site/static/img/project.svg").default,
    description: (
      <>
        I build research-driven and practical projects spanning cybersecurity,
        machine learning, blockchain systems, operating systems, and system
        design—ranging from DDoS detection frameworks to full-stack and
        algorithmic implementations.
      </>
    ),
  },
  {
    title: "Tools & Code",
    link: "docs/category/tools",
    Svg: require("@site/static/img/code.svg").default,
    description: (
      <>
        I develop reusable tools, scripts, and implementations in C++, Python,
        and JavaScript for learning, research, and automation—covering data
        mining algorithms, trust models, neural networks, and system utilities.
      </>
    ),
  },
  {
    title: "YouTube (Binary Dose)",
    link: "https://www.youtube.com/@BinaryDose",
    Svg: require("@site/static/img/video.svg").default,
    description: (
      <>
        I create concise and concept-focused video lectures on Computer Science
        topics including Data Structures & Algorithms, Operating Systems,
        DBMS, Computer Networks, Machine Learning, and hands-on coding tutorials
        for B.Tech and interview preparation.
      </>
    ),
  },
];


function Feature({ Svg, title, description, link }) {
  return (
    <>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Link to={link}>
          <Heading as="h3">{title}</Heading>
        </Link>
        <p>{description}</p>
      </div>
    </>
  );
}

export default function HomepageFeatures() {
  return (
    <>
      {FeatureList.map((props, idx) => (
        <Grid key={idx} size={{xs:12, sm:10, md:6}}>
          <Feature key={idx} {...props} />
        </Grid>
      ))}
    </>
  );
}
