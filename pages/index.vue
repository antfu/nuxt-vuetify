<template lang='pug'>
v-layout(row, wrap)
  v-flex(xs12)
    v-card
      v-card-text
        dl
          dt {{ $t('home.title') }}
          dd {{ $t('home.introduction') }}
      v-card-actions
        v-btn(primary, flat, router, nuxt) {{ $t('buttons.continue') }}
        v-btn(flat, dark) Listen now
</template>

<script>
export default {
  head() {
    return {
      title: this.$t('home.title')
    }
  }
}
</script>
