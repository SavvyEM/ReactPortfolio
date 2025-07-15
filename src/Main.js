import React, { useState } from 'react';
import ModalWindow from './ModalWindow';
import AllGallery from './AllGallery';
import OnePage from './OnePage';
import ManyPages from './ManyPages';
import WithDesign from './WithDesign';
import WithoutFrame from './WithoutFrame';
import WithoutDesign from './WithoutDesign';
import OnReact from './OnReact';
import OnNext from './OnNext'

function Main() {
  const [showModal, setShowModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Заменить на свои работы
  const renderComponent = () => {
    switch (selectedCategory) {
      case 'All':
        return <AllGallery />;
      case 'OnePage':
        return <OnePage />;
      case 'ManyPages':
        return <ManyPages />;
      case 'WithDesign':
        return <WithDesign />;
      case 'WithoutFrame':
        return <WithoutFrame />;
      case 'WithoutDesign':
        return <WithoutDesign />;
      case 'OnReact':
        return <OnReact />;
      case 'OnNext':
        return <OnNext />;
      default:
        return <AllGallery />
    }
  }
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

      <div className='portfolio-block'>
        <div className="first-block">
          <h1 className="main-title">Портфолио</h1>
          <div style={{ position: "absolute", marginLeft: "-660px" }}>
            <p className="gradient-part-one"></p>
            <p className="title-border">Портф</p>
          </div>
          <div style={{ position: "absolute", marginLeft: "620px" }}>
            <p className="gradient-part-two"></p>
            <p className="title-border">Фолио</p>
          </div>
          <svg
            className="array-icon"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            draggable="false"
          >
            <path
              d="M3 11V12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12V11M8 11L12 15M12 15L16 11M12 15V3"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
          <p className={`tag ${selectedCategory === 'All' ? 'selected' : ''}`} onClick={() => setSelectedCategory('All')}>Все работы</p>
          <p className={`tag ${selectedCategory === 'OnePage' ? 'selected' : ''}`} onClick={() => setSelectedCategory('OnePage')}>Одностраничные</p>
          <p className={`tag ${selectedCategory === 'ManyPages' ? 'selected' : ''}`} onClick={() => setSelectedCategory('ManyPages')}>Многостраничные</p>
          <p className={`tag ${selectedCategory === 'WithDesign' ? 'selected' : ''}`} onClick={() => setSelectedCategory('WithDesign')}>С готовым дизайном</p>
          <p className={`tag ${selectedCategory === 'WithoutDesign' ? 'selected' : ''}`} onClick={() => setSelectedCategory('WithoutDesign')}>Без готового дизайна</p>
          <p className={`tag ${selectedCategory === 'WithoutFrame' ? 'selected' : ''}`} onClick={() => setSelectedCategory('WithoutFrame')}>Без фреймворка</p>
          <p className={`tag ${selectedCategory === 'OnReact' ? 'selected' : ''}`} onClick={() => setSelectedCategory('OnReact')}>На React.js</p>
          <p className={`tag ${selectedCategory === 'OnNext' ? 'selected' : ''}`} onClick={() => setSelectedCategory('OnNext')}>На Next.js</p>
        </div>

        <div className="content" style={{ marginLeft: "-5vw", marginRight: "-5vw" }}>
          {renderComponent()}
        </div>
      </div>
    </div>
  );
}

export default Main;
