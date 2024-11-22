import { motion } from "framer-motion"
import { format } from "date-fns"
import { articles } from "@/data/articles"

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
    </div>
  )
} 