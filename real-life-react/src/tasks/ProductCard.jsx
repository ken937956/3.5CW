function ProductCard({ name, price, salePrice, stock }) {
  const finalPrice = salePrice ?? price

  let stockLabel
  let stockClass

  if (stock === 0) {
    stockLabel = 'Sold out'
    stockClass = 'stock-sold-out'
  } else if (stock <= 5) {
    stockLabel = `Only ${stock} left!`
    stockClass = 'stock-low'
  } else {
    stockLabel = 'In stock'
    stockClass = 'stock-in'
  }

  return (
    <div className="product-card">
      <h3>{name}</h3>
      <span className={`stock-label ${stockClass}`}>{stockLabel}</span>

      <div className="price-row">
        {salePrice !== undefined ? (
          <>
            <span className="original-price" style={{ textDecoration: 'line-through' }}>
              ${price.toFixed(2)}
            </span>
            <strong>${salePrice.toFixed(2)}</strong>
            <span className="sale-badge">SALE</span>
          </>
        ) : (
          <strong>${price.toFixed(2)}</strong>
        )}
      </div>

      {finalPrice >= 35 && <p className="shipping">Free shipping</p>}

      <button type="button" disabled={stock === 0} className="cart-button">
        {stock === 0 ? 'Sold out' : 'Add to cart'}
      </button>
    </div>
  )
}

export default ProductCard
