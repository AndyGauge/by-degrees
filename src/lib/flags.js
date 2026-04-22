// Simplified SVG flag badges — one per jurisdiction. 24×16 viewBox.
// These aren't heraldically exact; they capture each flag's signature visual
// at a glance: the Lone Star, the sun rays, the red saltire, etc.
// For "blue-with-seal" states, we keep the dominant color and pick one
// distinctive emblem (pine tree, star, W).

const US = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 16" aria-label="Flag of the United States">
<rect width="24" height="16" fill="#b22234"/>
<g fill="#fff"><rect y="1.23" width="24" height="1.23"/><rect y="3.69" width="24" height="1.23"/><rect y="6.15" width="24" height="1.23"/><rect y="8.62" width="24" height="1.23"/><rect y="11.08" width="24" height="1.23"/><rect y="13.54" width="24" height="1.23"/></g>
<rect width="9.6" height="8.62" fill="#3c3b6e"/>
<g fill="#fff"><circle r="0.3" cx="1.2" cy="1.1"/><circle r="0.3" cx="2.8" cy="1.1"/><circle r="0.3" cx="4.4" cy="1.1"/><circle r="0.3" cx="6" cy="1.1"/><circle r="0.3" cx="7.6" cy="1.1"/><circle r="0.3" cx="2" cy="2.2"/><circle r="0.3" cx="3.6" cy="2.2"/><circle r="0.3" cx="5.2" cy="2.2"/><circle r="0.3" cx="6.8" cy="2.2"/><circle r="0.3" cx="8.4" cy="2.2"/><circle r="0.3" cx="1.2" cy="3.3"/><circle r="0.3" cx="2.8" cy="3.3"/><circle r="0.3" cx="4.4" cy="3.3"/><circle r="0.3" cx="6" cy="3.3"/><circle r="0.3" cx="7.6" cy="3.3"/><circle r="0.3" cx="2" cy="4.4"/><circle r="0.3" cx="3.6" cy="4.4"/><circle r="0.3" cx="5.2" cy="4.4"/><circle r="0.3" cx="6.8" cy="4.4"/><circle r="0.3" cx="8.4" cy="4.4"/><circle r="0.3" cx="1.2" cy="5.5"/><circle r="0.3" cx="2.8" cy="5.5"/><circle r="0.3" cx="4.4" cy="5.5"/><circle r="0.3" cx="6" cy="5.5"/><circle r="0.3" cx="7.6" cy="5.5"/><circle r="0.3" cx="2" cy="6.6"/><circle r="0.3" cx="3.6" cy="6.6"/><circle r="0.3" cx="5.2" cy="6.6"/><circle r="0.3" cx="6.8" cy="6.6"/><circle r="0.3" cx="8.4" cy="6.6"/><circle r="0.3" cx="1.2" cy="7.7"/><circle r="0.3" cx="2.8" cy="7.7"/><circle r="0.3" cx="4.4" cy="7.7"/><circle r="0.3" cx="6" cy="7.7"/><circle r="0.3" cx="7.6" cy="7.7"/></g>
</svg>`;

const TEXAS = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 16" aria-label="Flag of Texas">
<rect width="24" height="8" fill="#fff"/><rect y="8" width="24" height="8" fill="#bf0a30"/>
<rect width="8" height="16" fill="#002868"/>
<path d="M4,3.2 L4.85,5.8 L7.58,5.8 L5.37,7.4 L6.22,10 L4,8.4 L1.78,10 L2.63,7.4 L0.42,5.8 L3.15,5.8 Z" fill="#fff"/>
</svg>`;

const CALIFORNIA = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 16" aria-label="Flag of California">
<rect width="24" height="16" fill="#eee8d5"/>
<rect y="13" width="24" height="3" fill="#b22234"/>
<path d="M3,2 L3.55,3.45 L5.1,3.45 L3.85,4.4 L4.4,5.85 L3,4.95 L1.6,5.85 L2.15,4.4 L0.9,3.45 L2.45,3.45 Z" fill="#b22234"/>
<path d="M7,11 Q8,8 11.5,8 Q15,8 16,9 Q18,9 18.5,11 L18.5,12 L7,12 Z" fill="#3d2817"/>
<circle cx="8" cy="9.2" r="0.6" fill="#3d2817"/><circle cx="16.8" cy="9.6" r="0.4" fill="#3d2817"/>
</svg>`;

const FLORIDA = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 16" aria-label="Flag of Florida">
<rect width="24" height="16" fill="#fff"/>
<path d="M0,0 L24,16 M24,0 L0,16" stroke="#d21034" stroke-width="2.6"/>
<circle cx="12" cy="8" r="3.2" fill="#fff" stroke="#d21034" stroke-width="0.3"/>
<circle cx="12" cy="8" r="1.6" fill="#f8d000"/>
</svg>`;

