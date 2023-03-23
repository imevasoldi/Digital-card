function Info () {
    return <div>
    <img style={{borderRadius: "10px 10px 0px 0px"}} src='/img1.jpeg'/>
        <div className="info--content">
            <h1 className="info--title" 
            >
                Juan J. Mejía</h1>
            <h2 className="info--subtitle" 
            >
                FullStack Developer</h2>
            <h3 className="website--link"> juan.mejia.com</h3>
        </div>
        <div className="buttons--">
            <a href="https://torre.co/s/x9bxxSuLoX" target="_blank">
            <button className="button--mail">
                <i style={{marginRight: "10%"}} className="user icon"/>
                Profile</button>
            </a>
            <a href="https://main--reliable-daffodil-f59850.netlify.app/" target="_blank">
            <button className="button--linkedin">
                <i style={{marginRight: "10%"}} className="github icon"/>
                Github</button>
            </a>
        </div>
        </div>
}

export default Info
