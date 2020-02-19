import React from 'react';
import {IShopTable} from "../../../f-3-common/c-5-table/t-1-table/t-2-bll/b-2-redux/tableInitialState";
import S8Name from "../t-1-ui/students/IosivKonstantinSergeevich/s-1-name/S8Name";
import S23Name from "../t-1-ui/students/TarasiukDmitrijValentinovich/s-1-name/S23Name";
import S19Name from "../t-1-ui/students/AkhmadMidaevRuslanovich/s-1-name/S19Name";
import S18Name from "../t-1-ui/students/VladislavBerezovsky/s-1-name/S18Name";
import S7Name from "../t-1-ui/students/GavrilenkoAntonAndreevich/s-1-name/S7Name";
import S13Name from "../t-1-ui/students/TolkachevIvanBorisovich/s-1-name/S13Name";
import S4Name from "../t-1-ui/students/VasilievArtiomAleksandrovich/s-1-name/S4Name";
import S14Name from "../t-1-ui/students/FedorinVadzimNikolaevich/s-1-name/S14Name";
import S21Name from "../t-1-ui/students/KochniovSergeyAlexandrovich/s-1-name/S21Name";
import S12Name from "../t-1-ui/students/SviderskyVladislavAndreevich/s-1-name/S12Name";
import S3Name from "../t-1-ui/students/BiriukovSavelyGeorgyIurievich/s-1-name/S3Name";
import S6Name from "../t-1-ui/students/VeselovaLenaDmitrievna/s-1-name/S6Name";
import S1Name from "../t-1-ui/students/ArapovEvgenyVladimirovich/s-1-name/S1Name";
import S9Name from "../t-1-ui/students/KartashovIliaAlexandrovich/s-1-name/S9Name";
import S5Name from "../t-1-ui/students/VasilievEvgenyVadimovich/s-1-name/S5Name";
import S22Name from "../t-1-ui/students/MartosArtiomVadimovich/s-1-name/S22Name";
import S2Name from "../t-1-ui/students/BelyavskayaAlexandraSergeevna/s-1-name/S2Name";
import S16Name from "../t-1-ui/students/IaravoyIvanVladimirovich/s-1-name/S16Name";
import S20Name from "../t-1-ui/students/AtabalovMurad/s-1-name/AnimatedName";
import S13Progress from "../t-1-ui/students/TolkachevIvanBorisovich/s-2-props/TolkachevProgress/S13Progress";
import S13Skills from "../t-1-ui/students/TolkachevIvanBorisovich/s-2-props/TolkachevSkills/S13Skills";
import S4Skills from "../t-1-ui/students/VasilievArtiomAleksandrovich/s-2-props/S4Skills";
import S20Skills from "../t-1-ui/students/AtabalovMurad/s-2-props/Skills/S20Skills";
import S20Day from "../t-1-ui/students/AtabalovMurad/s-2-props/SelectDay/S20Day";
import S4Days from "../t-1-ui/students/VasilievArtiomAleksandrovich/s-2-props/S4Days";
import S19Day from "../t-1-ui/students/AkhmadMidaevRuslanovich/s-2-props/S19Day";
import S19Skills from "../t-1-ui/students/AkhmadMidaevRuslanovich/s-2-props/S19Skills";
import S8Skills from "../t-1-ui/students/IosivKonstantinSergeevich/s-2-props/Skills/S8Skills";
import S3Skills from "../t-1-ui/students/BiriukovSavelyGeorgyIurievich/s-2-props/S3Skills";
import S23Days from "../t-1-ui/students/TarasiukDmitrijValentinovich/s-2-props/S23Days";
import S23Skills from "../t-1-ui/students/TarasiukDmitrijValentinovich/s-2-props/S23Skills";
import S3Day from "../t-1-ui/students/BiriukovSavelyGeorgyIurievich/s-2-props/S3Day";
import S1Day from "../t-1-ui/students/ArapovEvgenyVladimirovich/s-2-props/S1Day";
import S1SkillsComponent from "../t-1-ui/students/ArapovEvgenyVladimirovich/s-2-props/S1SkillsComponent";
import S2Day from "../t-1-ui/students/BelyavskayaAlexandraSergeevna/s-2-props/S2Day";
import S2Skills from "../t-1-ui/students/BelyavskayaAlexandraSergeevna/s-2-props/S2Skills";
import S7Day from "../t-1-ui/students/GavrilenkoAntonAndreevich/s-2-props/S7Day";
import S7Skills from "../t-1-ui/students/GavrilenkoAntonAndreevich/s-2-props/S7Skills";
import S14Skills from "../t-1-ui/students/FedorinVadzimNikolaevich/s-2-props/skills/S14Skills";
import S14Day from "../t-1-ui/students/FedorinVadzimNikolaevich/s-2-props/taskforignat/S14Day";
import S9Progress from "../t-1-ui/students/KartashovIliaAlexandrovich/s-2-props/S9Progress";
import Hello from "../t-1-ui/s-3-state/Hello";
import S9Skills from "../t-1-ui/students/KartashovIliaAlexandrovich/s-2-props/S9Skills";
import S7Hello from "../t-1-ui/students/GavrilenkoAntonAndreevich/s-3-state/S7Hello";
import S14Hello from "../t-1-ui/students/FedorinVadzimNikolaevich/s-3-state/S14Hello";
import S20Hello from "../t-1-ui/students/AtabalovMurad/s-3-state/S20Hello";
import S13State from "../t-1-ui/students/TolkachevIvanBorisovich/s-3-state/S13State";
import S19State from "../t-1-ui/students/AkhmadMidaevRuslanovich/s-3-state/S19State";
import S4Hello from "../t-1-ui/students/VasilievArtiomAleksandrovich/s-3-state/S4Hello";
import S23State from "../t-1-ui/students/TarasiukDmitrijValentinovich/s-3-state/S23State";

