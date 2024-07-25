import { useState } from "react";
import "./index.css";

function Card() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState('');
  const [card, setCard] = useState("+998");
  const [davl, setDavl] = useState("");
  const [shaxar, setShaxar] = useState("");
  const [text, setText] = useState('');
  const [son, setSon] = useState("2");
  const [izoh, setIzoh] = useState('');

  function validate() {
    let isValid = true;

    if (name.length < 3) {
      alert("Ismingizni to'liq kiriting");
      isValid = false;
    }

    const phoneNumber = card.replace(/^\+998/, '');
    if (phoneNumber.length < 9) {
      alert("Telefon raqami to'liq emas");
      isValid = false;
    }

    return isValid;
  }

  
  function handleName(event) {
    setName(event.target.value);
  }

  function handleEmail(event) {
    setEmail(event.target.value);
  }

  function handleCard(event) {
    setCard(event.target.value);
  }

  function handleDavl(event) {
    setDavl(event.target.value);
  }

  function handleShaxar(event) {
    setShaxar(event.target.value);
  }

  function handleText(event) {
    setText(event.target.value);
  }

  function handleSon(event) {
    setSon(event.target.value);
  }

  function handleIzoh(event) {
    setIzoh(event.target.value);
  }

  function handleBtn(event) {
    event.preventDefault();

    if (!validate()) {
      return;
    }

    let user = {
      name,
      email,
      card,
      davl,
      shaxar,
      text,
      son,
      izoh,
    };
    console.log(user);
  }

  return (
    <>
      <div className="card_container">
        <div className="kom">
          <h1>Kompaniya malumotlari</h1>
          <h5>Kompaniya haqidagi ma’lumotlarni kiriting</h5>
        </div>
        <div className="frame">
          <div className="logi">
            <img src="https://picsum.photos/200/300" alt="" />
            <h3>Yuklash</h3>
          </div>
          <div className="form">
            <h4>
              Kompaniya nomi <span>*</span>
            </h4>
            <input
              type="text"
              placeholder="Kompaniya nomi"
              onChange={handleName}
              value={name}
            />

            <h4>
              {" "}
              Email <span>*</span>
            </h4>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              onChange={handleEmail}
              value={email}
              required
            />

            <h4>
              {" "}
              Telefon raqami <span>*</span>
            </h4>

            <select onChange={(e) => setCard(e.target.value)} value={card}>
              <option value="+998">+998</option>
              <option value="+996">+996</option>
              <option value="+798">+798</option>
              <option value="+567">+567</option>
            </select>
            <input
              type="tel"
              id="phone"
              placeholder="Telefon raqami "
              required
              onChange={handleCard}
              value={card}
            />
          </div>
          <div className="icon">
            <h4>
              {" "}
              Linklar <span>*</span>
            </h4>
          </div>
          <div className="davlat">
            <div className="dav">
              <h4>
                Davlat *<span>*</span>
              </h4>

              <select onChange={handleDavl} value={davl}>
                <option value="UZB">uzb</option>
                <option value="KRG">KRG</option>
                <option value="RUS">RUS</option>
                <option value="ENG">ENG</option>
              </select>
            </div>
            <div className="shah">
              <h4>
                {" "}
                Shahar <span>*</span>
              </h4>

              <select onChange={handleShaxar} value={shaxar}>
                <option value="FARGONA">FARGONA</option>
                <option value="OSH">OSH</option>
                <option value="MACKVA">MACKVA</option>
                <option value="LONDON">LONDON</option>
              </select>
            </div>
          </div>
          <h4>
            Yashash joyi <span>*</span>
          </h4>
          <input
            className="joy"
            type="text"
            placeholder="Joy"
            onChange={handleText}
            value={text}
          />

          <h4>
            {" "}
            Hodimlar soni <span>*</span>
          </h4>

          <select className="hod" onChange={handleSon} value={son}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>

          <h4>
            Izoh <span>*</span>
          </h4>
          <input
            className="izoh"
            type="text"
            placeholder="Kompaniya haqida izoh qoldiring"
            onChange={handleIzoh}
            value={izoh}
          />

          <div className="btn">
            <button className="btnn">Ortga</button>
            <button onClick={handleBtn}>Keyingisi</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
