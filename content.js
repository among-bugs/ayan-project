let allcontent = {
    pages: {
        index: {
            kaz: 'Басты бет',
            rus: 'Главная страница',
            content: {
                header: {
                    heading: {
                        kaz: 'ЖЕЗҚАЗҒАН ПОЛИТЕХНИКАЛЫҚ КОЛЛЕДЖІ',
                        rus: 'ЖЕЗКАЗГАНСКИЙ ВЫСШИЙ ПОЛИТЕХНИЧЕСКИЙ КОЛЛЕДЖ'
                    },
                    paragraph: {
                        kaz: `
Қазақстан Республикасының Экономика, өнеркәсіп және құрылыс болашақ көшбасшыларын кәсіби даярлау. Білім берудің сапалық деңгейі. Кәсіби даму үшін практикалық-бағытталған білім мен дағдылар. Сұранысқа ие мамандықтар мен бағыттардың кең таңдауы. Заманауи әдістемелер. Колледждің оқытушылар құрамы-көп жылдық тәжірибесі бар сарапшылар. Оқыту таңдалған мамандық бойынша жүйелі тәжірибені қамтиды.
                        `,
                        rus: `                         
Профессиональная подготовка будущих лидеров экономики,
промышленности и строительства Республики Казахстан. Качественный
уровень образования. Практико-ориентированные знания и навыки для
профессионального развития. Широкий выбор востребованных специальностей и
направлений. Современные методики. Преподавательский состав колледжа -
это эксперты с многолетним опытом работы. Обучение включает регулярную
практику по выбранной специальности.
                        `
                    },
                    button: {
                        kaz: 'Толығырақ',
                        rus: 'Подробнее'
                    }
                }
            }
        },
        staffs: {
            kaz: 'Қызметкерлер',
            rus: 'Сотрудники',
            heading: {
                    kaz: 'Қызметкерлер',
                    rus: 'Сотрудники',
                },
                paragraph: {
                    kaz: 'Бұл бөлімде қызметкерлер тізімі бойынша ақпараттарды көре аласыздар. Сонымен қатар қызметкермен коммерциялық тақырыпта байланысқа шыға аласыздар.',
                    rus: 'В этом разделе вы можете увидеть список сотрудников. Также вы можете связаться с сотрудником по коммерческой теме.'
                },
                
                    allstaff: {
                        kaz: 'Жалпы қызметкерлер',
                        rus: 'Все сотрудники'
                    },
                    email: {
                        kaz: 'Поштасы бойынша',
                        rus: 'Почтой'
                    }
                
            
        },
        calculator: {
            kaz: 'Калькулятор',
            rus: 'Калькулятор'
        },
        gallery: {
            kaz: 'Фотогалерея',
            rus: 'Фотогалерея',
            content: {
                heading: {
                    kaz: 'Фотогалерея',
                    rus: 'Фотогалерея'
                },
                paragraph: {
                    kaz: 'Көрмелерді галереяларға орналастырудың ыңғайлылығы, көркемсурет мұражайларын немесе олардың бөліктерін архитектуралық ерекшеліктерге сілтеме жасамай, галерея деп атауға әкелді.',
                    rus: 'Удобство размещения экспозиций в галереях привело к тому, что галереями стали называть художественные музеи или их части вообще, без привязки к архитектурным особенностям. '
                }
            }
        },
        calling: {
            kaz: 'Бізбен байланыс',
            rus: 'Контакты',
            content: {
                heading: {
                    kaz: 'Бізбен байланыс',
                    rus: 'Контакты'
                },
                paragraph: {
                    kaz: 'Кері байланыс - кең мағынада кез-келген іс-әрекетке немесе оқиғаға кері байланыс, жауап беру, жауап беруді білдіреді.',
                    rus: 'Обра́тная связь — в широком смысле означает отзыв, отклик, ответную реакцию на какое-либо действие или событие.'
                }
            }
        }
    }
}

