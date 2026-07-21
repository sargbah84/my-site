import React from 'react';

// Placeholder artwork for project cards, drawn as SVG so no image assets are
// needed yet. The layout varies by category and the accent shifts with the
// project id, so the grid reads as distinct screens rather than one repeated
// tile. Swap these for real screenshots when they exist.

const ACCENTS = ['#003ECB', '#2F6BFF', '#00A3FF', '#5A32C8', '#1B44A8'];

const Browser = ({ accent }) => (
  <>
    <rect x="0" y="0" width="200" height="150" rx="8" fill="#FFFFFF" />
    <rect x="0" y="0" width="200" height="18" rx="8" fill="#EEF1FB" />
    <rect x="0" y="12" width="200" height="6" fill="#EEF1FB" />
    <circle cx="12" cy="9" r="2.5" fill="#FF5F57" />
    <circle cx="21" cy="9" r="2.5" fill="#FEBC2E" />
    <circle cx="30" cy="9" r="2.5" fill="#28C840" />
    <rect x="12" y="28" width="76" height="34" rx="4" fill={accent} />
    <rect x="12" y="68" width="60" height="5" rx="2.5" fill="#D8DEF0" />
    <rect x="12" y="79" width="44" height="5" rx="2.5" fill="#E6EAF6" />
    <rect x="100" y="28" width="88" height="56" rx="4" fill="#F2F5FD" />
    <rect x="12" y="96" width="176" height="1.5" fill="#EDF0F8" />
    <rect x="12" y="106" width="52" height="30" rx="4" fill="#F2F5FD" />
    <rect x="74" y="106" width="52" height="30" rx="4" fill="#F2F5FD" />
    <rect x="136" y="106" width="52" height="30" rx="4" fill={accent} opacity="0.18" />
  </>
);

const Mobile = ({ accent }) => (
  <>
    <rect x="0" y="0" width="200" height="150" rx="8" fill="#F2F5FD" />
    <rect x="58" y="14" width="84" height="122" rx="12" fill="#FFFFFF" />
    <rect x="86" y="20" width="28" height="3" rx="1.5" fill="#D8DEF0" />
    <rect x="66" y="32" width="68" height="34" rx="5" fill={accent} />
    <rect x="66" y="72" width="44" height="4" rx="2" fill="#D8DEF0" />
    <rect x="66" y="82" width="60" height="4" rx="2" fill="#E6EAF6" />
    <rect x="66" y="94" width="32" height="20" rx="4" fill="#F2F5FD" />
    <rect x="102" y="94" width="32" height="20" rx="4" fill="#F2F5FD" />
    <rect x="66" y="122" width="68" height="6" rx="3" fill={accent} opacity="0.25" />
  </>
);

const Design = ({ accent }) => (
  <>
    <rect x="0" y="0" width="200" height="150" rx="8" fill="#FFFFFF" />
    <circle cx="52" cy="52" r="30" fill={accent} opacity="0.9" />
    <circle cx="96" cy="52" r="30" fill={accent} opacity="0.35" />
    <rect x="20" y="98" width="72" height="7" rx="3.5" fill="#D8DEF0" />
    <rect x="20" y="113" width="48" height="7" rx="3.5" fill="#E6EAF6" />
    <rect x="140" y="24" width="40" height="40" rx="8" fill="#F2F5FD" />
    <rect x="140" y="72" width="40" height="12" rx="6" fill={accent} opacity="0.2" />
  </>
);

const LAYOUTS = { web: Browser, mobile: Mobile, design: Design };

const ProjectThumb = ({ category = 'web', id = 0, title = '' }) => {
  const Layout = LAYOUTS[category] || Browser;
  const accent = ACCENTS[id % ACCENTS.length];

  return (
    <svg
      className="project-thumb"
      viewBox="0 0 200 150"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label={title ? `${title} preview` : 'Project preview'}
    >
      <Layout accent={accent} />
    </svg>
  );
};

export default ProjectThumb;
