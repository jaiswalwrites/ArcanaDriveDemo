<template>
  <div class="min-h-screen w-full bg-color padding-20px">
    <slot></slot>
  </div>
</template>

<style scoped>
.bg-color {
  background-color: #2c2525;
  overflow-y: hidden;
}
.padding-20px {
  padding: 20px;
  padding-left: 0;
}

@media screen and (max-width: 1024px) {
  .padding-20px {
    padding-left: 20px;
  }
}
</style>