<template>
  <form @submit.prevent="postData">
    <div class="input-form-container">
      <div class="input-container">
        <label for="item">Предмет закупки</label>
        <input type="text" name="item" id="item" v-model.trim="formData.item" placeholder="Введите товар">
      </div>
      <div class="input-container">
        <label for="room">Кабинет</label>
        <input type="text" name="room" id="room" v-model.trim.number="formData.room" placeholder="Введите кабинет">
      </div>
      <div class="input-container">
        <label for="count">Количество</label>
        <input type="text" name="count" id="count" v-model.trim.number="formData.count" placeholder="Введите количество">
      </div>
    </div>
    <div class="button-container">
      <button type="submit">Добавить</button>
    </div>
  </form>
  <p>{{message}}</p>
</template>

<script>
export default {
  name: "AddForm",
  props:['saveData'],
  data() {
    return {
      formData: {
        item: '',
        room: '',
        count: '',
        date: new Date().toLocaleDateString(),
      },
      message: '',
    }
  },
  methods: {
    postData(){
      this.saveData(this.formData)
      this.formData = ''
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