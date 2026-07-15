import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { IdeaListSection } from "@/components/IdeaListSection";
import { VideoReelsRow } from "@/components/VideoReelsRow";
import { IDEA_LISTS } from "@/data/products";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-white dark:bg-zinc-950">
        <Hero />
        <div className="mx-auto max-w-6xl py-10 sm:py-14">
          <div className="flex flex-col gap-12 sm:gap-16">
            <VideoReelsRow />
            {IDEA_LISTS.map((list) => (
              <IdeaListSection key={list.slug} list={list} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
