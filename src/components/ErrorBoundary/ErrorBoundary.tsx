import { Component, ErrorInfo, ReactNode } from "react"

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(_: Error): State {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log the error to console, but don't rethrow it
    // eslint-disable-next-line no-console
    console.error("Caught error:", error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      // Return fallback UI if provided, otherwise return null
      return this.props.fallback || null
    }

    return this.props.children
  }
}

export { ErrorBoundary }
