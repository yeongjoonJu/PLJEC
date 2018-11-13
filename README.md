### Installed packages

#### 경로(Node_PATH)

+ cross-env --dev

#### Redux(리덕스) { Link, NavLink, Route, BrowserRouter }

+ redux
+ react-redux
+ redux-actions
+ immutable
+ **redux-thunk**: redux의 action creator에서 함수를 반환 할 수 있게 해주는 redux 미들웨어, 비동기작업을 처리 할 때 사용됩니다 

#### React Router

+ react-router-dom
+ query-string : URL 쿼리 해석 라이브러리

#### 웹 요청 클라이언트

+ axios
+ body-parser : JSON 형태의 데이터를 HTTP 요청에서 파싱할 때 사용

#### CSS, SaSS 라이브러리

+ classnames: CSS Module과 조건부 className을 설정하는 것을 도와주는 라이브러리
+ sass-loader : SaSS 사용 시 필요 라이브러리
+ node-sass:  SaSS 사용 시 필요 라이브러리
+ include-media: Sass 라이브러리(반응형 디자인)
+ open-color: 색상 팔레트
+ better-react-spinkit: 로딩 시 필요 컴포넌트

#### 서버

+ yarn global add serve [ serve -s build를 통해 시작]
+ morgan : HTTP 요청을 로그하는 미들웨어 
+ **mongoose**: mongodb 데이터 모델링 툴; MongoDB 에 있는 데이터를 여러분의 Application에서 JavaScript 객체로 사용 할 수 있도록 해줍니다. 
+ **express-session**: express 에서 세션을 다룰 때 사용되는 미들웨어 
+ **react-addons-update**: Immutability Helper (Redux 의 store 값을 변경 할 때 사용됨)
+ **react-timeago**: 3 seconds ago, 3 minutes ago 이런식으로 시간을 계산해서 몇분전인지 나타내주는 React 컴포넌트

#### 기타

+ moment : 날짜 관련 라이브러리
+ react-scrollbar
+ react-hot-loader
+ bcryptjs : 비밀번호 보안 강화
+ react-tag-input : tag input 라이브러리



I used semantic-ui



Error: spawn react-scripts ENOENT
    at notFoundError

특정 패키지를 설치하고나서 `yarn start`를 실행하면 위와 같은 에러가 뜨면서 실행이 안 되는 경우가 있다. 이럴 때는 npm uninstall -g yarn으로 yarn 패키지를 제거하고 다시 yarn으로 설치하면 된다.

npm install semantic-ui-react

