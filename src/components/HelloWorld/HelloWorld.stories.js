import HelloWorld from './HelloWorld.vue'

export default {
  title: 'Components/HelloWorld',
  component: HelloWorld,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { HelloWorld },
  template: '<HelloWorld />',
});

export const Base = Template.bind({});
