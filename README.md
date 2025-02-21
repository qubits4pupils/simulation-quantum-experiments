# qubits4pupils

* Node.js / NPM installieren
* Repository auschecken
* Pakete installieren (`npm install`)
* Anpassungen vornehmen
* docs Ordner löschen
* bauen (`npm run build`)
* ins Repository laden

## i18n

Übersetzungen sind in i18n.ts zu finden. Für weitere Übersetzungen diese dort hinzufügen und App.vue anpassen/ um Sprachoptionen erweitern.

Um Nutzern direkt im Link die gewünschte Sprachoption zu hinterlegen an die URL `?lang=en` oder `/?lang=de` anfügen. Die Standardsprache ist Deutsch.

# GitHub Actions

This repository gets built by GitHub Actions upon commit. After forking this Repo:

1. Go to Settings → Actions → General and tick "Read and write permissions" [(source)](https://github.com/JamesIves/github-pages-deploy-action/issues/1110)
2. Go to Settings → Pages and set
    * Source to "Deploy from Branch"
    * Branch to "gh-pages"
    * Directory to "/ (root)"