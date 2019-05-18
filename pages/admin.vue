<template>
  <div id="nc-root" />
</template>

<script>

export default {
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' },
        { src: 'https://unpkg.com/netlify-cms@^2.0.0/dist/netlify-cms.js', body: true }
      ],
      link: [
        { rel: 'cms-config-url', type: 'text/yaml', href: '/admin/config.yml' }
      ]
    }
  },
  mounted() {
    if (process.browser) {
      require('~/cms')
    }
  }
}
</script>
