import { StaggeredMenu } from "./menu";
import { links } from "./navlinks";
import { resumeLink } from "@/utils/data/resume";

export const NavBar = () => {
  const menuColors = ["#4A7AE2", "#5227FF"];

  // Convert links to StaggeredMenu format
  const menuItems = links.map(link => ({
    label: link.text,
    ariaLabel: `Navigate to ${link.text}`,
    link: link.href,
  }));

  const socialItems = [
    { label: "LinkedIn", link: "https://www.linkedin.com/in/james-tu-cornell/" },
    { label: "GitHub", link: "https://github.com/JamesDos" },
    { label: "Email", link: "mailto:jamestucontact@gmail.com" },
    { label: "Resume", link: resumeLink },
  ];

  return (
    <StaggeredMenu
      position="right"
      colors={menuColors}
      items={menuItems}
      socialItems={socialItems}
      displaySocials={true}
      displayItemNumbering={false}
      logoText="James Tu"
      menuButtonColor="#ffffff"
      openMenuButtonColor="#000000"
      accentColor={menuColors[0]}
      isFixed={true}
      changeMenuColorOnOpen={true}
      closeOnClickAway={false}
    />
  );
};
