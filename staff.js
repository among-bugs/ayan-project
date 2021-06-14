
function setPhoneDetails (number, whatsapp, telegram) {
    return {
        phoneNumber: number,
        whatsapp: whatsapp,
        telegram: telegram
    }
}

let status = {
    director: {
        kaz: 'Колледж директоры',
        rus: 'Директор колледжа'
    },
    advisor: {
        kaz: 'Колледж кеңесшісі',
        rus: 'Советник колледжа'
    },
    lowdirVR: {
        kaz: 'Директордың БП жөніндегі орынбасары',
        rus: 'Зам.директора по ВР'
    },
    lowdirUR: {
        kaz: 'Директордың СД жөніндегі орынбасары',
        rus: 'Зам.директора по УР'
    },
    lowdirIT: {
        kaz: 'Директордың ақпараттық технологиялар жөніндегі орынбасары',
        rus: 'Зам.директора по ИТ'
    },
    lowdirHR: {
        kaz: 'Директордың ХР бойынша орынбасары',
        rus: 'Зам директора по ХР'
    },
    lowdirUPR: {
        kaz: 'UPR бойынша директордың орынбасары',
        rus: 'Зам.директора по УПР'
    },
    accountant: {
        kaz: 'Есепші',
        rus: 'Бухгалтер'
    },
    methodist: {
        kaz: 'Колледж әдіскері',
        rus: 'Методист колледжа'
    },
    constructionDepartment: {
        kaz: 'Құрылыс бөлімінің бастығы',
        rus: 'Зав.строительного отделения'
    },
    department: {
        kaz: 'Бөлім бастығы',
        rus: 'Зав.отделением'
    },
    technologicalDepartment: {
        kaz: 'Технологиялық бөлімінің бастығы',
        rus: 'Зав.технологического отделения'
    },
    departmentofTransportandEconomics: {
        kaz: 'Көлік және экономика бөлімінің бастығы',
        rus: 'Зав.отделения транспорта и экономики'
    },
    HRdepartment: {
        kaz: 'Кадрлар бөлімінің бастығы',
        rus: 'Заведущая отделом кадоров'
    },
    Humanresourcesdepartmentinspector: {
        kaz: 'Кадрлар бөлімінің инспекторы', 
        rus: 'Инспектор  отдела кадоров'
    },
    library: {
        kaz: 'Кітапханашы',
        rus: 'Библиотекарь'
    },
    NVP: {
        kaz: 'NVP жетекшісі',
        rus: 'Руковод.НВП'
    },
    teacher: {
        kaz: 'Мұғалім',
        rus: 'Преподаватель'
    },
    cleaninglady: {
        kaz: 'Тазалықшы ханым',
        rus: 'Уборщица'
    },
    electronic: {
        kaz: 'Электрик',
        rus: 'Электрик'
    },
    laboratoryassistant: {
        kaz: 'Лаборант',
        rus: 'Лаборант'
    },
    watchman: {
        kaz: 'Күзетші',
        rus: 'Сторож'
    },
    doorman: {
        kaz: 'Есікші',
        rus: 'Вахтер'
    },
    Computerlaboratoryassistant: {
        kaz: 'Компьютерлік зертханашы',
        rus: 'Лаборант компьютерного кабинета'
    },
    Buildingmaintenanceworker: {
        kaz: 'Өндірістік оқыту шебері',
        rus: 'Мастер производственного обучения'
    },
    cloakroomattendant: {
        kaz: 'Гардероб бөлмесінің кезекшісі',
        rus: 'Гардеробщица'
    },
    Commandant: {
        kaz: 'Комендант',
        rus: 'Комендант'
    },
    Technicianmethodcabinet: {
        kaz: 'Техник әдісі.',
        rus: 'Лаборант метод. кабинета'
    },
    studyingpartmanager: {
        kaz: 'Оқу бөлімінің менеджері',
        rus: 'Диспетчер учебной части'
    },
    archivirus: {
        kaz: 'Архивирус',
        rus: 'Архивирус'
    },
    Accountinglaboratoryassistant: {
        kaz: 'Бухгалтерлік лаборант', 
        rus: 'Лаборант бухгалтерии '
    },
    master: {
        kaz: 'Шебер',
        rus: 'Мастер'
    },
    psychologist: {
        kaz: 'Психолог',
        rus: 'Психолог'
    },
    storekeeper: {
        kaz: 'Қоймашы',
        rus: 'Кладовщик'
    },
    plumber: {
        kaz: 'Сантехник',
        rus: 'Сантехник'
    },
    driver: {
        kaz: 'Жүргізуші',
        rus: 'Водитель'
    },
    engineerProgrammer: {
        kaz: 'Инженер программист',
        rus: 'Инженер программист'
    },
    medic: {
        kaz: 'Медбике',
        rus: 'Медсестра'
    },
    publicprocurementmanager: {
        kaz: 'Мемлекеттік сатып алу жөніндегі менеджер',
        rus: 'Менеджер по государственым закупками'
    },

};

function setStatusContent(currStatus, language) {
    if (language == 'kaz') {
        return currStatus.kaz;
    }
    
    if (language == 'rus') {
        return currStatus.rus;
    }
}

