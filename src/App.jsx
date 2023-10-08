import "./App.css";
import MainSection from "./components/MainSection";
import { Card } from "./components/Explore";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <MainSection />

      <div className="ml-28 bg-[#0f0f0ffd]">
        <br />

        <div>
          <div>
            <h5 className="text-xl font-semibold text-slate-200 flex justify-between pr-10">
              <span>Latest Releases</span>
              <Link to="/latest-release" className="text-lg">
                View More &#62;
              </Link>
            </h5>

            <div>
              <div className="mt-3 flex gap-2">
                {[1, 1, 1, 1, 1, 1, 1, 1].map((a, i) => {
                  return (
                    <div key={i}>
                      <Card {...{ i, path: "latest" }} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        {/* ------------------------------------------------------------ */}
        <br />
        {/* ------------------------------------------------------------ */}
        <div>
          <div>
            <h5 className="text-xl font-semibold text-slate-200 flex justify-between pr-10">
              <span>Newly Added</span>
              <Link to="/newly-added" className="text-lg">
                View More &#62;
              </Link>
            </h5>

            <div>
              <div className="mt-3 flex gap-2">
                {[1, 1, 1, 1, 1, 1, 1, 1].map((a, i) => {
                  return (
                    <div key={i}>
                      <Card {...{ i, path: "newly-added" }} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        {/* ------------------------------------------------------------ */}
        <br />
        {/* ------------------------------------------------------------ */}
        <div>
          <div>
            <h5 className="text-xl font-semibold text-slate-200 flex justify-between pr-10">
              <span>Top 10 in India - Hindi</span>
              <Link to="/top-10" className="text-lg">
                View More &#62;
              </Link>
            </h5>

            <div>
              <div className="mt-3 flex gap-2">
                {[1, 1, 1, 1, 1, 1, 1, 1].map((a, i) => {
                  return (
                    <div key={i}>
                      <Card {...{ i, path: "top10" }} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        {/* ------------------------------------------------------------ */}
        <br />
        {/* ------------------------------------------------------------ */}
        <div>
          <div>
            <h5 className="text-xl font-semibold text-slate-200 flex justify-between pr-10">
              <span>StarPlus Shows</span>
              <Link to="/star-plus-shows" className="text-lg">
                View More &#62;
              </Link>
            </h5>

            <div>
              <div className="mt-3 flex gap-2">
                {[1, 1, 1, 1, 1, 1, 1, 1].map((a, i) => {
                  return (
                    <div key={i}>
                      <Card {...{ i, path: "star-plus-shows" }} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        {/* ------------------------------------------------------------ */}
        <br />
        {/* ------------------------------------------------------------ */}
      </div>
    </>
  );
}

export default App;
