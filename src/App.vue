<script setup>
import { ref } from 'vue'
import handleChange from './components/handleChange';
import handleSubmit from './components/handleSubmit'
import handleValidation from './components/handleValidation'
import handleDeletion from './components/handleDeletion'
import gitDataOverview from './components/gitDataOverview.vue';

let answer = {
  first_name: '',
  last_name: '',
  email: '',
  betreff: '',
  message: '',
}

let emailValidated = ref({ value: 'notCheckedYet' })
let messageCharCount = ref({ value: 0 })
let formSubmitted = ref({ value: 'waitingForSubmission' })



</script>

<template>
  <header>
  </header>

  <main>
    <form class="form_container" @submit.prevent="handleSubmit(answer, emailValidated, messageCharCount, formSubmitted)">
      <h1 class="title">Contact us</h1>
      <div class="form_details">
        <input placeholder="First Name" v-model="answer.first_name"
          v-on:input="handleChange(answer, 'first_name', answer.first_name)" />
        <input placeholder="Last Name" v-model="answer.last_name"
          v-on:input="handleChange(answer, 'last_name', answer.last_name)" />
      </div>
      <input class="email" placeholder="email" v-model="answer.email"
        v-on:input="handleChange(answer, 'email', answer.email), handleValidation('email', answer.email, emailValidated)" />
      <p v-if="emailValidated.value === 'notValidated'" class="notValidated">
        Your email is not correct, please review it
      </p>

      <p v-else v-if="emailValidated.value === 'validated'" class="validated">
        Your email has been validated
      </p>
      <input class="betreff" placeholder="Topic" v-model="answer.betreff"
        v-on:input="handleChange(answer, 'betreff', answer.betreff)" />
      <textarea class="message" placeholder="Message" v-model="answer.message"
        v-on:input="handleChange(answer, 'message', answer.message), handleValidation('message', answer.message, messageCharCount)"></textarea>
      <p v-if="messageCharCount.value === 'notValidated'" class="notValidated">
        Your message is too long
      </p>

      <p v-else v-if="messageCharCount.value === 'validated'" class="validated">
        Your message length is perfect!
      </p>
      <button type="submit">Submit</button>
      <button @click.prevent="handleDeletion(answer, emailValidated, messageCharCount, formSubmitted)">Reset</button>
      <p v-if="formSubmitted.value === 'submitted'" class="validated">
        Your message has been successfully submitted to our services, we will come back to you as soon as possible
      </p>
      <p v-if="formSubmitted.value === 'notSubmitted'" class="notValidated">
        Your message has not been submitted. Double check the for or contact the admin of the website
      </p>
    </form>
    <gitDataOverview />
  </main>
</template>
