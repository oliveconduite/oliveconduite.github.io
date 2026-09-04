# Olive Conduite

Site vitrine d'auto-école, page unique, sans dépendance ni build. Un seul fichier `index.html` qui contient le HTML, le CSS, le JavaScript et toutes les illustrations en SVG.

Thème clair, accents orange, noir réservé au logo, au bandeau, à la section voiture sans permis et au pied de page.

## Mise en ligne sur GitHub Pages

1. Déposer `index.html` et `README.md` à la racine d'un dépôt public.
2. Settings puis Pages, source *Deploy from a branch*, branche `main`, dossier `/ (root)`, Save.
3. Le site répond une à deux minutes plus tard.

## Ce qu'il reste à remplacer

| À changer | Où le trouver |
|---|---|
| Adresse, téléphone, e-mail | Barre de statut, section rendez-vous, pied de page |
| Numéro d'agrément préfectoral | Pied de page |
| Tarifs des trois packs | Objet `TARIFS` dans le script, une ligne par pack et par volume d'heures : `p` est le prix pratiqué, `r` le prix de référence barré |
| Tarifs du simulateur | Attributs `value` des `input` de la section `#budget` |
| Prix de l'heure supplémentaire | Constante `HEURE`, actuellement 48 |
| Horaires | Tableau `#hours-table` **et** objet `PLAGES` dans le script, les deux doivent rester cohérents |
| Créneaux de rendez-vous | Objet `CRENEAUX`, une liste d'heures par jour de la semaine |
| Sessions voiture sans permis | Tableau `SESSIONS` : `dans` est le nombre de jours à partir d'aujourd'hui, `prises` le nombre de places vendues |
| Avis Google | Section `#avis`, les six `<article>`, la note et le nombre d'avis |
| Logo | Le bloc `<svg class="mark">` dans la nav |
| Permis Score | Tableaux `COMP` (les neuf compétences) et `STAGES` (six paliers, `h` = heures effectuées, `v` = notes) dans le script. `SEUIL` fixe le niveau examen, `RYTHME` le nombre de points gagnés par heure et sert au calcul des heures restantes |
| Parcours Permis Confiance | Section `#confiance`, tarif dans le simulateur et dans la FAQ |

## Les images

Toutes les illustrations sont des SVG dessinés à la main dans le fichier : la voiture, la voiturette, la scène du hero, le portrait d'Olivier, les pictogrammes des formations. Aucun fichier externe, aucun droit à payer, aucun risque de lien mort.

Trois endroits gagneraient à recevoir de vraies photos :

| Emplacement | Ce qu'il faut | Comment faire |
|---|---|---|
| Portrait d'Olivier, section `#olivier` | Photo verticale, format 4/5 | Remplacer le `<svg>` dans `.portrait` par `<img src="olivier.jpg" alt="Olivier, moniteur">` |
| Illustration du hero | Photo de la voiture-école ou de la devanture | Remplacer le grand `<svg>` de `.hero-grid` par une `<img>` |
| Logos partenaires, section `#partenaires` | Fichiers officiels | Remplacer chaque `.logo-box` par une `<img>` |

Vos propres photos valent toujours mieux que du stock. À défaut, Unsplash, Pexels et Pixabay proposent des images libres, avec les mots-clés *driving school*, *learner driver*, *car interior*, *microcar*. Vérifiez la licence de chaque fichier avant publication.

## Points juridiques à traiter avant la mise en ligne

**Les avis sont inventés.** Les six témoignages sont des exemples de maquette. Les publier tels quels serait une pratique commerciale trompeuse au sens de l'article L. 121-2 du code de la consommation, et Google supprime les fiches qui fabriquent des avis. Remplacez-les par vos avis réels ou branchez l'API Google Places.

**Le prix barré.** Un tarif de référence barré doit correspondre au prix le plus bas réellement pratiqué au cours des trente derniers jours, en application de l'article L. 112-1-1 du code de la consommation. Si l'offre de rentrée n'existe pas, supprimez la ligne `.old` des trois packs.

**La mention Ediser.** Le partenariat doit exister réellement, et l'usage de la marque et du logo doit être autorisé par Ediser. Même chose pour les logos ANTS et CPF.

**Mentions obligatoires.** Les liens du pied de page sont inertes. Un site d'auto-école doit publier ses mentions légales, ses conditions générales de vente, sa politique de protection des données et les coordonnées de son médiateur de la consommation. Les tarifs affichés doivent correspondre au contrat.

Aucune bannière cookies n'est nécessaire en l'état : le site ne dépose aucun cookie et n'utilise aucun traceur. Si vous ajoutez Google Analytics ou une carte Google Maps embarquée, il en faudra une.

## Les trois fonctions à brancher

**Rendez-vous.** Le sélecteur fonctionne mais ne réserve rien, l'occupation affichée est simulée par une formule. Pour un vrai agenda, remplacez la section par un widget Cal.com ou Calendly, gratuits en version de base.

**Paiement.** Le bouton « Régler une échéance » ouvre une alerte tant que son `href` vaut `#`. Créez un lien de paiement Stripe, SumUp ou PayPal et collez-le à la place.

**Formulaire.** GitHub Pages ne sert que du statique. Branchez Formspree en remplaçant `<form id="formRdv">` par `<form id="formRdv" action="https://formspree.io/f/VOTRE_ID" method="POST">` et en supprimant le bloc `addEventListener('submit', ...)` correspondant.
