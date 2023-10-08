import MainSection from "../components/MainSection";
import { Link } from "react-router-dom";

function Sports() {
  return (
    <>
      <MainSection />

      <div className="ml-28 bg-[#0f0f0ffd]">
        <br />
        <div>
          <div>
            <h5 className="text-xl font-semibold text-slate-200 flex justify-between pr-10">
              <span>Popular Sports</span>
              <Link to="/sports-popular" className="text-lg">
                View More &#62;
              </Link>
            </h5>

            <div>
              <div className="mt-3 flex gap-2">
                {[1, 1, 1, 1, 1, 1, 1, 1].map((a, i) => {
                  return (
                    <div key={i}>
                      <div className="h-36 w-64 rounded relative overflow-hidden hover:scale-[1.1] z-10 transition-all">
                        <img
                          src={`/sports/popular/${i}.png`}
                          alt="Sports"
                          className="h-full w-full"
                        />
                      </div>
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

export default Sports;
