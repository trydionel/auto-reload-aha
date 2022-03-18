document.addEventListener('visibilitychange', () => {
  if (document.hidden === false) {
    const reloadWarning = document.querySelector('.reactor-refresh-message')
    if (reloadWarning) {
      console.log('Reactive updates disconnected. Reloading window.')
      window.location.reload()
    }
  }
}, false)