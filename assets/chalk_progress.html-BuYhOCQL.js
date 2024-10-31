import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,a as i,d as r,e as a,r as d,o as p,b as s}from"./app-D_yE5mo5.js";const B={};function A(g,l){const t=d("CodeTabs");return p(),n("div",null,[l[4]||(l[4]=i("p",null,"小练习-控制台输出进度条和彩色字体",-1)),l[5]||(l[5]=i("h4",{id:"code-tabs",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#code-tabs"},[i("span",null,"Code Tabs")])],-1)),r(t,{id:"6",data:[{id:"progress.mjs"},{id:"package.json"}],"tab-id":"js"},{title0:a(({value:h,isActive:k})=>l[0]||(l[0]=[s("progress.mjs")])),title1:a(({value:h,isActive:k})=>l[1]||(l[1]=[s("package.json")])),tab0:a(({value:h,isActive:k})=>l[2]||(l[2]=[i("div",{class:"language-javascript line-numbers-mode","data-highlighter":"shiki","data-ext":"javascript","data-title":"javascript",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0A1A7","--shiki-light-font-style":"italic","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"}},"#!/bin/env node")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0A1A7","--shiki-light-font-style":"italic","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"}},"// // 打印彩色日志")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"import"),i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}}," chalk"),i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}}," from"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," 'chalk'"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#E5C07B"}},"console"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"."),i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"log"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"("),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#E5C07B"}},"chalk"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"."),i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"yellow"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"("),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},"'黄色'"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"));")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0A1A7","--shiki-light-font-style":"italic","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"}},"// // 进度条库")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"var"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#E06C75"}}," ProgressBar"),i("span",{style:{"--shiki-light":"#0184BC","--shiki-dark":"#56B6C2"}}," ="),i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}}," await"),i("span",{style:{"--shiki-light":"#0184BC","--shiki-dark":"#61AFEF"}}," import"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"("),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},"'progress'"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0A1A7","--shiki-light-font-style":"italic","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"}},"// // 指定进度条头部，完成表示，未完成标志，总数")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"var"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#E06C75"}}," bar"),i("span",{style:{"--shiki-light":"#0184BC","--shiki-dark":"#56B6C2"}}," ="),i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}}," new"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#E5C07B"}}," ProgressBar"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"."),i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"default"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"("),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},"'[ :bar ] :current/:total'"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},", {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"  head"),i("span",{style:{"--shiki-light":"#0184BC","--shiki-dark":"#ABB2BF"}},":"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," '🌛'"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"  complete"),i("span",{style:{"--shiki-light":"#0184BC","--shiki-dark":"#ABB2BF"}},":"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," '🐶'"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"  total"),i("span",{style:{"--shiki-light":"#0184BC","--shiki-dark":"#ABB2BF"}},":"),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}}," 10"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"});")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"var"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#E06C75"}}," timer"),i("span",{style:{"--shiki-light":"#0184BC","--shiki-dark":"#56B6C2"}}," ="),i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}}," setInterval"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"("),i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"function"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," () {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0A1A7","--shiki-light-font-style":"italic","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"}},"  // 进度条增加进度")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#E5C07B"}},"  bar"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"."),i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"tick"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"();")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"  if"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," ("),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#E5C07B"}},"bar"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"."),i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"curr"),i("span",{style:{"--shiki-light":"#0184BC","--shiki-dark":"#56B6C2"}}," ==="),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}}," 1"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},") {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0A1A7","--shiki-light-font-style":"italic","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"}},"    // 不同进度渲染不同的颜色")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#E5C07B"}},"    bar"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"."),i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"interrupt"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"("),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},"'"),i("span",{style:{"--shiki-light":"#0184BC","--shiki-dark":"#56B6C2"}},"\\x1b"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},"[31m'"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"  } "),i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"else"),i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}}," if"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," ("),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#E5C07B"}},"bar"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"."),i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"curr"),i("span",{style:{"--shiki-light":"#0184BC","--shiki-dark":"#56B6C2"}}," ==="),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}}," 5"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},") {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#E5C07B"}},"    bar"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"."),i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"interrupt"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"("),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},"'"),i("span",{style:{"--shiki-light":"#0184BC","--shiki-dark":"#56B6C2"}},"\\x1b"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},"[33m'"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"  } "),i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"else"),i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}}," if"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," ("),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#E5C07B"}},"bar"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"."),i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"curr"),i("span",{style:{"--shiki-light":"#0184BC","--shiki-dark":"#56B6C2"}}," ==="),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}}," 8"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},") {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#E5C07B"}},"    bar"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"."),i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"interrupt"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"("),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},"'"),i("span",{style:{"--shiki-light":"#0184BC","--shiki-dark":"#56B6C2"}},"\\x1b"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},"[32m'"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"  } "),i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"else"),i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}}," if"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," ("),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#E5C07B"}},"bar"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"."),i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"complete"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},") {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0A1A7","--shiki-light-font-style":"italic","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"}},"    // 进度条完成状态")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#E5C07B"}},"    console"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"."),i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"log"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"("),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},"'"),i("span",{style:{"--shiki-light":"#0184BC","--shiki-dark":"#56B6C2"}},"\\n"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},"completed"),i("span",{style:{"--shiki-light":"#0184BC","--shiki-dark":"#56B6C2"}},"\\n"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},"'"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"    clearInterval"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"("),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#E06C75"}},"timer"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"  }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"}, "),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}},"100"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},");")])])]),i("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"})])],-1)])),tab1:a(({value:h,isActive:k})=>l[3]||(l[3]=[i("div",{class:"language-json line-numbers-mode","data-highlighter":"shiki","data-ext":"json","data-title":"json",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"{")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},'  "name"'),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},": "),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},'"nodejs"'),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},'  "version"'),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},": "),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},'"1.0.0"'),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},'  "description"'),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},": "),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},'""'),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},'  "main"'),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},": "),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},'"progress.js"'),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},'  "type"'),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},": "),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},'"module"'),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},'  "scripts"'),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},": {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},'    "test"'),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},": "),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},'"echo '),i("span",{style:{"--shiki-light":"#0184BC","--shiki-dark":"#56B6C2"}},'\\"'),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},"Error: no test specified"),i("span",{style:{"--shiki-light":"#0184BC","--shiki-dark":"#56B6C2"}},'\\"'),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},' && exit 1"')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},'  "keywords"'),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},": [],")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},'  "author"'),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},": "),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},'""'),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},'  "license"'),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},": "),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},'"ISC"'),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},'  "dependencies"'),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},": {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},'    "chalk"'),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},": "),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},'"^5.3.0"'),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},'    "progress"'),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},": "),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},'"^2.0.3"')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"  }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"}")])])]),i("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"})])],-1)])),_:1})])}const o=e(B,[["render",A],["__file","chalk_progress.html.vue"]]),F=JSON.parse('{"path":"/demo/chalk_progress.html","title":"chalk&progress","lang":"zh-CN","frontmatter":{"title":"chalk&progress","icon":"fab fa-markdown","order":2,"category":["碎片"],"tag":["chalk","progress","esModule&commonjs"],"description":"小练习-控制台输出进度条和彩色字体 Code Tabs","head":[["meta",{"property":"og:url","content":"https://zonahaha.github.io/demo/chalk_progress.html"}],["meta",{"property":"og:site_name","content":"hello zona😊"}],["meta",{"property":"og:title","content":"chalk&progress"}],["meta",{"property":"og:description","content":"小练习-控制台输出进度条和彩色字体 Code Tabs"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"chalk"}],["meta",{"property":"article:tag","content":"progress"}],["meta",{"property":"article:tag","content":"esModule&commonjs"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"chalk&progress\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"zona\\",\\"url\\":\\"https://github.com/zonahaha/zonahaha.github.io.git\\"}]}"]]},"headers":[],"git":{},"readingTime":{"minutes":0.64,"words":193},"filePathRelative":"demo/chalk&progress.md","autoDesc":true}');export{o as comp,F as data};
