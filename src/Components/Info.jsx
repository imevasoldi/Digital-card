function Info () {
    return <div>
        <div className="info--">
            <h1 className="info--title" 
                // style={{
                //     background: "green",
                //     margin: "0",
                //     marginBottom: "10%",
                // }}
            >
                Juan J. Mejía</h1>
            <h2 className="info--subtitle" 
                style={{
                background: "yellow",
                margin: "0%"
            }}
            >
                FrontEnd Developer</h2>
            {/* <h3 className="website--link"> juan.mejia.website</h3> */}
            <h3 style={{background: "purple"}}> juan.mejia.website</h3>
        </div>
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