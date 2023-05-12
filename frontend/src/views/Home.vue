<template>
  <div class="bg-gray-100 min-h-screen">
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-4xl font-bold text-center text-blue-600 mb-8">Quotes</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <QuoteCard
          v-for="quote in quotes"
          :key="quote._id"
          :quote="quote"
          class="bg-white rounded-lg shadow-md p-6"
        >
          <blockquote class="text-xl italic font-serif mb-4 leading-relaxed">
            <q>{{quote.text}}</q>
          </blockquote>
          <footer class="text-right text-gray-700 font-medium">
            - {{quote.author}}
          </footer>
        </QuoteCard>
      </div>
    </div>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Merriweather&display=swap");

blockquote {
  font-family: 'Merriweather', serif;
  position: relative;
  padding-left: 1.5rem;
}

blockquote::before {
  content: open-quote;
  position: absolute;
  left: 0;
  top: -0.25rem;
  font-size: 3rem;
  font-weight: bold;
  color: #e5e7eb;
}
</style>


<script>
import { useQuotesStore } from '../stores/quotes';
import QuoteCard from '../components/QuoteCard.vue';

export default {
  components: {
    QuoteCard,
  },
  async created() {
    const quotesStore = useQuotesStore();
    await quotesStore.fetchQuotes();
  },
  computed: {
    quotes() {
      const quotesStore = useQuotesStore();
      return quotesStore.quotes;
    },
  },
};
</script>
