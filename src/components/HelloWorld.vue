<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <ul>
      <li v-for="student in students" :key="student.id">
        {{student.first_name}}{{student.last_name}}
      </li>
    </ul>
  </div>
</template>

<script>
import api from '@/services/api'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: () => ({
    students: []
  }),
  mounted () {
    api.service('students').find({}).then(
      result => {
        this.students = result.data
      }
    )
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
