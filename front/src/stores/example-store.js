import { defineStore } from 'pinia';
import { io } from "socket.io-client";
const URL = "http://localhost:3000";
const socket = io(URL);

export const useCounterStore = defineStore('counter', {
  state: () => ({
    counter: 0,
    user:{},
    socket:socket,
    showSocket:true,
    isLoggedIn:!!localStorage.getItem('tokenPanico'),
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    increment() {
      this.counter++;
    },
  },
});
