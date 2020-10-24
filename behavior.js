document.addEventListener("DOMContentLoaded", function (event) {
  var thumbnailElement = document.getElementById("smart_thumbnail");

  if (thumbnailElement) {
    thumbnailElement.addEventListener("click", function () {
      if (thumbnailElement.className === "small")
        thumbnailElement.className = "";
      else {
        thumbnailElement.className = "small";
      }
    });
  }
});
