const rowDiv = document.querySelector(".row");

let page = 1;

const fetchPopularMovieData = async (page) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MWJkODI2ZTk1MWM2MDQ4OWFlYzJhYTYwZDhjMDQ2MSIsInN1YiI6IjY1ZmMyMGYxMGJjNTI5MDE3Y2IwMjFhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iFlRveT0CXLWHqq3JqZm5KBylr-3rj74_tdITD_l2NA",
        },
      }
    );

    //convert json response to proper javascript object
    const data = await response.json();
    //all api server related errors
    if (!response.ok) {
      return console.log("something went wrong");
    }

    if (data.results && data.results.length > 0) {
      for (movie of data.results) {
        const movieColumn = document.createElement("div");
        movieColumn.classList.add("col-md-3");
        movieColumn.classList.add("mb-3");
        movieColumn.innerHTML = `<div class="card" style="width: 100%">
              <img
                src=${`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                class="card-img-top movie-img"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">${movie.original_title}</h5>
                <p class="card-text">
                 ${movie.overview.slice(0, 60)}
                </p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>`;

        rowDiv.appendChild(movieColumn);
      }
    }
  } catch (error) {
    console.log(error);
  }
};

const onScrollPage = () => {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight;
  const clientHeight = document.documentElement.clientHeight;

  if (scrollTop + clientHeight >= scrollHeight) {
    page += 1;
    fetchPopularMovieData(page);
  }
};

window.addEventListener("load", () => fetchPopularMovieData(page));
window.addEventListener("scroll", onScrollPage);
