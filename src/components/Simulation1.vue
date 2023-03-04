<template>
  <div class="simulation1">
    <h1 style="text-align: center">Simulation {{ isSecond ? '2' : '1' }}: {{ isSecond ? 'Statistischer Charakter' : 'Messprozess' }}</h1>
    <div class="container">
      <div class="left">
        <button class="absoluteButton" id="screenButton" :disabled="currentlyAnimatedElectrons !== 0" @click="toggleScreen">Schirm<br/> ein-/ ausblenden</button>
        <button class="absoluteButton red" id="shootButton" :disabled="currentlyAnimatedElectrons > 20 || disableButtons" @click="shootSingleElectron">Elektron erzeugen</button>
        <button v-if="isSecond" class="absoluteButton red" :disabled="currentlyAnimatedElectrons > 20 || disableButtons" id="shoot100Button" @click="shoot100Electrons">
          100 Elektronen <br/>erzeugen
        </button>
        <button class="absoluteButton" id="spinButton" @click="toggleSpin">Elektronenspin {{ spinVisible ? 'ausblenden' : 'anzeigen' }}<br>(theoretisch)</button>
        <div :style="{'visibility': loading ? 'hidden' : 'visible'}">
          <svg id="simulation" width="100%" height="100%" viewBox="0 0 12859 7580" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
               xml:space="preserve" xmlns:serif="http://www.serif.com/"
               style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;"><path id="screen" d="M12195.5,695.591l-1756.95,610l-0,4139.29l1756.95,697.143l0,-5446.43Z" style="fill:#e5e5e5;stroke:#000;stroke-width:23.37px;"/>
            <path id="pathUpScreen" d="M2136.14,3394.68c-0,-0 3985.03,-0 5014.15,-0c158.935,-0 316.675,-27.465 466.257,-81.183c835.436,-300.019 3700.49,-1328.91 3700.49,-1328.91"
                  style="fill:none;"/>
            <path id="pathStraightScreen" d="M2136.14,3390.19l9180.9,-0" style="fill:none;"/>
            <path id="pathDownScreen" d="M2136.14,3390.19c-0,-0 3985.03,-0 5014.15,-0c158.935,-0 316.675,27.465 466.257,81.182c835.436,300.02 3700.49,1328.91 3700.49,1328.91"
                  style="fill:none;"/>
            <path id="pathUp" d="M2136.14,3394.68c-0,-0 3985.03,-0 5014.15,-0c158.935,-0 316.675,-27.465 466.257,-81.183c1042.28,-374.3 5333.63,-1915.4 5333.63,-1915.4"
                  style="fill:none;"/>
            <path id="pathStraight" d="M2136.14,3390.19l10814,-0" style="fill:none;"/>
            <path id="pathDown" d="M2136.14,3390.19c-0,-0 3985.03,-0 5014.15,-0c158.935,-0 316.675,27.465 466.257,81.182c1042.28,374.3 5333.63,1915.4 5333.63,1915.4"
                  style="fill:none;"/>
            <g id="magnet"><rect id="rect195" x="6964.82" y="2323.43" width="1368.27" height="405.926" style="fill:#d40000;stroke:#000;stroke-width:18.89px;"/>
              <rect id="rect197" x="6964.82" y="4333.72" width="1368.27" height="405.926" style="fill:#d43837;stroke:#000;stroke-width:18.89px;"/>
              <path id="path199" d="M5280.99,3819.51l1210.82,369.76l1381.78,-0l-1692.59,-532.084l-900.008,162.324Z" style="fill:#c3c3c3;stroke:#000;stroke-width:18.89px;"/>
              <path id="path201" d="M5279.51,2199.55l894.677,278.034l6.806,1179.6l-901.483,162.593l0,-1620.23Z" style="fill:#c3c3c3;stroke:#000;stroke-width:18.89px;"/>
              <rect id="rect203" x="6964.82" y="4333.72" width="1368.27" height="405.926" style="fill:#03458f;stroke:#000;stroke-width:18.89px;"/>
              <path id="path205"
                    d="M4812.72,4082.44l-0,-2435.56l1672.76,525.858l-0.093,-0l0,405.898l-1205.88,-379.084l0,1619.51l1.475,0.445l-1.475,0.269l1211.63,369.491l-5.751,-0l0,403.969l-1672.66,-510.8Z"
                    style="fill:#c3c3c3;stroke:#000;stroke-width:18.89px;"/>
              <path id="path207" d="M6485.39,2578.64l0,-405.898l0.093,-0l479.337,150.689l0,405.926l-479.43,-150.717Z" style="fill:#d40000;stroke:#000;stroke-width:18.89px;"/>
              <path id="path209" d="M6485.48,2172.74l-1672.76,-525.858l1368.27,-0l1672.76,525.858l-1368.27,-0Z" style="fill:#c3c3c3;stroke:#000;stroke-width:18.89px;"/>
              <path id="path211" d="M6485.48,2172.74l1368.27,-0l479.337,150.689l-1368.27,-0l-479.337,-150.689Z" style="fill:#d40000;stroke:#000;stroke-width:18.89px;"/>
              <path id="path213" d="M6964.82,4333.72l-473.016,-144.454l1381.78,-0l459.507,144.454l-1368.27,-0Z" style="fill:#03458f;stroke:#000;stroke-width:18.89px;"/>
              <path id="path215" d="M6485.39,4189.27l5.751,-0l473.679,144.454l0,405.926l-479.43,-146.411l0,-403.969Z" style="fill:#03458f;stroke:#000;stroke-width:18.89px;"/>
              <path id="path217"
                    d="M7517.2,4629.18c-0.121,-5.289 1.681,-9.594 5.415,-12.934c3.734,-3.331 8.327,-5.001 13.77,-5.001c6.208,-0 11.651,3.525 16.338,10.577c6.451,9.557 12.22,16.042 17.28,19.438c10.765,7.052 26.402,10.568 46.913,10.568c19.633,0 37.866,-4.212 54.707,-12.646c21.519,-10.819 32.284,-25.859 32.284,-45.111c-0,-15.857 -9.047,-28.383 -27.158,-37.568c-15.32,-7.924 -34.253,-12.201 -56.79,-12.832c-20.006,-0.761 -37.035,-5.103 -51.095,-13.027c-17.98,-10.197 -26.971,-24.792 -26.971,-43.794c0,-22.398 12.79,-42.847 38.37,-61.348c24.432,-17.499 49.695,-26.239 75.779,-26.239c12.286,-0 26.15,2.078 41.6,6.226c20.511,5.409 30.771,12.331 30.771,20.765c0,11.078 -5.695,16.617 -17.094,16.617c-5.069,0 -13.929,-1.355 -26.588,-4.064c-12.669,-2.709 -22.481,-3.999 -29.445,-3.869c-19.755,0.251 -36.531,5.094 -50.329,14.539c-14.182,9.687 -21.277,21.452 -21.277,35.295c0,10.447 9.373,17.805 28.11,22.082c6.965,1.643 20.455,3.155 40.462,4.537c28.997,2.134 51.655,11.199 67.992,27.177c14.947,14.604 22.415,32.409 22.415,53.424c0,29.951 -13.929,53.861 -41.787,71.731c-24.189,15.485 -52.233,23.224 -84.143,23.224c-23.171,-0 -44.382,-4.408 -63.633,-13.213c-23.545,-10.828 -35.513,-25.673 -35.896,-44.554Z"
                    style="fill:#fff;fill-rule:nonzero;"/>
              <path id="magnetN"
                    d="M7764.02,2630.62c-0,6.04 -1.009,16.107 -3.034,30.201c-2.026,12.711 -8.804,19.067 -20.324,19.067c-6.965,-0 -15.264,-4.528 -24.88,-13.593c-51.543,-48.452 -110.676,-118.354 -177.408,-209.718l-0.943,42.847l-0.57,43.042c0,10.439 0.215,26.11 0.663,47.004c0.439,20.886 0.663,36.622 0.663,47.19c-0,33.847 -6.582,50.78 -19.755,50.78c-6.964,0 -12.472,-2.208 -16.524,-6.606c-3.669,-3.906 -5.508,-8.564 -5.508,-13.973c-0,-5.289 0.411,-13.277 1.232,-23.975c0.822,-10.698 1.242,-18.687 1.242,-23.976c-0,-7.793 0.252,-19.465 0.756,-35.016c0.504,-15.541 0.756,-27.213 0.756,-35.016c0,-8.304 -0.186,-20.858 -0.569,-37.652c-0.374,-16.803 -0.57,-29.356 -0.57,-37.66c0,-7.933 -0.756,-19.726 -2.278,-35.397c-1.521,-15.671 -2.277,-27.464 -2.277,-35.397c-0,-5.79 2.502,-11.069 7.506,-15.857c4.994,-4.778 10.661,-7.172 16.991,-7.172c6.712,0 15.012,7.302 24.889,21.897c31.527,46.939 59.889,85.954 85.086,117.037c30.015,36.872 62.933,72.111 98.773,105.708c0.373,-5.41 0.373,-13.398 -0,-23.966l-0.57,-23.79c0,-55.243 -2.156,-99.231 -6.46,-131.947c-0.504,-3.275 -2.213,-9.881 -5.125,-19.818c-2.54,-8.564 -3.8,-15.226 -3.8,-20.014c0,-14.594 6.712,-21.896 20.128,-21.896c22.032,-0 33.049,40.833 33.049,122.51c-0,13.974 -0.187,34.831 -0.57,62.573c-0.373,27.752 -0.569,48.61 -0.569,62.583Z"
                    style="fill:#fff;fill-rule:nonzero;"/></g>
            <g id="electronGroup"><g id="electrono"><path id="path222" d="M389.274,249.233l-158.026,-0l186.922,-249.233l186.923,249.233l-158.026,-0l-0,725.009c-0,15.948 -12.949,28.896 -28.897,28.896c-15.948,0 -28.896,-12.948 -28.896,-28.896l-0,-725.009Z" style="fill:#326f56;"/><g
                id="g238"><use id="use224" xlink:href="#_Image1" x="0" y="0" width="120px" height="120px" transform="matrix(4.41167,0,0,4.41167,153.47,373.214)"/>
              <g id="g236"><path id="path226" d="M323.734,490.807c-0,22.336 3.609,42.815 3.609,66.166c-0,5.074 4.116,9.19 9.189,9.19c5.074,-0 9.19,-4.116 9.19,-9.19c-0,-23.351 -3.609,-43.83 -3.609,-66.166c-0,-5.073 -4.116,-9.194 -9.19,-9.194c-5.073,0 -9.189,4.121 -9.189,9.194Z" style="fill:#000101;"/>
                <path id="path228"
                      d="M473.272,525.072c-0.075,1.399 -0.322,6.962 0.106,8.991c0.15,0.706 0.348,1.359 0.587,1.968c-0.071,1.447 -0.115,3.468 0.101,4.394c0.141,0.613 0.326,1.191 0.556,1.729c-0.044,0.962 -0.106,2.546 -0.106,3.19c-0,4.262 0.798,8.153 0.798,12.834c0,5.069 4.121,9.189 9.194,9.189c5.074,0 9.19,-4.12 9.19,-9.189c-0,-4.681 -0.803,-8.572 -0.803,-12.834c-0,-1.844 0.229,-5.537 -0.229,-7.579c-0.115,-0.512 -0.261,-0.997 -0.424,-1.447c0.071,-1.456 0.119,-3.552 -0.101,-4.505c-0.164,-0.728 -0.397,-1.403 -0.68,-2.025c0.08,-1.244 0.225,-3.732 0.212,-5.077c-0.018,-1.774 -0.282,-3.353 -0.693,-4.659c0.084,-0.98 0.314,-3.816 0.314,-4.787c-0,-7.27 0.798,-14.042 0.798,-21.251c0,-5.073 -4.116,-9.194 -9.189,-9.194c-5.074,0 -9.19,4.121 -9.19,9.194c0,7.209 -0.803,13.981 -0.803,21.251c0,1.271 -0.375,3.653 -0.335,5.51c0.035,1.619 0.3,3.084 0.697,4.297Z"
                      style="fill:#000101;"/>
                <path id="path230"
                      d="M504.418,676.847c-0.525,0.821 -6.803,10.57 -8.382,12.15c-4.932,4.932 -17.797,20.055 -21.82,24.074c-3.878,3.882 -22.91,18.864 -26.651,21.719c-13.05,9.961 -30.789,9.026 -39.749,9.026c-9.101,0 -34.588,-4.61 -36.939,-5.391c-4.376,-1.46 -16.416,-6.017 -30.524,-16.932c-7.518,-5.815 -8.66,-16.835 -8.66,-22.372c-0,-2.263 0.158,-4.429 0.586,-6.317c0.159,-0.697 0.578,-1.712 0.746,-2.104c4.098,-2.436 5.682,-7.668 3.516,-12.005c-2.268,-4.535 -7.795,-6.374 -12.331,-4.107c-3.498,1.747 -6.33,4.787 -8.196,9.026c-1.8,4.094 -2.7,9.6 -2.7,15.507c-0,9.269 3.211,27.181 15.789,36.913c16.601,12.838 30.811,18.114 35.964,19.83c2.717,0.905 32.214,6.331 42.749,6.331c11.536,0 34.102,0.031 50.902,-12.794c4.006,-3.057 24.343,-19.177 28.499,-23.329c4.019,-4.023 16.888,-19.146 21.816,-24.079c1.99,-1.985 7.557,-8.66 10.711,-14.505c2.021,-3.746 3.031,-7.376 3.031,-10.01c0,-5.069 -4.12,-9.19 -9.189,-9.19c-4.862,0 -8.846,3.781 -9.168,8.559Z"
                      style="fill:#000101;"/>
                <path id="path232"
                      d="M165.042,627.661c-5.069,4.505 -11.179,8.06 -15.203,13.518c-4.063,5.514 -5.995,13.107 -9.189,19.57c-3.83,7.751 -9.94,18.674 -13.787,26.946c-3.445,7.412 -7.058,15.896 -9.304,22.685c-1.941,5.868 -2.673,12.066 -4.169,18.061c-1.818,7.289 -4.919,17.056 -6.737,25.663c-1.813,8.585 -3.242,17.263 -4.173,25.985c-0.962,9.039 -2.246,18.829 -1.601,28.235c0.692,10.155 3.847,21.815 5.774,32.721"
                      style="fill:none;stroke:#000101;stroke-width:14.56px;"/>
                <path id="path234"
                      d="M673.725,633.114c5.488,2.016 16.46,6.049 20.907,12.931c5.356,8.28 8.585,25.054 11.232,36.762c2.479,10.994 3.917,22.244 4.628,33.494c0.772,12.255 0.22,26.69 -0,40.035c-0.239,14.228 -0.168,33.291 -1.421,45.335c-0.953,9.163 -4.01,18.714 -6.097,26.951c-1.91,7.544 -4.914,17.487 -6.414,22.455"
                      style="fill:none;stroke:#000101;stroke-width:14.56px;"/></g></g></g>
              <g id="electronu"><path id="path241" d="M286.782,1019.12l-0,-725.009c-0,-15.948 12.948,-28.897 28.896,-28.897c15.948,0 28.897,12.949 28.897,28.897l-0,725.009l158.026,-0l-186.923,249.233l-186.927,-249.233l158.031,-0Z" style="fill:#326f56;"/>
                <g id="g257"><use id="use243" xlink:href="#_Image2" x="0" y="0" width="120px" height="120px" transform="matrix(4.41167,0,0,4.41167,50.9782,365.741)"/>
                  <g id="g255"><path id="path245" d="M223.029,488.129c-0,22.336 3.609,42.815 3.609,66.166c-0,5.074 4.12,9.194 9.193,9.194c5.069,0 9.19,-4.12 9.19,-9.194c-0,-23.351 -3.609,-43.83 -3.609,-66.166c0,-5.073 -4.12,-9.189 -9.194,-9.189c-5.069,-0 -9.189,4.116 -9.189,9.189Z" style="fill:#000101;"/>
                    <path id="path247"
                          d="M372.567,522.399c-0.071,1.398 -0.318,6.961 0.11,8.991c0.146,0.701 0.344,1.359 0.582,1.963c-0.066,1.451 -0.11,3.468 0.102,4.398c0.141,0.614 0.326,1.187 0.556,1.725c-0.04,0.967 -0.106,2.55 -0.106,3.19c-0,4.262 0.803,8.157 0.803,12.834c-0,5.073 4.116,9.189 9.189,9.189c5.074,0 9.194,-4.116 9.194,-9.189c0,-4.677 -0.803,-8.572 -0.803,-12.834c0,-1.844 0.23,-5.532 -0.234,-7.579c-0.114,-0.512 -0.255,-0.993 -0.423,-1.447c0.07,-1.456 0.119,-3.552 -0.097,-4.505c-0.168,-0.723 -0.397,-1.398 -0.684,-2.02c0.084,-1.249 0.225,-3.737 0.212,-5.082c-0.018,-1.769 -0.283,-3.353 -0.693,-4.659c0.084,-0.979 0.313,-3.812 0.313,-4.782c0,-7.275 0.803,-14.043 0.803,-21.256c0,-5.069 -4.12,-9.189 -9.189,-9.189c-5.074,-0 -9.194,4.12 -9.194,9.189c-0,7.213 -0.803,13.981 -0.803,21.256c-0,1.27 -0.371,3.648 -0.335,5.505c0.035,1.624 0.304,3.084 0.697,4.302Z"
                          style="fill:#000101;"/>
                    <path id="path249"
                          d="M403.713,674.174c-0.525,0.816 -6.803,10.57 -8.378,12.145c-4.932,4.932 -17.801,20.055 -21.82,24.079c-3.878,3.878 -22.914,18.864 -26.651,21.718c-13.049,9.957 -30.793,9.022 -39.749,9.022c-9.101,0 -34.592,-4.606 -36.939,-5.386c-4.376,-1.461 -16.415,-6.018 -30.528,-16.937c-7.518,-5.81 -8.656,-16.83 -8.656,-22.371c-0,-2.259 0.154,-4.43 0.587,-6.313c0.158,-0.702 0.578,-1.717 0.741,-2.105c4.103,-2.435 5.682,-7.672 3.516,-12.004c-2.268,-4.535 -7.791,-6.379 -12.331,-4.112c-3.498,1.752 -6.33,4.791 -8.192,9.031c-1.8,4.09 -2.705,9.595 -2.705,15.503c0,9.273 3.212,27.184 15.794,36.912c16.601,12.842 30.811,18.114 35.96,19.83c2.717,0.909 32.214,6.336 42.753,6.336c11.537,-0 34.098,0.031 50.902,-12.794c4.006,-3.057 24.339,-19.178 28.495,-23.334c4.023,-4.019 16.888,-19.142 21.82,-24.074c1.985,-1.99 7.553,-8.665 10.707,-14.51c2.021,-3.745 3.031,-7.372 3.031,-10.006c0,-5.073 -4.116,-9.189 -9.189,-9.189c-4.862,-0 -8.846,3.781 -9.168,8.559Z"
                          style="fill:#000101;"/>
                    <path id="path251"
                          d="M64.337,624.988c-5.065,4.504 -11.175,8.06 -15.198,13.517c-4.064,5.515 -6,13.107 -9.19,19.57c-3.829,7.752 -9.939,18.675 -13.786,26.947c-3.45,7.411 -7.059,15.891 -9.305,22.685c-1.941,5.863 -2.678,12.061 -4.173,18.057c-1.818,7.288 -4.919,17.055 -6.737,25.667c-1.813,8.58 -3.242,17.262 -4.169,25.984c-0.961,9.035 -2.25,18.829 -1.606,28.231c0.697,10.16 3.852,21.815 5.775,32.725"
                          style="fill:none;stroke:#000101;stroke-width:14.56px;"/>
                    <path id="path253"
                          d="M573.024,630.441c5.484,2.016 16.456,6.048 20.907,12.926c5.356,8.285 8.585,25.054 11.228,36.767c2.479,10.994 3.922,22.243 4.628,33.489c0.772,12.255 0.225,26.695 -0,40.036c-0.234,14.232 -0.168,33.29 -1.421,45.338c-0.953,9.159 -4.01,18.715 -6.093,26.947c-1.914,7.548 -4.914,17.488 -6.419,22.46"
                          style="fill:none;stroke:#000101;stroke-width:14.56px;"/></g></g></g>
              <g id="electron"><use id="use260" xlink:href="#_Image1" x="0" y="0" width="120px" height="120px" transform="matrix(4.41167,0,0,4.41167,106.124,366.195)"/>
                <g id="g272"><path id="path262" d="M276.388,483.788c-0,22.336 3.609,42.815 3.609,66.166c-0,5.074 4.12,9.194 9.194,9.194c5.069,0 9.189,-4.12 9.189,-9.194c0,-23.351 -3.609,-43.83 -3.609,-66.166c0,-5.073 -4.12,-9.19 -9.194,-9.19c-5.069,0 -9.189,4.117 -9.189,9.19Z" style="fill:#000101;"/>
                  <path id="path264"
                        d="M425.926,518.053c-0.071,1.399 -0.318,6.962 0.11,8.996c0.146,0.701 0.344,1.359 0.582,1.963c-0.066,1.451 -0.11,3.468 0.102,4.398c0.141,0.614 0.326,1.187 0.556,1.725c-0.04,0.967 -0.106,2.55 -0.106,3.19c-0,4.262 0.803,8.157 0.803,12.834c-0,5.073 4.116,9.189 9.189,9.189c5.074,0 9.194,-4.116 9.194,-9.189c0,-4.677 -0.803,-8.572 -0.803,-12.834c0,-1.844 0.23,-5.532 -0.233,-7.579c-0.115,-0.512 -0.256,-0.993 -0.424,-1.447c0.071,-1.456 0.119,-3.552 -0.097,-4.505c-0.168,-0.723 -0.397,-1.398 -0.684,-2.02c0.084,-1.249 0.225,-3.737 0.212,-5.082c-0.018,-1.769 -0.282,-3.353 -0.693,-4.659c0.084,-0.979 0.314,-3.812 0.314,-4.782c-0,-7.275 0.802,-14.043 0.802,-21.256c0,-5.073 -4.12,-9.189 -9.189,-9.189c-5.073,-0 -9.194,4.116 -9.194,9.189c0,7.213 -0.803,13.981 -0.803,21.256c0,1.266 -0.37,3.648 -0.335,5.505c0.035,1.62 0.3,3.084 0.697,4.297Z"
                        style="fill:#000101;"/>
                  <path id="path266"
                        d="M457.072,669.828c-0.525,0.821 -6.803,10.575 -8.378,12.15c-4.932,4.932 -17.801,20.055 -21.82,24.079c-3.877,3.877 -22.914,18.864 -26.651,21.714c-13.049,9.961 -30.793,9.026 -39.749,9.026c-9.101,0 -34.592,-4.606 -36.939,-5.391c-4.376,-1.456 -16.415,-6.017 -30.528,-16.932c-7.518,-5.814 -8.656,-16.83 -8.656,-22.371c0,-2.259 0.154,-4.43 0.587,-6.318c0.159,-0.697 0.578,-1.712 0.741,-2.104c4.103,-2.436 5.682,-7.668 3.516,-12c-2.268,-4.54 -7.791,-6.379 -12.331,-4.112c-3.498,1.747 -6.33,4.791 -8.192,9.031c-1.8,4.09 -2.704,9.595 -2.704,15.503c-0,9.268 3.211,27.18 15.793,36.912c16.601,12.842 30.811,18.114 35.96,19.83c2.717,0.909 32.214,6.336 42.753,6.336c11.532,-0 34.098,0.03 50.902,-12.794c4.006,-3.058 24.339,-19.178 28.495,-23.334c4.024,-4.023 16.888,-19.146 21.82,-24.078c1.986,-1.986 7.553,-8.661 10.707,-14.506c2.021,-3.746 3.031,-7.372 3.031,-10.006c0,-5.073 -4.116,-9.194 -9.189,-9.194c-4.862,0 -8.846,3.781 -9.168,8.559Z"
                        style="fill:#000101;"/>
                  <path id="path268"
                        d="M117.696,620.642c-5.065,4.509 -11.175,8.06 -15.198,13.518c-4.064,5.514 -6,13.111 -9.19,19.57c-3.829,7.756 -9.939,18.679 -13.786,26.951c-3.45,7.407 -7.059,15.891 -9.305,22.68c-1.941,5.868 -2.677,12.066 -4.173,18.061c-1.818,7.289 -4.919,17.056 -6.737,25.663c-1.813,8.585 -3.242,17.263 -4.169,25.989c-0.961,9.035 -2.25,18.825 -1.605,28.231c0.697,10.16 3.851,21.815 5.774,32.721"
                        style="fill:none;stroke:#000101;stroke-width:14.56px;"/>
                  <path id="path270"
                        d="M626.383,626.1c5.484,2.016 16.456,6.044 20.907,12.926c5.356,8.28 8.585,25.054 11.228,36.762c2.479,10.994 3.922,22.248 4.628,33.494c0.772,12.255 0.225,26.695 -0,40.035c-0.234,14.228 -0.168,33.291 -1.421,45.339c-0.953,9.159 -4.01,18.714 -6.092,26.947c-1.915,7.548 -4.915,17.487 -6.419,22.455"
                        style="fill:none;stroke:#000101;stroke-width:14.56px;"/></g></g></g>
            <circle id="holeTop" cx="11317" cy="1984.59" r="57.431"/>
            <circle id="holeCenter" cx="11317" cy="3391.4" r="57.431"/>
            <circle id="holeBottom" cx="11317" cy="4800.28" r="57.431"/>
            <rect id="screenButtonPos" x="11139.3" y="6821.36" width="177.777" height="177.777" style="fill:none;"/>
            <rect id="shootButtonPos" x="1330.03" y="6821.36" width="177.777" height="177.777" style="fill:none;"/>
            <rect id="shoot100ButtonPos" x="1330.03" y="5804.5" width="177.777" height="177.777" style="fill:none;"/>
            <rect id="spinButtonPos" x="6768.06" y="6821.36" width="177.777" height="177.777" style="fill:none;"/>
            <path d="M2352.08,2907.77l-450.354,399.089l-0,565.747l450.354,-399.09l0,-565.746Z" style="fill:none;stroke:#000;stroke-width:24.83px;"/>
            <path
                d="M2126.9,3178.85c92.852,-82.283 168.236,-54.386 168.236,62.257c0,116.643 -75.384,278.145 -168.236,360.427c-92.852,82.282 -168.236,54.386 -168.236,-62.257c0,-116.643 75.384,-278.145 168.236,-360.427Z"
                style="fill:none;stroke:#000;stroke-width:24.83px;"/>
            <rect x="663.544" y="3306.86" width="1238.18" height="565.746" style="fill:none;stroke:#000;stroke-width:24.83px;"/>
            <path d="M2352.08,2907.77l-1238.18,0l-450.355,399.089l1238.18,0l450.354,-399.089Z" style="fill:none;stroke:#000;stroke-width:24.83px;"/>
            <defs><image id="_Image1" width="120px" height="120px" xlink:href="data:image/png;base64,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"/>
              <image id="_Image2" width="120px" height="120px"
                     xlink:href="data:image/png;base64,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"/></defs></svg>
        </div>
      </div>
      <div class="right" v-if="isSecond">
        <h1>Zähler</h1>
        <h3>Oben: {{ top }} <template v-if="top+bottom>0">(entspricht {{ (top / Math.max(top + bottom, 1) * 100).toFixed(2) }}%)</template></h3>
        <h3>Unten: {{ bottom }} <template v-if="top+bottom>0">(entspricht {{ (bottom / Math.max(top + bottom, 1) * 100).toFixed(2) }}%)</template></h3>
        <button class="spreadButton" :disabled="currentlyAnimatedElectrons !== 0" style="margin-top: 20px;" @click="reset()">Zurücksetzen</button>
      </div>
    </div>

  </div>
