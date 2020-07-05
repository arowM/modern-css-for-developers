// `favoriteAnimal-main`というIDを持つ要素の値が変更されたとき...
document.getElementById("favoriteAnimal-main").addEventListener("change", function (eve) {
  // その変更後の値が`"other"`なら...
  if (eve.target.value === "other") {
    // `favoriteAnimal-detail`というIDを持つ要素の`aria-hidden`属性を`"false"`に変更する
    document.getElementById("favoriteAnimal-detail").setAttribute("aria-hidden", "false");
  // その変更後の値が`"other"`ではないなら...
  } else {
    // `favoriteAnimal-detail`というIDを持つ要素の`aria-hidden`属性を`"true"`に変更する
    document.getElementById("favoriteAnimal-detail").setAttribute("aria-hidden", "true");
  }
}, false);

