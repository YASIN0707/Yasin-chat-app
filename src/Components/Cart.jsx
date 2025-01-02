let Cart=(props)=>{
    return <div>
<h2>Cart</h2>
   <pre>{JSON.stringify(props)}</pre>
   <h1>ProductName:{props.product.pName}</h1>
   <h2>Color:{props.product.color[2]}</h2>
   <img src={props.product.image}/>
    </div>
}
export default Cart
