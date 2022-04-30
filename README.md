## Лабораторная работа 64
Постройте фабрику роботов. Она производит запчасти 4 видов:
головы - head
туловища - body
ноги - legs
руки - arms

И собирает из них роботов. У каждого робота может быть по одной запчасти каждого вида. Каждая запчасть может быть одной из нескольких моделей, в зависимости от этого она может выполнять различные действия (выводить в консоль разные сообщения). Робот может выполнять все действия, которые могут его запчасти.

Фабрика должна быть объектом, у которого есть  как минимум 5 методов: по одному для производства каждого вида запчастей, и метод для сборки робота(можете добавить еще, если они  вам нужны). Метод для сборки робота должен принимать объект parts, в котором перечислены виды запчастей и их модели, которые должны быть установлены на робота. Пример использования:


let robot = factory.build({
    head: "headlight",  // голова - фонарь
    body: "barrel",     // туловище - бочка
    arms: "pincers",    // руки - клещи
    legs: "tracks"      // ноги - гусеницы
});

Каждая запчасть должна быть объектом, у которого есть свойства - вид и модель, и метод action() - действие, которое имитирует различные действия для разных запчастей (выводит в консоль разные сообщения в зависимости от переданной модели). Методы фабрики для сборки запчастей должны брать модель в качестве аргумента, и возвращать запчасть, если модель им известна, или null, если неизвестна:

let part = factory.buildHead("headlight");
part === null
> false
part.type
> "head"
part.model
> "headlight"
part.action();
> Светит на 100 метров!

Имейте в виду, что сообщение зависит непосредственно от переданной модели!! Если вы передали ни headlight, а к примеру pincers, то и сообщение должно выводиться с действием для клещей!

Если передаете функцию несуществующую модель:
part = factory.buildHead("Unknown type");
> Запчасть с моделью "Unknown type" не может быть создана
part === null
> true

Если ничего не передаете в  функцию(или null, 0, пустую строку) сообщение не выводится:
part = factory.buildHead(); (
part === null
> true




Робот должен быть объектом, у которого должны быть свойства head, body, legs, arms, в которых должны быть записаны соответствующие запчасти. У робота должны быть методы, называющиеся, как модели его запчастей, и выполняющие их действия action:

robot.head
> {type: "head", model: "headlight", action: ƒ}

robot.headlight()  // как action() головы робота
> Светит на 100 метров!

Если при сборке робота какая-то запчасть не указана, указана пустой (null) или указана неправильная модель, то робот остаётся без этой запчасти и её метода:

let brokenRobot = factory.build({
    head: "barrel",  // голова - бочка
    body: "unknown",    // туловище неизвестной модели
    arms: null          // руки пустые
                        // ноги не указаны
});

brokenRobot  // у робота есть только голова и метод от неё
> {head: {…}, barrel: ƒ}


Контрольные примеры:

let part = factory.buildLegs('headlight')
console.log(part)
part.action()

> 



let emptyPart = factory.buildBody(null)
console.log(emptyPart)
>


let brokenPart = factory.buildBody('qwerty')
factory.buildArms('деталька')
console.log(brokenPart)
>



let brokenRobot = factory.build({
    head: "tracks",
    body: "какая-то несуществующая модель",
    arms: null
});
console.log(brokenRobot)
brokenRobot.tracks()
> 




let robot = factory.build({
    head: "headlight",
    body: "barrel",
    arms: "pincers",
    legs: "tracks"
});
console.log(robot)
console.log(robot.head)
robot.headlight()
robot.tracks()

>

