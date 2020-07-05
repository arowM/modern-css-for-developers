// `data-shutter-status`属性をもつ全ての要素について...
Array.prototype.slice.call(document.querySelectorAll("[data-shutter-status]") || []).forEach(function (target) {
  // その要素でマウスのボタンが押し下げられた瞬間に...
  target.addEventListener("mousedown", function () {
    // `data-shutter-status`属性の値を`"focus"`（自動フォーカスモード）に変更する
    target.setAttribute("data-shutter-status", "focus");
    // （`target.dataset`で書き換えることもできますが、いろいろ特殊なのでここでは`setAttribute`を使っています。）
  }, false);

  // その要素で押し下げられたマウスのボタンが戻った瞬間に...
  target.addEventListener("mouseup", function () {
    // `data-shutter-status`属性の値を`"shooting"`（撮影中）に変更する
    target.setAttribute("data-shutter-status", "shooting");
    // その後 200ms 経ったところで...
    window.setTimeout(function () {
      // `data-shutter-status`属性の値を`"init"`（初期状態）に変更する
      target.setAttribute("data-shutter-status", "init");
    }, 200);
  }, false);
});
