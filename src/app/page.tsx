export default function HomePage() {
  return (
    <div>
      <HeroSection />
    </div>
  );
}

function HeroSection() {
  return (
    <main className="h-screen w-full bg-background pt-28">
      <div className="container mx-auto flex h-full flex-row items-center justify-between">
        <div className="flex w-1/2 flex-col items-start justify-center gap-4 pr-12 text-text">
          <h6 className="font-display text-2xl font-bold text-secondary">
            RETROWEB
          </h6>
          <h1 className="font-display text-6xl font-black leading-tight">
            Play Retro Games right in your web browser
          </h1>
          <p className="relative pb-6 font-body text-2xl text-bodyText">
            Turn back the clock with your favorite retro games. Play instantly
            and bring the nostalgia wherever you are.
            <PeaceSVG />
          </p>
          <div className="relative">
            <button className="relative z-20 bg-secondary px-12 py-4 font-display text-4xl font-black text-text">
              PLAY
            </button>
            <div className="full absolute left-0 top-0 z-10 h-full w-full translate-x-2 translate-y-2 bg-text"></div>
          </div>
        </div>
        <div className="relative">
          <RetrowaveSunSVG />
          <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center">
            <EyesSVG />
          </div>
        </div>
      </div>
    </main>
  );
}

function PeaceSVG() {
  return (
    <span className="absolute right-0 top-0 translate-x-14">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="78"
        height="83"
        viewBox="0 0 78 83"
        fill="none"
      >
        <path
          d="M31.8505 82.5161C14.2883 82.5161 0 68.2285 0 50.6656C0 33.1033 14.2877 18.8151 31.8505 18.8151C49.4134 18.8151 63.701 33.1028 63.701 50.6656C63.701 68.2279 49.4128 82.5161 31.8505 82.5161ZM31.8505 25.7624C18.1187 25.7624 6.94729 36.9338 6.94729 50.6656C6.94729 64.3974 18.1187 75.5689 31.8505 75.5689C45.5824 75.5689 56.7538 64.3974 56.7538 50.6656C56.7538 36.9344 45.5824 25.7624 31.8505 25.7624Z"
          fill="#2DE2E6"
        />
        <path
          d="M35.3239 22.2893H28.3767V79.0425H35.3239V22.2893Z"
          fill="#2DE2E6"
        />
        <path
          d="M29.4891 48.1378L10.874 65.4022L15.5981 70.4959L34.2132 53.2315L29.4891 48.1378Z"
          fill="#FF3864"
        />
        <path
          d="M34.219 48.1444L29.4949 53.2381L48.1099 70.5024L52.834 65.4087L34.219 48.1444Z"
          fill="#2DE2E6"
        />
        <path
          d="M34.3049 80.0618C16.7426 80.0618 2.45435 65.7741 2.45435 48.2113C2.45435 30.649 16.742 16.3608 34.3049 16.3608C51.8672 16.3608 66.1553 30.6484 66.1553 48.2113C66.1553 65.7735 51.8672 80.0618 34.3049 80.0618ZM34.3049 23.308C20.5731 23.308 9.40164 34.4794 9.40164 48.2113C9.40164 61.9431 20.5731 73.1145 34.3049 73.1145C48.0361 73.1145 59.2081 61.9431 59.2081 48.2113C59.2081 34.48 48.0367 23.308 34.3049 23.308Z"
          fill="#FF3864"
        />
        <path
          d="M37.7785 19.8344H30.8313V76.5876H37.7785V19.8344Z"
          fill="#FF3864"
        />
        <path
          d="M31.9417 45.6794L13.3267 62.9437L18.0508 68.0374L36.6658 50.7731L31.9417 45.6794Z"
          fill="#FF3864"
        />
        <path
          d="M36.6745 45.6923L31.9504 50.786L50.5655 68.0504L55.2896 62.9567L36.6745 45.6923Z"
          fill="#FF3864"
        />
        <path
          d="M64.3186 78.5236C64.2423 78.5236 64.1661 78.4944 64.1077 78.4366C63.9916 78.3205 63.9916 78.1316 64.1077 78.0155C72.0814 70.0412 76.473 59.4572 76.473 48.2119C76.473 36.9665 72.0814 26.3819 64.1077 18.4082C56.1341 10.4346 45.55 6.04358 34.3047 6.04358C34.1403 6.04358 34.0068 5.91014 34.0068 5.74572C34.0068 5.5813 34.1403 5.44786 34.3047 5.44786C45.7097 5.44786 56.4432 9.90143 64.5289 17.9871C72.6151 26.0733 77.0687 36.8075 77.0687 48.2119C77.0687 59.6168 72.6151 70.3504 64.5289 78.4366C64.4711 78.4944 64.3948 78.5236 64.3186 78.5236Z"
          fill="white"
        />
        <path
          d="M42.9274 12.7388C42.8684 12.7388 42.81 12.7221 42.7581 12.6858L33.0057 5.94471C32.9193 5.88514 32.8705 5.78446 32.8776 5.68021C32.8848 5.57596 32.9456 5.48242 33.0391 5.43477L43.5921 0.0322265C43.7369 -0.0416422 43.918 0.0155569 43.993 0.162103C44.0681 0.308053 44.0098 0.487961 43.8632 0.563021L33.7533 5.73919L43.0965 12.1973C43.2323 12.2909 43.2657 12.4767 43.1722 12.6113C43.115 12.6941 43.0215 12.7388 42.9274 12.7388Z"
          fill="white"
        />
      </svg>
    </span>
  );
}

function EyesSVG() {
  return (
    <span className="mb-24">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="132"
        height="101"
        viewBox="0 0 132 101"
        fill="none"
      >
        <path
          d="M81.5391 25.842C81.4271 27.111 81.3541 28.405 81.3541 29.733C81.3541 42.856 87.0351 53.495 94.0431 53.495C101.051 53.495 106.732 42.857 106.732 29.733C106.732 16.61 101.051 5.97099 94.0431 5.97099C93.3341 5.97099 92.6431 6.107 91.9651 6.317C95.8211 2.298 100.26 0 104.986 0C119.799 0 131.807 22.487 131.807 50.225C131.807 60.455 130.17 69.966 127.364 77.903L109.92 59.465L122.145 88.821C117.494 96.08 111.513 100.45 104.986 100.45C90.1731 100.45 78.1652 77.963 78.1652 50.225C78.1662 41.375 79.3931 33.064 81.5391 25.842Z"
          fill="#2DE2E6"
        />
        <path
          d="M3.37415 25.842C3.26215 27.111 3.18909 28.405 3.18909 29.733C3.18909 42.856 8.87017 53.495 15.8782 53.495C22.8862 53.495 28.5671 42.857 28.5671 29.733C28.5671 16.61 22.8862 5.97099 15.8782 5.97099C15.1692 5.97099 14.4782 6.107 13.8002 6.317C17.6562 2.298 22.0942 0 26.8212 0C41.6342 0 53.6421 22.487 53.6421 50.225C53.6421 60.455 52.0051 69.966 49.1991 77.903L31.7551 59.465L43.9801 88.821C39.3291 96.08 33.3482 100.45 26.8212 100.45C12.0082 100.45 0.00012207 77.963 0.00012207 50.225C0.00012207 41.375 1.22715 33.064 3.37415 25.842Z"
          fill="#2DE2E6"
        />
      </svg>
    </span>
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
