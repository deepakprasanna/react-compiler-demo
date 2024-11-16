import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

const App = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);
