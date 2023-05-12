<template>
  <div class="container mx-auto p-4">
    <h1 class="text-4xl font-semibold mb-4">Add a new quote</h1>
    <form @submit.prevent="submitQuote" class="bg-white rounded-lg shadow-md p-6">
      <div class="mb-4">
        <label for="content" class="block text-gray-700 font-medium">Quote:</label>
        <input
          v-model="content"
          type="text"
          id="content"
          class="block w-full mt-1 bg-gray-100 border border-gray-300 rounded p-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
        />
      </div>
      <div class="mb-4">
        <label for="author" class="block text-gray-700 font-medium">Author:</label>
        <input
          v-model="author"
          type="text"
          id="author"
          class="block w-full mt-1 bg-gray-100 border border-gray-300 rounded p-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
        />
      </div>
      <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
        Submit
      </button>
    </form>
  </div>
</template>

  
  <script>
  import { useQuotesStore } from '../stores/quotes';
  
  export default {
    data() {
      return {
        content: '',
        author: '',
      };
    },
    methods: {
      async submitQuote() {
        const quotesStore = useQuotesStore();
        await quotesStore.addQuote({ content: this.content, author: this.author });
        this.$router.push('/');
      },
    },
  };
  </script>
  