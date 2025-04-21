<script setup>
import { ref } from 'vue';

const name=ref('');
const password=ref('');

const regName = /^[А-Я][а-я]{3,9}$/;
const regPassword = /^[А-Яа-я0-9!?]{4,10}$/;

const spanName=ref('');
const snanPassword=ref('');

const spanSignUp=ref('');

function handleSubmit() {
  spanName.value = '';
  snanPassword.value = '';

  let isValid = true;

  if (!name.value) {
    spanName.value = 'Заполните это поле';
    isValid = false;
  } else if (!regName.test(name.value)) {
    spanName.value = 'Имя должно начинаться с заглавной и быть от 4 до 10 букв.';
    isValid = false;
  }

  if (!password.value) {
    snanPassword.value = 'Заполните это поле';
    isValid = false;
  } else if (!regPassword.test(password.value)) {
    snanPassword.value = 'Пароль должен быть от 4 до 10 символов и включать буквы, цифры, ! или ?';
    isValid = false;
  }

  if (isValid) {
    console.log(' Пользователь создан:', name.value);
    spanSignUp.value='Вы успешно зарегистрировались';
    name.value='';
    password.value='';
  }
}


</script>

<template>
  <div class="register">
    <h2>Регистрация</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="username">Имя:</label>
        <input type="text" placeholder="Введите ваше имя" v-model="name"/>
        <span>{{ spanName }}</span>
      </div>

      <div class="form-group">
        <label for="password">Пароль:</label>
        <input placeholder="Введите пароль" v-model="password"/>
        <span>{{ snanPassword }}</span>
      </div>
      <button type="submit" @click="handleSubmit">Создать пользователя</button>
    </form>
    <span>{{ spanSignUp }}</span>
  </div>
</template>

<style scoped>
.register {
  width: 300px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 15px;
}

input {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
}

button {
  padding: 10px 15px;
  background-color: cadetblue;
  color: white;
  border: none;
  cursor: pointer;
}

span {
  color: red;
  font-size: 12px;
}
</style>
