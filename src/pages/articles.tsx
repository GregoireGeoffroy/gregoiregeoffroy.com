import { motion } from "framer-motion"
import { format } from "date-fns"

// Sample articles data - you can move this to a separate file
const articles = [
  {
    title: "Building a Modern Web Application",
    description: "A comprehensive guide to building web applications with React and TypeScript",
    date: "2024-03-15",
    readingTime: "5 min read",
    tags: ["React", "TypeScript", "Web Development"],
    url: "/articles/building-modern-web-app"
  },
  // Add more articles...
]

export function Articles() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Articles</h1>
        <p className="text-muted-foreground max-w-2xl">
          Thoughts on software development, programming, and technology.
          I write about things I learn and experiences I have along the way.
        </p>
      </div>

      {/* Articles List */}
      <div className="space-y-8">
        {articles.map((article, index) => (
          <motion.article
            key={article.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group"
          >
            <a 
              href={article.url}
              className="block space-y-3 hover:no-underline"
            >
              {/* Article Header */}
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <time dateTime={article.date}>
                  {format(new Date(article.date), 'MMMM d, yyyy')}
                </time>
                <span>•</span>
                <span>{article.readingTime}</span>
              </div>

              {/* Article Title & Description */}
              <div className="space-y-2">
                <h2 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {article.title}
                </h2>
                <p className="text-muted-foreground line-clamp-2">
                  {article.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {article.tags.map(tag => (
                  <span 
                    key={tag}
                    className="px-2 py-1 text-xs bg-muted rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          </motion.article>
        ))}
      </div>

      {/* Newsletter Section */}
      <div className="mt-16 p-6 border rounded-lg bg-muted/50">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Subscribe to my newsletter</h3>
          <p className="text-muted-foreground">
            Get emails from me about web development, tech, and early access to new articles.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="email@example.com"
              className="flex-1 px-3 py-2 bg-background border rounded-md"
            />
            <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 