</template>

<script lang="ts" setup>

function reset(){
  top.value = 0;
  bottom.value = 0;
}

/*
* TODO
*  - wann welche knöpfe zulassen? (schirm ausschalten während animation läuft ist wonky
*  - elektronenspin augen
*  - fps max 120, nicht smooth?
* */

import {ref, onMounted, Ref, defineProps} from "vue";
import {moveElementAlongPathElement, putSvgToTranslate} from "@/scripts/svgAnimation";
import {makeDraggable, makeDropZoneDropTarget} from "@/scripts/makeDraggablev2";
import {
  addTranslate,
  centerSvgEl,
  generateSvgUsingTemplate,
  getCenterOfSVGEl,
  getSvgCenter
} from "@/scripts/positioning";

const props = defineProps({
  isSecond: {
    required: true,
    type: Boolean
  }
})

const loading = ref(true);
const top = ref(0);
const bottom = ref(0);
// const state: Ref<'initialized' | 'shot' | 'animating'> = ref('initialized');
const currentlyAnimatedElectrons = ref(0);
const elements: { [key: string]: SVGSVGElement | null } = {
  electronGroup: null,
  simulation: null,
  screen: null,
  magnetN: null,
  holeBottom: null,
  holeTop: null,
  holeCenter: null
}
const disableButtons = ref(false);

