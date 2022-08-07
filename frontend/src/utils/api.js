export class Api {
    constructor(options) {
        this._url = options.url;
        this._headers = options.headers;
    }

    _checkServerResponse(res) {
        //Проверка ответа сервера
        if (res.ok) {
            return res.json();
        }
        //Отклоняем промис, чтобы перейти в блок catch, если сервер вернул ошибку
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    //Загрузка информации о пользователе с сервера
    getUserInfo() {
        return fetch(`${this._url}/users/me`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('jwt')
            }
        })
            .then(this._checkServerResponse);
    }

    //Обновление аватара пользователя
    updateAvatar(data) {
        return fetch(`${this._url}/users/me/avatar`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('jwt')
            },
            body: JSON.stringify({
                avatar: data.avatar
            })
        })
            .then(this._checkServerResponse);
    }

    //Редактирование профиля
    updateUserInfo(data) {
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('jwt')
            },
            body: JSON.stringify({
                name: data.name,
                about: data.about
            })
        })
            .then(this._checkServerResponse);
    }

    //Загрузка карточек с сервера
    getInitialCards() {
        return fetch(`${this._url}/cards`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('jwt')
            },
        })
            .then(this._checkServerResponse);
    }

    //Добавление новой карточки
    sendCard(data) {
        return fetch(`${this._url}/cards`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('jwt')
            },
            body: JSON.stringify({
                name: data.name,
                link: data.link
            })
        })
            .then(this._checkServerResponse);
    }

    //Удаление карточки
    deleteCard(cardID) {
        return fetch(`${this._url}/cards/${cardID}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('jwt')
            }
        })
            .then(this._checkServerResponse);
    }

    //Постановка лайка
    setLike(cardID) {
        return fetch(`${this._url}/cards/${cardID}/likes`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('jwt')
            }
        })
            .then(this._checkServerResponse);
    }

    //Снятие лайка
    deleteLike(cardID) {
        return fetch(`${this._url}/cards/${cardID}/likes`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('jwt')
            }
        })
            .then(this._checkServerResponse);
    }

    changeLikeCardStatus(cardId, isLiked) {
        if (isLiked) {
            return this.setLike(cardId);
        } else {
            return this.deleteLike(cardId);
        }
    }
}

const api = new Api({
    url: 'https://api.bevuxyna.students.nomoredomains.sbs'
});

export default api;