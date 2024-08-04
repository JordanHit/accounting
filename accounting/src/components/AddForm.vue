<template>
  <form @submit.prevent="postData">
    <div class="input-form-container">
      <div class="input-container" v-if="this.$route.path !== '/refill'">
        <label for="item" v-if="this.$route.path !== '/repair'">Предмет закупки</label>
        <label for="item" v-if="this.$route.path !== '/'">Предмет ремонта</label>
        <input type="text" name="item" id="item" v-model.trim="formData.item" placeholder="Введите предмет">
      </div>
      <div class="input-container">
        <label for="room">Кабинет</label>
        <input type="text" name="room" id="room" v-model.trim.number="formData.room" placeholder="Введите кабинет">
      </div>
      <div class="input-container">
        <label for="count">Количество</label>
        <input type="text" name="count" id="count" v-model.trim.number="formData.count"
               placeholder="Введите количество">
      </div>
      <div class="date-container">
        <vue-date-picker v-model="formData.date" class="date"
                         :enable-time-picker="false"
                         :start-date="new Date()"
                         locale="ru"
                         cancelText="Отменить"
                         selectText="Применить"
                         placeholder="Выберите дату"
                         id="datePicker"></vue-date-picker>
      </div>
    </div>
    <div class="button-container">
      <button type="submit">Добавить</button>
    </div>
  </form>
  <p>{{ message }}</p>
</template>

<script>
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

export default {
  name: "AddForm",
  components: {VueDatePicker},
  props: ['saveData'],
  data() {
    return {
      formData: {
        item: '',
        room: '',
        count: '',
        date: '',
      },
      message: '',
    }
  },
  computed: {
    shouldHide() {
      const path = this.$route.path;
      return path.includes('/repair') || path.includes('/refill');
    }
  },
  methods: {
    postData() {
      this.formData.date = new Intl.DateTimeFormat("ru", {dateStyle: "short"}).format(this.formData.date)
      this.saveData(this.formData)
      this.formData.item = ''
      this.formData.room = ''
      this.formData.count = ''
      this.formData.date = ''
    },
  }
}
</script>

<style scoped lang="scss">
form {

  .input-form-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 30px;

    .input-container {
      display: flex;
      flex-direction: column;

      label {
        margin-bottom: 5px;
        font-size: 16px;
        font-weight: 500;
        color: var(--blue);
      }

      input {
        width: 450px;
        height: 40px;
        font-size: 14px;
        font-weight: 400;
        border-radius: 10px;
        outline: none;
        border: 1px solid #399cd0;
        color: black;
        caret-color: var(black);
        padding: 0 10px;
      }
    }
    .date-container{
      width: 300px;
      margin-top:4px;
    }
  }

  .button-container {
    button {
      width: 150px;
      height: 40px;
      border-radius: 10px;
      background-color: var(--blue);
      border: 0;
      color: var(--white);
      font-size: 16px;
      font-weight: 500;
      transition: 0.3s;
    }

    button:hover {
      background-color: #225d80;
    }
  }
}
</style>