function generateElectron() {
  const electron = generateSvgUsingTemplate(elements.simulation!, elements.electronGroup!);
  const initPosition = ((elements.simulation!.querySelector('#pathStraight') as unknown) as SVGPathElement).getPointAtLength(0);
  putSvgToTranslate(electron, initPosition);
  elements.simulation!.appendChild(electron);
  return electron;
}

let spinVisible = ref(false);


function toggleSpin() {
  spinVisible.value = !spinVisible.value;
  Array.from(elements.simulation!.querySelectorAll('#electronGroup')).forEach(el => el.classList.toggle('spin'))
}

let screenOn = true;

function toggleScreen() {
  screenOn = !screenOn;
  elements.simulation!.classList.toggle('screenInvis');
}

function shoot100Electrons() {
  disableButtons.value = true;
  let i = 0;
  const interval = setInterval(() => {
    shootSingleElectron();
    i++;
    if (i === 100) {
      clearInterval(interval)
      disableButtons.value = false;
    }
  }, 250)
}

function shootSingleElectron() {
  const electron = generateElectron();
  currentlyAnimatedElectrons.value++;
  const spinUp = Math.random() > 0.5;
  let spinResolved = false;
  const electronPath: SVGPathElement = elements.simulation!.querySelector(`#path${spinUp ? 'Up' : 'Down'}${screenOn ? 'Screen' : ''}`)!;
  const spinBorder = elements.magnetN!.getBBox().x;
  // console.log('spin border=',spinBorder)
  const maxPathOfAllPathLengths = (elements.simulation!.querySelector('#pathUp') as SVGPathElement).getTotalLength();
  const maxPathDuration = 4;
  const speed = maxPathOfAllPathLengths / maxPathDuration;
  const pathLength = electronPath.getTotalLength();
  const duration = pathLength / speed;
  const fps = 120;
  const totalUpdates = Math.ceil(fps * duration);
  let i = 0;

  const interval = setInterval(() => {
    const alpha = i / totalUpdates;
    const length = pathLength * alpha;
    const newPos = electronPath.getPointAtLength(length);
    putSvgToTranslate(electron, newPos);
    if (!spinResolved) {
      // console.log('borders= ', leftSpinBorder, pointElLeftPos.x, pointElRightPos.x, rightSpinBorder )
      if (newPos.x > spinBorder) {
        spinResolved = true;
        electron?.classList.add(spinUp ? 'up' : 'down');
      }
    }
    i++;
    if (i > totalUpdates) {
      clearInterval(interval);
      elements.simulation!.removeChild(electron);
      currentlyAnimatedElectrons.value--;
      if (spinUp) top.value++;
      else bottom.value++;
      if (screenOn) {
        const hole = generateSvgUsingTemplate(elements.simulation!, spinUp ? elements.holeTop! : elements.holeBottom!);
        elements.simulation!.appendChild(hole);
        setTimeout(() => {
          elements.simulation!.removeChild(hole);
        }, 2000)
      }
    }
  }, 1000 / fps)
}

