const texts = require('./text')
const textfull = require('./textfull')
const textlight = require('./textlight')

module.exports = {
start:{
    full: {text:`${texts.fp}`,callback_data:'full'},
    light: {text:`${texts.lp}`,callback_data:'light'},
    back_start:{text:`${texts.back}`,callback_data:'back_start'}
},
//Полная программа
fp:{
    fppod :{text:`${texts.pod}`,callback_data:'fppod'},
    fpvclin :{text:`${texts.vclinic}`,callback_data:'fpvclinic'},
    //fpprepar :{text:`${texts.prepar}`,callback_data:'fpprepar'},
    fpprocedur :{text:`${texts.procedur}`,callback_data:'fpprocedur'},
    },
fp_b:{
    back_fp: {text:`${texts.back}`,callback_data:'full'},
},
fp_pod:{
    fsxema :{text:`${texts.sxem}`,callback_data:'fsxema'},
    fdieta :{text:`${texts.dieta}`,url:'https://docs.google.com/spreadsheets/d/104i0tnFild9R07irvBcKOfOoxpb4D5EoSe3EfnsK_LY/edit?gid=1492944754#gid=1492944754'},
    //fzp :{text:`${texts.zakaz}`,callback_data:'fzp'},
    flivevar :{text:`${texts.livevar}`,callback_data:'flivevar'},
    fpered :{text:`${texts.peredconsalt}`,url:'https://docs.google.com/document/d/1phMwYpsvFIShd8Tb7Bpm5bKS5YelAMEP2310kFMA4G4/edit?tab=t.0'},
    //fzav:{text:`${texts.zavvclinic}`,callback_data:'fzavvclinic'},
},
fp_pod_back:{
    back_fp_pod: {text:`${texts.back}`,callback_data:'fppod'},
},
fp_vclinic:{
    dogovor:{text:`${textfull.dogovor}`,callback_data:'dogovorfull'},
    day1 :{text:`${textfull.day1}`,callback_data:'day1'},
    day2 :{text:`${textfull.day2}`,callback_data:'day2'},
    day3 :{text:`${textfull.day3}`,callback_data:'day3'},
    day4 :{text:`${textfull.day4}`,callback_data:'day4'},
    day5 :{text:`${textfull.day5}`,callback_data:'day5'},
    day6 :{text:`${textfull.day6}`,callback_data:'day6'},
    day7 :{text:`${textfull.day7}`,callback_data:'day7'},
    day8 :{text:`${textfull.day8}`,callback_data:'day8'},
    day9 :{text:`${textfull.day9}`,callback_data:'day9'},
    day10 :{text:`${textfull.day10}`,callback_data:'day10'},
    day11 :{text:`${textfull.day11}`,callback_data:'day11'},
    day12 :{text:`${textfull.day12}`,callback_data:'day12'},
    fvkish:{text:`${texts.kish}`,callback_data:'fvkish'},
    fgrafik:{text:`${texts.grafik}`,callback_data:'fgrafik'},
    exit :{text:`${textfull.exit}`,callback_data:'exitfull'},
    ffitness:{text:`${texts.fitnesmenu}`,callback_data:'ffitness'},
    recomends :{text:`${textfull.recomends}`,callback_data:'recomendsfull'},
    dopuslugi :{text:`${texts.dopuslugi}`,callback_data:'dopuslugifull'},
    

},
fp_vclinic_back:{
    fp_vclinic_back :{text:`${textfull.back}`,callback_data:'fpvclinic'},
},
fp_prepar:{
     fprast1:{text:`${texts.rast1}`,callback_data:'fprast1'},
     fpallato:{text:`${texts.allato}`,callback_data:'fpallato'},
     fppsiliym:{text:`${texts.psiliym}`,callback_data:'fppsiliym'},
     fpbentanit:{text:`${texts.bentanit}`,callback_data:'fpbentanit'},
     fpyrosan:{text:`${texts.yrosan}`,callback_data:'fpyrosan'},
     fpgelchsbor:{text:`${texts.gelchsbor}`,callback_data:'fpgelchsbor'},
     fpkoraosin:{text:`${texts.koraosin}`,callback_data:'fpkoraosin'},
     back_fp: {text:`${texts.back}`,callback_data:'full'},

},
fp_prepar_back:{
    fp_prepar_back :{text:`${textfull.back}`,callback_data:'fpprepar'},
},
fp_proced:{
    fduod:{text:`${texts.duod}`,callback_data:'fduod'},
    fkish:{text:`${texts.kish}`,callback_data:'fkish'},
    factiv:{text:`${texts.activ}`,callback_data:'factiv'},
    fcrt:{text:`${texts.crt}`,callback_data:'fcrt'},
    fmassagves:{text:`${texts.massagves}`,callback_data:'fmassagves'},
    fpress:{text:`${texts.press}`,callback_data:'fpress'},
    ftubaz:{text:`${texts.tubaz}`,callback_data:'ftubaz'},
    back_fp: {text:`${texts.back}`,callback_data:'full'},
},
fp_proced_back:{
    fp_proced_back :{text:`${textlight.back}`,callback_data:'fpprocedur'},
},

//Короткая программа
lp:{
    lplppod :{text:`${texts.pod}`,callback_data:'lppod'},
    lpvclin :{text:`${texts.vclinic}`,callback_data:'lpvclinic'},
    //lpprepar :{text:`${texts.prepar}`,callback_data:'lpprepar'},
    lpprocedur :{text:`${texts.procedur}`,callback_data:'lpprocedur'},
},
lp_b:{
    back_lp: {text:`${texts.back}`,callback_data:'light'},
},
lp_pod:{
    lsxema :{text:`${texts.sxem}`,callback_data:'lsxema'},
    ldieta :{text:`${texts.dieta}`,url:'https://docs.google.com/spreadsheets/d/104i0tnFild9R07irvBcKOfOoxpb4D5EoSe3EfnsK_LY/edit?gid=1492944754#gid=1492944754'},
    lzp :{text:`${texts.zakaz}`,callback_data:'lzp'},
    llivevar :{text:`${texts.livevar}`,callback_data:'llivevar'},
    lpered :{text:`${texts.peredconsalt}`,url:'https://docs.google.com/document/d/1phMwYpsvFIShd8Tb7Bpm5bKS5YelAMEP2310kFMA4G4/edit?tab=t.0'},
    //lzavclinic:{text:`${texts.zavvclinic}`,callback_data:'lzavclinic'},
},
lp_pod_back:{
    back_lp_pod: {text:`${texts.back}`,callback_data:'lppod'},
},
lp_vclinic:{
    dogovor:{text:`${textlight.dogovor}`,callback_data:'dogovorlight'},
    day1 :{text:`${textlight.day1}`,callback_data:'lday1'},
    day2 :{text:`${textlight.day2}`,callback_data:'lday2'},
    day3 :{text:`${textlight.day3}`,callback_data:'lday3'},
    day4 :{text:`${textlight.day4}`,callback_data:'lday4'},
    day5 :{text:`${textlight.day5}`,callback_data:'lday5'},
    lvkish:{text:`${texts.kish}`,callback_data:'lvkish'},
    lgrafik:{text:`${texts.grafik}`,callback_data:'lgrafik'},
    exit :{text:`${textlight.exit}`,callback_data:'exitlight'},
    lfitness:{text:`${texts.fitnesmenu}`,callback_data:'lfitness'},
    recomends :{text:`${textlight.recomends}`,callback_data:'recomendslight'},

},
lp_vclinic_back:{
    lp_vclinic_back :{text:`${textlight.back}`,callback_data:'lpvclinic'},
},
lp_prepar:{
     lprast1:{text:`${texts.rast1}`,callback_data:'lprast1'},
     lpallato:{text:`${texts.allato}`,callback_data:'lpallato'},
     lppsiliym:{text:`${texts.psiliym}`,callback_data:'lppsiliym'},
     lpbentanit:{text:`${texts.bentanit}`,callback_data:'lpbentanit'},
     lpyrosan:{text:`${texts.yrosan}`,callback_data:'lpyrosan'},
     lpgelchsbor:{text:`${texts.gelchsbor}`,callback_data:'lpgelchsbor'},
     lpkoraosin:{text:`${texts.koraosin}`,callback_data:'lpkoraosin'},
     back_lp: {text:`${texts.back}`,callback_data:'light'},

},
lp_prepar_back:{
    lp_prepar_back :{text:`${textlight.back}`,callback_data:'lpprepar'},
},
lp_proced:{
    lduod:{text:`${texts.duod}`,callback_data:'lduod'},
    lkish:{text:`${texts.kish}`,callback_data:'lkish'},
    lactiv:{text:`${texts.activ}`,callback_data:'lactiv'},
    lcrt:{text:`${texts.crt}`,callback_data:'lcrt'},
    lmassagves:{text:`${texts.massagves}`,callback_data:'lmassagves'},
    lpress:{text:`${texts.press}`,callback_data:'lpress'},
    ltubaz:{text:`${texts.tubaz}`,callback_data:'ltubaz'},
    back_lp: {text:`${texts.back}`,callback_data:'light'},
},
lp_proced_back:{
    lp_proced_back :{text:`${textlight.back}`,callback_data:'lpprocedur'},
},


commands:{
    site: {text:`${texts.site}`,url:'https://cliniceco.ru/'},
    instagramm: {text:`${texts.instagramm}`,url:'https://www.instagram.com/eco.clinic/'},
    tg:{text:`${texts.tg}`,url:'https://t.me/ecoclinic'},
    online:{text:`${texts.online}`,url:'https://cliniceco.ru/online-zapis/'},
    progbot:{text:`${texts.progbot}`,url:'https://t.me/cliniceco_help_bot'},
},
}