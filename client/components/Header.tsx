import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b-4 border-primary bg-white shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="bg-gradient-to-br from-primary via-secondary to-accent rounded-2xl p-3 group-hover:shadow-lg transition-shadow">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-black text-primary">Kuwento</h1>
              <p className="text-xs font-bold text-secondary">📚 Filipino Stories</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-foreground hover:text-primary hover:font-bold transition-all font-semibold"
            >
              Stories
            </Link>
            <Link
              to="/studio"
              className="bg-gradient-to-r from-primary to-accent text-white px-7 py-3 rounded-full hover:shadow-lg hover:scale-105 transition-all font-bold text-sm"
            >
              ✨ Create Story
            </Link>
          </nav>

          <div className="md:hidden">
            <Link
              to="/studio"
              className="bg-gradient-to-r from-primary to-accent text-white px-5 py-2 rounded-full hover:shadow-lg hover:scale-105 transition-all text-sm font-bold"
            >
              ✨ Create
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
