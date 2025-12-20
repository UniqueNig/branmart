import React, { useState } from "react";
import style from "./businessinfo.module.css";
import { Camera } from "lucide-react";
import { Link } from "react-router-dom";

const BusinessInfo = () => {
  const [logo, setLogo] = useState(null);
  const [logoPreview, setLogoPreview] = useState(null);

  // Handle logo upload
  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setLogo(file);
    setLogoPreview(URL.createObjectURL(file));
  };

  // Delete logo
  const handleDeleteLogo = () => {
    setLogo(null);
    setLogoPreview(null);
  };

  // Submit
  //   const handleSubmit = (e) => {
  //     e.preventDefault();

  //     const payload = {
  //       ...formData,
  //       logo,
  //     };

  //     console.log("Business Info Submitted:", payload);
  //   };

  return (
    <div className="container py-5">
      {/* HEADER */}
      <div className="text-center mb-5">
        <h3 className={style.heading}>BUSINESS INFORMATION</h3>
        <p className={style.subheading}>
          Add your company information and documents to verify your business.
          This helps buyers find and trust your business easily.
        </p>
      </div>

      <form>
        <div className="row g-4 justify-content-center">
          {/* LEFT FORM */}
          <div className="col-lg-6">
            <div className={style.card}>
              <div className="mb-3">
                <label className={style.label}>Business Name</label>
                <input
                  className="form-control"
                  name="businessName"
                  placeholder="Enter your business name"
                  //   value={formData.businessName}
                  //   onChange={handleChange}
                />
              </div>

              <div className="row g-3">
                <div className="col-md-6">
                  <label className={style.label}>Category</label>
                  <select
                    className="form-select"
                    name="category"
                    // value={formData.category}
                    // onChange={handleChange}
                  >
                    <option value="" disabled>
                      Select
                    </option>
                    <option>Fashion</option>
                    <option>Electronics</option>
                    <option>Food</option>
                  </select>
                </div>

                <div className="col-md-6">
                  <label className={style.label}>Country</label>
                  <select
                    className="form-select"
                    name="country"
                    // value={formData.country}
                    // onChange={handleChange}
                  >
                    <option value="" disabled>
                      Select
                    </option>
                    <option>Nigeria</option>
                    <option>USA</option>
                  </select>
                </div>
              </div>

              <div className="mt-3">
                <label className={style.label}>Business Description</label>
                <textarea
                  className="form-control"
                  rows="4"
                  name="description"
                  placeholder="Enter a brief description about your business"
                  //   value={formData.description}
                  //   onChange={handleChange}
                />
              </div>

              <div className="mt-3">
                <label className={style.label}>Address Line</label>
                <input
                  className="form-control"
                  name="address"
                  placeholder="Enter address line"
                  //   value={formData.address}
                  //   onChange={handleChange}
                />
              </div>

              <div className="row g-3 mt-1">
                <div className="col-md-4">
                  <label className={style.label}>Country/Region</label>
                  <input
                    className="form-control"
                    name="region"
                    placeholder="e.g. Nigeria"
                    // value={formData.region}
                    // onChange={handleChange}
                  />
                </div>

                <div className="col-md-4">
                  <label className={style.label}>State/Province</label>
                  <input
                    className="form-control"
                    name="state"
                    placeholder="e.g. Abuja"
                    // value={formData.state}
                    // onChange={handleChange}
                  />
                </div>

                <div className="col-md-4">
                  <label className={style.label}>Postal Code</label>
                  <input
                    className="form-control"
                    name="postalCode"
                    placeholder="10001"
                    // value={formData.postalCode}
                    // onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT LOGO UPLOAD */}
          <div className="col-lg-4">
            <div className={`${style.card} text-center`}>
              <p className={style.label}>Upload Business Logo</p>

              {!logoPreview ? (
                <>
                  <div className={style.logoPlaceholder}>
                    <span className={style.cameraIcon}>
                      <Camera size={30} />{" "}
                    </span>
                  </div>

                  <p className={style.logoHint}>Min 400x400px, PNG or JPEG</p>

                  <label className={style.uploadBtn}>
                    Upload
                    <input
                      type="file"
                      hidden
                      accept="image/*"
                      onChange={handleLogoUpload}
                    />
                  </label>
                </>
              ) : (
                <>
                  <div className={style.logoPreview}>
                    <img src={logoPreview} alt="Business Logo" />
                  </div>

                  <div className="d-flex justify-content-center gap-2 mt-3">
                    <label className={style.changeBtn}>
                      Change
                      <input
                        type="file"
                        hidden
                        accept="image/*"
                        onChange={handleLogoUpload}
                      />
                    </label>

                    <button
                      type="button"
                      className={style.deleteBtn}
                      onClick={handleDeleteLogo}
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* SUBMIT */}
        <div className="text-center mt-5">
          <Link
            to={"/business-setup/kyc"}
            type="submit"
            className={style.submitBtn}
          >
            Save & Continue
          </Link>
        </div>
      </form>
    </div>
  );
};

export default BusinessInfo;
