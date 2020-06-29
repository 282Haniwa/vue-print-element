<template>
  <div>
    <button @click="handleClick">
      <slot>Button</slot>
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { ThisTypedComponentOptionsWithRecordProps } from 'vue/types/options';
import { printElement, PrintOptions, PrintTarget } from 'print-element';

type Data = {
  printTarget: PrintTarget;
};
type Methods = {
  handleClick: () => void;
};
type Computed = {};
type Props = {
  printOptions?: PrintOptions;
  target?: PrintTarget;
};

const options: ThisTypedComponentOptionsWithRecordProps<
  Vue,
  Data,
  Methods,
  Computed,
  Props
> = {
  props: {
    printOptions: {
      type: Object,
      default: () => ({
        debug: false,
        pageStyle: {},
      }),
      required: false,
    },
    target: {
      type: [String, Function],
      default: '',
      required: false,
    },
  },
  data() {
    const target =
      typeof this.target === 'function'
        ? () => (this.target as () => Element)()
        : (this.target as PrintTarget);
    return {
      printTarget: target,
    };
  },
  methods: {
    handleClick() {
      printElement(this.printTarget as PrintTarget, {
        pageStyle: this.printOptions?.pageStyle,
        debug: this.printOptions?.debug,
        onBeforePrint: this.printOptions?.onBeforePrint,
        onAfterPrint: this.printOptions?.onAfterPrint,
      });
      this.$emit('click');
    },
  },
};

export default Vue.extend(options);
</script>
