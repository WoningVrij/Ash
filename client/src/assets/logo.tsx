export function AshLogo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Phoenix/Fire symbol with house */}
      <g>
        {/* House base */}
        <path
          d="M50 20L30 40L30 70L70 70L70 40L50 20Z"
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
        />
        {/* House door */}
        <rect x="45" y="55" width="10" height="15" stroke="currentColor" strokeWidth="2" fill="none" />
        {/* Phoenix flames */}
        <path
          d="M35 35C32 30 30 25 32 20C34 22 36 24 35 35Z"
          fill="currentColor"
        />
        <path
          d="M65 35C68 30 70 25 68 20C66 22 64 24 65 35Z"
          fill="currentColor"
        />
        <path
          d="M50 15C48 10 50 5 55 8C52 12 50 15 50 15Z"
          fill="currentColor"
        />
        {/* Circle around house */}
        <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="2" fill="none" />
      </g>
    </svg>
  );
}
