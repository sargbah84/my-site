import React from 'react';
import {
  SiMysql,
  SiNodedotjs,
  SiReact,
  SiPostgresql,
  SiJavascript,
  SiLaravel,
  SiExpress,
} from 'react-icons/si';

// Official brand marks from the Simple Icons set, tinted with each brand's
// colour. Adobe withdrew its icons from that set over trademark policy, so XD
// is drawn here to match its product tile.
const AdobeXd = () => (
  <svg viewBox="0 0 24 24" role="img" aria-label="Adobe XD">
    <rect x="1" y="1" width="22" height="22" rx="5" fill="#470137" />
    <text
      x="12"
      y="16.4"
      textAnchor="middle"
      fontSize="9.5"
      fontWeight="700"
      fill="#FF61F6"
      fontFamily="Poppins, sans-serif"
    >
      Xd
    </text>
  </svg>
);

// Simple Icons are single colour by design, so Figma's five-tone mark is drawn
// here to keep its brand colours.
const Figma = () => (
  <svg viewBox="0 0 24 24" role="img" aria-label="Figma">
    <path fill="#1ABCFE" d="M12 12a3 3 0 1 1 6 0 3 3 0 0 1-6 0Z" />
    <path fill="#0ACF83" d="M6 18a3 3 0 0 1 3-3h3v3a3 3 0 1 1-6 0Z" />
    <path fill="#FF7262" d="M12 3h3a3 3 0 1 1 0 6h-3V3Z" />
    <path fill="#F24E1E" d="M6 6a3 3 0 0 1 3-3h3v6H9a3 3 0 0 1-3-3Z" />
    <path fill="#A259FF" d="M6 12a3 3 0 0 1 3-3h3v6H9a3 3 0 0 1-3-3Z" />
  </svg>
);

// Express is a black wordmark; it disappears on dark backgrounds but the tools
// section is light, so the brand colour is kept as-is.
const TOOLS = {
  mysql: { Icon: SiMysql, color: '#4479A1' },
  node: { Icon: SiNodedotjs, color: '#5FA04E' },
  react: { Icon: SiReact, color: '#61DAFB' },
  xd: { Icon: AdobeXd, color: null },
  figma: { Icon: Figma, color: null },
  postgresql: { Icon: SiPostgresql, color: '#4169E1' },
  javascript: { Icon: SiJavascript, color: '#F7DF1E' },
  laravel: { Icon: SiLaravel, color: '#FF2D20' },
  express: { Icon: SiExpress, color: '#000000' },
};

const ToolIcon = ({ name }) => {
  const tool = TOOLS[name];
  if (!tool) return null;

  const { Icon, color } = tool;
  return color ? <Icon color={color} /> : <Icon />;
};

export default ToolIcon;
