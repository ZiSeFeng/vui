import Timer from "./src/timer.vue";

Timer.install = (Vue) => {
  Vue.component(Timer.name, Timer);
};

export default Timer;
