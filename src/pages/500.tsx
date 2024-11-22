import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { RefreshCw } from 'lucide-react'

export default function ServerError() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <h1 className="text-7xl font-bold mb-4">500</h1>
      <h2 className="text-2xl font-semibold mb-4">Server Error</h2>
      <p className="text-muted-foreground mb-8 max-w-md">
        Something went wrong on our end. Please try again later or contact me if the problem persists.
      </p>
      <div className="flex gap-4">
        <Link to="/">
          <Button variant="outline">
            Go home
          </Button>
        </Link>
        <Button 
          variant="default"
          onClick={() => window.location.reload()}
        >
          <RefreshCw className="mr-2 h-4 w-4" />
          Try again
        </Button>
      </div>
    </div>
  )
} 