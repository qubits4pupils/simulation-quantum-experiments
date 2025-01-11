import {createI18n} from 'vue-i18n';

export const messages = {
    en: {
        simulation1: {
            index: "Simulation 1",
            label: "Measurement Process",
            generateElectron: "Generate electron",
            showSpin: "Show electron spin (theoretical)",
            toggleScreen: "Show/hide screen",
        },
        simulation2: {
            index: "Simulation 2",
            label: "Statistical Character",
            generate100Electrons: "Generate 100 electrons",
            showSpin: "Show electron spin (theoretical)",
            hideSpin: "Hide electron spin (theoretical)",
            toggleScreen: "Show/hide screen",
            counter: "Counter",
            up: "Up",
            down: "Down",
            reset: "Reset",
            equals: "equals"
        },
        simulation3: {
            index: "Simulation 3",
            label: "Entanglement/EPR",
            showSpin: "Show electron spin (theoretical)",
            disintegrateCooperPair: "Disintegrate Cooper pair",
            showTime: "Show time/duration",
            hideTime: "Hide time/duration",
            measuredDuration: "Time of Measurement",
            decimalSeparator: '.'
        },
        simulation4: {
            index: "Simulation 4",
            label: "Decoherence Time",
            objects: "Objects",
            electron: "Electron (spin up/spin down)",
            dustParticle: "Dust particle (position 1/2)",
            skinnyCat: "Skinny cat (alive/dead)",
            fatCat: "Fat cat (alive/dead)",
            prepareSuperposition: "Prepare in superposition state",
            environmentParameters: "Environmental parameters",
            temperature: {
                label: "Temperature",
                extremelyCold: "Extremely cold",
                roomTemperature: "Room temperature",
            },
            pressure: {
                label: "Pressure",
                vacuum: "Vacuum",
                atmosphericPressure: "Atmospheric pressure",
            },
            lightExposure: {
                label: "Light exposure",
                dark: "Dark",
                bright: "Bright",
            },
            enableEnvironment: "Enable environment",
            reset: "Reset",
            simulation: "Simulation",
            decoherenceTime: "Decoherence time",
        },
        imprint: {
            index: "Imprint",
            label: "Imprint",
            host: {
                "label": "Host",
                "value": "Leibniz Institute for Solid State and Materials Research Dresden"
            },
            responsiblePerson: {
                "label": "Responsible person",
                "value": "Carsten Albert"
            },
            address: {
                "label": "Address",
                "value": "Helmholtzstrasse 20 01069 Dresden Germany"
            },
            phone: {
                "label": "Phone",
                "value": "+49 (0) 351 46 59 581"
            },
            email: {
                "label": "E-Mail",
                "value": "c.albert@ifw-dresden.de"
            },
            representatives: {
                "label": "Representatives",
                "value": "Prof. Dr. Bernd Büchner, Scientific Director Juliane Schmidt, Administrative Director"
            },
            register: {
                "label": "Register",
                "value": "VR Dresden Nr.: 1369"
            },
            cooperation: {
                "label": "In Cooperation with",
                "value": "Dresden University of Technology"
            },
            disclaimer: {
                "label": "Disclaimer",
                "value": `The IFW Dresden makes every effort to provide timely and accurate information. Nevertheless, mistakes and confusions may occur. The IFW Dresden does not assume liability for relevance, accuracy and completeness of the information provided. The IFW Dresden is only liable for material or immaterial damages if it can be proved that the IFW Dresden caused damage deliberately or through gross negligence. The damages include those which arise from the use or misuse of the information provided or direct or indirect damages which arise through the use of faulty or incomplete information. The same goes for the software available free of charge which can be used for downloading. The IFW Dresden reserves the right to change, supplement, or delete some or all of the information on its Internet web site without notice. Similarly, the IFW Dresden also reserves the right to temporarily or permanently discontinue the Internet web site.
Individuals or organisations providing information on the internet are only responsible for illegal and punishable contents derived from other sources which are accessed by direct or indirect connections, e.g. links, if the individuals and organisations are aware of the nature of these contents on these web sites. The IFW Dresden has no influence whatsoever on contents derived from another sources and does not promote them. The IFW Dresden has no knowledge of illegal or offensive contents contained in the linked web sites from other information providers. If there are illegal and offensive contents on the web sites of other information providers, the IFW Dresden distances itself from these contents.
`
            }
        },
    },
    de: {
        simulation1: {
            index: "Simulation 1",
            label: "Messprozess",
            generateElectron: "Elektron erzeugen",
            showSpin: "Elektronenspin anzeigen (theoretisch)",
            toggleScreen: "Schirm ein-/ausblenden",
        },
        simulation2: {
            index: "Simulation 2",
            label: "Statistischer Charakter",
            generateElectron: "Elektron erzeugen",
            generate100Electrons: "100 Elektronen erzeugen",
            showSpin: "Elektronenspin anzeigen (theoretisch)",
            hideSpin: "Elektronenspin ausblenden (theoretisch)",
            toggleScreen: "Schirm ein-/ausblenden",
            counter: "Zähler",
            up: "Oben",
            down: "Unten",
            reset: "Zurücksetzen",
            equals: "entspricht"
        },
        simulation3: {
            index: "Simulation 3",
            label: "Verschränkung/EPR",
            showSpin: "Elektronenspin anzeigen (theoretisch)",
            disintegrateCooperPair: "Cooper-Paar auseinander fliegen lassen",
            showTime: "Zeit anzeigen",
            hideTime: "Zeit ausblenden",
            measuredDuration: "Zeitpunkt der Messung",
            decimalSeparator: ','
        },
        simulation4: {
            index: "Simulation 4",
            label: "Dekohärenzzeit",
            objects: "Objekte",
            electron: "Elektron (Spin Up/Spin Down)",
            dustParticle: "Staubteilchen (Ort 1/2)",
            skinnyCat: "Dünne Katze (lebendig/tot)",
            fatCat: "Dicke Katze (lebendig/tot)",
            prepareSuperposition: "In Superpositionszustand präparieren",
            environmentParameters: "Umgebungsparameter",
            temperature: {
                label: "Temperatur",
                extremelyCold: "Extrem kalt",
                roomTemperature: "Zimmertemperatur",
            },
            pressure: {
                label: "Druck",
                vacuum: "Vakuum",
                atmosphericPressure: "Atmosphärendruck",
            },
            lightExposure: {
                label: "Lichteinfall",
                dark: "Dunkel",
                bright: "Hell",
            },
            enableEnvironment: "Umgebung an",
            reset: "Zurücksetzen",
            simulation: "Simulation",
            decoherenceTime: "Dekohärenzzeit",
        },
        imprint: {
            index: "Impressum",
            label: "Impressum",
            host: {
                "label": "Anbieter",
                "value": "Leibniz-Institut für Festkörper- und Werkstoffforschung Dresden e. V."
            },
            responsiblePerson: {
                "label": "Verantwortlicher",
                "value": "Carsten Albert"
            },
            address: {
                "label": "Adresse",
                "value": "Helmholtzstraße 20 01069 Dresden"
            },
            phone: {
                "label": "Telefon",
                "value": "+49 (0) 351 46 59 581"
            },
            email: {
                "label": "E-Mail",
                "value": "c.albert@ifw-dresden.de"
            },
            representatives: {
                "label": "Vertreter",
                "value": "Prof. Dr. Bernd Büchner, Wissenschaftlicher Direktor Juliane Schmidt, Kaufmännische Direktorin"
            },
            register: {
                "label": "Register",
                "value": "VR Dresden Nr.: 1369"
            },
            cooperation: {
                "label": "In Kooperation mit",
                "value": "Technische Universität Dresden"
            },
            disclaimer: {
                "label": "Rechtliche Hinweise zur Haftung",
                "value": `Das IFW Dresden ist um Richtigkeit und Aktualität der auf dieser Internetpräsenz bereitgestellten Informationen bemüht. Trotzdem können Fehler und Unklarheiten nicht vollständig ausgeschlossen werden. Das IFW Dresden übernimmt deshalb keine Gewähr für die Aktualität, Richtigkeit, Vollständigkeit oder Qualität der bereitgestellten Informationen. Für Schäden materieller oder immaterieller Art, die durch die Nutzung oder Nichtnutzung der dargebotenen Informationen bzw. durch die Nutzung fehlerhafter und unvollständiger Informationen unmittelbar oder mittelbar verursacht werden, haftet das IFW Dresden nicht, sofern ihr nicht nachweislich vorsätzliches oder grob fahrlässiges Verschulden zur Last fällt. Gleiches gilt für kostenlos zum Download bereitgehaltene Software. Das IFW Dresden behält es sich vor, Teile des Internetangebots oder das gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu ergänzen, zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen.
Die Verantwortlichkeit für "fremde Inhalte", die beispielsweise durch direkte oder indirekte Verknüpfungen (z.B. sogenannte Links ) zu anderen Anbietern bereitgehalten werden, setzt unter anderem positive Kenntnis des rechtswidrigen bzw. strafbaren Inhaltes voraus. Das IFW Dresden hat auf fremde Inhalte keinerlei Einfluss und macht sich diese Inhalte auch nicht zu Eigen. Das IFW Dresden hat keine positive Kenntnis über rechtswidrige oder anstößige Inhalte auf den verknüpften Seiten fremder Anbieter. Sollten auf den verknüpften Seiten fremder Anbieter dennoch rechtswidrige oder anstößige Inhalte enthalten sein, so distanziert sich das IFW Dresden von diesen Inhalten ausdrücklich.
`
            }
        },
    },
};

const i18n = createI18n({
    locale: 'de',
    fallbackLocale: 'en',
    messages: messages
})

export {i18n}