import React from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const AboutPage = () => {
  return (
    <div className="py-7">
      <section className="mb-10 flex flex-col items-center justify-center md:flex-row md:justify-start">
        <Avatar className="mb-5 mr-5 h-24 w-24 md:mb-0">
          <AvatarImage
            className=""
            src="https://res.cloudinary.com/dickymr/image/upload/v1683099265/dickymr_4b59491ed6_0a0df9d258_9639a027b0.jpg"
          />
          <AvatarFallback>DMR</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="mb-1 text-center text-xl font-bold md:text-left">Dicky Muhamad R</h1>
          <p className="text-center text-sm md:text-left">
            Associate Frontend Engineer at{' '}
            <a className="hover:underline" href="https://www.garena.co.id/" target="_blank">
              Garena Indonesia
            </a>
          </p>
        </div>
      </section>
      <section>
        <p className="mb-5">
          Hi there! My name is Dicky Muhamad R and I am a Frontend Web Developer with 2 years of experience building web
          applications using modern technologies like React.js, Next.js, SCSS, Tailwind, and Redux.
        </p>
        <p className="mb-5">
          I have always been passionate about technology and the power it has to transform the way we live and work. As
          a developer, I love the challenge of building user-friendly, visually appealing web applications that solve
          real-world problems.
        </p>
        <p className="mb-5">
          In my current role, I have worked on a variety of web projects, including building and maintaining responsive
          web interfaces, integrating with APIs and third-party services, and optimizing web performance.
        </p>
        <p className="mb-5">
          Outside of work, I am an avid learner and am always looking for ways to improve my skills and stay up-to-date
          with the latest web development trends and technologies.
        </p>
        <p className="mb-5">
          I am always looking for new opportunities to learn and grow as a developer, and I am eager to apply my skills
          to help build innovative web projects. Thank you for visiting my page, and I hope to work with you in the
          future!
        </p>
      </section>
    </div>
  );
};

export default AboutPage;
