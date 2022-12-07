function Info () {
    return <div>
        <h1 className="info--title">Juan J. Mejía</h1>
        <h2 className="info--subtitle">FrontEnd Developer</h2>
        <h3 className="website--link"> juan.mejia.website</h3>
        <div className="buttons--">
            <button className="button--mail">
                {/* <i className="trash alternate outline icon"/> */}
                {/* <i className="edit alternate outline icon"/> */}
                <i className="mail icon"/>
                Email</button>
            <button className="button--linkedin">
                <i className="github icon"/>
                LinkedIn</button>
        </div>
        </div>
}

export default Info