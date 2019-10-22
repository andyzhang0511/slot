<template>
  <div>
    我是作用域插槽
    <son6>
      <template slot-scope="user">
        <div v-for="item in user.data" :key="item.id">
        {{item.name}}
        </div>
      </template>
    </son6>
  </div>
</template>

<script>
import son6 from "@/components/son6";

export default {
  name: "App",
  data() {
    return {
      
    };
  },
  components: {
    son6
  }
};
</script>


<style>
</style>
