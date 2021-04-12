<template>
  <li class>
    <ul v-if="typeof node === 'object'">
      <li v-for="key in Object.keys(node)" :key="key">
        {{ key }} : {{ typeof node[key] !== 'object' ? node[key] : '' }}
        <ul v-if="typeof node[key] === 'object'">
          <base-tree-node :node="node[key]" />
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
