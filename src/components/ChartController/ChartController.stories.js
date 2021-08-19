import ChartController from './ChartController.vue'
import Dummy from './Dummy.vue'

export default {
  title: 'Components/ChartController',
  component: ChartController,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ChartController, Dummy },
  template: `
  <ChartController v-bind="$props">
    <Dummy />
  </ChartController>`,
});

export const Base = Template.bind({});
Base.args = {
  views: ['1', '2'],
  title: 'ChartController Title',
};