[사용법](https://react.semantic-ui.com/usage)

```
Attempted import error: 'store' is not exported from 'store'.
```

위와 같은 에러가 날 때가 많은데 이럴 경우 비구조화 할당을 해제해보자.

error found incompatible module yarn 이런 에러가 나면 다음 명령어를 입력해서 해결하자

```
yarn install --ignore-engines
```


서비스 실행

```
serve -s build
```

개발서버 실행

yarn start



TypeError: webpack.optimize.OccurenceOrderPlugin is not a constructor 에러 해결법

http://yamea-guide.tistory.com/190



TypeError: webpack.NoErrorsPlugin is not a constructor 에러 해결법

http://yamea-guide.tistory.com/191?category=732431



~~~
WebpackOptionsValidationError: Invalid configuration object. Webpack has been initialised using a configuration object that does not match the API schema.
 - configuration.module has an unknown property 'loaders'. These properties are valid:
   object { exprContextCritical?, exprContextRecursive?, exprContextRegExp?, exprContextRequest?, noParse?, rules?, defaultRules?, unknownContextCritical?, unknownContextRecursive?, unknownContextRegExp?, unknownContextRequest?, unsafeCache?, wrappedContextCritical?, wrappedContextRecursive?, wrappedContextRegExp?, strictExportPresence?, strictThisContextOnImports? }
   -> Options affecting the normal modules (`NormalModuleFactory`).
 - configuration.resolve has an unknown property 'root'. These properties are valid:
   object { alias?, aliasFields?, cachePredicate?, cacheWithContext?, descriptionFiles?, enforceExtension?, enforceModuleExtension?, extensions?, fileSystem?, mainFields?, mainFiles?, moduleExtensions?, modules?, plugins?, resolver?, symlinks?, concord?, unsafeCache?, useSyncFileSystemCalls? }
   -> Options for the resolver
    at webpack (D:\React\pljec\node_modules\webpack\lib\webpack.js:24:9)
    at Object.<anonymous> (D:/React/pljec/server/main.js:59:22)
    at Module._compile (module.js:652:30)
    at loader (D:\React\pljec\node_modules\babel-register\lib\node.js:144:5)
    at Object.require.extensions.(anonymous function) [as .js] (D:\React\pljec\node_modules\babel-register\lib\node.js:154:7)
    at Module.load (module.js:565:32)
    at tryModuleLoad (module.js:505:12)
    at Function.Module._load (module.js:497:3)
    at Function.Module.runMain (module.js:693:10)
    at Object.<anonymous> (D:\React\pljec\node_modules\babel-cli\lib\_babel-node.js:154:22)
    at Module._compile (module.js:652:30)
    at Object.Module._extensions..js (module.js:663:10)
    at Module.load (module.js:565:32)
    at tryModuleLoad (module.js:505:12)
    at Function.Module._load (module.js:497:3)
    at Function.Module.runMain (module.js:693:10)
[nodemon] app crashed - waiting for file changes before starting
~~~

~~~
var webpack = require('webpack');
var path = require('path');

module.exports = {

    /* webpack-dev-server를 콘솔이 아닌 자바스크립트로 실행 할 땐, 
    HotReloadingModule 를 사용하기 위해선 dev-server 클라이언트와 
    핫 모듈을 따로 entry 에 넣어주어야 합니다. */
    
    entry: [
        './src/index.js',
        'webpack-dev-server/client?http://0.0.0.0:4000', // 개발서버의 포트가 이 부분에 입력되어야 제대로 작동합니다
        'webpack/hot/only-dev-server'
    ],

    output: {
        path: '/', // public 이 아니고 /, 이렇게 하면 파일을 메모리에 저장하고 사용합니다
        filename: 'bundle.js'
    },

    resolve: {
        root: path.resolve('./src')
    },

    // 개발서버 설정입니다
    devServer: {
        hot: true,
        filename: 'bundle.js',
        publicPath: '/',
        historyApiFallback: true,
        contentBase: './public',
        /* 모든 요청을 프록시로 돌려서 express의 응답을 받아오며,
        bundle 파일의 경우엔 우선권을 가져서 devserver 의 스크립트를 사용하게 됩니다 */
        proxy: {
            "**": "http://localhost:3000" // express 서버주소
        },
        stats: {
          // 콘솔 로그를 최소화 합니다
          assets: false,
          colors: true,
          version: false,
          hash: false,
          timings: false,
          chunks: false,
          chunkModules: false
        }
    },


    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],

    module:{
        loaders: [
            {
                test: /.js$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'react'],
                    plugins: ["react-hot-loader/babel"]
                },
            }
        ]
    },


};
~~~

