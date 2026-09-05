# Olive Conduite

Site vitrine d'auto-école, page unique, sans dépendance ni build. Un seul fichier `index.html` qui contient le HTML, le CSS, le JavaScript et toutes les illustrations en SVG.

Thème clair, accents orange, noir réservé au logo, au bandeau, à la section voiture sans permis et au pied de page.

## Mise en ligne sur GitHub Pages

**Trois fichiers sont nécessaires** : `index.html`, `banniere-olive-conduite.jpg` et `agence-interieur.jpg`. Ce sont les deux seuls visuels externes, tous les autres sont encodés dans la page et chargés en différé. Si vous ne déposez que le HTML, ces deux images apparaîtront cassées.

1. Déposer `index.html`, `banniere-olive-conduite.jpg`, `agence-interieur.jpg` et `README.md` à la racine d'un dépôt public.
2. Settings puis Pages, source *Deploy from a branch*, branche `main`, dossier `/ (root)`, Save.
3. Le site répond une à deux minutes plus tard.

## Ce qu'il reste à remplacer

| À changer | Où le trouver |
|---|---|
| Téléphone | Placeholder `03 00 00 00 00`. Le numéro de l'ancienne enseigne ne sera pas conservé, remplacez-le dès qu'il est attribué : barre de statut, section agence, pied de page et bloc JSON-LD |
| E-mail | `contact@oliveconduite.fr`, à créer ou à corriger |
| Numéro d'agrément préfectoral | Pied de page |
| Tarifs des packs | Objet `PACKS` dans le script : `manu` et `auto` par pack, plus le libellé des heures. Les mêmes montants sont repris dans le simulateur (`value` et `data-h` des `input`), dans le tableau des tarifs à l'unité et dans le catalogue JSON-LD : les quatre doivent rester cohérents |
| Tarifs à l'unité | Section `#budget`, onglet « Tarifs à l'unité », six tableaux `.tarifs` |
| Échéanciers | Section `#budget`, onglet « Paiement et aides », blocs `.echeances` |
| Tarifs du simulateur | Attributs `value` des `input` de la section `#budget` |
| Prix de l'heure supplémentaire | Attribut `data-h` de chaque `input` du simulateur : 45 € en boîte manuelle, 50 € en automatique |
| Horaires | Tableau `#hours-table` **et** objet `PLAGES` dans le script, les deux doivent rester cohérents |
| Créneaux de rendez-vous | Objet `CRENEAUX`, une liste d'heures par jour de la semaine |
| Sessions voiture sans permis | Tableau `SESSIONS` : `dans` est le nombre de jours à partir d'aujourd'hui, `prises` le nombre de places vendues |
| Avis Google | Section `#avis`, les six `<article>`, la note et le nombre d'avis |
| Logo | `<symbol id="logo-oc">` dans le bloc de définitions SVG, en haut du `<body>`. Entièrement vectoriel : jauge, aiguille, volant et lettrages sont des tracés, aucune police n'est nécessaire au rendu. Les parties noires utilisent `currentColor`, donc le logo s'inverse tout seul en blanc dans le pied de page. L'orange est en dur (`#F26522`) |
| Signature | « Conduire en confiance, avancer en liberté. » Elle apparaît sous le titre du hero, en ouverture de la section agence, dans le pied de page et dans le JSON-LD |
| Photo de vitrine | Classe `.vitrine`, en ouverture de la section rendez-vous |
| Permis Score | Tableaux `COMP` (les neuf compétences) et `STAGES` (six paliers, `h` = heures effectuées, `v` = notes) dans le script. `SEUIL` fixe le niveau examen, `RYTHME` le nombre de points gagnés par heure et sert au calcul des heures restantes |
| Parcours Permis Confiance | Section `#confiance`, tarif dans le simulateur et dans la FAQ |

## Les tarifs

Tous les montants du site proviennent des plaquettes en vigueur au 1<sup>er</sup> janvier 2025 : Pack Classic, Pack Accompagné, Pack Supervisé, Pack Sénior et la grille des tarifs à l'unité. Les totaux ont été recalculés poste par poste et concordent exactement avec les prix affichés sur les plaquettes.

**Deux points restent à compléter.**

L'échéancier du Pack Supervisé n'était pas lisible sur les documents transmis. Le site renvoie donc vers l'agence pour ce pack. Dès que vous l'avez, il s'ajoute dans l'onglet « Paiement et aides » sur le modèle des deux autres.

Le pictogramme officiel de la conduite accompagnée a été retiré en même temps que l'ancienne carte. Il pesait 33 Ko encodé. Si vous le voulez sur la carte du Pack Accompagné, dites-le, mais la vitrine le montre déjà.

**Le permis remorque BE a disparu du site.** Il ne figure ni sur l'enseigne ni sur aucune plaquette, et n'apparaît pas dans l'agrément affiché. Il est remplacé par le Pack Sénior.

