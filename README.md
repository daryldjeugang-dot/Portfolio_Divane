# Portfolio — Divane Daryl Ndjaga Djeugang

Portfolio personnel de **Divane Daryl Ndjaga Djeugang**, ingénieur de travaux en Cybersécurité, Réseaux & Administration Systèmes.

## Stack

- **React 18** + **Vite 6**
- Font Awesome pour les icônes
- Bilingue Français / Anglais (système de locales)
- Mode clair / sombre

## Démarrage

```bash
npm install
npm run dev        # serveur de développement
npm run build      # build de production dans dist/
npm run preview    # prévisualisation du build
```

## Structure

```
src/
  components/   Composants React + styles
  locales/      Traductions fr.json / en.json
  context/      Contextes (langue, thème)
  data/         Données statiques (coordonnées)
  hooks/        Hooks personnalisés
public/
  assets/       CV, badges, images
```

## Formulaire de contact

Le formulaire envoie les messages via [Formspree](https://formspree.io). Créez un formulaire gratuit sur le site, puis remplacez l'endpoint dans `src/components/Contact.jsx` :

```js
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'
```

## Déploiement

Le site est déployé sur GitHub Pages : `https://daryldjeugang-dot.github.io/Portfolio_Divane/`