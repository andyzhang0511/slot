<template>
  <div class="sonn">
    <div>我是son组件</div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "slotOne1",
  data() {
    return {

    };
  }
};
</script>

<style lane="" scoped>
.sonn{
  color: blueviolet;
}
</style>
