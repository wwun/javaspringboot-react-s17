import { useEffect, useState } from "react";
import { listProduct } from "../services/ProductService";
import { ProductGrid } from "./ProductGrid";

export const ProductApp = () => {

    const [products, setProducts] = useState([]);  //hooks
    
    useEffect(() => {
        const result = listProduct();
        setProducts(result);
    }, []); //esto es como un post create, se ejecuta una sola vez cuando se crea el componente

    return (
        <>
            <h1>Products</h1>
            <ProductGrid products={products}/>  {/*llena ProductGrid = ({products})*/}
        </>
    )
}