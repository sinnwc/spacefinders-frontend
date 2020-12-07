<script>
import ddForm from 'vue-dd-form'
export default {
  components: { ddForm },
  data: () => ({
    usernameset: {},
    exampleUsernames: {
      name: { view: 'text', label: 'Username' },
      studentemail: { view: 'text', label: 'Student e-mail' },
      classtimes: {
        view: 'checkbox',
        label: 'Check Your Class Time',
        options: [
          'MWF',
          'TuThu',
          'MWThuF',
          'MWThu',
          'TuWThur'
        ]
      }
    }
  })
}
</script>

<template>
  <dd-form
    :data="usernameset"
    :descriptions="exampleUsernames"
    @submit="submit">
  </dd-form>
</template>
