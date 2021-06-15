
function setProfileGenderImage(currentEmployee) {
    switch (currentEmployee.gender) {
        case 'male': return 'male.jpg';
            break;
        case 'female': return 'female.jpg';
            break;
    }
}

function sendingEmail(
    username, password, 
    To, From, Subject, Body) {
    Email.send({
        Host : "smtp.gmail.com",
        Username : username,
        Password : password,
        To : To,
        From : From,
        Subject : Subject,
        Body : Body
    }).then(
      message => alert('Хат жіберілді!')
    );
}

function ifSendedMessage(currentEmployee) {
    window.alert(`${currentEmployee.email} адресіне өтініш сәтті жіберілді!`);
}
function puttingStaffCard() {
    let allcards = '';
    staff.forEach((item, i) => {
        allcards = (
            `
            <div class="card shadow" style="margin-top: 12px;">
            <div class="card-body">
                <div class="row visible">
                    <div class="col-12 col-md-12 col-lg-9">
                        <h4>${item.fullname}</h4>
                        <h6 class="text-muted mb-2">${item.status}</h6>
                        <div class="row">
                            <div class="col" style="margin-top: 0px;">
                                <div class="accordion" role="tablist" id="accordion-${i}">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" role="tab"><button class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#accordion-${i} .item-1" aria-expanded="false" aria-controls="accordion-${i} .item-1">Толығырақ</button></h2>
                                        <div class="accordion-collapse collapse item-1" role="tabpanel" data-bs-parent="#accordion-${i}">
                                            <div class="accordion-body">
                                                <div class="row">
                                                    <div class="col-lg-12">
                                                        <div class="row">
                                                            <div class="col-6 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4 offset-sm-1 offset-lg-1 offset-xl-1 offset-xxl-1">
                                                                <p><i class="fas fa-phone" style="font-size: 20px;"></i>&nbsp; Телефон:</p>
                                                            </div>
                                                            <div class="col-6 col-sm-7 col-md-7 col-lg-7 col-xl-7 col-xxl-6">
                                                                <p>${item.phone.phoneNumber}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-12">
                                                        <div class="row">
                                                            <div class="col-6 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4 offset-sm-1 offset-lg-1 offset-xl-1 offset-xxl-1">
                                                                <p><i class="fas fa-mail-bulk" style="font-size: 20px;"></i>&nbsp; Пошта:</p>
                                                            </div>
                                                            <div class="col-sm-7 col-md-7 col-lg-7 col-xl-7 col-xxl-6">
                                                                <p class="text-start">${item.email}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col">
                                                        <hr style="font-size: 22px;color: var(--bs-dark);box-shadow: 0px 0px 2px 0px;">
                                                    </div>
                                                    <div class="col-lg-12 d-flex justify-content-center align-items-center">
                                                        <p class="text-center d-flex">Қызметкермен байланыс</p>
                                                    </div>
                                                    <div class="col-lg-12">
                                                        <div class="row">
                                                            <div class="col-4 d-lg-flex justify-content-lg-center">
                                                                <div class="row">
                                                                    <div class="col d-flex d-lg-flex justify-content-center align-items-center justify-content-lg-center align-items-lg-center"><img style="width: 70px;" src="https://pngicon.ru/file/uploads/whatsapp.png"></div>
                                                                    <div class="col d-flex d-lg-flex justify-content-center align-items-center justify-content-lg-center align-items-lg-center" style="margin-top: 8px;"><a class="btn btn-light" type="button" 
                                                                            href="https://wa.me/${item.phone.phoneNumber}/?text=Сәлеметсіз%20бе!%20${item.lastname}%20${item.firstname}%20${item.patronymic}," style="margin-top: 0px;text-shadow: 0px 0px 4px var(--bs-light);color: #00b760;">Whatsapp</a></div>
                                                                </div>
                                                            </div>
                                                            <div class="col-4 d-lg-flex justify-content-lg-center">
                                                                <div class="row">
                                                                    <div class="col d-flex d-lg-flex justify-content-center align-items-center justify-content-lg-center align-items-lg-center"><img style="width: 70px;" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Telegram_Messenger.png/768px-Telegram_Messenger.png"></div>
                                                                    <div class="col d-flex d-lg-flex justify-content-center align-items-center justify-content-lg-center align-items-lg-center" style="margin-top: 8px;"><a class="btn btn-light" type="button" 
                                                                            href="https://telegram.me/botfather" style="text-shadow: 0px 0px 4px rgb(255,255,255);color: var(--bs-blue);">Telegram</a></div>
                                                                </div>
                                                            </div>
                                                            <div class="col-4 offset-0 d-lg-flex justify-content-lg-center">
                                                                <div class="row">
                                                                    <div class="col-12 d-flex d-lg-flex justify-content-center align-items-center justify-content-lg-center align-items-lg-center"><img style="width: 70px;height: 70px;padding: 3px;filter: contrast(100%) invert(0%) sepia(100%);" src="https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/accept-call.png"></div>
                                                                    <div class="col d-flex d-lg-flex justify-content-center align-items-center justify-content-lg-center align-items-lg-center" style="margin-top: 8px;"><a class="btn btn-light" type="button" 
                                                                            href="tel:${item.phone.phoneNumber}" style="text-shadow: 0px 0px 4px rgb(255,255,255);color: #725e26;">Телефон</a></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col">
                                                        <hr style="font-size: 22px;color: var(--bs-dark);box-shadow: 0px 0px 2px 0px;">
                                                    </div>
                                                    <div class="col-lg-12 d-flex justify-content-center align-items-center">
                                                        <p class="text-center d-flex">Поштаға өтініш тастау</p>
                                                    </div>
                                                    <div class="col-lg-12">
                                                        <div class="row">
                                                            <div class="col-xxl-12">
                                                                <div class="row">
                                                                    <div class="col-lg-4 col-xl-5 col-xxl-6 offset-xxl-0 d-lg-flex d-xl-flex d-xxl-flex justify-content-lg-end justify-content-xl-end justify-content-xxl-end align-items-xxl-center">
                                                                        <p class="d-xxl-flex align-items-xxl-center">Поштаңыз</p>
                                                                    </div>
                                                                    <div class="col-lg-8 col-xl-7 col-xxl-6 d-flex d-lg-flex d-xl-flex d-xxl-flex justify-content-center align-items-center justify-content-lg-center align-items-lg-center justify-content-xl-center align-items-xl-center justify-content-xxl-start align-items-xxl-center" id="${i}-from">
                                                                        <input class="d-lg-flex d-xxl-flex flex-fill justify-content-lg-center justify-content-xxl-center" id="${i}-email-from" type="email"></div>
                                                                </div>
                                                            </div>
                                                            <div class="col-xxl-12">
                                                                <div class="row">
                                                                    <div class="col-lg-4 col-xl-5 col-xxl-6 offset-xxl-0 d-lg-flex d-xl-flex d-xxl-flex justify-content-lg-end justify-content-xl-end justify-content-xxl-end align-items-xxl-center">
                                                                        <p class="d-xxl-flex align-items-xxl-center">Логин</p>
                                                                    </div>
                                                                    <div class="col-lg-8 col-xl-7 col-xxl-6 d-flex d-lg-flex d-xl-flex d-xxl-flex justify-content-center align-items-center justify-content-lg-center align-items-lg-center justify-content-xl-center align-items-xl-center justify-content-xxl-start align-items-xxl-center" id="${i}-username">
                                                                        <input class="d-lg-flex d-xxl-flex flex-fill justify-content-lg-center justify-content-xxl-center" id="${i}-email-login" type="text">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-xxl-12">
                                                                <div class="row">
                                                                    <div class="col-lg-4 col-xl-5 col-xxl-6 offset-xxl-0 d-lg-flex d-xl-flex d-xxl-flex justify-content-lg-end justify-content-xl-end justify-content-xxl-end align-items-xxl-center">
                                                                        <p class="d-xxl-flex align-items-xxl-center">Құпия сөз</p>
                                                                    </div>
                                                                    <div class="col-lg-8 col-xl-7 col-xxl-6 d-flex d-lg-flex d-xl-flex d-xxl-flex justify-content-center align-items-center justify-content-lg-center align-items-lg-center justify-content-xl-center align-items-xl-center justify-content-xxl-start align-items-xxl-center" id="${i}-password">
                                                                        <input class="d-lg-flex d-xxl-flex flex-fill justify-content-lg-center justify-content-xxl-center" id="${i}-email-password" type="password">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-xxl-12">
                                                                <div class="row">
                                                                    <div class="col-lg-4 col-xl-5 col-xxl-6 offset-xxl-0 d-flex d-sm-flex d-md-flex d-lg-flex d-xl-flex d-xxl-flex justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-end justify-content-xl-end justify-content-xxl-end align-items-xxl-center">
                                                                        <p class="text-end d-lg-flex d-xxl-flex justify-content-lg-end align-items-xxl-center">Өтінішіңіз қысқаша</p>
                                                                    </div>
                                                                    <div class="col-lg-8 col-xl-7 col-xxl-6 d-flex d-lg-flex d-xl-flex d-xxl-flex justify-content-center align-items-center justify-content-lg-center align-items-lg-center justify-content-xl-center align-items-xl-center justify-content-xxl-start align-items-xxl-center" id="${i}-subject">
                                                                        <input class="d-lg-flex d-xxl-flex flex-fill justify-content-lg-center justify-content-xxl-center" id="${i}-email-subject" type="text">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-xxl-12">
                                                                <div class="row">
                                                                    <div class="col d-xxl-flex justify-content-xxl-center align-items-xxl-center">
                                                                        <p class="d-xxl-flex align-items-xxl-center">Толығырақ сипаттаңыз</p>
                                                                    </div>
                                                                    <div class="col-xxl-12 offset-xxl-0 d-flex d-xxl-flex justify-content-center align-items-center justify-content-xxl-start align-items-xxl-center" id="${i}-textarea">
                                                                        <textarea class="d-flex flex-fill justify-content-center align-items-center" id="${i}-email-textarea"></textarea>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-xxl-12">
                                                                <div class="row">
                                                                    <div class="col-lg-6 col-xl-6 col-xxl-6 d-flex d-sm-flex d-md-flex d-lg-flex d-xl-flex d-xxl-flex justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-center justify-content-xl-center align-items-xl-center justify-content-xxl-center align-items-xxl-center" style="margin-top: 16px;" id="sending-btn">
                                                                        <button class="btn btn-primary" onclick="sending()" type="button">Қызметкерге хат жіберу</button></div>
                                                                    <div class="col-lg-6 col-xl-6 col-xxl-6 d-flex d-sm-flex d-md-flex d-lg-flex d-xl-flex d-xxl-flex justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-center justify-content-xl-center align-items-xl-center justify-content-xxl-center align-items-xxl-center" style="margin-top: 16px;">
                                                                        <a class="btn btn-primary" href="mail-to:${item.email}" type="button">Телефон арқылы жіберу</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-2 d-flex float-none d-sm-flex d-md-flex flex-grow-1 justify-content-center align-items-center justify-content-sm-center justify-content-md-center align-items-md-center visible">
                        <img src="assets/img/${setProfileGenderImage(item)}" style="width: 170px;"></div>
                </div>
            </div>
        </div>
            `
        );
        document.getElementById('cards-here').innerHTML += allcards;
    });
}

puttingStaffCard();

function sending() {
    document.getElementById('sending-btn').querySelector('button').onclick = 
        alert('Өтініш сәтті жіберілді!');
}