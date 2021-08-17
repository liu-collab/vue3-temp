<template>
  <div>
    <h2>login</h2>
    <ElButton type="danger">login</ElButton>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ElButton } from 'element-plus';
export default defineComponent({
  components: {
    ElButton
  },
  setup() {
    return {};
  }
});
</script>

<style scoped></style>
