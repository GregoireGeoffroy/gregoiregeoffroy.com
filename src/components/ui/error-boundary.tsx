import { Component, ErrorInfo, ReactNode } from 'react'
import { Button } from './button'
import { RefreshCw } from 'lucide-react'
import { Link } from 'react-router-dom'

interface Props {
  children?: ReactNode
}

interface State {
  hasError: boolean
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  }

  public static getDerivedStateFromError(_error: Error): State {
    return { hasError: true }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
          <h1 className="text-7xl font-bold mb-4">500</h1>
          <h2 className="text-2xl font-semibold mb-4">Something went wrong</h2>
          <p className="text-muted-foreground mb-8 max-w-md">
            An unexpected error occurred. Please try again later.
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

    return this.props.children
  }
}

export default ErrorBoundary 