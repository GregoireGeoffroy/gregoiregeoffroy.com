import { Button } from "@/components/ui/button"

export function Contact() {
  return (
    <div className="text-center space-y-8">
      <p className="max-w-2xl mx-auto">
        <Button asChild>
          <a href="mailto:gregoire.geoffroy@gmail.com">
            Contact Me
          </a>
        </Button>
      </p>
    </div>
  )
} 