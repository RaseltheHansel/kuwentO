import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import { ArrowLeft, Mic, Hand, Clock, User, Users } from "lucide-react";

const STORY_DATA: Record<
  string,
  {
    title: string;
    description: string;
    authorName: string;
    deployedBy: string;
    duration: string;
    content: string;
    image: string;
    voiceoverUrl?: string;
    videoUrl?: string;
    hasVoiceover: boolean;
    hasSignLanguage: boolean;
  }
> = {
  "1": {
    title: "Si Langgam at Tipaklong",
    description:
      "Kinukuwento rito ang isang masipag na langgam na nag-iimpok ng pagkain habang tag-init at isang tipaklong na inuuna ang pag-awit at paglalaro.",
    authorName: "Traditional Filipino Folklore",
    deployedBy: "Virgilio Almario",
    duration: "8 min",
    content: `Noong tag-init, abalang-abala ang mga langgam sa pag-iipon ng pagkain. Araw-araw silang nagdadala ng butil at dahon papunta sa kanilang lungga upang maghanda sa darating na taglamig.

Samantala, ang tipaklong ay masayang umaawit at tumatalon sa parang. Nakita niya ang mga langgam at tinanong, “Bakit kayo nagpapakahirap sa pagtatrabaho? Ang ganda ng panahon! Mas mabuti pang magsaya at umawit.”

Sumagot ang isang langgam, “Naghahanda kami para sa taglamig. Kapag dumating ang malamig na panahon, mahirap nang maghanap ng pagkain.”

Ngunit hindi nakinig ang tipaklong. Ipinagpatuloy niya ang pag-awit at paglalaro buong tag-init.

Lumipas ang mga buwan at dumating ang taglamig. Naging malamig ang paligid at natakpan ng yelo ang lupa. Wala nang makain ang tipaklong at siya’y giniginaw at nagugutom. Naalala niya ang mga langgam at ang kanilang paghahanda.

Pumunta siya sa lungga ng mga langgam at nakiusap, “Maawa kayo sa akin. Wala akong makain at giniginaw ako.”

Sinabi ng mga langgam, “Noong tag-init, habang kami’y naghahanda, ikaw ay umaawit at naglalaro. Ngayong taglamig, kailangan mong pagtiisan ang bunga ng iyong ginawa.”

Doon napagtanto ng tipaklong ang kanyang pagkakamali.`,
    image:
      "/LanggamAtTipaklong.png",
    hasVoiceover: true,
    hasSignLanguage: true,
  },
  "2": {
    title: "Si Juan Tamad at ang Bayabas",
    description:
      "Isang batang tamad na mas gusto ang hindi paggawa ng anumang bagay at umaasa na ang pagkain ay darating na lamang sa kanya.",
    authorName: "Traditional Filipino Folklore",
    deployedBy: "",
    duration: "8 min",
    content: `Noong unang panahon sa Pilipinas, may isang binatang kilala sa kanilang baryo dahil sa kanyang sobrang katamaran. Siya ay si Juan Tamad.

Isang araw, inutusan siya ng kanyang ina na maghanap ng makakain. Gutom na gutom na sila, ngunit ayaw pa ring kumilos ni Juan. Sa halip na magtrabaho o maghanap ng pagkain nang maayos, nagpunta siya sa ilalim ng isang puno ng bayabas.

Humiga siya sa ilalim ng puno at tumingala. Sinabi niya sa sarili, “Hintayin ko na lang mahulog ang bayabas sa aking bibig.”

Mahabang oras siyang naghintay. Nang may mahulog na bayabas, hindi ito tumama sa kanyang bibig kundi sa kanyang pisngi. Dahil sa sobrang katamaran, hindi pa rin siya tumayo para pulutin ito.

Sa halip, lumipat siya ng puwesto at muling humiga, umaasang may bayabas na direktang mahuhulog sa kanyang bibig.

Ngunit walang nangyari. Sa huli, wala siyang nakain at umuwi siyang gutom..`,
    image:
      "/image.png",
    hasVoiceover: true,
    hasSignLanguage: false,
  },
  "3": {
    title: "Ang Kuneho at ang Pagong",
    description:
      "Isang pabula tungkol sa isang mabilis at palalong kuneho at isang mabagal ngunit matiyagang pagong na nagkarera. Ipinapakita ng kuwento na ang tiyaga at determinasyon ay mas mahalaga kaysa sa bilis at pagmamalaki..",
    authorName: "Traditional Filipino Folklore",
    deployedBy: "Boots Pastor",
    duration: "7 min",
    content: `Noong unang panahon, may isang kuneho at isang pagong na nakatira sa isang kagubatan. Kilala ang kuneho sa kanyang bilis, ngunit palalo at palaging ipinagmamalaki ang kanyang sarili. Samantala, kilala naman ang pagong sa kanyang kabagalang kilos, ngunit matiyaga at matalino.

Isang araw, nagyabang ang kuneho sa mga hayop sa gubat:
“Ako ang pinakamabilis dito! Walang makakatakbo sa akin!”

Nais patunayan ng pagong na kahit mabagal siya, kaya niyang makipagsabayan sa karera. Kaya iminungkahi niya:
“Kung ganoon, magkarera tayo hanggang sa kabila ng kagubatan.”

Nagtakda ng araw para sa karera. Nang magsimula ang karera, mabilis na tumakbo ang kuneho at naiwan ang pagong sa likuran. Dahil sa sobrang kumpiyansa, huminto ang kuneho sa ilalim ng isang puno at nakatulog, iniisip na malayo na ang pagong at panalo na siya.

Samantala, patuloy na naglakad ang pagong nang mabagal ngunit tuloy-tuloy. Hindi siya huminto o nawalan ng pag-asa. Unti-unti, nahabol niya ang natutulog na kuneho. Nang makarating ang pagong sa finish line, siya ang unang nakarating. Nagising ang kuneho at nagulat nang makita ang pagong na panalo.`,
    image:
      "/image2.png",
    hasVoiceover: true,
    hasSignLanguage: true,
  },
};

