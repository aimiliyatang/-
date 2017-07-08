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

3.上传到服务器
git remote add origin https://github.com/aimiliyatang/test.git  连接到服务器

git push -u origin master //发送到服务器 。。 -u表示全部

git clone https://github.com/aimiliyatang/test.git 下载文件














首先，下载一个git，安装。
安装成功之后，输入以下命令，引号内的为你自己的名字和邮箱
git config --global user.name "Your Name"
git config --global user.email "email@example.com"
创建一个版本库，就是存放工程的地方
mkdir 文件名
git init（初始化仓库）
初始化，初始化之后，通过ls -ah 可以看到目录下多了一个.git文件
把文件添加到版本库
首先新建一个文件（test.html），对其进行编辑内容
git add test.html（只提交当前目录的test.html文件到本地git仓库）
可能会出现错误提示
warning: LF will be replaced by CRLF in test.html.
The file will have its original line endings in your working directory.
解决方法：
1、再次输入如上命令，在命令之后加一个空格，回车
2、如果还是不行，则执行git config core.autocrlf false命令之后，再次执行add命令就可成功。
执行git add .（把所有内容添加到索引库中）
注意命令之后有个.
提交到本地仓库
git commit -m "wrote a readme file" （提交索引库中的内容；-m是参数，表示注释内容，主要用来记录此次操作）
上传到github
使用如下命令来生成rsa公钥
ssh-keygen -t rsa -C "oldinaction@qq.com" （改成自己的邮箱）
当然，那三个存放地址等命令你也可以直接回车，让其默认存放，如图所示，会提示你公钥文件存放位置
进入存放目录，打开id_rsa.pub文件，复制里面的内容，一般是以ssh-rsa开头
打开github，注册/登录自己的账号
在账户设置里面，找到SSH and GPG keys设置，点击New SSH key，将之前复制的公钥加进去就ok
利用如下命令测试是否能连接上github
ssh -t git@github.com（若不成功，则去掉-t参数）
如果提示ssh: Could not resolve hostname \342\200\223t: Name or service not known
解决办法：
ssh -t -p 22 git@github.com （-p表示修改服务器端口为22）
当提示输入(yes/no)?时在后面输入yes回车即可
当看到欢迎语Hi oldinaction! You've successfully authenticated, but GitHub does not provide shell access.则表示链接成功。
进入到要提交文件所在目录，git remote add origin git@github.com:demo/0915.git（git@github.com:demo/0915.git是github中创建项目的ssh地址）
提示fatal: remote origin already exists 错误解决办法

先git remote rm origin 删除远程

再远程添加仓库git remote add origin git@github.com:demo/0915.git（后面的地址git@github.com:github账号名/github项目名.git）
如果执行 git remote rm origin 报错的话，我们可以手动修改gitconfig文件的内容
vi .git/config
把 [remote “origin”] 那一行删掉 保存退出即可。
提交到github上面
git push -u origin master，则提交成功，查看github，就可以看见文件已经上传成功

