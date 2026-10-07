export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        darkbg: '#0a0e27',
        panel: '#070b1d',
        ink: '#eef1fb',
        muted: '#9aa5cc',
        primary: '#00ff88',
        secondary: '#ffff55',
        accent: '#14b8a6',
        accent1: '#ff00ff',
        accent2: '#00ffff',
        'code-comment': '#666699',
        'code-string': '#ff88ff',
        'code-keyword': '#ffff55',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"Roboto Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 20px rgba(0, 255, 136, 0.1)',
        'glow-md': '0 0 24px rgba(0, 255, 136, 0.28)',
        'glow-lg': '0 0 48px rgba(0, 255, 136, 0.4)',
        card: '0 24px 64px rgba(2, 6, 23, 0.55)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #00ff88 0%, #00ffff 100%)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      animation: {
        marquee: 'marquee 32s linear infinite',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
}
