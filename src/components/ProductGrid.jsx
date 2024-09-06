import { ProductDetail } from "./ProductDetail"

export const ProductGrid = ({products = []}) => {    //agregando props

    return (
        <table>
            <thead>
                <tr>
                    <th>name</th>
                    <th>description</th>
                    <th>price</th>
                </tr>
            </thead>
            <tbody>
                { products.map( product => {
                    return <ProductDetail product={product} key={product.name} />;
                })}
            </tbody>
        </table>
    )
}