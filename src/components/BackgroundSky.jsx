function BackgroundSky({ children }) {
    return (
        <>
            <div className="sky">
                <div className="stars" />
            </div>
            {children}
        </>
    )
}

export default BackgroundSky;