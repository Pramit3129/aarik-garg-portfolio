import Image from "next/image";

const navItems = ["Home", "My Story", "Milestones", "Gallery"];

export function Hero() {
  return (
    <section
      className="relative isolate min-h-screen overflow-hidden bg-[oklch(89%_9%_76deg)] text-[#21170f]"
      aria-labelledby="hero-title"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(255,255,255,0.32),transparent_20rem),radial-gradient(circle_at_92%_12%,rgba(164,105,17,0.14),transparent_17rem),linear-gradient(rgba(89,59,26,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(89,59,26,0.035)_1px,transparent_1px)] bg-[size:auto,auto,44px_44px,44px_44px]" />

      <header className="relative z-20">
        <div className="absolute inset-x-0 top-0 h-28 bg-[oklch(24%_3%_88deg)] shadow-[0_12px_28px_rgba(35,25,18,0.18)] md:h-32" />
        <svg
          className="pointer-events-none absolute inset-x-0 top-[6.5rem] h-12 w-full text-[oklch(24%_3%_88deg)] drop-shadow-[0_12px_14px_rgba(35,25,18,0.16)] md:top-[7.5rem] md:h-16"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            fill="currentColor"
            d="M0,0H1440V48C1368,88,1284,32,1200,42C1116,52,1062,94,952,72C842,50,818,20,730,48C642,76,596,98,500,74C404,50,334,30,244,48C154,66,74,112,0,62Z"
          />
        </svg>
        <nav className="relative mx-auto flex max-w-7xl items-start justify-between gap-6 px-5 pb-8 pt-4 sm:px-8 lg:px-10">
          <a
            href="#"
            className="group leading-none"
            aria-label="Aarik Garg home"
          >
            <span className="block -rotate-6 text-2xl text-[#f1b71c] [font-family:var(--font-caveat),cursive] sm:text-3xl">
              ♕
            </span>
            <span className="block text-3xl font-bold tracking-wide text-white [font-family:var(--font-caveat),cursive] sm:text-4xl">
              AARIK GARG
            </span>
            <span className="mt-1 block text-sm font-black uppercase tracking-[0.12em] text-[#f1b71c] [font-family:var(--font-caveat),cursive] sm:text-base">
              My Little Journey
            </span>
          </a>

          <div className="hidden items-center gap-9 pt-8 text-base text-white/92 md:flex">
            {navItems.map((item) => (
              <a
                href="#"
                key={item}
                className="relative inline-flex items-center gap-3 font-medium transition hover:text-[#f3bc25] [font-family:var(--font-inter),sans-serif]"
              >
                {item === "Home" ? (
                  <span className="text-xl leading-none text-[#f3bc25]">✭</span>
                ) : null}
                {item}
                {item === "Home" ? (
                  <span className="absolute -bottom-3 left-8 h-1 w-[calc(100%-2rem)] rounded-full bg-[#f3bc25]" />
                ) : null}
              </a>
            ))}
          </div>

          <div className="relative mt-4 hidden rotate-[-4deg] md:block">
            <span className="pointer-events-none absolute -right-2 -top-6 z-20 rotate-12 text-5xl text-[#f3bc25]">
              ♕
            </span>
            <a
              href="#"
              className="relative inline-flex h-16 min-w-36 items-center justify-center px-8 text-lg font-bold text-[#21170f] drop-shadow-[0_10px_0_rgba(0,0,0,0.12)] transition hover:-translate-y-0.5 [font-family:var(--font-caveat),cursive]"
            >
              <svg
                className="absolute inset-0 -z-10 size-full text-[#e3a83b]"
                viewBox="0 0 176 76"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M9.6 50.9C2.5 37.6 7 17.2 23.1 9.7 37.4 3 59.8 4.2 76.5 3.3c22.2-1.2 46.8-3 64.5 4.8 14 6.2 18.8 16.8 21.5 27.1 10.1 1.6 13.2 11.7 8 20.8-6.6 11.6-23.7 12.5-38.2 11.6-18.9-1.1-35.1 3.1-53.4 4.8-18.4 1.7-38.1.1-52.2-3.1C18.9 67.5 13.8 58.8 9.6 50.9Z"
                />
              </svg>
              <span className="relative z-10">
                Wishes <span className="ml-2 text-[#c9171f]">♡</span>
              </span>
            </a>
          </div>
        </nav>
      </header>

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-10 px-5 pb-16 pt-8 sm:px-8 md:grid-cols-[0.9fr_1.1fr] md:pb-20 md:pt-2 lg:px-10">
        <div className="max-w-xl pt-4 md:pt-12">
          <div className="mb-4 flex items-center gap-4 text-[#a56b26] [font-family:var(--font-caveat),cursive]">
            <span className="h-1 w-8 rotate-12 rounded-full bg-[#e5a40f]" />
            <p className="text-3xl sm:text-4xl">Hi, I&apos;m</p>
            <span className="h-1 w-8 -rotate-12 rounded-full bg-[#e5a40f]" />
          </div>

          <h1
            id="hero-title"
            className="text-5xl font-black leading-[0.95] tracking-normal text-[#1d120b] [font-family:var(--font-caveat),cursive] sm:text-7xl lg:text-8xl"
          >
            AARIK GARG
          </h1>

          <div className="mt-3 h-3 max-w-md rounded-full bg-[#edb21c] [clip-path:polygon(0_38%,86%_25%,88%_0,100%_50%,88%_100%,86%_68%,0_72%)]" />

          <p className="mt-8 max-w-[15ch] text-4xl font-black leading-[1.02] text-[#3a2a1a] [font-family:var(--font-libertinus),serif] sm:text-4xl lg:text-6xl">
            Today, I<br /> turned <br />
            <span className="text-[#c88716]">two months old.</span>
          </p>

          <p className="mt-7 max-w-md text-lg leading-8 text-[#21170f] [font-family:var(--font-inter),sans-serif]">
            I may be tiny, but my dreams are big.
            <br /> This is the beginning of my journey,
            <br /> and I&apos;m so happy you&apos;re here with me.{" "}
            <span className="text-[#9d6a13]">♥</span>
          </p>

          <a
            href="#"
            className="relative mt-9 inline-flex h-18 min-w-64 rotate-[-2deg] items-center justify-center px-10 text-2xl font-black uppercase text-[#ffc53b] drop-shadow-[0_8px_0_rgba(84,54,18,0.18)] transition hover:-translate-y-0.5 [font-family:var(--font-caveat),cursive]"
          >
            <svg
              className="absolute inset-0 -z-10 size-full text-[oklch(24%_3%_88deg)]"
              viewBox="0 0 286 88"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                fill="currentColor"
                d="M16.3 58.9C5.4 43.2 9.5 21.1 28.6 12.2c15.6-7.3 39.9-4 61.1-4.7 28.4-1 49.4-7.1 73.2-3.8 17.1 2.4 25.8 10.6 35.7 18.2 16.8-3.5 37.9-8.3 55.2-.5 16.7 7.5 27.9 29.4 12.7 44.1-9.3 13.4-30.6 14.6-51 13.6-23.2-1.1-44 3.9-67.1 5.3-25.6 1.5-47.2-4.3-70.6-5.6-23.1-1.3-47 3.9-61.5-19.9Z"
              />
            </svg>
            <span className="relative z-10">Leave me a wish</span>
          </a>
        </div>

        <div className="relative mx-auto w-full max-w-[660px] md:max-w-none">
          <div className="pointer-events-none absolute -left-4 top-10 text-5xl font-black text-[#efb316] [font-family:var(--font-caveat),cursive] md:-left-8">
            ✦
          </div>
          <div className="pointer-events-none absolute right-2 top-4 rotate-12 text-5xl text-[#c5831f] [font-family:var(--font-caveat),cursive]">
            ☆
          </div>
          <div className="pointer-events-none absolute bottom-9 right-0 text-6xl text-[#e6a91d] [font-family:var(--font-caveat),cursive]">
            +
          </div>

          <Image
            src="/astro.png"
            alt="Hand drawn astronaut artwork for Aarik Garg"
            width={1160}
            height={1355}
            priority
            className="relative z-10 mx-auto h-auto w-[88%] max-w-[610px] drop-shadow-[0_24px_34px_rgba(31,23,15,0.24)] md:w-full"
            sizes="(max-width: 768px) 88vw, 52vw"
          />
        </div>
      </div>

      <div className="relative z-10 -mt-8 bg-[oklch(92%_7%_74deg)] py-10 [clip-path:ellipse(76%_66%_at_50%_100%)] md:-mt-14 md:py-14">
        <div className="mx-auto grid max-w-5xl gap-5 px-6 text-center text-lg leading-8 text-[#21170f] [font-family:var(--font-inter),sans-serif] md:grid-cols-[1fr_auto_1fr] md:items-center">
          <p>This is just the beginning of a beautiful story. ♥</p>
          <Image
            src="/lion.png"
            alt="Little lion mascot"
            width={1254}
            height={1254}
            className="mx-auto hidden size-28 rounded-full object-contain md:block"
          />
          <p>Thank you for being a part of my world. ♥</p>
        </div>
      </div>
    </section>
  );
}
