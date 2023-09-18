import Image from 'next/image';
import Link from 'next/link';
import './page.scss';

export default function Home() {
  return (
    <main className="main">
      <div className="info">
        <h1 className="info__name">Micro-projects</h1>
        <h2 className="info__creator">by Ekzis</h2>
      </div>
      <div className="projects">
        <Link
          className="projects__item project"
          href="color-flipper"
        >
          <div className="project__name">Color Flipper</div>
          <div className="animation">
            <div className="animation__effect animation__effect--1"></div>
            <div className="animation__effect animation__effect--2"></div>
            <div className="animation__effect animation__effect--3"></div>
            <div className="animation__effect animation__effect--4"></div>
            <div className="animation__effect animation__effect--5"></div>
            <div className="animation__effect animation__effect--6"></div>
          </div>
        </Link>
      </div>
    </main>
  );
}
