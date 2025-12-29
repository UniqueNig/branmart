import React, { useEffect, useRef, useState } from "react";
import style from "./addproduct.module.css";
import { ArrowLeft, Camera } from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useProducts } from "../../../../context/ProductContext";

const AddProd = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Get the product id from the URL
  const { products, addProduct, updateProduct } = useProducts();

  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
    stock: "",
    description: "",
    sku: "",
    barcode: "",
    images: [], // all uploaded images
    thumbnail: "", // first image
  });

  const getProductStatus = (stock) => {
    return Number(stock) >= 1 ? "Active" : "Out of Stock";
  };

  const isEdit = Boolean(id); // true if editing

  // Load existing product if editing
  useEffect(() => {
    if (isEdit) {
      const productToEdit = products.find((p) => p.id === id);
      if (productToEdit) {
        setForm({
          name: productToEdit.name,
          price: productToEdit.price,
          category: productToEdit.category,
          stock: productToEdit.stock,
          description: productToEdit.description,
          sku: productToEdit.sku,
          barcode: productToEdit.barcode,
          // load other fields
        });
      }
    }
  }, [id, isEdit, products]);

  const handleSave = () => {
    const status = getProductStatus(form.stock); // compute status dynamically
    if (isEdit) {
      const updatedProduct = {
        ...products.find((p) => p.id === id),
        ...form,
        price: Number(form.price),
        stock: Number(form.stock || 0),
        status, // update status based on new stock
        dateAdded: new Date().toISOString().split("T")[0], // optional, can keep original
      };
      updateProduct(updatedProduct);
    } else {
      const newProduct = {
        id: crypto.randomUUID(),
        ...form,
        price: Number(form.price),
        stock: Number(form.stock || 0),
        status, // compute status for new product
        dateAdded: new Date().toISOString().split("T")[0],
      };
      addProduct(newProduct);
    }

    navigate("/dashboard/products");
  };

  const MAX_IMAGES = 5;

  const inputRef = useRef(null);
  const thumbRefs = useRef([]);
  const [images, setImages] = useState([]);

  const handleFiles = (files, index = 0) => {
    const validFiles = Array.from(files)
      .filter((f) => f.type.startsWith("image/"))
      .slice(0, MAX_IMAGES);

    setImages((prev) => {
      const updated = [...prev];
      validFiles.forEach((file, i) => {
        const targetIndex = index + i;
        if (targetIndex < MAX_IMAGES) {
          updated[targetIndex] = {
            file,
            preview: URL.createObjectURL(file),
          };
        }
      });

      // also update form state
      setForm((prevForm) => ({
        ...prevForm,
        images: updated.map((img) => img.file || img), // save file objects
        thumbnail: updated[0] ? updated[0].preview : "", // first image as thumbnail
      }));

      return updated.slice(0, MAX_IMAGES);
    });
  };
  return (
    <div className={`container-fluid ${style.wrapper}`}>
      {/* Header */}
      <div className="d-flex align-items-center mb-4">
        <Link to={"/dashboard/products"} className={`btn ${style.backBtn}`}>
          <ArrowLeft size={22} />
        </Link>
        <div className="ms-3">
          <h4 className={`mb-1 `}>Add New Product</h4>
          <p className="mb-0 text-muted">
            Set up your product details to start selling.
          </p>
        </div>
      </div>

      <div className="row g-4">
        {/* LEFT COLUMN */}
        <div className="col-lg-7">
          {/* Product Details */}
          <div className={`card ${style.card}`}>
            <div className="card-body">
              <h6 className="0">Product Details</h6>
              <p className="mb-3 text-muted">
                Set up your product information.
              </p>
              <div className="mb-3">
                <label className="form-label">Product Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter product name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>

              <div className="mb-3 position-relative">
                <label className="form-label">Description</label>
                <textarea
                  rows="4"
                  className="form-control"
                  placeholder="Enter product description"
                  defaultValue='Enter product description'
                  value={form.description}
                  onChange={(e) =>
                    setForm({ ...form, description: e.target.value })
                  }
                />
                <button className={`btn ${style.aiBtn}`}>
                  Generate with AI
                </button>
              </div>

              <div className="mb-3">
                <label className="form-label">Category</label>
                <select
                  className="form-select"
                  value={form.category}
                  onChange={(e) =>
                    setForm({ ...form, category: e.target.value })
                  }
                >
                  <option value="">Select category</option>
                  <option value="Fashion">Fashion</option>
                  <option value="Food">Food</option>
                  <option value="Appliance">Appliance</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Beauty">Beauty</option>
                  <option value="Health">Health</option>
                  <option value="Home">Home</option>
                  <option value="Phones">Phones</option>
                  <option value="Computing">Computing</option>
                  <option value="Gaming">Gaming</option>
                  <option value="Baby Products">Baby Products</option>
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label">Sub Category</label>
                {/* <select className="form-select">
                  <option>Select sub category</option>
                </select> */}
                <input type="text" className="form-control" />
              </div>

              <div className="mb-3">
                <label className="form-label">Tags</label>
                <select className="form-select">
                  <option>Select product tags</option>
                </select>
              </div>

              <div>
                <label className="form-label">Product Type</label>
                <select className="form-select">
                  <option>Select product type</option>
                </select>
              </div>
            </div>
          </div>

          {/* Inventory */}
          <div className={`card ${style.card}`}>
            <div className="card-body">
              <h6 className="mb-3">Inventory</h6>

              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">SKU</label>
                  <input
                    className="form-control"
                    value={form.sku}
                    onChange={(e) => setForm({ ...form, sku: e.target.value })}
                    placeholder="Enter SKU"
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Stock Quantity</label>
                  <input
                    className="form-control"
                    placeholder="Enter quantity"
                    value={form.stock}
                    onChange={(e) =>
                      setForm({ ...form, stock: e.target.value })
                    }
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Low stock alert at</label>
                  <input className="form-control" placeholder="Enter value" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Bar Code</label>
                  <input
                    className="form-control"
                    value={form.barcode}
                    onChange={(e) =>
                      setForm({ ...form, barcode: e.target.value })
                    }
                    placeholder="Enter barcode"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Variants */}
          <div className={`card ${style.card}`}>
            <div className="card-body d-flex justify-content-between align-items-center">
              <h6 className="mb-0">Variants</h6>
              <button className={`btn ${style.linkBtn}`}>+ Add Variant</button>
            </div>
          </div>

          {/* Shipping */}
          <div className={`card ${style.card}`}>
            <div className="card-body">
              <h6 className="mb-3">Shipping</h6>

              <div className="row g-3">
                <div className="col-md-4">
                  <label className="form-label">Weight</label>
                  <div className="input-group">
                    <input className="form-control" defaultValue="0.00" />
                    <span className="input-group-text">Kg</span>
                  </div>
                </div>

                <div className="col-md-4">
                  <label className="form-label">Length</label>
                  <div className="input-group">
                    <input className="form-control" defaultValue="0.00" />
                    <span className="input-group-text">Cm</span>
                  </div>
                </div>

                <div className="col-md-4">
                  <label className="form-label">Height</label>
                  <div className="input-group">
                    <input className="form-control" defaultValue="0.00" />
                    <span className="input-group-text">Cm</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="col-lg-5">
          {/* Product Images */}
          <div className={`card ${style.card}`}>
            <div className="card-body">
              <h6 className="mb-3">Product Images</h6>

              {/* MAIN IMAGE */}
              <div
                className={style.mainImage}
                onClick={() => inputRef.current.click()}
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => {
                  e.preventDefault();
                  handleFiles(e.dataTransfer.files, 0);
                }}
              >
                {images[0] ? (
                  <img src={images[0].preview} alt="Main product" />
                ) : (
                  <Camera size={32} />
                )}

                <input
                  ref={inputRef}
                  hidden
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFiles(e.target.files, 0)}
                />
              </div>

              {/* THUMBNAILS */}
              <div className="d-flex gap-2 mt-3">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className={`  ${style.thumbImage}`}
                    onClick={() => thumbRefs.current[i]?.click()}
                  >
                    {images[i + 1] ? (
                      <img
                        src={images[i + 1].preview}
                        alt={`Thumbnail ${i + 1}`}
                      />
                    ) : (
                      <Camera size={18} />
                    )}

                    <input
                      ref={(el) => (thumbRefs.current[i] = el)}
                      hidden
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleFiles(e.target.files, i + 1)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className={`card ${style.card}`}>
            <div className="card-body">
              <h6 className="mb-3">Pricing</h6>

              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">Base Price</label>
                  <div className="input-group">
                    <span className="input-group-text">₦</span>
                    <input
                      className="form-control"
                      defaultValue="0.00"
                      placeholder="0.00"
                      value={form.price}
                      onChange={(e) =>
                        setForm({ ...form, price: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <label className="form-label">Compare at price</label>
                  <div className="input-group">
                    <span className="input-group-text">₦</span>
                    <input
                      className="form-control"
                      placeholder="0.00"
                      defaultValue="0.00"
                    />
                  </div>
                </div>
              </div>

              <div className="form-check form-switch mt-3">
                <input className="form-check-input" type="checkbox" />
                <label className="form-check-label">
                  Charge tax for this product
                </label>
              </div>

              <div className="row g-3 mt-3">
                <div className="col-md-6">
                  <label className="form-label">Discount Type</label>
                  <select className="form-select">
                    <option>Select type</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Discount Value</label>
                  <input className="form-control" placeholder="Enter" />
                </div>
              </div>
            </div>
          </div>

          {/* Visibility */}
          <div className={`card ${style.card}`}>
            <div className="card-body">
              <h6 className="mb-3">Visibility</h6>

              <div className="d-flex gap-4 mb-3">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    defaultChecked
                    name="vis"
                  />
                  <label className="form-check-label">Published</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="vis" />
                  <label className="form-check-label">Schedule</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="vis" />
                  <label className="form-check-label">Hidden</label>
                </div>
              </div>

              <label className="form-label">Publish Date</label>
              <input className="form-control" type="date" />
            </div>
          </div>

          {/* Meta Options */}
          <div className={`card ${style.card}`}>
            <div className="card-body">
              <h6 className="mb-3">Meta Options</h6>

              <div className="mb-3">
                <label className="form-label">Meta Title</label>
                <input className="form-control" placeholder="Enter title" />
              </div>

              <div>
                <label className="form-label">Meta keyword</label>
                <input className="form-control" placeholder="Enter keyword" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Actions */}
      <div className={`d-flex justify-content-end gap-3 mt-4 ${style.footer}`}>
        <button className={`btn ${style.discard}`}>Discard</button>
        <button
          className={`btn ${style.draft}`}
          onClick={() => {
            const newProduct = {
              id: crypto.randomUUID(),
              name: form.name,
              price: Number(form.price),
              category: form.category,
              stock: Number(form.stock || 0),
              status: "Draft",
              dateAdded: new Date().toISOString().split("T")[0],
            };

            addProduct(newProduct);
            navigate("/dashboard/products");
          }}
        >
          Save as draft
        </button>

        {/* <button className={`btn ${style.create}`} onClick={handleCreateProduct}>
          Create product
        </button> */}
        <button className={`btn ${style.create}`} onClick={handleSave}>
          {isEdit ? "Update Product" : "Create Product"}
        </button>
      </div>
    </div>
  );
};

export default AddProd;
