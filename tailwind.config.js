/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/index.js",
    "./comps/App.js",
    "./comps/ConfirmationModal.js",
    "./comps/Container.js",
    "./comps/Navbar.js",
    "./comps/Widget.js",
    "./comps/widget/Body.js",
    "./comps/widget/Header.js",
    "./comps/widget/Payment.js",
    "./comps/widget/BankPayment.js",
    "./comps/widget/CryptoPayment.js",
    "./comps/widget/Receiving.js",
    "./comps/widget/Shares.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
