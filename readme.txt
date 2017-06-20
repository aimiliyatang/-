git init 初始化;

登录自己的github;

git config --global user.name "你的git名称";

git config --global user.email "你的email名称";

添加版本一共扥3步;

1.git add 文件名 =>把文件添加到暂存区
git status 查看文件是否添加成功，
绿色的成功了  红色的没成功

2.放进版本库中

git commit -m "注释"

git commit 放进版本库中

-m 所有暂存区的文件

"注释"  必须要添加的信息

版本日志 git reflog

版本退回 git reset --hard 版本号   //git reset --hard HEAD^退回很多个版本

查看版本不同 git diff