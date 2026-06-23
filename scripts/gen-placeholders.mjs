// Generates labeled engineered-editorial placeholder SVGs at correct aspect ratios.
// Run: bun scripts/gen-placeholders.mjs
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(__dirname, '../public/placeholders');
mkdirSync(outDir, { recursive: true });

const slots = [
  { file: 'profile-800x1000.svg', w: 800, h: 1000, label: 'PROFILE PORTRAIT', depict: 'Asad, plain backdrop' },
  { file: 'work-liquid-canvas-1600x1000.svg', w: 1600, h: 1000, label: 'LIQUID CANVAS', depict: 'Smart-TV art gallery UI' },
  { file: 'work-my-uni-1600x1000.svg', w: 1600, h: 1000, label: 'MY UNI', depict: 'Student chat + feed screens' },
  { file: 'work-nurse-hiring-1600x1000.svg', w: 1600, h: 1000, label: 'NURSE HIRING', depict: 'Booking + live map screens' },
  { file: 'work-fintech-1600x1000.svg', w: 1600, h: 1000, label: 'FINTECH TOP-UP', depict: 'Wallet + gift card screens' },
  { file: 'work-language-learning-1600x1000.svg', w: 1600, h: 1000, label: 'LANGUAGE LEARNING', depict: 'Live tutor video call UI' },
  { file: 'og-1200x630.svg', w: 1200, h: 630, label: 'ASAD BANGASH', depict: 'OG social card' },
];

const svg = ({ w, h, label, depict }) => {
  const amber = '#FFB200';
  const m = Math.round(Math.min(w, h) * 0.04);
  const corner = Math.round(Math.min(w, h) * 0.05);
  const fs1 = Math.round(Math.min(w, h) * 0.07);
  const fs2 = Math.round(Math.min(w, h) * 0.032);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <rect width="${w}" height="${h}" fill="#0C0C0E"/>
  <rect x="${m}" y="${m}" width="${w - m * 2}" height="${h - m * 2}" fill="none" stroke="rgba(237,234,227,0.14)" stroke-width="1.5"/>
  <g stroke="${amber}" stroke-width="2" fill="none">
    <path d="M${m} ${m + corner} L${m} ${m} L${m + corner} ${m}"/>
    <path d="M${w - m - corner} ${m} L${w - m} ${m} L${w - m} ${m + corner}"/>
    <path d="M${w - m} ${h - m - corner} L${w - m} ${h - m} L${w - m - corner} ${h - m}"/>
    <path d="M${m + corner} ${h - m} L${m} ${h - m} L${m} ${h - m - corner}"/>
  </g>
  <text x="50%" y="46%" text-anchor="middle" fill="#EDEAE3" font-family="monospace" font-size="${fs1}" font-weight="600" letter-spacing="2">${label}</text>
  <text x="50%" y="54%" text-anchor="middle" fill="${amber}" font-family="monospace" font-size="${fs2}" letter-spacing="3">${w} × ${h}  ·  PLACEHOLDER</text>
  <text x="50%" y="60%" text-anchor="middle" fill="rgba(237,234,227,0.5)" font-family="monospace" font-size="${fs2}" letter-spacing="1">${depict}</text>
</svg>`;
};

for (const slot of slots) {
  writeFileSync(resolve(outDir, slot.file), svg(slot));
  console.log('wrote', slot.file);
}
