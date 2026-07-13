import Link from "next/link";
import type { ReactNode } from "react";

export const projects = [
  {
    slug: "hamsterballin",
    number: "01",
    title: "Hamsterballin’",
    engine: "Unreal Engine 5",
    role: "Level Designer",
    subtitle: "Roulette Runway · Tunnel owner",
    image:
      "https://images.squarespace-cdn.com/content/v1/6a414942f5d99e4efb38d03f/c5b05051-f547-44f9-a913-0e437a223893/hamsterballin11.png?format=1000w",
    description:
      "A high-speed racing level built around readable risk, visual momentum, and confident player flow.",
  },
  {
    slug: "firefly",
    number: "02",
    title: "Starfield: Firefly",
    engine: "Creation Kit",
    role: "Level Designer",
    subtitle: "Modular medical lab",
    image:
      "https://images.squarespace-cdn.com/content/v1/6a414942f5d99e4efb38d03f/1f3ecdd8-9c18-4e34-a1ac-df43a87c85c3/%E5%B7%B2%E7%94%9F%E6%88%90%E5%9B%BE%E5%83%8F+1.png?format=1000w",
    description:
      "A circular combat space that guides exploration through story, light, and deliberate encounter rhythm.",
  },
  {
    slug: "blacksite",
    number: "03",
    title: "Half-Life 2: Black Site",
    engine: "Hammer",
    role: "Level Designer",
    subtitle: "Lock-and-key progression",
    image:
      "https://images.squarespace-cdn.com/content/v1/6a414942f5d99e4efb38d03f/292e3098-f9bc-4539-a5a8-60efb704bc50/%E5%B7%B2%E7%94%9F%E6%88%90%E5%9B%BE%E5%83%8F+1+%282%29.png?format=1000w",
    description:
      "A tightly paced security facility where routing, backtracking, and tactical pressure work as one system.",
  },
  {
    slug: "kill-the-makers",
    number: "04",
    title: "Kill the Makers",
    engine: "Unity",
    role: "Game, Level & Audio Designer",
    subtitle: "2D puzzle-platformer",
    image:
      "https://images.squarespace-cdn.com/content/v1/6a414942f5d99e4efb38d03f/075beb49-c28f-4286-befa-6a8c11191fb2/%E5%B7%B2%E7%94%9F%E6%88%90%E5%9B%BE%E5%83%8F+1+%281%29.png?format=1000w",
    description:
      "A puzzle-platformer that teaches its rules through spatial composition, sound cues, and iteration.",
  },
  {
    slug: "pit-stop",
    number: "05",
    title: "Half-Life 2: Pit Stop",
    engine: "Hammer",
    role: "Level Designer",
    subtitle: "Encounter design",
    image:
      "https://images.squarespace-cdn.com/content/v1/6a414942f5d99e4efb38d03f/71b4cc97-458a-4a6c-a80d-43c4550e7c69/%E5%B7%B2%E7%94%9F%E6%88%90%E5%9B%BE%E5%83%8F+1+%283%29.png?format=1000w",
    description:
      "A compact action level focused on encounter staging, readable cover, and purposeful movement.",
    underConstruction: true,
  },
];

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="site-shell">
      <header className="site-header">
        <nav className="main-nav" aria-label="Primary navigation">
          <Link href="/">Home</Link>
          <div className="project-nav">
            <Link href="/projects">Projects <span>+</span></Link>
            <div className="project-menu">
              {projects.map((project) => (
                <Link key={project.slug} href={`/projects/${project.slug}`}>
                  <small>{project.number}</small>{project.title}
                </Link>
              ))}
            </div>
          </div>
          <Link href="/about">About</Link>
          <Link href="/resume">Resume</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <Link className="brand" href="/" aria-label="Ruichi Li home"><span>RUICHI LI</span></Link>
      </header>
      <main>{children}</main>
      <footer className="site-footer">
        <div className="footer-links"><Link href="/">Home Page</Link><Link href="/contact">Contact</Link><Link href="/about">About Me</Link></div>
      </footer>
    </div>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  const card = (
    <>
      <img src={project.image} alt={`${project.title} project cover`} />
      <div className="project-card-shade" />
      {project.underConstruction && <div className="construction-label">UNDER CONSTRUCTION</div>}
      <div className="project-top"><span>{project.number}</span><span>{project.engine}</span></div>
      <div className="project-bottom"><p>{project.role}</p><h3>{project.title}</h3>{!project.underConstruction && <span className="card-arrow">↗</span>}</div>
    </>
  );
  return project.underConstruction ? <div className="project-card project-card-disabled">{card}</div> : <Link className="project-card" href={`/projects/${project.slug}`}>{card}</Link>;
}

export function HomePage() {
  return (
    <SiteShell>
      <section className="home-intro"><p className="eyebrow">LEVEL DESIGNER &amp; GAMEPLAY DESIGNER</p></section>
      <section className="work-section" id="work">
        <div className="project-grid">{projects.map((project) => <ProjectCard key={project.slug} project={project} />)}</div>
      </section>
    </SiteShell>
  );
}

