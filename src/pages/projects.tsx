import { motion } from "framer-motion"

// Sample projects data - move to a separate file later
const projects = [
  {
    year: "2024",
    projects: [
      {
        title: "Project One",
        description: "A modern web application built with React and TypeScript",
        url: "https://project-one.com",
        image: "/projects/project-one.png",
        tags: ["React", "TypeScript", "Tailwind"],
        featured: true
      },
      // Add more projects...
    ]
  },
  // Add more years...
]

interface ProjectCardProps {
  project: {
    title: string
    description: string
    url: string
    image: string
    tags: string[]
  }
}

function FeaturedProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="group relative rounded-lg border bg-card p-6 hover:bg-accent transition-colors"
    >
      <div className="flex flex-col h-full">
        <h3 className="text-xl font-semibold group-hover:text-accent-foreground">
          {project.title}
        </h3>
        <p className="mt-2 text-muted-foreground flex-grow">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <span 
              key={tag}
              className="px-2 py-1 text-xs bg-muted rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

function ProjectItem({ project }: ProjectCardProps) {
  return (
    <motion.li
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="py-2"
    >
      <a 
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-foreground transition-colors"
      >
        {project.title}
      </a>
    </motion.li>
  )
}

export function Projects() {
  const featuredProjects = projects
    .flatMap(year => year.projects)
    .filter(project => project.featured)

  const totalProjects = projects.reduce(
    (total, year) => total + year.projects.length,
    0
  )

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Projects</h1>
        <p className="text-muted-foreground max-w-2xl">
          I'm obsessed with side projects and <strong>building in public</strong>.
          Here you can navigate to <strong>{totalProjects} different</strong> websites,
          apps, and libraries I built. Some projects are still active, others have
          been discontinued.
        </p>
      </div>

      {/* Featured Projects */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Featured Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <FeaturedProjectCard key={index} project={project} />
          ))}
        </div>
      </div>

      {/* All Projects */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">All Projects</h2>
        {projects.map((yearGroup, index) => (
          <div key={index} className="space-y-4">
            <h3 className="text-xl font-semibold">{yearGroup.year}</h3>
            <ul className="space-y-2">
              {yearGroup.projects.map((project, pIndex) => (
                <ProjectItem key={pIndex} project={project} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
} 