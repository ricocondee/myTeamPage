const API = "https://rickandmortyapi.com/api/";

fetch(`${API}/character`)
  .then((response) => response.json())
  .then((data) => {
    const main = document.getElementById("app");
    main.insertAdjacentHTML(
      "beforeend",
      `<section class="info">
      <div class="txt__info">
          <div class="title">
              <h1>The messy crew</h1>
          </div>
          <div class="about">
              <h3>Who they are</h3>
              <p>They are a messy group of people, unable to stay out of trouble, especially Rick. Main characters of the HBO series Rick and Morty.</p>
          </div>

      </div>
  </section>
  <section class="team">
      <div class="team__cards">
              <figure class="rick">
                  <div class="figure__img">
                      <img src="${data.results[0].image}" alt="">
                  </div>
                  <figcaption>${data.results[0].name}</figcaption>
                  <div class="rotate">
                      <span>${data.results[0].status}</span>
                  </div>
              </figure>

              <figure class="morty">
                  <div class="figure__img">
                      <img src="${data.results[1].image}" alt="">
                  </div>
                  <figcaption>${data.results[1].name}</figcaption>
                  <div class="rotate">
                      <span>${data.results[1].status}</span>
                  </div>
              </figure>

              <figure class="summer">
                  <div class="figure__img">
                      <img src="${data.results[2].image}" alt="">
                  </div>
                  <figcaption>${data.results[2].name}</figcaption>
                  <div class="rotate">
                      <span>${data.results[2].status}</span>
                  </div>
              </figure>

              <figure class="beth">
                  <div class="figure__img">
                      <img src="${data.results[3].image}" alt="">
                  </div>
                  <figcaption>${data.results[3].name}</figcaption>
                  <div class="rotate">
                      <span>${data.results[3].status}</span>
                  </div>
              </figure>

              <figure class="jerry">
                  <div class="figure__img">
                      <img src="${data.results[4].image}" alt="">
                  </div>
                  <figcaption>${data.results[4].name}</figcaption>
                  <div class="rotate">
                      <span>${data.results[4].status}</span>
                  </div>
              </figure>

              <figure class="unknown">
                  <div class="figure__img">
                      <img src="${data.results[7].image}" alt="">
                  </div>
                  <figcaption>${data.results[7].name}</figcaption>
                  <div class="rotate">
                      <span>${data.results[7].status}</span>
                  </div>
              </figure>
      </div>
  </section>`
    );
  });
