document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.gallery div');
 const modal = document.querySelector('#myModal');
 const closeBtn = modal.querySelector('.close-btn');
const modalImage = modal.querySelector('.modal-img')

 images.forEach((imageBlock) => {
  imageBlock.addEventListener('click', () => {
    const img = imageBlock.querySelector("img");
   modal.style.display = 'flex';
     modalImage.innerHTML = '';

  const clonedImage = img.cloneNode(true);
    modalImage.appendChild(clonedImage);
   });
   })

  closeBtn.addEventListener('click', () => {
   modal.style.display = 'none';
   });

   window.addEventListener('click', (event) => {
     if (event.target === modal) {
      modal.style.display = 'none';
    }
   });
  images.forEach((imageBlock) => {
    imageBlock.addEventListener('click', () => {
      const img = imageBlock.querySelector("img");
      const text = img.getAttribute("alt");
      const url = img.getAttribute("data-url");
      const imgMask = imageBlock.querySelector(".img-mask");

      console.log(imgMask)

      if( imgMask ) {
        imgMask.remove();
      } else {
        const div = document.createElement("div");
        div.classList.add("img-mask");
        const span = document.createElement("span");
        span.textContent = text;
        const link = document.createElement("a");
        link.href = url;
        link.textContent = "image link";

        div.appendChild(span);
        div.appendChild(link);

        imageBlock.appendChild(div);
      }
    })
  })
});
