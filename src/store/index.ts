import { createStore } from 'vuex';

const store = createStore({
  state: () => {
    return {
      name: 'jack'
    };
  }
});
export default store;
