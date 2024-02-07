import { Component, ErrorInfo, ReactNode } from 'react';

/*
 * This Error Boundary implementation comes from Netlify
 * https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/error_boundaries/#option-2-writing-your-custom-error-boundary-component
 *
 */

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <main>
          <h1>Sorry.. there was an error</h1>
          <p>
            <a href="/">Home</a>
          </p>
        </main>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
