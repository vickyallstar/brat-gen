function generate() {
  const text = document.getElementById("textInput").value.trim();
  const resultDiv = document.getElementById("result");

  if (!text) {
    resultDiv.innerHTML = "<p style='color:red;'>⚠️ Isi teks dulu bro!</p>";
    return;
  }

  const url = `https://api.sxtream.xyz/maker/brat?text=${encodeURIComponent(text)}`;

  resultDiv.innerHTML = `<p style="color:#555;">⏳ Loading...</p>`;
  setTimeout(() => {
    resultDiv.innerHTML = `<img src="${url}" alt="Generated Image">`;
  }, 800);
}