## Ce que le site ne dit pas, et pourquoi

Deux sujets sont volontairement absents des textes :

- **La continuité des dossiers en cours.** Une reprise ne fait pas automatiquement passer les contrats de formation de l'ancienne structure à la nouvelle. C'est un point juridique à trancher avec le cédant et, le cas échéant, avec les élèves concernés. La FAQ invite simplement à prendre contact.
- **Le maintien du numéro de téléphone.** Il change. Aucune mention de continuité téléphonique n'apparaît sur le site.

N'ajoutez rien sur ces deux points tant que le montage de la reprise n'est pas signé.

## Les avis et la reprise

Olive Conduite reprend l'auto-école de Coquelles, 1087 avenue Charles de Gaulle, où Olivier enseignait. Ça change complètement la situation des avis : ils appartiennent à l'établissement repris, pas à un concurrent.

**Ne créez pas une nouvelle fiche Google.** Revendiquez la fiche existante « Auto Ecole de Coquelles » et renommez-la en « Olive Conduite ». Vous conservez la note de 4,7, les quatorze avis, l'historique et l'ancienneté du référencement local, qui vaut des mois de travail. Créer une fiche neuve remet le compteur à zéro et fait cohabiter deux établissements à la même adresse, ce que Google pénalise.

Les six témoignages du site sont **reformulés** à partir de ces avis. Deux options avant publication :

- Rétablir les textes d'origine, avec le prénom et la date, en indiquant qu'ils proviennent de la fiche Google de l'établissement.
- Mieux : brancher un widget relié à l'API Google Places, qui affiche les avis réels et se met à jour tout seul. Plus aucune question de fidélité au texte.

Deux points de vigilance. La note affichée doit suivre la fiche réelle, pensez à la corriger quand elle bouge. Et si vous publiez des avis, vous ne pouvez pas masquer les négatifs : la fiche comporte un avis à 1 sur 5. Un mur de cinq étoiles inspire moins confiance qu'un 4,7 assumé.

Enfin, certains anciens avis citent l'ancienne gérante. Ne les reprenez pas sur le site, ils créent une confusion sur l'identité du moniteur.

## Les données structurées

Le fichier contient un bloc JSON-LD en fin de `<head>` avec deux entités : `DrivingSchool` (coordonnées, horaires, zone desservie, catalogue de tarifs, moniteur) et `FAQPage` (cinq questions). Mettez-le à jour en même temps que le contenu visible, les deux doivent concorder.

**Il n'y a volontairement pas de `aggregateRating`.** Google ignore depuis 2019 les notes auto-déclarées par une entreprise sur son propre site, et les marquer peut valoir une action manuelle. Les étoiles qui s'affichent dans les résultats locaux et sur Maps proviennent de votre fiche Google Business Profile, pas du code du site. Pour les obtenir, créez et vérifiez la fiche, c'est là que se joue le trafic local.

Testez le balisage sur `search.google.com/test/rich-results` après chaque modification.

## Les images

Neuf photographies sont **encodées en base64 dans `index.html`** : la vitrine, la photo d'Olivier, la voiturette, cinq photographies en médaillon et le pictogramme de la conduite accompagnée : la photo d'Olivier, cinq photographies libres de droit en médaillon rond et le pictogramme officiel de la conduite accompagnée. Aucun fichier image à déposer, le site reste en un seul fichier. **La page pèse 455 Ko. C'est la limite haute.** Le prochain visuel doit passer en fichier séparé, sinon le temps de chargement sur réseau mobile devient pénalisant. Le logo, lui, est vectoriel et ne pèse que 16 Ko, réutilisé deux fois par une simple référence `<use>`.

Le lettrage du logo est vectorisé à partir de Saira en graisse 900, largeur étendue, sous licence SIL Open Font. C'est une approximation de la typographie d'origine, pas la police exacte. Quand le logo sera arrêté, demandez le fichier vectoriel au graphiste : il suffira de remplacer le contenu du `<symbol>`.

Toutes les photos passent par le même traitement (`.pc`) : recadrage carré, médaillon rond, cerne noir de 5 px, disque orange décalé en arrière-plan, léger ajustement de saturation. C'est ce traitement qui les fait tenir ensemble malgré leurs origines différentes. Si vous ajoutez une photo, réutilisez ce composant plutôt que de poser l'image telle quelle.

Si vous dépassez une dizaine de photos, sortez-les en fichiers séparés : au-delà, le base64 pénalise le temps de chargement parce que les images ne sont plus mises en cache indépendamment de la page.

**Vérifiez les licences.** Les photos viennent de banques d'images. Conservez la preuve de licence de chacune, certaines banques exigent une mention de l'auteur. Le pictogramme de la conduite accompagnée est un visuel réglementaire, son usage est libre dans un contexte de formation.

