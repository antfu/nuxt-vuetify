<template lang='pug'>
v-layout(column, justify-center, align-center)
  v-flex(xs12, sm8, md6)
    v-card
      v-card-text
        p Welcome !
      v-card-actions
        v-btn(primary, flat, router, nuxt) Continue
</template>
