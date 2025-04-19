const globalStyle = {
    margin: 0,
}

const FloatText = () => <div style={{
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
    }}>Activate Browser</p>
    <p style={{
        ...globalStyle,
        marginTop: '.2rem',
        fontSize: '1rem',
    }}>Go to Settings to activate Browser.</p>
</div>

export default FloatText
