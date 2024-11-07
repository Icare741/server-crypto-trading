# Crypto Trading Server

Ce projet est un serveur NestJS pour une application de trading de cryptomonnaies. Il fournit des API pour récupérer les données de marché, gérer les alertes et diffuser les mises à jour des prix en temps réel via WebSocket.

## Prérequis

- Node.js (version 18.x recommandée)
- npm (version 8.x recommandée)

## Installation

1. Clonez le dépôt :

   ```bash
   git clone https://github.com/Icare741/server-crypto-trading.git
   cd server-crypto-trading
   ```

2. Installez les dépendances :

   ```bash
   npm install
   ```

## Configuration

1. Créez un fichier `.env` à la racine du projet pour configurer les variables d'environnement nécessaires. Par exemple :

   ```env
   PORT=3000
   ```

## Démarrage

Pour démarrer le serveur en mode développement :

```bash
npm run start:dev
```

Pour démarrer le serveur en mode production :

```bash
npm run build
npm run start:prod
```

## Fonctionnalités

- **API REST** : Fournit des endpoints pour récupérer les données de marché et gérer les alertes.
- **WebSocket** : Diffuse les mises à jour des prix en temps réel aux clients connectés.
- **Gestion des alertes** : Permet de créer, récupérer et supprimer des alertes de prix.

## Endpoints

- `GET /crypto` : Récupère les données de marché pour toutes les cryptomonnaies suivies.
- `GET /crypto/:symbol/history` : Récupère l'historique des prix pour une cryptomonnaie spécifique.
- `POST /alerts` : Crée une nouvelle alerte de prix.
- `GET /alerts` : Récupère toutes les alertes de prix.
- `DELETE /alerts/:id` : Supprime une alerte de prix.

## Contribution

Les contributions sont les bienvenues ! Veuillez soumettre une pull request ou ouvrir une issue pour discuter des changements que vous souhaitez apporter.

## Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.