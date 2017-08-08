<template lang='pug'>
v-card
  v-card-text
    .error-code {{ error.statusCode }}
    .error-wrapper-message
      .error-message {{ error.message }}
    v-btn.primary(v-if='is404', router, nuxt, to='/')
      v-icon(dark, left) arrow_back
      | Back to the home page
</template>

<script>
export default {
  props: ['error'],
  head() {
    return {
      title: this.error.message || 'An error occured'
    }
  },
  computed: {
    is404() {
      return this.error.statusCode === 404
    }
  }
}
</script>

<style lang='stylus' scoped>
@import '~assets/style/app.styl'

.card__text,
.card__actions
  text-align: center

.error-code
  color: darken($theme.primary, 20%)
  font-size: 80px

.error-message
  font-size: 20px
  font-weight: normal
  margin-bottom: 20px
  color: $grey.base

.error-wrapper-message
  margin-bottom: 40px

</style>

