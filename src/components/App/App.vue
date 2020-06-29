<template>
  <div>
    <div ref="printTarget">Printed!</div>
    <div>No Print.</div>
    <PrintButton :target="printTarget">Button</PrintButton>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { ThisTypedComponentOptionsWithRecordProps } from 'vue/types/options';
import PrintButton from '../PrintButton';

type Data = {
  printTarget: () => Element | Vue | Vue[] | Element[];
};
type Methods = {};
type Computed = {};
type Props = {};

const options: ThisTypedComponentOptionsWithRecordProps<
  Vue,
  Data,
  Methods,
  Computed,
  Props
> = {
  components: { PrintButton },
  data() {
    return {
      printTarget: () => this.$refs.printTarget,
    };
  },
  mounted() {
    this.printTarget = () => this.$refs.printTarget;
  },
};

export default Vue.extend(options);
</script>
