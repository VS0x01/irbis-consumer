<template>
  <div>
    <ul>
      <base-tree-node :node="root"></base-tree-node>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'BaseTree',
  props: {
    root: Object
  }
}
</script>
