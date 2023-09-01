import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        &#169; {new Date().getFullYear()}Copyright:
        <a href="https://github.com/ProfPriyen" target="_blank" rel="noopener noreferrer"> Priyen Patel.</a>
      </p>
    </footer>
  );
};

export default Footer;
