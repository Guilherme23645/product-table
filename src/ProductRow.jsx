const ProductRow = ({product}) => {
  const name = product.stocked ? product.name :
    <span style={{color: "red"}}>
      {product.name}
    </span>
  return (
    <div>ProductRow</div>
  )
}

export default ProductRow