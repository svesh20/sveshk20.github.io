// Функция для смены страниц
function showPage(pageId) {
    // Скрываем все страницы
    document.querySelectorAll('.page').forEach(page => {
        page.style.display = 'none';
    });
    // Показываем выбранную страницу
    document.getElementById(pageId).style.display = 'block';
}

// По умолчанию показываем первую страницу
showPage('about');

