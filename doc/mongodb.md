## 安装 `mongodb`

### 环境

macos 10.13.4

### 安装

```
# Give another go at force removing the brewed version of <package>
brew uninstall --force <package>

# Then cleanup any older versions and clear the brew cache
brew cleanup --force -s <package>

# Remove any dead symlinks
brew prune

# Then try reinstalling <package>
brew install <package>
```

### 创建数据库目录

```
mkdir -p data/db
```

### 启动 `mongo` 并指定目录

```
mongod --dbpath <path to data directory>
```

### 启动命令提示语

```
[initandlisten] waiting for connections on port 27017
```

### 错误解决方案

```
# error 1
dyld: Library not loaded: /usr/local/opt/openssl/lib/libcrypto.1.0.0.dylib
  Referenced from: /usr/local/bin/mongod
  Reason: image not found
Abort trap: 6

# solution
brew remove openssl
brew install openssl

# error 2 非正常关闭
Detected unclean shutdown - data/db/mongod.lock is not empty.
Failed to set up listener: SocketException: Address already in use
now exiting
shutting down with code:48


# solution
mongod --dbpath data/db --repair
https://docs.mongodb.com/manual/tutorial/recover-data-following-unexpected-shutdown/
```

## `brew`

```
# https://brew.sh/
# https://docs.brew.sh/Installation
# 安装
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

# error: could not lock config file /usr/local/Homebrew/.git/config: Permission denied
# fatal: could not set 'core.repositoryformatversion' to '0'
# 错误解决方案
# https://github.com/Homebrew/brew/issues/2062
sudo chown -R $USER:admin /usr/local

# 卸载
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/uninstall)"
```


## 参考

Install MongoDB Community Edition on macOS(https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/)
