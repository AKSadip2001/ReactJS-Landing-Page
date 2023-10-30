/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'home': "url('https://scontent.fdac128-1.fna.fbcdn.net/v/t39.30808-6/348432343_3471506166459805_7756150966813811950_n.png?stp=dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeH-U-4YSiVxQITGGHo8XcB_wvi4SYP4IO7C-LhJg_gg7voYzy5E_BaPlcAe0-TmNE29dpnb5P_zAB8zW79OYtG5&_nc_ohc=CRl0fVdYMb0AX8cZoD4&_nc_ht=scontent.fdac128-1.fna&oh=00_AfA1PCdGMM4ojto5yTe4qA-2BUfmHWIW-OZ1R8Ax_zlLuQ&oe=6543A84E')"
      },
      height: {
        calc: 'calc(100vh - 70px)',
      },
      keyframes: {
        slideup: {
          '0%': { transform: 'translateY(250px)', opacity: '0' },
          '100%': { transform: 'translateY(0px)', opacity: '1' }
        }
      }
    },
  },
  plugins: [],
}

