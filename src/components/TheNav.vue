<template>
    <nav>
        <ul class="select-language">
            <li>
                <button @click="onClickLanguage('en')">
                    <img src="@/assets/images/flags/us.png" alt="English" />
                </button>
            </li>
            <li>
                <button @click="onClickLanguage('de')">
                    <img src="@/assets/images/flags/de.png" alt="Deutsch" />
                </button>
            </li>
        </ul>
        <Button>
            <img src="@/assets/images/icons/download.png" alt="Download Icon" />
            {{ $t('download-resume') }}
        </Button>
    </nav>
</template>

<script setup lang="ts">
import { router } from '@/router';

function onClickLanguage(lang: string) {
    console.log(`Changing language to: ${lang}`);
    router.push({ name: 'home', params: { locale: lang } });
}
</script>

<style scoped lang="scss">
nav {
    background-color: blue;

    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 1rem;
    gap: 1rem;

    ul.select-language {
        display: flex;

        li button {
            background: transparent;
            border: none;
            cursor: pointer;
            padding: 0;
            height: 2.4rem;

            img {
                height: 100%;
                width: 100%;
                object-fit: cover;
            }

            &:hover {
                opacity: 0.8;
            }
        }
    }
}
</style>
