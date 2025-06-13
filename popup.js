
const styles = [
  text => text.toUpperCase(),
  text => text.toLowerCase(),
  text => text.split('').map(c => c + '̶').join(''),
  text => '🅣🅔🅧🅣: ' + text,
  text => [...text].map(c => String.fromCodePoint(0x1D400 + c.charCodeAt(0) - 65)).join('')  // A-Z bold
];

document.getElementById("inputText").addEventListener("input", function() {
  const val = this.value;
  const output = document.getElementById("output");
  output.innerHTML = "";
  styles.forEach(style => {
    const div = document.createElement("div");
    div.className = "styled-text";
    div.textContent = style(val);
    div.onclick = () => {
      navigator.clipboard.writeText(div.textContent);
      div.textContent = "✅ Copied!";
      setTimeout(() => div.textContent = style(val), 1000);
    };
    output.appendChild(div);
  });
});
