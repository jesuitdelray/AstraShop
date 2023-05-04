import { ProductAll } from "./ProductAll/ProductAll"

export function ProductMenu() {
    return (
        <div>
            <div
                style={{
                    background: "white",
                    marginBottom: "30px",
                    height: "40px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "6px",
                }}
            >
                Navigation
            </div>

            <div>
                <ProductAll />
            </div>
        </div>
    )
}
