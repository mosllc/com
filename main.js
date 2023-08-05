const AnimText = document.getElementById("FirstText");
const AnimText2 = document.getElementById("SecondText");
const ChangeLogo = document.getElementById("ChangingObj");
const backorund = document.getElementById("Back")
const InfoCard = document.getElementById("InfoAboutIcon");
var AllLeters = AnimText.innerHTML.split('');
var AllLeters2 = AnimText2.innerHTML.split('');

const AboutUs = document.getElementById("AboutUsButton");
const ScrollToEnd = document.getElementById("ToTheEnd");
const ScrollToEnd2 = document.getElementById("ToTheEnd2");

const ExpertsIcon = document.getElementById("ExpertiseIcon");
const CostIcon = document.getElementById("CostIcon");
const ScalabilityIcon = document.getElementById("ScalabilityIcon"); 
const EnhancedIcon = document.getElementById("EnhancedIcon"); 
const ImprovedIcon = document.getElementById("ImprovedIcon");

const WhyUsButton = document.getElementById("WhyUsButton");

const Ap0 = document.getElementById("Ap0");
const Ap1 = document.getElementById("Ap1");
const Ap2 = document.getElementById("Ap2");
const Ap3 = document.getElementById("Ap3");
const Ap4 = document.getElementById("Ap4");

const Menu = document.getElementById("MenuID");

const ServicesMenu = document.getElementById("ServicesMenu");

var indexOfCollect = 0;
var indexOfCollect2 = 0;
var offer = "";
var offer2 = "";

var AnimTextLength = AnimText.innerText.length; 
var AnimTextLength2 = AnimText2.innerText.length; 

var UpdateTime = 50;
var UpdateTime2 = 70;

var ScrolIndex = 0;

var UpdateBack = 0;

let body = document.querySelector('body');

let CurrentLanguage;

function CollectOffer(){
    setTimeout(function(){
        CollectOffer();
        if (offer.length < AnimTextLength)
        {
            offer += AllLeters[indexOfCollect]
            indexOfCollect++;
            AnimText.innerHTML = offer;
        }else{
            UpdateTime = 10000;
        }
    } , UpdateTime)
}
function CollectOffer2(){
    setTimeout(function(){
        CollectOffer2();
        if (offer2.length < AnimTextLength2)
        {
            offer2 += AllLeters2[indexOfCollect2]
            indexOfCollect2++;
            AnimText2.innerHTML = offer2;
        }else{
            UpdateTime2 = 10000;
        }
    } , UpdateTime2)
}
function Wait(){
    setTimeout(function(){
        ChangeLogo.src = "Logoi.png"
        ChangeLogo.className = "changed"
    } , 2000)
}
function NoneStaticBack(){
    setTimeout(function(){
        NoneStaticBack();
        backorund.style.background = `linear-gradient(${UpdateBack}deg, rgba(${2},0,36,1) 0%, rgba(32,32,154,1) 27%, rgba(0,212,255,1) 100%)`;
        UpdateBack += 0.8;
    } , 50)
}
function ScrollControll(){
    setTimeout(function(){
        ScrollControll();
    } , 100)
}
// window.addEventListener('scroll', function () {
//     const scrollPosition = document.documentElement.scrollTop;
//     console.log(scrollPosition);
//   });
// body.addEventListener('scroll', () => { 
//     let scrollTop = body.scrollHeight;
//     console.log(scrollTop);
// console.log(headerWrapper);

// if(scrollTop >= 100){
//     console.log("Done")
// }else{    
//     console.log("Ye")
// }
// });

var boolType;

