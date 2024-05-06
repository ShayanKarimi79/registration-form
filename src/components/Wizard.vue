<template>
  <div class="grow md:flex items-center justify-center  bg-slate-400 ">
    <figure class=" bg-slate-100 rounded-xl p-5 dark:bg-slate-300 w-80">
            <div class="pb-5 text-gray-800"><span  class="text-lg">Step: </span> {{steps[stepIndex]}}</div>
    
            <div class="text-gray-900 md:flex flex-col gap-y-3">
                <div>{{error}}</div>
                <div class="md:flex w-full items-center" v-if="stepIndex===0 ">
                    <div class="mr-2" for="username">Username:</div>
                    <input class="px-2 py-1 rounded-md" placeholder="Username"   v-model="username" type="text" name="username" id="username"/>
                </div>
               <div class="md:flex items-center" v-if="stepIndex===1 ">
                    <div class="mr-2" for="email">Email:</div>
                    <input class="px-2 py-1 rounded-md w-full" placeholder="Email"   v-model="email" type="text" name="email" id="email"/>
               </div>    
            </div>
    

            <div v-if="stepIndex===2" class="text-gray-900 md:flex flex-col gap-y-3">
                <div class="md:flex w-full">
                    <span class="mr-2">Username: </span>    
                    <span class="text-gray-600">{{username}}</span>    
                </div>
                <div class="md:flex w-full"> 
                    <span class="mr-2">Email: </span>    
                    <span class="text-gray-600">{{email}}</span> 
                </div>
            </div>
    
            
            <div class="md:flex justify-between mt-6 w-full">
                <button id="btn-prev" class="bg-orange-500 py-1 px-2 rounded-lg" :class="{'bg-orange-400':stepIndex===0}"
                 :disabled="stepIndex===0" @click="stepIndex-=1">Prev</button>
    
                <button class="bg-green-500 py-1 px-2 rounded-lg" :class="{'bg-green-400':stepIndex===2}"
                 :disabled="stepIndex===2" type="submit" @click="submitForm" id="btn-next">Next</button>
            </div>
       </figure>
  </div>
  
</template>
<script  setup>
import {computed, ref} from 'vue'

const stepIndex=ref(0)
const steps=['username','email','review']
const email=ref('')
const username=ref('')
const error=ref('')

const usernameIsValid=computed(()=>{
  return  (username.value && username.value.length>3 && username.value.length<21 && !username.value.includes(' '))
})

const isEmailValid=computed(()=> {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email.value);
})
const submitForm=(e) => {
    error.value ='';
    if(stepIndex.value===0){
        if( usernameIsValid.value){
        stepIndex.value+=1
      }
      else{
        error.value='Invalid Username.'
      }
    }
    else if(stepIndex.value===1){
      if( isEmailValid.value){
        stepIndex.value+=1
      }
      else{
        error.value='Invalid email address.'
      }
    }
      if(error.value) return true;
      e.preventDefault();
    }

</script>
<style lang="scss">

</style>