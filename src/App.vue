<template>
  <div>
    <div>
      <select v-model="selectedLanguage" @change="changeLanguage">
        <option v-for="lang in languages" :key="lang.code" :value="lang.code">
          {{ lang.flag }} {{ lang.label }}
        </option>
      </select>
    </div>
    <router-view/>
  </div>
</template>

<script setup lang="ts">
import {ref, watch} from 'vue';
import {useI18n} from 'vue-i18n';
import {useRoute} from 'vue-router'

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
  @media only screen and (min-width: 768px) {
    position: absolute;
    transform: translate(-50%, -50%);
    font-size: 1em;
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


#magnetl {
  transform-origin: center;
}

</style>
