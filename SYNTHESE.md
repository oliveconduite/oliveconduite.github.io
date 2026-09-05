# Olive Conduite — Synthèse et feuille de route

Document de suivi du site vitrine. Deux parties : ce qui est fait, ce qui reste à faire avant publication.

---

# PARTIE 1 — CE QUI EST FAIT

## Le contexte

Olivier reprend la gérance de l'auto-école de Coquelles, 1087 avenue Charles de Gaulle, où il enseignait. L'établissement prend le nom d'Olive Conduite. Le site remplace une simple présence Google et sert de vitrine, d'outil de conversion et de support de référencement local.

## L'identité

**Signature** : « Conduire en confiance, avancer en liberté. », reprise de l'enseigne. Elle figure sous le titre d'accueil, en ouverture de la section agence, dans le pied de page et dans les données structurées.

**Accroche** : « Prêt à conduire. » en très grand sur l'écran d'accueil, avec la promesse développée juste en dessous.

**Logo** : entièrement vectoriel, reconstruit en tracés. Jauge à sept segments trapézoïdaux, aiguille effilée, moyeu à trois couches, volant à la place du O de CONDUITE, tirets biseautés autour d'AUTO-ÉCOLE. Le lettrage est vectorisé depuis Saira en graisse 900 large, une approximation de la typographie d'origine. Les parties sombres utilisent `currentColor`, donc le logo s'inverse tout seul en blanc dans le pied de page. Poids : 17 Ko, net à toutes les tailles.

**Charte** : fond blanc dominant, beige clair en alternance, noir réservé au bandeau défilant, au châssis du téléphone et au pied de page. Orange `#F26522` en accent, `#BF4A12` pour le texte orange sur blanc. Typographies Big Shoulders Display et Barlow.

**Mascotte** : une olive orange cerclée de noir tenant une clé de voiture, dessinée de zéro. Elle ouvre la page sur mobile, juste sous le logo, et illustre la section « Tout se fait en ligne ».

## Les arguments commerciaux

**Le Permis Score** est le cœur du positionnement. Neuf compétences notées sur cent après chaque leçon, un seuil examen à 80, une estimation d'heures restantes qui se recalcule, et les trois compétences bloquantes mises en avant. La démonstration est interactive : un curseur fait défiler six paliers de 4 à 24 heures, l'anneau de progression se remplit dans une maquette de téléphone, la courbe se dessine, le verdict bascule au vert.

**Le moniteur unique.** Olivier, vingt-cinq ans de métier, à Marck puis à Coquelles. Photo, citation, section dédiée, et un tableau comparatif face aux plateformes en ligne qui assume la différence de prix au lieu de la contourner.

**Permis Confiance**, parcours pour les publics mal adressés : peur du volant, échecs répétés, formation abandonnée, peur de l'autoroute, mauvaise expérience avec un moniteur, annulation ou invalidation, reprise après suspension, longue interruption. Signature : « Vous avez peur de conduire ? On commence par vous rassurer. »

**Cinq engagements** en pentagone : réussite, confiance, rapidité comprise comme l'absence d'heures inutiles, transparence, suivi.

## Les contenus factuels

Tous les tarifs proviennent des plaquettes en vigueur au 1er janvier 2025. Les totaux ont été recalculés poste par poste et concordent exactement.

| Pack | Manuelle | Automatique | Échéancier |
|---|---|---|---|
| Classic, dès 16 ans | 1 245 € | 995 € | 3 fois : 295 / 475 / 475 · 295 / 350 / 350 |
| Accompagné, dès 15 ans | 1 540 € | 1 300 € | 4 fois : 385 × 4 · 325 × 4 |
| Supervisé, dès 18 ans | 1 340 € | 1 100 € | 4 fois : 335 × 4 · 275 × 4 |
| Sénior, plus de 65 ans | 99 € seul · 149 € en couple | — | 2 fois : 49 ou 99, puis 50 |

Les intitulés reprennent exactement ceux des plaquettes : Permis B – Pack Classic, Pack Accompagné, Pack Supervisé, Pack Sénior, et Pack AM pour la voiturette.

Le sélecteur de boîte de vitesses recalcule les trois packs d'un coup et adapte la ligne des heures obligatoires, 20 h à 45 € en manuelle, 13 h à 50 € en automatique.

