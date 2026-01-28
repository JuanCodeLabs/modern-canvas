// Import dinámico de todos los archivos Markdown
const postModules = import.meta.glob('../posts/*.md', { as: 'raw' });

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  tags: string[];
  content: string;
}

function parseFrontmatter(content: string) {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);
  
  if (!match) {
    return {
      data: {},
      content: content.trim()
    };
  }

  const frontmatter = match[1];
  const markdownContent = match[2];
  
  const data: Record<string, any> = {};
  
  frontmatter.split('\n').forEach(line => {
    const colonIndex = line.indexOf(':');
    if (colonIndex > 0) {
      const key = line.slice(0, colonIndex).trim();
      let value = line.slice(colonIndex + 1).trim();
      
      // Remove quotes if present
      if ((value.startsWith('"') && value.endsWith('"')) || 
          (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }
      
      // Parse arrays
      if (value.startsWith('[') && value.endsWith(']')) {
        data[key] = value.slice(1, -1).split(',').map(item => item.trim().replace(/["']/g, ''));
      } else {
        data[key] = value;
      }
    }
  });

  return {
    data,
    content: markdownContent.trim()
  };
}

function calculateReadTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
  const readTime = Math.ceil(words / wordsPerMinute);
  return `${readTime} min`;
}

export async function getAllPosts(): Promise<Post[]> {
  const posts: Post[] = [];
  
  for (const path in postModules) {
    const content = await postModules[path]();
    const { data, content: markdownContent } = parseFrontmatter(content);
    const slug = path.split('/').pop()?.replace('.md', '') || '';
    
    const readTime = calculateReadTime(markdownContent);
    
    posts.push({
      slug,
      title: data.title || slug,
      excerpt: data.excerpt || markdownContent.substring(0, 150) + '...',
      date: data.date || new Date().toISOString().split('T')[0],
      readTime,
      author: data.author || 'Juan Díaz',
      tags: data.tags || [],
      content: markdownContent,
    });
  }
  
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const posts = await getAllPosts();
  return posts.find(post => post.slug === slug) || null;
}
