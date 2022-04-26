## 什么是 Fish-shell

Fish 是 “the friendly interactive shell” 的简称，其最大特点就是简单易用。许多其他 shell 需要通过配置才能使用的功能，Fish 做到了开箱即用，不需要任何配置。

## 安装

这里使用 `homebrew` 进行安装，如果你还没有 `homebrew`，那么推荐你安装一下，这可是 macOS 中的一大神器。

当然，在你安装 `homebrew` 时，当使用官网所提供的脚本：

```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

基本上都会安装失败，此时会报如下错误。

```sh
curl: (7) Failed to connect to raw.githubusercontent.com port 443: Connection refused
```

当然这也不是我们网络的问题，主要是 `http://raw.githubusercontent.com` 访问实在不稳定，因此推荐使用以下这种更加高效的方式。

```sh
/usr/bin/ruby -e "$(curl -fsSL https://cdn.jsdelivr.net/gh/ineo6/homebrew-install/install)"
```

安装好 `homebrew` 之后，使用如下命令进行安装即可。

```sh
brew install fish
```

如果顺利的话，此时是可以安装成功的，但如果你也和我一样在安装时报以下错误信息，那么你可以根据下面的解决方法尝试解决。

![](https://cdn.jsdelivr.net/gh/cunyu1943/blog-imgs@main/2022/04/image-20220426101405092.png)

```shell
Error: No such file or directory @ rb_sysopen - /Users/cunyu/Library/Caches/Homebrew/downloads/7c65a980f7151e14dc5cf1e45ff29b9456a318d6868b1e78a7cd9369a3de144b--pcre2-10.39.arm64_monterey.bottle.tar.gz
```



这是因为 `pcre2-10.39.arm64_monterey` 依赖包下载失败了，则可以单独将依赖包下载安装，从而避免依赖版本的错误。

```sh
brew install pcre2
```

![](https://cdn.jsdelivr.net/gh/cunyu1943/blog-imgs@main/2022/04/image-20220426101012447.png)

接着再使用上面安装 `Fish` 的命令进行安装即可。

![](https://cdn.jsdelivr.net/gh/cunyu1943/blog-imgs@main/2022/04/image-20220426101319819.png)

## 切换默认 shell

虽然我们已经安装好了 `Fish`，但是我们还要对它进行手动切换才能生效。

首先使用以下的命令来查看下本机中的 shell，默认情况下 `fish-shell` 应该还没用加到 shell 列表中的。

```sh
cat /etc/shells
```

接着，我们手动来更改 shell 列表，使用如下命令即可。使用 `sudo` 是因为要用到管理员的权限，所以这里还需要你知道管理员的密码。

```sh
sudo vim /etc/shells
```

然后将 `Fish` 添加进去到 shell 列表中。

```sh
/opt/homebrew/bin/fish
```

![](https://cdn.jsdelivr.net/gh/cunyu1943/blog-imgs@main/2022/04/image-20220426111604248.png)

最后则是切换默认 shell，让我们之后打开终端后都是使用 `Fish`，运行如下命令即可。

```sh
chsh -s /opt/homebrew/bin/fish
```

至此，我们的 `Fish` 就安装成功了，退出终端后重新打开终端即可使用安装好的 `Fish`。

 ![](https://cdn.jsdelivr.net/gh/cunyu1943/blog-imgs@main/2022/04/image-20220426112524750.png)

## 安装 Oh My Fish

官网提供了两种方式，第一种是直接在线安装。

```sh
curl -L github.com/oh-my-fish/oh-my-fish/raw/master/bin/install | fish
```

第二种则是通过将脚本下载之后再进行安装。

```sh
curl -L github.com/oh-my-fish/oh-my-fish/raw/master/bin/install > install
fish install
```

两种方法我都试了以下，第一种呢大概率是不会成功的，那么我们选择第二种，将脚本下载之后安装。但是同样的使用这个命令可能会失败，此时则可以去 `https://raw.githubusercontent.com/oh-my-fish/oh-my-fish/master/bin/install` 把脚本内容复制到本地的一个文件中。然后再用以下命令安装即可。

```sh
fish 脚本文件名
```

