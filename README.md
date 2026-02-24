#  Carbon Footprint

Une application web pour calculer son empreinte carbone. L'idée c'est simple : tu réponds à quelques questions sur tes habitudes (comment tu te déplaces, ce que tu manges, ton usage du numérique) et l'app te donne ton bilan avec des graphiques et des conseils pour réduire ton impact.


## Ce que j'ai utilisé

- **Next.js** — le framework React pour le routing et la structure
- **CSS Modules** — pour le style, pas de Bootstrap, tout est fait à la main
- **Chart.js** — pour les graphiques (camembert + barres)
- **React Icons** — pour les icônes
- **API Impact CO2 (ADEME)** — les facteurs d'émission viennent de données officielles

## Les fonctionnalités

- Formulaire en 3 étapes (Transport → Alimentation → Numérique)
- Dashboard avec le score total en kg CO₂/semaine
- Graphique en camembert pour voir la répartition
- Comparaison avec la moyenne française 
- Responsive (ça marche sur mobile)
- Vidéo en fond sur la page d'accueil et les résultats


## Structure du projet
```
src/
├── pages/          → les pages (accueil, calculateur, résultats)
├── components/     → les composants réutilisables (Navbar, Footer, graphiques...)
├── styles/         → les fichiers CSS modules
└── utils/          → la logique de calcul (facteurs d'émission, conseils)
```



## Auteur

**Don Belly Star NDANGA**  
L3 MIASHS Parcours Informatique — Université Toulouse Jean Jaurès  
[LinkedIn](https://www.linkedin.com/in/don-belly-star-ndanga/) · [GitHub](https://github.com/Belly2001)