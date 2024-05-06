<template>
  <div class="md:flex flex-col justify-center items-center bg-slate-300 grow">
    <div :class="{
        'text-green-500':result===balancedMessage ,
        'text-red-500':result===UnbalancedMessage}">
        {{result}}
    </div>
    <input @input="createDebounceBalance()" id="description"  v-model="description"/>
  </div>
</template>
<script  >
export default {
    data() { 
      return {
        balancedMessage: "The text is balanced.",
        UnbalancedMessage: "The text is not balanced.",
        description:'',
        result:'',
        timeout:null
      }
    },

    methods: {
        createDebounceBalance() {
            clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
                this.isBalanced();
            }, 500);
        },
        isTextBalanced(str) { 
            const stack = []; 
            const pairs = { 
                "(": ")", 
                "[": "]", 
                "{": "}", 
            }; 

            for (let char of str) { 
                if (pairs[char]) { 
                    stack.push(char); 
                } else if ( 
                    char === ")" || 
                    char === "]" || 
                    char === "}"
                ) { 
                    if ( 
                        pairs[stack.pop()] !== 
                        char 
                    ) { 
                        return false; 
                    } 
                } 
            } 

            return stack.length === 0; 
        } ,
        isBalanced(){
            const isValid=this.isTextBalanced(this.description)
            if(isValid){
                this.result=this.balancedMessage
            }
            else{
                this.result=this.UnbalancedMessage
            }
        }
    }
  }

</script>