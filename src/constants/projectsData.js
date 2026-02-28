// Importations des vidéos
import apiVid from '../assets/video/Api.webm';
import appleStoreVid from '../assets/video/applestore.webm';
import barreVid from '../assets/video/barre-autio.mp4';
import crudLaravelVid from '../assets/video/crub_laravel.webm';
import ghostechVid from '../assets/video/GHOSTECH .webm';
import kivipVid from '../assets/video/Kivip.mp4';
import pikassoVid from '../assets/video/pikasso.webm';
import rapidfyVid from '../assets/video/RapIdfy.mp4';

export const projectsData = [
    {
        id: 1,
        title: "Kivip E-commerce",
        category: "dev_web",
        description: "Plateforme e-commerce.",
        tags: ["Firebase", "Tailwind"],
        video: kivipVid,
        link: "https://kivip.vercel.app/"
    },
    {
        id: 2,
        title: "dev_web",
        category: "dev_web",
        description: "Une plateforme de formation technologique intuitive permettant de consulter des programmes complets et de s'inscrire via un processus de paiement simplifié par Wave Business sans L'api wave .",
        tags: ["React", "Firebase"],
        video: ghostechVid,
        link: "#"
    },
    {
        id: 3,
        title: "MINI-CLONE DE APPSTORE",
        category: "dev_web",
        // category: "Mobile",
        description: "Mini-clone de appstore Avec ma touche personnelle.",
        tags: ["React"],
        video: appleStoreVid, 
        link: "https://appelstore.vercel.app"
    },
    {
        id: 4,
        title: "API RESTful Laravel",
        category: "Api",
        description: "API RESTful Laravel pour la gestion des données  avec authentification JWT, gestion de rôles et documentation complète pour intégrations tierces.",
        tags: [ "Postman","Laravel", "MySQL"],
        video: apiVid,
        link: "https://github.com/Harding10/api-laravel-"
    },
    {
        id: 5,
        title: "Barrière Automatique",
        category: "Arduino",
        description: "Contrôle d'accès intelligent via capteurs de distance et un servomoteur.",
        tags: ["Arduino", "C++"],
        video: barreVid,
        link: "https://github.com/Harding10/barre-automatique"
    },
    {
        id: 6,
        title: "RapIdfy",
        category: "dev_web",
        description: "Testeur de vitesse de frappe interactif.",
        tags: ["JS", "CSS Animation"],
        video: rapidfyVid,
        link: "https://harding10.github.io/rapidfy.github.com/"
    },
    {
        id: 7,
        title: "Pikasso Design",
        category: "Figma",
        description: "Design UI/UX d'une application de surveillance agricole intelligente avec tableau de bord de monitoring d'humidité.",
        tags: ["UI/UX", "Prototyping"],
        video: pikassoVid,
        link: "https://www.figma.com/design/t6PkSvhOOOjnIKR3gMxhTO/Untitled?node-id=0-1&p=f&t=3w83vnMOsjU5XK22-0"
    },
    {
        id: 8,
        title: "CRUD Laravel Expert",
        category: "dev_web",
        description: "Système de gestion de contenu avec authentification sécurisée.",
        tags: ["PHP", "Laravel", "Mysql"],
        video: crudLaravelVid,
        link: "https://github.com/Harding10/crub_laravel"
    }
];