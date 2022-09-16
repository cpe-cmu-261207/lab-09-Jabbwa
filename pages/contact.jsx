import React from "react";
import MainLayout from "../layouts/MainLayout";

export default function contact() {
  return (
    <MainLayout>
      <div
        className="d-flex justify-content-center align-items-center mx-auto gap-3 my-5"
        style={{ maxWidth: "700px" }}
      >
        <div>
          <img
            src="/display.jpg"
            width="220"
            height="220"
            style={{ objectFit: "cover" }}
            className="rounded-circle "
          />
        </div>
        <div>
          <div
            className="d-flex justify-content-center align-items-center mx-auto gap-3  fs-4"
            style={{ maxWidth: "700px" }}
          >
            <p>Contact Me</p>
          </div>
          <div className="vstack gap-2">
            {/* name */}
            <div className="d-flex">
              <div className="fw-semibold" style={{ minWidth: "100px" }}>
                Name
              </div>
              <span className="text-muted">Sopida Ktit</span>
            </div>
            {/* nickmane */}
            <div className="d-flex">
              <div className="fw-semibold" style={{ minWidth: "100px" }}>
                Nickname
              </div>
              <span className="text-muted">Vhan</span>
            </div>
            {/* facebook */}
            <div className="d-flex">
              <div className="fw-semibold" style={{ minWidth: "100px" }}>
                Facebook
              </div>

              <a
                href="https://www.facebook.com/sopida.nnk"
                target={"_blank"}
                rel="noreferrer"
              >
                https://www.facebook.com/sopida.nnk
              </a>
            </div>
            {/* email */}
            <div className="d-flex">
              <div className="fw-semibold" style={{ minWidth: "100px" }}>
                Email
              </div>
              <a href="mailto:sopida_kit@cmu.ac.th">sopida_kit@cmu.ac.th</a>
            </div>
            {/* end */}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
