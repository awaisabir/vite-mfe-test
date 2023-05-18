import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>Count from Experience Application</div>
      <button onClick={() => setCount((count) => count + 1)}>{count}</button>
    </>
  )
}

export default App
