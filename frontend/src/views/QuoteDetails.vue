<template>
    <div class="container mx-auto p-4">
      <h1 class="text-4xl font-semibold mb-4">{{ quote.content }}</h1>
      <h2 class="text-2xl font-semibold mb-4">- {{ quote.author }}</h2>
      <div class="flex space-x-4">
        <router-link to="/">Go back</router-link>
        <router-link
          :to="`/edit/${quote._id}`"
          class="text-blue-500 hover:text-blue-700"
        >
          Edit
        </router-link>
        <button
          @click="deleteCurrentQuote"
          class="text-red-500 hover:text-red-700"
  >
    Delete
  </button>
</div>

  
</div>
</template>
<script>
import { ref, onMounted } from 'vue';
import { useQuotesStore } from '../stores/quotes';
import { useRouter } from 'vue-router';

export default {
  setup(props, { emit }) {
    const quote = ref({});
    const router = useRouter();
    const quotesStore = useQuotesStore();
    const routeId = router.currentRoute.value.params.id;

    const fetchQuote = async () => {
      await quotesStore.fetchQuote(routeId);
      quote.value = quotesStore.currentQuote;
    };

    const deleteCurrentQuote = async () => {
      await quotesStore.deleteQuote(routeId);
      router.push('/');
    };

    const updateOne = async () => {
      await quotesStore.updateOneQuote(routeId);
      router.push('/');
    };

    onMounted(fetchQuote);

    return { quote, deleteCurrentQuote, updateOne };
  },
};
</script>

