import { createStore } from 'vuex';

const store = createStore({
  state: () => {
    return {
      name: 'Vuex'
    };
  }
});
export default store;
