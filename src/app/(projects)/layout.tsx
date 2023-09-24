import BackBtn from '@/components/backBtn';

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <BackBtn></BackBtn>
      </body>
    </html>
  );
}
