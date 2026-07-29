# Portfolio Professionnel - Maram Beji 🚀

Portfolio web professionnel haut de gamme pour **Maram Beji**, élève ingénieure en informatique et développeuse Full Stack. Développé avec React 19, TypeScript, Vite, Tailwind CSS et Framer Motion.

---

## 🛠️ Stack Technologique

- **Framework Front-End** : [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool** : [Vite](https://vitejs.dev/)
- **Styles & Design System** : [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations** : [Framer Motion](https://www.framer.com/motion/)
- **Icônes** : [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **Déploiement** : Prêt pour [Vercel](https://vercel.com/)

---

## 🚀 Guide d'Installation & Lancement Local

### 1. Prérequis
- Node.js (version 18+ recommandée)
- npm ou yarn

### 2. Cloner et installer les dépendances
```bash
cd maram-portfolio
npm install
```

### 3. Lancer le serveur de développement local
```bash
npm run dev
```
Accédez à l'application dans votre navigateur à l'adresse [http://localhost:5173](http://localhost:5173).

---

## ⚙️ Vérification de Build

Pour compiler l'application en mode production et s'assurer qu'aucune erreur TypeScript ou Vite ne persiste :

```bash
npm run build
```

---

## ✏️ Personnalisation & Mise à Jour des Données

Toutes les données du portfolio (bio, expériences, projets, compétences, formation, langues) sont centralisées et fortement typées dans le fichier :

```text
src/data/portfolio.ts
```

### Modifier les informations personnelles
Dans `src/data/portfolio.ts`, mettez à jour l'objet `personalInfo` :
```typescript
export const personalInfo = {
  name: 'Maram Beji',
  title: 'Élève ingénieure en informatique',
  subtitle: 'Développeuse Full Stack | React, Node.js, Symfony et .NET',
  email: 'beji.maram@esprit.tn',
  linkedin: 'https://linkedin.com/in/maram-beji',
  github: 'https://github.com/maram-beji',
  // ...
};
```

---

## 📄 Remplacer / Ajouter un nouveau CV

Le fichier CV actuellement téléchargé lors du clic sur "Télécharger mon CV" se situe dans le dossier public :

```text
public/cv-maram-beji.pdf
```

Pour mettre à jour le CV :
1. Remplacez le fichier `public/cv-maram-beji.pdf` par votre propre fichier PDF.
2. Assurez-vous d'utiliser exactement le nom `cv-maram-beji.pdf` ou mettez à jour la propriété `cvPath` dans `src/data/portfolio.ts`.

---

## 🖼️ Ajouter des Captures d'Écran Réelles de Projets

1. Placez vos images de projets dans le dossier `public/projects/` (ex: `public/projects/hr-portal.png`).
2. Mettez à jour le tableau `projects` dans `src/data/portfolio.ts` en ajoutant la propriété `image` :

```typescript
{
  id: 'hr-leave-portal',
  title: 'HR Leave Management Portal',
  image: '/projects/hr-portal.png',
  // ...
}
```

---

## 🌐 Déploiement Gratuit & Rapide sur Vercel

### Option 1 : Déploiement via l'Interface Web Vercel (Recommandé)
1. Poussez le projet sur votre compte **GitHub**.
2. Connectez-vous sur [Vercel](https://vercel.com/).
3. Cliquez sur **Add New > Project**.
4. Importez le dépôt `maram-portfolio`.
5. Vercel détectera automatiquement **Vite** :
   - **Framework Preset** : Vite
   - **Build Command** : `npm run build`
   - **Output Directory** : `dist`
6. Cliquez sur **Deploy**. En quelques secondes, votre portfolio sera en ligne !

### Option 2 : Déploiement via Vercel CLI
```bash
npm install -g vercel
vercel
```

---

## 🎨 Fonctionnalités & Accessibilité

- 🌓 **Mode Sombre / Clair** : Mémorisé automatiquement dans `localStorage`.
- 📱 **100% Responsive** : Adaptation parfaite sur smartphones, tablettes et écrans 4K.
- ♿ **Accessibilité & SEO** : Attributs ARIA, balises sémantiques HTML5, meta tags Open Graph & favicon SVG dédié.
- ⚡ **Animations Smooth** : Déplacement fluide et animations de défilement discrètes.
