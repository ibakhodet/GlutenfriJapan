// Dette er en hjelpefil for å generere ikoner fra emoji
// Du kan kjøre denne i en Node.js-miljø eller tilpasse for nettleseren

function generateEmojiIcon(emoji, size) {
  const canvas = document.createElement("canvas")
  canvas.width = size
  canvas.height = size
  const ctx = canvas.getContext("2d")

  // Fyll bakgrunn
  ctx.fillStyle = "#ffffff"
  ctx.fillRect(0, 0, size, size)

  // Tegn emoji
  ctx.font = `${Math.floor(size * 0.75)}px Arial`
  ctx.textAlign = "center"
  ctx.textBaseline = "middle"
  ctx.fillText(emoji, size / 2, size / 2)

  return canvas.toDataURL("image/png")
}

// Eksempel på bruk:
// const icon192 = generateEmojiIcon('🍜', 192);
// Deretter kan du laste ned bildet eller bruke det direkte

