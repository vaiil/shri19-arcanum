# Custom redux implementation

Для установки и запуска
```shell script
npm install --production
npm run start
```

Затем открыть страницу:
http://localhost:3000/files.html

Там реализовано окно поиска в правой части экрана.
 
Также попробовал сделать middlewares, 
так как времени на реализацию общения с API не оставалось,
сделал просто middleware заглушку (`src/js/app/middlewares/loadFiles.js`), 
которая через раз асинхронно возвращает различный набор файлов. 

Загрузка файлов происходит при клике на имя файла или папки в списке. 
Делал это для примера работы с middleware, потому в action FETCH_FILES_REQUEST 
не передается реальная директория. 


# arcanum shri

Для запуска сервера 
(просто показываем статические страницы):

```shell script
npm install
npm run start
```

Для запуска dev-server-а:
```shell script
npm install
npm run dev
```

P.S. к сожалению на качественную реализацию дизайн системы времени не хватило, делал в спешке :(
