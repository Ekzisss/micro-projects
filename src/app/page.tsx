import './page.scss';
import ProjLink from '@/components/projLink';

export default function Home() {
  return (
    <main className="main">
      <div className="info">
        <h1 className="info__name">Micro-projects</h1>
        <h2 className="info__creator">by Ekzis</h2>
      </div>
      <div className="projects">
        <ProjLink
          href="color-flipper"
          content="Color flipper"
        />
        <ProjLink
          href="counter"
          content="Counter"
        />
        <ProjLink
          href="review-carousel"
          content="Review carousel"
        />
        <ProjLink
          href="navbar-slider"
          content="Navbar & slider"
        />
        <ProjLink
          href="modal-window"
          content="Modal window"
        />
      </div>
    </main>
  );
}
