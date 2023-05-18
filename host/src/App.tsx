import { useState, lazy, Suspense } from 'react'
import './App.css'
import ErrorBoundary from './ErrorBoundary';

// @ts-ignore
const ExperienceApp = lazy(() => import('ExperienceApp/Bootstrap'));

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count from Host application is {count}
        </button>
      </div>

      {/* from micro front-end */}
      <ErrorBoundary fallback={<p>Something went wrong with the Experience app ...</p>}>
        <Suspense fallback={<div>Loading Experience App</div>}>
          <ExperienceApp />
        </Suspense>
      </ErrorBoundary>
    </>
  )
}

export default App
