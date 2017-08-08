<template lang='pug'>
v-app(light, toolbar, footer)
  v-navigation-drawer(temporary, :mini-variant.sync='miniVariant', :clipped='clipped', v-model='drawer')
    v-list
      v-list-tile(router, v-for='(item, i) in items', :key='i', :to='item.to')
        v-list-tile-action
          v-icon(v-html='item.icon')
        v-list-tile-content
          v-list-tile-title(v-text='item.title')
  v-toolbar.primary(dark, fixed)
    v-toolbar-side-icon(@click.native.stop='drawer = !drawer')
    v-toolbar-title(v-text='title')
    v-spacer
  main
    v-container(fluid)
      nuxt
  v-footer(:fixed='fixed')
    span © 2017
</template>

<script>
  export default {
    data () {
      return {
        clipped: true,
        drawer: false,
        fixed: true,
        items: [
          { icon: 'apps', title: 'Welcome', to: '/' },
          { icon: 'bubble_chart', title: 'Inspire', to: '/inspire' }
        ],
        miniVariant: false,
        right: true,
        title: 'Vuetify.js'
      }
    }
  }
</script>
