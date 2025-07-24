import React, { useState, useRef, useEffect, use } from 'react';
import ModalWindow from './ModalWindow';
import AllGallery from './AllGallery';
import OnePage from './OnePage';
import ManyPages from './ManyPages';
import WithDesign from './WithDesign';
import WithoutFrame from './WithoutFrame';
import WithoutDesign from './WithoutDesign';
import OnReact from './OnReact';
import OnNext from './OnNext';
import Review from './Review';
import Theme from './Theme';

function Main() {
  const { theme, setTheme } = Theme();
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
  });

  const toggleTheme = () => {
    if (isDarkTheme) lightTheme();
    else darkTheme();
    setIsDarkTheme(!isDarkTheme);
  }

  const lightTheme = () => {
    setTheme('light');
  }

  const darkTheme = () => {
    setTheme('dark');
  }

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

  const containerRef = useRef(null);
  const reviewWidthRef = useRef(0);

  const reviews = [
    <Review key={1} name='Владислав М.' link='https://t.me/+g_omdoM3faY0ZTky' text='Текст отзыва, оставленного клиентом в телеграм канале, который можно открыть нажав на кнопку в правом верхнем углу этого блока' />,
    <Review key={2} name='Максим Л.' link='https://t.me/+g_omdoM3faY0ZTky' text='Отзыв оставлен Максимом' />,
    <Review key={3} name='Вячеслав К.' link='https://t.me/+g_omdoM3faY0ZTky' text='Подписывайся на телеграм канал с отзывами' />
  ];

  const visibleReviews = 3;

  const handleScroll = () => {
    const box = containerRef.current;
    const width = reviewWidthRef.current * visibleReviews;

    if (box.scrollLeft <= 0) {
      box.style.scrollBehavior = 'auto';
      box.scrollLeft = box.scrollWidth - 2 * width;
      box.style.scrollBehavior = 'smooth';
    }

    if (box.scrollLeft >= box.scrollWidth - width) {
      box.style.scrollBehavior = 'auto';
      box.scrollLeft = width;
      box.style.scrollBehavior = 'smooth';
    }
  };

  const btnPrevReview = () => {
    const box = containerRef.current;
    box.scrollLeft -= reviewWidthRef.current;
  }
  const btnNextReview = () => {
    const box = containerRef.current;
    box.scrollLeft += reviewWidthRef.current;
  }

  useEffect(() => {
    const box = containerRef.current;
    const firstReview = box.querySelector('.review-card');
    reviewWidthRef.current = firstReview.clientWidth;
    const width = reviewWidthRef.current * visibleReviews;

    box.scrollLeft = (box.scrollWidth - width) / 2;
    box.addEventListener('scroll', handleScroll);

    return () => {
      box.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [scroll, setScroll] = useState(0);

  const scrollUp = () => {
    setScroll(window.scrollY);
  }

  const upButton = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollUp)
  }, [])

  const toBlock = (height) => {
    window.scrollTo({ top: height, left: 0, behavior: 'smooth' });
  }

  // Универсальная функция для поиска скроллируемого контейнера
  function getScrollableParent(element) {
    let parent = element.parentElement;
    while (parent) {
      const overflowY = window.getComputedStyle(parent).overflowY;
      if ((overflowY === 'auto' || overflowY === 'scroll') && parent.scrollHeight > parent.clientHeight) {
        return parent;
      }
      parent = parent.parentElement;
    }
    return window;
  }

  return (
    <div>
      <header>
        <div className="navigation">
          <div className='menu'>
            <a onClick={() => {
              const el = document.getElementById('about');
              if (el) {
                const y = el.getBoundingClientRect().top + (window.scrollY || window.pageYOffset) - 110;
                const scrollParent = getScrollableParent(el);
                console.log('scroll to about', y, 'parent:', scrollParent);
                if (scrollParent === window) {
                  window.scrollTo({ top: y, behavior: 'smooth' });
                } else {
                  scrollParent.scrollTo({ top: y, behavior: 'smooth' });
                }
              }
            }}>Обо мне</a>
            <a onClick={() => {
              const el = document.getElementById('services');
              if (el) {
                const y = el.getBoundingClientRect().top + (window.scrollY || window.pageYOffset) - 110;
                const scrollParent = getScrollableParent(el);
                console.log('scroll to services', y, 'parent:', scrollParent);
                if (scrollParent === window) {
                  window.scrollTo({ top: y, behavior: 'smooth' });
                } else {
                  scrollParent.scrollTo({ top: y, behavior: 'smooth' });
                }
              }
            }}>Услуги</a>
            <a onClick={() => {
              const el = document.getElementById('portfolio');
              if (el) {
                const y = el.getBoundingClientRect().top + (window.scrollY || window.pageYOffset) - 110;
                const scrollParent = getScrollableParent(el);
                console.log('scroll to portfolio', y, 'parent:', scrollParent);
                if (scrollParent === window) {
                  window.scrollTo({ top: y, behavior: 'smooth' });
                } else {
                  scrollParent.scrollTo({ top: y, behavior: 'smooth' });
                }
              }
            }}>Портфолио</a>
            <a onClick={() => {
              const el = document.getElementById('reviews');
              if (el) {
                const y = el.getBoundingClientRect().top + (window.scrollY || window.pageYOffset) - 110;
                const scrollParent = getScrollableParent(el);
                console.log('scroll to reviews', y, 'parent:', scrollParent);
                if (scrollParent === window) {
                  window.scrollTo({ top: y, behavior: 'smooth' });
                } else {
                  scrollParent.scrollTo({ top: y, behavior: 'smooth' });
                }
              }
            }}>Отзывы</a>
            <a onClick={() => {
              const el = document.getElementById('guarantees');
              if (el) {
                const y = el.getBoundingClientRect().top + (window.scrollY || window.pageYOffset) - 110;
                const scrollParent = getScrollableParent(el);
                console.log('scroll to guarantees', y, 'parent:', scrollParent);
                if (scrollParent === window) {
                  window.scrollTo({ top: y, behavior: 'smooth' });
                } else {
                  scrollParent.scrollTo({ top: y, behavior: 'smooth' });
                }
              }
            }}>Гарантии</a>
          </div>

          <div className="header-buttons">
            <button onClick={handleOpenModal} className="btn" aria-label="Связаться">
              Связаться
            </button>
            <a href="https://t.me/savvyem" target="_blank" className={theme === 'light' ? 'icon telegram light' : 'icon telegram dark'} />
            <a href="https://www.instagram.com/tich0rem/" target="_blank" className={theme === 'light' ? 'icon instagram light' : 'icon instagram dark'} />

            <div className="switch" onClick={toggleTheme}>
              <div className={theme === 'light' ? 'theme light' : 'theme dark'}
                style={{ transform: isDarkTheme ? 'translateX(38px)' : 'translateX(0px)' }}>
              </div>
            </div>
          </div>
        </div>
      </header>

      <ModalWindow show={showModal} onClose={handleCloseModal}>
        <h2 style={{ color: "#4824ff", fontSize: "40px" }}>Контакты</h2>
        <p style={{ fontSize: "22px" }}>Вы можете связаться со мной в телеграм<br /> или в инстаграм</p>
      </ModalWindow>

      <div id="about" className="welcome-block">
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
          {/* <img src="./images/1.png" alt='' className="third-image-layer" 
            src={theme === 'light' ? './images/1.png' : './images/1-dark.png'}
          draggable="false" />
          <img src="./images/1.png" alt='' className="fourth-image-layer" draggable="false" />
          <img src="./images/1.png" alt='' className="fifth-image-layer" draggable="false" /> */}
        </div>
      </div>

      <div id="services" className="service-block" draggable="false">
        <h1 style={{ fontSize: "52px" }}>УСЛУГИ</h1>
        <p style={{ fontSize: "27px" }}>Создаю
          <span style={{ color: "#4824ff" }}> сайты </span>
          по следующим направлениям:</p>

        <div style={{ display: "flex" }}>
          <p className="tag"><span className={theme === 'light' ? 'tag-icon light' : 'tag-icon dark'}></span>Одностраничные сайты</p>
          <p className="tag"><span className={theme === 'light' ? 'tag-icon light' : 'tag-icon dark'}></span>Многостраничные сайты</p>
          <p className="tag"><span className={theme === 'light' ? 'tag-icon light' : 'tag-icon dark'}></span>Сайты на React</p>
          <p className="tag"><span className={theme === 'light' ? 'tag-icon light' : 'tag-icon dark'}></span>Сайты на Next.js</p>
        </div>
        <div style={{ display: "flex", marginTop: "16px" }}>
          <p className="tag"><span className={theme === 'light' ? 'tag-icon light' : 'tag-icon dark'}></span>Сайты без фреймворка</p>
          <p className="tag"><span className={theme === 'light' ? 'tag-icon light' : 'tag-icon dark'}></span>Сайты без готового дизайна</p>
          <p className="tag"><span className={theme === 'light' ? 'tag-icon light' : 'tag-icon dark'}></span>Сайты с готовым дизайном</p>
        </div>

        <p style={{ fontSize: "27px" }}>Открыт для сотрудничества и создания сайтов по другим направлениям веб-разработки. <br />
          Детальней готов обсудить при
          <span style={{ color: "#4824ff", cursor: "pointer" }} onClick={handleOpenModal}> личной переписке</span>
        </p>
      </div>

      <div id='portfolio' className='portfolio-block'>
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

      <div id="reviews" className="review-block">
        <h1>ОТЗЫВЫ</h1>
        <span className="description">Отзывы клиентов</span>
        написанные со своих
        <span className="selecting"> личных аккаунтов. </span>
        <br /> Любой отзыв можно <span className="selecting"> открыть</span>
        в телеграм и <span className="selecting"> спросить</span> от впечатлениях
        работы со мной <br /> у создателя отзыва лично

        <div className="review-carousel">
          <div className="review-container" ref={containerRef}>
            {reviews.slice(-visibleReviews)}
            {reviews}
            {reviews.slice(0, visibleReviews)}
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <p className="next-button" style={{ transform: 'rotate(180deg)' }}>
            <p className='array-next-icon' onClick={btnPrevReview} /></p>
          <p className="next-button">
            <p className="array-next-icon" onClick={btnNextReview} />
          </p>
        </div>
      </div>

      <div id="guarantees" className="guarantees-block">
        <h1 style={{ fontSize: '52px', paddingBottom: '20px' }}>ГАРАНТИИ</h1>

        <ol className="guarantees-points">
          <li className="point">
            Оплату принимаю через платежную систему
            <span style={{ color: '#4824ff' }}> СБП</span>,
            которая контролирует <br />безопасность денежных переводов
          </li>
          <li className="point">
            Убедиться в моей ответственности и профессионализме можно
            <span style={{ color: '#4824ff' }}> написав клиентам</span>,
            <br />оставившим отзывы
            <span style={{ color: '#4824ff' }}> лично </span>
            в любой момент
          </li>
          <li className="point">
            Все <span style={{ color: '#4824ff' }}> авторские права </span>,
            на работу переходят заказчику после выполнения заказа
          </li>
          <li className="point">
            В своих работах использую материалы строго
            <span style={{ color: '#4824ff' }}> разрешенные для личного<br />
              и коммерческого использования</span>
          </li>
        </ol>
      </div>

      <div className="footer">SavvyEm</div>

      <div className={scroll < 1960 ? '' : 'btn-up'} onClick={upButton} aria-label="Наверх"></div>
    </div>
  );
}

export default Main;
