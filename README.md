# TestTask

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`.


Используя сервис работы с IMDB - http://www.myapifilms.com/ (или любой другой на выбор) создать web app из 3 страниц: топ 20 лучших фильмов, фильмы по десятилетиям (график) и избранные фильмы

Страница 20-ти лучших фильмов:
- в списке лучших фильмов выводятся фильмы со следующей информацией: постер, название, год, рейтинг, жанр, страна, режиссер (при клике на имя происходит переход на страничку режиссера на сайте imdb.com)
- для каждого фильма выводятся кнопки при нажатии на которые открывается поп-ап с трейлером фильма (если есть трейлер в нескольких качествах нужно выводить несколько кнопок)
- пользователь может отметить каждый фильм как избранный и это должно сохранится в локальном хранилище и в списке фильмов должна быть видна эта отметка

Страница фильмов по десятилетиям:
- должен выводится график (pie, donut или любой другой), который будет показывать количество фильмов по десятилетиям (первый год это год самого старого фильма в топ 20 фильмов, последний год - самого нового)

Страница избранных фильмов:
- пользователь видит список фильмов, которые он отметил как избранные (информация о фильме выводится такая же как и в списке фильмов) 
- пользователь может убрать фильм из списка

Примечания:
- использовать Angular 2/4/5, а также, по желанию кандидата, любые плагины/библиотеки необходимые для решения поставленной задачи
- все действия со списком избранных фильмов должны сохранятся в локальное хранилище пользователя
- серверная часть/База данных НЕ требуется, всё должно работать с использованием локального хранилища пользователя, какой именно тип хранилища использовать - решает кандидат
- приветствуется использование Yeoman+Grunt/Gulp для управления проектом и репризотория (Github, Bitbucket, другого) для хранения проекта
- приветствуется отсутствие Jquery в проекте
- при возникновении перебоев в работе API допускается сохранение данных локально и последующая работа с локальными данными
(предлагаем вам создать локальный  json файл, который будет содержать ссылки к трейлерам)