addEventListener('scroll' , function(){
    console.log(this.window.scrollY);
})
if (this.window.screen.width > 1400){
    const GoToBack = document.getElementById("Gotomainpage").onclick= function(){
        window.scrollBy({
            top: -3000,
            behavior: "smooth"
        })
    };
    const ToAboutUs = document.getElementById("ToAboutUs").onclick = function(){
        window.scrollBy({
            top: -500,
            behavior: "smooth"
        })
    }
    const ToWhyWithUs = document.getElementById("ToWhyWithUs").onclick = function(){
        window.scrollBy({
            top: -1550,
            behavior: "smooth"
        })
    }
        ServicesMenu.onclick = function(){
        Menu.style.display = "flex"
    }
        
        Menu.onmouseleave = function(){
        Menu.style.display = "none";
    }

AboutUs.onclick = function(){
    window.scrollBy({
        top: 2200,
        behavior: "smooth"
    })
}
ScrollToEnd.onclick = function(){
    window.scrollBy({
        top: 3000,
        behavior: "smooth"
    })
}
ScrollToEnd2.onclick = function(){
    window.scrollBy({
        top: 3000,
        behavior: "smooth"
    })
}
WhyUsButton.onclick = function(){
    window.scrollBy({
        top: 1150,
        behavior: "smooth"
    })
}
}else if (window.screen.width < 1000){
    const GoToBack = document.getElementById("Gotomainpage").onclick= function(){
        window.scrollBy({
            top: -5000,
            behavior: "smooth"
        })
    };
    const ToAboutUs = document.getElementById("ToAboutUs").onclick = function(){
        window.scrollBy({
            top: -700,
            behavior: "smooth"
        })
    }
    const ToWhyWithUs = document.getElementById("ToWhyWithUs").onclick = function(){
        window.scrollBy({
            top: -2750,
            behavior: "smooth"
        })
    }
    AboutUs.onclick = function(){
        window.scrollBy({
            top: 3000,
            behavior: "smooth"
        })
    }
    ScrollToEnd.onclick = function(){
        window.scrollBy({
            top: 5000,
            behavior: "smooth"
        })
    }
    ScrollToEnd2.onclick = function(){
        window.scrollBy({
            top: 5000,
            behavior: "smooth"
        })
    }
    WhyUsButton.onclick = function(){
        window.scrollBy({
            top: 1150,
            behavior: "smooth"
        })
    }
}
ExpertsIcon.addEventListener('click' , function(){
    InfoCard.innerHTML = "Expertise and Experience: With years of experience serving clients across various industries, we have developed a deep understanding of diverse business requirements. Our team of experts possesses extensive knowledge and expertise in their respective fields, enabling us to provide top-notch outsourcing services tailored to your specific needs"
})
CostIcon.addEventListener('click' , function(){
    InfoCard.innerHTML = "Cost Savings: Outsourcing can significantly reduce operational costs for your business. By choosing us, you can save on hiring and training expenses, infrastructure, and other overhead costs associated with in-house operations. We offer cost-effective outsourcing solutions without compromising on quality, ensuring substantial savings for your organization.";
})
CollectOffer();
CollectOffer2();
Wait();
ScrollControll();

addEventListener('scroll' , function(){
    if (this.window.scrollY > 650  && this.window.screen.width > 1500){
        Ap1.style.animationName = "Togo1"
        Ap2.style.animationName = "Togo2"
        Ap3.style.animationName = "Togo3"
        Ap4.style.animationName = "Togo4"
        this.setTimeout(function(){
            if(window.screen.width > 1400){
                Ap0.style.width = "400px"
                Ap1.style.width = "500px"
                Ap2.style.width = "600px"
                Ap3.style.width = "700px"
                Ap4.style.width = "800px"
            }else if(window.screen.width < 1000){
                Ap0.style.width = "380px"
                Ap1.style.width = "380px"
                Ap2.style.width = "380px"
                Ap3.style.width = "380px"
                Ap4.style.width = "380px"
            }

        } , 1000)
    }
})

const Uz = document.getElementById("Uz");
const Ru = document.getElementById("Ru");
const Usa = document.getElementById("Usa");


const languageOpt = document.getElementById("languageOpt");
languageOpt.onclick = function(){
    languageOpt.style.height = "100px"
}
let countOfclick = 0;

