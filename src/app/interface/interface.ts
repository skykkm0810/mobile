export const TAGS : Record<string, string> = {
    MAINPAGE: '',
    PROGRAM: 'program',
    CALENDAR: 'calendar',
    ATTAND: 'attand',
    MEDICINE: 'medicine',
    SENIORLIST: 'seniorlist',
    EMERGENCY: 'emergency',
    LOGIN: 'login',
    FEED: 'feed/:id',
    CONFIRM: 'confirm',
    FEEDOK: 'feedOk',
    ATTENDOK: 'attendOk',
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
    {id:1, name:'댄스교실', time:'오전 11:00',class:'제 2교실', date:'2021-01-19',imgurl:'photo/stretch.jpg'},
    {id:2, name:'요리교실', time:'오후 02:00',class:'제 2교실', date:'2021-01-19',imgurl:'photo/playColor.png'},
    {id:3, name:'노래교실', time:'오전 11:00',class:'제 2교실', date:'2021-01-20',imgurl:'photo/stretch.jpg'},
    {id:4, name:'악기교실', time:'오후 02:00',class:'제 2교실', date:'2021-01-20',imgurl:'photo/playColor.png'},
    {id:5, name:'보컬교실', time:'오전 11:00',class:'제 1교실', date:'2021-01-21',imgurl:'photo/stretch.jpg'},
    {id:6, name:'문학교실', time:'오후 02:00',class:'제 1교실', date:'2021-01-21',imgurl:'photo/playColor.png'},
]

export interface Attendance {
    id:number;
    name:string;
    date:string;
    inTime?:string;
    outTime?:string;
    chk:string;
    center:string;
    age:string;
  }
  export const ATTENDANCE: Attendance[] = [
    {id:1,name:'김순자',age:'74세',date:'2021-01-19',inTime:'오전 8:50',outTime:'오후 6:00', center: "녹양주간보호센터",chk:'ok'},
    {id:2,name:'장순자',age:'75세',date:'2021-01-19',inTime:'',outTime:'', center: "녹양주간보호센터",chk:'none'},
    {id:3,name:'오순자',age:'76세',date:'2021-01-19',inTime:'오전 8:50',outTime:'오후 6:00', center: "녹양주간보호센터",chk:'ok'},
    {id:4,name:'구순자',age:'85세',date:'2021-01-18',inTime:'오전 8:50',outTime:'오후 6:00', center: "녹양주간보호센터",chk:'ok'},
    {id:5,name:'김말자',age:'82세',date:'2021-01-18',inTime:'오전 8:50',outTime:'오후 6:00', center: "녹양주간보호센터",chk:'ok'},
    {id:6,name:'이순자',age:'69세',date:'2021-01-18',inTime:'',outTime:'', center: "요셉주간보호센터",chk:'none'},
    {id:7,name:'박순자',age:'68세',date:'2021-01-17',inTime:'오전 8:48',outTime:'오후 6:00', center: "요셉주간보호센터",chk:'ok'},
    {id:8,name:'최순자',age:'67세',date:'2021-01-17',inTime:'',outTime:'', center: "요셉주간보호센터",chk:'none'},
    {id:9,name:'정순자',age:'81세',date:'2021-01-17',inTime:'오전 8:35',outTime:'오후 6:00', center: "녹양주간보호센터",chk:'ok'},
  ]
  export interface feed {
    id:number;
    date:string;
    name:string;
    putter?:string;
    puterContact?:string;
    what:string;
    time?:string;
  }
  export const FEED: feed[] = [
    {id:1,date:'2021-01-20',time:'오전 11:00',name:'김춘자',what:'혈압약',putter:'김모모' ,puterContact:'010-1234-6524'},
    {id:2,date:'2021-01-20',time:'오후 01:00',name:'하춘화',what:'위장약',putter:'김모모' ,puterContact:'010-1234-6524'},
    {id:3,date:'2021-01-20',time:'',name:'정구지',what:'혈당약',putter:'',puterContact:''},
    {id:4,date:'2021-01-21',time:'오전 11:00',name:'정구지',what:'혈당약',putter:'이모모' ,puterContact:'010-1234-6524'},
    {id:5,date:'2021-01-21',time:'오전 11:00',name:'하춘화',what:'심장약',putter:'김모모' ,puterContact:'010-1234-6524'},
    {id:6,date:'2021-01-21',time:'',name:'김춘자',what:'기관지약',putter:'',puterContact:''},
    {id:7,date:'2021-01-22',time:'오후 01:30',name:'김춘자',what:'감기약',putter:'박모모' ,puterContact:'010-1234-6524'},
    {id:8,date:'2021-01-22',time:'오전 11:30',name:'하춘화',what:'치매약',putter:'김모모' ,puterContact:'010-1234-6524'},
    {id:9,date:'2021-01-22',time:'',name:'정구지',what:'간기능약',putter:'',puterContact:''},
  ]