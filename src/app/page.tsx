import HeroSection from '@/components/hero-section';
import WorkExperienceSection from '@/components/work-experience-section';
import ProjectsSection from '@/components/projects-section';
import BlogSection from '@/components/blog-section';
import Footer from '@/components/footer';
import ScrollProgress from '@/components/scroll-progress';

export default function Home() {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <main id="main" className="max-w-4xl mx-auto px-3 sm:px-6 py-12 space-y-24">
        <HeroSection />
        <WorkExperienceSection />
        <ProjectsSection />
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
}