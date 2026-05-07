import { useState } from 'react';
import './App.css'
import RenderGrid from './RenderGrid';
import colors from './data.js';

const GRID_SIZE = 16;
const DEFAULT_COLOR = '#ffffff';

function makeEmptyGrid() {
  return Array.from(
    { length: GRID_SIZE },                        // outer length: 16 rows
    () => Array(GRID_SIZE).fill(DEFAULT_COLOR)    // each row: 16 cells of white
  )
}

function App() {
    const [grid, setGrid] = useState(makeEmptyGrid)

    const [currentColor, setCurrentColor] = useState('#1a1a1a')
    
    return (
        <div>
            <div className="pixel-presets">
                {colors.map((color,index) => (
                    <button
                        key={index}
                        style={{ background: color }}
                        // Add a 'selected' class when this swatch matches the current color
                        className={'preset' + (color === currentColor ? ' selected' : '')}
                        onClick={() => setCurrentColor(color)}
                    >
                        YOO
                    </button>
                ))}
            </div>
            <button
                onClick={() => setGrid(makeEmptyGrid())}
            > Clear</button>


            <label className="pixel-tools">
            Color
                <input
                    type="color"
                    // Value comes from state, not from the input's own internal storage
                    value={currentColor}
                    // On every change, push the new hex color back into state
                    onChange={e => setCurrentColor(e.target.value)}
                />
            </label>
            <RenderGrid 
                GRID_SIZE={GRID_SIZE}
                grid={grid}
                currentColor={currentColor}
                setGrid={setGrid}
                
            />
        </div>
    )
}

export default App