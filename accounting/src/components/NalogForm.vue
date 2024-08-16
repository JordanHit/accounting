<template>
  <form @submit.prevent="postData">
    <div class="input-form-container">
      <div class="input-container" v-if="formType === 'true'">
        <label for="item">УНП</label>
        <input type="text" name="item" id="data" v-model.trim="data"  placeholder="Введите УНП">
      </div>
      <div class="input-container" v-if="formType === 'false'">
        <label for="item">Название</label>
        <input type="text" name="item" id="data" v-model.trim="data" placeholder="Введите название организации">
      </div>
    </div>
    <div class="button-container">
      <button type="submit">Поиск</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "AddForm",
  components: {},
  props: ['saveData','formType','saveNameData'],
  data() {
    return {
      data: '',
    }
  },
  computed: {

  },
  methods: {
    postData() {
      this.formType === 'true' ? this.saveData(this.data) : this.saveNameData(this.data)
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