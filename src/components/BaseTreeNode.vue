<template>
  <li class>
    <ul v-if="typeof node === 'object'">
      <li v-for="(v, k) in node" :key="k">
        {{ k }} : {{ typeof v !== 'object' ? v : '' }}
        <ul v-if="typeof v === 'object'">
          <base-tree-node :node="v" />
        </ul>
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  name: 'BaseTreeNode',
  props: {
    node: Object
  }
}
</script>
