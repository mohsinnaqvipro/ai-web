import Hero from "./Hero/page";
import NavbarPage from "./Navbar/page";
import styles from "./page.module.css";
import CtaOne from "./CtaOne/page";
import FooterLayout from "./Footer/page";
import TextFeatureOne from "./TextFeatureOne/page";
import TextFeatureTwo from "./TextFeatureTwo/page";
import FeatureImageTwo from "./FeatureImageTwo/page";

export default function Home() {
  return (
    <>
      <NavbarPage />
      <Hero />
      <FeatureImageTwo />
      <CtaOne />
      <TextFeatureOne />
      <TextFeatureTwo />
      <FooterLayout />
    </>
  );
}
