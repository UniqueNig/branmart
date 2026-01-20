import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProducts } from "../../../../context/ProductContext";
import style from "./productview.module.css";
import { ArrowLeft, Delete, DeleteIcon, Edit, Edit2Icon, LucideDelete } from "lucide-react";

const ProductView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products, deleteProduct } = useProducts();

  const product = products.find((p) => String(p.id) === String(id));

  if (!product) {
    return <div className={`p-4 ${style.productName}`}>Product not found</div>;
  }

  return (
    <div className={`container-fluid ${style.wrapper}`}>
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="d-flex align-items-center gap-3">
          <button className={style.backBtn} onClick={() => navigate(-1)}>
            <ArrowLeft size={22} />
          </button>
          <div>
            <h5 className={`mb-1 ${style.productName}`}>{product.name}</h5>
            <small className={style.productId}>Product ID: #{product.id}</small>
          </div>
        </div>

        <div className="d-flex gap-2">
          <button
            className={style.deleteBtn}
            onClick={() => deleteProduct(product.id)}
          >
            <DeleteIcon size={16} />
            Delete Product
          </button>
          <button
            className={style.editBtn}
            onClick={() =>
              navigate(`/dashboard/products/edit-product/${product.id}`)
            }
          >
            <Edit2Icon size={16} />
            Edit Product
          </button>
        </div>
      </div>

      {/* Images */}
      <div className="row g-4 mb-4">
        <div className="col-lg-5">
          <div className={`card ${style.card}`}>
            <div className="card-body">
              <div className={style.mainImage}>
                {product.images?.[0] && (
                  <img src={product.images[0]} alt={product.name} />
                )}
              </div>

              <div className="d-flex gap-2 mt-3">
                {product.images?.slice(1, 5).map((img, i) => (
                  <div key={i} className={style.thumbImage}>
                    <img src={img} alt={`thumb-${i}`} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="col-lg-7">
          <div className={`card ${style.card}`}>
            <div className="card-body">
              <div className="mb-3">
                <strong>Name:</strong>
                <div>{product.name}</div>
              </div>

              <div className="mb-3">
                <strong>Description:</strong>
                <p className="mb-0">{product.description}</p>
              </div>

              <div className="row mb-3">
                <div className="col">
                  <strong>Category:</strong>
                  <div>{product.category}</div>
                </div>
                <div className="col">
                  <strong>Sub-category:</strong>
                  <div>{product.subcategory}</div>
                </div>
              </div>

              <div className="mb-3">
                <strong>Product Tags:</strong>
                <div className="d-flex gap-2 flex-wrap mt-1">
                  {product.tags?.map((tag, i) => (
                    <span key={i} className={style.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <strong>Status:</strong>
                <div>{product.status}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Inventory + Pricing */}
      <div className="row g-4 mb-4">
        <div className="col-lg-6">
          <div className={`card ${style.card}`}>
            <div className="card-body">
              <h6>Inventory</h6>
              <div className="row">
                <div className="col">
                  <small>SKU</small>
                  <div>{product.sku}</div>
                </div>
                <div className="col">
                  <small>Stock</small>
                  <div>{product.stock}</div>
                </div>
                <div className="col">
                  <small>Barcode</small>
                  <div>{product.barcode}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className={`card ${style.card}`}>
            <div className="card-body">
              <h6>Pricing</h6>
              <div className="row">
                <div className="col">
                  <small>Price</small>
                  <div>₦{product.price}</div>
                </div>
                <div className="col">
                  <small>Status</small>
                  <div>{product.status}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews (static placeholder) */}
      <div className={`card ${style.card}`}>
        <div className="card-body">
          <h6>Reviews</h6>
          <p className="text-muted">Reviews integration pending</p>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
