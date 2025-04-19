import {useStorage} from "@plasmohq/storage/hook";

function IndexPopup() {
    const [title, setTitle] = useStorage<string>("title")
    const [content, setContent] = useStorage<string>("content")

    return <div style={{
        display: 'flex',
        flexDirection: 'column',
        width: 500,
        color: 'black',
        backgroundColor: 'white',
    }}>
        <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
        />
        <input
            value={content}
            onChange={(e) => setContent(e.target.value)}
        />
    </div>
}

export default IndexPopup
