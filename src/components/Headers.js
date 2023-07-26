const Headers = () => {
    return (
        <div className="ui secondary menu top attached header-background">
            <h2 className="ui item header red">
                AkioFlix
            </h2>
            <a className="item ui header header-text">
                Home
            </a>
            <a className="item ui header header-text">
                TV Shows
            </a>
            <a className="item ui header header-text">
                Movies
            </a>
            <a className="item ui header header-text">
                New & Popular
            </a>
            <a className="item ui header header-text">
                My list
            </a>
            <a className="item ui header header-text">
                Browse by Languages
            </a>
            <div className="ui right dropdown icon item hover-butto right-important" >
                <i className="search icon"></i>
            </div>
            <div className="ui right dropdown icon item hover-button" >
                
                <i className="user circle icon"></i>
                <div className="menu menu1">
                    <div className="item hover-button2">
                        <i className="dropdown icon"></i>
                        <span className="text">Transfer Account</span>
                        <div className="menu menu2">
                          <div className="item text-white">Account1</div>
                          <div className="item ">Account2</div>
                          <div className="item">Account3</div>
                          <div className="item">Account4</div>
                        </div>
                    </div>
                    <div className="item">
                      <i className="pencil alternate icon"></i>
                      Manage Profile
                    </div>
                    <div className="item">
                      <i className="external alternate icon"></i>
                      Exit Profile
                    </div>
                    <div className="item">
                      <i className="user icon"></i>
                      Account
                    </div>
                    <div className="item">
                      <i className="question circle outline icon"></i>
                      Help Center
                    </div>
                    <div className="divider"></div>
                    <div className="item">
                      Sign out of AkioFlix
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Headers;