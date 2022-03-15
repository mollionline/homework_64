let parts = {
    head: {
        type: 'head',
        model: 'headlight',
        action: function () {
            console.log('Cветит на 100 метров')
        }
    },
    arms: {
        type: 'buildArmas',
        model: 'pincers',
        action: function () {
            console.log('Умеет цеплять и таскать вещи')
        }
    },
    legs: {
        type: 'legs',
        model: 'tracks',
        action: function () {
            console.log('Преодалевает сложные барьеры')
        }
    },
    body: {
        type: 'body',
        model: 'barrel',
        action: function () {
            console.log('Умеет катиться 10км/ч')
        }
    }
}

let rob_part_models = {
    headlight: function () {
            console.log('Cветит на 100 метров')
        },
    barrel: function () {
            console.log('Умеет катиться 10км/ч')
        },
    pincers: function () {
            console.log('Умеет цеплять и таскать вещи')
        },
    tracks: function () {
            console.log('Преодалевает сложные барьеры')
        }
}


let factory = {
    buildHead: function (som_head) {
        if (som_head === parts.head.model) {
            return parts.head}
        else if (som_head === null || som_head === 0 || som_head === '' || som_head === '0') {
            return null}
        else if (som_head in rob_part_models) {
            parts.head.model = som_head
            parts.head.action = rob_part_models[som_head];
            return parts.head}
        else {
            console.log(`Запчасть с моделью ${som_head} не может быть создана`)
            return null
        }
    },
    buildLeg: function (some_leg) {
        if (some_leg === parts.legs.model) {
            return parts.legs}
        else if (some_leg === null || some_leg === 0 || some_leg === '' || some_leg === '0') {
            return null}
        else if (some_leg in rob_part_models) {
            parts.legs.model = some_leg;
            parts.legs.action = rob_part_models[some_leg];
            return parts.legs}
        else {
            console.log(`Запчасть с моделью ${some_leg} не может быть создана`)
            return null
        }
    },
    buildArms: function (some_arm) {
        if (some_arm === parts.arms.model) {
            return parts.arms}
        else if (some_arm === null || some_arm === 0 || some_arm === '' || some_arm === '0') {
            return null}
        else if (some_arm in rob_part_models) {
            parts.arms.model = some_arm;
            parts.arms.action = rob_part_models[some_arm];
            return parts.arms}
        else {
            console.log(`Запчасть с моделью ${some_arm} не может быть создана`)
            return null
        }
    },
    buildBody: function (some_body) {
        if (some_body === parts.body.model) {
            return parts.body}
        else if (some_body === null || some_body === 0 || some_body === '' || some_body === '0') {
            return null}
        else if (some_body in rob_part_models) {
            parts.body.model = some_body;
            parts.body.action = rob_part_models[some_body];
            return parts.body}
        else {
            console.log(`Запчасть с моделью ${some_body} не может быть создана`)
            return null
        }
    },
    build: function (building_p) {
        let answer = {}
        if (building_p.head !== null && this.buildHead(building_p.head) !== null) {
            answer.head = this.buildHead(building_p.head);
            answer[building_p.head]=answer.head.action;
        }
        if (building_p.arms !== null && this.buildArms(building_p.arms) !== null) {
            answer.arms = this.buildArms(building_p.arms);
            answer[building_p.arms]=answer.arms.action;
        }
        if (building_p.legs !== null && this.buildLeg(building_p.legs) !== null) {
            answer.legs = this.buildLeg(building_p.legs);
            answer[building_p.legs]=answer.legs.action;
        }
        if (building_p.body !== null && this.buildBody(building_p.body) !== null) {
            answer.body = this.buildBody(building_p.body);
            answer[building_p.body]=answer.body.action
        }
        return answer
    }
}

//Контрольный пример №1

// let part = factory.buildHead('headlight')
// console.log(part === null)
// console.log(part.type)
// console.log(part.model)
// console.log(part.action())

//Контрольный пример №2

// let part = factory.buildHead('Unknown type')
// console.log(part === null)

//Контрольный пример №3

// let part = factory.buildHead();
// console.log(part===null)

// Контрольный пример №4

// let brokenRobot = factory.build(
//     {head: 'barrel',
//     body: 'unknown',
//     arms: null}
// )
// console.log(brokenRobot)

// Контрольный пример №5

// let part = factory.buildLeg('headlight');
// console.log(part);
// part.action()

// Контрольный пример №6

// let emptyPart = factory.buildBody(null)
// console.log(emptyPart)


// Контрольный пример №7

// let brokenPart = factory.buildBody('qwerty')
// factory.buildArms('деталька')
// console.log(brokenPart)


// Контрольный пример №8

// let brokenRobot = factory.build({
//     head: "tracks",
//     body: "какая-то несуществующая модель",
//     arms: null
// });
// console.log(brokenRobot)
// brokenRobot.tracks()


// Контрольный пример №9

// let robot_parst = {
//     head: 'headlight',
//     arms: 'pincers',
//     legs: 'tracks',
//     body: 'barrel'
// }
//
//
// let robot = factory.build(robot_parst)
// console.log(robot);
// console.log(robot.head);
// robot.headlight();
// robot.tracks();

