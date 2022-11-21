module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        banner: "url('/src/assets/images/bg.png')",
        appoinment: "url('/src/assets/images/appointment.png')",
        footer: "url('/src/assets/images/footer.png')",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#079eb5",
          secondary: "#12e3b9",
          neutral: "#3A4256",
          "base-100": "#ffffff",
        },
      },
      // "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
};