Ru.onclick = function(){

    if (countOfclick == 1 && Ru.onclick){
        location.reload();
    }
    CurrentLanguage = "RU";
    if (countOfclick == 0){
    document.getElementById("languageOpt").replaceChild(document.getElementById("Ru") , document.getElementById("Usa"));
    countOfclick++;
    }
    AboutUs.innerHTML = "О нас";
    AboutUs.style.fontFamily = "Classic2";
    if (window.screen.width > 1400){
    AboutUs.style.fontSize = "27px";
    ScrollToEnd.style.fontSize = "24px";
    ScrollToEnd2.style.fontSize = "24px";
    }else{
    AboutUs.style.fontSize = "17px";
    ScrollToEnd.style.fontSize = "17px";
    ScrollToEnd2.style.fontSize = "17px";
    }
    ServicesMenu.innerHTML = "Сервисы"
    ServicesMenu.style.fontFamily = "Classic2"
    ScrollToEnd.innerHTML = "Контакты"
    ScrollToEnd2.innerHTML = "Локация"
    ScrollToEnd.style.fontFamily = "Classic2"
    ScrollToEnd2.style.fontFamily = "Classic2"

    WhyUsButton.innerHTML = "Почему с нами"
    WhyUsButton.style.fontFamily = "Classic2";
    WhyUsButton.style.fontSize = "24px";
    WhyUsButton.style.color = "White"
    document.getElementById("Call1").innerHTML = "Позвоните нам +998 99 999 99 99"
    if (window.screen.width > 1000){
        document.getElementById("Call1").style.fontSize = "20px"
    }else{
        document.getElementById("Call1").style.fontSize = "10px"
        document.getElementById("Call2").style.fontSize = "10px"
        document.getElementById("Call3").style.fontSize = "10px"
    }
    document.getElementById("Call1").style.fontFamily = "Classic2"
    document.getElementById("Call2").style.fontFamily = "Classic2"
    document.getElementById("Call3").innerHTML = "Наша электронная почта : mosllcinfo@gmail.com"
    document.getElementById("Call3").style.fontFamily = "Classic2"
    document.getElementById("WhyChooseUsText").innerHTML = "Почему выбирают нас"
    document.getElementById("WhyChooseUsText").style.fontFamily = "Classic2"
    document.getElementById("WhyChooseUsText").style.fontSize = "40px"

    document.getElementById("Expertise").innerHTML = "Эксперты и Опыт"
    document.getElementById("Expertise").style.fontFamily = "Classic2"
    document.getElementById("Expertise").style.fontSize = "20px"

    document.getElementById("Cost").innerHTML = "Экономия денег"
    document.getElementById("Cost").style.fontFamily = "Classic2"
    document.getElementById("Cost").style.fontSize = "20px"

    document.getElementById("Scalability").innerHTML = "Масштабируемость"
    document.getElementById("Scalability").style.fontFamily = "Classic2"
    document.getElementById("Scalability").style.fontSize = "20px"

    document.getElementById("Enhanced").innerHTML = "Эффективность"
    document.getElementById("Enhanced").style.fontFamily = "Classic2"


    document.getElementById("Improved").innerHTML = "Улучшение клиентского опыта"
    document.getElementById("Improved").style.fontFamily = "Classic2"
    document.getElementById("Improved").style.fontSize = "20px"

    Ap0.innerHTML = "Компетентность и опыт Благодаря многолетнему опыту работы с клиентами в различных отраслях промышленности мы достигли глубокого понимания разнообразных бизнес-требований. Наша команда экспертов обладает обширными знаниями и опытом в соответствующих областях"
    Ap0.style.fontFamily = "Classic2";
    Ap0.style.fontSize = "14px"

    Ap1.innerHTML = "Экономия затрат: аутсорсинг может значительно снизить операционные расходы вашего бизнеса. Выбирая нас, вы можете сэкономить на найме и обучении, инфраструктуре и других накладных расходах, связанных с внутренними операциями. Мы предлагаем экономичные аутсорсинговые решения без ущерба для качества, обеспечивая существенную экономию для вашей организации.";
    Ap1.style.fontFamily = "Classic2";
    Ap1.style.fontSize = "12px"

    Ap2.innerHTML = "Масштабируемость и гибкость. По мере роста вашего бизнеса аутсорсинг у нас позволяет вам без особых усилий расширять или сокращать свои операции без необходимости значительных инвестиций или корректировок. Наши гибкие аутсорсинговые решения дают вам возможность быстро адаптироваться к изменяющимся требованиям рынка, гарантируя, что вы будете оставаться гибкими и конкурентоспособными."
    Ap2.style.fontFamily = "Classic2";
    Ap2.style.fontSize = "12px"
    
    Ap3.innerHTML = "Повышенная эффективность: наши услуги аутсорсинга предназначены для оптимизации ваших бизнес-процессов, повышения производительности и рационализации операций. Используя наши технологии, опыт и передовой опыт, мы помогаем вам повысить операционную эффективность, позволяя вам сосредоточиться на основных сферах деятельности и стратегических инициативах."
    Ap3.style.fontFamily = "Classic2";
    Ap3.style.fontSize = "12px"
    
    Ap4.innerHTML = "Улучшение качества обслуживания клиентов. Передавая нам определенные функции, вы можете повысить качество обслуживания клиентов. Наше внимание к качеству, надежности и удовлетворенности клиентов гарантирует, что ваши клиенты получат превосходное обслуживание, что приведет к повышению лояльности и положительной репутации бренда. В [название компании] мы стремимся предоставлять комплексные аутсорсинговые решения, которые являются надежными, экономически эффективными и соответствуют вашим бизнес-целям. Наши знания, опыт и стремление к совершенству делают нас идеальным партнером для организаций."
    Ap4.style.fontFamily = "Classic2";
    Ap4.style.fontSize = "12px"

    document.getElementById("QuickLinks").innerHTML = "Быстрые сылки"
    document.getElementById("QuickLinks").style.fontFamily = "Classic2"
    document.getElementById("QuickLinks").style.fontSize = "27px"

    document.getElementById("IDofFastliks1").innerHTML = "Главная страница"
    document.getElementById("IDofFastliks1").style.fontFamily = "Classic2"
    if(window.screen.width > 1400){
    document.getElementById("IDofFastliks1").style.fontSize = "20px"
    }else{
    document.getElementById("IDofFastliks1").style.fontSize = "13px"
    document.getElementById("IDofFastliks2").style.fontSize = "13px"
    document.getElementById("IDofFastliks3").style.fontSize = "13px"

    }
    document.getElementById("IDofFastliks1").style.color = "White"


    document.getElementById("IDofFastliks2").innerHTML = "Про нас"
    document.getElementById("IDofFastliks2").style.fontFamily = "Classic2"
    document.getElementById("IDofFastliks2").style.color = "White"


    document.getElementById("IDofFastliks3").innerText = "Почему выбирают нас"
    document.getElementById("IDofFastliks3").style.fontFamily = "Classic2"
    document.getElementById("IDofFastliks3").style.color = "White"

    document.getElementById("Zachem").innerHTML = "ЗАЧЕМ РУКОВОДИТЕЛИ ПЕРЕДАЮТ БИЗНЕС-ПРОЦЕССЫ НА АУТСОРСИНГ?";
    if (window.screen.width > 1400){
        document.getElementById("Zachem").style.fontSize = "50px";
    }else{
        document.getElementById("Zachem").style.fontSize = "20px";

    }
    document.getElementById("Zachem").style.margin = "20px;"
    document.getElementById("Zachem").style.fontFamily = "Classic2"

    document.getElementById("Reasons").style.display = "grid";
    document.getElementById("Reasons2").style.display = "none";

    document.getElementById("outRU1").style.display = "grid";
    document.getElementById("outRU2").style.display = "grid";
    document.getElementById("outENG1").style.display = "none";
    document.getElementById("outENG2").style.display = "none";

}
Usa.onclick = function(){
    // location.reload();
    document.getElementById("Zachem").innerHTML = "WHY DO MANAGERS OUTSOURCE BUSINESS PROCESSES?";
    document.getElementById("Reasons").style.display = "none";
    document.getElementById("Reasons2").style.display = "grid";
    document.getElementById("Zachem").style.fontSize = "50px";
    document.getElementById("Zachem").style.margin = "20px;"
    document.getElementById("Zachem").style.fontFamily = "Classic2"
}
// addEventListener('keydown' , function(){
//     this.alert(this.screen.width)
// })