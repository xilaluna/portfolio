/** @type {import('tailwindcss').Config} */

// add opactity to rgba colors
function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  fontFamily: {
    mono: ["IBM Plex Mono", "monospace"],
  },
  theme: {
    extend: {
      textColor: {
        skin: {
          base: withOpacity("--color-text-base"),
          accent: withOpacity("--color-accent"),
          muted: withOpacity("--color-muted"),
          inverted: withOpacity("--color-fill"),
        },
      },
      backgroundColor: {
        skin: {
          fill: withOpacity("--color-fill"),
          accent: withOpacity("--color-accent"),
        },
      },
      borderColor: {
        skin: {
          base: withOpacity("--color-muted"),
          accent: withOpacity("--color-accent"),
        },
      },
    },
  },
  plugins: [],
};
