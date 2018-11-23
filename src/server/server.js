const express = require('express'); //第三方插件
const app = express();
const bodyParser = require('body-parser'); //post解析
const db = require('./dbconnect.js') //链接数据库
const path = require('path');
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(bodyParser.json());
app.all('*', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	next();
});
app.use(express.static(path.join(__dirname, './src/html')));
const user = require('./user.js');
app.use('/api/user', user);
app.listen(3000, function() {
	console.log('链接成功');
})