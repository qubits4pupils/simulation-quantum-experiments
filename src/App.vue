<template>
    <router-view/>
</template>

<script setup lang="ts">
console.log('App Version 0.9.1')
</script>

<style lang="scss">

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

  &.spin{
    #electrono, #electronu {
      opacity: 0.5;
    }

    #electron {
      opacity: 0;
    }

    &.down{
      #electron, #electrono {
        opacity: 0;
      }

      #electronu {
        opacity: 1;
      }
    }
    &.up{
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
