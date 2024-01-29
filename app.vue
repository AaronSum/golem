<script lang="ts" setup>
useHead({
    title: '86GPT - 86Links',
    meta: [
        { name: 'description', content: '86GPT @86links' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=1' },
    ],
})
const { isMobileSafari } = useDevice()
</script>

<template>
    <div
        relative
        overflow-hidden
        h-100vh w-screen
        :class="[
            isMobileSafari && '!h-100dvh',
        ]"
    >
        <NuxtLayout>
            <NuxtPage h-full />
        </NuxtLayout>
    </div>
</template>

<style>
body {
    @apply dark:bg-dark-4 light:bg-#FAFAFB transition;
    margin: 0;
    /* background-color: #f9fafb; */
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none !important;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

/** Dark mode scrollbar */
    html.dark ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
    }
    html.dark ::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0.2);
        border-radius: 4px;
    }
    html.dark ::-webkit-scrollbar-thumb:hover {
        background: rgba(255, 255, 255, 0.4);
    }
    html.dark ::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 0.1);
        border-radius: 4px;
    }
</style>
