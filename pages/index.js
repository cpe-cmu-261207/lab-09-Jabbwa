import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import MainLayout from "../layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      {/* Intro */}
      <div
        className="d-flex justify-content-center align-items-center mx-auto gap-3 my-5 fs-4"
        style={{ maxWidth: "700px" }}
      >
        <div className="fw-bold">
          Hello everyone, I&apos;m Sopida, student from the faculty of
          Engineering(majoring in Computer)
        </div>
      </div>
      {/* Introduce myself */}
      <div
        className="d-flex justify-content-center align-items-center mx-auto gap-3 my-5"
        style={{ maxWidth: "700px" }}
      >
        <div>
          <img
            src="/display.jpg"
            width="250"
            height="250"
            style={{ objectFit: "cover" }}
            className="rounded-circle"
          />
        </div>

        <div>
          <div className=" display-5 mb-3">I&apos;m Vhan Vhan</div>
          <div className="text-muted">
            Hi, My name is Sopida Kiti, I&apos;m studing at Chiangmai
            University. Faculty of Engineering majoring in Computer. I enjoy
            listing in music kind of Rock, Jazz, Pop music. I like art my
            favourite artist is Vincent van Gogh and Claude Monet.
          </div>
        </div>
      </div>
      {/* about me */}
      <div className="d-flex mx-auto gap-3 my-5" style={{ maxWidth: "700px" }}>
        <p className="fs-4 fw-bold">About me</p>
      </div>

      <div className="d-flex mx-auto gap-3 my-5" style={{ maxWidth: "700px" }}>
        {/* study */}
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <div className="card">
              <img
                src="/study.jpg"
                className="card-img-top"
                style={{ width: "337px", height: "300px" }}
              />
              <div className="card-body">
                <h5 className="card-title">Study</h5>
                <p className="card-text">
                  I&apos;m studing in faculty of Engineering majoring in
                  Computer. feel like study hard die fast
                </p>
              </div>
            </div>
          </div>
          {/* hobby */}
          <div className="col">
            <div className="card">
              <img
                src="/hobby.jpg"
                className="card-img-top"
                style={{ width: "337px", height: "300px" }}
              />
              <div className="card-body">
                <h5 className="card-title">Hobby</h5>
                <p className="card-text">
                  I like to watching football(Premier league), My favourite club
                  is Manchester united and I love listening to music.
                </p>
              </div>
            </div>
          </div>
          {/* interested */}
          <div className="col">
            <div className="card">
              <img
                src="/interested.jpg"
                className="card-img-top"
                style={{ width: "337spx", height: "300px" }}
              />
              <div className="card-body">
                <h5 className="card-title">Interested</h5>
                <p className="card-text">
                  For now I interested about mechanical keyboard and Ceramic I
                  wanna try to make ceramic by myself.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
