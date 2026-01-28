import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, User, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { getAllPosts, Post } from "@/lib/posts";

const BlogPage = () => {
  const [blogPosts, setBlogPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllPosts().then(posts => {
      setBlogPosts(posts);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen gradient-bg">
        <Navbar onContactClick={() => {}} />
        <main className="pt-24 pb-16 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-muted rounded w-1/4 mx-auto mb-4"></div>
              <div className="h-4 bg-muted rounded w-1/2 mx-auto"></div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  return (
    <div className="min-h-screen gradient-bg">
      <Navbar onContactClick={() => {}} />
      
      <main className="pt-24 pb-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-left mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Artículos sobre desarrollo web, tecnología y mejores prácticas. 
              Compartiendo conocimiento y experiencias del mundo del desarrollo software.
            </p>
          </motion.div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Link 
                  to={`/blog/${post.slug}`}
                  className="block h-full"
                >
                  <div className="glass-card p-6 rounded-2xl h-full hover-glow transition-all duration-300 group-hover:scale-[1.02]">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-display font-bold mb-3 text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(post.date).toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          {/* Load More Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-center mt-12"
          >
            <button className="glass-card px-8 py-3 rounded-full text-foreground hover-glow transition-all duration-300 font-medium hover:scale-105">
              Cargar más artículos
            </button>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPage;
