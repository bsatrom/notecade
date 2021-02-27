<template>
  <div class="home">
  </div>
</template>

<script>
import { apiKey, apiUrl } from '@/consts.js'

const reqUrl = `${apiUrl}?code=${apiKey}`

console.log(reqUrl)

export default {
  name: 'Home'
}
</script>
