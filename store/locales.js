import createPersistedState from 'vuex-persistedstate'

export const state = () => ({
  current: 'en-us',
  locales: {
    'en-us': 'English',
    'zh-cn': '简体中文',
  },
})

export const mutations = {
  SET_LANG(state, locale) {
    if (state.locales[locale] !== undefined) {
      state.current = locale
    }
  }
}

const plugins = []

if (process.BROWSER_BUILD) {
  // FIXME: Not working
  plugins.push(createPersistedState({ key: 'locale' }))
}

export { plugins }
