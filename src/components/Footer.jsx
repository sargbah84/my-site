import React from 'react';
import { FaLinkedinIn, FaBehance, FaGithub, FaCodepen, FaPinterest } from 'react-icons/fa';

const LINKS = [
  { href: '#about', label: 'about' },
  { href: '#skills', label: 'skills' },
  { href: '#portfolio', label: 'portfolio' },
  { href: '#tools', label: 'tools' },
  { href: '#contact', label: 'contact' },
];

const Footer = ({ data }) => (
  <footer className="site-footer">
    <div className="container px-md-0 px-4">
      <div className="footer-top">
        <div className="footer-brand">
          <span className="section-mark" aria-hidden="true" />
          <span className="footer-name">{data.signature}</span>
        </div>

        <nav className="footer-nav" aria-label="Footer">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="footer-socials">
        <a href="https://www.linkedin.com/in/prince-sargbah-b0155479/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
        <a href="https://behance.net/sargbah84" target="_blank" rel="noopener noreferrer" aria-label="Behance"><FaBehance /></a>
        <a href="https://github.com/sargbah84" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
        <a href="https://codepen.io/sargbah84" target="_blank" rel="noopener noreferrer" aria-label="CodePen"><FaCodepen /></a>
        <a href="https://pinterest.com/princesargbah" target="_blank" rel="noopener noreferrer" aria-label="Pinterest"><FaPinterest /></a>
      </div>

      <p className="footer-copy">
        Copyright © {new Date().getFullYear()} {data.name}
      </p>
    </div>
  </footer>
);

export default Footer;
