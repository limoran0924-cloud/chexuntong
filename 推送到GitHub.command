#!/bin/bash
# 车讯通 GitHub 推送脚本
# 用户名: limoran0924-cloud
# 仓库名: chexuntong

echo "🚗 正在推送车讯通到GitHub..."
echo "📦 仓库: limoran0924-cloud/chexuntong"
echo ""

cd ~/Desktop/车讯通-github

# 检查是否有未提交的更改
if [ -n "$(git status --porcelain)" ]; then
    echo "💾 检测到未提交的更改，正在提交..."
    git add -A
    git commit -m "更新于 $(date '+%Y-%m-%d %H:%M:%S')"
fi

# 推送到GitHub
echo "📤 正在推送到GitHub..."
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ 推送成功！"
    echo "🔗 访问链接: https://github.com/limoran0924-cloud/chexuntong"
    echo ""
    echo "现在所有人都可以访问您的车讯通项目了！🎉"
else
    echo ""
    echo "❌ 推送失败"
    echo "💡 可能的原因:"
    echo "   1. GitHub仓库尚未创建"
    echo "   2. 需要登录GitHub账号"
    echo ""
    echo "🔧 解决方法:"
    echo "   方法1: 先在 https://github.com/new 创建空仓库"
    echo "   方法2: 使用GitHub Desktop可视化推送"
fi
