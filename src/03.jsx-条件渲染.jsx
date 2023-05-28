// 条件渲染
// 1. 三元表达式(常用) 2. 逻辑&&(一个不true就不true)
const flag = false

function App() {
    return (
        <div className="App">
            {/* 1. 三元表达式 */}
            {flag ? (<div>
                <span>干饭人</span>
            </div>) : '干饭魂'}

            {/* 2. 逻辑&& */}
            {true && <span>小飞侠</span>}
        </div>
    );
}

export default App;