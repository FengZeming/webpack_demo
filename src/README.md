

1. 安装
```
  npm i webpack -g
  npm i webpack-dev-server -g
```

2. 4个核心概念

  - 2.1 **entry** 就是整个模块的读取入口，根据webpack 2的文档，对entry值有了更多的拓展

  - 2.2 **output** 这个对象的设置告诉webpack怎样的放置导出的文件。

  - 2.3 **module.rules** 对每一个不同文件的处理方式的设定
   
  - 2.4 **plugins**  是Webpack构建过程中的个性化的处理设置。其中有一些自带的插件