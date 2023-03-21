import { useState } from "react"

export function RangeSlider() {
    const [minPrice, setMinPrice] = useState(0)
    const [maxPrice, setMaxPrice] = useState(100)

    const handleMinPriceChange = (event: any) => {
        setMinPrice(Number(event.target.value))
    }

    const handleMaxPriceChange = (event: any) => {
        setMaxPrice(Number(event.target.value))
    }
    return (
        <div>
            <label htmlFor="minPrice">Min Price:</label>
            <input
                type="number"
                id="minPrice"
                name="minPrice"
                min="0"
                max={maxPrice}
                value={minPrice}
                onChange={handleMinPriceChange}
            />
            <label htmlFor="maxPrice">Max Price:</label>
            <input
                type="number"
                id="maxPrice"
                name="maxPrice"
                min={minPrice}
                max="1000"
                value={maxPrice}
                onChange={handleMaxPriceChange}
            />
            <input
                type="range"
                min="0"
                max="1000"
                value={maxPrice}
                onChange={handleMaxPriceChange}
            />
            <input
                type="range"
                min="0"
                max="1000"
                value={minPrice}
                onChange={handleMinPriceChange}
            />
        </div>
    )
}
