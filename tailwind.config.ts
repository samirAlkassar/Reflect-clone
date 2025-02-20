import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      background: "#030014",
      white: "#fff",
      offwhite: "rgba(255,255,255,.08)",
      navbackground:"rgba(255,255,255,.02)",
      navcolor: "#ffffffe6",
      navhover: "#fff9;",
      primary: "#f4f0ff",
      "button-border": "rgba(207,184,255,0.7)",
      "primary-subtext": "#efedfdb3",
      "orbit-stroke": "#857490",
    },
    fontFamily: {
      sans: ["AeonikPro","Inter V","SF Pro Display", "San Francisco", "Inter", "sans-serif"],
    },
    fontSize: {
      xs: "0.5rem", //8px
      sm: ["0.875rem","1.25rem"], //14px
      md: ["1.125rem","1.75rem"], //18px
      lg: "1.5rem", //24px
      xl: "1.6rem", //24px
      "2xl": "1.8rem", //28px
      "3xl": "2rem", //32px
      "4xl": ["2.75rem","3.25rem"], //44px
      "6xl": ["4.5rem","5rem"], //72px
    },
    spacing: {
      0: "0rem", //0px
      1: "0.25rem", //4px
      2: "0.375rem", //6px
      3: "0.5rem", //8px
      4: "0.625rem", //10px
      5: "0.75rem", //12px
      6: "0.875rem", //14px
      7: "1rem", //16px    
      8: "1.125rem", //18px
      9: "1.25rem", //20px
      10: "1.5rem", //24px
      11 : "1.625rem", //26px
      12: "1.75rem", //28px
      13: "2rem", //32px
    },
    boxShadow: {
      "button-shadow-after": "inset 0 0 12px #bf97ff3d",
      "button-shadow-before": "inset 0 0 12px #bf97ff70",
      "small-button-shadow-glow": "inset 0 -7px 11px #a48fff1f",
      "small-button-shadow-glow-hover": "inset 0 -7px 11px #a48fff3d",
      "gpt-black-hole-shadow":"0 0 40px rgba(0, 0, 0, 0.8)", //gpt black hole shadow
    },
    backgroundImage: {
      "nav-border":
        "radial-gradient(62.87% 100% at 50% 100%,rgba(255,255,255,.12) 0%,rgba(255,255,255,0) 100%)",
      "button-glow-after":
        "linear-gradient(180deg,rgba(60,8,126,0) 0%,rgba(60,8,126,.32) 100%,rgba(113,47,255,.12))",
      "button-glow-before":
        "linear-gradient(180deg,rgba(60,8,126,0) 0%,rgba(60,8,126,.42) 100%,rgba(113,47,255,.24))",
      "button-glow-border":
        "linear-gradient(180deg,rgba(207,184,255,.24) 0%,rgba(207,184,255,0) 100%),linear-gradient(0deg,rgba(207,184,255,.32),rgba(207,184,255,.32))",
      "black-hole":
        "radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(124,77,240,0.8979924733565301) 9%, rgba(235,159,255,0.8447711848411239) 10%, rgba(255,255,255,0.9316059187346813) 12%, rgba(252,206,255,0.9316059187346813) 13%, rgba(255,255,255,1) 14%, rgba(252,206,255,0.6683005966058299) 16%, rgba(189,131,255,0.7747431736366421) 17%, rgba(255,255,255,1) 19%, rgba(189,131,255,0.6570961148131127) 21%, rgba(90,111,220,0.6711017170540091) 23%, rgba(155,99,255,0.4526143220960259) 27%, rgba(110,77,190,0.22572356579350494) 34%, rgba(110,77,190,0.0) 41%)",
      "heroImage-gradient":
        "linear-gradient(180deg,rgba(4,1,21,0) 0%,rgba(4,1,21,.7) 34.48%,#030014 82.36%)",
      "orbits-gradient": //gpt black hole gradient
        "linear-gradient(180deg, rgba(3,0,20,0.886787991563813) 18%, rgba(15,0,36,0) 32%, rgba(3,0,20,0.2) 99%)",
      "hero-playbutton-gradient": 
        "linear-gradient(180deg,rgba(255,255,255,0) 17.71%,rgba(255,255,255,.12) 100%,rgba(255,255,255,.01))",
      "hero-gradient":
        "radial-gradient(37.74% 81.78% at 50% 26.56%,rgba(148,101,255,.08) 0%,rgba(3,0,20,0) 100%)",
      },
      keyframes: {
        "spin": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "star-animation": {
          "0%": { transform: "translate(0, 0)" },
          "100%": { transform: "translate(100%, 100%)" },
        },
      },
      animation: {
        "black-hole-orbits-animation": "spin var(--rotation-speed) linear infinite",
        "sky-stars-spin": "spin 200s linear infinite",
      },
  },
  plugins: [],
} satisfies Config;
