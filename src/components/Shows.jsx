import MainSection from "../components/MainSection";
import { Card } from "../components/Explore";
import { Link } from "react-router-dom";

function Shows() {
  return (
    <>
      <MainSection
        {...{
          image: "/shows.avif",
          title: "BIG BOSS",
          smallText: "Big Boss Alll Seasons Streaming Now",
          info: "It's time for real entertainment with Nagarjuna, in a whirlwind of unexpected twists, conflicts and surprises. This season, everything will be 'ulta pulta'!",
        }}
      />

      <div className="ml-28 bg-[#0f0f0ffd]">
        <br />
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
        <br />
      </div>
    </>
  );
}

export default Shows;
