const { override, fixBabelImports,addWebpackAlias } = require('customize-cra');
const path = require('path');
module.exports = override(
   fixBabelImports('import', {
     libraryName: 'antd-mobile',
     style: 'css',
   }),
   addWebpackAlias({
       '@':path.join(__dirname,'./src'),
       'actions':path.join(__dirname,'./src/actions'),
       'api':path.join(__dirname,'./src/api'),
       'common':path.join(__dirname,'./src/common'),
       'components':path.join(__dirname,'./src/components'),
       'pages':path.join(__dirname,'./src/pages'),
       'router':path.join(__dirname,'./src/router'),
       'utils':path.join(__dirname,'./src/utils'),
       'static':path.join(__dirname,'./src/static'),
       'router':path.join(__dirname,'./src/router'),
   })
 );