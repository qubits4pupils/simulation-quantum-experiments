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
               style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;">



              <path id="screen" d="M12195.5,695.591l-1756.95,610l-0,4139.29l1756.95,697.143l0,-5446.43Z" style="fill:#e5e5e5;stroke:#000;stroke-width:23.37px;"/>
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
              <g id="magnet"><path d="M8255.65,4308.91l-1138.95,0l0,763.08l1138.95,0l-0,-763.08Zm-0,0l-1138.95,0l-384.678,-203.25l1138.95,0l384.678,203.25Zm-1523.63,-203.25l384.678,203.25l0,763.08l-384.678,-203.25l0,-763.08Z" style="fill:#03458f;stroke:#010001;stroke-width:24.83px;"/>
                <path
                    d="M8255.65,1894.36l-1188.46,0l-0,601.706l1188.46,0l-0,-601.706Zm-204.228,699.837l-1188.46,0l204.228,-98.131l1188.46,0l-204.228,98.131Zm-1387.86,-904.143l403.629,204.306l-0,601.706l-207.073,98.131l-201.383,-301.367l4.827,-602.776Zm1188.46,-0l-1188.46,-0l403.629,204.306l1188.46,0l-403.629,-204.306Z"
                    style="fill:#d40000;stroke:#010001;stroke-width:24.83px;"/>
                <path id="path217"
                      d="M7546.15,4759.89c-0.121,-5.289 1.681,-9.594 5.415,-12.934c3.735,-3.331 8.328,-5.001 13.771,-5.001c6.208,-0 11.651,3.525 16.337,10.577c6.451,9.557 12.221,16.042 17.281,19.438c10.764,7.052 26.401,10.568 46.912,10.568c19.633,0 37.866,-4.212 54.708,-12.646c21.519,-10.819 32.283,-25.859 32.283,-45.112c-0,-15.856 -9.046,-28.382 -27.158,-37.567c-15.32,-7.924 -34.253,-12.201 -56.789,-12.832c-20.007,-0.761 -37.036,-5.103 -51.095,-13.027c-17.981,-10.197 -26.971,-24.792 -26.971,-43.794c-0,-22.398 12.79,-42.847 38.37,-61.348c24.431,-17.499 49.694,-26.239 75.778,-26.239c12.286,-0 26.15,2.078 41.601,6.226c20.51,5.409 30.77,12.331 30.77,20.765c0,11.078 -5.694,16.617 -17.093,16.617c-5.07,0 -13.929,-1.355 -26.589,-4.064c-12.668,-2.709 -22.48,-3.999 -29.445,-3.869c-19.754,0.251 -36.531,5.094 -50.329,14.539c-14.181,9.687 -21.276,21.452 -21.276,35.295c-0,10.447 9.373,17.805 28.11,22.082c6.964,1.643 20.454,3.155 40.461,4.537c28.997,2.134 51.655,11.199 67.993,27.177c14.946,14.604 22.415,32.409 22.415,53.424c-0,29.951 -13.929,53.861 -41.787,71.731c-24.189,15.485 -52.234,23.223 -84.144,23.223c-23.171,0 -44.382,-4.407 -63.632,-13.212c-23.545,-10.828 -35.514,-25.673 -35.897,-44.554Z"
                      style="fill:#fff;fill-rule:nonzero;"/>
                <path id="magnetN"
                      d="M7792.97,2300c-0,6.04 -1.008,16.107 -3.034,30.201c-2.026,12.711 -8.804,19.067 -20.324,19.067c-6.965,-0 -15.264,-4.528 -24.88,-13.593c-51.543,-48.451 -110.676,-118.354 -177.408,-209.718l-0.943,42.847l-0.57,43.043c0,10.438 0.215,26.109 0.663,47.004c0.439,20.885 0.663,36.621 0.663,47.189c0,33.847 -6.582,50.78 -19.754,50.78c-6.965,0 -12.473,-2.208 -16.525,-6.606c-3.669,-3.906 -5.508,-8.564 -5.508,-13.973c0,-5.289 0.411,-13.277 1.232,-23.975c0.822,-10.698 1.242,-18.687 1.242,-23.975c0,-7.794 0.252,-19.466 0.756,-35.017c0.504,-15.541 0.757,-27.213 0.757,-35.016c-0,-8.304 -0.187,-20.858 -0.57,-37.652c-0.373,-16.803 -0.569,-29.356 -0.569,-37.66c-0,-7.933 -0.757,-19.726 -2.278,-35.397c-1.522,-15.671 -2.278,-27.464 -2.278,-35.397c-0,-5.789 2.502,-11.069 7.506,-15.856c4.994,-4.779 10.661,-7.173 16.991,-7.173c6.712,0 15.012,7.302 24.889,21.897c31.527,46.939 59.889,85.955 85.086,117.037c30.015,36.872 62.933,72.111 98.773,105.708c0.373,-5.409 0.373,-13.398 0,-23.966l-0.569,-23.79c-0,-55.243 -2.157,-99.231 -6.461,-131.947c-0.504,-3.275 -2.212,-9.881 -5.125,-19.818c-2.539,-8.564 -3.8,-15.226 -3.8,-20.013c0,-14.595 6.713,-21.897 20.128,-21.897c22.033,-0 33.049,40.834 33.049,122.511c-0,13.973 -0.187,34.83 -0.57,62.573c-0.373,27.751 -0.569,48.609 -0.569,62.582Z"
                      style="fill:#fff;fill-rule:nonzero;"/></g>
              <g id="electronGroup"><g id="electrono"><g id="g238"><circle cx="418.17" cy="637.914" r="428.039" style="fill:url(#_Radial1);"/><path id="path222"
                                                                                                                                                    d="M389.274,249.233l-158.026,-0l186.922,-249.233l186.923,249.233l-158.026,-0l-0,725.009c-0,15.948 -12.949,28.896 -28.897,28.896c-15.948,0 -28.896,-12.948 -28.896,-28.896l-0,-725.009Z"
                                                                                                                                                    style="fill:#326f56;"/><g
                  id="g236"><path id="path226" d="M323.734,490.807c-0,22.336 3.609,42.815 3.609,66.166c-0,5.074 4.116,9.19 9.189,9.19c5.074,-0 9.19,-4.116 9.19,-9.19c-0,-23.351 -3.609,-43.83 -3.609,-66.166c-0,-5.073 -4.116,-9.194 -9.19,-9.194c-5.073,0 -9.189,4.121 -9.189,9.194Z" style="fill:#000101;"/>
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
                <g id="electronu"><g id="g257"><circle cx="315.676" cy="630.441" r="428.039" style="fill:url(#_Radial2);"/><path id="path241"
                                                                                                                                 d="M286.782,1019.12l-0,-725.009c-0,-15.948 12.948,-28.897 28.896,-28.897c15.948,0 28.897,12.949 28.897,28.897l-0,725.009l158.026,-0l-186.923,249.233l-186.927,-249.233l158.031,-0Z"
                                                                                                                                 style="fill:#326f56;"/><g id="g255"><path id="path245" d="M223.029,488.129c-0,22.336 3.609,42.815 3.609,66.166c-0,5.074 4.12,9.194 9.193,9.194c5.069,0 9.19,-4.12 9.19,-9.194c-0,-23.351 -3.609,-43.83 -3.609,-66.166c0,-5.073 -4.12,-9.189 -9.194,-9.189c-5.069,-0 -9.189,4.116 -9.189,9.189Z" style="fill:#000101;"/>
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
                <g id="electron"><circle cx="370.824" cy="630.895" r="428.039" style="fill:url(#_Radial3);"/>
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
              <rect id="spinButtonPos" x="7542.79" y="6821.36" width="85.16" height="85.16" style="fill:none;"/>
              <path d="M2352.08,2907.77l-450.354,399.089l-0,565.747l450.354,-399.09l0,-565.746Z" style="fill:none;stroke:#000;stroke-width:24.83px;"/>
              <path
                  d="M2126.9,3178.85c92.852,-82.283 168.236,-54.386 168.236,62.257c0,116.643 -75.384,278.145 -168.236,360.427c-92.852,82.282 -168.236,54.386 -168.236,-62.257c0,-116.643 75.384,-278.145 168.236,-360.427Z"
                  style="fill:none;stroke:#000;stroke-width:24.83px;"/>
              <rect x="663.544" y="3306.86" width="1238.18" height="565.746" style="fill:none;stroke:#000;stroke-width:24.83px;"/>
              <path d="M2352.08,2907.77l-1238.18,0l-450.355,399.089l1238.18,0l450.354,-399.089Z" style="fill:none;stroke:#000;stroke-width:24.83px;"/>
              <defs><radialGradient id="_Radial1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(335.303,-272.003,272.003,335.303,418.17,643.956)"><stop offset="0" style="stop-color:#1f59a7;stop-opacity:1"/><stop
                  offset="0.55" style="stop-color:#4e72be;stop-opacity:0.96"/><stop offset="0.77" style="stop-color:#4e72be;stop-opacity:0.23"/><stop offset="1"
                                                                                                                                                      style="stop-color:#4e72be;stop-opacity:0"/></radialGradient>
                <radialGradient id="_Radial2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(335.303,-272.003,272.003,335.303,315.676,636.483)"><stop offset="0" style="stop-color:#1f59a7;stop-opacity:1"/>
                  <stop offset="0.55" style="stop-color:#4e72be;stop-opacity:0.96"/>
                  <stop offset="0.77" style="stop-color:#4e72be;stop-opacity:0.23"/>
                  <stop offset="1" style="stop-color:#4e72be;stop-opacity:0"/></radialGradient>
                <radialGradient id="_Radial3" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(335.303,-272.003,272.003,335.303,370.824,636.938)"><stop offset="0" style="stop-color:#1f59a7;stop-opacity:1"/>
                  <stop offset="0.55" style="stop-color:#4e72be;stop-opacity:0.96"/>
                  <stop offset="0.77" style="stop-color:#4e72be;stop-opacity:0.23"/>
                  <stop offset="1" style="stop-color:#4e72be;stop-opacity:0"/></radialGradient></defs></svg>


        </div>
      </div>
      <div class="right" v-if="isSecond">
        <h1>Zähler</h1>
        <h3>Oben: {{ top }}
          <template v-if="top+bottom>0">(entspricht {{ (top / Math.max(top + bottom, 1) * 100).toFixed(2) }}%)</template>
        </h3>
        <h3>Unten: {{ bottom }}
          <template v-if="top+bottom>0">(entspricht {{ (bottom / Math.max(top + bottom, 1) * 100).toFixed(2) }}%)</template>
        </h3>
        <button class="spreadButton" :disabled="currentlyAnimatedElectrons !== 0" style="margin-top: 20px;" @click="reset()">Zurücksetzen</button>
      </div>
    </div>

  </div>
</template>

<script lang="ts" setup>

function reset() {
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
