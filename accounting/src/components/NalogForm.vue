<template>
  <form @submit.prevent="postData">
    <div class="input-form-container">
      <div class="input-container">
        <label for="item">УНП</label>
        <input type="text" name="item" id="data" v-model.trim="data" placeholder="Введите УНП">
      </div>
    </div>
    <div class="button-container">
      <button type="submit">Добавить</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "AddForm",
  components: {},
  props: ['saveData'],
  data() {
    return {
      data: '',
    }
  },
  computed: {

  },
  methods: {
    postData() {
      this.saveData(this.data)
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