function ifSetKaz() {
    document.getElementById('main-content').innerHTML = allcontent.pages.index.kaz;
    document.getElementById('staffs-content').innerHTML = allcontent.pages.staffs.kaz;
    document.getElementById('calculator-content').innerHTML = allcontent.pages.calculator.kaz;
    document.getElementById('gallery-content').innerHTML = allcontent.pages.gallery.kaz;
    document.getElementById('calling-content').innerHTML = allcontent.pages.calling.kaz;
    
    if (document.getElementById('main-heading-content') != null) {
        document.getElementById('main-heading-content').innerHTML = allcontent.pages.index.content.header.heading.kaz;
    }
      
    if (document.getElementById('main-paragraph-content') != null) {
        document.getElementById('main-paragraph-content').textContent = allcontent.pages.index.content.header.paragraph.kaz;
    }
   
    if (document.getElementById('main-button-content') != null) {
        document.getElementById('main-button-content').innerHTML = allcontent.pages.index.content.header.button.kaz;
    }
    

    if (document.querySelector('.staff-heading-content') != null) {
        document.querySelector('.staff-heading-content').textContent = 
        allcontent.pages.staffs.heading.kaz;
    }

    if (document.querySelector('.staff-paragraph-content') != null) {
        document.querySelector('.staff-paragraph-content').textContent = 
        allcontent.pages.staffs.paragraph.kaz;  
    }

    if (document.getElementById('staff-nav-all-content') != null) {
        document.getElementById('staff-nav-all-content').textContent =
        allcontent.pages.staffs.allstaff.kaz;
    }

    if (document.getElementById('staff-nav-email-content') != null) {
        document.getElementById('staff-nav-email-content').textContent =
        allcontent.pages.staffs.email.kaz;
    }


    if (document.querySelector('.gallery-heading-content') != null) {
        document.querySelector('.gallery-heading-content').textContent =
            allcontent.pages.gallery.content.heading.kaz;
    }

    if (document.querySelector('.gallery-paragraph-content') != null) {
        document.querySelector('.gallery-paragraph-content').textContent =
            allcontent.pages.gallery.content.paragraph.kaz;
    }


    if (document.querySelector('.calling-heading-content') != null) {
        document.querySelector('.calling-heading-content').textContent =
            allcontent.pages.calling.content.heading.kaz;
    }

    if (document.querySelector('.calling-paragraph-content') != null) {
        document.querySelector('.calling-paragraph-content').textContent =
            allcontent.pages.calling.content.paragraph.kaz;
    }
}

function ifSetRus() {
    document.getElementById('main-content').innerHTML = allcontent.pages.index.rus;
    document.getElementById('staffs-content').innerHTML = allcontent.pages.staffs.rus;
    document.getElementById('calculator-content').innerHTML = allcontent.pages.calculator.rus;
    document.getElementById('gallery-content').innerHTML = allcontent.pages.gallery.rus;
    document.getElementById('calling-content').innerHTML = allcontent.pages.calling.rus;
    
    if (document.getElementById('main-heading-content') != null) {
        document.getElementById('main-heading-content').innerHTML = allcontent.pages.index.content.header.heading.rus;
    }
      
    if (document.getElementById('main-paragraph-content') != null) {
        document.getElementById('main-paragraph-content').textContent = allcontent.pages.index.content.header.paragraph.rus;
    }
   
    if (document.getElementById('main-button-content') != null) {
        document.getElementById('main-button-content').innerHTML = allcontent.pages.index.content.header.button.rus;
    }



    if (document.querySelector('.staff-heading-content') != null) {
        document.querySelector('.staff-heading-content').textContent = 
        allcontent.pages.staffs.heading.rus;
    }

    if (document.querySelector('.staff-paragraph-content') != null) {
        document.querySelector('.staff-paragraph-content').textContent = 
        allcontent.pages.staffs.paragraph.rus;  
    }

    if (document.getElementById('staff-nav-all-content') != null) {
        document.getElementById('staff-nav-all-content').textContent =
        allcontent.pages.staffs.allstaff.rus;
    }

    if (document.getElementById('staff-nav-email-content') != null) {
        document.getElementById('staff-nav-email-content').textContent =
        allcontent.pages.staffs.email.rus;
    }



    if (document.querySelector('.gallery-heading-content') != null) {
        document.querySelector('.gallery-heading-content').textContent =
            allcontent.pages.gallery.content.heading.rus;
    }

    if (document.querySelector('.gallery-paragraph-content') != null) {
        document.querySelector('.gallery-paragraph-content').textContent =
            allcontent.pages.gallery.content.paragraph.rus;
    }


    if (document.querySelector('.calling-heading-content') != null) {
        document.querySelector('.calling-heading-content').textContent =
            allcontent.pages.calling.content.heading.rus;
    }

    if (document.querySelector('.calling-paragraph-content') != null) {
        document.querySelector('.calling-paragraph-content').textContent =
            allcontent.pages.calling.content.paragraph.rus;
    }
}

ifSetKaz();