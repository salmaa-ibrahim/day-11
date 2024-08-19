import { Link } from "react-router-dom"
function PageOne(){
    const arrayOfProducts=[
        {id:1, name:'product' ,type:"A"},
        {id:2, name:'product' ,type:"B"},
        {id:3, name:'product' ,type:"C"},
        {id:4, name:'product' ,type:"D"},
        {id:5, name:'product' ,type:"E"},
        {id:6, name:'product' ,type:"F"},
        {id:7, name:'product' ,type:"G"},
        {id:8, name:'product' ,type:"H"}
    ]
    return(
        <>
        <h1>page one</h1>
        <div className="productsWrapper">
            {arrayOfProducts.map((product)=>{
                return(
                    <>
                    <Link to={`/product/${product.id}`}>
                        <div className="productBox">
                            <label>{product.name} {product.id}</label>
                            <p>{product.type}</p>
                        </div>
                    </Link>
                    </>
                )
            })}
        </div>
        </>
    )
}

export default PageOne