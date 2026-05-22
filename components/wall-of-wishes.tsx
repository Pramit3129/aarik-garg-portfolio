const wishes = [
  {
    message:
      "May God bless you with endless happiness, good health and lots of love always",
    author: "Dadi",
    date: "May 15, 2025",
    color: "bg-[#f3e3c5]",
    tape: "left-5 -top-4 rotate-[-10deg]",
    rotate: "rotate-[-3deg]",
    heart: "text-[#d72422]",
  },
  {
    message: "Keep smiling my baby boy! You are our sunshine",
    author: "Nani",
    date: "May 15, 2025",
    color: "bg-[#d8c8e4]",
    tape: "left-8 -top-5 rotate-[8deg]",
    rotate: "rotate-[2deg]",
    heart: "text-[#7552a3]",
  },
  {
    message:
      "Welcome to the world little champ! Can't wait to see all the amazing things you'll do",
    author: "Chachu Rohan",
    date: "May 15, 2025",
    color: "bg-[#f8f3e8]",
    tape: "right-8 -top-4 rotate-[-3deg]",
    rotate: "rotate-[-1deg]",
    heart: "text-[#0d73a8]",
    grid: true,
  },
  {
    message: "You are so loved little Aarik. Grow, learn and shine always",
    author: "Bua",
    date: "May 15, 2025",
    color: "bg-[#f4d55b]",
    tape: "left-7 -top-4 rotate-[-9deg]",
    rotate: "rotate-[3deg]",
    heart: "text-[#9a6a12]",
  },
];

function BlobButton({
  children,
  className = "",
}: Readonly<{ children: React.ReactNode; className?: string }>) {
  return (
    <a
      href="#"
      className={`relative inline-flex h-16 items-center justify-center px-9 text-base font-black uppercase text-[#231b14] drop-shadow-[0_8px_0_rgba(0,0,0,0.12)] transition hover:-translate-y-0.5 [font-family:var(--font-caveat),cursive] ${className}`}
    >
      <svg
        className="absolute inset-0 -z-10 size-full text-[#e3a83b]"
        viewBox="0 0 210 82"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M13.4 54.8C4.8 40.5 8.4 19.1 26.4 11.3 43.8 3.8 69 7.5 88.1 5.4c28.2-3 48.7-6.7 70.7.9 15.9 5.5 22 17.5 24.5 28.1 14 2.2 19.4 13.2 12.5 24.1-8.3 13.2-30.2 13.6-47.8 12.7-25.1-1.3-44.1 3.8-69 5.1-27 1.4-51.1-.3-65.6-21.5Z"
        />
      </svg>
      <span className="relative z-10">{children}</span>
    </a>
  );
}

export function WallOfWishes() {
  return (
    <section
      className="relative isolate overflow-hidden bg-[oklch(24%_3%_88deg)] pb-16 pt-24 text-white md:pb-20 md:pt-28"
      aria-labelledby="wall-title"
    >
      <svg
        className="pointer-events-none absolute inset-x-0 -top-px h-24 w-full text-[oklch(92%_7%_74deg)]"
        viewBox="0 0 1440 150"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M0 0H1440V63C1365 35 1324 76 1247 83C1167 91 1135 45 1051 55C970 65 942 107 860 96C777 85 747 45 667 58C589 71 560 112 488 99C411 85 386 56 318 72C247 89 225 119 157 99C93 80 58 48 0 60Z"
        />
      </svg>

      <div
        className="pointer-events-none absolute inset-0 overflow-hidden text-[#d08b19]"
        aria-hidden="true"
      >
        <span className="absolute left-[7%] top-[18%] rotate-[-18deg] text-5xl leading-none [font-family:var(--font-caveat),cursive]">
          ♡
        </span>
        <span className="absolute right-[10%] top-[22%] rotate-12 text-6xl leading-none [font-family:var(--font-caveat),cursive]">
          ☆
        </span>
        <span className="absolute right-[5%] bottom-[18%] rotate-[-14deg] text-6xl leading-none opacity-70 [font-family:var(--font-caveat),cursive]">
          ♡♡
        </span>
        <span className="absolute left-[1%] bottom-[24%] rotate-[-10deg] text-7xl leading-none opacity-60 [font-family:var(--font-caveat),cursive]">
          〰
        </span>

        <svg
          className="absolute right-[18%] top-[14%] h-16 w-16"
          viewBox="0 0 60 60"
        >
          <path
            d="M30 5v15M30 40v15M5 30h15M40 30h15"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="3"
          />
        </svg>

        <svg
          className="absolute right-[7%] top-[36%] h-20 w-24 opacity-45"
          viewBox="0 0 96 80"
        >
          {Array.from({ length: 18 }).map((_, index) => (
            <circle
              key={index}
              cx={10 + (index % 6) * 13}
              cy={14 + Math.floor(index / 6) * 14}
              r={index % 3 === 0 ? 1.9 : 1.25}
              fill="currentColor"
            />
          ))}
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mb-9 flex flex-col items-center gap-5 text-center md:mb-12 md:flex-row md:justify-between md:text-left">
          <div className="mx-auto md:mx-0 md:flex-1" />
          <div className="text-center">
            <div className="mx-auto mb-2 h-1 w-24 rounded-full bg-[#e3a83b]" />
            <h2
              id="wall-title"
              className="text-4xl font-black uppercase tracking-wide text-white [font-family:var(--font-caveat),cursive] sm:text-5xl"
            >
              Wall of Wishes
            </h2>
            <p className="mt-3 text-sm text-white/88 [font-family:var(--font-inter),sans-serif] sm:text-base">
              Your wishes, love & blessings mean the world to me.{" "}
              <span className="text-[#e3a83b]">♡</span>
            </p>
          </div>
          <div className="flex justify-center md:flex-1 md:justify-end">
            <BlobButton className="rotate-[-3deg]">View all wishes →</BlobButton>
          </div>
        </div>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4">
          {wishes.map((wish) => (
            <article
              key={wish.author}
              className={`relative min-h-64 p-7 text-[#21170f] shadow-[0_18px_24px_rgba(0,0,0,0.22)] ${wish.color} ${wish.rotate} [font-family:var(--font-caveat),cursive] [clip-path:polygon(3%_3%,92%_0,97%_12%,96%_94%,12%_98%,4%_91%)]`}
            >
              <span
                className={`absolute ${wish.tape} h-8 w-20 bg-[#c6ad78]/70 shadow-sm`}
              />
              {wish.grid ? (
                <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(68,91,112,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(68,91,112,0.08)_1px,transparent_1px)] bg-[size:18px_18px]" />
              ) : null}
              <p className="relative text-2xl leading-9">{wish.message}</p>
              <div className="relative mt-6 text-lg">
                <p>– {wish.author} <span className={wish.heart}>♥</span></p>
                <p className="mt-1 text-sm [font-family:var(--font-inter),sans-serif]">
                  {wish.date}
                </p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
