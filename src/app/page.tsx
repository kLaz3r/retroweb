export default function HomePage() {
  return (
    <div>
      <HeroSection />
    </div>
  );
}

function HeroSection() {
  return (
    <main className="bg-background h-screen w-full pt-28">
      <div className="container mx-auto flex h-full flex-row items-center justify-between">
        <div className="text-text flex w-1/2 flex-col items-start justify-center pr-12">
          <h6 className="font-display text-secondary text-2xl font-bold">
            RETROWEB
          </h6>
          <h1 className="font-display text-6xl font-black leading-normal">
            Play Retro Games right in your web browser
          </h1>
          <p className="font-body text-bodyText text-2xl">
            Turn back the clock with your favorite retro games. Play instantly
            and bring the nostalgia wherever you are.
          </p>
          <button>PLAY</button>
        </div>
        <RetrowaveSunSVG />
      </div>
    </main>
  );
}

function RetrowaveSunSVG() {
  return (
    <svg
      width="619"
      height="551"
      viewBox="0 0 619 551"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M96.4395 533.311C97.729 534.527 99.0315 535.737 100.34 536.936H517.715C519.027 535.737 520.326 534.527 521.612 533.311H96.4395Z"
        fill="url(#paint0_linear_2_4)"
      />
      <path
        d="M112.973 547.907C114.199 548.908 115.43 549.896 116.665 550.881H501.39C502.625 549.896 503.86 548.908 505.079 547.907H112.973Z"
        fill="url(#paint1_linear_2_4)"
      />
      <path
        d="M69.3616 504.103C70.7185 505.768 72.0915 507.414 73.4837 509.05H544.575C545.964 507.414 547.34 505.768 548.694 504.103H69.3616Z"
        fill="url(#paint2_linear_2_4)"
      />
      <path
        d="M82.0393 518.706C83.3674 520.143 84.7083 521.577 86.0652 522.988H531.993C533.35 521.577 534.685 520.143 536.013 518.706H82.0393Z"
        fill="url(#paint3_linear_2_4)"
      />
      <path
        d="M0 309.031C0 324.884 1.19658 340.455 3.50307 355.667H614.555C616.855 340.455 618.058 324.884 618.058 309.031C618.058 138.357 479.701 0 309.024 0C138.357 0 0 138.357 0 309.031Z"
        fill="url(#paint4_linear_2_4)"
      />
      <path
        d="M58.1626 489.501C59.5228 491.384 60.8989 493.254 62.2944 495.105H555.757C557.156 493.254 558.532 491.384 559.886 489.501H58.1626Z"
        fill="url(#paint5_linear_2_4)"
      />
      <path
        d="M10.0022 387.284C10.9004 390.717 11.866 394.117 12.8732 397.502H605.181C606.192 394.117 607.154 390.717 608.046 387.284H10.0022Z"
        fill="url(#paint6_linear_2_4)"
      />
      <path
        d="M6.57642 372.685C7.34311 376.336 8.1803 379.954 9.06889 383.557H608.989C609.878 379.954 610.715 376.336 611.479 372.685H6.57642Z"
        fill="url(#paint7_linear_2_4)"
      />
      <path
        d="M14.2056 401.887C15.2161 405.098 16.2875 408.277 17.3974 411.44H600.656C601.769 408.277 602.841 405.098 603.851 401.887H14.2056Z"
        fill="url(#paint8_linear_2_4)"
      />
      <path
        d="M3.88818 358.079C4.50731 361.948 5.19382 365.794 5.95089 369.612H612.101C612.865 365.794 613.551 361.948 614.164 358.079H3.88818Z"
        fill="url(#paint9_linear_2_4)"
      />
      <path
        d="M39.5146 460.296C40.8203 462.622 42.1548 464.928 43.5214 467.219H574.53C575.896 464.928 577.234 462.622 578.539 460.296H39.5146Z"
        fill="url(#paint10_linear_2_4)"
      />
      <path
        d="M31.8069 445.697C33.0708 448.244 34.3603 450.766 35.6852 453.274H582.37C583.695 450.766 584.988 448.244 586.246 445.697H31.8069Z"
        fill="url(#paint11_linear_2_4)"
      />
      <path
        d="M48.2502 474.902C49.5911 477.003 50.9577 479.091 52.3499 481.157H565.705C567.097 479.091 568.461 477.003 569.805 474.902H48.2502Z"
        fill="url(#paint12_linear_2_4)"
      />
      <path
        d="M25.0603 431.091C26.2504 433.86 27.4887 436.606 28.7558 439.333H589.299C590.566 436.606 591.805 433.86 592.995 431.091H25.0603Z"
        fill="url(#paint13_linear_2_4)"
      />
      <path
        d="M19.2095 416.489C20.3162 419.479 21.4807 422.443 22.6772 425.388H595.375C596.578 422.443 597.736 419.479 598.843 416.489H19.2095Z"
        fill="url(#paint14_linear_2_4)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2_4"
          x1="309.026"
          y1="536.936"
          x2="309.026"
          y2="533.311"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF3864" />
          <stop offset="1" stopColor="#FF6C11" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_2_4"
          x1="309.026"
          y1="550.881"
          x2="309.026"
          y2="547.907"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF3864" />
          <stop offset="1" stopColor="#FF6C11" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_2_4"
          x1="309.028"
          y1="509.05"
          x2="309.028"
          y2="504.103"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF3864" />
          <stop offset="1" stopColor="#FF6C11" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_2_4"
          x1="309.026"
          y1="522.988"
          x2="309.026"
          y2="518.706"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF3864" />
          <stop offset="1" stopColor="#FF6C11" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_2_4"
          x1="309.029"
          y1="355.667"
          x2="309.029"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF3864" />
          <stop offset="1" stopColor="#FF6C11" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_2_4"
          x1="309.024"
          y1="495.105"
          x2="309.024"
          y2="489.501"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF3864" />
          <stop offset="1" stopColor="#FF6C11" />
        </linearGradient>
        <linearGradient
          id="paint6_linear_2_4"
          x1="309.024"
          y1="397.502"
          x2="309.024"
          y2="387.284"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF3864" />
          <stop offset="1" stopColor="#FF6C11" />
        </linearGradient>
        <linearGradient
          id="paint7_linear_2_4"
          x1="309.027"
          y1="383.557"
          x2="309.027"
          y2="372.685"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF3864" />
          <stop offset="1" stopColor="#FF6C11" />
        </linearGradient>
        <linearGradient
          id="paint8_linear_2_4"
          x1="309.028"
          y1="411.44"
          x2="309.028"
          y2="401.887"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF3864" />
          <stop offset="1" stopColor="#FF6C11" />
        </linearGradient>
        <linearGradient
          id="paint9_linear_2_4"
          x1="309.026"
          y1="369.612"
          x2="309.026"
          y2="358.079"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF3864" />
          <stop offset="1" stopColor="#FF6C11" />
        </linearGradient>
        <linearGradient
          id="paint10_linear_2_4"
          x1="309.027"
          y1="467.219"
          x2="309.027"
          y2="460.296"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF3864" />
          <stop offset="1" stopColor="#FF6C11" />
        </linearGradient>
        <linearGradient
          id="paint11_linear_2_4"
          x1="309.026"
          y1="453.274"
          x2="309.026"
          y2="445.697"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF3864" />
          <stop offset="1" stopColor="#FF6C11" />
        </linearGradient>
        <linearGradient
          id="paint12_linear_2_4"
          x1="309.027"
          y1="481.157"
          x2="309.027"
          y2="474.902"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF3864" />
          <stop offset="1" stopColor="#FF6C11" />
        </linearGradient>
        <linearGradient
          id="paint13_linear_2_4"
          x1="309.027"
          y1="439.333"
          x2="309.027"
          y2="431.091"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF3864" />
          <stop offset="1" stopColor="#FF6C11" />
        </linearGradient>
        <linearGradient
          id="paint14_linear_2_4"
          x1="309.026"
          y1="425.388"
          x2="309.026"
          y2="416.489"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF3864" />
          <stop offset="1" stopColor="#FF6C11" />
        </linearGradient>
      </defs>
    </svg>
  );
}
