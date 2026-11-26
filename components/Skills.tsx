interface SkillsProps {
  sname: string;
  variant?: "primary" | "neutral";
}

export default function Skills({ sname, variant = "neutral" }: SkillsProps) {
  const variantClasses =
    variant === "primary"
      ? "bg-light-surface-container-low text-light-primary border-light-outline-variant"
      : "bg-light-surface-container text-light-on-surface border-light-outline-variant";

  return (
    <span
      className={`px-3 py-1.5 rounded-full border font-label text-label-sm transition-colors duration-state-change ${variantClasses}`}
    >
      {sname}
    </span>
  );
}
