const App = {
  data: () => ({
    activeIdx: 0, // current active step idx
    resetBtn: false,
    steps: [
      {title: 'Основы', text: 'В блоке вы познакомитесь со всеми основами Vue.js на практике. На протяжении блока мы напишем реактивное приложение, в процессе разработки которого разберем вся базу фреймворка.'},
      {title: 'Компоненты', text: 'Один из самых важных блоков в курсе, где вы узнаете все о компонентах. В блоке мы напишем 2 разных приложения и создадим более 5 различных UI компонентов как в реальной разработке. Блок расскажет про абсолютно все составляющие, которые есть в компонентах: взаимодействие, slots, асинхронные и динамические компоненты и тонна примеров.'},
      {title: 'Роутер', text: 'В данном блоке вы узнаете все о том, как работает мультиязычность во Vue. Мы создадим миниклон Gmail в данном блоке, где вы на практике увидите как работать с динамическим роутером.'},
      {title: 'Vuex', text: 'В блоке вы узнаете абсолютно все про Vuex. Вы узнаете как работать с данными, какие есть лучшие практики по их программированию и структурированию. Все на практике.'},
      {title: 'Composition', text: 'Одним из наиболее важных обновлений в Vue 3 является появление альтернативного синтаксиса Composition API. В этом блоке вы узнаете все, чтобы полностью пользоваться данными синтаксисом на практических примерах. Помимо этого вы узнаете как работать совместно с Vue Router и Vuex.'},
    ]
  }),
  computed: {
    // current active step
    activeStep() {
      return this.steps[this.activeIdx]
    },
    // checking whether we`re on the first step or not
    isFirstStep() {
      return this.activeIdx === 0 ? 1 : 0
    },
    // checking whether we`re on the last step or not
    isLastStep() {
      return this.activeIdx === this.steps.length - 1 ? 1 : 0
    }
  },
  methods: {
    prevStep() {
      this.activeIdx--
    },
    nextOrFinish() {
      !this.isLastStep ? this.activeIdx++ : this.resetBtn = true
    },
    reset() {
      this.resetBtn = false, this.activeIdx = 0
    },
    setActive(idx) {
      this.activeIdx = idx
    }
  }
}

Vue.createApp(App).mount('#app')