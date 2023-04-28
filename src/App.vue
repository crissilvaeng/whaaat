<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import nlp from 'compromise'

const route = useRoute()
const query = computed(() => route.query.q)

const out = ref('')

watch(query, () => {
  const doc = nlp(query.value as string)
  out.value = doc.html({
    'mark': '#Verb',
  })
})
</script>

<template>
  <main v-html="out">
  </main>
</template>

<style>
p {
  max-width: 30ch;
}

mark {
  -webkit-animation: 1.5s highlight 1.5s 1 normal forwards;
          animation: 1.5s highlight 1.5s 1 normal forwards;
  background-color: none;
  background: linear-gradient(90deg, #7efff5 50%, rgba(255, 255, 255, 0) 50%);
  background-size: 200% 100%;
  background-position: 100% 0;
}

@-webkit-keyframes highlight {
  to {
    background-position: 0 0;
  }
}

@keyframes highlight {
  to {
    background-position: 0 0;
  }
}
</style>