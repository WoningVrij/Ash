import logoImage from "@assets/LOGO_Ash_17_50_35_1753818955572.png";

export function AshLogo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <img
      src={logoImage}
      alt="ASH Logo"
      className={className}
    />
  );
}
