<template>
     <div class="form-cont">
         <div class="form">
         <div class="head">
            <i class="fab fa-airbnb"></i> <p>devChallenges</p>
         </div>
         <p class="announce">
             Join thousands of learners from around the world
         </p>
         <p class="announce2">
             Master web development by making real-life projects. There are multiple paths for you to choose
         </p>
         <div class="input-field">
            <i class="fa fa-envelope"></i>
            <input type="text" placeholder="Username" v-model="username">
         </div>
         <div class="input-field">
            <i class="fa fa-lock"></i>
            <input type="text" placeholder="Password" v-model="password">
         </div>
         <button @click="register">Start coding now</button>
         <p class="option">continue with these social profile</p>
         <div class="social-icons">
            <a href="http://localhost:3000/auth/google" target="_self"><i class="fab fa-google"></i></a>
            <a href="http://localhost:3000/auth/facebook" target="_self"><i class="fab fa-facebook-square"></i></a>
            <a href="#" target="_self"><i class="fab fa-twitter"></i></a>
            <a href="http://localhost:3000/auth/github" target="_self"><i class="fab fa-github"></i></a>
         </div>
         <p class="option">Already a member? <router-link to="/login">Login</router-link></p>
    </div>
     </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios'
export default {
     data(){
        return{
            username:'',
            password:''
        }
     },
     methods:{
         register(){
             const self=this;
             const user={
                 username:this.username,
                 password:this.password
             }
             axios.post('http://localhost:3000/auth/register',user).then((response)=>{
                 console.log(response)
             })
         }
     }
}
</script>

<style scoped>
div.form-cont{
       display: flex;
       justify-content: center;
       align-items: center;
       min-height: 100vh;
       background: #050505;
       color: white;
       padding: 20px 0;
   }
div.form{
    padding: 2rem;
    border-radius: 20px;
    width: 32%;
    margin: auto;
    background: #2a2158;
    border: 1.5px solid rgb(5, 5, 5);
}
div.head{
    display: flex;
    align-items: center;
}
div.head p{
    color: white;
    font-size: 0.85rem;
}
div.head i{
    margin-right: 0.1rem;
    color: tomato;
    font-size: 1.2rem;
}
p.announce{
    font-weight: 700;
}
p.option{
    font-size: 0.85rem;
    color: rgb(202, 196, 196);
    text-align: center;
}
p.option a{
    text-decoration: none;
    color: tomato;
}
div.input-field{
    border: 1.7px solid black;
    border-radius: 0.4rem;
    width: 100%;
    height: 45px;
    display: flex;
    align-items: center;
    background: rgb(241, 238, 238);
    margin-bottom: 2rem;
}
div.input-field input{
    width: 89%;
    height: 92%;
    outline: none;
    border: none;
    font-size: 1rem;
    border-radius: 0.4rem;
    background: transparent;
}
div.input-field i{
    margin: 0rem 1rem;
    color: rgb(71, 67, 67);
}
button{
    background: #2F80ED;
    border: none;
    color: white;
    border-radius: 0.4rem;
    padding: 0.8rem;
    width: 100%;
    text-align: center;
    cursor: pointer;
}
button:hover{
    color: #2F80ED;
    background: white;
}
div.social-icons{
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    margin-top:1rem;
}
div.social-icons i{
    border: 1.2px solid white;
    border-radius: 100%;
    padding: 0.5rem;
    cursor: pointer;
}
div.social-icons a:nth-child(1){
    text-decoration: none;
    color: rgb(235, 60, 60);
}
div.social-icons a:nth-child(2){
    text-decoration: none;
    color: rgb(64, 194, 233);
}
div.social-icons a:nth-child(3){
    text-decoration: none;
    color: rgb(65, 83, 240);
}
div.social-icons a:nth-child(4){
    text-decoration: none;
    color: black;
}
div.social-icons i:hover{
     filter: brightness(1.7);
}
p.announce2{
    font-size: 0.85rem;
    color:gray;
}
@media only screen and (max-width: 720px) {
      div.form{
         width: 90%;
      } 
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 720px) {
      div.form{
           width: 65%;
      }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 1000px) {
       div.form{
          width: 40%;
       }
}
</style>
