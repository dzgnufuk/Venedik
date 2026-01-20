import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Ignore PostHog errors
    if (error.message && error.message.includes('PerformanceServerTiming')) {
      return;
    }
    // Log other errors
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className="min-h-screen flex items-center justify-center bg-amber-50">
          <div className="text-center p-8">
            <h1 className="text-4xl font-bold text-amber-800 mb-4">Bir şeyler yanlış gitti</h1>
            <p className="text-gray-600 mb-6">Lütfen sayfayı yenileyin</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold"
            >
              Sayfayı Yenile
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