~~~
WebpackOptionsValidationError: Invalid configuration object. Webpack has been initialised using a configuration object that does not match the API schema.
 - configuration.module has an unknown property 'loaders'. These properties are valid:
   object { exprContextCritical?, exprContextRecursive?, exprContextRegExp?, exprContextRequest?, noParse?, rules?, defaultRules?, unknownContextCritical?, unknownContextRecursive?, unknownContextRegExp?, unknownContextRequest?, unsafeCache?, wrappedContextCritical?, wrappedContextRecursive?, wrappedContextRegExp?, strictExportPresence?, strictThisContextOnImports? }
   -> Options affecting the normal modules (`NormalModuleFactory`).
    at webpack (D:\React\pljec\node_modules\webpack\lib\webpack.js:24:9)
    at Object.<anonymous> (D:/React/pljec/server/main.js:59:22)
    at Module._compile (module.js:652:30)
    at loader (D:\React\pljec\node_modules\babel-register\lib\node.js:144:5)
    at Object.require.extensions.(anonymous function) [as .js] (D:\React\pljec\node_modules\babel-register\lib\node.js:154:7)
    at Module.load (module.js:565:32)
    at tryModuleLoad (module.js:505:12)
    at Function.Module._load (module.js:497:3)
    at Function.Module.runMain (module.js:693:10)
    at Object.<anonymous> (D:\React\pljec\node_modules\babel-cli\lib\_babel-node.js:154:22)
    at Module._compile (module.js:652:30)
    at Object.Module._extensions..js (module.js:663:10)
    at Module.load (module.js:565:32)
    at tryModuleLoad (module.js:505:12)
    at Function.Module._load (module.js:497:3)
    at Function.Module.runMain (module.js:693:10)
[nodemon] app crashed - waiting for file changes before starting.
~~~

~~~
var webpack = require('webpack');
var path = require('path');

module.exports = {

    /* webpack-dev-server를 콘솔이 아닌 자바스크립트로 실행 할 땐, 
    HotReloadingModule 를 사용하기 위해선 dev-server 클라이언트와 
    핫 모듈을 따로 entry 에 넣어주어야 합니다. */
    
    entry: [
        './src/index.js',
        'webpack-dev-server/client?http://0.0.0.0:4000', // 개발서버의 포트가 이 부분에 입력되어야 제대로 작동합니다
        'webpack/hot/only-dev-server'
    ],

    output: {
        path: '/', // public 이 아니고 /, 이렇게 하면 파일을 메모리에 저장하고 사용합니다
        filename: 'bundle.js'
    },

    resolve: {
        modules: [path.resolve(__dirname, 'src'), "node_modules"]
    },

    // 개발서버 설정입니다
    devServer: {
        hot: true,
        filename: 'bundle.js',
        publicPath: '/',
        historyApiFallback: true,
        contentBase: './public',
        /* 모든 요청을 프록시로 돌려서 express의 응답을 받아오며,
        bundle 파일의 경우엔 우선권을 가져서 devserver 의 스크립트를 사용하게 됩니다 */
        proxy: {
            "**": "http://localhost:3000" // express 서버주소
        },
        stats: {
          // 콘솔 로그를 최소화 합니다
          assets: false,
          colors: true,
          version: false,
          hash: false,
          timings: false,
          chunks: false,
          chunkModules: false
        }
    },


    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],

    module:{
        rules: [
            {
                test: /.js$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'react'],
                    plugins: ["react-hot-loader/babel"]
                },
            }
        ]
    },


};
~~~

~~~
Server is running on development mode
(node:15080) DeprecationWarning: current URL string parser is deprecated, and will be removed in a future version. To use the new parser, pass option { useNewUrlParser: true } to MongoClient.connect.
Express is listening on port 3000
Connected to mongodb server
× ｢wdm｣: Built at: 2018-11-09 19:13:10
Entrypoint main = bundle.js
 [0] (webpack)/hot/log.js 1.11 KiB {0} [built]
 [3] (webpack)/hot/emitter.js 75 bytes {0} [built]
 [4] multi ./src/index.js webpack-dev-server/client?http://0.0.0.0:4000 webpack/hot/only-dev-server 52 bytes {0} [built]
 [5] (webpack)-dev-server/client?http://0.0.0.0:4000 7.78 KiB {0} [built]
 [6] ./node_modules/url/url.js 22.8 KiB {0} [built]
