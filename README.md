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

## Les avis : à traiter avant publication

Les six témoignages en ligne sont **reformulés à partir des avis Google de l'auto-école de Coquelles**, où Olivier exerçait auparavant. Ils ne sont pas publiables en l'état sur ce site.

Trois raisons :

1. **Ils appartiennent à leurs auteurs.** Le texte d'un avis est une œuvre de son rédacteur. Le republier ailleurs, même reformulé, sans son accord, est juridiquement fragile.
2. **Ils ont été déposés pour un autre établissement.** L'article L. 111-7-2 du code de la consommation impose d'indiquer si les avis font l'objet d'un contrôle et, le cas échéant, leurs modalités de collecte. Afficher sous Olive Conduite des avis recueillis par l'auto-école de Coquelles, sans le dire, relève de la pratique commerciale trompeuse.
3. **La note de 4,8 sur 132 avis est inventée.** Elle doit correspondre à votre fiche Google réelle.

Trois façons légitimes de valoriser le passé d'Olivier :

- Écrire une phrase de contexte assumée, sans reproduire les avis : « Olivier a formé plusieurs centaines d'élèves à l'auto-école de Coquelles, notée 4,7 sur Google. »
- Recontacter d'anciens élèves et leur demander de déposer un avis sur la nouvelle fiche Google d'Olive Conduite. C'est long mais c'est propre, et ça alimente le référencement local.
- Recueillir un accord écrit d'un ou deux anciens élèves pour citer leur témoignage nommément sur le site.

Dernier point : si vous publiez des avis, vous ne pouvez pas supprimer les négatifs. La fiche d'origine comporte un avis à 1 sur 5. Un mur d'avis uniquement élogieux est un signal de défiance pour le lecteur autant que pour la DGCCRF.

## Les données structurées

Le fichier contient un bloc JSON-LD en fin de `<head>` avec deux entités : `DrivingSchool` (coordonnées, horaires, zone desservie, catalogue de tarifs, moniteur) et `FAQPage` (cinq questions). Mettez-le à jour en même temps que le contenu visible, les deux doivent concorder.

**Il n'y a volontairement pas de `aggregateRating`.** Google ignore depuis 2019 les notes auto-déclarées par une entreprise sur son propre site, et les marquer peut valoir une action manuelle. Les étoiles qui s'affichent dans les résultats locaux et sur Maps proviennent de votre fiche Google Business Profile, pas du code du site. Pour les obtenir, créez et vérifiez la fiche, c'est là que se joue le trafic local.

Testez le balisage sur `search.google.com/test/rich-results` après chaque modification.

## Les images

Toutes les illustrations sont des SVG dessinés à la main dans le fichier : la voiture, la voiturette, la scène du hero, le portrait d'Olivier, les pictogrammes des formations. Aucun fichier externe, aucun droit à payer, aucun risque de lien mort.

Trois endroits gagneraient à recevoir de vraies photos :

| Emplacement | Ce qu'il faut | Comment faire |
|---|---|---|
| Portrait d'Olivier, section `#olivier` | Photo verticale, format 4/5, 800 × 1000 px minimum | Le fichier `olivier.jpg` est en place mais fait 200 × 200 px, il sera flou en grand. Remplacez-le par une version haute définition sous le même nom |
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
