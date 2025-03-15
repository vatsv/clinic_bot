const TelegramBot = require('node-telegram-bot-api');
const Evn = require('./.evn');
const texts = require('./text');
const textfull = require('./textfull');
const textlight = require('./textlight');
const keyboard = require('./button');
const helper = require('./helper');
const kb = require('./buttons-keybord');
const fs = require('fs');




const bot = new TelegramBot(Evn.TOKEN, {polling: true});

bot.setMyCommands([
  {command: '/start', description: 'На главную'},
  {command: '/site', description: 'Наш сайт'},
  {command: '/instagramm', description: 'Instagramm'},
  {command: '/tg', description: 'Телеграмм канал'},
  {command: '/online', description: 'Онлайн запись'},
  {command: '/progbot', description: 'Help бот'},
])

bot.on('callback_query', msg =>{
  const chatId = msg.message.chat.id
  console.log(msg.data)
  switch(msg.data) {
    //Полная программа
    case 'full':
      bot.sendMessage(chatId,  `${texts.fpstart}`,{parse_mode:'Markdown',
      reply_markup:JSON.stringify({
        inline_keyboard:keyboard.fp
      })
    })
      break
      case 'fppod':
        bot.sendMessage(chatId,  `${texts.fppodgotovka}`, {parse_mode:'Markdown',
          reply_markup:JSON.stringify({
            inline_keyboard:keyboard.fp_pod
          })
        })
         break
        case 'fpvclinic':
        bot.sendMessage(chatId,  `${texts.progd}`, {
          reply_markup:JSON.stringify({
            inline_keyboard:keyboard.fb_vclinic
          })
        })
        break
        case 'dogovorfull':
        bot.sendMessage(chatId,  `${textfull.dogovortext}`, {
          reply_markup:JSON.stringify({
            inline_keyboard:keyboard.fb_vclinic_back
          })
        })
         break   
        case 'day1':
        bot.sendMessage(chatId,  `${textfull.daytext1}`, {
          reply_markup:JSON.stringify({
            inline_keyboard:keyboard.fb_vclinic_back
          })
        })
         break  
        case 'day2':
        bot.sendMessage(chatId,  `${textfull.daytext2}`, {
          reply_markup:JSON.stringify({
            inline_keyboard:keyboard.fb_vclinic_back
          })
        })
         break 
        case 'day3':
        bot.sendMessage(chatId,  `${textfull.daytext3}`, {
          reply_markup:JSON.stringify({
            inline_keyboard:keyboard.fb_vclinic_back
          })
        })
         break 
        case 'day3':
        bot.sendMessage(chatId,  `${textfull.daytext3}`, {
          reply_markup:JSON.stringify({
            inline_keyboard:keyboard.fb_vclinic_back
          })
        })
         break 
        case 'day4':
        bot.sendMessage(chatId,  `${textfull.daytext4}`, {
          reply_markup:JSON.stringify({
            inline_keyboard:keyboard.fb_vclinic_back
          })
        })
         break 
        case 'day5':
        bot.sendMessage(chatId,  `${textfull.daytext5}`, {
          reply_markup:JSON.stringify({
            inline_keyboard:keyboard.fb_vclinic_back
          })
        })
         break 
        case 'day6':
        bot.sendMessage(chatId,  `${textfull.daytext6}`, {
          reply_markup:JSON.stringify({
            inline_keyboard:keyboard.fb_vclinic_back
          })
        })
         break 
        case 'day7':
        bot.sendMessage(chatId,  `${textfull.daytext7}`, {
          reply_markup:JSON.stringify({
            inline_keyboard:keyboard.fb_vclinic_back
          })
        })
         break 
        case 'day8':
        bot.sendMessage(chatId,  `${textfull.daytext8}`, {parse_mode:'Markdown',
          reply_markup:JSON.stringify({
            inline_keyboard:keyboard.fb_vclinic_back
          })
        })
         break 
        case 'day9':
        bot.sendMessage(chatId,  `${textfull.daytext9}`, {
          reply_markup:JSON.stringify({
            inline_keyboard:keyboard.fb_vclinic_back
          })
        })
         break 
        case 'day10':
        bot.sendMessage(chatId,  `${textfull.daytext10}`, {
          reply_markup:JSON.stringify({
            inline_keyboard:keyboard.fb_vclinic_back
          })
        })
         break 
        case 'day11':
        bot.sendMessage(chatId,  `${textfull.daytext11}`, {
          reply_markup:JSON.stringify({
            inline_keyboard:keyboard.fb_vclinic_back
          })
        })
         break 
        case 'day12':
        bot.sendMessage(chatId,  `${textfull.daytext12}`, {
          reply_markup:JSON.stringify({
            inline_keyboard:keyboard.fb_vclinic_back
          })
        })
         break 
         case 'fvkish':
          bot.sendMessage(chatId,  `${texts.kishtext}`, {
            reply_markup:JSON.stringify({
              inline_keyboard:keyboard.fb_vclinic_back
            })
          })
           break 
           case 'fgrafik':
            bot.sendMessage(chatId,  `${texts.grafiktext}`, {
              reply_markup:JSON.stringify({
                inline_keyboard:keyboard.fb_vclinic_back
              })
            })
             break 
        case 'exitfull':
        bot.sendMessage(chatId,  `${textfull.exittext}`, {
          reply_markup:JSON.stringify({
            inline_keyboard:keyboard.fb_vclinic_back
          })
        })
         break 
        case 'recomendsfull':
        bot.sendMessage(chatId,  `${textfull.recomendstext}`, {
          reply_markup:JSON.stringify({
            inline_keyboard:keyboard.fb_vclinic_back
          })
        })
         break 
         case 'ffitness':
          bot.sendMessage(chatId,  `${texts.fitnesmenutext}`, {
            reply_markup:JSON.stringify({
              inline_keyboard:keyboard.fb_vclinic_back
            })
          })
           break
           case 'dopuslugi':
            bot.sendMessage(chatId,  `${texts.dopuslugi}`, {
              reply_markup:JSON.stringify({
                inline_keyboard:keyboard.fb_vclinic_back
              })
            })
             break
         case 'fpprepar':
          bot.sendMessage(chatId,  `${texts.prepartext}`,{ parse_mode:'Markdown' ,
            reply_markup:JSON.stringify({
              inline_keyboard:keyboard.fp_prepar
            })
          })
           break  
           case 'fpprocedur':
            bot.sendMessage(chatId,  `${texts.procedurtext}`, {parse_mode:'Markdown',
              reply_markup:JSON.stringify({
                inline_keyboard:keyboard.fp_proced
              })
            })
             break
             case 'fduod':
              bot.sendMessage(chatId,  `${texts.duodtext}`, {parse_mode:'Markdown',
                reply_markup:JSON.stringify({
                  inline_keyboard:keyboard.fp_proced_back
                })
              })
               break
               case 'fkish':
                bot.sendMessage(chatId,  `${texts.kishtext}`, {parse_mode:'Markdown',
                  reply_markup:JSON.stringify({
                    inline_keyboard:keyboard.fp_proced_back
                  })
                })
                 break
                 case 'factiv':
                  bot.sendMessage(chatId,  `${texts.activtext}`, {parse_mode:'Markdown',
                    reply_markup:JSON.stringify({
                      inline_keyboard:keyboard.fp_proced_back
                    })
                  })
                   break
                   case 'fcrt':
                    bot.sendMessage(chatId,  `${texts.crttext}`, {parse_mode:'Markdown',
                      reply_markup:JSON.stringify({
                        inline_keyboard:keyboard.fp_proced_back
                      })
                    })
                     break
                     case 'fmassagves':
                      bot.sendMessage(chatId,  `${texts.massagvestext}`, {parse_mode:'Markdown',
                        reply_markup:JSON.stringify({
                          inline_keyboard:keyboard.fp_proced_back
                        })
                      })
                       break
                       case 'fpress':
                        bot.sendMessage(chatId,  `${texts.presstext}`, {parse_mode:'Markdown',
                          reply_markup:JSON.stringify({
                            inline_keyboard:keyboard.fp_proced_back
                          })
                        })
                         break
                         case 'ftubaz':
                          bot.sendMessage(chatId,  `${texts.tubaztext}`, {parse_mode:'Markdown',
                            reply_markup:JSON.stringify({
                              inline_keyboard:keyboard.fp_proced_back
                            })
                          })
                           break
    case 'fsxema':
      bot.sendMessage(chatId,  `${texts.fsxem}`, {parse_mode:'Markdown',
      reply_markup:JSON.stringify({
        inline_keyboard:keyboard.fp_pod_back
      })
    })
     break
    case 'fdieta':
      bot.sendMessage(chatId,  `${texts.fdieta}`, {parse_mode:'Markdown',
      reply_markup:JSON.stringify({
        inline_keyboard:keyboard.fp_pod_back
      })
    })
     break
    case 'fzp':
      bot.sendMessage(chatId,  `${texts.fzp}`, {parse_mode:'Markdown',
      reply_markup:JSON.stringify({
        inline_keyboard:keyboard.fp_pod_back
      })
    })
     break
    case 'flivevar':
      bot.sendMessage(chatId,  `${texts.var}`, {parse_mode:'Markdown',
      reply_markup:JSON.stringify({
        inline_keyboard:keyboard.fp_pod_back
      })
    })
     break
    case 'fpered':
      bot.sendMessage(chatId,  `${texts.fperedconsalt}`, {parse_mode:'Markdown',
      reply_markup:JSON.stringify({
        inline_keyboard:keyboard.fp_pod_back
      })
    })
     break  
     case 'fzavvclinic':
      bot.sendMessage(chatId,  `${texts.zavvclinictext}`, {parse_mode:'Markdown',
      reply_markup:JSON.stringify({
        inline_keyboard:keyboard.fp_pod_back
      })
    })
     break  
    case 'fprast1':
      bot.sendMessage(chatId,  `${texts.rast1text}`, {parse_mode:'Markdown',
      reply_markup:JSON.stringify({
        inline_keyboard:keyboard.fp_prepar_back
      })
    })
     break  
     case 'fpallato':
      bot.sendMessage(chatId,  `${texts.allatotext}`, {parse_mode:'Markdown',
      reply_markup:JSON.stringify({
        inline_keyboard:keyboard.fp_prepar_back
      })
    })
     break  
     case 'fppsiliym':
      bot.sendMessage(chatId,  `${texts.psiliymtext}`, {parse_mode:'Markdown',
      reply_markup:JSON.stringify({
        inline_keyboard:keyboard.fp_prepar_back
      })
    })
     break  
     case 'fpbentanit':
      bot.sendMessage(chatId,  `${texts.bentanittext}`, {parse_mode:'Markdown',
      reply_markup:JSON.stringify({
        inline_keyboard:keyboard.fp_prepar_back
      })
    })
     break  
     case 'fpyrosan':
      bot.sendMessage(chatId,  `${texts.yrosantext}`, {parse_mode:'Markdown',
      reply_markup:JSON.stringify({
        inline_keyboard:keyboard.fp_prepar_back
      })
    })
     break  
     case 'fpgelchsbor':
      bot.sendMessage(chatId,  `${texts.gelchtext}`, {parse_mode:'Markdown',
      reply_markup:JSON.stringify({
        inline_keyboard:keyboard.fp_prepar_back
      })
    })
     break  
     case 'fpkoraosin':
      bot.sendMessage(chatId,  `${texts.koratext}`, {parse_mode:'Markdown',
      reply_markup:JSON.stringify({
        inline_keyboard:keyboard.fp_prepar_back
      })
    })
     break   
    //Короткая программа
    case 'light':
      bot.sendMessage(chatId,  `${texts.lpdl}`, {parse_mode:'Markdown',
        reply_markup:JSON.stringify({
          inline_keyboard:keyboard.lp
        })
      })
      break
      case 'lppod':
        bot.sendMessage(chatId,  `${texts.fppodgotovka}`, {parse_mode:'Markdown',
          reply_markup:JSON.stringify({
            inline_keyboard:keyboard.lp_pod
          })
        })
         break
        case 'lpvclinic':
        bot.sendMessage(chatId,  `${texts.progd}`, {
          reply_markup:JSON.stringify({
            inline_keyboard:keyboard.lp_vclinic
          })
        })
        break
        case 'dogovorlight':
        bot.sendMessage(chatId,  `${textlight.dogovortext}`, {
          reply_markup:JSON.stringify({
            inline_keyboard:keyboard.lp_vclinic_back
          })
        })
         break   
        case 'lday1':
        bot.sendMessage(chatId,  `${textlight.daytext1}`, {
          reply_markup:JSON.stringify({
            inline_keyboard:keyboard.lp_vclinic_back
          })
        })
         break  
        case 'lday2':
        bot.sendMessage(chatId,  `${textlight.daytext2}`, {
          reply_markup:JSON.stringify({
            inline_keyboard:keyboard.lp_vclinic_back
          })
        })
         break 
        case 'lday3':
        bot.sendMessage(chatId,  `${textlight.daytext3}`, {
          reply_markup:JSON.stringify({
            inline_keyboard:keyboard.lp_vclinic_back
          })
        })
         break 
        case 'lday3':
        bot.sendMessage(chatId,  `${textlight.daytext3}`, {
          reply_markup:JSON.stringify({
            inline_keyboard:keyboard.lp_vclinic_back
          })
        })
         break 
        case 'lday4':
        bot.sendMessage(chatId,  `${textlight.daytext4}`, {
          reply_markup:JSON.stringify({
            inline_keyboard:keyboard.lp_vclinic_back
          })
        })
         break 
        case 'lday5':
        bot.sendMessage(chatId,  `${textlight.daytext5}`, {
          reply_markup:JSON.stringify({
            inline_keyboard:keyboard.lp_vclinic_back
          })
        })
         break
         case 'lvkish':
          bot.sendMessage(chatId,  `${texts.kishtext}`, {
            reply_markup:JSON.stringify({
              inline_keyboard:keyboard.lp_vclinic_back
            })
          })
           break 
           case 'lgrafik':
            bot.sendMessage(chatId,  `${texts.grafiktext}`, {
              reply_markup:JSON.stringify({
                inline_keyboard:keyboard.lp_vclinic_back
              })
            })
             break  
        case 'exitlight':
        bot.sendMessage(chatId,  `${textlight.exittext}`, {
          reply_markup:JSON.stringify({
            inline_keyboard:keyboard.lp_vclinic_back
          })
        })
         break 
        case 'recomendslight':
        bot.sendMessage(chatId,  `${textlight.recomendstext}`, {
          reply_markup:JSON.stringify({
            inline_keyboard:keyboard.lp_vclinic_back
          })
        })
         break 
         case 'lfitness':
          bot.sendMessage(chatId,  `${texts.fitnesmenutext}`, {
            reply_markup:JSON.stringify({
              inline_keyboard:keyboard.lp_vclinic_back
            })
          })
           break 
         case 'lpprepar':
          bot.sendMessage(chatId,  `${texts.prepartext}`,{ parse_mode:'Markdown' ,
            reply_markup:JSON.stringify({
              inline_keyboard:keyboard.lp_prepar
            })
          })
           break  
           case 'lpprocedur':
            bot.sendMessage(chatId,  `${texts.procedurtext}`, {parse_mode:'Markdown',
              reply_markup:JSON.stringify({
                inline_keyboard:keyboard.lp_proced
              })
            })
             break
             case 'lduod':
              bot.sendMessage(chatId,  `${texts.duodtext}`, {parse_mode:'Markdown',
                reply_markup:JSON.stringify({
                  inline_keyboard:keyboard.lp_proced_back
                })
              })
               break
               case 'lkish':
                bot.sendMessage(chatId,  `${texts.kishtext}`, {parse_mode:'Markdown',
                  reply_markup:JSON.stringify({
                    inline_keyboard:keyboard.lp_proced_back
                  })
                })
                 break
                 case 'lactiv':
                  bot.sendMessage(chatId,  `${texts.activtext}`, {parse_mode:'Markdown',
                    reply_markup:JSON.stringify({
                      inline_keyboard:keyboard.lp_proced_back
                    })
                  })
                   break
                   case 'lcrt':
                    bot.sendMessage(chatId,  `${texts.crttext}`, {parse_mode:'Markdown',
                      reply_markup:JSON.stringify({
                        inline_keyboard:keyboard.lp_proced_back
                      })
                    })
                     break
                     case 'lmassagves':
                      bot.sendMessage(chatId,  `${texts.massagvestext}`, {parse_mode:'Markdown',
                        reply_markup:JSON.stringify({
                          inline_keyboard:keyboard.lp_proced_back
                        })
                      })
                       break
                       case 'lpress':
                        bot.sendMessage(chatId,  `${texts.presstext}`, {parse_mode:'Markdown',
                          reply_markup:JSON.stringify({
                            inline_keyboard:keyboard.lp_proced_back
                          })
                        })
                         break
                         case 'ltubaz':
                          bot.sendMessage(chatId,  `${texts.tubaztext}`, {parse_mode:'Markdown',
                            reply_markup:JSON.stringify({
                              inline_keyboard:keyboard.lp_proced_back
                            })
                          })
                           break
    case 'lsxema':
      bot.sendMessage(chatId,  `${texts.fsxem}`, {parse_mode:'Markdown',
      reply_markup:JSON.stringify({
        inline_keyboard:keyboard.lp_pod_back
      })
    })
     break
    case 'ldieta':
      bot.sendMessage(chatId,  `${texts.fdieta}`, {parse_mode:'Markdown',
      reply_markup:JSON.stringify({
        inline_keyboard:keyboard.lp_pod_back
      })
    })
     break
    case 'lzp':
      bot.sendMessage(chatId,  `${texts.fzp}`, {parse_mode:'Markdown',
      reply_markup:JSON.stringify({
        inline_keyboard:keyboard.lp_pod_back
      })
    })
     break
    case 'llivevar':
      bot.sendMessage(chatId,  `${texts.var}`, {parse_mode:'Markdown',
      reply_markup:JSON.stringify({
        inline_keyboard:keyboard.lp_pod_back
      })
    })
     break
    case 'lpered':
      bot.sendMessage(chatId,  `${texts.fperedconsalt}`, {parse_mode:'Markdown',
      reply_markup:JSON.stringify({
        inline_keyboard:keyboard.lp_pod_back
      })
    })
     break  
     case 'lzavclinic':
      bot.sendMessage(chatId,  `${texts.zavvclinictext}`, {parse_mode:'Markdown',
      reply_markup:JSON.stringify({
        inline_keyboard:keyboard.lp_pod_back
      })
    })
     break  
    case 'lprast1':
      bot.sendMessage(chatId,  `${texts.rast1text}`, {parse_mode:'Markdown',
      reply_markup:JSON.stringify({
        inline_keyboard:keyboard.lp_prepar_back
      })
    })
     break  
     case 'lpallato':
      bot.sendMessage(chatId,  `${texts.allatotext}`, {parse_mode:'Markdown',
      reply_markup:JSON.stringify({
        inline_keyboard:keyboard.lp_prepar_back
      })
    })
     break  
     case 'lppsiliym':
      bot.sendMessage(chatId,  `${texts.psiliymtext}`, {parse_mode:'Markdown',
      reply_markup:JSON.stringify({
        inline_keyboard:keyboard.lp_prepar_back
      })
    })
     break  
     case 'lpbentanit':
      bot.sendMessage(chatId,  `${texts.bentanittext}`, {parse_mode:'Markdown',
      reply_markup:JSON.stringify({
        inline_keyboard:keyboard.lp_prepar_back
      })
    })
     break  
     case 'lpyrosan':
      bot.sendMessage(chatId,  `${texts.yrosantext}`, {parse_mode:'Markdown',
      reply_markup:JSON.stringify({
        inline_keyboard:keyboard.lp_prepar_back
      })
    })
     break  
     case 'lpgelchsbor':
      bot.sendMessage(chatId,  `${texts.gelchtext}`, {parse_mode:'Markdown',
      reply_markup:JSON.stringify({
        inline_keyboard:keyboard.lp_prepar_back
      })
    })
     break  
     case 'lpkoraosin':
      bot.sendMessage(chatId,  `${texts.koratext}`, {parse_mode:'Markdown',
      reply_markup:JSON.stringify({
        inline_keyboard:keyboard.lp_prepar_back
      })
    })
     break  

 //Функции прочие
      case 'back_start':
        bot.sendMessage(chatId,  `${texts.vibor}`, {
          reply_markup:JSON.stringify({
            inline_keyboard:keyboard.start
          })
        })
        break
       

  }
})
bot.on("polling_error", console.log);

