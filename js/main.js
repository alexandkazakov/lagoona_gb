function createModal(name, content) {
  const modalWrap = document.createElement("div");
  const modal = document.createElement("div");
  const closeBtn = document.createElement("div");
  const modalContent = document.createElement("div");

  document.body.classList.add("overflow-hidden");
  modalWrap.classList.add("modal-wrap", name);
  modalWrap.setAttribute("id", name);
  modal.classList.add("modal", `${name}__modal`);
  closeBtn.classList.add("modal__close-btn");
  closeBtn.setAttribute("id", `${name}__close-btn`);
  modalContent.classList.add("modal__content", `${name}__content`);

  closeBtn.innerHTML = `<svg
    height="20px"
    width="20px"
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
    xml:space="preserve"
  >
    <g>
      <g>
        <polygon
          points="512,59.076 452.922,0 256,196.922 59.076,0 0,59.076 196.922,256 0,452.922 59.076,512 256,315.076 452.922,512 
  512,452.922 315.076,256 		"
        />
      </g>
    </g>
  </svg>`;

  modalContent.innerHTML = content;

  modal.append(closeBtn, modalContent);
  modalWrap.append(modal);
  document.body.append(modalWrap);

  closeBtn.addEventListener("click", (event) => {
    event.preventDefault();
    modalWrap.remove();
    document.body.classList.remove("overflow-hidden");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const feedbackOpenBtn = document.getElementById("nav__feedback-btn");
  const offer1Btn = document.getElementById("offer-1");
  const offer3Btn = document.getElementById("offer-3");
  const lkBtn = document.getElementById("header__autorize");

  feedbackOpenBtn.addEventListener("click", (event) => {
    event.preventDefault();
    createModal(
      "feedback",
      `
      <h2 class="section__title modal__title">Обратная связь</h2>
      <form action="" class="modal__form">
        <label for="feedback__name">Введите ваше имя</label>
        <input
          type="text"
          name="feedback__name"
          id="feedback__name"
          class="want-tour__input modal__input feedback__name"
          placeholder="Анатолий"
        />
        <label for="feedback__phone">Введите ваш номер телефона</label>
        <input
          type="text"
          name="feedback__phone"
          id="feedback__phone"
          class="want-tour__input modal__input feedback__phone"
          placeholder="+7(999)222-33-44"
          value="+7("
        />
      </form>
      <input
        type="submit"
        value="Жду звонка"
        class="btn-reset btn feedback__btn"
        id="feedback__btn"
      />
      `
    );

    document.getElementById("feedback__btn").addEventListener("click", () => {
      alert("Неправильно введен номер");
    });

    IMask(document.getElementById("feedback__phone"), {
      mask: "+{7}(000)000-00-00",
    });
  });

  offer1Btn.addEventListener("click", (event) => {
    event.preventDefault();
    createModal(
      "offer-1",
      `
      <h2 class="section__title modal__title">Мальдивские острова</h2>
      <p>Добро пожаловать на Мальдивские острова!</p>
      <p>Уникальное место для вашего незабываемого отдыха. Насладитесь белоснежными пляжами, яркой подводной жизнью и роскошными курортами.</p>
      <p>Стоимость от 55 тысяч рублей. Забронируйте проживание сейчас и откройте для себя рай на земле.</p>
    `
    );
  });

  offer3Btn.addEventListener("click", (event) => {
    event.preventDefault();
    createModal(
      "offer-3",
      `
      <h2 class="section__title modal__title">Номера категории люкс</h2>
      <p>Добро пожаловать в категорию Люкс номеров!</p>
      <p>Здесь вы сможете насладиться непревзойденным комфортом и роскошью, которые предлагает наш отель. Каждый Люкс номер создан с заботой о вашем удобстве, чтобы сделать ваше пребывание по-настоящему незабываемым.</p>
      <p>Наши Люкс номера предлагают роскошные пространства с превосходным дизайном и стильной обстановкой. Вы сможете наслаждаться просторной спальней с удобной кроватью и пушистыми подушками, а также отдельной гостиной зоной, где можно расслабиться после насыщенного дня.</p>
      <p>В номере также имеется собственная ванная комната с душем и ванной, чтобы вы могли расслабиться и позаботиться о себе. Кроме того, вас ожидают высококачественные туалетные принадлежности и мягкие халаты и тапочки для вашего комфорта.</p>
      <p>Цена наших Люкс номеров начинается от 5000 рублей за ночь. Уверяем вас, что каждая копейка стоит потраченного, и вы получите незабываемые впечатления от пребывания в нашем отеле.</p>
      <p>Не упустите возможность ощутить истинную роскошь и комфорт, выбрав категорию Люкс номеров. Мы гарантируем, что ваше пребывание у нас будет незабываемым.</p>
    `
    );
  });

  lkBtn.addEventListener("click", (event) => {
    event.preventDefault();
    createModal(
      "lk",
      `
      <h2 class="section__title modal__title">Регистрация</h2>
      <form action="" class="modal__form feedback__form">
        <label for="lk__name">Введите ваше имя</label>
        <input
          type="text"
          name="lk__name"
          id="lk__name"
          class="want-tour__input modal__input"
          placeholder="Анатолий"
        />
        <label for="lk__surname">Введите вашу фамилию</label>
        <input
          type="text"
          name="lk__surname"
          id="lk__surname"
          class="want-tour__input modal__input"
          placeholder="Карандашкин"
        />
        <label for="lk__email">Введите адрес электронной почты</label>
        <input
          type="text"
          name="lk__email"
          id="lk__email"
          class="want-tour__input modal__input"
          placeholder="karantoliy@gmail.com"
        />
        <label for="feedback__phone">Введите пароль</label>
        <input
          type="text"
          name="lk__email"
          id="lk__email"
          class="want-tour__input modal__input"
          placeholder="karantoliy@gmail.com"
        />
      </form>
      <input
        type="submit"
        value="Зарегистрироваться"
        class="btn-reset btn feedback__btn"
        id="lk__btn"
      />
    `
    );
    document.getElementById("lk__btn").addEventListener("click", (event) => {
      event.preventDefault();
      alert("lol");
    });
  });
});
