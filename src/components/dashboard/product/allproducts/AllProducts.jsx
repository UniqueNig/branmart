import React, { useEffect, useState } from "react";
import style from "./allproducts.module.css";
import { MoreVertical, PlusIcon, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../../../context/ProductContext";

const CATEGORIES = [
  "Fashion",
  "Food",
  "Appliance",
  "Electronics",
  "Beauty",
  "Health",
  "Home",
  "Phones",
  "Computing",
  "Gaming",
  "Baby Products",
];

const STATUSES = ["Active", "Out of Stock", "Draft"];
// const status = p.stock === 0 ? "Out of Stock" : p.status;

const AllProducts = () => {
  let navigate = useNavigate();
  //   const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const [sortBy, setSortBy] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 6;

  useEffect(() => {
    setCurrentPage(1);
  }, [search, category, statusFilter, sortBy]);

  const { products, deleteProduct } = useProducts();

  /* ===========================
     FILTER + SEARCH + SORT
  ============================ */
  const filteredProducts = products
    .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
    .filter((p) => (category ? p.category === category : true))
    .filter((p) => (statusFilter ? p.status === statusFilter : true))

    .sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "price") return a.price - b.price;
      if (sortBy === "date")
        return new Date(b.dateAdded) - new Date(a.dateAdded);
      return 0;
    });

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  /* ===========================
     EMPTY STATE UI
  ============================ */
  if (products.length === 0) {
    return (
      <div className="container mt-4">
        {/* Stats */}
        <div className="row g-3 mb-4">
          {["Total Products", "Active Products", "Out of Stock", "Draft"].map(
            (item, i) => (
              <div key={i} className="col-md-3">
                <div className={`p-3 rounded ${style.statCard}`}>
                  <p className={style.productLabel}>{item}</p>
                  <h4 className={style.statusNum}>0</h4>
                </div>
              </div>
            )
          )}
        </div>

        {/* Empty Box */}
        <div className={`text-center p-5 ${style.emptyBox}`}>
          <h5 className={style.statusNum}>You have no products yet.</h5>
          <p className={style.statuspara}>
            Add your first item to start selling.
          </p>
          <button
            className={`btn ${style.addBtn}`}
            onClick={() => navigate("/dashboard/add-product")}
          >
            <PlusIcon size={18} /> Add product
          </button>
        </div>
      </div>
    );
  }

  /* ===========================
     PRODUCTS TABLE UI
  ============================ */
  return (
    <div className="container mt-4">
      {/* STATS */}
      <div className="row g-3 mb-4">
        <div className="col-md-3">
          <div className={`p-3 rounded ${style.statCard}`}>
            <div className=" d-flex align-items-center gap-2 ">
              <i className="bi bi-box"></i>
              <p className={style.productLabel}>Total Products</p>
            </div>

            <h4 className={style.statusNum}>{products.length}</h4>
          </div>
        </div>
        <div className="col-md-3">
          <div className={`p-3 rounded ${style.statCard}`}>
            <div className=" d-flex align-items-center gap-2 ">
              <i className="bi bi-box"></i>
              <p className={style.productLabel}>Active Products</p>
            </div>
            <h4 className={style.statusNum}>
              {products.filter((p) => p.status === "Active").length}
            </h4>
          </div>
        </div>
        <div className="col-md-3">
          <div className={`p-3 rounded ${style.statCard}`}>
            <div className=" d-flex align-items-center gap-2 ">
              <i className="bi bi-exclamation-triangle"></i>
              <p className={style.productLabel}>Out of Stock</p>
            </div>
            <h4 className={style.statusNum}>
              {products.filter((p) => p.status === "Out of Stock").length}
            </h4>
          </div>
        </div>
        <div className="col-md-3">
          <div className={`p-3 rounded ${style.statCard}`}>
            <div className=" d-flex align-items-center gap-2 ">
              <i className="bi bi-file-earmark-text text-secondary"></i>
              <p className={style.productLabel}>Draft</p>
            </div>
            <h4 className={style.statusNum}>
              {products.filter((p) => p.status === "Draft").length}
            </h4>
          </div>
        </div>
      </div>

      {/* FILTER BAR */}
      <div className="row g-2 mb-3 align-items-end">
        <div className="col-md">
          <div className="input-group">
            <span className="input-group-text bg-white">
              <Search size={18} />
            </span>

            <input
              className="form-control"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="col-md">
          <select
            className="form-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md">
          <select
            className="form-select"
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="">All Status</option>
            {STATUSES.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>

        <div className="col-md">
          <select
            className="form-select"
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="">Sort by</option>
            <option value="name">Name</option>
            <option value="price">Price</option>
            <option value="date">Date</option>
          </select>
        </div>

        <div className="col-md-auto">
          <button
            className={`btn ${style.addBtn2} w-100`}
            onClick={() => navigate("/dashboard/add-product")}
          >
            + Add product
          </button>
        </div>
      </div>

      {/* TABLE */}
      <div className="table-responsive ">
        <table className="table align-middle table-striped">
          <thead className={style.tableHead}>
            <tr>
              <th>Product Name</th>
              <th>Status</th>
              <th>Price</th>
              <th>Category</th>
              <th>Stock Level</th>
              <th>Date Added</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {paginatedProducts.map((p) => {
              const computedStatus =
                p.status === "Draft"
                  ? "Draft"
                  : p.stock === 0
                  ? "Out of Stock"
                  : "Active";
              return (
                <tr key={p.id}>
                  <td>
                    {p.thumbnail && (
                      <img
                        src={p.thumbnail}
                        alt={p.name}
                        style={{
                          width: "40px",
                          height: "40px",
                          objectFit: "cover",
                          marginRight: "8px",
                          borderRadius: "4px",
                        }}
                      />
                    )}
                    {p.name}
                  </td>
                  <td>
                    <span
                      className={`${style.badge} ${
                        style[computedStatus.replace(" ", "")]
                      }`}
                    >
                      {computedStatus}
                    </span>
                  </td>
                  <td>₦{p.price.toLocaleString()}</td>
                  <td>{p.category}</td>
                  <td>{p.stock} Units</td>
                  <td>{p.dateAdded}</td>
                  <td>
                    <div className="dropdown dropstart drop-md-end">
                      <button
                        className="btn btn-sm"
                        data-bs-toggle="dropdown"
                        data-bs-display="static"
                        aria-expanded="false"
                      >
                        <MoreVertical size={18} />
                      </button>

                      <ul className="dropdown-menu">
                        <li>
                          <button className="dropdown-item">View</button>
                        </li>
                        <li>
                          <button
                            className="dropdown-item"
                            onClick={() =>
                              navigate(
                                `/dashboard/products/edit-product/${p.id}`
                              )
                            }
                          >
                            Edit
                          </button>
                        </li>

                        <li>
                          <button
                            className="dropdown-item text-danger"
                            onClick={() => deleteProduct(p.id)}
                          >
                            Delete
                          </button>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* PAGINATION */}
        {totalPages > 1 && (
          <div className="d-flex justify-content-between align-items-center mt-3">
            <button
              className="btn btn-outline-secondary btn-sm"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
            >
              Previous
            </button>

            <div className="d-flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    className={`btn btn-sm ${
                      currentPage === page
                        ? "btn-warning"
                        : "btn-outline-secondary"
                    }`}
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </button>
                )
              )}
            </div>

            <button
              className="btn btn-outline-secondary btn-sm"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => p + 1)}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllProducts;