export function ProjectsPage() {
  return <SiteShell><section className="page-intro"><span className="eyebrow">PROJECT INDEX / 05</span><h1>Playable spaces,<br /><em>built with intent.</em></h1><p>Level and gameplay work across racing, action, exploration, and puzzle-platforming.</p></section><section className="project-index">{projects.map((project) => <ProjectCard key={project.slug} project={project} />)}</section></SiteShell>;
}

export function ProjectPage({ project }: { project: (typeof projects)[number] }) {
  return <SiteShell><section className="project-hero"><img src={project.image} alt="" /><div className="project-hero-shade" /><div className="project-hero-copy"><span className="eyebrow">{project.number} / {project.engine}</span><h1>{project.title}</h1><p>{project.description}</p></div></section><section className="case-study"><aside><span className="eyebrow">ROLE</span><strong>{project.role}</strong><span className="eyebrow">FOCUS</span><strong>{project.subtitle}</strong></aside><div><span className="eyebrow">DESIGN INTENT</span><h2>Making every decision legible, expressive, and satisfying to play.</h2><p>This case study presents the level-design thinking behind the project: creating clear player goals, using spatial composition to support momentum, and iterating from playtest feedback.</p><div className="case-rule" /><p>From the first route sketch to the final encounter pass, the aim is the same: make the next meaningful decision feel visible, but never forced.</p></div></section></SiteShell>;
}

export function AboutPage() {
  return <SiteShell><section className="page-intro about-intro"><span className="eyebrow">ABOUT / RUICHI LI</span><h1>I design the <em>feeling</em><br />of finding your way.</h1><p>Level Designer and Master of Interactive Technology candidate at SMU Guildhall, building environments where clear play and strong atmosphere reinforce each other.</p></section><section className="bio-grid"><div className="bio-panel"><span className="eyebrow">CURRENTLY</span><h2>Studying Level Design at SMU Guildhall.</h2><p>Expected graduation: May 2027</p></div><div className="bio-panel muted"><span className="eyebrow">BACKGROUND</span><h2>From Jiangsu, China to Dallas, Texas.</h2><p>Bachelor of Internet of Things, Hohai University · June 2024</p></div></section><section className="toolkit"><span className="eyebrow">TOOLKIT</span><div><h2>Unreal Engine 5 · Unity · Hammer · Creation Kit</h2><p>Whitebox-to-shipped pipelines, player flow, encounter pacing, environmental storytelling, Perforce, Jira, C#, C++, Python, 3ds Max, Illustrator.</p></div></section></SiteShell>;
}

export function ResumePage() {
  const entries = [
    ["2026", "Hamsterballin’", "Level Designer · Unreal Engine 5", "Owned the Tunnel in Roulette Runway; balanced pickups and hazards to guide sightlines, reward risk, and pace the race."],
    ["2025", "Kill the Makers", "Game, Level & Audio Designer · Unity", "Created puzzle-platformer levels that onboard players through hazards, platform placement, custom SFX, and playtest-driven tuning."],
    ["2024", "Starfield: Firefly", "Level Designer · Creation Kit", "Built a modular medical lab with circular combat flow, scripted events, NPC behaviors, and environmental storytelling."],
    ["2024", "Half-Life 2: Black Site", "Level Designer · Hammer", "Designed routing, lock-and-key progression, mission logic, and tactical Combine encounters."],
  ];
  return <SiteShell><section className="page-intro resume-intro"><span className="eyebrow">RESUME / SELECTED EXPERIENCE</span><h1>Build the route.<br /><em>Shape the moment.</em></h1><a className="solid-button" href="mailto:ruichil1030@gmail.com?subject=Resume%20request">Request PDF resume <span>↗</span></a></section><section className="resume-list">{entries.map(([year, title, role, copy]) => <article key={title}><span>{year}</span><div><h2>{title}</h2><strong>{role}</strong><p>{copy}</p></div></article>)}</section><section className="resume-skills"><span className="eyebrow">SKILLS</span><p>Unreal Engine 5 · Unity · Starfield Creation Kit · Source Engine: Hammer · C · C++ · C# · Java · Python · Perforce · Jira · 3ds Max · Illustrator</p></section></SiteShell>;
}

export function ContactPage() {
  return <SiteShell><section className="contact-page"><span className="eyebrow">CONTACT / OPEN TO COLLABORATION</span><h1>Let&apos;s build<br /><em>the next route.</em></h1><p>For level design, gameplay, and collaborative game-development opportunities, get in touch.</p><a className="contact-email" href="mailto:ruichil1030@gmail.com">ruichil1030@gmail.com <span>↗</span></a><div className="contact-meta"><span>Dallas, Texas</span><a href="https://www.linkedin.com/in/ruichi-li-9903372b1/" target="_blank">LinkedIn ↗</a></div></section></SiteShell>;
}
