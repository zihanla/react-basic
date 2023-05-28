// react列表渲染 原生map
// 遍历列表时需要一个类型为number/string不可重复的key
// key仅在内部使用，不会出现在真实的dom结构中

const songs = [
    {id: 1, name: '《若把你》'},
    {id: 2, name: '《南山男》'},
    {id: 3, name: '《一起老去》'},
]

function App() {
    return (
        <div className="App">
            <ul>
                {songs.map(song => <li key={song.id}>{song.name}</li>)}
            </ul>
        </div>
    );
}

export default App;