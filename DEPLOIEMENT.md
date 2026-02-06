# 🚀 GUIDE COMPLET DE DÉPLOIEMENT - Portfolio Donald Mbouhom

## 📋 Table des Matières
1. [Installation Locale](#1-installation-locale)
2. [Préparation GitHub](#2-préparation-github)
3. [Déploiement sur Vercel](#3-déploiement-sur-vercel)
4. [Domaine Personnalisé (Optionnel)](#4-domaine-personnalisé)
5. [Mises à Jour](#5-mises-à-jour)

---

## 1. Installation Locale

### Étape 1.1: Prérequis

Assurez-vous d'avoir installé:
- **Node.js** (version 18+): [Télécharger ici](https://nodejs.org/)
- **Git**: [Télécharger ici](https://git-scm.com/)

Pour vérifier:
```bash
node --version    # Doit afficher v18.x.x ou supérieur
npm --version     # Doit afficher 9.x.x ou supérieur
git --version     # Doit afficher une version
```

### Étape 1.2: Ouvrir le Terminal

**Sur Windows:**
- Cherchez "cmd" ou "PowerShell" dans le menu Démarrer
- OU utilisez Git Bash (installé avec Git)

**Sur Mac/Linux:**
- Ouvrez Terminal depuis Applications

### Étape 1.3: Naviguer vers le dossier du portfolio

```bash
# Si le dossier est sur votre Bureau
cd Desktop/portfolio

# OU si c'est ailleurs, utilisez le chemin complet
cd /chemin/vers/portfolio
```

### Étape 1.4: Installer les dépendances

```bash
npm install
```

⏱️ Cette commande prendra 2-3 minutes. Elle télécharge tous les packages nécessaires.

### Étape 1.5: Tester en local

```bash
npm run dev
```

✅ Ouvrez votre navigateur et allez sur: `http://localhost:3000`

Vous devriez voir votre portfolio ! 🎉

Pour arrêter le serveur: `Ctrl + C` dans le terminal

---

## 2. Préparation GitHub

### Étape 2.1: Créer un compte GitHub (si vous n'en avez pas)

1. Allez sur [github.com](https://github.com)
2. Cliquez sur "Sign Up"
3. Suivez les instructions

### Étape 2.2: Créer un nouveau repository

1. Connectez-vous à GitHub
2. Cliquez sur le bouton **"+"** en haut à droite
3. Sélectionnez **"New repository"**
4. Remplissez:
   - **Repository name**: `portfolio` (ou le nom de votre choix)
   - **Description**: "My Full Stack AI Developer Portfolio"
   - ✅ **Public** (pour que Vercel puisse y accéder gratuitement)
   - ⬜ **Ne cochez PAS** "Initialize with README"
5. Cliquez sur **"Create repository"**

### Étape 2.3: Lier votre projet local à GitHub

Dans le terminal, dans le dossier de votre portfolio:

```bash
# Initialiser Git (si pas déjà fait)
git init

# Configurer votre identité Git (remplacez par vos infos)
git config --global user.email "dmbouhom@gmail.com"
git config --global user.name "Donald Mbouhom"

# Ajouter tous les fichiers
git add .

# Créer le premier commit
git commit -m "Initial commit - Portfolio Full Stack AI Developer"

# Créer la branche main
git branch -M main

# Lier à votre repository GitHub (remplacez YOUR_USERNAME et YOUR_REPO)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# Pousser le code vers GitHub
git push -u origin main
```

💡 **Remplacez** `YOUR_USERNAME` par votre nom d'utilisateur GitHub et `YOUR_REPO` par le nom de votre repository.

**Exemple:**
```bash
git remote add origin https://github.com/Donald237/portfolio.git
```

### Étape 2.4: Vérifier sur GitHub

Allez sur votre repository GitHub, vous devriez voir tous vos fichiers ! ✅

---

## 3. Déploiement sur Vercel (GRATUIT et RAPIDE)

### Pourquoi Vercel?
- ✅ **100% GRATUIT** pour les projets personnels
- ✅ Déploiement automatique à chaque push GitHub
- ✅ HTTPS inclus
- ✅ Domaine gratuit: `votre-nom.vercel.app`
- ✅ Parfait pour Next.js

### Étape 3.1: Créer un compte Vercel

1. Allez sur [vercel.com](https://vercel.com)
2. Cliquez sur **"Sign Up"**
3. Choisissez **"Continue with GitHub"**
4. Autorisez Vercel à accéder à votre compte GitHub

### Étape 3.2: Importer votre repository

1. Sur le dashboard Vercel, cliquez sur **"New Project"**
2. Vous verrez la liste de vos repositories GitHub
3. Trouvez votre repository `portfolio`
4. Cliquez sur **"Import"**

### Étape 3.3: Configurer le projet

Vercel détecte automatiquement Next.js ! Vous n'avez RIEN à changer.

**Configuration par défaut:**
- Framework Preset: **Next.js** ✅
- Build Command: `npm run build` ✅
- Output Directory: `.next` ✅
- Install Command: `npm install` ✅

### Étape 3.4: Déployer

1. Cliquez sur **"Deploy"**
2. ⏱️ Attendez 1-2 minutes (Vercel build et déploie)
3. 🎉 **Félicitations !** Votre site est en ligne !

### Étape 3.5: Voir votre site

Vercel vous donnera une URL comme:
```
https://portfolio-donald-mbouhom.vercel.app
```

Cliquez dessus pour voir votre portfolio en ligne ! 🚀

---

## 4. Domaine Personnalisé (Optionnel)

### Option A: Sous-domaine Vercel gratuit

Vous avez déjà un domaine gratuit: `votre-nom.vercel.app`

Pour le personnaliser:
1. Allez dans **Project Settings** sur Vercel
2. Section **Domains**
3. Ajoutez un alias: `donald-mbouhom.vercel.app`

### Option B: Votre propre domaine (payant)

Si vous achetez un domaine (exemple: `donaldmbouhom.com` sur Namecheap, GoDaddy, etc.):

1. Sur Vercel, allez dans **Project Settings** > **Domains**
2. Ajoutez votre domaine: `donaldmbouhom.com`
3. Vercel vous donnera les DNS à configurer
4. Ajoutez ces DNS dans les paramètres de votre registrar de domaine
5. Attendez 24-48h pour la propagation DNS

---

## 5. Mises à Jour

### Comment mettre à jour votre portfolio?

**C'est SUPER SIMPLE !** Chaque fois que vous modifiez votre code:

```bash
# 1. Sauvegarder vos changements
git add .

# 2. Créer un commit avec un message
git commit -m "Update projects section"

# 3. Pousser vers GitHub
git push
```

**AUTOMATIQUEMENT**, Vercel va:
- ✅ Détecter le changement sur GitHub
- ✅ Rebuilder votre site
- ✅ Déployer la nouvelle version
- ✅ En 1-2 minutes, votre site est à jour !

### Exemples de mises à jour courantes

**Ajouter un nouveau projet:**
```bash
# 1. Éditez app/projects/page.tsx
# 2. Ajoutez votre projet dans la liste
# 3. Sauvegardez

git add .
git commit -m "Add new AI project"
git push
```

**Changer votre email:**
```bash
# 1. Éditez app/contact/page.tsx
# 2. Changez l'email
# 3. Sauvegardez

git add .
git commit -m "Update email address"
git push
```

---

## 🆘 Dépannage

### Problème: `npm install` échoue

**Solution:**
```bash
# Supprimer node_modules et package-lock.json
rm -rf node_modules package-lock.json

# Réinstaller
npm install
```

### Problème: Port 3000 déjà utilisé

**Solution:**
```bash
# Utiliser un autre port
npm run dev -- -p 3001

# Ou tuer le processus sur le port 3000
npx kill-port 3000
```

### Problème: Git push échoue

**Solution:**
```bash
# Vérifier le remote
git remote -v

# Si incorrect, le supprimer et le rajouter
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### Problème: Build échoue sur Vercel

**Solutions:**
1. Vérifiez qu'il n'y a pas d'erreurs TypeScript:
```bash
npm run build
```
2. Si erreurs, corrigez-les localement
3. Push vers GitHub
4. Vercel va automatiquement retry

### Problème: Site ne se charge pas

**Vérifications:**
1. Vérifiez que le build a réussi sur Vercel
2. Regardez les logs sur Vercel Dashboard
3. Vérifiez votre navigateur (cache, extensions)

---

## 📊 Statut du Déploiement

Après déploiement, vous pouvez:

✅ Voir votre site sur: `https://votre-nom.vercel.app`
✅ Partager le lien avec des recruteurs
✅ Le mettre sur votre CV et LinkedIn
✅ Mettre à jour quand vous voulez (git push)

---

## 🎯 Checklist Finale

Avant de partager votre portfolio:

- [ ] Tous les projets sont listés avec démos
- [ ] Les informations de contact sont correctes
- [ ] Les liens GitHub/LinkedIn fonctionnent
- [ ] Le site est responsive (testez sur mobile)
- [ ] Aucune erreur dans la console du navigateur
- [ ] Les images se chargent correctement
- [ ] Le formulaire de contact fonctionne (ou retirez-le)

---

## 🎨 Personnalisation Rapide

### Changer les couleurs

Éditez `tailwind.config.js`:
```javascript
colors: {
  accent: {
    blue: '#00d4ff',    // Changez cette couleur
    purple: '#a855f7',  // Changez cette couleur
  }
}
```

### Changer les polices

Éditez `app/globals.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=VotrePoliceDeTitre&family=VotrePoliceDuTexte&display=swap');
```

### Ajouter Google Analytics (optionnel)

1. Créez un compte Google Analytics
2. Obtenez votre ID (GA-XXXXXXXXX)
3. Ajoutez dans `app/layout.tsx`

---

## 💡 Conseils Pro

1. **Testez toujours en local avant de push**
   ```bash
   npm run dev
   # Vérifiez que tout fonctionne
   # Puis git push
   ```

2. **Commits fréquents avec messages clairs**
   ```bash
   git commit -m "Add robotics project"
   git commit -m "Fix contact form validation"
   git commit -m "Update about page bio"
   ```

3. **Utilisez les Preview Deployments de Vercel**
   - Chaque branch crée une preview URL
   - Testez avant de merger dans main

4. **Optimisez les images**
   - Utilisez des images compressées
   - Format WebP quand possible
   - Taille recommandée: < 200KB par image

---

## 📧 Support

Si vous avez des questions:
- **Email**: dmbouhom@gmail.com
- **GitHub Issues**: Créez une issue sur votre repo

---

## 🎉 Félicitations !

Vous avez maintenant:
✅ Un portfolio professionnel en ligne
✅ Un système de déploiement automatique
✅ Une présence web pour postuler aux emplois
✅ Un showcase de vos compétences Full Stack AI

**Partagez votre portfolio sur LinkedIn et commencez à postuler ! 🚀**

---

**Made with ❤️ by Donald Mbouhom**

Full Stack AI Developer | Computer Vision | Industrial Automation
