// https://www.klaasnotfound.com/2016/11/06/making-google-maps-work-with-react/
export function loadJS(src) {
  var ref = window.document.getElementsByTagName("script")[0];
  var script = window.document.createElement("script");
  script.src = src;
  script.async = true;
  ref.parentNode.insertBefore(script, ref);
}

// https://stackoverflow.com/questions/9719157/you-have-included-the-google-maps-api-multiple-times-on-this-page-this-may-caus?rq=1
export function removeGoogleMapScript() {
  let keywords = ['maps.googleapis'];
  //Remove google from BOM (window object)
  window.google = undefined;
  //Remove google map scripts from DOM
  let scripts = document.head.getElementsByTagName("script");
  for (let i = scripts.length - 1; i >= 0; i--) {
      let scriptSource = scripts[i].getAttribute('src');
      if (scriptSource != null) {
          if (keywords.filter(item => scriptSource.includes(item)).length) {
              scripts[i].remove();
              // scripts[i].parentNode.removeChild(scripts[i]);
          }
      }
  }
}