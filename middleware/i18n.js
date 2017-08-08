export default function ({ app, store, route, params, error, redirect, hotReload }) {
  // Check if middleware called from hot-reloading, ignore
  if (hotReload) return

  app.i18n.locale = store.state.locales.current
}
