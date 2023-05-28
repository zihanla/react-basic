// jsx 样式控制
// 1. 行内样式: 在元素身上绑定一个style属性
// 2. 类名样式(推荐): 在元素身上绑定一个className属性
// 3. 动态类名控制
import './App.css'

const box2 = {
    background: 'yellow',
    width: '100px',
    height: '100px'
}

const activeFlag = false

function App() {
    return (
        <div className="App">
            <div style={{background: 'red', width: '100px', height: '100px'}}>box1</div>
            <div style={box2}>box2</div>
            <div className='box3'>box3</div>
            {/* true就采用box3的样式 false就啥也不是 */}
            <div className={activeFlag ? 'box3' : ''}>box4</div>
        </div>
    );
}

export default App;