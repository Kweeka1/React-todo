import './about.css';
import { useLocation } from 'react-router-dom';

const About = () => {
  const route = useLocation();

  return (
    <div className="about">
      {
        route.pathname === '/about'
          ? (
            <article>
              <h1 className="about-title">About the app</h1>
              <p className="about-text">To Do List project is a small application where you can save your To do things or tasks inside browser&apos;s local storage so you won&apos;t forget about them and you can also tick each one to be marked as completed.</p>
            </article>
          )
          : (
            <article>
              <h1 className="about-title">About the author</h1>
              <p className="about-text">Hi, my name is Mohamed Talbi, and I’m a self-taught Web developer witha passion for building interactive user interfaces.I began my journey learning web development from scratch, sifting through different open-source resources on Youtube, Medium, MDN, and a lot more. I came across some difficult moments along the road, but with strong dedication and hard work I managed to circumvent them all, which made my way up to become an experienced developer. In that time, I made it my goal to practice every concept I learned in a personal side project by building multiple front-end solutions including landing pages, portfolios, and cloning some websites.These projects made me develop skills regarding clean design, learning UI/UX bestpractices, and gaining solid experience working with front-end technologies like Html,Css, javascript, and Reactjs.</p>
            </article>
          )
      }
    </div>
  );
};

export default About;