const COLORADO = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 16" aria-label="Flag of Colorado">
<rect width="24" height="16" fill="#002b7f"/>
<rect y="5.33" width="24" height="5.33" fill="#fff"/>
<path d="M10,4 A4,4 0 1 0 10,12 L10,9.8 A1.8,1.8 0 1 1 10,6.2 Z" fill="#bf0a30"/>
<circle cx="9" cy="8" r="1.7" fill="#ffcd00"/>
</svg>`;

const OREGON = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 16" aria-label="Flag of Oregon">
<rect width="24" height="16" fill="#002868"/>
<path d="M12,3.5 L13.1,7 L16.7,7 L13.8,9 L14.9,12.5 L12,10.4 L9.1,12.5 L10.2,9 L7.3,7 L10.9,7 Z" fill="#d4a017"/>
</svg>`;

const WASHINGTON = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 16" aria-label="Flag of Washington State">
<rect width="24" height="16" fill="#006633"/>
<circle cx="12" cy="8" r="3.4" fill="#fff"/>
<circle cx="12" cy="8" r="2.6" fill="#f5e6a3"/>
<circle cx="12" cy="8" r="1.3" fill="#8b4513"/>
</svg>`;

const MAINE = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 16" aria-label="Flag of Maine">
<rect width="24" height="16" fill="#003366"/>
<path d="M12,3 L14,6 L13.2,6 L14.8,8.5 L14,8.5 L15.8,11 L11.8,11 L11.8,12.5 L12.2,12.5 L12.2,11 L8.2,11 L10,8.5 L9.2,8.5 L10.8,6 L10,6 Z" fill="#2d5016"/>
</svg>`;

const VERMONT = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 16" aria-label="Flag of Vermont">
<rect width="24" height="16" fill="#003366"/>
<rect x="8" y="10" width="8" height="2.8" fill="#d4a017"/>
<path d="M12,3 L14,6 L13.2,6 L14.8,8.5 L14,8.5 L15.8,10.5 L8.2,10.5 L10,8.5 L9.2,8.5 L10.8,6 L10,6 Z" fill="#2d5016"/>
</svg>`;

const ILLINOIS = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 16" aria-label="Flag of Illinois">
<rect width="24" height="16" fill="#fff"/>
<rect y="13.2" width="24" height="2.8" fill="#002868"/>
<circle cx="12" cy="7" r="3.3" fill="#fff" stroke="#002868" stroke-width="0.35"/>
<path d="M12,4.5 L12.7,6.5 L14.8,6.5 L13.15,7.8 L13.8,9.8 L12,8.55 L10.2,9.8 L10.85,7.8 L9.2,6.5 L11.3,6.5 Z" fill="#bf0a30"/>
</svg>`;

const WISCONSIN = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 16" aria-label="Flag of Wisconsin">
<rect width="24" height="16" fill="#002868"/>
<circle cx="12" cy="7.5" r="3.2" fill="none" stroke="#fff" stroke-width="0.4"/>
<path d="M9,6 L10,9.5 L11.3,7 L12,9 L12.7,7 L14,9.5 L15,6" fill="none" stroke="#fff" stroke-width="0.5" stroke-linejoin="round" stroke-linecap="round"/>
<rect x="11.6" y="11" width="0.8" height="1.6" fill="#d4a017"/>
</svg>`;

const ARIZONA = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 16" aria-label="Flag of Arizona">
<rect width="24" height="16" fill="#002868"/>
<path d="M0,0 L24,0 L24,8 L12,8 Z" fill="#fdc82f"/>
<path d="M0,0 L12,8 L0,8 Z" fill="#fdc82f"/>
<path d="M12,8 L14.4,0 L16.8,0 Z" fill="#cf202f"/>
<path d="M12,8 L19.2,0 L21.6,0 Z" fill="#cf202f"/>
<path d="M12,8 L9.6,0 L7.2,0 Z" fill="#cf202f"/>
<path d="M12,8 L4.8,0 L2.4,0 Z" fill="#cf202f"/>
<path d="M12,4.8 L13.05,7.65 L16,7.65 L13.6,9.45 L14.5,12.3 L12,10.55 L9.5,12.3 L10.4,9.45 L8,7.65 L10.95,7.65 Z" fill="#b87333"/>
</svg>`;

const ALABAMA = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 16" aria-label="Flag of Alabama">
<rect width="24" height="16" fill="#fff"/>
<path d="M0,0 L24,16 M24,0 L0,16" stroke="#a4233a" stroke-width="2.8"/>
</svg>`;

const FLAGS = {
  Federal: US,
  Oregon: OREGON,
  Illinois: ILLINOIS,
  Washington: WASHINGTON,
  California: CALIFORNIA,
  Colorado: COLORADO,
  Maine: MAINE,
  Vermont: VERMONT,
  Texas: TEXAS,
  Florida: FLORIDA,
  Arizona: ARIZONA,
  Wisconsin: WISCONSIN,
  Alabama: ALABAMA
};

/**
 * Pull the first word off the jurisdiction ("Oregon · SB 608" → "Oregon")
 * and return the matching flag SVG, or the US flag as a fallback.
 * @param {string} jurisdiction
 */
export function flagFor(jurisdiction) {
  if (!jurisdiction) return US;
  const key = jurisdiction.split(/\s*·\s*/)[0].trim();
  return FLAGS[key] ?? US;
}
