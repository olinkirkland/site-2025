<template>
    <div class="app-layout">
        <Nav />
        <div class="page-container">
            <router-view name="page" v-slot="{ Component, route }">
                <component :is="Component" />
            </router-view>
        </div>
        <Footer />
    </div>
</template>

<script setup lang="ts">
import Nav from './components/TheNav.vue';
import Footer from './components/TheFooter.vue';
import { initializeI18nInstance } from './i18n/locale';

// Initialize i18n instance
initializeI18nInstance();
</script>

<style lang="scss">
@use 'assets/scss/reset.scss';
@use 'assets/scss/styles.scss';
@use 'assets/scss/variables.scss';

.app-layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    .page-container {
        flex: 1;
    }
}
</style>
