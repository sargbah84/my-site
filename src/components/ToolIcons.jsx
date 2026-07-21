import React from 'react';

// Simplified brand marks drawn as inline SVG so the tools grid needs no image
// assets. Each renders on a 48x48 viewBox and inherits its own brand colour.

const Mysql = () => (
  <svg viewBox="0 0 48 48" role="img" aria-label="MySQL">
    <path fill="none" stroke="#00758F" strokeWidth="2.4" strokeLinecap="round"
      d="M4 34c4-10 9-16 14-16 4 0 5 4 6 9 1 4 2 6 4 6 3 0 4-3 4-7" />
    <path fill="none" stroke="#F29111" strokeWidth="2.4" strokeLinecap="round"
      d="M30 14c6 3 10 8 12 14 1 3 0 5-2 6" />
    <circle cx="35" cy="12" r="2" fill="#00758F" />
  </svg>
);

const Node = () => (
  <svg viewBox="0 0 48 48" role="img" aria-label="Node.js">
    <path fill="#83CD29"
      d="M24 4 6 14v20l18 10 18-10V14L24 4Zm0 4.6L38 16v16l-14 7.8L10 32V16L24 8.6Z" />
    <text x="24" y="29" textAnchor="middle" fontSize="10" fontWeight="700" fill="#83CD29"
      fontFamily="Poppins, sans-serif">JS</text>
  </svg>
);

const ReactIcon = () => (
  <svg viewBox="0 0 48 48" role="img" aria-label="React">
    <circle cx="24" cy="24" r="4" fill="#61DAFB" />
    <g fill="none" stroke="#61DAFB" strokeWidth="2">
      <ellipse cx="24" cy="24" rx="19" ry="7.5" />
      <ellipse cx="24" cy="24" rx="19" ry="7.5" transform="rotate(60 24 24)" />
      <ellipse cx="24" cy="24" rx="19" ry="7.5" transform="rotate(120 24 24)" />
    </g>
  </svg>
);

const Xd = () => (
  <svg viewBox="0 0 48 48" role="img" aria-label="Adobe XD">
    <rect x="5" y="5" width="38" height="38" rx="9" fill="#470137" />
    <text x="24" y="30" textAnchor="middle" fontSize="15" fontWeight="700" fill="#FF61F6"
      fontFamily="Poppins, sans-serif">Xd</text>
  </svg>
);

const Figma = () => (
  <svg viewBox="0 0 48 48" role="img" aria-label="Figma">
    <path fill="#F24E1E" d="M17 4h7v10h-7a5 5 0 0 1 0-10Z" />
    <path fill="#FF7262" d="M24 4h7a5 5 0 0 1 0 10h-7V4Z" />
    <path fill="#A259FF" d="M17 14h7v10h-7a5 5 0 0 1 0-10Z" />
    <path fill="#1ABCFE" d="M31 14a5 5 0 1 1 0 10 5 5 0 0 1 0-10Z" />
    <path fill="#0ACF83" d="M17 24h7v5a5 5 0 1 1-7-5Z" />
  </svg>
);

const Postgresql = () => (
  <svg viewBox="0 0 48 48" role="img" aria-label="PostgreSQL">
    <path fill="none" stroke="#336791" strokeWidth="2.4" strokeLinejoin="round"
      d="M24 5c-8 0-13 4-13 11 0 6 1 12 3 17 1 3 3 5 5 4 1 0 2-2 2-4" />
    <path fill="none" stroke="#336791" strokeWidth="2.4" strokeLinejoin="round"
      d="M24 5c8 0 13 4 13 11 0 6-1 12-3 17-1 3-3 5-5 4-1 0-2-2-2-4" />
    <path fill="none" stroke="#336791" strokeWidth="2.4" d="M20 33c2 .6 6 .6 8 0" />
    <circle cx="19" cy="17" r="1.6" fill="#336791" />
    <circle cx="29" cy="17" r="1.6" fill="#336791" />
  </svg>
);

const Javascript = () => (
  <svg viewBox="0 0 48 48" role="img" aria-label="JavaScript">
    <rect x="5" y="5" width="38" height="38" rx="4" fill="#F7DF1E" />
    <text x="24" y="32" textAnchor="middle" fontSize="17" fontWeight="700" fill="#323330"
      fontFamily="Poppins, sans-serif">JS</text>
  </svg>
);

const Laravel = () => (
  <svg viewBox="0 0 48 48" role="img" aria-label="Laravel">
    <path fill="none" stroke="#FF2D20" strokeWidth="2.4" strokeLinejoin="round"
      d="m5 13 9-5 9 5-9 5-9-5Zm0 0v16l9 5m0 0 9-5V13m-9 21 9 5 9-5V18l-9-5" />
  </svg>
);

const Express = () => (
  <svg viewBox="0 0 48 48" role="img" aria-label="Express">
    <text x="24" y="30" textAnchor="middle" fontSize="14" fontWeight="600" fill="#444"
      fontFamily="Poppins, sans-serif">ex</text>
    <rect x="6" y="34" width="36" height="2" rx="1" fill="#444" />
  </svg>
);

const icons = {
  mysql: Mysql,
  node: Node,
  react: ReactIcon,
  xd: Xd,
  figma: Figma,
  postgresql: Postgresql,
  javascript: Javascript,
  laravel: Laravel,
  express: Express,
};

const ToolIcon = ({ name }) => {
  const Icon = icons[name];
  return Icon ? <Icon /> : null;
};

export default ToolIcon;
