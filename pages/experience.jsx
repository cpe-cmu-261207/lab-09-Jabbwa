import React from "react";
import MainLayout from "../layouts/MainLayout";

export default function experience() {
  return (
    <MainLayout>
      <div
        className="d-flex justify-content-center align-items-center mx-auto gap-3 my-5"
        style={{ maxWidth: "700px" }}
      >
        <div class="card" style={{ width: "18rem" }}>
          <img
            src="exp1.jpg"
            className="card-img-top"
            style={{ width: "287px", height: "280px" }}
          />
          <div className="card-body">
            <p className="card-text">
              My project on class 261202 is Go game, that is you have 3 size to
              select to play with Bot, Condition to win is If you can take your
              piece surround 4:1 you will get 5 point and If your point leave
              Bot More that 5 point you will win.
            </p>
          </div>
        </div>
        {/* exp2 */}
        <div class="card" style={{ width: "18rem" }}>
          <img
            src="/Interest.jpg"
            className="card-img-top"
            style={{ width: "287px", height: "280px" }}
          />
          <div className="card-body">
            <p className="card-text">
              In semester 1/64 I enrolled on class 101201 Western Art History
              this class is new experoence for me to learn about history of art.
              In this class talk about Ancient Greek and Roman Art,Renaissance
              Art, Baroque, Rococo, et cetera
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
