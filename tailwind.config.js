/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#0085ff",
          200: "#69b4ff",
          300: "#e0ffff",
        },
        accent: {
          100: "#006fff",
          200: "#e1ffff",
        },
        textColor: {
          100: "#FFFFFF",
          200: "#9e9e9e",
        },
        bgColor: {
          100: "#1E1E1E",
          200: "#2d2d2d",
          300: "#454545",
        },
      },
      backgroundImage: {
        backgroundDesign: "url(/src/img/blob-scene-haikei.svg)",
        backgroundDesignSm: "url(/src/img/blob-scene-haikei-sm.svg)",
        logoIcon: "url(/src/img/logoIcon.svg)",
        logoIconSm: "url(/src/img/logoIconSm.png)",
        payroll: "url(/src/img/payroll.svg)",
        profile: "url(/src/img/profile.svg)",
        user: "url(/src/img/user.png)",
      },
      spacing: {
        "5%": "5%",
        "10%": "10%",
        "15%": "15%",
        "20%": "20%",
        "25%": "25%",
        "30%": "30%",
        "40%": "40%",
        "50%": "50%",
        "60%": "60%",
        "70%": "70%",
        "80%": "80%",
        "85%": "85%",
        "90%": "90%",
        "95%": "95%",
      },
    },
  },
  plugins: [],
};