Trente prestations à l'unité sont détaillées dans un onglet dédié, du dossier administratif au disque AAC magnétique. Le simulateur de budget part des vrais forfaits et applique le bon tarif horaire selon la boîte.

La liste des pièces à fournir se génère à partir de quatre questions : formation, âge, permis déjà détenu, justificatif de domicile à son nom ou non. Elle reprend exactement vos formulaires d'inscription. Elle s'imprime ou s'envoie par e-mail au candidat.

## Les fonctions du site

- Barre de statut qui calcule seule si le bureau est ouvert
- Bandeau de reprise en tête d'accueil
- Sélecteur de rendez-vous jour puis créneau, avec récapitulatif
- Compteur de sessions voiture sans permis avec places restantes
- Formulaire de contact avec zone libre conditionnelle sur deux motifs
- Barre d'action fixe sur mobile avec retour en haut intégré
- Neuf photographies en médaillons harmonisés, photo de vitrine détourée
- Section légale complète : mentions, données personnelles, conditions générales
- Données structurées `DrivingSchool` et `FAQPage` pour le référencement local
- Testé sur cinq largeurs d'écran de 320 à 1280 pixels

## Les fichiers livrés

| Fichier | Rôle |
|---|---|
| `index.html` | Le site, 360 Ko |
| `banniere-olive-conduite.jpg` | Bannière illustrée pleine largeur, **à déposer avec le HTML** |
| `README.md` | Documentation technique : où modifier quoi |
| `SYNTHESE.md` | Ce document |
| `qr-oliveconduite.svg` et `.png` | QR code seul, logo au centre, vectoriel et 1200 px |
| `qr-autocollant-voiture.svg` et `.png` | Autocollant complet pour les véhicules |

---

# PARTIE 2 — CE QUI RESTE À FAIRE

## Étape 1 — Les informations manquantes (à faire avant tout)

Sans elles, le site n'est pas publiable en l'état. Toutes sont repérables dans `index.html` par une recherche.

- [ ] **Numéro de téléphone.** Placeholder `03 00 00 00 00` à quatre endroits : barre de statut, section agence, pied de page, bloc JSON-LD. Le numéro de l'ancienne enseigne n'a volontairement pas été repris.
- [ ] **Adresse e-mail.** `contact@oliveconduite.fr` est à créer ou à corriger.
- [ ] **Numéro d'agrément préfectoral.** Obligatoire, article R. 213-2 du code de la route. Pied de page et mentions légales.
- [ ] **Forme juridique, capital, RCS, SIRET, TVA intracommunautaire.** Mentions légales, entre crochets.
- [ ] **Nom complet du gérant**, directeur de la publication.
- [ ] **Hébergeur** : nom, adresse, téléphone. Si vous restez sur GitHub Pages, c'est GitHub Inc., 88 Colin P. Kelly Jr Street, San Francisco, CA 94107, États-Unis.
- [ ] **Médiateur de la consommation.** Adhésion obligatoire, article L. 612-1 du code de la consommation. Quelques dizaines d'euros par an auprès d'un médiateur agréé. Ses coordonnées doivent figurer dans les conditions générales.

## Étape 2 — La fiche Google, avant même le site

C'est le point le plus rentable de toute la liste.

- [ ] **Revendiquer la fiche existante « Auto Ecole de Coquelles » et la renommer en Olive Conduite.** Ne créez surtout pas de nouvelle fiche : vous conservez la note de 4,7, les quatorze avis, l'historique et l'ancienneté du référencement local. Une fiche neuve repart de zéro et deux établissements à la même adresse déclenchent une pénalité.
- [ ] Mettre à jour horaires, photos, description, catégorie et le lien vers le site.
- [ ] Demander à d'anciens élèves de déposer un avis sous la nouvelle enseigne.

## Étape 3 — Les avis du site

Les six témoignages affichés sont **reformulés** à partir des avis réels de l'établissement. Deux sorties possibles :

- [ ] Rétablir les textes d'origine avec prénom et date, en indiquant qu'ils proviennent de la fiche Google de l'établissement.
- [ ] Mieux : brancher un widget relié à l'API Google Places, qui affiche les avis réels et se met à jour tout seul.

Deux règles à respecter : la note affichée doit suivre la fiche réelle, et vous ne pouvez pas masquer les avis négatifs si vous publiez des avis. La fiche comporte un avis à 1 sur 5.

## Étape 4 — Brancher le formulaire de contact

