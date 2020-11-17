<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          SpaceFinders Website
        </h1>

        <p class="subheading font-weight-regular">
          This page is under construction,
          <br>please stand by. :)
        </p>
        <ul>
          <li v-for="s in students" :key="s.id">
            {{s.first_name}}
          </li>
        </ul>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import api from '@/services/api'
export default {
  name: 'HelloWorld',
  data: () => ({
    students: []
  }),
  mounted () {
    console.log('mounted just started')
    api.service('students').find({}).then(
      result => {
        console.log('api request just returned', result)
        this.students = result.data
      }
    )
  }
}
</script>
