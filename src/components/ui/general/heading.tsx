// @ts-ignore - splitText.jsx doesn't have type definitions
import SplitText from "@/components/ui/general/splitText";

export interface HeadingProps {
  title: string;
  textAlign?: "left" | "center";
}

export const Heading = (props: HeadingProps) => {
  const alignment = props.textAlign === "center" ? "center" : "left";
  return (
    <SplitText
      text={props.title}
      tag="h1"
      className="text-4xl md:text-5xl mb-4 font-bold text-black dark:text-white block"
      textAlign={alignment}
      splitType="lines"
      delay={0}
      duration={0.4}
      from={{ opacity: 0, y: 20 }}
      to={{ opacity: 1, y: 0 }}
      threshold={0.1}
      mask="lines"
    />
  );
};
