<template>
   <div class="nav">
         <router-link to="/">
              <div class="brand">
                    <i class="fab fa-airbnb"></i>
                    <p class="brand">devChallenges</p>
              </div>
         </router-link>
         <div class="avatar">
             <img src="https://images.unsplash.com/photo-1599638352687-763d660c197d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" alt="avatar">
             <p>{{username}}</p>
             <i class="fa fa-caret-right" @click="rotateCaret" :class="{'rotate':rotate}"></i>
         </div>
   </div>
</template>

<script>
/* eslint-disable */
export default {
     props:['username'],
     data(){
         return{
            rotate:false
         }
     },
     methods:{
         rotateCaret(){
             this.rotate=!this.rotate;
             this.$emit('click');
         }
     }
}
</script>

<style scoped>
   div.nav{
       display: flex;
       justify-content: space-between;
       align-items: center;
       margin: auto;
       position: fixed;
       top: 0;
       left: 0;
       width: 100%;
       box-sizing: border-box;
       padding: 0.5rem 1.3rem;
       background: #050505;
       z-index: 90;
   }
   div.brand{
       display: flex;
       align-items: center;
       cursor: pointer;
   }
   div.brand i{
       color: coral;
       font-size: 1.1rem;
       cursor: pointer;
       margin-right: 0.1rem;
   }
   p.brand{
       color: white;
       font-size: 0.8rem;
       cursor: pointer;
   }
   div.avatar{
       display: flex;
       align-items: center;
   }
   div.avatar p{
       margin: 0rem 0.5rem;
       font-size: 0.75rem;
       cursor: pointer;
   }
   div.avatar i{
      font-size: 1.3rem;
      cursor: pointer;
      transition: all ease-in-out 0.3s;
   }
   div.avatar i.rotate{
       transform: rotate(90deg);
   }
   div.avatar img{
       width: 35px;
       height: 35px;
       border-radius: 0.3rem;
       cursor: pointer;
   }
   a{
       text-decoration: none;
   }
</style>