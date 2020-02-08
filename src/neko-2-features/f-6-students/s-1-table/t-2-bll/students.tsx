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

export const studentsItem: IShopTable[] = [
    {
        id: '0',
        productName: 'student',
        price: 1000,

        name: "Ignat Zakalinsky"
    },
    {
        id: '1',
        productName: 'student',
        price: 100,

        name: 'Арапов Евгений Владимирович',
    },
    {
        id: '2',
        productName: 'student',
        price: 100,

        name: 'Белявская Александра Сергеевна',
    },
    {
        id: '3',
        productName: 'student',
        price: 100,

        name: 'Бирюков Савелий-Георгий Юрьевич',
        nameComponent: (i: number) => <S3Name key={i}/>
    },
    {
        id: '4',
        productName: 'student',
        price: 100,

        name: 'Васильев Артем Александрович',
        nameComponent: (i: number) => <S4Name key={i}/>
    },
    {
        id: '5',
        productName: 'student',
        price: 100,

        name: 'Васильев Евгений Вадимович',
    },
    {
        id: '6',
        productName: 'student',
        price: 100,

        name: 'Веселова Елена Дмитриевна',
    },
    {
        id: '7',
        productName: 'student',
        price: 100,

        name: 'Гавриленко Антон Андреевич',
        nameComponent: (i: number) => <S7Name key={i}/>
    },
    {
        id: '8',
        productName: 'student',
        price: 100,

        name: 'Иосифов Константин Сергеевич',
        nameComponent: (i: number) => <S8Name key={i}/>
    },
    {
        id: '9',
        productName: 'student',
        price: 100,

        name: 'Карташов Илья Александрович',
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
        nameComponent: (i: number) => <S12Name key={i}/>
    },
    {
        id: '13',
        productName: 'student',
        price: 100,

        name: 'Толкачёв Иван Борисович',
        nameComponent: (i: number) => <S13Name key={i}/>
    },
    {
        id: '14',
        productName: 'student',
        price: 100,

        name: 'Федорин Вадим Николаевич',
        nameComponent: (i: number) => <S14Name key={i}/>
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
        nameComponent: (i: number) => <S18Name key={i}/>
    },
    {
        id: '19',
        productName: 'student',
        price: 100,

        name: 'Мидаев Ахмад Русланович',
        nameComponent: (i: number) => <S19Name key={i}/>
    },
    {
        id: '20',
        productName: 'student',
        price: 100,

        name: 'ATABALOV Murad',
    },
    {
        id: '21',
        productName: 'student',
        price: 100,

        name: 'Кочнев Сергей Александрович',
        nameComponent: (i: number) => <S21Name key={i}/>
    },
    {
        id: '22',
        productName: 'student',
        price: 100,

        name: 'Мартос Артём Вадимович',
    },
    {
        id: '23',
        productName: 'student',
        price: 100,

        name: 'Тарасюк Дмитрий Валентинович',
        nameComponent: (i: number) => <S23Name key={i}/>
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
