export default function RenderGrid(props){
    return (
        <div className="pixel-art">
            <h1>Pixel Art Editor</h1>

            {/* Container styled as a CSS grid with 16 equal columns */}
            <div
            className="pixel-grid"
            style={{ gridTemplateColumns: `repeat(${props.GRID_SIZE}, 1fr)` }}
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
                    aria-label={`Pixel ${r}, ${c}`}
                />
                ))
            )}
            </div>
        </div>
    )
}