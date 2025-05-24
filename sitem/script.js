// Fotoğraf dizisi: isim ve dosya yolu burada kolayca düzenlenir
const folders = {
    "12A": [
      { name: "Fotoğraf 1", src: "" },
      { name: "Fotoğraf 2", src: "resimler/12A/2.jpg" },
      { name: "Fotoğraf 3", src: "resimler/12A/3.jpg" },
      { name: "Fotoğraf 4", src: "resimler/12A/4.jpg" },
      { name: "Fotoğraf 5", src: "resimler/12A/5.jpg" }
    ],
    "yks": [
      { name: "YKS Sayaç 1", src: "resimler/yks/1.jpg" },
      { name: "YKS Sayaç 2", src: "resimler/yks/2.jpg" },
      { name: "YKS Sayaç 3", src: "resimler/yks/3.jpg" }
    ]
  };
  
  function openFolder(folderName) {
    const gallery = document.getElementById("gallery");
    const foldersSection = document.getElementById("folders");
    gallery.innerHTML = "";
    foldersSection.classList.add("hidden");
    gallery.classList.remove("hidden");
  
    if (!folders[folderName]) {
      gallery.innerHTML = "<p>Bu klasör boş veya bulunamadı.</p>";
      return;
    }
  
    folders[folderName].forEach((foto) => {
      const container = document.createElement("div");
      container.className = "gallery-item";
  
      const img = document.createElement("img");
      img.src = foto.src;
      img.alt = foto.name;
      img.onclick = () => showLightbox(img.src);
  
      const caption = document.createElement("div");
      caption.className = "caption";
      caption.textContent = foto.name;
  
      container.appendChild(img);
      container.appendChild(caption);
      gallery.appendChild(container);
    });
  
    // Geri butonu
    const backBtn = document.createElement("button");
    backBtn.textContent = "⬅️ Geri";
    backBtn.className = "back-button";
    backBtn.onclick = () => {
      gallery.classList.add("hidden");
      foldersSection.classList.remove("hidden");
      gallery.innerHTML = "";
    };
    gallery.appendChild(backBtn);
  }
  
  function showLightbox(src) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    lightboxImg.src = src;
    lightbox.classList.remove("hidden");
  }
  
  function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    lightbox.classList.add("hidden");
    const lightboxImg = document.getElementById("lightbox-img");
    lightboxImg.src = "";
  }
  
  // Canlı geri sayım fonksiyonu
  function countdown(targetDate, elementId) {
    function update() {
      const now = new Date();
      const diff = targetDate - now;
  
      if (diff <= 0) {
        document.getElementById(elementId).textContent = "Süre doldu!";
        clearInterval(interval);
        return;
      }
  
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
  
      document.getElementById(elementId).textContent = 
        `${days} gün ${hours} saat ${minutes} dakika ${seconds} saniye`;
    }
    update();
    const interval = setInterval(update, 1000);
  }
  
  window.onload = () => {
    const okulKapanmaTarihi = new Date("2025-06-15T17:00:00");
    const yksTarihi = new Date("2025-06-25T09:00:00");
  
    countdown(okulKapanmaTarihi, "okulKapanmaTime");
    countdown(yksTarihi, "yksTime");
  };
  