export const studentsItem: IShopTable[] = [
    {
        id: '0',
        productName: 'student',
        price: 1000,

        name: "Ignat Zakalinsky",

        styledDay: (day: string) => (
            <div style={{marginLeft: 5, padding: 5, border: '1px solid black', width: 82}}>{day}</div>
        ),
        mappedSkills: (i: number) => (
            <div
                key={i}
                style={{
                    width: 500, border: '1px solid black', margin: 5, padding: 5, display: 'flex', flexWrap: 'wrap'
                }}
            >
                <div style={{width: 150, border: '1px solid black', marginRight: 5, paddingLeft: 5}}>
                    рационалист
                </div>
                <div style={{width: 150, border: '1px solid black', marginRight: 5, paddingLeft: 5}}>
                    коммунист
                </div>
                <div style={{width: 150, border: '1px solid black', marginRight: 5, paddingLeft: 5}}>
                    анимешник
                </div>
            </div>
        ),
        hello: i => <Hello key={i}/>,

    },
    {
        id: '1',
        productName: 'student',
        price: 100,

        name: 'Арапов Евгений Владимирович',
        nameComponent: (i: number) => <S1Name key={i}/>,
        styledDay: day => <S1Day day={day}/>,
        mappedSkills: i => <S1SkillsComponent key={i}/>,

    },
    {
        id: '2',
        productName: 'student',
        price: 100,

        name: 'Белявская Александра Сергеевна',
        nameComponent: (i: number) => <S2Name key={i}/>,
        styledDay: day => <S2Day day={day}/>,
        mappedSkills: i => <S2Skills key={i}/>,

    },
    {
        id: '3',
        productName: 'student',
        price: 100,

        name: 'Бирюков Савелий-Георгий Юрьевич',
        nameComponent: (i: number) => <S3Name key={i}/>,
        mappedSkills: i => <S3Skills key={i}/>,
        styledDay: day => <S3Day day={day}/>,

    },
    {
        id: '4',
        productName: 'student',
        price: 100,

        name: 'Васильев Артем Александрович',
        nameComponent: (i: number) => <S4Name key={i}/>,
        styledDay: day => <S4Days day={day}/>,
        mappedSkills: i => <S4Skills key={i}/>,
        hello: i => <S4Hello key={i}/>,

    },
    {
        id: '5',
        productName: 'student',
        price: 100,

        name: 'Васильев Евгений Вадимович',
        nameComponent: (i: number) => <S5Name key={i}/>,

    },
    {
        id: '6',
        productName: 'student',
        price: 100,

        name: 'Веселова Елена Дмитриевна',
        nameComponent: (i: number) => <S6Name key={i}/>,

    },
    {
        id: '7',
        productName: 'student',
        price: 100,

        name: 'Гавриленко Антон Андреевич',
        nameComponent: (i: number) => <S7Name key={i}/>,
        styledDay: day => <S7Day day={day}/>,
        mappedSkills: i => <S7Skills key={i}/>,
        hello: i => <S7Hello key={i}/>,

    },
    {
        id: '8',
        productName: 'student',
        price: 100,

        name: 'Иосифов Константин Сергеевич',
        nameComponent: (i: number) => <S8Name key={i}/>,
        mappedSkills: i => <S8Skills key={i}/>,

    },
    {
        id: '9',
        productName: 'student',
        price: 100,

        name: 'Карташов Илья Александрович',
        nameComponent: (i: number) => <S9Name key={i}/>,
        styledDay: day => <S9Progress day={day}/>,
        mappedSkills: i => <S9Skills key={i}/>,

    },
    {
        id: '10',
        productName: 'student',
        price: 100,

        name: 'Кисэлык Олександр Владимирович',

    },
    {
        id: '11',
        productName: 'student',
        price: 100,

        name: 'Леша Федорович',

    },
    {
        id: '12',
        productName: 'student',
        price: 100,

        name: 'Свидерский Владислав Андреевич',
        nameComponent: (i: number) => <S12Name key={i}/>,

    },
    {
        id: '13',
        productName: 'student',
        price: 100,

        name: 'Толкачёв Иван Борисович',
        nameComponent: (i: number) => <S13Name key={i}/>,
        styledDay: day => <S13Progress day={day}/>,
        mappedSkills: i => <S13Skills key={i}/>,
        hello: i => <S13State key={i}/>,

    },
    {
        id: '14',
        productName: 'student',
        price: 100,

        name: 'Федорин Вадим Николаевич',
        nameComponent: (i: number) => <S14Name key={i}/>,
        mappedSkills: i => <S14Skills key={i}/>,
        styledDay: day => <S14Day day={day}/>,
        hello: i => <S14Hello key={i}/>,

    },
    {
        id: '15',
        productName: 'student',
        price: 100,

        name: 'Худайбердые Овлякул Довлетгельдиевичь',

    },
    {
        id: '16',
        productName: 'student',
        price: 100,

        name: 'Яровой Иван Владимирович',
        nameComponent: (i: number) => <S16Name key={i}/>,

    },
    {
        id: '17',
        productName: 'student',
        price: 100,

        name: 'Васильев Николай Афанасьевич',

    },
    {
        id: '18',
        productName: 'student',
        price: 100,

        name: 'Березовский Влад',
        nameComponent: (i: number) => <S18Name key={i}/>,

    },
    {
        id: '19',
        productName: 'student',
        price: 100,

        name: 'Мидаев Ахмад Русланович',
        nameComponent: (i: number) => <S19Name key={i}/>,
        styledDay: day => <S19Day day={day}/>,
        mappedSkills: i => <S19Skills key={i}/>,
        hello: i => <S19State key={i}/>,

    },
    {
        id: '20',
        productName: 'student',
        price: 100,

        name: 'ATABALOV Murad',
        nameComponent: (i: number) => <S20Name key={i}/>,
        styledDay: (day: string) => <S20Day day={day}/>,
        mappedSkills: i => <S20Skills key={i}/>,
        hello: i => <S20Hello key={i}/>,

    },
    {
        id: '21',
        productName: 'student',
        price: 100,

        name: 'Кочнев Сергей Александрович',
        nameComponent: (i: number) => <S21Name key={i}/>,

    },
    {
        id: '22',
        productName: 'student',
        price: 100,

        name: 'Мартос Артём Вадимович',
        nameComponent: (i: number) => <S22Name key={i}/>,

    },
    {
        id: '23',
        productName: 'student',
        price: 100,

        name: 'Тарасюк Дмитрий Валентинович',
        nameComponent: (i: number) => <S23Name key={i}/>,
        styledDay: day => <S23Days day={day}/>,
        mappedSkills: i => <S23Skills key={i}/>,
        hello: i => <S23State key={i}/>,

    },

];

// Арапов Евгений Владимирович(он)
// Белявская Александра Сергеевна
// Бирюков Савелий-Георгий Юрьевич
// Васильев Артем Александрович(он)
// Васильев Евгений Вадимович(он)
// Веселова Елена Дмитриевна(он)
// Гавриленко Антон Андреевич
// Иосифов Константин Сергеевич(он)
// Карташов Илья Александрович(он)
// Кисэлык Олександр Владимирович(он)
// Леша Федорович
// Свидерский Владислав Андреевич
// Толкачёв Иван Борисович
// Федорин Вадим Николаевич
// Худайбердые Овлякул Довлетгельдиевичь(он)
// Яровой Иван Владимирович(он)
// Васильев Николай Афанасьевич(он)
// Березовский Влад (он)
// Мидаев Ахмад Русланович(он)
// ATABALOV Murad (он)
// Кочнев Сергей Александрович(24)
// Мартос Артём Вадимович(23)
// Тарасюк Дмитрий Валентинович(19)
