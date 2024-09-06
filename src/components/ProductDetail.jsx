
export const ProductDetail = ({product = {}}) => {  //prop qe es objeto
    
    return(
        <tr>
            <td>{ product.name }</td>
            <td>{ product.description }</td>
            <td>{ product.price }</td>
        </tr>
    );
}