import HomeSvg from '../assets/home.svg'

function Header (){
    return (
        <div className="header">
           <img src={HomeSvg} />
           <p>Community</p>
        </div>
    )
}

export default Header