export default function StoryDetail() {
  const { storyId } = useParams<{ storyId: string }>();
  const navigate = useNavigate();

  if (!storyId || !STORY_DATA[storyId]) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">
            Story not found
          </h1>
          <button
            onClick={() => navigate("/")}
            className="text-primary hover:text-primary/80 font-semibold"
          >
            ← Back to Stories
          </button>
        </div>
      </div>
    );
  }

  const story = STORY_DATA[storyId];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-secondary/10">
      <Header />

      {/* Back Button */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-primary hover:text-primary font-black text-lg bg-primary/10 px-4 py-2 rounded-full hover:scale-105 transition-all"
        >
          <ArrowLeft className="w-5 h-5" />
          ← Back to Stories
        </button>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left - Story Content */}
          <div className="lg:col-span-2">
            {/* Featured Image */}
            <div className="rounded-xl overflow-hidden shadow-lg mb-8 h-96">
              <img
                src={story.image}
                alt={story.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Story Title and Meta */}
            <h1 className="text-4xl sm:text-5xl font-black text-primary mb-4">
              ✨ {story.title} ✨
            </h1>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6 p-4 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl border-2 border-primary/30">
              <div>
                <p className="text-xs text-muted-foreground font-semibold mb-1">
                  STORY SOURCE
                </p>
                <p className="text-sm font-medium text-foreground">
                  {story.authorName}
                </p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-semibold mb-1">
                  DEPLOYED BY
                </p>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4 text-primary" />
                  <p className="text-sm font-medium text-foreground">
                    {story.deployedBy}
                  </p>
                </div>
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-semibold mb-1">
                  DURATION
                </p>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4 text-primary" />
                  <p className="text-sm font-medium text-foreground">
                    {story.duration}
                  </p>
                </div>
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-semibold mb-1">
                  ACCESSIBILITY
                </p>
                <div className="flex items-center gap-1">
                    {story.hasVoiceover && (
                    <Mic className="w-4 h-4 text-primary" />
                 )}
                    {story.hasSignLanguage && (
                    <Hand className="w-4 h-4 text-accent" />
                 )}
                </div>
              </div>
            </div>


            {/* Story Text */}
            <div className="prose prose-lg max-w-none">
              <div className="bg-white rounded-xl border border-border p-8">
                <p className="text-lg leading-relaxed text-foreground whitespace-pre-wrap">
                  {story.content}
                </p>
              </div>
            </div>
          </div>

          {/* Right - Media Players */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Voiceover Player */}
              {story.hasVoiceover && (
                <div className="bg-white rounded-xl border border-border p-6 shadow-md">
                  <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                    <Mic className="w-5 h-5 text-primary" />
                    Voiceover
                  </h3>
                  <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-4 mb-4">
                    <div className="flex items-center justify-center h-12 bg-white rounded border border-primary/20">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className="w-1 bg-primary rounded-full animate-pulse"
                            style={{
                              height: `${20 + i * 8}px`,
                              animationDelay: `${i * 0.1}s`,
                            }}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <audio
                    controls
                    className="w-full rounded border border-border"
                    src={story.voiceoverUrl || ""}
                  />
                </div>
              )}

              {/* Sign Language Video */}
              {story.hasSignLanguage && (
                <div className="bg-white rounded-xl border border-border p-6 shadow-md">
                  <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                    <Hand className="w-5 h-5 text-accent" />
                    Sign Language
                  </h3>
                  <div className="bg-black rounded-lg overflow-hidden aspect-video flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="mb-3">
                        <Hand className="w-12 h-12 mx-auto opacity-50" />
                      </div>
                      <p className="text-sm">Sign Language Video</p>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-3 text-center">
                    Sign language interpretation available
                  </p>
                </div>
              )}

              {/* CTA */}
              <div className="bg-gradient-to-br from-primary to-accent rounded-xl p-6 text-white">
                <h3 className="font-bold mb-2">Share Your Version</h3>
                <p className="text-sm mb-4 opacity-90">
                  Have your own voiceover or sign language version?
                </p>
                <button className="w-full bg-white text-primary py-2 rounded-lg hover:bg-white/90 transition-colors font-semibold">
                  Submit Your Version
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Stories */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-border mt-16">
        <h2 className="text-3xl font-bold text-foreground mb-8">
          More Stories
        </h2>
        <div className="text-center text-muted-foreground">
          <p>More stories coming soon. Explore our full collection on the homepage.</p>
        </div>
      </section>
    </div>
  );
}