GitHub Pages ne sert que des fichiers statiques : le formulaire ne peut pas envoyer d'e-mail tout seul. Trois options, par ordre de simplicité.

**Formspree**, gratuit jusqu'à 50 envois par mois. Créez un formulaire sur formspree.io, récupérez l'identifiant, puis dans `index.html` :

```html
<form id="formRdv" action="https://formspree.io/f/VOTRE_ID" method="POST">
```

et supprimez le bloc `document.getElementById('formRdv').addEventListener('submit', ...)` dans le script, sinon il bloque l'envoi. Ajoutez `name="nom"`, `name="tel"`, `name="mail"`, `name="objet"`, `name="message"` sur les champs, sans quoi Formspree reçoit des valeurs vides.

**Netlify Forms**, gratuit jusqu'à 100 envois par mois, mais il faut héberger sur Netlify plutôt que GitHub Pages. Plus confortable ensuite, notamment pour le domaine.

**Web3Forms**, gratuit et sans compte, une clé par e-mail.

- [ ] Choisir la solution, brancher, et **faire un envoi de test** en vérifiant la réception, y compris dans les indésirables.

## Étape 5 — Brancher l'agenda de rendez-vous

Le sélecteur de créneaux fonctionne mais ne réserve rien : l'occupation affichée est calculée par une formule. Il sert de démonstration, pas d'agenda.

**Cal.com**, gratuit pour un utilisateur, open source, connecté à Google Agenda. Créez un type de rendez-vous « Entretien d'inscription, 30 minutes », définissez vos disponibilités réelles, puis remplacez la colonne de gauche de la section rendez-vous par l'intégration en ligne :

```html
<div style="height:640px"><iframe src="https://cal.com/VOTRE-LIEN/inscription"
  style="width:100%;height:100%;border:0"></iframe></div>
```

**Calendly**, équivalent, gratuit en version de base, plus connu du grand public.

- [ ] Créer le compte, saisir les vraies disponibilités d'Olivier, brancher.
- [ ] Vérifier que le rendez-vous atterrit bien dans son agenda et qu'il reçoit une notification.

Attention : un iframe Cal.com ou Calendly dépose des cookies. **À partir de là, une bannière cookies devient obligatoire.**

## Étape 6 — Brancher le paiement en ligne

Le bouton « Régler une échéance » ouvre une alerte tant que son lien vaut `#`.

**Stripe Payment Links**, sans développement : créez un lien de paiement par produit dans le tableau de bord Stripe, collez l'adresse dans le `href` du bouton. Commission d'environ 1,5 % plus 25 centimes par transaction européenne.

**SumUp** ou **PayPal** proposent l'équivalent.

- [ ] Créer les liens de paiement, au minimum un par échéance courante.
- [ ] Coller le lien dans le bouton `id="payLink"` et supprimer le gestionnaire d'alerte dans le script.

## Étape 7 — Le nom de domaine

Le site est aujourd'hui sur `oliveconduite.github.io`. Pour `oliveconduite.fr` ou `.com` :

- [ ] Vérifier la disponibilité chez OVH, Gandi ou Namecheap. Environ 12 € par an.
- [ ] Chez le registrar, créer quatre enregistrements A vers `185.199.108.153`, `185.199.109.153`, `185.199.110.153` et `185.199.111.153`, plus un CNAME `www` vers `oliveconduite.github.io`.
- [ ] Dans Settings puis Pages du dépôt, saisir le domaine dans « Custom domain », puis cocher « Enforce HTTPS » une fois la vérification passée.
- [ ] **Regénérer le QR code** avec la nouvelle adresse, ou plus malin : voir l'étape suivante.

## Étape 8 — Le QR code des véhicules

Deux fichiers sont livrés, `qr-oliveconduite` pour le code seul et `qr-autocollant-voiture` pour l'autocollant complet, avec le logo et la mention « Flashez, on vous explique tout ». L'adresse n'y figure volontairement pas : elle changera avec le nom de domaine, alors que le code, lui, reste redirigeable. Les deux existent en SVG vectoriel, à donner tel quel à l'imprimeur, et en PNG. Le décodage a été vérifié jusqu'à 160 pixels de large.

**Dimension conseillée sur un véhicule** : 12 à 15 cm de côté pour le code seul. La règle est simple, la distance de lecture vaut environ dix fois la largeur du code. À 15 cm, on flashe confortablement à un mètre cinquante, ce qui correspond à quelqu'un debout à côté de la voiture garée.

