/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',  // escanear seus arquivos
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E3A8A', // Azul escuro
        'primary-dark': '#1E40AF', // Azul mais escuro para hover
        secondary: '#F59E0B', // Amarelo suave
        'secondary-dark': '#D97706', // Amarelo mais escuro para hover
        error: '#EF4444', // Vermelho para erros
        'error-dark': '#DC2626', // Vermelho mais escuro para hover
        success: '#10B981', // Verde para sucesso
      },
    },
  },
  plugins: [],
};
