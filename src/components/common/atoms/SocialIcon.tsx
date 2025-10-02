import React from "react";

type SocialIconProps = {
  href: string;
  label: string;
  children: React.ReactNode;
};

const SocialIcon: React.FC<SocialIconProps> = ({ href, label, children }) => (
  <a
    href={href}
    aria-label={label}
    target="_blank"
    rel="noopener noreferrer"
    className="text-white hover:text-blue-400 text-xl"
  >
    {children}
  </a>
);

export default SocialIcon;
