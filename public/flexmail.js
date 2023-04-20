var fm = (function () {
  return {
    load: function () {
      if (typeof document !== "undefined") {
        var e = document,
          t = e.getElementById("iframe_flxml_form"),
          n = e.getElementById("flx-styles"),
          r = n ? n.innerHTML : "";
        t
          ? t.contentWindow.postMessage(r, "https://return.flexmail.eu")
          : alert("Flexmail: Frame not found!");
      }
    },
  };
})();

export default fm;