[13] ./node_modules/strip-ansi/index.js 161 bytes {0} [built]
[14] ./node_modules/ansi-regex/index.js 135 bytes {0} [built]
[15] ./node_modules/loglevel/lib/loglevel.js 7.68 KiB {0} [built]
[16] (webpack)-dev-server/client/socket.js 1.05 KiB {0} [built]
[18] (webpack)-dev-server/client/overlay.js 3.58 KiB {0} [built]
[19] ./node_modules/ansi-html/index.js 4.16 KiB {0} [built]
[23] (webpack)/hot sync nonrecursive ^\.\/log$ 170 bytes {0} [built]
[24] ./node_modules/events/events.js 8.13 KiB {0} [built]
[25] (webpack)/hot/only-dev-server.js 2.55 KiB {0} [built]
[26] (webpack)/hot/log-apply-result.js 1.27 KiB {0} [built]
    + 12 hidden modules

WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/concepts/mode/

ERROR in multi ./src/index.js webpack-dev-server/client?http://0.0.0.0:4000 webpack/hot/only-dev-server
Module not found: Error: Can't resolve 'babel' in 'D:\React\pljec'
BREAKING CHANGE: It's no longer allowed to omit the '-loader' suffix when using loaders.
                 You need to specify 'babel-loader' instead of 'babel',
                 see https://webpack.js.org/migrate/3/#automatic-loader-module-name-extension-removed
 @ multi ./src/index.js webpack-dev-server/client?http://0.0.0.0:4000 webpack/hot/only-dev-server main[0]
i ｢wdm｣: Failed to compile.
~~~

~~~
npm uninstall babel
npm install --save-dev babel-cli
~~~



~~~
[nodemon] 1.18.5
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: D:\React\pljec\server/**/*
[nodemon] starting `babel-node --presets=es2015 ./server/main.js`
Server is running on development mode
(node:6488) DeprecationWarning: current URL string parser is deprecated, and will be removed in a future version. To use the new parser, pass option { useNewUrlParser: true } to MongoClient.connect.
Express is listening on port 3000
× ｢wdm｣: Built at: 2018-11-09 19:59:45
Entrypoint main = bundle.js
 [0] (webpack)/hot/log.js 1.11 KiB {0} [built]
 [3] (webpack)/hot/emitter.js 75 bytes {0} [built]
 [4] multi ./src/index.js webpack-dev-server/client?http://0.0.0.0:4000 webpack/hot/only-dev-server 52 bytes {0} [built]
 [5] (webpack)-dev-server/client?http://0.0.0.0:4000 7.78 KiB {0} [built]
 [6] ./node_modules/url/url.js 22.8 KiB {0} [built]
[13] ./node_modules/strip-ansi/index.js 161 bytes {0} [built]
[14] ./node_modules/ansi-regex/index.js 135 bytes {0} [built]
[15] ./node_modules/loglevel/lib/loglevel.js 7.68 KiB {0} [built]
[16] (webpack)-dev-server/client/socket.js 1.05 KiB {0} [built]
[18] (webpack)-dev-server/client/overlay.js 3.58 KiB {0} [built]
[19] ./node_modules/ansi-html/index.js 4.16 KiB {0} [built]
[23] (webpack)/hot sync nonrecursive ^\.\/log$ 170 bytes {0} [built]
[24] ./node_modules/events/events.js 8.13 KiB {0} [built]
[25] (webpack)/hot/only-dev-server.js 2.55 KiB {0} [built]
[26] (webpack)/hot/log-apply-result.js 1.27 KiB {0} [built]
    + 12 hidden modules

WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/concepts/mode/

ERROR in multi ./src/index.js webpack-dev-server/client?http://0.0.0.0:4000 webpack/hot/only-dev-server
Module not found: Error: Can't resolve 'babel' in 'D:\React\pljec'
BREAKING CHANGE: It's no longer allowed to omit the '-loader' suffix when using loaders.
                 You need to specify 'babel-loader' instead of 'babel',
                 see https://webpack.js.org/migrate/3/#automatic-loader-module-name-extension-removed
 @ multi ./src/index.js webpack-dev-server/client?http://0.0.0.0:4000 webpack/hot/only-dev-server main[0]
i ｢wdm｣: Failed to compile.
Connected to mongodb server
~~~

