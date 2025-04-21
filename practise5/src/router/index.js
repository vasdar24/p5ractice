import { createRouter, createWebHistory } from "vue-router";
import LogIn from "../components/LogIn.vue";
import ProductsList from "../components/ProductsList.vue";
import SignUp from "../components/SignUp.vue";
import AddProduct from "../components/AddProduct.vue";
import PersonalAccount from "../components/PersonalAccount.vue";
import UserList from "../components/UserList.vue";

const routes = [
  { path: "/login", component: LogIn },
  { path: "/list", component: ProductsList },
  { path: "/signup", component: SignUp },
  { path: "/add", component: AddProduct },
  { path: "/account", component: PersonalAccount },
  { path: "/listuser", component: UserList }, // без "s" в конце
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
