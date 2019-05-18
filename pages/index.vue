<template>
  <vue-template
    :title="title"
    :subtitle="subtitle"
    :links="links"
    :html="html"
  />
</template>

<script>
import VueTemplate from '~/templates/home/template.vue'
export default {
  components: { VueTemplate },
  async asyncData() {
    const content = await import ('~/content/home.md')
    const { attributes: { title, subtitle, links }, html } = content
    return {
      title,
      subtitle,
      links,
      html
    }
  }
}
</script>
