function generate() {
  const text = document.getElementById("textInput").value.trim();
  const resultDiv = document.getElementById("result");

  if (!text) {
    resultDiv.innerHTML = "<p style='color:red;'>⚠️ Isi teks dulu bro!</p>";
    return;
  }

  // API baru dengan parameter tambahan
  const url = `https://api.siputzx.my.id/api/m/brat?text=${encodeURIComponent(text)}&isAnimated=false&delay=500`;

  resultDiv.innerHTML = `<p style="color:#555;">⏳ Loading...</p>`;
  setTimeout(() => {
    resultDiv.innerHTML = `<img src="${url}" alt="Generated Image">`;
  }, 800);
             }
