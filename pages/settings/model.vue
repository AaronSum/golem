<script lang="ts" setup>
const { modelUsed } = useSettings()

const options = [
    { value: 'ERNIE-Bot-4', label: 'ERNIE-Bot-4', icon: 'i-tabler-brand-openai' },
    { value: 'ERNIE-Bot', label: 'ERNIE-Bot', icon: 'i-tabler-brand-openai' },
] as const

function onClick(model: string) {
    modelUsed.value = model
}
</script>

<template>
    <div>
        <div
            font-bold text-color
            mb-3 sm:mb-6
            text-14px sm:text-5
        >
            模型
        </div>
        <div flex gap-3>
            <div
                v-for="option in options"
                :key="option.value"
                grow flex flex-col items-center p-2
                rounded-2 ring-1
                cursor-pointer
                class="dark:ring-white/10 ring-gray-2"
                text-gray-5
                dark:text-gray-3 gap-2
                text-11px sm:text-4
                :class="[
                    modelUsed === option.value ? '!ring-primary-400 !dark:ring-primary-400 ring-2 !text-primary-600 dark:!text-primary-400' : '',
                ]"
                @click="onClick(option.value)"
            >
                <div :class="option.icon" text-5 sm:text-6 />
                <div>{{ option.label }}</div>
            </div>
        </div>
        <SettingsModelOptions />
    </div>
</template>
