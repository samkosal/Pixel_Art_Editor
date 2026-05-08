import { useEffect, useState } from 'react';

export default function RenderGrid(props) {
    const [isPainting, setIsPainting] = useState(false);

    function paint(row, col) {
        const next = props.grid.map(r => r.slice())
        next[row][col] = props.currentColor;
        props.setGrid(next)
    }

    function handleMouseDown(row, col) {
        setIsPainting(true);
        paint(row, col);
    }

    function handleMouseEnter(row, col) {
        if (!isPainting) return;
        paint(row, col);
    }

    useEffect(() => {
        function stopPainting() {
            setIsPainting(false);
        }
        window.addEventListener('mouseup', stopPainting);
        return () => window.removeEventListener('mouseup', stopPainting);
    }, []);

    return (
        <div className="pixel-art">
            <h1>Pixel Art Editor</h1>

            {/* Container styled as a CSS grid with 16 equal columns */}
            <div
            className="pixel-grid"
            style={{ gridTemplateColumns: `repeat(${props.GRID_SIZE}, 1fr)` }}
            onMouseUp={() => setIsPainting(false)}
            onMouseLeave={() => setIsPainting(false)}
            >
            {/* Outer map walks each row, with row index r */}
                {props.grid.map((row, r) =>
                    // Inner map walks each cell's color in that row, with column index c
                    row.map((color, c) => (
                    <button
                        // Unique key per cell so React reconciles correctly across renders
                        key={`${r}-${c}`}
                        className="pixel"
                        // Use the cell's stored color as the button's background
                        style={{ background: color }}
                        onMouseDown={() => handleMouseDown(r, c)}
                        onMouseEnter={() => handleMouseEnter(r, c)}
                        onDragStart={e => e.preventDefault()}
                        aria-label={`Pixel ${r}, ${c}`}
                    />
                    ))
                )}
            </div>
        </div>
    )
}