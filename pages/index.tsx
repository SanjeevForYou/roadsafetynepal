import Container from "@mui/material/Container";
import Hero from "@components/Hero";
import SectionAbout from "@components/SectionAbout";

const Homepage = () => {
  return (
    <>
    <Hero
        imgSrc="/images/homepage-hero.jpg"
        imgAlt="motorcycle with abs braking system applied"
        title="Be safe in the road"
        subtitle="We guide you to be safe in the road."
      />
      <SectionAbout />
    </>
  );
};

export default Homepage;