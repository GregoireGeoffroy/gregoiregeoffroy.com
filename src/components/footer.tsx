const links = [
  {
    title: 'Email',
    url: 'mailto:gregoire.geoffroy@gmail.com',
  },
  {
    title: 'Bluesky',
    url: 'https://bsky.app/profile/gregoiregeoffroy.bsky.social',
  },
  {
    title: 'GitHub',
    url: 'https://github.com/GregoireGeoffroy',
  },
  {
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/gregoiregeoffroy/',
  },
  {
    title: 'Instagram',
    url: 'https://www.instagram.com/gregoire.g/',
  },
]

export function Footer() {
  return (
    <footer className="bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16 space-x-6">
          {links.map((link) => (
            <a
              key={link.title}
              href={link.url}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors lowercase border-none"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.title}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
} 