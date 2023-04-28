<script setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import nlp from 'compromise'

const route = useRoute()
const query = computed(() => route.query.q)

const doc = nlp(query.value)
const sentence = ref(doc.html({
  'mark data-entity=Present_Tense': '#PresentTense',
  'mark data-entity=Past_Tense': '#PastTense',
  'mark data-entity=Perfect_Tense': '#PerfectTense',
  'mark data-entity=Pluperfect': '#Pluperfect',
  'mark data-entity=Infinitive': '#Infinitive',
  'mark data-entity=Gerund': '#Gerund',
  'mark data-entity=Copula': '#Copula',
  'mark data-entity=Modal': '#Modal',
  'mark data-entity=Participle': '#Participle',
  'mark data-entity=Particle': '#Particle',
  'mark data-entity=Auxiliary': '#Auxiliary',
  'mark data-entity=To': '(#Conjunction && to)',
  'mark data-entity=Phrasal_Verb': '#PhrasalVerb',
}))

console.log(doc)
console.log(nlp(sentence.value).out('tags'))
</script>

<template>
  <p v-if="query" v-html="sentence" />
  <p v-else>(┛ಠДಠ)┛彡┻━┻</p>
</template>

<style>
p {
  max-width: 30ch;
  line-height: 3;
}

[data-entity] {
     padding: 0.25em 0.35em;
     line-height: 1;
     display: inline-block;
     border-radius: 0.25em;
     border: 1px solid; 
}

[data-entity]::after {
     box-sizing: border-box;
     content: attr(data-entity);
     font-size: 0.6em;
     line-height: 1;
     padding: 0.35em;
     border-radius: 0.35em;
     text-transform: uppercase;
     display: inline-block;
     vertical-align: middle;
     margin: 0px 0px 0.1rem 0.5rem; 
}

[data-entity][data-entity="Present_Tense"] {
     background: rgba(166, 226, 45, 0.2);
     border-color: rgb(166, 226, 45); 
}

[data-entity][data-entity="Present_Tense"]::after {
     background: rgb(166, 226, 45); 
}

[data-entity][data-entity="Past_Tense"] {
     background: rgba(224, 0, 132, 0.2);
     border-color: rgb(224, 0, 132); 
}

[data-entity][data-entity="Past_Tense"]::after {
     background: rgb(224, 0, 132); 
}

[data-entity][data-entity="Perfect_Tense"] {
     background: rgba(67, 198, 252, 0.2);
     border-color: rgb(67, 198, 252); 
}

[data-entity][data-entity="Perfect_Tense"]::after {
     background: rgb(67, 198, 252); 
}

[data-entity][data-entity="Infinitive"],
[data-entity][data-entity="Auxiliary"],
[data-entity][data-entity="Gerund"] {
     background: rgba(253, 151, 32, 0.2);
     border-color: rgb(253, 151, 32); 
}

[data-entity][data-entity="Infinitive"]::after,
[data-entity][data-entity="Auxiliary"]::after,
[data-entity][data-entity="Gerund"]::after {
     background: rgb(253, 151, 32); 
}

[data-entity][data-entity="product"] {
     background: rgba(142, 125, 255, 0.2);
     border-color: rgb(142, 125, 255); 
}

[data-entity][data-entity="product"]::after {
     background: rgb(142, 125, 255); 
}

[data-entity][data-entity="Modal"],
[data-entity][data-entity="Copula"],
[data-entity][data-entity="To"] {
     background: rgba(255, 204, 0, 0.2);
     border-color: rgb(255, 204, 0); 
}

[data-entity][data-entity="Modal"]::after,
[data-entity][data-entity="Copula"]::after,
[data-entity][data-entity="To"]::after {
     background: rgb(255, 204, 0); 
}

[data-entity][data-entity="Participle"],
[data-entity][data-entity="Particle"] {
     background: rgba(47, 187, 171, 0.2);
     border-color: rgb(47, 187, 171); 
}

[data-entity][data-entity="Participle"]::after,
[data-entity][data-entity="Particle"]::after {
     background: rgb(47, 187, 171); 
}

[data-entity][data-entity="Phrasal_Verb"],
[data-entity][data-entity="Pluperfect"] {
     background: rgba(153, 153, 153, 0.2);
     border-color: rgb(153, 153, 153); 
}

[data-entity][data-entity="Phrasal_Verb"]::after,
[data-entity][data-entity="Pluperfect"]::after {
     background: rgb(153, 153, 153); 
}
</style>
