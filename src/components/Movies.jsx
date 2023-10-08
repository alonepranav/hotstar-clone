import MainSection from "../components/MainSection";
import { Card } from "../components/Explore";
import { Link } from "react-router-dom";

function Movies() {
  return (
    <>
      <MainSection
        {...{
          image: "/movie.jpeg",
          title: "A Thursday",
          smallText: "Thriller | Drama | Action | Psychological thriller",
          info: "Naina, a playschool teacher, takes 16 students hostage. Rattling the police and the leaders, her demands send shockwaves through the country.",
        }}
      />

      <div className="ml-28 bg-[#0f0f0ffd]">
        <br />
        <div>
          <div>
            <h5 className="text-xl font-semibold text-slate-200 flex justify-between pr-10">
              <span>Family</span>
              <Link to="/movies-family" className="text-lg">
                View More &#62;
              </Link>
            </h5>

            <div>
              <div className="mt-3 flex gap-2">
                {[1, 1, 1, 1, 1, 1, 1, 1].map((a, i) => {
                  return (
                    <div key={i}>
                      <Card {...{ i, path: "movies/family" }} />
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
              <span>Thriller</span>
              <Link to="/movies-thriller" className="text-lg">
                View More &#62;
              </Link>
            </h5>

            <div>
              <div className="mt-3 flex gap-2">
                {[1, 1, 1, 1, 1, 1, 1, 1].map((a, i) => {
                  return (
                    <div key={i}>
                      <Card {...{ i, path: "movies/thriller" }} />
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

export default Movies;
