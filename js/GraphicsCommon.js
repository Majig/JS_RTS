function colorRect(topLeftX, topLeftY, boxWidth, boxHeight, fillColor) {
  canvasContext.fillStyle = fillColor;
  canvasContext.fillRect(topLeftX, topLeftY, boxWidth, boxHeight);
}

function coloredOutlineRectCornerToCorner (cornerX1, cornerY1, cornerX2, cornerY2, lineColor) {
  canvasContext.strokeStyle = lineColor;
  canvasContext.beginPath();
  canvasContext.rect(cornerX1, cornerY1, cornerX2 - cornerX1, cornerY2 - cornerY1);
  canvasContext.stroke();
}

function colorCircle(centerX, centerY, radius, fillColor) {
  canvasContext.fillStyle = fillColor;
  canvasContext.beginPath();
  canvasContext.arc(centerX, centerY, radius, 0, Math.PI * 2, true);
  canvasContext.fill();
}