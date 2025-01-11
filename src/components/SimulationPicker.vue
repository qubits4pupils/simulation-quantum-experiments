<template>
  <div>
    <div class="burger-menu" @click="showMenu">
      <span></span>
      <span></span>
      <span></span>
    </div>

    <div id="menu" v-show="menu">
      <div class="simulation-link" @click="state=1;menu=false">
        <div class="subtitle">{{$t('simulation1.index')}}</div>
        {{$t('simulation1.label')}}
      </div>
      <div class="simulation-link" @click="state=2;menu=false">
        <div class="subtitle">{{$t('simulation2.index')}}</div>
        {{$t('simulation2.label')}}
      </div>
      <div class="simulation-link" @click="state=3;menu=false">
        <div class="subtitle">{{$t('simulation3.index')}}</div>
        {{$t('simulation3.label')}}
      </div>
      <div class="simulation-link" @click="state=4;menu=false">
        <div class="subtitle">{{$t('simulation4.index')}}</div>
        {{$t('simulation4.label')}}
      </div>
      <div class="simulation-link" @click="goToImpressum()">
        {{$t('imprint.label')}}
      </div>
      <div class="simulation-link close" @click="menu=false"></div>
    </div>

    <div class="simulation-picker-container">
      <keep-alive>
        <Simulation1 :is-second="false" v-if="state === 1"/>
      </keep-alive>
      <keep-alive>
        <Simulation1 :is-second="true" v-if="state === 2"/>
      </keep-alive>
      <keep-alive>
        <Simulation3 v-if="state === 3"/>
      </keep-alive>
      <keep-alive>
        <Simulation4 v-if="state === 4"/>
      </keep-alive>
    </div>

  </div>
</template>

<script lang="ts" setup>
import {ref, Ref, onMounted, watch, watchEffect} from "vue";
import Simulation1 from "@/components/Simulation1.vue";
import Simulation3 from "@/components/Simulation3.vue";
import Simulation4 from "@/components/Simulation4.vue";
import router from "@/router";

const menu = ref(false);

function showMenu(){
  menu.value = !menu.value
}

function goToImpressum(){
  router.push('/impressum')
}

const state = ref(Number(localStorage.getItem('simulation')) || 1);
watchEffect(() => {
  localStorage.setItem('simulation', String(state.value));
})

</script>

<style scoped lang="scss">

#menu{
  position: absolute;
  inset: 0;
  z-index: 1000;

  background-color: rgba(0, 0, 0, 0.85);
  display:flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  color: white;
  flex-direction: column;

  font-size: 24px;

  .simulation-link{
    display:flex;
    flex-direction: column;
    align-items: center;
    cursor:pointer;
    .subtitle{
      color: #b9b9b9;
      font-size: 18px;
    }
  }

}

.burger-menu{
  position: absolute;
  top:24px;
  left:16px;
  display:flex;
  cursor: pointer;
  flex-direction: column;
  width: 30px;
  height: 24px;
  justify-content: space-between;
  span {
    width: 100%;
    height: 6px;
    background-color: grey;
    border-radius: 4px;

    &:nth-child(1){
      //background-color: yellow;
    }
    &:nth-child(2){
      //background-color: green;
    }
    &:nth-child(3){
      //background-color: red;
    }
  }
}


.close {
  //position: absolute;
  //right: 32px;
  //top: 32px;
  width: 32px;
  height: 32px;
  //opacity: 0.3;
  position:relative;
}
.close:hover {
  opacity: 1;
}
.close:before, .close:after {
  position: absolute;
  left: 15px;
  content: ' ';
  height: 33px;
  width: 2px;
  background-color: #ffffff;
}
.close:before {
  transform: rotate(45deg);
}
.close:after {
  transform: rotate(-45deg);
}

@media (max-width: 768px) {
  .simulation-picker-container {
    padding-top: 2em;
  }
}

</style>