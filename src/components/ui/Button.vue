<template>
    <button :class="buttonClasses" :disabled="disabled">
        <div class="btn__shadow"></div>
        <div class="btn__content"><slot /></div>
    </button>
</template>

<script setup lang="ts">
defineOptions({ name: 'BaseButton' });

import { computed } from 'vue';

const props = defineProps<{
    mini?: boolean;
    icon?: boolean;
    primary?: boolean;
    danger?: boolean;
    disabled?: boolean;
    fullWidth?: boolean;
    fullWidthMobile?: boolean;
    pressed?: boolean;
    square?: boolean;
}>();

const buttonClasses = computed(() => ({
    btn: true,
    'btn--mini': props.mini,
    'btn--icon': props.icon,
    'btn--disabled': props.disabled,
    'btn--primary': props.primary,
    'btn--danger': props.danger,
    'btn--square': props.square,
    pressed: props.pressed || props.disabled,
    'full-width': props.fullWidth,
    'full-width-mobile': props.fullWidthMobile
}));
</script>

<style lang="scss" scoped>
// base styles
button {
    position: relative;
    background: transparent;
    flex-shrink: 0;
}

.btn__content {
    position: relative;
    top: -0.2rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    height: 3.2rem;
    padding: 0 1.2rem;
    border-radius: 5px;
    background: var(--background);
    border: 1px solid var(--surface-border);
    cursor: pointer;
    transition: all 0.1s ease-in-out;
}

.btn__shadow {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    background: var(--surface-border);
}

button.pressed > .btn__content,
.btn__content:active,
.btn__content:focus {
    top: 0;
    filter: brightness(0.95);
    transition: none;
}

// Modifiers
.btn--primary .btn__content {
    background: var(--primary);
    border-color: var(--primary-alt);
    * {
        color: var(--background);
    }
}
.btn--primary .btn__shadow {
    background: var(--primary-alt);
}

.btn--danger .btn__content {
    background: var(--danger);
    border-color: var(--danger-alt);
    * {
        color: var(--background);
    }
}
.btn--danger .btn__shadow {
    background: var(--danger-alt);
}

.btn--icon .btn__content {
    width: 3.2rem;
    height: 3.2rem;
    background: transparent;
    border: none;
    top: 0;
    justify-content: center;
}
.btn--icon .btn__shadow {
    background: transparent;
}

.btn--mini .btn__content {
    padding: 0.2rem;
    height: unset;
    width: unset;
}

.btn--square {
    width: 3.65rem;
}
.btn--square > .btn__content {
    padding: 0;
    justify-content: center;
}

.btn--disabled {
    pointer-events: none;
    opacity: 0.4;
}
.btn--disabled .btn__shadow {
    background: transparent;
}

.full-width > .btn__content {
    justify-content: center;
}

:deep(img) {
    height: 2rem;
    width: 2rem;
    object-fit: contain;
}

@media (max-width: 768px) {
    .full-width-mobile {
        width: 100%;
    }
    .full-width-mobile > .btn__content {
        justify-content: center;
    }
}
</style>
