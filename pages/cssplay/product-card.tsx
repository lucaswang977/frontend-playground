const ProductCard = () => {

  return (
    <div className="top">
      <style global jsx>{`
:root {
  --clr-primary-500: hsl(158, 36%, 20%);
  --clr-primary-400: hsl(158, 36%, 37%);
  --clr-secondary-200: hsl(30, 38%, 92%);

  --clr-neutral-900: hsl(212, 21%, 14%);
  --clr-neutral-400: hsl(228, 12%, 48%);
  --clr-neutral-100: hsl(0, 0%, 100%);

  --fw-regular: 500;
  --fw-bold: 700;

  --ff-base: 'Montserrat', sans-serif;
  --ff-accent: 'Fraunces', serif;
}

/* general styling */
.top {
  display: grid;
  place-items: center;
  min-height: 100vh;
  margin: 1rem;

  font-family: var(--ff-base);
  font-weight: var(--fw-regular);
  font-size: 0.85rem;
  color: var(--clr-neutral-400);
  background-color: var(--clr-secondary-200);
}

/* utilities */
.flex-group {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: center;
}

/* product */
.product {
  --content-padding: 1.5rem;
  --content-spacing: 0.9rem;

  display: grid;
  background-color: var(--clr-neutral-100);
  border-radius: 0.6rem;
  overflow: hidden;
  max-width: 600px;
  min-width: 375px;
}

@media (min-width: 600px) {
  .product {
    --content-padding: 2rem;
    grid-template-columns: 1fr 1fr;
  }
}

.product__content {
  padding: var(--content-padding);
  gap: var(--content-spacing);
  display: grid;
}

.product__category {
  text-transform: uppercase;
  letter-spacing: 0.15rem;
  font-size: 0.75rem;
}

.product__title {
  font-family: var(--ff-accent);
  font-size: 2rem;
  font-weight: var(--fw-bold);
  color: var(--clr-neutral-900);
  line-height: 1;
}

.product__price {
  font-family: var(--ff-accent);
  font-size: 2rem;
  font-weight: var(--fw-bold);
  color: var(--clr-primary-400);
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--clr-neutral-100);
  background-color: var(--clr-primary-400);
  padding: 1em 0;
  gap: 0.5rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  font-weight: var(--fw-bold);
}

.button:is(:hover, :focus) {
  background-color: var(--clr-primary-500);
}

.button[data-icon='shopping-cart']:before {
  content: '';
  width: 15px;
  height: 16px;
  background-image: url('/cssplay-product-card/icon-cart.svg');
}
`}
      </style>
      <article className="product">
        <picture className="product__image">
          <source
            srcSet="
              https://images.unsplash.com/photo-1563170351-be82bc888aa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80&h=900&crop=left,right
            "
            media="(min-width: 600px)"
          />
          <img
            src="https://images.unsplash.com/photo-1563170351-be82bc888aa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80&h=480&crop=focalpoint"
            alt="A floral, solar and voluptuous interpretation composed by Olivier Polge, 
          Perfumer-Creator for the House of CHANEL."
          />
        </picture>
        <div className="product__content">
          <p className="product__category">Perfume</p>
          <h1 className="product__title">Gabrielle Essence Eau De Parfum</h1>
          <p>
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div className="flex-group">
            <p className="product__price">
              <span className="sr-only">Current price: </span>$149.99
            </p>
            <p className="product__original-price">
              <span className="sr-only">Original price:</span><s>$169.99</s>
            </p>
          </div>
          <button className="button" data-icon="shopping-cart">Add to Cart</button>
        </div>
      </article>
    </div>
  )
}

export default ProductCard
