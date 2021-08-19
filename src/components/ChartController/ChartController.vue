<template>
    <div class="chart-controller">
        <h1>{{ title }}</h1>
        <button @click="() => setActiveView(view)" v-for="view in views" :key="view">
            {{ view }}
        </button>
        <p>active: {{ activeView }}</p>
        <slot />
    </div>
</template>

<script lang="ts">
import { defineComponent, provide, reactive, ref, InjectionKey } from '@vue/composition-api';
import { array, string } from 'vue-types';

interface ChartOptions {
    view: string;
}

export const ChartOptionsKey: InjectionKey<ChartOptions> = Symbol('ChartOptions');

export default defineComponent({
    name: 'ChartController',
    props: {
        title: string().isRequired,
        views: array<string>().isRequired,
    },
    setup(props) {
        const activeView = ref(props.views[0]);
        const chartOptions = reactive({
            view: activeView,
        });

        const setActiveView = (toSet: string) => {
            activeView.value = toSet;
        };

        provide(ChartOptionsKey, chartOptions);
        return {
            setActiveView,
            activeView,
        };
    },
});
</script>

<style scoped></style>