function positionButtonsOnSimulation() {
  for (let buttonName of ['spin', 'screen', 'shoot', 'shoot100']) {
    const button: HTMLElement | null = document.querySelector('#' + buttonName + 'Button');
    if (button) {
      const pos: SVGSVGElement = document.querySelector('#' + buttonName + 'ButtonPos')!;
      const {x, y, width, height} = pos.getBoundingClientRect();
      button.style.left = x + width / 2 + 'px';
      button.style.top = y + height / 2 + 'px';
    }
  }
}

onMounted(() => {
  for (let key in elements) {
    elements[key] = document.querySelector('#' + key);
  }
  console.log('on Mounted called!');

  [elements.electronGroup!, elements.holeTop!, elements.holeBottom!, elements.holeCenter!].forEach(el => el.style.visibility = 'hidden');
  addTranslate(elements.simulation!, elements.electronGroup!);
  centerSvgEl(elements.simulation!, elements.electronGroup!);
  // shootSingleElectron();
  positionButtonsOnSimulation();
  addEventListener("resize", (event) => positionButtonsOnSimulation());
  loading.value = false; // TODO


  // cleanup if switched between pages
  elements.electronGroup!.classList.toggle('spin', spinVisible.value);
  elements.screen!.style.visibility = screenOn ? 'visible' : 'hidden';

})

</script>

<style scoped lang="scss">
#simulation.screenInvis #screen {
  display: none
}

#simulation.screenInvis #holeTop {
  display: none
}

#simulation.screenInvis #holeBottom {
  display: none
}

@keyframes append-fade {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

#hole, #holeTop, #holeBottom {
  animation: append-fade 2s linear;
}

#electronGroup {
  will-change: transform, opacity;
}

//@media screen and (max-width: 1000px) {
//
//}

.container {
  display: flex;
  flex-direction: row;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }

  .left {
    flex: 1 0 auto;
  }

  .right {
    flex: 0 1 auto;
    padding: 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    min-width: 25%;
  }
}

//@media only screen and (max-width: 768px) {
//  .container {
//    flex-direction: column;
//    background-color: red;
//  }
//}
</style>
