const data = [
  {
    title: "Living Tech Level Newton (1-Month Free)",
    ribbon: "Living Tech Level Newton (5-8 tahun)",
    img: "test1.png",
    star: 4,
    review: 100,
  },
  {
    title: "Living Tech Level Newton (1-Month Free)",
    ribbon: "Living Tech Level Newton (5-8 tahun)",
    img: "test1.png",
    star: 3,
    review: 100,
  },
  {
    title: "Living Tech Level Newton (1-Month Free)",
    ribbon: "Living Tech Level Newton (5-8 tahun)",
    img: "test1.png",
    star: 5,
    review: 100,
  },
  {
    title: "Living Tech Level Newton (1-Month Free)",
    ribbon: "Living Tech Level Newton (5-8 tahun)",
    img: "test1.png",
    star: 2,
    review: 100,
  },
  {
    title: "Living Tech Level Newton (1-Month Free)",
    ribbon: "Living Tech Level Newton (5-8 tahun)",
    img: "test1.png",
    star: 4,
    review: 100,
  },
  {
    title: "Living Tech Level Newton (1-Month Free)",
    ribbon: "Living Tech Level Newton (5-8 tahun)",
    img: "test1.png",
    star: 4,
    review: 100,
  },
];

const imageStar = (star) => {
  if (star === 5) {
    return `<img src="star-filled.png" class="star" />
        <img src="star-filled.png" class="star" />
        <img src="star-filled.png" class="star" />
        <img src="star-filled.png" class="star" />
        <img src="star-filled.png" class="star" />
        `;
  } else if (star >= 4 && star < 5) {
    return `<img src="star-filled.png" class="star" />
        <img src="star-filled.png" class="star" />
        <img src="star-filled.png" class="star" />
        <img src="star-filled.png" class="star" />
        <img src="star-outline.png" class="star" />
        `;
  } else if (star >= 3) {
    return `<img src="star-filled.png" class="star" />
        <img src="star-filled.png" class="star" />
        <img src="star-filled.png" class="star" />
        <img src="star-outline.png" class="star" />
        <img src="star-outline.png" class="star" />
        `;
  } else if (star >= 2) {
    return `<img src="star-filled.png" class="star" />
        <img src="star-filled.png" class="star" />
        <img src="star-outline.png" class="star" />
        <img src="star-outline.png" class="star" />
        <img src="star-outline.png" class="star" />
        `;
  } else if (star >= 1) {
    return `<img src="star-filled.png" class="star" />
    <img src="star-outline.png" class="star" />
    <img src="star-outline.png" class="star" />
        <img src="star-outline.png" class="star" />
        <img src="star-outline.png" class="star" />
        `;
  } else {
    return `    <img src="star-outline.png" class="star" />
    <img src="star-outline.png" class="star" />
    <img src="star-outline.png" class="star" />
        <img src="star-outline.png" class="star" />
        <img src="star-outline.png" class="star" />
        `;
  }
};

const content = () => {
  return data.map((v) => {
    return `
        <div class="card">
        <img src=${v.img} class="image-card" />
        <div class="ribbon">${v.ribbon}</div>
        <div class="description">
          <h4 class="title">${v.title}</h4>
          <p class="author">Oleh <span class="bold">Sekolahmu</span></p>
          <div class="row gap-2 middle">
            <div class="row gap-1">
              ${imageStar(v.star)}
            </div>
            <span class="rating">${v.star} (${v.review} review)</span>
          </div>
          <span class="label">GRATIS</span>
        </div>
      </div>`;
  });
};

const cardContainer = document.getElementById("cards-container");
cardContainer.innerHTML = content();

window.addEventListener("load", cardContainer);
