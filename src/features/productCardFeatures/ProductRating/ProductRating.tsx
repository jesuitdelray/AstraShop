import { StarRating } from "shared/assets/icons/productCardFeatures/StarRating"
import { classNames } from "shared/lib/classNames/classNames"
import { Typography, TypographyVariant } from "shared/ui/Typography/Typography"
import { renderStars } from "./lib/renderStars"

interface ProdactRatingProps {
    className?: string
    rating: number | undefined
}

export function ProductRating({ rating, className }: ProdactRatingProps) {
    if (!rating) return <Typography variant={TypographyVariant.EXTRA_SMALL}>No reviews</Typography>

    const starsArray = renderStars(rating)

    return (
        <span className={classNames("", {}, [className])}>
            {starsArray.slice(0, 5).map(item => (
                <StarRating precentage={item * 100} />
            ))}
        </span>
    )
}
