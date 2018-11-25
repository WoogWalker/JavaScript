const galleryItems = [
  {
    preview: "img/preview-img-1.jpeg",
    fullview: "img/fullview-img-1.jpeg",
    alt: "nature"
  },
  {
    preview: "img/preview-img-2.jpeg",
    fullview: "img/fullview-img-2.jpeg",
    alt: "architecture"
  },
  {
    preview: "img/preview-img-3.jpeg",
    fullview: "img/fullview-img-3.jpeg",
    alt: "architecture"
  },
  {
    preview: "img/preview-img-4.jpeg",
    fullview: "img/fullview-img-4.jpeg",
    alt: "nature"
  },
  {
    preview: "img/preview-img-5.jpeg",
    fullview: "img/fullview-img-5.jpeg",
    alt: "nature"
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const imageGallery = document.querySelector(".js-image-gallery");

  const fullviewImage = showFullviewImage(galleryItems[0]);
  const previewImages = showPreviewImages(galleryItems);

  imageGallery.innerHTML = fullviewImage;
  imageGallery.innerHTML += previewImages;

  const previewImgs = imageGallery.querySelectorAll(".preview-img");

  imageGallery.addEventListener("click", onImageGalleryClick);

  function onImageGalleryClick({ target }) {
    const hasClass = target.classList.contains("preview-img");

    if (!hasClass) return;

    const activeFullviewImage = imageGallery.querySelector(".fullview-img");

    activeFullviewImage.setAttribute("src", target.dataset.fullview);

    setActivePreviewImg(previewImgs, target);
  }

  function setActivePreviewImg(previewImgs, target) {
    previewImgs.forEach(previewImg => {
      if (previewImg !== target) {
        previewImg.classList.remove("preview-img-active");
      } else {
        previewImg.classList.add("preview-img-active");
      }
    });
  }

  function showFullviewImage({ fullview }) {
    const fullviewGalleryItem = `                                                                                                                                                                       
        <div class="fullview-item">
          <img class="fullview-img" src="${fullview}" alt="">
        </div> 
      `;

    return fullviewGalleryItem;
  }

  function showPreviewImages() {
    const previewGalleryItems = `
    <div class="slider"><ul class="preview-items">
      ${galleryItems.reduce(
        (acc, { preview, fullview, alt }) =>
          acc +
          `
        <li class="preview-item"><img class="preview-img" 
                                      src="${preview}"
                                      data-fullview="${fullview}"
                                      
        </li>`,
        ""
      )} 
    </ul></div>`;

    return previewGalleryItems;
  }
});