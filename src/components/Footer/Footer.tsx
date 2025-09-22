import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer
      id="contact"
      className="gradient-footer text-white py-4 md:py-8 text-center absolute w-full bottom-0 left-0"
    >
      <div className="w-full flex justify-center items-center">
        <a
          href="https://www.linkedin.com/in/kseniamely"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile of Ksenia Melnychenko"
          title="LinkedIn profile"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="#0A66C2"
          >
            <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46C23.21 24 24 23.23 24 22.28V1.72C24 .77 23.21 0 22.23 0zM7.06 20.45H3.56V9h3.5v11.45zM5.31 7.57a2.03 2.03 0 110-4.06 2.03 2.03 0 010 4.06zm14.9 12.88h-3.5v-5.91c0-1.41-.03-3.23-1.97-3.23-1.97 0-2.27 1.54-2.27 3.13v6.01h-3.5V9h3.36v1.57h.05c.47-.9 1.61-1.85 3.32-1.85 3.55 0 4.21 2.34 4.21 5.39v6.9z" />
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer;

