import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { CategoryShowcase } from "@/components/CategoryShowcase";
import { IdeaListSection } from "@/components/IdeaListSection";
import { NewsletterCTA } from "@/components/NewsletterCTA";
import { IDEA_LISTS } from "@/data/products";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <CategoryShowcase />
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="flex flex-col gap-16 sm:gap-24">
            {IDEA_LISTS.map((list) => (
              <IdeaListSection key={list.slug} list={list} />
            ))}
          </div>
        </div>
        <NewsletterCTA />
      </main>
      <Footer />
    </>
  );
}
