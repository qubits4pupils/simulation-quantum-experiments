<template>
  <div>
    <div class="burger-menu" @click="showMenu">
      <span></span>
      <span></span>
      <span></span>
    </div>

    <div id="menu" v-show="menu">
      <div class="simulation-link" @click="goToSimulation(1)">
        <div class="subtitle">{{ $t('simulation1.index') }}</div>
        {{ $t('simulation1.label') }}
      </div>
      <div class="simulation-link" @click="goToSimulation(2)">
        <div class="subtitle">{{ $t('simulation2.index') }}</div>
        {{ $t('simulation2.label') }}
      </div>
      <div class="simulation-link" @click="goToSimulation(3)">
        <div class="subtitle">{{ $t('simulation3.index') }}</div>
        {{ $t('simulation3.label') }}
      </div>
      <div class="simulation-link" @click="goToSimulation(4)">
        <div class="subtitle">{{ $t('simulation4.index') }}</div>
        {{ $t('simulation4.label') }}
      </div>
      <div class="simulation-link" @click="goToImpressum()">
        {{ $t('imprint.label') }}
      </div>
      <div class="simulation-link close" @click="menu=false"></div>
    </div>

    <div>
      <select v-model="selectedLanguage" @change="changeLanguage">
        <option v-for="lang in languages" :key="lang.code" :value="lang.code">
          {{ lang.flag }} {{ lang.label }}
        </option>
      </select>
    </div>
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" :state="state"/>
      </keep-alive>
    </router-view>
  </div>
</template>

<script setup lang="ts">
import {ref, watch, watchEffect} from 'vue';
import {useI18n} from 'vue-i18n';
import {useRoute} from 'vue-router'
import router from "@/router";

// Set up the current i18n context
const {locale} = useI18n();
const route = useRoute()

// Define the languages and their associated flags
const selectedLanguage = ref(locale.value); // Default to current locale

// Watch for changes in the 'lang' query parameter
watch(
    () => route.query.lang,
    (newLang) => {
      if (newLang) {
        locale.value = (newLang as string)
        selectedLanguage.value = (newLang as string)
      }
    },
    {immediate: true}
)


const languages = [
  {code: 'en', label: 'English', flag: '🇺🇸'},
  {code: 'de', label: 'German', flag: '🇩🇪'},
  // Add more languages and flags as needed
];

// Change the language when a selection is made
const changeLanguage = () => {
  locale.value = selectedLanguage.value; // Update the locale of vue-i18n
};


const menu = ref(false);

function showMenu() {
  menu.value = !menu.value
}

function goToImpressum() {
  router.push('/impressum')
  menu.value = false
}

function goToSimulation(num = 1) {
  state.value = num
  router.push('/')
  menu.value = false
}

const state = ref(Number(localStorage.getItem('simulation')) || 1);
watchEffect(() => {
  localStorage.setItem('simulation', String(state.value));
})

console.log('App Version 0.9.3')
</script>

<style lang="scss">
select {
  position: absolute;
  top: 8px;
  right: 8px;
  border-radius: 8px;
  padding: 4px 8px;
  border: 1px solid #ccc;
  background-color: white;
  color: black;
  font-size: 14px;
  user-select: none;

  /* Space around the text and increase font size for better readability */
  option {
    padding: 10px;
    font-size: 16px;
  }

  /* Adjusting the appearance when disabled */
  &[disabled=true] {
    cursor: not-allowed;
    background-color: #f5f5f5;
  }

  /* Hover effect */
  &:hover {
    border-color: #888;
  }

  /* Focus effect for accessibility */
  &:focus {
    outline: none;
    border-color: #4f8a8b;
  }
}


body {
  min-width: fit-content;
  touch-action: manipulation;
}

.simulation1 {

}

button {
  min-width: 100px;
  min-height: 50px;
}

#simulation {
  max-height: 80vh;
  /*max-width: 1200px;*/
  background-color: #ececec;
}

.absoluteButton {
  width: 100%;
  font-size: larger;
  margin-bottom: 4px;
}

.absoluteButton {
  @media only screen and (min-width: 768px) {
    position: absolute;
    transform: translate(-50%, -50%);
    font-size: 1em;
    width: initial;
    margin-bottom: 0;
  }
}

button {
  border-radius: 8px;
  color: black;
  user-select: none;

  &:not([disabled=true]) {
    cursor: pointer;
  }

  &[disabled=true] {
    cursor: not-allowed;
  }
}

button:disabled {
  cursor: not-allowed;
  opacity: 0.3;
}

button.red {
  background-color: #ff5858;
}

button.black {
  background-color: black;

  color: white;
}

body {
  touch-action: manipulation;
  font-family: Arial;
}

#electronGroup {
  #electrono, #electronu, #electron {
    transition: opacity 0.5s
  }

  #electrono, #electronu {
    opacity: 0;
  }

  #electron {
    opacity: 1;
  }

  &.deceased {
    opacity: 0;
  }

  &.spin {
    #electrono, #electronu {
      opacity: 0.5;
    }

    #electron {
      opacity: 0;
    }

    &.down {
      #electron, #electrono {
        opacity: 0;
      }

      #electronu {
        opacity: 1;
      }
    }

    &.up {
      #electron, #electronu {
        opacity: 0;
      }

      #electrono {
        opacity: 1;
      }
    }
  }


}


#menu {
  position: absolute;
  inset: 0;
  z-index: 1000;

  background-color: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  color: white;
  flex-direction: column;

  font-size: 24px;

  .simulation-link {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;

    .subtitle {
      color: #b9b9b9;
      font-size: 18px;
    }
  }

}

.burger-menu {
  position: absolute;
  top: 24px;
  left: 16px;
  display: flex;
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

    &:nth-child(1) {
      //background-color: yellow;
    }

    &:nth-child(2) {
      //background-color: green;
    }

    &:nth-child(3) {
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
  position: relative;
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

#magnetl {
  transform-origin: center;
}

.spreadButton {
  width: 100%;
  margin: 5px 0;
  @media (max-width: 768px) {
    font-size:larger;
  }
}

</style>
