import "./index.css";
import Card from '../../components/Card'
function Header() {
  return (
    <>
      <div className="header_container">
        <div className="header_logo">
            <div className="logo">
             <h1>logo</h1>
            </div>
            <div className="text">
                <h5>Vakansiyalar</h5>
                <h5>Kandidatlar</h5>
                <h5>Kompaniyalar</h5>
                <h5>Xizmatlar</h5>
                <h5>Xizmatlar</h5>
            </div>
            <div className="brent">
                <select className="select">
                    <option value="Uzb">Uzb</option>
                    <option value="Rus">Rus</option>
                    <option value="Eng">Eng</option>
                </select>
                <button className="button">Boshlash</button>
            </div>
        </div>
        <Card/>
      </div>
    </>
  );
}

export default Header;


