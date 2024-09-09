<template>
  <div class="wrapper-input">
    <input
      v-bind="$attrs"
      @blur="blurHandler"
      :value="modelValue"
      @input="updateValue"
      class="custom-input"
      :class="!isValid && 'custom-input--error'"
    />
    <span v-if="!isValid" class="custom-input__error">{{ error }}</span>
  </div>
</template>

<script>
export default {
  name: 'CustomInput',
  data() {
    return {
      isValid: true,
      error: '',
      isFirstInput: true,
    };
  },
  inject: {
    form: {
      default: null,
    },
  },
  inheritAttrs: false,
  props: {
    modelValue: {
      type: String,
      default: '',
    },
    errorMessage: {
      type: String,
      default: '',
    },
    rules: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    attrs() {
      return {
        ...this.$attrs,
        input: (event) => this.updateValue(event),
      };
    },
  },
  watch: {
    modelValue() {
      if (this.isFirstInput) return;
      this.validate();
    },
  },
  mounted() {
    if (!this.form) return;
    this.form.registerInput(this);
  },
  beforeUnmount() {
    if (!this.form) return;
    this.form.unRegisterInput(this);
  },
  methods: {
    validate() {
      this.isValid = this.rules.every((rule) => {
        const { hasPassed, message } = rule(this.modelValue);
        if (!hasPassed) {
          this.error = message || this.errorMessage;
        }
        return hasPassed;
      });
      return this.isValid;
    },
    blurHandler() {
      if (this.isFirstInput) {
        this.validate();
      }
      this.isFirstInput = false;
    },
    updateValue(event) {
      this.$emit('update:modelValue', event.target.value);
    },
    reset() {
      this.isFirstInput = true;
      this.isValid = true;
      this.$emit('update:modelValue', '');
    },
  },
};
</script>