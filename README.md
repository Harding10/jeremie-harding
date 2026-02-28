# 🚀 Portfolio - Harding

Bienvenue sur le dépôt de mon portfolio personnel. Ce projet est une application web moderne construite avec **React 19** et **Tailwind CSS v4**, conçue pour présenter mes travaux en tant que développeur et formateur en **IoT (Internet of Things)**.

## 🛠️ Stack Technique

* **Frontend :** [React](https://react.dev/) (Vite.js)
* **Styling :** [Tailwind CSS v4](https://tailwindcss.com/) (Design système moderne "Floating UI")
* **Animations :** [DotLottie](https://lottiefiles.com/dotlottie) (Animations vectorielles légères au format JSON)
* **Navigation :** [React Router DOM](https://reactrouter.com/)

## ✨ Fonctionnalités Clés

### 🛸 Navigation Flottante (Floating Navbar)
Une barre de navigation style "pilule" centrée et fixée en haut de l'écran. 
- **Effet Miroir :** Utilisation de `backdrop-blur` et d'ombres portées pour un aspect premium.
- **Micro-interactions :** Animations Lottie sur le bouton CV déclenchées au survol (`playOnHover`).

### 📥 Système de téléchargement intelligent
Implémentation d'une fonction utilitaire personnalisée pour gérer le téléchargement du CV sans compromettre le design.
- **Fichier :** `src/constants/handleDownload.js`
- **Mécanisme :** Création dynamique d'un élément `<a>` dans le DOM pour déclencher le téléchargement de fichiers situés dans le dossier `/public`.

## 📁 Structure du Projet

```text
src/
├── assets/             # Images (logo.jpg) et animations (cv-icon.json)
├── components/
│   └── layout/         # Composants structurels (Navbar.jsx)
├── constants/          # Logique réutilisable (handleDownload.js)
├── pages/              # Pages principales (Home, Projet, Gallery)
└── App.jsx             # Configuration des routes
public/                 # Fichiers statiques (ficher_pdf.pdf)