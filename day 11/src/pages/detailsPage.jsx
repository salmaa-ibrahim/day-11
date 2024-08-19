import { useParams } from "react-router-dom"


function ProductPage(){
    const {id}=useParams()
    return(
        <h2>more details about product {id} </h2>
    )
}

export default ProductPage