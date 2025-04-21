<script setup></script>

<template>
  <nav>
    <router-link to="/login"><button>авторизация</button></router-link>
    <router-link to="/signup"><button>регистрация</button></router-link>
    <router-link to="/account"><button>личный кабинет</button></router-link>
    <router-link to="/list"><button>список товаров</button></router-link>
    <router-link to="/add"><button>добавление</button></router-link>
    <router-link to="/listuser"
      ><button>список пользователей</button></router-link
    >
  </nav>
  <RouterView></RouterView>
</template>

<style scoped>
nav {
  background-color: cadetblue;
  padding: 10px 20px;
  display: flex;
  gap: 15px;
  align-items: center;
  text-decoration: none;
  justify-content: center;
}

button {
  border: 2px solid rgb(51, 69, 70);
  font-size: 20px;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: rgb(162, 182, 183);
}
</style>
