@echo off
chcp 65001
setlocal enabledelayedexpansion

call npm run build

cd dist

call git init

call git add -A

call git commit -m "deploy"

call git push -f git@gitee.com:laowans/mi-shop-home-static.git master:gh-pages

rd /s /q .git

cd ..

endlocal