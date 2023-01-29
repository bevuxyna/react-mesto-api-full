
# Mesto Russia

Веб-приложение для добавления/удаления фотографий, выполненный в рамках учебной проектной работы в Яндекс.Практикум.

Авторизованные пользователи могут:

- загружать фотографии с подписями;
- удалять их, если передумали;
- ставить лайки фотографиям друг друга;
- редактировать профиль (изменять информацию о себе и аватар).


## Tech Stack

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)&nbsp;
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)&nbsp;
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)&nbsp;
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)&nbsp;
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)&nbsp;
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)&nbsp;
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)&nbsp;
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)&nbsp;
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)&nbsp;

## Demo

Ссылка на веб-приложение:
https://bevuxyna.students.nomoredomains.sbs

Запросы к API осуществляются по адресу:
https://api.bevuxyna.students.nomoredomains.sbs
## Features

- Реализована авторизация и аутентификация пользователей.
- Все роуты, кроме аутентификации и авторизации, защищены авторизацией.
- Настроено логгирование (запросы и ответы записываются в `request.log`, ошибки записываются в `error.log`).
- Данные, которые приходят в теле и параметрах запроса, валидируются.
- Ошибки обрабатываются централизованным обработчиком.
- Для ошибок API созданы классы, расширяющие конструктор `Error`.
- Реализовано бережное хранение пароля (пароль хранится в виде хеша, API не возвращает хеш пароля клиенту)


## Screenshots
Регистрация нового пользователя:
![signup.png](https://s9.gifyu.com/images/signup.png)

Авторизация пользователя:
![signin.png](https://s9.gifyu.com/images/signin.png)

Основная страница с карточками:
![main.png](https://s3.gifyu.com/images/main.png)

Редактирование данных пользователя:
![edit.png](https://s9.gifyu.com/images/edit.png)

Редактирование аватара:
![editavatar.png](https://s9.gifyu.com/images/editavatar.png)

Добавление новой карточки:
![newplace.png](https://s9.gifyu.com/images/newplace.png)



## API Reference

Регистрация пользователя

```
  POST /signup
```

Авторизация пользователя

```
  POST /signin
```

Получение информации о текущем пользователе

```
  GET /users/me
```

Получение данных всех пользователей из базы

```
  GET /users
```

Получение информации о пользователе по _id

```
  GET /users/:userId
```

Обновление данных пользователя

```
  PATCH /users/me
```

Обновление аватара пользователя

```
  PATCH /users/me/avatar
```

Получение всех карточек из базы

```
  GET /cards
```

Создание карточки

```
  POST /cards
```

Обновление информации о пользователе (email и имя)

```
  PATCH /users/me
```

Удалить карточку по _id

```
  DELETE /cards/:cardId
```

Поставить лайк карточке

```
  PUT /cards/:cardId/likes
```

Удаление лайка с карточки

```
  DELETE /cards/:cardId/likes 
```

## Run Locally

Клонировать репозиторий:

```
  gh repo clone bevuxyna/react-mesto-api-full
```

Установить зависимости:

```
  npm install
```

Запустить сервер на `localhost:3000`:

```
  npm run start
```

Запустить сервер на `localhost:3000` с hot-reload:

```
  npm run dev
```
## Guidelines for the project

[Макет](https://www.figma.com/file/5H3gsn5lIGPwzBPby9jAOo/JavaScript.-Sprint-12?node-id=4453%3A82&t=WNBIsjbJlm5xPiY2-0) в Figma с компонентами авторизации и аутентификации

[Чек лист #1](https://code.s3.yandex.net/web-developer/checklists-pdf/new-program/checklist-12.pdf)

[Чек лист #2](https://code.s3.yandex.net/web-developer/checklists-pdf/new-program/checklist_13.pdf)

[Чек лист #3](https://code.s3.yandex.net/web-developer/checklists-pdf/new-program/checklist_14.pdf)

[Чек лист #4](https://code.s3.yandex.net/web-developer/checklists-pdf/new-program/checklist_15.pdf)