bot.onText(/\/start/ ,msg =>{
  bot.sendMessage(helper.getChatId(msg),`${texts.hello}`,{
    reply_markup:JSON.stringify({
      inline_keyboard:keyboard.start
    })
  })

  })
  bot.onText(/\/site/ ,msg =>{
    bot.sendMessage(helper.getChatId(msg),`Нажмите на кнопку для подтверждения перехода`, {
      reply_markup:JSON.stringify({
        inline_keyboard:keyboard.site
      })
    })
    })
    bot.onText(/\/instagramm/ ,msg =>{
      bot.sendMessage(helper.getChatId(msg),`Нажмите на кнопку для подтверждения перехода`, {
        reply_markup:JSON.stringify({
          inline_keyboard:keyboard.instagramm
        })
      })
      })
      bot.onText(/\/tg/ ,msg =>{
        bot.sendMessage(helper.getChatId(msg),`Нажмите на кнопку для подтверждения перехода`, {
          reply_markup:JSON.stringify({
            inline_keyboard:keyboard.tg
          })
        })
        })
        bot.onText(/\/online/ ,msg =>{
          bot.sendMessage(helper.getChatId(msg),`Нажмите на кнопку для подтверждения перехода`, {
            reply_markup:JSON.stringify({
              inline_keyboard:keyboard.online
            })
          })
          })
          bot.onText(/\/progbot/ ,msg =>{
            bot.sendMessage(helper.getChatId(msg),`Нажмите на кнопку для подтверждения перехода`, {
              reply_markup:JSON.stringify({
                inline_keyboard:keyboard.progbot
              })
            })
          
          })
