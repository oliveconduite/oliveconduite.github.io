# Olive Conduite

Site vitrine d'auto-école, page unique, sans dépendance ni build. Un seul fichier `index.html` qui contient le HTML, le CSS et le JavaScript.

## Mise en ligne sur GitHub Pages

1. Créer un dépôt public, par exemple `olive-conduite`.
2. Y déposer `index.html` et ce `README.md` à la racine.
3. Dans le dépôt : **Settings** puis **Pages**.
4. Sous *Build and deployment*, choisir la source **Deploy from a branch**, branche `main`, dossier `/ (root)`, puis **Save**.
5. Le site est en ligne une à deux minutes plus tard sur `https://<votre-compte>.github.io/olive-conduite/`.

En ligne de commande :

```bash
git init
git add .
git commit -m "Site Olive Conduite"
git branch -M main
git remote add origin https://github.com/<votre-compte>/olive-conduite.git
git push -u origin main
```

## Ce qu'il reste à remplacer

Tout est en dur dans `index.html`, aucune base de données.

| À changer | Où le trouver |
|---|---|
| Adresse, téléphone, e-mail | Barre de statut en haut, section « L'agence », pied de page |
| Numéro d'agrément préfectoral | Pied de page |
| Tarifs affichés | Section `#formations`, cartes `.price` |
| Tarifs du simulateur | Attributs `value` des `input` dans la section `#budget` |
| Prix de l'heure supplémentaire | Constante `HEURE` dans le script, actuellement 48 |
| Horaires | Tableau `#hours` **et** l'objet `PLAGES` dans le script, les deux doivent rester cohérents |
| Logo | Les deux blocs `<svg>`, dans la nav et dans le hero |
| Sessions voiture sans permis | Tableau `SESSIONS` dans le script : `dans` est le nombre de jours à partir d'aujourd'hui, `prises` le nombre de places déjà vendues. `PLACES_MAX` fixe la capacité |
| Créneaux de rendez-vous | Objet `CRENEAUX` dans le script, une liste d'heures par jour de la semaine |
| Avis Google | Section `#avis`, les quatre `<article>`, la note et le nombre d'avis |
| Échéancier | Section `#paiement`, bloc `.echeances` |

## Les trois sections à brancher avant la mise en ligne

**Avis Google.** Les quatre avis affichés sont des exemples, pas de vrais avis. Les publier tels quels serait une pratique commerciale trompeuse au sens de l'article L. 121-2 du code de la consommation, et Google supprime les fiches qui inventent des avis. Deux solutions : les remplacer par vos avis réels en copiant le texte depuis votre fiche Google, ou brancher un widget qui les tire automatiquement de l'API Google Places. Le bouton « Voir tous les avis » doit pointer vers votre fiche.

**Rendez-vous en ligne.** Le sélecteur de créneaux fonctionne mais ne réserve rien : l'occupation affichée est simulée par une formule dans le script. Pour un vrai agenda, remplacez la section par un widget Cal.com ou Calendly, tous deux gratuits en version de base et intégrables en une ligne. Vous gardez alors le design en habillant l'iframe, ou vous laissez leur interface.

**Paiement.** Le bouton « Régler une échéance » ouvre une alerte tant que son `href` vaut `#`. Créez un lien de paiement chez Stripe, SumUp ou PayPal et collez-le à la place. GitHub Pages ne peut pas héberger de traitement de paiement, mais un lien externe fonctionne parfaitement.


## Formulaire de préinscription

Il n'envoie rien pour l'instant, GitHub Pages ne sert que des fichiers statiques. Trois options :

- **Formspree** : créer un formulaire, puis remplacer `<form id="form">` par `<form id="form" action="https://formspree.io/f/VOTRE_ID" method="POST">` et supprimer le bloc `addEventListener('submit', ...)` dans le script.
- **Netlify Forms** : héberger sur Netlify plutôt que GitHub Pages et ajouter l'attribut `netlify` au formulaire.
- **mailto** : solution de repli, `action="mailto:contact@oliveconduite.fr"`, peu fiable selon les navigateurs.

## Obligations légales à compléter

Les liens du pied de page sont inertes. Un site d'auto-école doit publier ses mentions légales, ses conditions générales de vente, sa politique de protection des données et les coordonnées de son médiateur de la consommation. Les tarifs affichés doivent correspondre à ceux du contrat.

Aucune bannière cookies n'est nécessaire en l'état : le site ne dépose aucun cookie et n'utilise aucun traceur. Si vous ajoutez Google Analytics ou une carte Google Maps embarquée, il en faudra une.
