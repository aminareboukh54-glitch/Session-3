# MCD — Gestion des commandes d’un restaurant

## 1. Regroupement des propriétés en entités

### Entité CLIENT
- **#code_client**
- nom_client
- prenom_client
- telephone_client
- email_client

### Entité REPAS
- **#code_repas**
- nom_repas
- description_repas
- categorie_repas
- prix_repas

### Entité COMMANDE
- **#code_commande**
- date_commande
- heure_commande
- statut_commande

## 2. Associations et cardinalités

### Association PASSER
Relation entre CLIENT et COMMANDE.

- CLIENT : (0,N)
- COMMANDE : (1,1)



### Association CONTENIR
Relation entre COMMANDE et REPAS.

- COMMANDE : (1,N)
- REPAS : (0,N)

**Propriétés de l’association CONTENIR :**
- quantite_commandee
- prix_unitaire_commande


