const html = require('choo/html');

module.exports = ga => {
  return ga
    ? html`
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=${ga}"
        ></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag('js', new Date());
          gtag('config', '${ga}');
        </script>
      `
    : html``;
};
