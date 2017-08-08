<template lang='pug'>
v-app(light, toolbar, footer)
  v-navigation-drawer(temporary, :mini-variant.sync='miniVariant', :clipped='clipped', v-model='drawer')
    v-list
      v-list-tile(router, v-for='(item, i) in navMenu', :key='i', :to='item.to')
        v-list-tile-action
          v-icon(v-html='item.icon')
        v-list-tile-content
          v-list-tile-title(v-text='item.title')
  v-toolbar.primary(dark, fixed)
    v-toolbar-side-icon(@click.native.stop='drawer = !drawer')
    v-toolbar-title {{ $t('home.title') }}
    v-spacer
    v-btn(icon)
      v-icon search
    v-menu(bottom, left, offset-y)
      v-btn(icon, slot='activator', dark)
        v-icon mdi-earth
      v-list
        v-list-tile(v-for='(label, locale) in $store.state.locales.locales', :key='locale')
          v-list-tile-title(@click='setLang(locale)') {{ label }}
  main
    v-container(fluid)
      nuxt
  v-footer(:fixed='fixed')
    span © 2017
</template>

<script>
export default {
  data() {
    return {
      clipped: true,
      drawer: false,
      fixed: true,
      miniVariant: false,
      right: true,
    }
  },
  computed: {
    navMenu() {
      return [
        { icon: 'apps', title: this.$t('nav.home'), to: '/' },
        { icon: 'bubble_chart', title: this.$t('nav.app'), to: '/app' },
      ]
    }
  },
  methods: {
    setLang(locale) {
      this.$store.commit('locales/SET_LANG', locale)
      this.$i18n.locale = this.$store.state.locales.current
    }
  },
}
</script>