## Les images de remplacement

Toutes les illustrations sont des SVG dessinés à la main dans le fichier : la voiture, la voiturette, la scène du hero, le portrait d'Olivier, les pictogrammes des formations. Aucun fichier externe, aucun droit à payer, aucun risque de lien mort.

Trois endroits gagneraient à recevoir de vraies photos :

| Emplacement | Ce qu'il faut | Comment faire |
|---|---|---|
| Portrait d'Olivier, section `#olivier` | Photo verticale, format 4/5, 800 × 1000 px minimum | La photo actuelle est **encodée en base64 directement dans `index.html`**, il n'y a donc aucun fichier image à déposer. Pour la remplacer : déposez `olivier.jpg` à la racine du dépôt et remettez `src="olivier.jpg"` à la place de la longue chaîne `data:image/jpeg;base64,...`. La photo actuelle fait 200 × 200 px et sera floue en grand |
| Illustration du hero | Photo de la voiture-école ou de la devanture | Remplacer le grand `<svg>` de `.hero-grid` par une `<img>` |
| Logos partenaires, section `#partenaires` | Fichiers officiels | Remplacer chaque `.logo-box` par une `<img>` |

Vos propres photos valent toujours mieux que du stock. À défaut, Unsplash, Pexels et Pixabay proposent des images libres, avec les mots-clés *driving school*, *learner driver*, *car interior*, *microcar*. Vérifiez la licence de chaque fichier avant publication.

## Points juridiques à traiter avant la mise en ligne

**Les avis sont inventés.** Les six témoignages sont des exemples de maquette. Les publier tels quels serait une pratique commerciale trompeuse au sens de l'article L. 121-2 du code de la consommation, et Google supprime les fiches qui fabriquent des avis. Remplacez-les par vos avis réels ou branchez l'API Google Places.

**Le prix barré.** Un tarif de référence barré doit correspondre au prix le plus bas réellement pratiqué au cours des trente derniers jours, en application de l'article L. 112-1-1 du code de la consommation. Si l'offre de rentrée n'existe pas, supprimez la ligne `.old` des trois packs.

**La mention Ediser.** Le partenariat doit exister réellement, et l'usage de la marque et du logo doit être autorisé par Ediser. Même chose pour les logos ANTS et CPF.

**Mentions obligatoires.** La section `#legal` contient les trois blocs requis : mentions légales, données personnelles et cookies, conditions générales de vente. Les crochets `[...]` sont à compléter avant la mise en ligne : forme juridique, capital, RCS, SIRET, TVA, nom du gérant, numéro d'agrément préfectoral, hébergeur, date d'application des tarifs et coordonnées du médiateur de la consommation.

Le médiateur n'est pas optionnel : tout professionnel vendant à des consommateurs doit adhérer à un dispositif de médiation et en publier les coordonnées (article L. 612-1 du code de la consommation). L'adhésion se fait auprès d'un médiateur agréé, comptez quelques dizaines d'euros par an.

**Pas de bannière cookies, et c'est volontaire.** Le site ne dépose aucun cookie, n'utilise ni mesure d'audience ni traceur, et les simulateurs tournent entièrement dans le navigateur. L'article 82 de la loi Informatique et Libertés n'impose le consentement que pour les traceurs non essentiels : afficher un bandeau ici serait inutile, et la CNIL sanctionne les bandeaux trompeurs. Le pied de page indique explicitement l'absence de cookies.

Le jour où vous ajoutez Google Analytics, une carte Google Maps embarquée, un pixel Meta ou un chat en ligne, il faudra un vrai bandeau avec refus aussi simple que l'acceptation, et un blocage des traceurs avant consentement.

**Un point à corriger.** Les polices sont chargées depuis Google Fonts, ce qui transmet l'adresse IP du visiteur à Google. Des tribunaux allemands ont condamné cette pratique, la CNIL recommande l'auto-hébergement. Téléchargez les fichiers `.woff2` de Big Shoulders Display et Barlow, déposez-les dans le dépôt et remplacez la balise `<link>` par une règle `@font-face`. La mention figure en attendant dans la politique de données.

## Les trois fonctions à brancher

**Rendez-vous.** Le sélecteur fonctionne mais ne réserve rien, l'occupation affichée est simulée par une formule. Pour un vrai agenda, remplacez la section par un widget Cal.com ou Calendly, gratuits en version de base.

**Paiement.** Le bouton « Régler une échéance » ouvre une alerte tant que son `href` vaut `#`. Créez un lien de paiement Stripe, SumUp ou PayPal et collez-le à la place.

**Formulaire.** GitHub Pages ne sert que du statique. Branchez Formspree en remplaçant `<form id="formRdv">` par `<form id="formRdv" action="https://formspree.io/f/VOTRE_ID" method="POST">` et en supprimant le bloc `addEventListener('submit', ...)` correspondant.
