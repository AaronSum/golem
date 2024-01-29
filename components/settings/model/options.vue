<script lang="ts" setup>
const { maxTokens } = useSettings()

const maxTokensInput = syncStorageRef(maxTokens)
</script>

<template>
    <div>
        <div
            mt-5 sm:mt-10
            font-bold text-color mb-6
            text-14px sm:text-5
        >
            其他
        </div>
        <div
            flex="~ col" gap-1
            text-11px sm:text-4
        >
            <div text-color font-bold>
                Max Tokens
            </div>
            <GoInput
                v-model="maxTokensInput"
                mt-2
                text-11px sm:text-4
                placeholder="Maximum tokens"
                w-full text-gray-5 dark:text-gray-1
            />
        </div>
    </div>
</template>
