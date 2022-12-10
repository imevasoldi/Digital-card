function Info () {
    return <div>
    <img style={{borderRadius: "10px 10px 0px 0px"}} src='/src/images/img1.jpeg'/>
        <div className="info--content">
            <h1 className="info--title" 
            >
                Juan J. Mejía</h1>
            <h2 className="info--subtitle" 
            >
                FrontEnd Developer</h2>
            <h3 className="website--link"> juan.mejia.website</h3>
        </div>
        <div className="buttons--">
            <button className="button--mail">
                <i className="mail icon"/>
                Email</button>
            <button className="button--linkedin">
                <i className="github icon"/>
                Github</button>
        </div>
        </div>
}

export default Info
