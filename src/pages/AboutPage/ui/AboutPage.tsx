import { Typography, TypographyColor, TypographyVariant } from "shared/ui/Typography/Typography"
import { BannersRow } from "widgets/BannersRow"
import { ProductCardList } from "widgets/ProductCarousel/model/list"
import { ProductCarousel } from "widgets/ProductCarousel/ProductCarousel"
import styles from "./AboutPage.module.scss"

export function AboutPage() {
    return (
        <div>
            <Typography variant={TypographyVariant.H1} className={styles.title}>
                Контакты
            </Typography>
            <Typography color={TypographyColor.DARK_GRAY} className={styles.text}>
                Завозить товары напрямую из Китая совсем не так удобно, как сотрудничать с
                поставщиком уже на территории Украины. И здесь даже не важно, что вы закупаете –
                фонарики или беспроводные наушники – оптом всегда лучше сотрудничать с той
                компанией, которую можно проверить своими силами. Кроме того, есть ряд и других
                преимуществ, в числе которых:
                <br />
                <br />
                Быстрая доставка – ни один поставщик находящиеся за границей, не сможет обеспечить
                доставку столь быструю, как поставщик из Украины. А чем быстрее доставка, тем больше
                уверенности в сохранности заказа. Особенно, это актуально, когда вы, например,
                покупаете стеклянные чайники оптом.
                <br />
                <br />
                Хорошая репутация – каждый предприниматель знает, что репутация зарабатывается
                годами, а потерять ее можно очень быстро. И речь здесь не идёт об отзывах в
                интернете, которые, на самом деле, всегда можно купить – речь о человеческом факторе
                и сарафанном радио.
                <br />
                <br />
                Мы стараемся включать в каталог наших товаров лишь наиболее популярные предложения,
                что гарантирует отличные продажи. Более того, даже среди товаров одного типа, есть
                более успешные модели и менее. Например, портативные колонки оптом закупаются очень
                многими розничными продавцами, однако, существуют определенные, наиболее продаваемые
                модели. Доступные цены – мы не только заботимся о выборе наиболее актуальных моделей
                различных групп товаров, но и следим за тем, чтобы наши цены по возможности были
                ниже чем у конкурентов.
            </Typography>
            <ProductCarousel list={ProductCardList} title="Топовые позиции" />
            <BannersRow />
        </div>
    )
}
