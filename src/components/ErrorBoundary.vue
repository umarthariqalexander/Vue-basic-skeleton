<template>
  <div>
    <h1 v-if="error">Sorry for the inconviences. We are working on that...</h1>
    <slot v-else></slot>
  </div>
</template>

<script>
export default {
  name: 'ErrorBoundary',
  data() {
    return {
      error: false
    }
  },
  errorCaptured() {
    this.error = true
    return false // return false so parent components don't get this error
  },
  watch: {
    $route: function() {
      if (this.error) {
        // Reset the error flag when route changes
        this.error = false
      }
    }
  }
}
</script>

<style></style>
