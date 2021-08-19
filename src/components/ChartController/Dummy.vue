<template>
    <div>
        <p style="font-family: monospace">dummy: {{ JSON.stringify(chartOptions) }}</p>
        <p>Typecheck: {{ chartOptions.view }}</p>
    </div>
</template>

<script lang="ts">
import { defineComponent, inject } from '@vue/composition-api';
import { ChartOptionsKey } from './ChartController.vue';

export default defineComponent({
    name: 'Dummy',
    setup() {
        const chartOptions = inject(ChartOptionsKey);
        if (!chartOptions) {
            throw new Error('Could not resolve chartOptions');
        }
        return {
            chartOptions,
        };
    },
});
</script>

<style scoped></style>
