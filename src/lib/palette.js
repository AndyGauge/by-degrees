// Spectrum ramp: -5 (deep blue / far left) → 0 (neutral) → +5 (deep red / far right).
// Each bucket returns a full color set used as CSS variables on the page element.
// The darker backgrounds carry light ink; the paler backgrounds carry dark ink.

const LIGHT_INK = '#f4efe3';
const DARK_INK = '#14110d';

/** @typedef {{bg:string, ink:string, muted:string, rule:string, accent:string, mode:'dark'|'light'}} Palette */

/** @type {Record<number, Palette>} */
const RAMP = {
  [-5]: { bg: '#0a1f4a', ink: LIGHT_INK, muted: 'rgba(244,239,227,0.62)', rule: 'rgba(244,239,227,0.22)', accent: '#f6c84a', mode: 'dark' },
  [-4]: { bg: '#142f6d', ink: LIGHT_INK, muted: 'rgba(244,239,227,0.64)', rule: 'rgba(244,239,227,0.22)', accent: '#f6c84a', mode: 'dark' },
  [-3]: { bg: '#2a4f9c', ink: LIGHT_INK, muted: 'rgba(244,239,227,0.7)',  rule: 'rgba(244,239,227,0.24)', accent: '#ffd97a', mode: 'dark' },
  [-2]: { bg: '#7e9fd0', ink: DARK_INK,  muted: 'rgba(20,17,13,0.62)',    rule: 'rgba(20,17,13,0.2)',     accent: '#0f2a5e', mode: 'light' },
  [-1]: { bg: '#a6bdd9', ink: DARK_INK,  muted: 'rgba(20,17,13,0.6)',     rule: 'rgba(20,17,13,0.18)',    accent: '#1a3a7a', mode: 'light' },
  [ 0]: { bg: '#ece8df', ink: DARK_INK,  muted: 'rgba(20,17,13,0.56)',    rule: 'rgba(20,17,13,0.16)',    accent: '#6a6a6a', mode: 'light' },
  [ 1]: { bg: '#e8bfb5', ink: DARK_INK,  muted: 'rgba(20,17,13,0.6)',     rule: 'rgba(20,17,13,0.18)',    accent: '#8a2118', mode: 'light' },
  [ 2]: { bg: '#d89088', ink: DARK_INK,  muted: 'rgba(20,17,13,0.62)',    rule: 'rgba(20,17,13,0.2)',     accent: '#5e0c12', mode: 'light' },
  [ 3]: { bg: '#a8434a', ink: LIGHT_INK, muted: 'rgba(244,239,227,0.74)', rule: 'rgba(244,239,227,0.26)', accent: '#ffd97a', mode: 'dark' },
  [ 4]: { bg: '#7a1e26', ink: LIGHT_INK, muted: 'rgba(244,239,227,0.68)', rule: 'rgba(244,239,227,0.24)', accent: '#f6c84a', mode: 'dark' },
  [ 5]: { bg: '#4a0c12', ink: LIGHT_INK, muted: 'rgba(244,239,227,0.62)', rule: 'rgba(244,239,227,0.22)', accent: '#f6c84a', mode: 'dark' }
};

/** @param {number} spectrum */
export function paletteFor(spectrum) {
  const s = Math.max(-5, Math.min(5, Math.round(spectrum)));
  return RAMP[s];
}

/** @param {number} spectrum */
export function styleFor(spectrum) {
  const p = paletteFor(spectrum);
  return (
    `--bg:${p.bg};` +
    `--ink:${p.ink};` +
    `--muted:${p.muted};` +
    `--rule:${p.rule};` +
    `--accent:${p.accent};`
  );
}

/** @param {number} spectrum */
export function modeFor(spectrum) {
  return paletteFor(spectrum).mode;
}

export const SPECTRUM_LABELS = {
  [-5]: 'far left',
  [-4]: 'progressive',
  [-3]: 'left',
  [-2]: 'center-left',
  [-1]: 'moderate left',
  [ 0]: 'center',
  [ 1]: 'moderate right',
  [ 2]: 'center-right',
  [ 3]: 'right',
  [ 4]: 'conservative',
  [ 5]: 'far right'
};
