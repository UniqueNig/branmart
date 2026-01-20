import React from "react";
import style from "./productview.module.css";

const ProductDefault = () => {
  return (
    <div className={`container-fluid ${style.wrapper}`}>
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="d-flex align-items-center gap-3">
          <button className={style.backBtn}>←</button>
          <div>
            <h5 className="mb-1">MacBook Pro 14 Inch 512 GB M1 Pro</h5>
            <small className="text-muted">Product ID: #BMT-1234</small>
          </div>
        </div>

        <div className="d-flex gap-2">
          <button className={style.deleteBtn}>Delete Product</button>
          <button className={style.editBtn}>Edit Product</button>
        </div>
      </div>

      {/* Top Section */}
      <div className="row g-4 mb-4">
        {/* Images */}
        <div className="col-lg-5">
          <div className={`card ${style.card}`}>
            <div className="card-body">
              <div className={style.mainImage} />
              <div className="d-flex gap-2 mt-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className={style.thumbImage} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="col-lg-7">
          <div className={`card ${style.card}`}>
            <div className="card-body">
              <div className="mb-3">
                <strong>Name:</strong>
                <div>MacBook Pro 14 Inch 512 GB M1 Pro</div>
              </div>

              <div className="mb-3">
                <strong>Description:</strong>
                <p className="mb-0">
                  The MacBook Pro 14 Inch 512 GB M1 Pro features a titanium frame,
                  A17 Pro chip, and powerful triple-lens camera...
                </p>
              </div>

              <div className="row mb-3">
                <div className="col">
                  <strong>Category:</strong>
                  <div>Electronics</div>
                </div>
                <div className="col">
                  <strong>Sub-category:</strong>
                  <div>Laptops</div>
                </div>
              </div>

              <div className="mb-3">
                <strong>Product Tags:</strong>
                <div className="d-flex gap-2 flex-wrap mt-1">
                  {["Laptop", "MacBook", "apple", "apple laptop"].map(
                    (tag, i) => (
                      <span key={i} className={style.tag}>
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div>
                <strong>Product Type:</strong>
                <div>Physical</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Section */}
      <div className="row g-4 mb-4">
        {/* Inventory */}
        <div className="col-lg-6">
          <div className={`card ${style.card}`}>
            <div className="card-body">
              <h6>Inventory</h6>
              <div className="row">
                <div className="col">
                  <small>SKU</small>
                  <div>BLK-HD-01</div>
                </div>
                <div className="col">
                  <small>Stock Quantity</small>
                  <div>120</div>
                </div>
                <div className="col">
                  <small>Low stock alert</small>
                  <div>20</div>
                </div>
                <div className="col">
                  <small>Bar Code</small>
                  <div>B1234567890</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="col-lg-6">
          <div className={`card ${style.card}`}>
            <div className="card-body">
              <h6>Pricing</h6>

              <div className="row mb-2">
                <div className="col">
                  <small>Base Price</small>
                  <div>$1,200</div>
                </div>
                <div className="col">
                  <small>Compare at Price</small>
                  <div>$1,149.99</div>
                </div>
              </div>

              <div className="d-flex align-items-center gap-2 mb-2">
                <div className={style.toggle} />
                <span>Charge tax for this product</span>
              </div>

              <div className="row">
                <div className="col">
                  <small>Discount Type</small>
                  <div>Percentage</div>
                </div>
                <div className="col">
                  <small>Discount Value</small>
                  <div>10%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="row g-4 mb-4">
        {/* Variants */}
        <div className="col-lg-6">
          <div className={`card ${style.card}`}>
            <div className="card-body">
              <h6>Variants</h6>

              <table className="table align-middle">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Memory</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>SKU</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { mem: "256 GB", price: "$1200", stock: 12 },
                    { mem: "512 GB", price: "$1230", stock: 15 },
                    { mem: "1 TB", price: "$1500", stock: 22 },
                  ].map((v, i) => (
                    <tr key={i}>
                      <td>📷</td>
                      <td>{v.mem}</td>
                      <td>{v.price}</td>
                      <td>{v.stock}</td>
                      <td>SKU-1000</td>
                      <td>
                        <div className={style.toggle} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Visibility + Meta */}
        <div className="col-lg-6">
          <div className={`card ${style.card} mb-3`}>
            <div className="card-body">
              <h6>Visibility</h6>
              <div className="row">
                <div className="col">
                  <small>Status</small>
                  <div>Scheduled</div>
                </div>
                <div className="col">
                  <small>Publish Date</small>
                  <div>10/12/2025</div>
                </div>
              </div>
            </div>
          </div>

          <div className={`card ${style.card}`}>
            <div className="card-body">
              <h6>Meta Options</h6>
              <div className="row">
                <div className="col">
                  <small>Meta Title</small>
                  <div>SKU-1000</div>
                </div>
                <div className="col">
                  <small>Meta Keyword</small>
                  <div>120</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews */}
      <div className={`card ${style.card}`}>
        <div className="card-body">
          <h6>Reviews</h6>

          <div className="row">
            <div className="col-lg-4">
              <h2>4.5</h2>
              <div className={style.stars} />
              <small>(203 Reviews)</small>
            </div>

            <div className="col-lg-8">
              {["Rebecca Bozimo", "Sarah Rabiu", "Elizabeth Nwosu"].map(
                (name, i) => (
                  <div key={i} className={style.review}>
                    <strong>{name}</strong>
                    <div className={style.starsSmall} />
                    <p>The product is really nice. I enjoyed it.</p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDefault;
