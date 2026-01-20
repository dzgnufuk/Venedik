// Global error handler to suppress PostHog errors
window.addEventListener('error', function(event) {
  const errorMessage = event.message || '';
  if (
    errorMessage.includes('PerformanceServerTiming') ||
    errorMessage.includes('DataCloneError') ||
    errorMessage.includes('posthog-recorder')
  ) {
    event.preventDefault();
    event.stopPropagation();
    return true;
  }
}, true);

// Suppress unhandled promise rejections from PostHog
window.addEventListener('unhandledrejection', function(event) {
  const reason = event.reason?.message || event.reason || '';
  if (
    reason.includes('PerformanceServerTiming') ||
    reason.includes('DataCloneError') ||
    reason.includes('posthog')
  ) {
    event.preventDefault();
    return true;
  }
});

// Suppress PostHog console errors
const originalError = console.error;
console.error = function(...args) {
  // Filter out PostHog-related errors
  const errorString = args.join(' ');
  if (
    errorString.includes('PerformanceServerTiming') ||
    errorString.includes('posthog-recorder') ||
    errorString.includes('DataCloneError')
  ) {
    return; // Suppress these errors
  }
  // Pass through other errors
  originalError.apply(console, args);
};

// Suppress PostHog warnings
const originalWarn = console.warn;
console.warn = function(...args) {
  const warnString = args.join(' ');
  if (warnString.includes('posthog')) {
    return;
  }
  originalWarn.apply(console, args);
};

export {}; // Make this a module
