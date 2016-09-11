git clone http://github.com/ehgoodenough/pomodoro-farm --branch gh-pages shares

node build --production

mkdir -p ./shares/$1
cp -r ./builds/web/* ./shares/$1

git --git-dir=./shares/.git --work-tree=./shares add .
git --git-dir=./shares/.git --work-tree=./shares commit -m "Pushed $1"
git --git-dir=./shares/.git --work-tree=./shares push origin gh-pages

rm -rf shares

echo
echo Share your build by going to:
echo http://ehgoodenough.github.io/pomodoro-farm/$1
echo
