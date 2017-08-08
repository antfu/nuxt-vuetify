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
