import {useStorage} from "@plasmohq/storage/hook"
import {getBrowserName} from "~name";

const globalStyle = {
    margin: 0,
}

const FloatText = () => {
    const [title] = useStorage<string>("title")
    const [content] = useStorage<string>("content")
    const name = getBrowserName()

    return <div style={{
        ...globalStyle,
        position: 'fixed',
        right: 0,
        bottom: 0,
        zIndex: 999,
        paddingRight: '3rem',
        paddingBottom: '2rem',
        color: 'rgba(0.7686275, 0.7686275, 0.7686275, 0.4)',
        pointerEvents: 'none',
    }}>
        <p style={{
            ...globalStyle,
            fontSize: '1.2rem',
            fontWeight: 500,
        }}>{
            (title || null)?.replace('%s', name)
            ?? chrome.i18n.getMessage("title", [name])
        }</p>
        <p style={{
            ...globalStyle,
            marginTop: '.2rem',
            fontSize: '1rem',
        }}>{
            (content || null)?.replace('%s', name)
            ?? chrome.i18n.getMessage("content", [name])
        }</p>
    </div>
}

export default FloatText
