import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft, User, Tag, Github, MessageCircle } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { getPostBySlug, getAllPosts, Post } from "@/lib/posts";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";

const BlogPostPage = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      if (slug) {
        const [postData, allPosts] = await Promise.all([
          getPostBySlug(slug),
          getAllPosts()
        ]);
        
        setPost(postData);
        setRelatedPosts(allPosts.filter(p => p.slug !== slug).slice(0, 2));
      }
      setLoading(false);
    };

    loadData();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen gradient-bg">
        <Navbar onContactClick={() => {}} />
        <main className="pt-24 pb-16 px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="animate-pulse">
              <div className="h-8 bg-muted rounded w-1/4 mb-4"></div>
              <div className="h-4 bg-muted rounded w-3/4 mb-8"></div>
              <div className="space-y-4">
                <div className="h-4 bg-muted rounded"></div>
                <div className="h-4 bg-muted rounded"></div>
                <div className="h-4 bg-muted rounded w-5/6"></div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  if (!post) {
    return (
      <div className="min-h-screen gradient-bg">
        <Navbar onContactClick={() => {}} />
        <main className="pt-24 pb-16 px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Post no encontrado</h1>
            <Link to="/blog" className="text-primary hover:underline">
              Volver al blog
            </Link>
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
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link 
              to="/blog"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver al blog
            </Link>
          </motion.div>

          {/* Article Header */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card p-8 lg:p-12 rounded-2xl mb-8"
          >
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 text-foreground">
              {post.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8 pb-8 border-b border-border/50">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date(post.date).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime} de lectura</span>
              </div>
            </div>

            {/* Article Content */}
            <div className="prose prose-invert prose-headings:text-foreground prose-p:text-foreground prose-strong:text-foreground prose-code:text-foreground prose-blockquote:text-muted-foreground prose-blockquote:border-l-primary prose-a:text-primary prose-pre:bg-muted prose-pre:border prose-ul:text-foreground prose-ol:text-foreground prose-li:text-foreground max-w-none">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeHighlight, rehypeRaw]}
              >
                {post.content}
              </ReactMarkdown>
            </div>

            {/* Article Footer */}
            <div className="mt-12 pt-8 border-t border-border/50">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                    <Github className="w-5 h-5" />
                    Editar en GitHub
                  </button>
                  <button className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                    <MessageCircle className="w-5 h-5" />
                    Comentarios
                  </button>
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Compartir:</span>
                  <div className="flex gap-2">
                    <button className="p-2 rounded-full glass-card hover-glow transition-all duration-300">
                      <Github className="w-4 h-4" />
                    </button>
                    <button className="p-2 rounded-full glass-card hover-glow transition-all duration-300">
                      <MessageCircle className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.article>

          {/* Related Posts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card p-8 rounded-2xl"
          >
            <h2 className="text-2xl font-display font-bold mb-6 text-foreground">
              Artículos relacionados
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link 
                  key={relatedPost.slug}
                  to={`/blog/${relatedPost.slug}`}
                  className="group"
                >
                  <div className="p-4 rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 group-hover:bg-primary/5">
                    <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {relatedPost.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPostPage;
