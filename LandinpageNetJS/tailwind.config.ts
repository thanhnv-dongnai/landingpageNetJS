import type { Config } from 'tailwindcss';
const config: Config = { content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'], theme: { extend: { colors: { night:'#090A14', card:'#13141F', orange:'#DF6B33', cobalt:'#12365a', cobaltLight:'#dbe8f5' }, fontFamily: { sans:['Be Vietnam Pro','Arial','sans-serif'] } } }, plugins: [] };
export default config;
