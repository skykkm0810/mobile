export const TAGS : Record<string, string> = {
    MAINPAGE: '',
    PROGRAM: 'program',
    CALENDAR: 'calendar',
    ATTAND: 'attand/:date',
    MEDICINE: 'medicine',
    SENIORLIST: 'seniorlist',
    EMERGENCY: 'emergency',
    LOGIN: 'login',
    FEED: 'feed/:id',
    CONFIRM: 'confirm',
    FEEDOK: 'feedOk',
    ATTENDOK: 'attendOk',
    DIETARY:'dietary',
}

export interface Activity {
  id: number;
  name: string;
  inst: string;
  date: string;
}
export interface Senior {
  id: number;
  name: string;
  note: string;
  gcontact: string;
  file: string;
  present: [{
    id: number;
    date: Date;
    centerId: number;
    seniorId: number;
    accountId: number;
  }]
}
export const PROGRAM  = [
    {id:1, name:'댄스교실', date:'2021-02-23T13:00',class:'제 2교실',imgurl:'photo/stretch.jpg'},
    {id:2, name:'요리교실', date:'2021-02-24T16:00',class:'제 2교실',imgurl:'photo/playColor.png'},
    {id:3, name:'노래교실', date:'2021-02-25T11:00',class:'제 2교실',imgurl:'photo/stretch.jpg'},
    {id:4, name:'악기교실', date:'2021-02-25T15:00',class:'제 2교실',imgurl:'photo/playColor.png'},
    {id:5, name:'보컬교실', date:'2021-02-26T16:00',class:'제 1교실',imgurl:'photo/stretch.jpg'},
    {id:6, name:'문학교실', date:'2021-02-26T16:00',class:'제 1교실',imgurl:'photo/playColor.png'},
]


  // 어르신
  export const ATTENDANCE = [
    {id:1,name:'김순자',guard:'순아들',guardPN:'010-0000-0000',teacher:'정발산',img:'photo/user/user2.png',desc:'가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라',age:'74',date:'2021-02-23',inTime:'오전 8:50',outTime:'오후 6:00', center: "녹양주간보호센터",chk:'ok'},
    {id:2,name:'장순자',guard:'순아들',guardPN:'010-1111-0000',teacher:'산기슭',img:'photo/user/user2.png',desc:'가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라',age:'75',date:'2021-02-23',inTime:'',outTime:'', center: "녹양주간보호센터",chk:'none'},
    {id:3,name:'오순자',guard:'순아들',guardPN:'010-1233-0000',teacher:'슭곰발',img:'photo/user/user2.png',desc:'가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라',age:'76',date:'2021-02-24',inTime:'오전 8:50',outTime:'오후 6:00', center: "녹양주간보호센터",chk:'ok'},
    {id:4,name:'구순자',guard:'순아들',guardPN:'010-1231-0000',teacher:'발바닥',img:'photo/user/user2.png',desc:'가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라',age:'85',date:'2021-02-24',inTime:'오전 8:50',outTime:'오후 6:00', center: "녹양주간보호센터",chk:'ok'},
    {id:5,name:'김말자',guard:'순아들',guardPN:'010-0000-0000',teacher:'닥나무',img:'photo/user/user2.png',desc:'가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라',age:'82',date:'2021-02-25',inTime:'오전 8:50',outTime:'오후 6:00', center: "녹양주간보호센터",chk:'ok'},
    {id:6,name:'이순자',guard:'순아들',guardPN:'010-0000-0000',teacher:'무인도',img:'photo/user/user2.png',desc:'가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라',age:'69',date:'2021-02-22',inTime:'',outTime:'', center: "요셉주간보호센터",chk:'none'},
    {id:7,name:'박순자',guard:'순아들',guardPN:'010-0000-0000',teacher:'도시락',img:'photo/user/user2.png',desc:'가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라',age:'68',date:'2021-02-23',inTime:'오전 8:48',outTime:'오후 6:00', center: "요셉주간보호센터",chk:'ok'},
    {id:8,name:'최순자',guard:'순아들',guardPN:'010-0000-0000',teacher:'락락락',img:'photo/user/user2.png',desc:'가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라',age:'67',date:'2021-02-22',inTime:'',outTime:'', center: "요셉주간보호센터",chk:'none'},
    {id:9,name:'정순자',guard:'순아들',guardPN:'010-0000-0000',teacher:'벌칙중',img:'photo/user/user2.png',desc:'가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라',age:'81',date:'2021-02-22',inTime:'오전 8:35',outTime:'오후 6:00', center: "녹양주간보호센터",chk:'ok'},
  ]
  
  export const FEED = [
    {id:1,age:'74',date:'2021-02-26T11:00',img:'photo/user/user2.png',desc:'약 잘먹음',name:'김춘자',what:'혈압약',putter:'김모모' ,puterContact:'01012347895'},
    {id:2,age:'75',date:'2021-02-26T13:00',img:'photo/user/user2.png',desc:'약 잘 못먹음',name:'하춘화',what:'위장약',putter:'김모모' ,puterContact:'01012347895'},
    {id:3,age:'76',date:'2021-02-26T15:34',img:'photo/user/user2.png',desc:'약이 쓰다고 하심',name:'정구지',what:'혈당약',putter:'강모모',puterContact:'01012347895'},
    {id:4,age:'85',date:'2021-02-24T11:31',img:'photo/user/user2.png',desc:'약 먹으면 토하심',name:'정구지',what:'혈당약',putter:'이모모' ,puterContact:'01012347895'},
    {id:5,age:'82',date:'2021-02-24T13:00',img:'photo/user/user2.png',desc:'약 ',name:'하춘화',what:'심장약',putter:'김모모' ,puterContact:'01012347895'},
    {id:6,age:'69',date:'2021-02-25T11:31',img:'photo/user/user2.png',desc:'약 싫어',name:'김춘자',what:'기관지약',putter:'노모모',puterContact:'01012347895'},
    {id:7,age:'68',date:'2021-02-25T12:31',img:'photo/user/user2.png',desc:'약 안줘?',name:'김춘자',what:'감기약',putter:'박모모' ,puterContact:'01012347895'},
    {id:8,age:'67',date:'2021-02-25T13:31',img:'photo/user/user2.png',desc:'약 드시면 일시적으로 호전됨',name:'하춘화',what:'치매약',putter:'김모모' ,puterContact:'01012347895'},
    {id:9,age:'81',date:'2021-02-25T11:35',img:'photo/user/user2.png',desc:'약 먹을 때만 격분하심',name:'정구지',what:'간기능약',putter:'감모모',puterContact:'01012347895'},
  ]

  // 이용자
  export const USER =[
    {id:1, img:"../../../assets/photo/user/user2.png", name: '김경민',},
    {id:2, img:"../../../assets/photo/user/user1.png", name: '이경민',},
    {id:3, img:"../../../assets/photo/user/user2.png", name: '박경민',},
  ]
  // 식단 업로드
  export const Dietary = [
    {
      date:'2021-02-24',
      comment:'가나다라가나다라가나다라가나다라가나다라가나다라가나다라',
      meal:[
      {label:'점심' ,date:'2021-02-24T12:00',img:'../../../assets/photo/playColor.png'},
      {label:'간식' ,date:'2021-02-24T15:00',img:'../../../assets/photo/playColor.png'},
      {label:'저녁' ,date:'2021-02-24T18:00',img:'../../../assets/photo/playColor.png'},
    ]},
    {
      date:'2021-02-25',
      comment:'아자차카타파하아자차카타파하아자차카타파하아자차카타파하아자차카타파하',
      meal:[
      {label:'점심' ,date:'2021-02-25T12:00',img:'../../../assets/photo/playColor.png'},
      {label:'간식' ,date:'2021-02-25T15:00',img:'../../../assets/photo/playColor.png'},
    ]},
    {
      date:'2021-01-25',
      comment:'아자차카타파하아자차카타파하아자차카타파하아자차카타파하아자차카타파하',
      meal:[
      {label:'점심' ,date:'2021-02-25T12:00',img:'../../../assets/photo/playColor.png'},
      {label:'간식' ,date:'2021-02-25T15:00',img:'../../../assets/photo/playColor.png'},
    ]},
  ]