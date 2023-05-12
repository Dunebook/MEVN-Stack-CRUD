import { defineStore } from 'pinia';
import axios from 'axios';

const API_URL = 'http://localhost:3000/quotes';

export const useQuotesStore = defineStore({
  id: 'quotes',
  state: () => ({
    quotes: [],
    currentQuote: null,
  }),
  actions: {
    async fetchQuotes() {
      const response = await axios.get(API_URL);
      this.quotes = response.data;
    },
    async fetchQuote(id) {
      const response = await axios.get(`${API_URL}/get/${id}`);
      this.currentQuote = response.data;
    },
    async addQuote(quote) {
      await axios.post(`${API_URL}/new`, quote);
      await this.fetchQuotes();
    },
    async updateQuote(quote) {
      await axios.patch(`${API_URL}/update/${quote._id}`, quote);
      await this.fetchQuotes();
    },
    
    async deleteQuote(id) {
      await axios.delete(`${API_URL}/delete/${id}`);
      this.quotes = this.quotes.filter((quote) => quote._id !== id);
      if (this.currentQuote?._id === id) {
        this.currentQuote = null;
      }
    },
  },
});
