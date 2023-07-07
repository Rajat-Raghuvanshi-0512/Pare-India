import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    console.log(error, info.componentStack)
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback ? (
        this.props.fallback
      ) : (
        <div className="flex h-screen w-full flex-col items-center justify-center text-center">
          <p className="text-3xl font-bold uppercase text-red-base md:text-4xl lg:text-5xl">Something went wrong!</p>
          <p className="animate-bounce py-5 text-xl md:text-2xl">Try refreshing the page</p>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
