(function loadReactApp() {
  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = resolve;
      script.onerror = reject;
      document.body.appendChild(script);
    });
  }

  function loadStylesheet(href) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    document.head.appendChild(link);
  }

  const container = document.getElementById('react-app-container');
  if (!container) {
    console.error('Container element not found');
    return;
  }

  // Replace these URLs with the actual Netlify URLs provided after deployment
  const baseUrl = 'https://your-netlify-app-url.netlify.app';
  const scriptUrl = `${baseUrl}/assets/index-C1pm6xS7.js`;
  const styleUrl = `${baseUrl}/assets/index-DK5pBHqT.css`;

  loadStylesheet(styleUrl);
  loadScript(scriptUrl)
    .then(() => {
      console.log('React app loaded successfully');
    })
    .catch((error) => {
      console.error('Failed to load React app:', error);
    });
})();