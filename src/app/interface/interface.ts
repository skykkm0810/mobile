export const TAGS : Record<string, string> = {
    MAINPAGE: '',
    PROGRAM: 'program',
} 

export interface Program {
    id:number;
    name:string;
    time:string;
    class:string;
    date:string;
    imgurl?:string;
}
export const PROGRAM : Program[] = [
    {id:1, name:'댄스교실', time:'오전 11:00',class:'제 2교실', date:'2021-01-07',imgurl:''},
    {id:2, name:'요리교실', time:'오후 02:00',class:'제 2교실', date:'2021-01-07',imgurl:''},
    {id:3, name:'노래교실', time:'오전 11:00',class:'제 2교실', date:'2021-01-06',imgurl:''},
    {id:4, name:'노래교실', time:'오후 02:00',class:'제 2교실', date:'2021-01-06',imgurl:''},
    {id:5, name:'보컬교실', time:'오전 11:00',class:'제 1교실', date:'2021-01-05',imgurl:''},
    {id:6, name:'문학교실', time:'오후 02:00',class:'제 1교실', date:'2021-01-05',imgurl:''},
]