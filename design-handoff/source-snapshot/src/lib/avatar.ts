// Neutral, non-deceptive placeholder imagery generated as inline SVG data URIs.
// Used in place of random stock faces (which would misrepresent named real people)
// until real customer/staff photos are supplied. No network dependency, SSR-safe.

const PALETTE = ['#ea580c', '#0f766e', '#1d4ed8', '#7c3aed', '#b91c1c', '#0369a1', '#4d7c0f', '#a16207'];

function hash(str: string): number {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h << 5) - h + str.charCodeAt(i);
  return Math.abs(h);
}

function initials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return '?';
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function encode(svg: string): string {
  // Compact, attribute-safe encoding for use in img/src and CSS url().
  return 'data:image/svg+xml,' + encodeURIComponent(svg.replace(/\s+/g, ' ').trim());
}

/** Round initials avatar for people (testimonials, reviews, authors, team). */
export function initialsAvatar(name: string, size = 150): string {
  const bg = PALETTE[hash(name) % PALETTE.length];
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" role="img">
    <rect width="100%" height="100%" rx="${size / 2}" fill="${bg}"/>
    <text x="50%" y="50%" dy=".35em" text-anchor="middle" fill="#ffffff" font-family="Arial, Helvetica, sans-serif" font-size="${size * 0.42}" font-weight="700">${initials(name)}</text>
  </svg>`;
  return encode(svg);
}

/** Rectangular text wordmark for placeholder partner/brand logos (no fabricated brand art). */
export function textLogo(name: string, w = 200, h = 80): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img">
    <rect width="100%" height="100%" rx="8" fill="#f3f4f6" stroke="#d1d5db"/>
    <text x="50%" y="50%" dy=".35em" text-anchor="middle" fill="#374151" font-family="Arial, Helvetica, sans-serif" font-size="16" font-weight="700">${name}</text>
  </svg>`;
  return encode(svg);
}
