import { useState } from 'react';
import './App.css'
import RenderGrid from './RenderGrid';

const GRID_SIZE = 16;
const DEFAULT_COLOR = '#ffffff';

function makeEmptyGrid() {
    return Array.from(
        { length: GRID_SIZE },
        () => Array.from({ length: GRID_SIZE },
        () => Array(GRID_SIZE).fill(DEFAULT_COLOR)
        )
    )
}

function App() {
    const [grid, setGrid] = useState(makeEmptyGrid)

    const [currentColor, setCurrentColor] = useState('#1a1a1a')
    
    return (
        <div>
            <RenderGrid 
                GRID_SIZE={GRID_SIZE}
                grid={grid}
            />
        </div>
    )
}

export default App