// Данные постов (инди-игры)
const posts = [
  {
    id: 1,
    title: "Stardew Valley: почему мы возвращаемся в долину снова и снова",
    date: "10 июня 2024",
    summary: "Фермерский симулятор, который стал чем-то большим. Разбираемся, в чём секрет его магии.",
    content: "<p>Stardew Valley — это не просто игра про ферму. Это уютное убежище, где каждый находит что-то своё. Автор Эрик Бароне создал мир, в котором хочется жить: размеренный ритм, приятные персонажи, свобода действий. Год за годом игроки возвращаются в Пеликан-Таун, чтобы сажать редиску, ловить рыбу или просто слушать шум дождя.</p><p>Инди-разработка, начатая одним человеком, показала, что душевность и глубокая механика могут конкурировать с миллионными бюджетами. Stardew Valley — это ода простым радостям, и именно поэтому она остаётся любимой спустя годы.</p>",
    imageUrl: "https://i.ytimg.com/vi/O6L4YMOjLsM/maxresdefault.jpg"
  },
  {
    id: 2,
    title: "Hades: как рогалик превратили в шедевр повествования",
    date: "25 мая 2024",
    summary: "Supergiant Games снова удивили. Мифология, быстрый геймплей и смерти, которые работают на сюжет.",
    content: "<p>Hades берёт привычные элементы жанра roguelite и переворачивает их с ног на голову. Смерть здесь — не наказание, а способ узнать персонажа лучше, продвинуть отношения с богами Олимпа и собрать новые подсказки по истории. Каждый забег уникален благодаря системе улучшений от олимпийцев.</p><p>Визуальный стиль, музыка Даррена Корба и великолепная озвучка создают атмосферу античного экшена, от которого невозможно оторваться. Hades доказывает, что инди-игры способны задавать тренды в нарративном дизайне.</p>",
    imageUrl: "https://www.nintendo.com/eu/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_Hades.png"
  },
  {
    id: 3,
    title: "Celeste: трудный путь к себе (буквально)",
    date: "14 мая 2024",
    summary: "Платформер, который ломает пальцы, но лечит душу. Как игра помогает говорить о ментальном здоровье.",
    content: "<p>Celeste — это не только прецизионный платформер с сотнями смертей. Это глубокая история о тревоге, депрессии и принятии себя. Главная героиня Мэдлин поднимается на гору, которая оказывается метафорой внутренней борьбы.</p><p>Разработчики из Extremely OK Games создали механику, где каждая смерть — это урок, а помощь приходит в виде неожиданных союзников. Пиксельная графика и атмосферный саундтрек Лены Рейн погружают в состояние хрупкой надежды. Celeste — обязательный опыт для всех, кто ищет в играх больше, чем просто развлечение.</p>",
    imageUrl: "https://avatars.mds.yandex.net/i?id=05049f8c6494c26a26ff71f6b66ed23c_l-7003725-images-thumbs&n=13"
  },
  {
    id: 4,
    title: "Hollow Knight: мрачная сказка, покорившая миллионы",
    date: "2 мая 2024",
    summary: "Metroidvania от трёх австралийцев — как маленькая команда смогла бросить вызов жанру.",
    content: "<p>Hollow Knight вышел из краудфандинга и стал эталоном для целого жанра. Ручная графика, атмосферное звуковое сопровождение и взаимосвязанный мир, полный секретов, — всё это работа всего трёх человек из Team Cherry.</p><p>Игра не боится быть сложной и мрачной, но именно это делает каждое открытие ценным. История павшего королевства, загадочные персонажи и запоминающиеся битвы с боссами — Hollow Knight доказывает, что инди-сцена способна рождать настоящие шедевры.</p>",
    imageUrl: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/367520/f30cc19e25cce7e46cd7dfe89f3ee7852e634232/capsule_616x353.jpg?t=1776125684"
  }
];

// Функция для рендера карточек постов
function renderPosts() {
  const container = document.getElementById('posts-container');
  if (!container) return;
  
  container.innerHTML = posts.map(post => `
    <div class="post-card" data-id="${post.id}">
      <img class="post-image" src="${post.imageUrl}" alt="${post.title}">
      <div class="post-content">
        <h2 class="post-title">${post.title}</h2>
        <span class="post-date">📅 ${post.date}</span>
        <p class="post-summary">${post.summary}</p>
        <button class="read-more" data-id="${post.id}">Читать далее →</button>
      </div>
    </div>
  `).join('');
  
  // Добавляем обработчики на все кнопки "Читать далее"
  document.querySelectorAll('.read-more').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const postId = parseInt(btn.getAttribute('data-id'));
      const post = posts.find(p => p.id === postId);
      if (post) openModal(post);
    });
  });
}

// Функция открытия модального окна
function openModal(post) {
  const modal = document.getElementById('modal');
  const modalTitle = document.getElementById('modal-title');
  const modalBody = document.getElementById('modal-body');
  
  modalTitle.textContent = post.title;
  modalBody.innerHTML = `
    <p><strong>📅 ${post.date}</strong></p>
    ${post.content}
  `;
  modal.style.display = 'flex';
  
  // Закрытие по клику на крестик
  const closeBtn = document.querySelector('.close-btn');
  closeBtn.onclick = () => closeModal();
  
  // Закрытие по клику вне содержимого
  modal.onclick = (e) => {
    if (e.target === modal) closeModal();
  };
}

function closeModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
}

// Запускаем рендер после загрузки страницы
document.addEventListener('DOMContentLoaded', renderPosts);