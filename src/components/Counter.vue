<template>
  <div>
    <p>{{ counter }}</p>
    <button @click="increment">+</button>
    <div v-for="item in doneTodos" :key="item.id">{{ item.text }}</div>
    <div v-for="user in getUsers" :key="user.name">{{ user.name }}</div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  name: "Counter",
  computed: {
    counter() {
      return this.$store.state.count;
    },
    ...mapGetters(["doneTodos", "getUsers"]),
  },
  methods: {
    ...mapMutations(["increment"]),
    ...mapActions(["increment", "fetchData"]),
  },
  mounted() {
    this.fetchData();
  },
};
</script>
