import React, { useState } from "react";
import style from "./kycinfo.module.css";
import { Link, Links } from "react-router-dom";

const KycInfo = () => {
  const [idFile, setIdFile] = useState(null);
  const [addressFile, setAddressFile] = useState(null);

  const [idProgress, setIdProgress] = useState(0);
  const [addressProgress, setAddressProgress] = useState(0);
  const [idStatus, setIdStatus] = useState("idle");
  // idle | uploading | completed

  const simulateUpload = (setProgress, setFile, file, setStatus) => {
    setFile(file);
    setProgress(0);
    setStatus("uploading");

    let progress = 0;
    const interval = setInterval(() => {
      progress += 5;
      setProgress(progress);

      if (progress >= 100) {
        clearInterval(interval);
        setProgress(100);
        setStatus("completed");
      }
    }, 200);
  };

  return (
    <div className="container py-5">
      <div className="text-center mb-4">
        <h2 className={style.title}>KYC VERIFICATION</h2>
        <p className={style.subtitle}>
          Complete verification to unlock full access and faster payouts.
        </p>
      </div>

      <div className={`mx-auto ${style.card}`}>
        <h5 className="mb-3">Choose your verification document</h5>
        <p className={style.helperText}>
          Please choose the country that issued the ID and the ID you have.
        </p>

        <div className="row mb-4">
          <div className="col-md-6 mb-3">
            <label className={style.label}>Country of issuance</label>
            <select className="form-select">
              <option>Select country</option>
              <option>Nigeria</option>
            </select>
          </div>
          <div className="col-md-6 mb-3">
            <label className={style.label}>ID Type</label>
            <select className="form-select">
              <option>Select ID type</option>
              <option>National ID</option>
              <option>Driver’s License</option>
              <option>Passport</option>
            </select>
          </div>
        </div>

        {/* Upload ID */}
        <div className="mb-4">
          <label className={style.label}>Upload ID</label>
          <p className={style.helperText}>
            Kindly upload a PNG, JPEG or PDF file of your ID.
          </p>

          <div className={style.uploadBox}>
            {!idFile ? (
              <>
                <p className={style.uploadText}>
                  Choose a file or drag & drop it here.
                </p>

                <input
                  type="file"
                  hidden
                  id="idUpload"
                  onChange={(e) =>
                    simulateUpload(
                      setIdProgress,
                      setIdFile,
                      e.target.files[0],
                      setIdStatus
                    )
                  }
                />

                <label htmlFor="idUpload" className={style.browseBtn}>
                  Browse file
                </label>
              </>
            ) : (
              <>
                <p className={style.progressPercent}>{idProgress}%</p>

                <div className={style.progressTrack}>
                  <div
                    className={style.progressFill}
                    style={{ width: `${idProgress}%` }}
                  />
                </div>

                <p className={style.uploadingText}>
                  {idStatus === "completed" ? (
                    <>
                      <strong>Upload completed</strong>
                      <br />
                      <span>{idFile.name}</span>
                    </>
                  ) : (
                    <>
                      Uploading Document…
                      <br />
                      <span>{idFile.name}</span>
                    </>
                  )}
                </p>
              </>
            )}
          </div>
        </div>

        {/* Proof of Address */}
        <div className="mb-4">
          <label className={style.label}>Proof of Address</label>
          <p className={style.helperText}>
            Upload utility bill, internet bill or bank statement (not older than
            3 months).
          </p>

          <div className={style.uploadBox}>
            {!addressFile ? (
              <>
                <p className={style.uploadText}>
                  Choose a file or drag & drop it here.
                </p>
                <input
                  type="file"
                  hidden
                  id="addressUpload"
                  onChange={(e) =>
                    simulateUpload(
                      setAddressProgress,
                      setAddressFile,
                      e.target.files[0],
                      setIdStatus
                    )
                  }
                />
                <label htmlFor="addressUpload" className={style.browseBtn}>
                  Browse file
                </label>
              </>
            ) : (
              <>
                <p className={style.progressPercent}>{addressProgress}%</p>
                <div className={style.progressTrack}>
                  <div
                    className={style.progressFill}
                    style={{ width: `${addressProgress}%` }}
                  />
                </div>

                <p className={style.uploadingText}>
                  {idStatus === "completed" ? (
                    <>
                      <strong>Upload completed</strong>
                      <br />
                      <span>{addressFile.name}</span>
                    </>
                  ) : (
                    <>
                      Uploading Document…
                      <br />
                      <span>{addressFile.name}</span>
                    </>
                  )}
                </p>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="row justify-content-center gap-3 mt-5">
        <Link
          to={"/business-setup/info"}
          className={`col-md-4 btn ${style.secondaryBtn}`}
        >
          Previous
        </Link>
        <Link
          to={"/business-setup/kyc-success"}
          className={`col-md-4 btn ${style.primaryBtn}`}
        >
          Submit
        </Link>
      </div>
    </div>
  );
};

export default KycInfo;
