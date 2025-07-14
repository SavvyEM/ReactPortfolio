import React, { useState } from 'react';
import ModalWindow from './ModalWindow';

function Main() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <header>
        <div className='menu'>
          <a>Обо мне</a>
          <a>Услуги</a>
          <a>Портфолио</a>
          <a>Отзывы</a>
          <a>Гарантии</a>
        </div>

        <button onClick={handleOpenModal} className="btn" style={{ marginRight: '18px' }}>Связаться</button>
        <ModalWindow show={showModal} onClose={handleCloseModal}>
          <h2 style={{ color: "#4824ff", fontSize: "40px" }}>Контакты</h2>
          <p style={{ fontSize: "22px" }}>Вы можете связаться со мной в телеграм<br /> или в инстаграм</p>
        </ModalWindow>

        <a href="https://t.me/savvyem" target="_blank" className="icon telegram" />
        <a href="https://www.instagram.com/tich0rem/" target="_blank" className="icon instagram" />

        <div className="switch">
          <div className="theme light">

          </div>
        </div>
      </header>

      <div className="welcome-block">
        <div className="first-block">
          <h1>Веб-разработчик/программист <span className="title">SavvyEm</span></h1>
          <h2 style={{ marginBottom: "7%", marginTop: "7%" }}>
            Создаю <span style={{ color: "#4824ff" }}>сайты</span><br /> под ваши запросы
          </h2>
          <h3>Занимаюсь веб-разработкой<br />
            на протяжении <span style={{ color: "#4824ff" }}> 3 лет</span></h3>
        </div>

        <div className="main-image-box">
          {/* <img src="./images/1.png" alt='' className="first-image-layer" draggable="false" /> */}
          {/* ДОПОЛНИТЬ ФОТОГРАФИЯМИ */}
          <img src="./images/1.png" alt='' className="second-image-layer" draggable="false" />
          {/* <img src="./images/1.png" alt='' className="third-image-layer" draggable="false" />
          <img src="./images/1.png" alt='' className="fourth-image-layer" draggable="false" />
          <img src="./images/1.png" alt='' className="fifth-image-layer" draggable="false" /> */}
        </div>
      </div>

      <div className="service-block" draggable="false">
        <h1 style={{ fontSize: "52px" }}>УСЛУГИ</h1>
        <p style={{ fontSize: "27px" }}>Создаю
          <span style={{ color: "#4824ff" }}> сайты </span>
          по следующим направлениям:</p>

        <div style={{ display: "flex" }}>
          <p className="tag"><p className="tag-icon" />Одностраничные сайты</p>
          <p className="tag"><p className="tag-icon" />Многостраничные сайты</p>
          <p className="tag"><p className="tag-icon" />Сайты на React</p>
          <p className="tag"><p className="tag-icon" />Сайты на Next.js</p>
        </div>
        <div style={{ display: "flex", marginTop: "16px" }}>
          <p className="tag"><p className="tag-icon" />Сайты без фреймворка</p>
          <p className="tag"><p className="tag-icon" />Сайты без готового дизайна</p>
          <p className="tag"><p className="tag-icon" />Сайты с готовым дизайном</p>
        </div>

        <p style={{ fontSize: "27px" }}>Открыт для сотрудничества и создания сайтов по другим направлениям веб-разработки. <br />
          Детальней готов обсудить при
          <span style={{ color: "#4824ff", cursor: "pointer" }} onClick={handleOpenModal}> личной переписке</span>
        </p>
      </div>
    </div>
  );
}

export default Main;
