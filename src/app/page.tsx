import './page.scss';
import ProjLink from '@/components/projLink';
import fs from 'fs/promises';

export default async function Home() {
  let links: string[] = [];
  await fs.readdir('./src/app/(projects)').then((files) =>
    files.forEach((file) => {
      file != 'layout.tsx' ? links.push(file) : '';
    })
  );

  return (
    <main className="main">
      <div className="info">
        <h1 className="info__name">Micro-projects</h1>
        <h2 className="info__creator">by Ekzis</h2>
      </div>
      <div className="projects">
        {links.map((item, index) => (
          <ProjLink
            key={index}
            href={item}
            content={item.replace('-', ' ')}
          />
        ))}
      </div>
    </main>
  );
}
