/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      // primary
      primary_120: "#7B6651",
      primary_100: "#BF9D7D",
      primary_80: "#D0B79F",
      primary_60: "#D0B79F",
      primary_40: "#F1EAE4",
      primary_tint: "#F7F2EE",
      // success
      success_120: "#1D66AC",
      success_100: "#3BADEF",
      success_20: "#B1EFFD",
      success_10: "#E6FBFE",
      // info
      info_120: "#1D66AC",
      info_100: "#3BADEF",
      info_20: "#B1EFFD",
      info_10: "#E6FBFE",
      // alert
      alert_120: "#C22538",
      alert_100: "#DA3E51",
      alert_20: "#F5CCD1",
      alert_10: "#FDECEF",
      // neutral
      neutral_bg: "#140F0A",
      neutral_100: "#000000",
      neutral_80: "#4B4B4B",
      neutral_60: "#909090",
      neutral_40: "#ECECEC",
      neutral_10: "#F9F9F9",
      neutral_0: "#FFFFFF",
      // transparent
      transparent: "transparent",
    },
    extend: {
      fontFamily: {
        NotoSerif: "Noto Serif TC",
      },
    },
  },
  plugins: [],
};
