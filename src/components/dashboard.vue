<template>
    <div class="dashboard">
         <navbar @click="display=!display" :username="user.username" />
         <div class="profile-container">
              <profile :display='display' />
         </div>
         <div class="heading">
             <h3>Personal Profile...</h3>
             <p>Basic info, like your name and photo</p>
         </div>
         <div class="profile-cont">
            <div class="profile-head mb">
             <div>
                 <p class="title">Profile</p>
                 <p class="option">Some info may be visible to other people</p>
             </div>
             <router-link to="/edit"><button class="edit">Edit</button></router-link>
           </div>
         <div class="row mb">
             <p class="key">PHOTO</p>
             <img src="https://images.unsplash.com/photo-1599638352687-763d660c197d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" alt="id">
         </div>
          <div class="row mb">
             <p class="key">NAME</p>
             <p>{{user.username}}</p>
         </div>
         <div class="row mb">
             <p class="key">BIO</p>
             <p>{{user.bio}}</p>
         </div>
         <div class="row mb">
             <p class="key">PHONE</p>
             <p>{{user.phone}}</p>
         </div>
         <div class="row">
             <p class="key">EMAIL</p>
             <p>{{user.email}}</p>
         </div>
    </div>
    </div>
</template>

<script>
import axios from 'axios'
import nav from './nav.vue'
import profile from './profile.vue'
import router from '../router'
/* eslint-disable */
export default {
    data(){
        return{
            display:false,
            user:{
                username:'',
                bio:'',
                phone:'',
                email:''
            }
        }
    },
    created(){
        const self=this;
        axios.get('http://localhost:3000/user',{withCredentials: true,}).then((response)=>{
            if(!response.data.isLoggedIn){
               
                router.push('/login');
            }else{
                
                 self.user=response.data.user;
            }
        })
    },
    methods:{
   
    },
    components:{
        'navbar':nav,
        'profile':profile
    }
}
</script>

<style scoped>
div.dashboard p,h3{
    margin: 0;
}
div.dashboard{
    padding: 75px 0;
    position: relative;
    background: #050505;
    min-height: 100vh;
    color: white;
}
div.heading{
    text-align: center;
    margin: 1.5rem 0rem;
}
div.heading h3{
    font-size: 1.5rem;
}
div.heading p{
    font-size: 0.85rem;
    color: gray;
}
div.profile-cont{
    border: 1.5px solid white;
    border-radius: 0.4rem;
    width: 55%;
    background: #2a2158;
    margin: auto;
}

div.profile-head{
    display: flex;
    justify-content: space-between;
    padding: 1.4rem;
    align-items: center;
}
p.option{
    font-size: 0.75rem;
    color: gray;
}
p.title{
    font-weight: 700;
}
button.edit{
    outline: none;
    border: 1.5px solid black;
    border-radius: 10px;
    color: black;
    cursor: pointer;
    box-sizing: border-box;
    padding: 0.4rem 0.8rem;
}
button.edit:hover{
    background:#282051;
    color: white;
}
div.row{
    display: flex;
    padding: 1.2rem;
    align-items: center;
    flex-wrap: wrap;
}
div.row img{
    width: 50px;
    height: 50px;
    border-radius: 0.3rem;
}
div.row p:nth-child(1){
    width: 35%;
    color: gray;
    font-size: 0.78rem;
}
div.row p:nth-child(2){
    font-size: 0.8rem;
    max-width: 65%;
}
.mb{
    border-bottom: 1.3px solid #BDBDBD;
}
div.profile-container{
     position: absolute;
     margin-top: 10px;
     left: 0;
     width: 100%;
     box-sizing: border-box;
     display: flex;
     justify-content: flex-end;
     z-index: 5;
 }
 @media only screen and (max-width: 720px) {
      div.profile-cont{
          width: 95%;
      }
      div.row{
          justify-content: space-between;
      }
}
@media only screen and (min-width: 720px) {
      div.profile-cont{
          width: 75%;
      }
}
@media only screen and (min-width: 1000px) {
      div.profile-cont{
          width: 55%;
      }
}
</style>
