<template>
    <div class="bg-white shadow rounded p-4">
      <div class="text-lg font-semibold mb-2">{{ quote.content }}</div>
      <div class="text-sm text-gray-500">- {{ quote.author }}</div>
      <div class="mt-4">
        <router-link
          :to="`/quote/${quote._id}`"
          class="text-blue-500 hover:text-blue-700"
        >
          View Details
        </router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      quote: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  