export const TAGS : Record<string, string> = {
    MAINPAGE: '',
    PROGRAM: 'program',
    CALENDAR: 'calendar',
    ATTAND: 'attand/:key',
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
    {id:1, name:'댄스교실', time:'오전 11:00',class:'제 2교실', date:'2021-01-19',imgurl:''},
    {id:2, name:'요리교실', time:'오후 02:00',class:'제 2교실', date:'2021-01-19',imgurl:''},
    {id:3, name:'노래교실', time:'오전 11:00',class:'제 2교실', date:'2021-01-20',imgurl:''},
    {id:4, name:'악기교실', time:'오후 02:00',class:'제 2교실', date:'2021-01-20',imgurl:''},
    {id:5, name:'보컬교실', time:'오전 11:00',class:'제 1교실', date:'2021-01-21',imgurl:''},
    {id:6, name:'문학교실', time:'오후 02:00',class:'제 1교실', date:'2021-01-21',imgurl:''},
]

export interface Attendance {
    id:number;
    date:string;
    attand:number;
    strange:number;
    center:string;
  }
  export const ATTENDANCE: Attendance[] = [
    {id:1,date:'2021-01-18',attand:40, strange:0, center: "녹양주간보호센터"},
    {id:2,date:'2021-01-17',attand:40, strange:0, center: "요셉주간보호센터"},
    {id:5,date:'2021-01-16',attand:40, strange:0, center: "녹양주간보호센터"},
  ]