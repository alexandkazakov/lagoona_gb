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
  const termsBtn = document.getElementById("terms");

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
      <form action="" class="modal__form register__form" id="register__form">
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
          placeholder="tolya_karandash@gmail.com"
        />
        <label for="feedback__phone">Введите пароль</label>
        <input
          type="password"
          name="lk__pass"
          id="lk__pass"
          class="want-tour__input modal__input"
          placeholder="********"
        />
        <input
          type="submit"
          value="Зарегистрироваться"
          class="btn-reset btn feedback__btn"
          id="lk__btn"
        />
      </form>
    `
    );
    document
      .getElementById("register__form")
      .addEventListener("submit", (event) => {
        event.preventDefault();
        const passValue = document.getElementById("lk__pass").value;
        if (passValue.length < 8) {
          alert("Минимальная длина пароля 8 символов");
          return;
        }
        if (passValue.search(/\d/) === -1) {
          alert("Пароль должен содержать цифры");
          return;
        }
        if (passValue.search(/[A-Z]/g) === -1) {
          alert("Пароль должен содержать заглавные буквы");
          return;
        }
        if (passValue.search(/[a-z]/g) === -1) {
          alert("Пароль должен содержать строчные буквы");
          return;
        }
        if (passValue.search(/\W/) === -1) {
          alert("Пароль должен содержать спец. символы");
          return;
        }
        alert("Регистрация прошла успешно!");
        document.getElementById("lk").remove();
      });
  });

  termsBtn.addEventListener("click", (event) => {
    event.preventDefault();
    createModal(
      "terms",
      `
      <h2 class="section__title modal__title">Пользовательское соглашение</h2>
      <p>Добро пожаловать на наш сайт! Пожалуйста, внимательно ознакомьтесь с нижеследующим пользовательским соглашением перед использованием нашего ресурса. Взаимодействуя с сайтом, вы выражаете свое согласие со всеми указанными ниже условиями и правилами. Если вы не согласны с этими условиями, просим вас немедленно покинуть сайт.</p>

      <p>Личные данные:</p>
      <p>Мы придаем большое значение защите вашей конфиденциальности. Когда вы взаимодействуете с нашим сайтом, мы можем собирать некоторую информацию, такую как ваше имя, адрес электронной почты и другие данные, которые вы предоставляете добровольно. Мы обязуемся хранить эти данные в безопасности и не передавать их третьим лицам без вашего согласия.</p>

      <p>Интеллектуальная собственность:</p>
      <p>Все содержимое, представленное на нашем сайте, включая тексты, изображения, графику, логотипы, аудио- и видеоматериалы, является нашей собственностью или собственностью третьих лиц, с которыми мы сотрудничаем. Запрещается копирование, распространение или использование этого контента без нашего явного разрешения или разрешения правообладателя.</p>

      <p>Использование сайта:</p>
      <p>При использовании нашего сайта вы обязуетесь не нарушать никаких применимых законов и не осуществлять действий, которые могут нанести вред нашему ресурсу или третьим лицам. Запрещается загружать вредоносное программное обеспечение, публиковать незаконный контент, злоупотреблять сервисами сайта или вмешиваться в его нормальное функционирование.</p>

      <p>Отказ от ответственности:</p>
      <p>Мы прикладываем все усилия, чтобы предоставить точную и актуальную информацию на нашем сайте, однако не гарантируем ее полную достоверность. Мы не несем ответственности за любые убытки или ущерб, возникшие в результате использования информации, представленной на нашем сайте.</p>

      <p>Внешние ссылки:</p>
      <p>На нашем сайте могут быть представлены ссылки на внешние ресурсы, которые не контролируются нами. Мы не несем ответственности за содержимое или действия, предпринятые на таких внешних сайтах.</p>

      <p>Изменения пользовательского соглашения:</p>
      <p>Мы оставляем за собой право вносить изменения в это пользовательское соглашение по своему усмотрению. Изменения вступают в силу с момента их публикации на сайте. При посещении сайта после внесения изменений вы автоматически соглашаетесь с новыми условиями.</p>

      <p>Благодарим вас за ознакомление с нашим пользовательским соглашением. Пользуясь нашим сайтом, вы соглашаетесь с вышеуказанными условиями. Если у вас возникли вопросы или замечания, пожалуйста, свяжитесь с нами по указанным контактным данным.</p>
    `
    );
  });
});
