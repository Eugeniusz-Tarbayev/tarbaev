document.addEventListener("DOMContentLoaded", function () {
  // Ищем все секции с галереями
  const gallerySections = document.querySelectorAll(".projects-gallery");
  if (!gallerySections.length) return;

  gallerySections.forEach((gallerySection) => {
    const mainSlider = gallerySection.querySelector(".splide[id^='main-slider']");
    const thumbSlider = gallerySection.querySelector(".splide[id^='thumbnail-slider']");
    if (!mainSlider || !thumbSlider) return;

    // 🔹 Основной слайдер
    const main = new Splide(mainSlider, {
      type: "loop",
      heightRatio: 9 / 14, // соотношение 14:9
      pagination: false,
      arrows: true,
      cover: true,
      rewind: true,
      speed: 800,
    });

    // 🔹 Миниатюры
    const thumbnails = new Splide(thumbSlider, {
      type: "loop",
      fixedWidth: 100,
      fixedHeight: 64,
      isNavigation: true,
      gap: 10,
      pagination: false,
      arrows: false,
      cover: true,
      focus: "center",
      trimSpace: false,
      perPage: 5,
      updateOnMove: true,
      rewind: false,
      breakpoints: {
        768: { fixedWidth: 80, fixedHeight: 50, perPage: 4 },
        480: { fixedWidth: 66, fixedHeight: 40, perPage: 3 },
      },
    });

    // 🔹 Связка
    main.sync(thumbnails);

    main.mount();
    thumbnails.mount();

    // ✅ Центрируем активную миниатюру вручную
    main.on("moved", function (newIndex) {
      thumbnails.go(newIndex);
      thumbnails.Components.Move.move(
        thumbnails.indexToPage(newIndex) - Math.floor(thumbnails.options.perPage / 2)
      );
    });
  });
});