// 还有一个特殊的内置环境变量叫做NODE_ENV。你可以阅读它process.env.NODE_ENV。
// 当你运行时npm start，它总是等于'development'，
// 当你运行npm test它总是等于'test'，
// 并且当你运行npm run build生产捆绑时，它总是等于'production'。
// 您无法NODE_ENV手动覆盖。

const ROOT=process.env.ENVIROMENT==='development'?`/api`:``;

const PATH={
   EXAMPLE_LOGIN:'/login'
}

for (let key in PATH) {
    if (Object.prototype.hasOwnProperty.call(PATH, key)) {
        let v = PATH[key];
        if (v.indexOf('/') > 0) v = `/${v}`;
        PATH[key] = `${process.env.PUBLIC_URL}${ROOT}${v}`;
    }
}

export default PATH;