**Le point important** : ce QR pointe aujourd'hui vers `oliveconduite.github.io`. Le jour où vous prenez un vrai domaine, tous les autocollants déjà collés deviennent obsolètes.

- [ ] **Solution recommandée** : passer par un QR dynamique dès maintenant. Des services comme QR Code Generator, Bitly ou Uniqode fournissent un code dont la destination se change à tout moment sans réimprimer. Vous collez une fois, vous redirigez autant que vous voulez. Comptez quelques euros par mois.
- [ ] **Solution gratuite** : garder l'adresse GitHub et, le jour du changement, créer une page de redirection à cette adresse vers le nouveau domaine. Le dépôt GitHub reste actif, il redirige, et les autocollants continuent de fonctionner. Une ligne suffit dans `index.html` : `<meta http-equiv="refresh" content="0;url=https://www.oliveconduite.fr">`.

## Étape 9 — Conformité, à traiter avant la mise en ligne publique

- [ ] **Auto-héberger les polices.** Elles viennent de Google Fonts, ce qui transmet l'adresse IP du visiteur à Google. Des tribunaux allemands ont condamné cette pratique, la CNIL recommande l'auto-hébergement. Téléchargez les fichiers `.woff2` de Big Shoulders Display et Barlow, déposez-les dans le dépôt, remplacez la balise `link` par des règles `@font-face`. La mention figure en attendant dans la politique de données.
- [ ] **Bannière cookies**, uniquement si vous ajoutez Cal.com, Google Analytics, une carte Google Maps embarquée, un pixel Meta ou un chat en ligne. En l'état le site n'en dépose aucun et le pied de page le dit.
- [ ] **Licences des photographies.** Conservez la preuve de licence de chaque image. Certaines banques exigent une mention de l'auteur.
- [ ] **Photo de la voiturette.** C'est une image de presse Renault du Mobilize Duo. Vérifiez les conditions d'usage, et remplacez-la par une photo de vos propres véhicules dès que possible. Afficher un modèle qui n'est pas le vôtre pose un problème de présentation commerciale.
- [ ] **Partenariat Ediser.** La section partenaires le mentionne. Vérifiez qu'il existe et que l'usage de la marque est autorisé. Même chose pour les logos ANTS et CPF.

## Étape 10 — Les améliorations utiles ensuite

Par ordre de rapport entre effort et résultat.

- [ ] **Photo d'Olivier en haute définition.** L'actuelle fait 200 × 200 pixels et reste molle affichée en médaillon. C'est le premier visuel de confiance du site.
- [ ] **Photos de vos véhicules et de la salle de code**, pour remplacer les images de banque.
- [ ] **Logo vectoriel du graphiste.** La version actuelle est une approximation typographique. Un fichier `.ai` ou `.svg` se substitue en deux minutes au contenu du `<symbol id="logo-oc">`.
- [ ] **Sortir les autres images en fichiers séparés.** La bannière l'est déjà. Le HTML pèse 360 Ko avec huit visuels encodés. Les extraire les ferait mettre en cache indépendamment de la page et accélérerait les visites suivantes.
- [ ] **Logiciel de gestion d'auto-école.** Le Permis Score ne vaut que s'il est rempli après chaque leçon, sans exception. Packweb, Ediser ou Rousseau proposent déjà le livret numérique, le planning et la facturation pour quelques dizaines d'euros par mois. Cela évite de faire développer un espace élève de zéro.
- [ ] **Pages par commune** : Coquelles, Calais, Marck, Coulogne, Guînes. Le référencement local se gagne là, pas sur le mot « auto-école » seul.
- [ ] **Une vidéo courte d'une leçon**, ou trois témoignages filmés. C'est ce qui convertit le mieux sur ce marché.

---

## Le point de vigilance principal

Le Permis Score est votre meilleur atout et votre plus grand risque. Il n'existe aujourd'hui que sur le site. Le jour où un élève arrive à l'agence et qu'on ne lui remet rien après sa leçon, l'argument se retourne intégralement contre vous.

Avant la mise en ligne, il faut au minimum une grille papier de neuf lignes dans la voiture et la discipline de la remplir à chaque fois. Et il serait judicieux d'adosser ces neuf compétences aux quatre compétences du référentiel officiel de formation, pour que le score soit traçable dans le livret d'apprentissage et défendable face à un élève mécontent.
