<template>
    <Nav />
    <div class="app-layout">
        <router-view name="page" v-slot="{ Component, route }">
            <component :is="Component" />
        </router-view>
    </div>
    <footer>FOOTER</footer>
</template>

<script setup lang="ts">
import Nav from './components/TheNav.vue';
import { initializeI18nInstance } from './i18n/locale';

// Initialize i18n instance
initializeI18nInstance();
</script>

<style lang="scss">
@use 'assets/scss/reset.scss';
@use 'assets/scss/styles.scss';
@use 'assets/scss/variables.scss';
</style>
