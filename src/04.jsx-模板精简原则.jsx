// 模板精简原则
// 原则: 模板中的逻辑尽量保持精简
// 复杂的多分支的逻辑 收敛为一个函数 通过专门的函数来写分支逻辑 模板中只负责调用函数

// 这是一个简单的分支结构函数
const getTag = (type) => {
    if (type === 1) {
        return <h1>thi is h1</h1>
    }
    if (type === 2) {
        return <h2>thi is h2</h2>
    }
    if (type === 3) {
        return <h3>thi is h3</h3>
    }
}


function App() {
    return (
        <div className="App">
            {getTag(1)}
            {getTag(2)}
            {getTag(3)}
        </div>
    );
}

export default App;