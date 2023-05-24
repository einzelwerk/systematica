set -e

npm run build
git add .
git commit -m "Deploy $1"
git push origin main
git subtree push --prefix dist origin gh-pages