<template>
  <Faq1
    title="Frequently Asked Questions"
    subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus impedit error labore doloremque fugit! Dolor fugit molestiae vero quos quisquam nobis, eos debitis magni omnis ea incidunt amet voluptate dignissimos!"
    :faq="faq"
  />
</template>

<script>
import Faq1 from '@/components/ui/landing/faq/Faq1.vue'

export default {
  components: {
    Faq1
  },
  data() {
    return {
      faq: [{
        question: 'What happened to the developer who couldn\'t access git?',
        answer: 'He now has commitement issues.'
      }, {
        question: 'What do computers and air conditioners have in common?',
        answer: 'They both become useless when you open window.'
      }, {
        question: 'How do you tell an introvert developer from and extrovert developer?',
        answer: 'An extrovert developer looks at your shoes when he talks to you.'
      }, {
        question: 'What is the programmers\'s favourite hangout place?',
        answer: 'Foo Bar'
      }, {
        question: 'Why do Python developers need glasses?',
        answer: 'Because they don\'t C#.'
      }, {
        question: 'What\'s the object-oriented way to become wealthy?',
        answer: 'Inheritance'
      }]
    }
  }
}
</script>
