// 1. 识别常规的变量
// 2. 原生js方法调用
// 3. 三元运算符(常用)

const name = '子涵'
const getAge = () => {
    return 18
}
const flag = false

function App() {
    return (
        <div className="App">
            {name}
            {getAge()}
            {flag ? '早睡早起' : '不要熬夜'}
        </div>
    );
}

export default App;
