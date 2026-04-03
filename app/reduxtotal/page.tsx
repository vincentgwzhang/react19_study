import Redux1 from "./redux1/page";
import Redux2 from "./redux2/page";
import ReduxStudent1 from "./reduxStudent1";
import ReduxStudent2 from "./reduxStudent2";

export default function ReduxTotal() {
    return (
        <div className="p-6 space-y-4">
            <h1 className="text-2xl font-bold">Redux 全家桶</h1>
            <p>这是一个使用 Redux Toolkit 构建的计数器应用，包含了 store、slice 和 hooks 的完整示例。</p>
            <Redux1 />
            <Redux2 />

            <ReduxStudent1 />
            <ReduxStudent2 />
        </div>
    )
}