import Link from "next/link";

const products = [
  { name: "Pfuko Mahewu", size: "500ml Traditional", label: "Survey-backed priority" },
  { name: "KOO Chakalaka", size: "410g", label: "" },
  { name: "Cerevita", size: "500g", label: "" },
  { name: "Ghost Pops", size: "100g", label: "Snack trial" },
  { name: "Willards Thingz", size: "150g", label: "Snack trial" },
  { name: "Six Gun Grill", size: "Seasoning", label: "Pantry trial" },
];

export default function ProductsPage() {
  return (
    <main className="products-page">
      <div className="section-container">
        <Link href="/" className="products-back">
          ← Back to Themba Group
        </Link>

        <p className="section-label">Recommended pilot range</p>

        <h1>
          A disciplined first assortment — not an oversized catalogue.
        </h1>

        <div className="products-grid">
          {products.map((product) => (
            <article className="product-card" key={product.name}>
              <div className="product-image-placeholder">
                Product image
              </div>

              <div>
                <h2>{product.name}</h2>
                <p>{product.size}</p>
                {product.label && <span>{product.label}</span>}
              </div>
            </article>
          ))}
        </div>

        <p className="products-note">
          Final range, SKU details, wholesale pricing and RRP to be organised
          on confirmation with Tucker Fresh.
        </p>
      </div>
    </main>
  );
}