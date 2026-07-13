import { AboutPage, ContactPage, ResumePage } from "../portfolio";

export function generateStaticParams() {
  return [{ slug: "about" }, { slug: "resume" }, { slug: "contact" }];
}

export default async function StaticPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (slug === "about") return <AboutPage />;
  if (slug === "resume") return <ResumePage />;
  return <ContactPage />;
}