let staff = [
    {
        fullname: 'Аман Бота Малікаждарқызы',
        firstname: 'Бота',
        lastname: 'Аман',
        patronymic: 'Малікаждарқызы',
        gender: 'female',
        status: setStatusContent(
            status.director, 
            'kaz'
            ),
        phone: setPhoneDetails(
            87026367110,
            true,
            false
        ),
        email: 'amanbota777@gmail.com',
        image: ''
    }
    
    ,

    {
        fullname: 'Цой Владимир Леонидович',
        firstname: 'Владимир',
        lastname: 'Цой',
        patronymic: 'Леонидович',
        gender: 'male',
        status: setStatusContent(
            status.advisor, 
            'kaz'
            ),
        phone: setPhoneDetails(
            87025966494,
            true,
            true
        ),
        email: 'tsoy151577@gmail.com',
        image: ''
    },
    {
        fullname: 'Сандыкбаева Гульсум Сериковна',
        firstname: 'Гульсум',
        lastname: 'Сандыкбаева',
        patronymic: 'Сериковна',
        gender: 'female',
        status: setStatusContent(
            status.lowdirVR, 
            'kaz'
            ),
        phone: setPhoneDetails(
            87754568547,
            true,
            true
        ),
        email: 'sandyqbaeva321@gmail.com',
        image: ''
    },
    {
        fullname: 'Сарсенбаева Сандугаш Бокановна',
        firstname: 'Сандугаш',
        lastname: 'Сарсенбаева',
        patronymic: 'Бокановна',
        gender: 'female',
        status: setStatusContent(
            status.lowdirUR, 
            'kaz'
            ),
        phone: setPhoneDetails(
            87017418596,
            true,
            true
        ),
        email: 'sandugashh89@gmail.com',
        image: ''
    },
    {
        fullname: 'Лучкина Наталья Владимировна',
        firstname: 'Наталья',
        lastname: 'Лучкина',
        patronymic: 'Владимировна',
        gender: 'female',
        status: setStatusContent(
            status.lowdirIT, 
            'kaz'
            ),
        phone: setPhoneDetails(
            87029876532,
            true,
            false
        ),
        email: 'luchkina_nataly@gmail.com',
        image: ''
    },
    {
        fullname: 'Быстров Вадим Анатольевич',
        firstname: 'Вадим',
        lastname: 'Быстров',
        patronymic: 'Анатольевич',
        gender: 'male',
        status: setStatusContent(
            status.lowdirHR, 
            'kaz'
            ),
        phone: setPhoneDetails(
            87788956341,
            true,
            true
        ),
        email: 'vadimmm7415@mail.ru',
        image: ''
    },
    {
        fullname: 'Есен Ардак Сейтжанович',
        firstname: 'Ардак',
        lastname: 'Есен',
        patronymic: 'Сейтжанович',
        gender: 'male',
        status: setStatusContent(
            status.lowdirUPR, 
            'kaz'
            ),
        phone: setPhoneDetails(
            87083257496,
            true,
            false
        ),
        email: 'esenardaq@gmail.com',
        image: ''
    },
    {
        fullname: 'Накипова Салтанат Далбаевна',
        firstname: 'Салтанат',
        lastname: 'Накипова',
        patronymic: 'Далбаевна',
        gender: 'female',
        status: setStatusContent(
            status.accountant,
            'kaz'
            ),
        phone: setPhoneDetails(
            87014568798,
            true,
            true
        ),
        email: 'saltanat222@gmail.com',
        image: ''
    },
    {
        fullname: 'Нурмаганбетова Мейрамкуль Кыздарбековна',
        firstname: 'Мейрамкуль',
        lastname: 'Нурмаганбетова',
        patronymic: 'Кыздарбековна',
        gender: 'female',
        status: setStatusContent(
            status.methodist, 
            'kaz'
            ),
        phone: setPhoneDetails(
            87089652356,
            true,
            true
        ),
        email: 'nurmaganbetovaq@gmail.com',
        image: ''
    },
    {
        fullname: 'Жакупова Куралай Бактыбаевна',
        firstname: 'Куралай',
        lastname: 'Жакупова',
        patronymic: 'Бактыбаевна',
        gender: 'female',
        status: setStatusContent(
            status.constructionDepartment, 
            'kaz'
            ),
        phone: setPhoneDetails(
            87071238754,
            true,
            false
        ),
        email: 'quralai@gmail.com',
        image: ''
    },
    {
        fullname: 'Жылқыбаева Сандуғаш Сабигазыевна',
        firstname: 'Сандуғаш',
        lastname: 'Жылқыбаева',
        patronymic: 'Сабигазыевна',
        gender: 'female',
        status: setStatusContent(
            status.department, 
            'kaz'
            ),
        phone: setPhoneDetails(
            87788526532,
            true,
            true
        ),
        email: 'sandugash85@mail.ru',
        image: ''
    },
    {
        fullname: 'Кеңесов Нұрсұлтан Нұртайұлы',
        firstname: 'Кеңесов',
        lastname: 'Нұрсұлтан',
        patronymic: 'Нұртайұлы',
        gender: 'male',
        status: setStatusContent(
            status.technologicalDepartment, 
            'kaz'
            ),
        phone: setPhoneDetails(
            87757845236,
            true,
            false
        ),
        email: 'nurikkenes@gmail.com',
        image: ''
    },
    {
        fullname: 'Әуелбекова Жұлдыз Мәнсүрқызы',
        firstname: 'Жұлдыз',
        lastname: 'Әуелбекова',
        patronymic: 'Мәнсүрқызы',
        gender: 'female',
        status: setStatusContent(
            status.departmentofTransportandEconomics, 
            'kaz'
            ),
        phone: setPhoneDetails(
            87789635241,
            true,
            true
        ),
        email: 'zhuldyz@gmail.com',
        image: ''
    },
    {
        fullname: 'Казанбаева Жанар Жархановна',
        firstname: 'Жанар',
        lastname: 'Казанбаева',
        patronymic: 'Жархановна',
        gender: 'female',
        status: setStatusContent(
            status.HRdepartment, 
            'kaz'
            ),
        phone: setPhoneDetails(
            87012354987,
            true,
            false
        ),
        email: 'zhannnar12@gmail.com',
        image: ''
    },
    {
        fullname: 'Күнтуған Ботакөз Мұхамедияқызы',
        firstname: 'Ботакөз',
        lastname: 'Күнтуған',
        patronymic: 'Мұхамедияқызы',
        gender: 'female',
        status: setStatusContent(
            status.Humanresourcesdepartmentinspector, 
            'kaz'
            ),
        phone: setPhoneDetails(
            87017342869,
            true,
            true
        ),
        email: 'botagoz@gmail.com',
        image: ''
    },
    {
        fullname: 'Сыздыкова Гулнар Сансызбаевна',
        firstname: 'Гулнар',
        lastname: 'Сыздыкова',
        patronymic: 'Сансызбаевна',
        gender: 'female',
        status: setStatusContent(
            status.library, 
            'kaz'
            ),
        phone: setPhoneDetails(
            87028956341,
            true,
            true
        ),
        email: 'gulnar_syzdyq@gmail.com',
        image: ''
    },
    {
        fullname: 'Альменов Даулет Саруарович',
        firstname: 'Даулет',
        lastname: 'Альменов',
        patronymic: 'Саруарович',
        gender: 'male',
        status: setStatusContent(
            status.NVP, 
            'kaz'
            ),
        phone: setPhoneDetails(
            87017386958,
            true,
            false
        ),
        email: 'dauletto@gmail.com',
        image: ''
    },
    {
        fullname: 'Алиманов Байғазы Темирланович',
        firstname: 'Байғазы',
        lastname: 'Алиманов',
        patronymic: 'Темирланович',
        gender: 'male',
        status: setStatusContent(
            status.teacher, 
            'kaz'
            ),
        phone: setPhoneDetails(
            87021945825,
            true,
            true
        ),
        email: 'alimanov@gmail.com',
        image: ''
    },
    {
        fullname: 'Айтимбетова Эльмира Айтпаевна',
        firstname: 'Эльмира',
        lastname: 'Айтимбетова',
        patronymic: 'Айтпаевна',
        gender: 'female',
        status: setStatusContent(
            status.cleaninglady, 
            'kaz'
            ),
        phone: setPhoneDetails(
            87071935845,
            true,
            true
        ),
        email: 'elmirasm@gmail.com',
        image: ''
    },
    {
        fullname: 'Айтжанова Айткуль Абдилбековна',
        firstname: 'Айткуль',
        lastname: 'Айтжанова',
        patronymic: 'Абдилбековна',
        gender: 'female',
        status: setStatusContent(
            status.teacher, 
            'kaz'
            ),
        phone: setPhoneDetails(
            87019327542,
            true,
            true
        ),
        email: 'aitzhanova@gmail.com',
        image: ''
    },
    {
        fullname: 'Акимова Венера Нурхановна',
        firstname: 'Венера',
        lastname: 'Акимова',
        patronymic: 'Нурхановна',
        gender: 'female',
        status: setStatusContent(
            status.cleaninglady, 
            'kaz'
            ),
        phone: setPhoneDetails(
            87027923614,
            true,
            true
        ),
        email: 'akimovaavenera@gmail.com',
        image: ''
    },
    {
        fullname: 'Алтунина Елена Петровна',
        firstname: 'Елена',
        lastname: 'Алтунина',
        patronymic: 'Петровна',
        gender: 'female',
        status: setStatusContent(
            status.cleaninglady, 
            'kaz'
            ),
        phone: setPhoneDetails(
            87017954826,
            true,
            true
        ),
        email: 'elena_pertrova@gmail.com',
        image: ''
    },
    {
        fullname: 'Артемьев Владимир Михайлович',
        firstname: 'Владимир',
        lastname: 'Артемьев',
        patronymic: 'Михайлович',
        gender: 'male',
        status: setStatusContent(
            status.electronic, 
            'kaz'
            ),
        phone: setPhoneDetails(
            87016932547,
            true,
            true
        ),
        email: 'vladimir@mail.ru',
        image: ''
    },
    {
        fullname: 'Аширбеков Ержан Култаевич',
        firstname: 'Ержан',
        lastname: 'Аширбеков',
        patronymic: 'Култаевич',
        gender: 'male',
        status: setStatusContent(
            status.teacher, 
            'kaz'
            ),
        phone: setPhoneDetails(
            87011534286,
            true,
            true
        ),
        email: 'erzhanmonkey@gmail.com',
        image: ''
    },
    {
        fullname: 'Арыстанбек Мольдир Байтемиркызы',
        firstname: 'Мольдир',
        lastname: 'Арыстанбек',
        patronymic: 'Байтемиркызы',
        gender: 'female',
        status: setStatusContent(
            status.laboratoryassistant, 
            'kaz'
            ),
        phone: setPhoneDetails(
            87014862514,
            true,
            true
        ),
        email: 'moldirka@gmail.com',
        image: ''
    },
    {
        fullname: 'Акшалова Рая Тыныштыкбаевна',
        firstname: 'Рая',
        lastname: 'Акшалова',
        patronymic: 'Тыныштыкбаевна',
        gender: 'female',
        status: setStatusContent(
            status.watchman, 
            'kaz'
            ),
        phone: setPhoneDetails(
            87019357812,
            true,
            true
        ),
        email: 'rayasmailka@gmail.com',
        image: ''
    },
    {
        fullname: 'Ахмеджанов Мәди Аманжолұлы',
        firstname: 'Мәди',
        lastname: 'Ахмеджанов',
        patronymic: 'Аманжолұлы',
        gender: 'male',
        status: setStatusContent(
            status.laboratoryassistant, 
            'kaz'
            ),
        phone: setPhoneDetails(
            87784627913,
            true,
            true
        ),
        email: 'madibadi@mail.ru',
        image: ''
    },
    {
        fullname: 'Әлкен Меруерт Маратқызы',
        firstname: 'Меруерт',
        lastname: 'Әлкен',
        patronymic: 'Маратқызы',
        gender: 'female',
        status: setStatusContent(
            status.watchman, 
            'kaz'
            ),
        phone: setPhoneDetails(
            87788346248,
            true,
            true
        ),
        email: 'meruertta@gmail.com',
        image: ''
    },
    {
        fullname: 'Байгорина Сайлаукул Шайменовна',
        firstname: 'Сайлаукул',
        lastname: 'Байгорина',
        patronymic: 'Шайменовна',
        gender: 'female',
        status: setStatusContent(
            status.watchman, 
            'kaz'
            ),
        phone: setPhoneDetails(
            87024627386,
            true,
            true
        ),
        email: 'sailaukul8787@gmail.com',
        image: ''
    },
    {
        fullname: 'Баймуратова Камшат Сакеновна ',
        firstname: 'Камшат',
        lastname: 'Баймуратова',
        patronymic: 'Сакеновна',
        gender: 'female',
        status: setStatusContent(
            status.cleaninglady, 
            'kaz'
            ),
        phone: setPhoneDetails(
            87753941800,
            true,
            true
        ),
        email: 'baimuratova_camshat@gmail.com',
        image: ''
    },
    {
        fullname: 'Баймуханова Гулшат Уразаевна',
        firstname: 'Гулшат',
        lastname: 'Баймуханова',
        patronymic: 'Уразаевна',
        gender: 'female',
        status: setStatusContent(
            status.teacher, 
            'kaz'
            ),
        phone: setPhoneDetails(
            87784679584,
            true,
            true
        ),
        email: 'gulshatto@gmail.com',
        image: ''
    },
    {
        fullname: 'Байгазиева Акнур Ернисовна',
        firstname: 'Акнур',
        lastname: 'Байгазиева',
        patronymic: 'Ернисовна',
        gender: 'female',
        status: setStatusContent(
            status.teacher, 
            'kaz'
            ),
        phone: setPhoneDetails(
            87758247100,
            true,
            true
        ),
        email: 'aknurka97@gmail.com',
        image: ''
    },
    {
        fullname: 'Балапанова Ақбота Жақсылыковна',
        firstname: 'Ақбота',
        lastname: 'Балапанова',
        patronymic: 'Жақсылыковна',
        gender: 'female',
        status: setStatusContent(
            status.teacher, 
            'kaz'
            ),
        phone: setPhoneDetails(
            87019652536,
            true,
            false
        ),
        email: 'aqboticrab123@gmail.com',
        image: ''
    },
    {
        fullname: 'Бухарбаева Асия Бакеновна',
        firstname: 'Асия',
        lastname: 'Бухарбаева',
        patronymic: 'Бакеновна',
        gender: 'female',
        status: setStatusContent(
            status.teacher, 
            'kaz'
            ),
        phone: setPhoneDetails(
            87014628945,
            true,
            true
        ),
        email: 'asiangirl@gmail.com',
        image: ''
    },
    {
        fullname: 'Бейсембаева Анна Георгиевна',
        firstname: 'Анна',
        lastname: 'Бейсембаева',
        patronymic: 'Георгиевна',
        gender: 'female',
        status: setStatusContent(
            status.watchman, 
            'kaz'
            ),
        phone: setPhoneDetails(
            87018645342,
            true,
            true
        ),
        email: 'ananasso@gmail.com',
        image: ''
    },
    {
        fullname: 'Бекежанова Эльмира Ерлановна',
        firstname: 'Эльмира',
        lastname: 'Бекежанова',
        patronymic: 'Ерлановна',
        gender: 'female',
        status: setStatusContent(
            status.Computerlaboratoryassistant, 
            'kaz'
            ),
        phone: setPhoneDetails(
            87016951728,
            true,
            true
        ),
        email: 'elmirochka@gmail.com',
        image: ''
    },
    {
        fullname: 'Бекмаганбетова Асем Жолдыбековна',
        firstname: 'Асем',
        lastname: 'Бекмаганбетова',
        patronymic: 'Жолдыбековна',
        gender: 'female',
        status: setStatusContent(
            status.teacher, 
            'kaz'
            ),
        phone: setPhoneDetails(
            87758651346,
            true,
            true
        ),
        email: 'asema88@gmail.com',
        image: ''
    },
    {
        fullname: 'Бердібаев Олжас Әбілұлы',
        firstname: 'Олжас',
        lastname: 'Бердібаев',
        patronymic: 'Әбілұлы',
        gender: 'male',
        status: setStatusContent(
            status.teacher, 
            'kaz'
            ),
        phone: setPhoneDetails(
            87025629865,
            true,
            true
        ),
        email: 'olzhikboy@mail.ru',
        image: ''
    },
    {
        fullname: 'Битенова Ардак Габидовна',
        firstname: 'Ардак',
        lastname: 'Битенова',
        patronymic: 'Габидовна',
        gender: 'male',
        status: setStatusContent(
            status.teacher, 
            'kaz'
            ), 
        phone: setPhoneDetails(
            87784628732,
            true,
            true
        ),
        email: 'reduck@gmail.com',
        image: ''
    },
    {
        fullname: 'Балмухан Мейірхан Әбілханұлы',
        firstname: 'Мейірхан',
        lastname: 'Балмухан',
        patronymic: 'Әбілханұлы',
        gender: 'male',
        status: setStatusContent(
            status.Buildingmaintenanceworker, 
            'kaz'
            ),
        phone: setPhoneDetails(
            877591734682,
            true,
            true
        ),
        email: 'polmixan@gmail.com',
        image: ''
    },
    {
        fullname: 'Грудей Вячеслав Александрович',
        firstname: 'Вячеслав',
        lastname: 'Грудей',
        patronymic: 'Александрович',
        gender: 'male',
        status: setStatusContent(
            status.cloakroomattendant, 
            'kaz'
            ),
        phone: setPhoneDetails(
            87045623547,
            true,
            true
        ),
        email: 'vechinasso@gmail.com',
        image: ''
    },
    {
        fullname: 'Досжанова Гулжанат Сырымбековна',
        firstname: 'Гулжанат',
        lastname: 'Досжанова',
        patronymic: 'Сырымбековна',
        gender: 'female',
        status: setStatusContent(
            status.teacher, 
            'kaz'
            ),
        phone: setPhoneDetails(
            87014562378,
            true,
            true
        ),
        email: 'gulzhanatyo@gmail.com',
        image: ''
    },
    {
        fullname: 'Дуйсенбекова Назгуль Бахытбековна',
        firstname: 'Назгуль',
        lastname: 'Дуйсенбекова',
        patronymic: 'Бахытбековна',
        gender: 'female',
        status: setStatusContent(
            status.teacher, 
            'kaz'
            ),
        phone: setPhoneDetails(
            87017325689,
            true,
            true
        ),
        email: 'nazgulletta@gmail.com',
        image: ''
    },
    {
        fullname: 'Дюсембаева Галя Каримтаевна',
        firstname: 'Галя',
        lastname: 'Дюсембаева',
        patronymic: 'Каримтаевна',
        gender: 'female',
        status: setStatusContent(
            status.laboratoryassistant, 
            'kaz'
            ),
        phone: setPhoneDetails(
            87017856325,
            true,
            true
        ),
        email: 'galyyq4554@gmail.com',
        image: ''
    },
    {
        fullname: 'Досова Гульмира Сабирбековна',
        firstname: 'Гульмира',
        lastname: 'Досова',
        patronymic: 'Сабирбековна',
        gender: 'female',
        status: setStatusContent(
            status.doorman, 
            'kaz'
            ),
        phone: setPhoneDetails(
            87017957946,
            true,
            true
        ),
        email: 'gulmirochka@gmail.com',
        image: ''
    },
    {
        fullname: 'Едилбаева Акбаян Муханбетжановна',
        firstname: 'Акбаян',
        lastname: 'Едилбаева',
        patronymic: 'Муханбетжановна',
        gender: 'female',
        status: setStatusContent(
            status.teacher, 
            'kaz'
            ),
        phone: setPhoneDetails(
            87074561223,
            true,
            true
        ),
        email: 'aqbayanka@gmail.com',
        image: ''
    },
    {
        fullname: 'Ермаганбетова Айсулу Макашевна',
        firstname: 'Айсулу',
        lastname: 'Ермаганбетова',
        patronymic: 'Макашевна',
        gender: 'female',
        status: setStatusContent(
            status.cleaninglady, 
            'kaz'
            ),
        phone: setPhoneDetails(
            87018529674,
            true,
            true
        ),
        email: 'aisuluuu@gmail.com',
        image: ''
    },
    {
        fullname: 'Салихова Марина Вячеславовна',
        firstname: 'Марина',
        lastname: 'Салихова',
        patronymic: 'Вячеславовна',
        gender: 'female',
        status: setStatusContent(
            status.cleaninglady, 
            'kaz'
            ),
        phone: setPhoneDetails(
            870272836824,
            true,
            true
        ),
        email: 'marinochka@gmail.com',
        image: ''
    },
    {
        fullname: 'Ержанова Бибигуль Бекеновна ',
        firstname: 'Бибигуль',
        lastname: 'Ержанова',
        patronymic: 'Бекеновна',
        gender: 'female',
        status: setStatusContent(
            status.cloakroomattendant, 
            'kaz'
            ),
        phone: setPhoneDetails(
            87017386482,
            true,
            false
        ),
        email: 'bibibigulka@gmail.com',
        image: ''
    },
    {
        fullname: 'Жумабаева Клара Бердикуловна',
        firstname: 'Клара',
        lastname: 'Жумабаева',
        patronymic: 'Бердикуловна',
        gender: 'female',
        status: setStatusContent(
            status.teacher, 
            'kaz'
            ),
        phone: setPhoneDetails(
            870273195824,
            true,
            true
        ),
        email: 'clarere456@gmail.com',
        image: ''
    },
    {
        fullname: 'Жакаева Бейсенкуль Султангалиевна',
        firstname: 'Бейсенкуль',
        lastname: 'Жакаева',
        patronymic: 'Султангалиевна',
        gender: 'female',
        status: setStatusContent(
            status.teacher, 
            'kaz'
            ),
        phone: setPhoneDetails(
            87024613854,
            true,
            false
        ),
        email: 'sultangalievna@gmail.com',
        image: ''
    },
    {
        fullname: 'Жаканова Гулбаршын Бахытжановна',
        firstname: 'Гулбаршын',
        lastname: 'Жаканова',
        patronymic: 'Бахытжановна',
        gender: 'female',
        status: setStatusContent(
            status.cleaninglady, 
            'kaz'
            ),
        phone: setPhoneDetails(
            87014682123,
            true,
            true
        ),
        email: 'gulbarshynka@gmail.com',
        image: ''
    },
    {
        fullname: 'Жакупова Куралай Олжатаевна',
        firstname: 'Куралай',
        lastname: 'Жакупова',
        patronymic: 'Олжатаевна',
        gender: 'female',
        status: setStatusContent(
            status.teacher, 
            'kaz'
            ),
        phone: setPhoneDetails(
            87027386485,
            true,
            true
        ),
        email: 'kuralai789@gmail.com',
        image: ''
    },
    {
        fullname: 'Жарылгапова Эльмира Баяндыевна',
        firstname: 'Эльмира',
        lastname: 'Жарылгапова',
        patronymic: 'Баяндыевна',
        gender: 'female',
        status: setStatusContent(
            status.teacher, 
            'kaz'
            ),
        phone: setPhoneDetails(
            87024567852,
            true,
            true
        ),
        email: 'elmirochka_takaya@gmail.com',
        image: ''
    },
    {
        fullname: 'Жолдыбаева Асылай Шахмановна',
        firstname: 'Асылай',
        lastname: 'Жолдыбаева',
        patronymic: 'Шахмановна',
        gender: 'female',
        status: setStatusContent(
            status.teacher, 
            'kaz'
            ),
        phone: setPhoneDetails(
            87078624523,
            true,
            true
        ),
        email: 'asylmoonly@gmail.com',
        image: ''
    },
    {
        fullname: 'Жумадуллаева Жанат Зиядиновна',
        firstname: 'Жанат',
        lastname: 'Жумадуллаева',
        patronymic: 'Зиядиновна',
        gender: 'female',
        status: setStatusContent(
            status.teacher, 
            'kaz'
            ),
        phone: setPhoneDetails(
            87024612356,
            true,
            true
        ),
        email: 'ziyadindon@gmail.com',
        image: ''
    },
    {
        fullname: 'Ешимбекова Лаззат Алияскаровна',
        firstname: 'Лаззат',
        lastname: 'Ешимбекова',
        patronymic: 'Алияскаровна',
        gender: 'female',
        status: setStatusContent(
            status.Commandant, 
            'kaz'
            ),
        phone: setPhoneDetails(
            87015623451,
            true,
            false
        ),
        email: 'lyazzatte@gmail.com',
        image: ''
    },
    {
        fullname: 'Ильясова Бакыт Ашубаевна',
        firstname: 'Бакыт',
        lastname: 'Ильясова',
        patronymic: 'Ашубаевна',
        gender: 'female',
        status: setStatusContent(
            status.doorman, 
            'kaz'
            ),
        phone: setPhoneDetails(
            87025624859,
            true,
            true
        ),
        email: 'bakyt_ashubaevna@gmail.com',
        image: ''
    },
    {
        fullname: 'Капкеева Жулдыз Султановна',
        firstname: 'Жулдыз',
        lastname: 'Капкеева',
        patronymic: 'Султановна',
        gender: 'female',
        status: setStatusContent(
            status.teacher, 
            'kaz'
            ),
        phone: setPhoneDetails(
            87015648945,
            true,
            false
        ),
        email: 'sultanovna@gmail.com',
        image: ''
    },
    {
        fullname: 'Кайпбекова Алмагул Балташевна',
        firstname: 'Алмагул',
        lastname: 'Кайпбекова',
        patronymic: 'Балташевна',
        gender: 'female',
        status: setStatusContent(
            status.watchman, 
            'kaz'
            ),
        phone: setPhoneDetails(
            87014562345,
            true,
            false
        ),
        email: 'almagul_baltash@mail.ru',
        image: ''
    },
    {
        fullname: 'Калмаганбетова Айсары Оспановна',
        firstname: 'Айсары',
        lastname: 'Калмаганбетова',
        patronymic: 'Оспановна',
        gender: 'female',
        status: setStatusContent(
            status.watchman, 
            'kaz'
            ),
        phone: setPhoneDetails(
            87024578956,
            true,
            true
        ),
        email: 'aisary_ospan@gmail.com',
        image: ''
    },
    {
        fullname: 'Калмуратова Кенже Алжановна',
        firstname: 'Кенже',
        lastname: 'Калмуратова',
        patronymic: 'Алжановна',
        gender: 'female',
        status: setStatusContent(
            status.teacher, 
            'kaz'
            ),
        phone: setPhoneDetails(
            87014562312,
            true,
            true
        ),
        email: 'kanzhe@gmail.com',
        image: ''
    },
    {
        fullname: 'Канафина Гульзинат Галибиаткызы',
        firstname: 'Гульзинат',
        lastname: 'Канафина',
        patronymic: 'Галибиаткызы',
        gender: 'female',
        status: setStatusContent(
            status.cleaninglady, 
            'kaz'
            ),
        phone: setPhoneDetails(
            87027895263,
            true,
            true
        ),
        email: 'canafy_gulka@gmail.com',
        image: ''
    },
    {
        fullname: 'Кантарбева Асел Абилхановна',
        firstname: 'Асел',
        lastname: 'Кантарбева',
        patronymic: 'Абилхановна',
        gender: 'female',
        status: setStatusContent(
            status.Technicianmethodcabinet, 
            'kaz'
            ),
        phone: setPhoneDetails(
            87024657898,
            true,
            false
        ),
        email: 'abilxanovna@gmail.com',
        image: ''
    },
    {
        fullname: 'Карымсакова Гульмира Аллабергеновна',
        firstname: 'Гульмира',
        lastname: 'Карымсакова',
        patronymic: 'Аллабергеновна',
        gender: 'female',
        status: setStatusContent(
            status.teacher, 
            'kaz'
            ),
        phone: setPhoneDetails(
            87024561256,
            true,
            false
        ),
        email: 'allabergenovna@gmail.com',
        image: ''
    },
    {
        fullname: 'Кунчаева Жанар Бакитовна',
        firstname: 'Жанар',
        lastname: 'Кунчаева',
        patronymic: 'Бакитовна',
        gender: 'female',
        status: setStatusContent(
            status.teacher, 
            'kaz'
            ),
        phone: setPhoneDetails(
            87018529636,
            true,
            false
        ),
        email: 'zhannarica@gmail.com',
        image: ''
    },
    {
        fullname: 'Кемалова Эльмира Сагимбековна ',
        firstname: 'Эльмира',
        lastname: 'Кемалова',
        patronymic: 'Сагимбековна',
        gender: 'camellia@gmail.com',
        status: setStatusContent(
            status.cleaninglady, 
            'kaz'
            ),
        phone: setPhoneDetails(
            87018529636,
            true,
            false
        ),
        email: 'elmiro_sagim@gmail.com',
        image: ''
    },
    {
        fullname: 'Кожахметов Дархан Куансейтович',
        firstname: 'Дархан',
        lastname: 'Кожахметов',
        patronymic: 'Куансейтович',
        gender: 'female',
        status: setStatusContent(
            status.teacher, 
            'kaz'
            ),
        phone: setPhoneDetails(
            87028524714,
            true,
            true
        ),
        email: 'darkhan@gmail.com',
        image: ''
    },
    {
        fullname: 'Кубкина Наталья Геннадьевна',
        firstname: 'Наталья',
        lastname: 'Кубкина',
        patronymic: 'Геннадьевна',
        gender: 'female',
        status: setStatusContent(
            status.cleaninglady, 
            'kaz'
            ),
        phone: setPhoneDetails(
            87015648945,
            true,
            true
        ),
        email: 'natalyia@gmail.com',
        image: ''
    },
    {
        fullname: 'Кулумбаева Таншолпан Абаевна',
        firstname: 'Таншолпан',
        lastname: 'Кулумбаева',
        patronymic: 'Абаевна',
        gender: 'female',
        status: setStatusContent(
            status.teacher, 
            'kaz'
            ),
        phone: setPhoneDetails(
            87017921835,
            true,
            false
        ),
        email: 'tansholpann@gmail.com',
        image: ''
    },
    {
        fullname: 'Куржикова Акалтын',
        firstname: 'Акалтын',
        lastname: 'Куржикова',
        patronymic: '',
        gender: 'female',
        status: setStatusContent(
            status.watchman, 
            'kaz'
            ),
        phone: setPhoneDetails(
            87027895645,
            true,
            false
        ),
        email: 'white_gold@gmail.com',
        image: ''
    },
    {
        fullname: 'Қорғанбекова Мөлдір Төлепбергенқызы',
        firstname: 'Мөлдір',
        lastname: 'Қорғанбекова',
        patronymic: 'Төлепбергенқызы',
        gender: 'female',
        status: setStatusContent(
            status.teacher, 
            'kaz'
            ),
        phone: setPhoneDetails(
            87014862586,
            true,
            true
        ),
        email: 'qorganbekova@gmail.com',
        image: ''
    },
    {
        fullname: 'Макажанова Манат',
        firstname: 'Манат',
        lastname: 'Макажанова',
        patronymic: '',
        gender: 'female',
        status: setStatusContent(
            status.doorman, 
            'kaz'
            ),
        phone: setPhoneDetails(
            87084628547,
            true,
            true
        ),
        email: 'manatka@gmail.com',
        image: ''
    },
    {
        fullname: 'Мукышева Алтынай Бекенқызы',
        firstname: 'Алтынай',
        lastname: 'Мукышева',
        patronymic: 'Бекенқызы',
        gender: 'female',
        status: setStatusContent(
            status.studyingpartmanager, 
            'kaz'
            ),
        phone: setPhoneDetails(
            87084568912,
            true,
            true
        ),
        email: 'bekenqyzy@gmail.con',
        image: ''
    },
    {
        fullname: 'Мұхашова Жанар Бейбітқызы',
        firstname: 'Жанар',
        lastname: 'Мұхашова',
        patronymic: 'Бейбітқызы',
        gender: 'female',
        status: setStatusContent(
            status.library, 
            'kaz'
            ),
        phone: setPhoneDetails(
            87014862153,
            true,
            false
        ),
        email: 'mukashova_zhanar@gmail.com',
        image: ''
    },
    {
        fullname: 'Мендибаева Айнур Абдижапаровна',
        firstname: 'Айнур',
        lastname: 'Мендибаева',
        patronymic: 'Абдижапаровна',
        gender: 'female',
        status: setStatusContent(
            status.Commandant, 
            'kaz'
            ),
        phone: setPhoneDetails(
            87018428596,
            true,
            false
        ),
        email: 'mendibaeva_ainur@gmail.com',
        image: ''
    },
    {
        fullname: 'Икаков Тулеу Дуйсенович',
        firstname: 'Тулеу',
        lastname: 'Икаков',
        patronymic: 'Дуйсенович',
        gender: 'male',
        status: setStatusContent(
            status.teacher, 
            'kaz'
            ),
        phone: setPhoneDetails(
            87021238945,
            true,
            true
        ),
        email: 'tuleu_isac@gmail.com',
        image: ''
    },
    {
        fullname: 'Нурмаганбетова Анар Бердихановна',
        firstname: 'Анар',
        lastname: 'Нурмаганбетова',
        patronymic: 'Бердихановна',
        gender: 'female',
        status: setStatusContent(
            status.teacher, 
            'kaz'
            ),
        phone: setPhoneDetails(
            87027416958,
            true,
            true
        ),
        email: 'nurmaganbetova_anar@gmail.com',
        image: ''
    },
    {
        fullname: 'Нұртуғанова Арайлым Битуғанқызы',
        firstname: 'Арайлым',
        lastname: 'Нұртуғанова',
        patronymic: 'Битуғанқызы',
        gender: 'female',
        status: setStatusContent(
            status.teacher, 
            'kaz'
            ),
        phone: setPhoneDetails(
            87019631245,
            true,
            false
        ),
        email: 'arailym@gmail.com',
        image: ''
    },
    {
        fullname: 'Нұрланқызы Жансая',
        firstname: 'Жансая',
        lastname: '',
        patronymic: 'Нұрланқызы',
        gender: 'female',
        status: setStatusContent(
            status.archivirus, 
            'kaz'
            ),
        phone: setPhoneDetails(
            87018527946,
            true,
            true
        ),
        email: 'zhansaya@gmail.com',
        image: ''
    },
    {
        fullname: 'Нуржанов Турсынгали Турсынбаевич',
        firstname: 'Турсынгали',
        lastname: 'Нуржанов',
        patronymic: 'Турсынбаевич',
        gender: 'male',
        status: setStatusContent(
            status.watchman, 
            'kaz'
            ),
        phone: setPhoneDetails(
            87024561278,
            true,
            true
        ),
        email: 'tursyngali@gmail.com',
        image: ''
    },
    {
        fullname: 'Омарова Гулбахыт Токтамысовна',
        firstname: 'Гулбахыт',
        lastname: 'Омарова',
        patronymic: 'Токтамысовна',
        gender: 'female',
        status: setStatusContent(
            status.Accountinglaboratoryassistant, 
            'kaz'
            ),
        phone: setPhoneDetails(
            87024561289,
            true,
            false
        ),
        email: 'gulbaqyt_omar@gmail.com',
        image: ''
    },
    {
        fullname: 'Оспанова Аяна Габидуллаевна',
        firstname: 'Аяна',
        lastname: 'Оспанова',
        patronymic: 'Габидуллаевна',
        gender: 'female',
        status: setStatusContent(
            status.teacher, 
            'kaz'
            ),
        phone: setPhoneDetails(
            87027892356,
            true,
            false
        ),
        email: 'ayana_nana@gmail.com',
        image: ''
    },
    {
        fullname: 'Өмірханқызы Жібек',
        firstname: 'Жібек',
        lastname: '',
        patronymic: 'Өмірханқызы',
        gender: 'female',
        status: setStatusContent(
            status.psychologist, 
            'kaz'
            ),
        phone: setPhoneDetails(
            87085892631,
            true,
            true
        ),
        email: 'zhibek_omirhan@gmail.com',
        image: ''
    },
    {
        fullname: 'Оразов Жанибек Утепбаевич',
        firstname: 'Жанибек',
        lastname: 'Оразов',
        patronymic: 'Утепбаевич',
        gender: 'male',
        status: setStatusContent(
            status.master, 
            'kaz'
            ),
        phone: setPhoneDetails(
            87028954613,
            true,
            true
        ),
        email: 'zhonibeco@gmail.com',
        image: ''
    },
    {
        fullname: 'Оразбек Гулдана Ержанқызы',
        firstname: 'Гулдана',
        lastname: 'Оразбек',
        patronymic: 'Ержанқызы',
        gender: 'female',
        status: setStatusContent(
            status.teacher, 
            'kaz'
            ),
        phone: setPhoneDetails(
            87022931948,
            true,
            true
        ),
        email: 'orazbek_guldana@gmail.com',
        image: ''
    },
    {
        fullname: 'Онгарова Нуржанар Нуртазаевна',
        firstname: 'Нуржанар',
        lastname: 'Онгарова',
        patronymic: 'Нуртазаевна',
        gender: 'female',
        status: setStatusContent(
            status.cloakroomattendant, 
            'kaz'
            ),
        phone: setPhoneDetails(
            87015627845,
            true,
            false
        ),
        email: 'nurzhanar_ongar@gmail.com',
        image: ''
    },
    {
        fullname: 'Падка Сергей Федорович',
        firstname: 'Сергей',
        lastname: 'Падка',
        patronymic: 'Федорович',
        gender: 'male',
        status: setStatusContent(
            status.plumber, 
            'kaz'
            ),
        phone: setPhoneDetails(
            87021952648,
            true,
            true
        ),
        email: 'sergei_fedor@gmail.com',
        image: ''
    },
    {
        fullname: 'Сағынбек Шарайна Әбубәкірқызы',
        firstname: 'Шарайна',
        lastname: 'Сағынбек',
        patronymic: 'Әбубәкірқызы',
        gender: 'female',
        status: setStatusContent(
            status.teacher, 
            'kaz'
            ),
        phone: setPhoneDetails(
            87024826159,
            true,
            true
        ),
        email: 'sharaina_sagynbek@gmail.com',
        image: ''
    },
    {
        fullname: 'Сарсенбина Асел Жумагалиевна',
        firstname: 'Асел',
        lastname: 'Сарсенбина',
        patronymic: 'Жумагалиевна',
        gender: 'female',
        status: setStatusContent(
            status.teacher, 
            'kaz'
            ),
        phone: setPhoneDetails(
            87021952637,
            true,
            true
        ),
        email: 'zhumagalievna88@gmail.com',
        image: ''
    },
    {
        fullname: 'Серік Жансая Талғатқызы',
        firstname: 'Жансая',
        lastname: 'Серік',
        patronymic: 'Талғатқызы',
        gender: 'female',
        status: setStatusContent(
            status.accountant, 
            'kaz'
            ),
        phone: setPhoneDetails(
            87087534286,
            true,
            true
        ),
        email: 'zhansaya_talgat@gmail.com',
        image: ''
    },
    {
        fullname: 'Сейтжанова Гулбану Орынбасарона',
        firstname: 'Гулбану',
        lastname: 'Сейтжанова',
        patronymic: 'Орынбасарона',
        gender: 'female',
        status: setStatusContent(
            status.psychologist, 
            'kaz'
            ),
        phone: setPhoneDetails(
            87753572486,
            true,
            false
        ),
        email: 'orynbasar_gulbanu@gmail.com',
        image: ''
    },
    {
        fullname: 'Сарқытбек Адемау Сарқытбекқызы',
        firstname: 'Адемау',
        lastname: 'Сарқытбек',
        patronymic: 'Сарқытбекқызы',
        gender: 'female',
        status: setStatusContent(
            status.studyingpartmanager, 
            'kaz'
            ),
        phone: setPhoneDetails(
            87018134589,
            true,
            false
        ),
        email: 'ademau_sarqyt@gmail.com',
        image: ''
    },
    {
        fullname: 'Свич Егор Александрович',
        firstname: 'Егор',
        lastname: 'Свич',
        patronymic: 'Александрович',
        gender: 'male',
        status: setStatusContent(
            status.Buildingmaintenanceworker, 
            'kaz'
            ),
        phone: setPhoneDetails(
            87021837295,
            true,
            true
        ),
        email: 'egorriga@gmail.com',
        image: ''
    },
    {
        fullname: 'Сулейменова Асем Бекболатовна',
        firstname: 'Асем',
        lastname: 'Сулейменова',
        patronymic: 'Бекболатовна',
        gender: 'female',
        status: setStatusContent(
            status.teacher, 
            'kaz'
            ),
        phone: setPhoneDetails(
            87018426759,
            true,
            true
        ),
        email: 'asema_bek@gmail.com',
        image: ''
    },
    {
        fullname: 'Тлеубаева Жамал Балгабаевна',
        firstname: 'Жамал',
        lastname: 'Тлеубаева',
        patronymic: 'Балгабаевна',
        gender: 'female',
        status: setStatusContent(
            status.teacher, 
            'kaz'
            ),
        phone: setPhoneDetails(
            87087534123,
            true,
            true
        ),
        email: 'zhamall_balta@gmail.com',
        image: ''
    },
    {
        fullname: 'Тлеубергенова Макпал Қайратқызы',
        firstname: 'Макпал',
        lastname: 'Тлеубергенова',
        patronymic: 'Қайратқызы',
        gender: 'female',
        status: setStatusContent(
            status.teacher, 
            'kaz'
            ),
        phone: setPhoneDetails(
            87753498263,
            true,
            true
        ),
        email: 'maqpal_1987@gmail.com',
        image: ''
    },
    {
        fullname: 'Тоймағанбетова Нұрайым Нұрмұханбетқызы',
        firstname: 'Нұрайым',
        lastname: 'Тоймағанбетова',
        patronymic: 'Нұрмұханбетқызы',
        gender: 'female',
        status: setStatusContent(
            status.Buildingmaintenanceworker, 
            'kaz'
            ),
        phone: setPhoneDetails(
            87787954613,
            true,
            false
        ),
        email: 'nurmuhanbetqyzy@gmail.com',
        image: ''
    },
    {
        fullname: 'Цой Константин Сергеевич',
        firstname: 'Константин',
        lastname: 'Цой',
        patronymic: 'Сергеевич',
        gender: 'male',
        status: setStatusContent(
            status.teacher, 
            'kaz'
            ),
        phone: setPhoneDetails(
            87754568945,
            true,
            true
        ),
        email: 'constantin@gmail.com',
        image: ''
    },
    {
        fullname: 'Чайбаева Галия Курманбаева',
        firstname: 'Галия',
        lastname: 'Чайбаева',
        patronymic: 'Курманбаева',
        gender: 'female',
        status: setStatusContent(
            status.watchman, 
            'kaz'
            ),
        phone: setPhoneDetails(
            87784895612,
            true,
            true
        ),
        email: 'galyiiyag@mail.ru',
        image: ''
    },
    {
        fullname: 'Әбдібеков Сайранбек Шахмаранұлы',
        firstname: 'Сайранбек',
        lastname: 'Әбдібеков',
        patronymic: 'Шахмаранұлы',
        gender: 'male',
        status: setStatusContent(
            status.driver, 
            'kaz'
            ),
        phone: setPhoneDetails(
            87027954268,
            true,
            true
        ),
        email: 'sairanbek_777@gmail.com',
        image: ''
    },
    {
        fullname: 'Тоқтарбай Гүлбаршын Қайырбекқызы',
        firstname: 'Гүлбаршын',
        lastname: 'Тоқтарбай',
        patronymic: 'Қайырбекқызы',
        gender: 'female',
        status: setStatusContent(
            status.laboratoryassistant, 
            'kaz'
            ),
        phone: setPhoneDetails(
            87025792463,
            true,
            true
        ),
        email: 'gulbarshynka@gmail.com',
        image: ''
    },
    {
        fullname: 'Тогузбаева Гулсара Каримгалиевна',
        firstname: 'Гулсара',
        lastname: 'Тогузбаева',
        patronymic: 'Каримгалиевна',
        gender: 'female',
        status: setStatusContent(
            status.medic, 
            'kaz'
            ),
        phone: setPhoneDetails(
            87019635241,
            true,
            false
        ),
        email: 'medical@gmail.com',
        image: ''
    },
    {
        fullname: 'Абдрахманова Сабира Қайратқызы',
        firstname: 'Сабира',
        lastname: 'Абдрахманова',
        patronymic: 'Қайратқызы',
        gender: 'female',
        status: setStatusContent(
            status.engineerProgrammer, 
            'kaz'
            ),
        phone: setPhoneDetails(
            87018524163,
            true,
            true
        ),
        email: 'sabin_dev@gmail.com',
        image: ''
    },
    {
        fullname: 'Қабденова Фариза Асылханқызы',
        firstname: 'Фариза',
        lastname: 'Қабденова',
        patronymic: 'Асылханқызы',
        gender: 'female',
        status: setStatusContent(
            status.teacher, 
            'kaz'
            ),
        phone: setPhoneDetails(
            87018942378,
            true,
            false
        ),
        email: 'fariza_asyl@gmail.com',
        image: ''
    },
    {
        fullname: 'Биржанова Орынбасар Коргашовна',
        firstname: 'Орынбасар',
        lastname: 'Биржанова',
        patronymic: 'Коргашовна',
        gender: 'female',
        status: setStatusContent(
            status.library, 
            'kaz'
            ),
        phone: setPhoneDetails(
            87017415296,
            true,
            true
        ),
        email: 'orynbasar_qorgash@gmail.com',
        image: ''
    },
    {
        fullname: 'Жолдыбаева Айнаш Разимовна',
        firstname: 'Айнаш',
        lastname: 'Жолдыбаева',
        patronymic: 'Разимовна',
        gender: 'female',
        status: setStatusContent(
            status.teacher, 
            'kaz'
            ),
        phone: setPhoneDetails(
            87027895612,
            true,
            false
        ),
        email: 'ainash_zholdybaeva@gmail.com',
        image: ''
    },
    {
        fullname: 'Битенова Сағыныш Хаметовна',
        firstname: 'Сағыныш',
        lastname: 'Битенова',
        patronymic: 'Хаметовна',
        gender: 'female',
        status: setStatusContent(
            status.storekeeper, 
            'kaz'
            ),
        phone: setPhoneDetails(
            87024562389,
            true,
            false
        ),
        email: 'sagynysh8956@gmail.com',
        image: ''
    },
    {
        fullname: 'Бигалиева Жанар Шабдановна',
        firstname: 'Жанар',
        lastname: 'Бигалиева',
        patronymic: 'Шабдановна',
        gender: 'female',
        status: setStatusContent(
            status.publicprocurementmanager, 
            'kaz'
            ),
        phone: setPhoneDetails(
            87024831289,
            true,
            true
        ),
        email: 'zhanarka@gmail.com',
        image: ''
    }
]




let whatsappUsers = [],
    telegramUsers = [];

function sortingToWhatsTelega(staff) {
    staff.forEach((item) => {
        if (item.phone.whatsapp == true) {
            whatsappUsers.push(item);
        }

        if (item.phone.telegram == true) {
            telegramUsers.push(item);
        }
    })
}

sortingToWhatsTelega(staff);