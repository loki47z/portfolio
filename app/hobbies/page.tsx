import HobbyCard from "@/components/HobbyCard";

const hobbiesData = [
  {
    title: "Minecraft",
    category: "SANDBOX",
    description:
      "Exploring vast worlds, building intricate structures, and collaborating with friends in this sandbox game fuels my creativity and problem-solving skills.",
    image: "/minecraft.png",
  },
  {
    title: "Call of Duty Mobile",
    category: "MULTIPLAYER",
    description:
      "Engaging in fast-paced multiplayer battles sharpens my strategic thinking and teamwork abilities while providing an adrenaline rush.",
    image: "/CODM.png",
  },
  {
    title: "Formula 1",
    category: "MOTORSPORT",
    description:
      "Following the high-speed world of F1 racing combines my love for technology and competition, inspiring me with cutting-edge engineering and thrilling races.",
    image: "/F1.svg",
  },
  {
    title: "English Premier League",
    category: "FOOTBALL",
    description:
      "Watching the EPL fuels my passion for football, where I appreciate the skill, strategy, and excitement of the game while supporting my favorite teams.",
    image: "/premier-league.svg",
  },
  {
    title: "Naruto Series",
    category: "ANIME",
    description:
      "Immersing myself in the world of Naruto inspires me with its themes of perseverance, friendship, and growth, while enjoying its captivating storylines and characters.",
    image: "/Naruto_logo.svg",
  },
  {
    title: "Board Games",
    category: "STRATEGY",
    description:
      "Engaging in board games enhances my strategic thinking and social skills, providing a fun way to connect with friends and family over friendly competition.",
    image: "/chess.png",
  },
];

export default function HobbiesPage() {
  return (
    <section
      id="hobbies"
      className="max-w-[1200px] mx-auto px-gutter-lg md:px-page-margin py-section flex flex-col gap-gutter-xl"
    >
      <div className="flex flex-col gap-gutter-xs">
        <span className="font-label text-label-md text-light-primary">OFF THE CLOCK</span>
        <h1 className="font-headline text-headline-lg-mobile md:text-headline-lg text-light-on-surface">
          Hobbies &amp; Interests
        </h1>
        <p className="font-body text-body-lg text-light-on-surface-variant max-w-2xl">
          When I&apos;m not coding, I apply the same principles of strategic thinking, complex
          system analysis, and persistent iteration to my favorite hobbies.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter-lg items-stretch">
        {hobbiesData.map((hobby) => (
          <HobbyCard
            key={hobby.title}
            title={hobby.title}
            category={hobby.category}
            description={hobby.description}
            image={hobby.image}
          />
        ))}
      </div>
    </section>
  );
}
