import ComparisonCard from "@/components/ui/comparisonCard";
import Avatar from "@/assets/png/avatar1.png";
import AnotherTalent from "@/assets/png/anotherTalent.png";

const valueList = [
  { text: "React Expert", type: "good" },
  { text: "Precise Website Implementation", type: "good" },
  { text: "TypeScript Proficiency", type: "good" },
  { text: "Clean, Maintainable Code", type: "good" },
  { text: "Responsive Website Development", type: "good" },
  { text: "Performance Optimization", type: "good" },
  { text: "UI Design Proficiency (Figma)", type: "good" },
] as const;

const anotherTalent = [
  { text: "Basic React Knowledge", type: "bad" },
  { text: "Inconsistent Design Translation", type: "bad" },
  { text: "Little to No TypeScript Knowledge", type: "bad" },
  { text: "Unstructured Code", type: "bad" },
  { text: "Inconsistent Responsiveness", type: "bad" },
  { text: "Slow and Heavy Websites", type: "bad" },
  { text: "No Design Skills", type: "bad" },
] as const;

export default function Comparison() {
  return (
    <section className="px-4 py-12 text-center items-center max-w-360 mx-auto">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          More Than Just Code
        </h2>
        <p className="text-sm font-medium leading-loose mb-6">
          We care about design, performance, and user experience all in one.
        </p>
      </div>
      <div className="flex flex-col md:flex-row md:justify-center md:space-x-6 space-y-6">
        <ComparisonCard
          title="With Me"
          avatar={Avatar}
          items={valueList}
          highlight
        />

        <ComparisonCard
          title="Another Talent"
          avatar={AnotherTalent}
          items={anotherTalent}
        />
      </div>
    </section>
  );
}
