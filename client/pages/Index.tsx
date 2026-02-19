import Header from "@/components/Header";
import StoryCard from "@/components/StoryCard";
import { ArrowRight, Users, Zap, BookMarked } from "lucide-react";
import { Link } from "react-router-dom";

const SAMPLE_STORIES = [
  {
    id: "1",
    title: "Si Langgam at Tipaklong",
    description:
      "Kinukuwento rito ang isang masipag na langgam na nag-iimpok ng pagkain habang tag-init at isang tipaklong na inuuna ang pag-awit at paglalaro..",
    image:
      "/LanggamAtTipaklong.png",
    hasVoiceover: true,
    hasSignLanguage: true,
    duration: "8 min",
    deployedBy: "Virgilio Almario ",
  },
  {
    id: "2",
    title: "Si Juan Tamad at ang Bayabas",
    description:
      "Isang batang tamad na mas gusto ang hindi paggawa ng anumang bagay at umaasa na ang pagkain ay darating na lamang sa kanya.",
    image:
      "/image.png",
    hasVoiceover: true,
    hasSignLanguage: false,
    duration: "10 min",
    deployedBy: "",
  },
  {
    id: "3",
    title: "Ang Kuneho at ang Pagong",
    description:
      "Isang pabula tungkol sa isang mabilis at palalong kuneho at isang mabagal ngunit matiyagang pagong na nagkarera. Ipinapakita ng kuwento na ang tiyaga at determinasyon ay mas mahalaga kaysa sa bilis at pagmamalaki.",
    image:
      "/image2.png",
    hasVoiceover: true,
    hasSignLanguage: true,
    duration: "7 min",
    deployedBy: "Boots Pastor",
  },
  {
    id: "4",
    title: "Ang Bundok ng Mga Diwata",
    description:
      "Explore a magical mountain where friendly spirits protect children and grant them peaceful dreams.",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop",
    hasVoiceover: false,
    hasSignLanguage: true,
    duration: "6 min",
    deployedBy: "Rosita Mercado",
  },
  {
    id: "5",
    title: "Si Pedro at ang Alahas ng Dagat",
    description:
      "A young fisherman's son discovers a hidden treasure chest with bedtime stories written on magical pearls.",
    image:
      "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=500&h=300&fit=crop",
    hasVoiceover: true,
    hasSignLanguage: false,
    duration: "9 min",
    deployedBy: "Roberto Aquino",
  },
  {
    id: "6",
    title: "Ang Punong-puno ng Pag-asa",
    description:
      "A story about a magical tree that grows with every child's happy dream and spreads peace and comfort.",
    image:
      "https://images.unsplash.com/photo-1518929458519-e21cc028cb29?w=500&h=300&fit=crop",
    hasVoiceover: true,
    hasSignLanguage: true,
    duration: "7 min",
    deployedBy: "Elena Reyes",
  },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-secondary/10">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left side - Content */}
            <div className="animate-fade-in">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground mb-4 leading-tight">
                ✨ Filipino Stories for Peaceful Dreams ✨
              </h2>
              <p className="text-lg text-muted-foreground mb-6 max-w-lg font-semibold leading-relaxed">
                Discover a beautiful collection of traditional Filipino bedtime stories enhanced with voiceovers and sign language interpretations. Perfect for children of all ages.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  to="/studio"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-full hover:shadow-lg hover:scale-105 transition-all font-black text-lg"
                >
                  ✨ Add Your Story
                  <ArrowRight className="w-6 h-6" />
                </Link>
                <a
                  href="#stories"
                  className="inline-flex items-center justify-center gap-2 border-4 border-secondary text-secondary px-8 py-4 rounded-full hover:bg-secondary/10 hover:scale-105 transition-all font-black text-lg"
                >
                  📚 Browse Stories
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-primary/20 border-3 border-primary rounded-2xl p-4 text-center">
                  <div className="text-4xl font-black text-primary">50+</div>
                  <div className="text-sm font-bold text-primary mt-1">📖 Stories</div>
                </div>
                <div className="bg-secondary/20 border-3 border-secondary rounded-2xl p-4 text-center">
                  <div className="text-4xl font-black text-secondary">100%</div>
                  <div className="text-sm font-bold text-secondary mt-1">🇵🇭 Filipino</div>
                </div>
                <div className="bg-accent/20 border-3 border-accent rounded-2xl p-4 text-center">
                  <div className="text-xl font-black text-accent">♾️</div>
                  <div className="text-sm font-bold text-accent mt-1">Accessible</div>
                </div>
              </div>
            </div>

            {/* Right side - Visual */}
            <div className="relative h-96 lg:h-full flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl"></div>
              <div className="relative z-10 w-full h-64 lg:h-80 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1507842510343-583f7270bfba?w=600&h=400&fit=crop"
                  alt="Filipino bedtime stories"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature badges */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-primary/20 to-primary/10 border-4 border-primary rounded-2xl p-8 text-center hover:shadow-lg hover:scale-105 transition-all">
              <div className="flex justify-center mb-4">
                <div className="bg-primary rounded-full p-4">
                  <BookMarked className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="font-black text-foreground mb-2 text-lg">📖 Rich Stories</h3>
              <p className="text-sm font-semibold text-muted-foreground">
                Curated Filipino bedtime tales for all ages
              </p>
            </div>

            <div className="bg-gradient-to-br from-accent/20 to-accent/10 border-4 border-accent rounded-2xl p-8 text-center hover:shadow-lg hover:scale-105 transition-all">
              <div className="flex justify-center mb-4">
                <div className="bg-accent rounded-full p-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="font-black text-foreground mb-2 text-lg">⚡ Easy to Use</h3>
              <p className="text-sm font-semibold text-muted-foreground">
                Add voiceovers and sign language videos easily
              </p>
            </div>

            <div className="bg-gradient-to-br from-secondary/20 to-secondary/10 border-4 border-secondary rounded-2xl p-8 text-center hover:shadow-lg hover:scale-105 transition-all">
              <div className="flex justify-center mb-4">
                <div className="bg-secondary rounded-full p-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="font-black text-foreground mb-2 text-lg">👥 Inclusive</h3>
              <p className="text-sm font-semibold text-muted-foreground">
                Accessible for Deaf and hearing communities
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stories Section */}
      <section id="stories" className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-4">
            📚 Bedtime Stories Collection ✨
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl font-semibold">
            Listen to beautiful Filipino tales with professional voiceovers and authentic sign language interpretations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SAMPLE_STORIES.map((story) => (
            <div key={story.id} className="animate-fade-in">
              <StoryCard
                id={story.id}
                title={story.title}
                description={story.description}
                image={story.image}
                hasVoiceover={story.hasVoiceover}
                hasSignLanguage={story.hasSignLanguage}
                duration={story.duration}
                deployedBy={story.deployedBy}
              />
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary via-accent to-secondary text-white my-12 sm:my-20 rounded-3xl mx-4 sm:mx-6 lg:mx-8 border-4 border-accent shadow-2xl">
        <div className="container mx-auto px-6 sm:px-8 py-12 sm:py-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-black mb-4">
            ✨ Share Your Story ✨
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-white/95 font-semibold">
            Have a Filipino bedtime story to share? Add your voiceover and sign language interpretation to help preserve our cultural heritage.
          </p>
          <Link
            to="/studio"
            className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-full hover:bg-white/95 hover:scale-110 transition-all font-black text-lg shadow-lg"
          >
            🌟 Create Story Now
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-4 border-primary py-8 sm:py-12 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-black text-primary mb-4 text-lg">📚 Kuwento</h3>
              <p className="text-sm text-muted-foreground">
                Preserving Filipino bedtime stories for future generations
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Stories</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Browse All
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Most Popular
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Community</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Contribute
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Guidelines
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>
              &copy; 2026 Kuwento. Celebrating Filipino Culture & Heritage.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
