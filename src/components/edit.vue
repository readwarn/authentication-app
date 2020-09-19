<template>
     <div class="edit-cont">
             <navbar @click="display=!display" :username="user.username" />
             <div class="profile-container">
                 <profile :display='display' />
             </div>
             <div class="back"><router-link to="/"><i class="fa fa-chevron-left"> back</i></router-link></div>
             <div class="edit-form">
                 <p class="title">Change Info</p>
                 <p class="subtitle">Changes will be reflected to every services</p>
                 <div class="photo">
                     <div>
                        <i class="fa fa-camera"></i>
                     </div>
                     <p>CHANGE PHOTO</p>
                 </div>
                    <input-field title="name" placeholder="Enter your name" v-model="user.username"/>
                    <input-field title="Bio" placeholder="Enter your bio" textarea="true" v-model="user.bio" />
                    <input-field title="Phone" placeholder="Enter your phone" v-model="user.phone" />
                    <input-field title="email" placeholder="Enter your email" v-model="user.email" />
                    <input-field title="password" placeholder="Enter your new password"  v-model="user.password" />
                    <button class="save" @click="save">save</button>
             </div>
     </div>
</template>

<script>
/* eslint-disable */
import profile from './profile.vue'
import nav from './nav.vue'
import inputField from './inputfield.vue'
import axios from 'axios'
import router from '../router'
export default {
   data(){
        return{
            display:false,
            user:{
                username:'',
                bio:'',
                phone:'',
                email:'',
                password:''
            }
        }
    }, 
     methods:{
      save(){
          const self=this;
          axios.post('http://localhost:3000/user',self.user,{withCredentials: true,}).then((response)=>{
             router.push('/');
          })
      },
   },
   created(){
           const self=this;
           axios.get('http://localhost:3000/user',{withCredentials: true,}).then((response)=>{
            if(!response.data.isLoggedIn){
                console.log(response);
                router.push('/login');
            }else{
                 console.log(response.data.user)
                 self.user=response.data.user;
            }
        });
    },
   components:{
       'profile':profile,
       'navbar':nav,
       'inputField':inputField
   }
}
</script>

<style scoped>
 div.edit-cont{
      padding: 75px 0;
      background: #050505;
      min-height: 100vh;
      color: white;
 }
 div.edit-form{
     border: 1.5px solid #BDBDBD;
     width: 55%;
     margin: auto;
     border-radius: 0.4rem;
     padding: 1rem 2rem;
     background: #2a2158;
 }
 div.back{
     width: 55%;
     margin: auto;
     display: flex;
     align-items: baseline;
     margin-bottom: 0.6rem;
 }
 div.back i{
    cursor: pointer;
    color: white;
 }
 div.back a{
     z-index: 50;
 }
 div.back i:hover{
     color:#826ee7;
 }
 div.back i{
     margin-right: 0.4rem;
 }
 div.photo{
     display: flex;
     align-items: center;
     margin: 1.5rem 0rem;
     color: gray;
     font-size: 0.9rem;
 }
 p.title{
    font-weight: 700;
    margin: 0;
 }
 p.subtitle{
     color: gray;
     font-size: 0.7rem;
     margin: 0.3rem 0rem;
 }
 div.photo div{
     margin-right: 0.5rem;
     width: 50px;
     height: 50px;
     display: flex;
     align-items: center;
     justify-content: center;
     border-radius: 0.3rem;
     background: url(https://images.unsplash.com/photo-1599638352687-763d660c197d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60);
     background-size:100% 100%;
     color: white;
     font-size: 1.1rem;
 }
 button.save{
     text-align: center;
     color: white;
     background: #07031a;
     border: none;
     width: 65px;
     padding: 0.4rem 0rem;
     border-radius: 0.3rem;
     cursor: pointer;
 }
  button.save:hover{
    background: #2D9CDB;
  }
 div.profile-container{
     position: fixed;
     padding: 0rem 0.3rem;
     left: 0;
     width: 100%;
     box-sizing: border-box;
     display: flex;
     justify-content: flex-end;
     top: 65px;
 }
 
@media only screen and (max-width: 720px) {
       div.edit-form,div.back{
            width: 95%;
       }
}
@media only screen and (min-width: 720px) {
       div.edit-form,div.back{
            width: 75%;
       }
}
@media only screen and (min-width: 1000px) {
       div.edit-form,div.back{
            width: 55%;
       }
}

</style>