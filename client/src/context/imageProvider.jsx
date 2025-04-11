import React, { Children } from 'react'
import {createContext , useContext , useState} from 'react'
import Beach1 from '../assets/images/Beach/Beach1.webp';
import Beach2 from '../assets/images/Beach/Beach2.webp';
import Beach3 from '../assets/images/Beach/Beach3.webp';
import Beach4 from '../assets/images/Beach/Beach4.webp';
import Beach5 from '../assets/images/Beach/Beach5.webp';
import Beach6 from '../assets/images/Beach/Beach6.webp';
import Beach7 from '../assets/images/Beach/Beach7.webp';
import Beach8 from '../assets/images/Beach/Beach8.webp';
import Beach9 from '../assets/images/Beach/Beach9.webp';
import Beach10 from '../assets/images/Beach/Beach10.webp';
import Beach11 from '../assets/images/Beach/Beach11.webp';
import Beach12 from '../assets/images/Beach/Beach12.webp';
import Beach13 from '../assets/images/Beach/Beach13.webp';
import Beach14 from '../assets/images/Beach/Beach14.webp';
import Beach15 from '../assets/images/Beach/Beach15.webp';
import Beach16 from '../assets/images/Beach/Beach16.webp';
import Beach17 from '../assets/images/Beach/Beach17.webp';
import Beach18 from '../assets/images/Beach/Beach18.webp';
import Beach19 from '../assets/images/Beach/Beach19.webp';
import Beach20 from '../assets/images/Beach/Beach20.webp';
import Beach21 from '../assets/images/Beach/Beach21.webp';
import Beach22 from '../assets/images/Beach/Beach22.webp';
import Beach23 from '../assets/images/Beach/Beach23.webp';
import Beach24 from '../assets/images/Beach/Beach24.webp';
import Beach25 from '../assets/images/Beach/Beach25.webp';
import Beach26 from '../assets/images/Beach/Beach26.webp';
import Beach27 from '../assets/images/Beach/Beach27.webp';
import Beach28 from '../assets/images/Beach/Beach28.webp';
import Beach29 from '../assets/images/Beach/Beach29.webp';
import Beach30 from '../assets/images/Beach/Beach30.webp';
import Beach31 from '../assets/images/Beach/Beach31.webp';
import Beach32 from '../assets/images/Beach/Beach32.webp';
import Beach33 from '../assets/images/Beach/Beach33.webp';
import Beach34 from '../assets/images/Beach/Beach34.webp';
import Beach35 from '../assets/images/Beach/Beach35.webp';
import Beach36 from '../assets/images/Beach/Beach36.webp';
import Beach37 from '../assets/images/Beach/Beach37.webp';
import Beach38 from '../assets/images/Beach/Beach38.webp';
import Beach39 from '../assets/images/Beach/Beach39.webp';
import Beach40 from '../assets/images/Beach/Beach40.webp';
import Beach41 from '../assets/images/Beach/Beach41.webp';
import Beach42 from '../assets/images/Beach/Beach42.webp';
import Beach43 from '../assets/images/Beach/Beach43.webp';
import Beach44 from '../assets/images/Beach/Beach44.webp';
import Beach45 from '../assets/images/Beach/Beach45.webp';
import Beach46 from '../assets/images/Beach/Beach46.webp';
import Beach47 from '../assets/images/Beach/Beach47.webp';
import Beach48 from '../assets/images/Beach/Beach48.webp';
import Beach49 from '../assets/images/Beach/Beach49.webp';
import Beach50 from '../assets/images/Beach/Beach50.webp';
import Beach51 from '../assets/images/Beach/Beach51.webp';
import Beach52 from '../assets/images/Beach/Beach52.webp';
import Beach53 from '../assets/images/Beach/Beach53.webp';
import Beach54 from '../assets/images/Beach/Beach54.webp';
import Beach55 from '../assets/images/Beach/Beach55.webp';
import Beach56 from '../assets/images/Beach/Beach56.webp';
import Beach57 from '../assets/images/Beach/Beach57.webp';
import Beach58 from '../assets/images/Beach/Beach58.webp';
import Beach59 from '../assets/images/Beach/Beach59.webp';
import Beach60 from '../assets/images/Beach/Beach60.webp';
import Beach61 from '../assets/images/Beach/Beach61.webp';


import Clothing1 from '../assets/images/Clothing brand/Clothing brand1.webp';
import Clothing2 from '../assets/images/Clothing brand/Clothing brand2.webp';
import Clothing3 from '../assets/images/Clothing brand/Clothing brand3.webp';
import Clothing4 from '../assets/images/Clothing brand/Clothing brand4.webp';
import Clothing5 from '../assets/images/Clothing brand/Clothing brand5.webp';
import Clothing6 from '../assets/images/Clothing brand/Clothing brand6.webp';
import Clothing7 from '../assets/images/Clothing brand/Clothing brand7.webp';
import Clothing8 from '../assets/images/Clothing brand/Clothing brand8.webp';
import Clothing9 from '../assets/images/Clothing brand/Clothing brand9.webp';
import Clothing10 from '../assets/images/Clothing brand/Clothing brand10.webp';
import Clothing11 from '../assets/images/Clothing brand/Clothing brand11.webp';
import Clothing12 from '../assets/images/Clothing brand/Clothing brand12.webp';
import Clothing13 from '../assets/images/Clothing brand/Clothing brand13.webp';
import Clothing14 from '../assets/images/Clothing brand/Clothing brand14.webp';
import Clothing15 from '../assets/images/Clothing brand/Clothing brand15.webp';
import Clothing16 from '../assets/images/Clothing brand/Clothing brand16.webp';
import Clothing17 from '../assets/images/Clothing brand/Clothing brand17.webp';
import Clothing18 from '../assets/images/Clothing brand/Clothing brand18.webp';
import Clothing19 from '../assets/images/Clothing brand/Clothing brand19.webp';
import Clothing20 from '../assets/images/Clothing brand/Clothing brand20.webp';
import Clothing21 from '../assets/images/Clothing brand/Clothing brand21.webp';
import Clothing22 from '../assets/images/Clothing brand/Clothing brand22.webp';
import Clothing23 from '../assets/images/Clothing brand/Clothing brand23.webp';
import Clothing24 from '../assets/images/Clothing brand/Clothing brand24.webp';
import Clothing25 from '../assets/images/Clothing brand/Clothing brand25.webp';
import Clothing26 from '../assets/images/Clothing brand/Clothing brand26.webp';


import outDoor4 from '../assets/images/Outdoor/Outdoor4.webp';
import outDoor5 from '../assets/images/Outdoor/Outdoor5.webp';
import outDoor6 from '../assets/images/Outdoor/Outdoor6.webp';
import outDoor7 from '../assets/images/Outdoor/Outdoor7.webp';
import outDoor8 from '../assets/images/Outdoor/Outdoor8.webp';
import outDoor11 from '../assets/images/Outdoor/Outdoor11.webp';
import outDoor12 from '../assets/images/Outdoor/Outdoor12.webp';
import outDoor13 from '../assets/images/Outdoor/Outdoor13.webp';
import outDoor14 from '../assets/images/Outdoor/Outdoor14.webp';
import outDoor15 from '../assets/images/Outdoor/Outdoor15.webp';
import outDoor16 from '../assets/images/Outdoor/Outdoor16.webp';
import outDoor17 from '../assets/images/Outdoor/Outdoor17.webp';
import outDoor18 from '../assets/images/Outdoor/Outdoor18.webp';
import outDoor19 from '../assets/images/Outdoor/Outdoor19.webp';
import outDoor20 from '../assets/images/Outdoor/Outdoor20.webp';
import outDoor21 from '../assets/images/Outdoor/Outdoor21.webp';
import outDoor22 from '../assets/images/Outdoor/Outdoor22.webp';
import outDoor23 from '../assets/images/Outdoor/Outdoor23.webp';
import outDoor24 from '../assets/images/Outdoor/Outdoor24.webp';
import outDoor25 from '../assets/images/Outdoor/Outdoor25.webp';
import outDoor26 from '../assets/images/Outdoor/Outdoor26.webp';
import outDoor27 from '../assets/images/Outdoor/Outdoor27.webp';
import outDoor28 from '../assets/images/Outdoor/Outdoor28.webp';
import outDoor29 from '../assets/images/Outdoor/Outdoor29.webp';
import outDoor30 from '../assets/images/Outdoor/Outdoor30.webp';
import outDoor31 from '../assets/images/Outdoor/Outdoor31.webp';
import outDoor32 from '../assets/images/Outdoor/Outdoor32.webp';
import outDoor33 from '../assets/images/Outdoor/Outdoor33.webp';
import outDoor34 from '../assets/images/Outdoor/Outdoor34.webp';
import outDoor35 from '../assets/images/Outdoor/Outdoor35.webp';
import outDoor36 from '../assets/images/Outdoor/Outdoor36.webp';
import outDoor37 from '../assets/images/Outdoor/Outdoor37.webp';
import outDoor38 from '../assets/images/Outdoor/Outdoor38.webp';
import outDoor41 from '../assets/images/Outdoor/Outdoor41.webp';
import traditional3 from '../assets/images/Traditional/Traditional3.webp';
import traditional4 from '../assets/images/Traditional/Traditional4.webp';
import traditional5 from '../assets/images/Traditional/Traditional5.webp';
import traditional6 from '../assets/images/Traditional/Traditional6.webp';
import traditional7 from '../assets/images/Traditional/Traditional7.webp';
import traditional8 from '../assets/images/Traditional/Traditional8.webp';
import traditional9 from '../assets/images/Traditional/Traditional9.webp';
import traditional10 from '../assets/images/Traditional/Traditional10.webp';
import traditional11 from '../assets/images/Traditional/Traditional11.webp';
import traditional12 from '../assets/images/Traditional/Traditional12.webp';
import traditional13 from '../assets/images/Traditional/Traditional13.webp';
import traditional14 from '../assets/images/Traditional/Traditional14.webp';
import traditional15 from '../assets/images/Traditional/Traditional15.webp';
import traditional16 from '../assets/images/Traditional/Traditional16.webp';
import traditional17 from '../assets/images/Traditional/Traditional17.webp';
import traditional18 from '../assets/images/Traditional/Traditional18.webp';
import traditional19 from '../assets/images/Traditional/Traditional19.webp';
import traditional20 from '../assets/images/Traditional/Traditional20.webp';
import traditional21 from '../assets/images/Traditional/Traditional21.webp';
import traditional22 from '../assets/images/Traditional/Traditional22.webp';
import traditional23 from '../assets/images/Traditional/Traditional23.webp';
import traditional24 from '../assets/images/Traditional/Traditional24.webp';
import traditional25 from '../assets/images/Traditional/Traditional25.webp';
import traditional26 from '../assets/images/Traditional/Traditional26.webp';
import traditional27 from '../assets/images/Traditional/Traditional27.webp';
import traditional28 from '../assets/images/Traditional/Traditional28.webp';
import traditional29 from '../assets/images/Traditional/Traditional29.webp';
import traditional30 from '../assets/images/Traditional/Traditional30.webp';
import traditional31 from '../assets/images/Traditional/Traditional31.webp';
import traditional32 from '../assets/images/Traditional/Traditional32.webp';
import traditional33 from '../assets/images/Traditional/Traditional33.webp';
import traditional34 from '../assets/images/Traditional/Traditional34.webp';
import traditional35 from '../assets/images/Traditional/Traditional35.webp';
import traditional36 from '../assets/images/Traditional/Traditional36.webp';
import traditional37 from '../assets/images/Traditional/Traditional37.webp';
import traditional38 from '../assets/images/Traditional/Traditional38.webp';
import traditional39 from '../assets/images/Traditional/Traditional39.webp';
import traditional40 from '../assets/images/Traditional/Traditional40.webp';
import traditional41 from '../assets/images/Traditional/Traditional41.webp';
import traditional42 from '../assets/images/Traditional/Traditional42.webp';
import traditional43 from '../assets/images/Traditional/Traditional43.webp';

import studio2 from '../assets/images/Studio/Studio2.webp';
import studio3 from '../assets/images/Studio/Studio3.webp';
import studio4 from '../assets/images/Studio/Studio4.webp';
import studio5 from '../assets/images/Studio/Studio5.webp';
import studio6 from '../assets/images/Studio/Studio6.webp';
import studio7 from '../assets/images/Studio/Studio7.webp';
import studio8 from '../assets/images/Studio/Studio8.webp';
import studio9 from '../assets/images/Studio/Studio9.webp';
import studio10 from '../assets/images/Studio/Studio10.webp';
import studio11 from '../assets/images/Studio/Studio11.webp';
import studio12 from '../assets/images/Studio/Studio12.webp';
import studio13 from '../assets/images/Studio/Studio13.webp';
import studio14 from '../assets/images/Studio/Studio14.webp';
import studio15 from '../assets/images/Studio/Studio15.webp';
import studio16 from '../assets/images/Studio/Studio16.webp';
import studio17 from '../assets/images/Studio/Studio17.webp';
import studio18 from '../assets/images/Studio/Studio18.webp';
import studio19 from '../assets/images/Studio/Studio19.webp';
import studio20 from '../assets/images/Studio/Studio20.webp';
import studio21 from '../assets/images/Studio/Studio21.webp';
import studio22 from '../assets/images/Studio/Studio22.webp';
import studio23 from '../assets/images/Studio/Studio23.webp';
import studio24 from '../assets/images/Studio/Studio24.webp';
import studio25 from '../assets/images/Studio/Studio25.webp';
import studio26 from '../assets/images/Studio/Studio26.webp';
import studio27 from '../assets/images/Studio/Studio27.webp';
import studio28 from '../assets/images/Studio/Studio28.webp';
import studio29 from '../assets/images/Studio/Studio29.webp';
import studio30 from '../assets/images/Studio/Studio30.webp';
import studio31 from '../assets/images/Studio/Studio31.webp';
import studio32 from '../assets/images/Studio/Studio32.webp';
import studio33 from '../assets/images/Studio/Studio33.webp';
import studio34 from '../assets/images/Studio/Studio34.webp';
import studio35 from '../assets/images/Studio/Studio35.webp';
import studio36 from '../assets/images/Studio/Studio36.webp';
import studio37 from '../assets/images/Studio/Studio37.webp';
import studio38 from '../assets/images/Studio/Studio38.webp';
import studio39 from '../assets/images/Studio/Studio39.webp';
import studio40 from '../assets/images/Studio/Studio40.webp';
import studio41 from '../assets/images/Studio/Studio41.webp';
import studio42 from '../assets/images/Studio/Studio42.webp';
import studio43 from '../assets/images/Studio/Studio43.webp';
import studio44 from '../assets/images/Studio/Studio44.webp';
import studio45 from '../assets/images/Studio/Studio45.webp';
import studio46 from '../assets/images/Studio/Studio46.webp';
import studio47 from '../assets/images/Studio/Studio47.webp';
import studio48 from '../assets/images/Studio/Studio48.webp';
import studio49 from '../assets/images/Studio/Studio49.webp';
import studio50 from '../assets/images/Studio/Studio50.webp';
import studio51 from '../assets/images/Studio/Studio51.webp';
import studio52 from '../assets/images/Studio/Studio52.webp';
import studio53 from '../assets/images/Studio/Studio53.webp';
import studio54 from '../assets/images/Studio/Studio54.webp';
import studio55 from '../assets/images/Studio/Studio55.webp';
import studio56 from '../assets/images/Studio/Studio56.webp';
import studio57 from '../assets/images/Studio/Studio57.webp';
import studio58 from '../assets/images/Studio/Studio58.webp';
import studio59 from '../assets/images/Studio/Studio59.webp';
import studio60 from '../assets/images/Studio/Studio60.webp';
import studio61 from '../assets/images/Studio/Studio61.webp';
import studio62 from '../assets/images/Studio/Studio62.webp';
import studio63 from '../assets/images/Studio/Studio63.webp';
import studio64 from '../assets/images/Studio/Studio64.webp';
import studio65 from '../assets/images/Studio/Studio65.webp';
import studio66 from '../assets/images/Studio/Studio66.webp';
import studio67 from '../assets/images/Studio/Studio67.webp';
import studio68 from '../assets/images/Studio/Studio68.webp';
import studio69 from '../assets/images/Studio/Studio69.webp';
import studio70 from '../assets/images/Studio/Studio70.webp';
import studio71 from '../assets/images/Studio/Studio71.webp';
import studio72 from '../assets/images/Studio/Studio72.webp';
import studio73 from '../assets/images/Studio/Studio73.webp';
import studio74 from '../assets/images/Studio/Studio74.webp';
import studio75 from '../assets/images/Studio/Studio75.webp';
import studio76 from '../assets/images/Studio/Studio76.webp';
import studio77 from '../assets/images/Studio/Studio77.webp';
import studio78 from '../assets/images/Studio/Studio78.webp';
import studio79 from '../assets/images/Studio/Studio79.webp';
import studio80 from '../assets/images/Studio/Studio80.webp';
import studio81 from '../assets/images/Studio/Studio81.webp';
import studio82 from '../assets/images/Studio/Studio82.webp';
import studio83 from '../assets/images/Studio/Studio83.webp';
import studio84 from '../assets/images/Studio/Studio84.webp';
import studio85 from '../assets/images/Studio/Studio85.webp';
import studio86 from '../assets/images/Studio/Studio86.webp';
import studio87 from '../assets/images/Studio/Studio87.webp';
import studio88 from '../assets/images/Studio/Studio88.webp';
import studio89 from '../assets/images/Studio/Studio89.webp';
import studio90 from '../assets/images/Studio/Studio90.webp';
import studio91 from '../assets/images/Studio/Studio91.webp';
import studio92 from '../assets/images/Studio/Studio92.webp';
import studio93 from '../assets/images/Studio/Studio93.webp';
import studio94 from '../assets/images/Studio/Studio94.webp';
import studio95 from '../assets/images/Studio/Studio95.webp';
import studio96 from '../assets/images/Studio/Studio96.webp';
import studio97 from '../assets/images/Studio/Studio97.webp';
import studio98 from '../assets/images/Studio/Studio98.webp';
import studio99 from '../assets/images/Studio/Studio99.webp';
import studio100 from '../assets/images/Studio/Studio100.webp';
import studio101 from '../assets/images/Studio/Studio101.webp';
import studio102 from '../assets/images/Studio/Studio102.webp';
import studio103 from '../assets/images/Studio/Studio103.webp';
import studio104 from '../assets/images/Studio/Studio104.webp';
import studio105 from '../assets/images/Studio/Studio105.webp';
import studio106 from '../assets/images/Studio/Studio106.webp';
import studio107 from '../assets/images/Studio/Studio107.webp';
import studio108 from '../assets/images/Studio/Studio108.webp';
import studio109 from '../assets/images/Studio/Studio109.webp';
import studio110 from '../assets/images/Studio/Studio110.webp';
import studio111 from '../assets/images/Studio/Studio111.webp';
import studio112 from '../assets/images/Studio/Studio112.webp';
import studio113 from '../assets/images/Studio/Studio113.webp';
import studio114 from '../assets/images/Studio/Studio114.webp';
import studio115 from '../assets/images/Studio/Studio115.webp';
import studio116 from '../assets/images/Studio/Studio116.webp';
import studio117 from '../assets/images/Studio/Studio117.webp';
import studio118 from '../assets/images/Studio/Studio118.webp';
import studio119 from '../assets/images/Studio/Studio119.webp';
import studio120 from '../assets/images/Studio/Studio120.webp';
import studio121 from '../assets/images/Studio/Studio121.webp';
import studio122 from '../assets/images/Studio/Studio122.webp';
import studio123 from '../assets/images/Studio/Studio123.webp';
import studio124 from '../assets/images/Studio/Studio124.webp';
import studio125 from '../assets/images/Studio/Studio125.webp';
import studio126 from '../assets/images/Studio/Studio126.webp';
import studio127 from '../assets/images/Studio/Studio127.webp';
import studio128 from '../assets/images/Studio/Studio128.webp';
import studio129 from '../assets/images/Studio/Studio129.webp';
import studio130 from '../assets/images/Studio/Studio130.webp';
import studio131 from '../assets/images/Studio/Studio131.webp';
import studio132 from '../assets/images/Studio/Studio132.webp';
import studio133 from '../assets/images/Studio/Studio133.webp';
import studio134 from '../assets/images/Studio/Studio134.webp';
import studio135 from '../assets/images/Studio/Studio135.webp';
import studio136 from '../assets/images/Studio/Studio136.webp';
import studio137 from '../assets/images/Studio/Studio137.webp';
import studio138 from '../assets/images/Studio/Studio138.webp';
import studio139 from '../assets/images/Studio/Studio139.webp';
import studio140 from '../assets/images/Studio/Studio140.webp';
import studio141 from '../assets/images/Studio/Studio141.webp';
import studio142 from '../assets/images/Studio/Studio142.webp';
import studio143 from '../assets/images/Studio/Studio143.webp';
import studio144 from '../assets/images/Studio/Studio144.webp';
import studio145 from '../assets/images/Studio/Studio145.webp';
import studio146 from '../assets/images/Studio/Studio146.webp';
import studio147 from '../assets/images/Studio/Studio147.webp';
import studio148 from '../assets/images/Studio/Studio148.webp';
import studio149 from '../assets/images/Studio/Studio149.webp';
import studio150 from '../assets/images/Studio/Studio150.webp';
import studio151 from '../assets/images/Studio/Studio151.webp';
import studio152 from '../assets/images/Studio/Studio152.webp';
import studio153 from '../assets/images/Studio/Studio153.webp';
import studio154 from '../assets/images/Studio/Studio154.webp';
import studio155 from '../assets/images/Studio/Studio155.webp';
import studio156 from '../assets/images/Studio/Studio156.webp';
import studio157 from '../assets/images/Studio/Studio157.webp';
import studio158 from '../assets/images/Studio/Studio158.webp';
import studio159 from '../assets/images/Studio/Studio159.webp';
import studio160 from '../assets/images/Studio/Studio160.webp';
import studio161 from '../assets/images/Studio/Studio161.webp';
import studio162 from '../assets/images/Studio/Studio162.webp';
import studio163 from '../assets/images/Studio/Studio163.webp';
import studio164 from '../assets/images/Studio/Studio164.webp';
import studio165 from '../assets/images/Studio/Studio165.webp';
import studio166 from '../assets/images/Studio/Studio166.webp';
import studio167 from '../assets/images/Studio/Studio167.webp';
import studio168 from '../assets/images/Studio/Studio168.webp';
import studio169 from '../assets/images/Studio/Studio169.webp';
import studio170 from '../assets/images/Studio/Studio170.webp';
import studio171 from '../assets/images/Studio/Studio171.webp';
import studio172 from '../assets/images/Studio/Studio172.webp';
import studio173 from '../assets/images/Studio/Studio173.webp';
import studio174 from '../assets/images/Studio/Studio174.webp';
import studio175 from '../assets/images/Studio/Studio175.webp';
import studio176 from '../assets/images/Studio/Studio176.webp';
import studio177 from '../assets/images/Studio/Studio177.webp';
import studio178 from '../assets/images/Studio/Studio178.webp';
import studio179 from '../assets/images/Studio/Studio179.webp';
import studio180 from '../assets/images/Studio/Studio180.webp';
import studio181 from '../assets/images/Studio/Studio181.webp';
import studio182 from '../assets/images/Studio/Studio182.webp';
import studio183 from '../assets/images/Studio/Studio183.webp';
import studio184 from '../assets/images/Studio/Studio184.webp';
import studio185 from '../assets/images/Studio/Studio185.webp';
import studio186 from '../assets/images/Studio/Studio186.webp';
import studio187 from '../assets/images/Studio/Studio187.webp';
import studio188 from '../assets/images/Studio/Studio188.webp';
import studio189 from '../assets/images/Studio/Studio189.webp';
import studio190 from '../assets/images/Studio/Studio190.webp';
import studio191 from '../assets/images/Studio/Studio191.webp';
import studio192 from '../assets/images/Studio/Studio192.webp';
import studio193 from '../assets/images/Studio/Studio193.webp';
import studio194 from '../assets/images/Studio/Studio194.webp';
import studio195 from '../assets/images/Studio/Studio195.webp';
import studio196 from '../assets/images/Studio/Studio196.webp';
import studio197 from '../assets/images/Studio/Studio197.webp';
import studio198 from '../assets/images/Studio/Studio198.webp';
import studio199 from '../assets/images/Studio/Studio199.webp';
import studio200 from '../assets/images/Studio/Studio200.webp';
import studio201 from '../assets/images/Studio/Studio201.webp';
import studio202 from '../assets/images/Studio/Studio202.webp';
import studio203 from '../assets/images/Studio/Studio203.webp';
import studio204 from '../assets/images/Studio/Studio204.webp';
import studio205 from '../assets/images/Studio/Studio205.webp';
import studio206 from '../assets/images/Studio/Studio206.webp';
import studio207 from '../assets/images/Studio/Studio207.webp';
import studio208 from '../assets/images/Studio/Studio208.webp';
import studio209 from '../assets/images/Studio/Studio209.webp';
import studio210 from '../assets/images/Studio/Studio210.webp';
import studio211 from '../assets/images/Studio/Studio211.webp';
import studio212 from '../assets/images/Studio/Studio212.webp';
import studio213 from '../assets/images/Studio/Studio213.webp';
import studio214 from '../assets/images/Studio/Studio214.webp';
import studio215 from '../assets/images/Studio/Studio215.webp';
import studio216 from '../assets/images/Studio/Studio216.webp';
import studio217 from '../assets/images/Studio/Studio217.webp';
import studio218 from '../assets/images/Studio/Studio218.webp';
import studio219 from '../assets/images/Studio/Studio219.webp';
import studio220 from '../assets/images/Studio/Studio220.webp';
import studio221 from '../assets/images/Studio/Studio221.webp';
import studio222 from '../assets/images/Studio/Studio222.webp';
import studio223 from '../assets/images/Studio/Studio223.webp';
import studio224 from '../assets/images/Studio/Studio224.webp';
import studio225 from '../assets/images/Studio/Studio225.webp';
import studio226 from '../assets/images/Studio/Studio226.webp';
import studio227 from '../assets/images/Studio/Studio227.webp';
import studio228 from '../assets/images/Studio/Studio228.webp';
import studio229 from '../assets/images/Studio/Studio229.webp';
import studio230 from '../assets/images/Studio/Studio230.webp';
import studio231 from '../assets/images/Studio/Studio231.webp';
import studio232 from '../assets/images/Studio/Studio232.webp';
import studio233 from '../assets/images/Studio/Studio233.webp';
import studio234 from '../assets/images/Studio/Studio234.webp';
import studio235 from '../assets/images/Studio/Studio235.webp';
import studio236 from '../assets/images/Studio/Studio236.webp';
import studio237 from '../assets/images/Studio/Studio237.webp';
import studio238 from '../assets/images/Studio/Studio238.webp';
import studio239 from '../assets/images/Studio/Studio239.webp';
import studio240 from '../assets/images/Studio/Studio240.webp';
import studio241 from '../assets/images/Studio/Studio241.webp';
import studio242 from '../assets/images/Studio/Studio242.webp';
import studio243 from '../assets/images/Studio/Studio243.webp';
import studio244 from '../assets/images/Studio/Studio244.webp';
import studio245 from '../assets/images/Studio/Studio245.webp';
import studio246 from '../assets/images/Studio/Studio246.webp';
import studio247 from '../assets/images/Studio/Studio247.webp';
import studio248 from '../assets/images/Studio/Studio248.webp';
import studio249 from '../assets/images/Studio/Studio249.webp';
import studio250 from '../assets/images/Studio/Studio250.webp';
import studio251 from '../assets/images/Studio/Studio251.webp';
import studio252 from '../assets/images/Studio/Studio252.webp';
import studio253 from '../assets/images/Studio/Studio253.webp';
import studio254 from '../assets/images/Studio/Studio254.webp';
import studio255 from '../assets/images/Studio/Studio255.webp';
import studio256 from '../assets/images/Studio/Studio256.webp';
import studio257 from '../assets/images/Studio/Studio257.webp';
import studio258 from '../assets/images/Studio/Studio258.webp';
import studio259 from '../assets/images/Studio/Studio259.webp';


import product2 from '../assets/images/Product shoot/Product shoot2.webp';
import product3 from '../assets/images/Product shoot/Product shoot3.webp';
import product4 from '../assets/images/Product shoot/Product shoot4.webp';
import product5 from '../assets/images/Product shoot/Product shoot5.webp';
import product6 from '../assets/images/Product shoot/Product shoot6.webp';
import product7 from '../assets/images/Product shoot/Product shoot7.webp';
import product8 from '../assets/images/Product shoot/Product shoot8.webp';
import product9 from '../assets/images/Product shoot/Product shoot9.webp';
import product10 from '../assets/images/Product shoot/Product shoot10.webp';
import product11 from '../assets/images/Product shoot/Product shoot11.webp';
import product12 from '../assets/images/Product shoot/Product shoot12.webp';
import product13 from '../assets/images/Product shoot/Product shoot13.webp';
import product14 from '../assets/images/Product shoot/Product shoot14.webp';
import product15 from '../assets/images/Product shoot/Product shoot15.webp';
import product16 from '../assets/images/Product shoot/Product shoot16.webp';
import product17 from '../assets/images/Product shoot/Product shoot17.webp';
import product18 from '../assets/images/Product shoot/Product shoot18.webp';


// Now creating the allImages array
const allImages = [
  Beach1, Beach2, Beach3, Beach4, Beach5, Beach6, Beach7, Beach8, Beach9, 
  Beach10, Beach11, Beach12, Beach13, Beach14, Beach15, Beach16, Beach17, Beach18, Beach19, Beach20, 
  Beach21, Beach22, Beach23, Beach24, Beach25, Beach26, Beach27, Beach28, Beach29, Beach30, 
  Beach31, Beach32, Beach33, Beach34, Beach35, Beach36, Beach37, Beach38, Beach39, Beach40, 
  Beach41, Beach42, Beach43, Beach44, Beach45, Beach46, Beach47, Beach48, Beach49, Beach50, Beach51, Beach52, Beach53, Beach54, Beach55,
  Beach56, Beach57, Beach58, Beach59, Beach60, Beach61
];
const productImages = [
  product2,
  product3,
  product4,
  product5,
  product6,
  product7,
  product8,
  product9,
  product10,
  product11,
  product12,
  product13,
  product14,
  product15,
  product16,
  product17,
  product18,
];

const allClothingImages = [
  Clothing1, Clothing2, Clothing3, Clothing4, Clothing5, Clothing6, Clothing7, Clothing8, 
  Clothing10, Clothing11, Clothing12, Clothing13, Clothing14, Clothing15, Clothing16, Clothing17, Clothing18, Clothing20, 
  Clothing21, Clothing23, Clothing24
];

const allOutdoorImages = [
 outDoor4, outDoor5, outDoor6, outDoor7, outDoor8, outDoor11, outDoor12, outDoor13, outDoor14, outDoor15, outDoor16, outDoor17, outDoor18, outDoor19, outDoor20, 
  outDoor21, outDoor22, outDoor23, outDoor24, outDoor25, outDoor26, outDoor27, outDoor28, outDoor29, outDoor30, 
  outDoor31, outDoor32, outDoor33, outDoor34, outDoor35, outDoor36, outDoor37, outDoor38, 
  outDoor41
];

const allTraditionalImages = [
   traditional3, traditional4, traditional5, traditional6, traditional7, traditional8, traditional9, 
  traditional10, traditional11, traditional12, traditional13, traditional14, traditional15, traditional16, traditional17, traditional18, traditional19, traditional20, 
  traditional21, traditional22, traditional23, traditional24, traditional25, traditional26, traditional27, traditional28, traditional29, traditional30, 
  traditional31, traditional32, traditional33, traditional34, traditional35, traditional36, traditional37, traditional38, traditional39, traditional40, 
  traditional41, traditional42, traditional43
];


const allStudioImages = [
   studio2, studio3, studio4, studio5, studio6, studio7, studio8, studio9, studio10,
  studio11, studio12, studio13, studio14, studio15, studio16, studio17, studio18, studio19, studio20,
  studio21, studio22, studio23, studio24, studio25, studio26, studio27, studio28, studio29, studio30,
  studio31, studio32, studio33, studio34, studio35, studio36, studio37, studio38, studio39, studio40,
  studio41, studio42, studio43, studio44, studio45, studio46, studio47, studio48, studio49, studio50,
  studio51, studio52, studio53, studio54, studio55, studio56, studio57, studio58, studio59, studio60,
  studio61, studio62, studio63, studio64, studio65, studio66, studio67, studio68, studio69, studio70,
  studio71, studio72, studio73, studio74, studio75, studio76, studio77, studio78, studio79, studio80,
  studio81, studio82, studio83, studio84, studio85, studio86, studio87, studio88, studio89, studio90,
  studio91, studio92, studio93, studio94, studio95, studio96, studio97, studio98, studio99, studio100,
  studio101, studio102, studio103, studio104, studio105, studio106, studio107, studio108, studio109, studio110,
  studio111, studio112, studio113, studio114, studio115, studio116, studio117, studio118, studio119, studio120,
  studio121, studio122, studio123, studio124, studio125, studio126, studio127, studio128, studio129, studio130,
  studio131, studio132, studio133, studio134, studio135, studio136, studio137, studio138, studio139, studio140,
  studio141, studio142, studio143, studio144, studio145, studio146, studio147, studio148, studio149, studio150,
  studio151, studio152, studio153, studio154, studio155, studio156, studio157, studio158, studio159, studio160,
  studio161, studio162, studio163, studio164, studio165, studio166, studio167, studio168, studio169, studio170,
  studio171, studio172, studio173, studio174, studio175, studio176, studio177, studio178, studio179, studio180,
  studio181, studio182, studio183, studio184, studio185, studio186, studio187, studio188, studio189, studio190,
  studio191, studio192, studio193, studio194, studio195, studio196, studio197, studio198, studio199, studio200,
  studio201, studio202, studio203, studio204, studio205, studio206, studio207, studio208, studio209, studio210,
  studio211, studio212, studio213, studio214, studio215, studio216, studio217, studio218, studio219, studio220,
  studio221, studio222, studio223, studio224, studio225, studio226, studio227, studio228, studio229, studio230,
  studio231, studio232, studio233, studio234, studio235, studio236, studio237, studio238, studio239, studio240,
  studio241, studio242, studio243, studio244, studio245, studio246, studio247, studio248, studio249, studio250,
  studio251, studio252, studio253, studio254, studio255, studio256, studio257, studio258, studio259
 
];


const ImageContext = createContext()
export const ImageProvider = ({ children }) => {

    const [images, setImages] = useState([
       
        {
          modelName: 'Studio',
          id: 'Fashion-shoot',
          captures: [studio245 , studio244 , studio118 , studio119],
          isOpen: true, isSelected : true,
          allImages: allStudioImages , 
          
          about: 'A fearless muse owning every frame with bold elegance and timeless grace.'
        }, {
          modelName: 'Beach',
          id: 'Model-photoshoot',
          captures: [ Beach43, Beach42,  , Beach37 , Beach39],
          isOpen: false, isSelected : true,
          allImages: allImages ,
          about: 'A sun-kissed soul who slays the shore with effortless vibe and golden allure.'
        },
        {
          modelName: 'Outdoor',
          id: 'Model-photoshoot',
          captures: [ outDoor14 ,outDoor11, outDoor16 , outDoor17],
          isOpen: false, isSelected : true,
          allImages: allOutdoorImages ,
          about: 'A wild spirit embracing nature’s backdrop with raw beauty and effortless cool.'
        },
        {
          modelName: 'Clothing',
          id: 'Fashion',
          captures: [Clothing7, Clothing9 , Clothing15 , Clothing16],
          isOpen: false, isSelected : true,
          allImages:allClothingImages,
          about: 'A trendsetter who brings brands to life with attitude, edge, and killer looks.'
        },  {
          modelName: 'Treditional',
          id: 'Fashion-shoot',
          captures: [traditional42 ,traditional41 , traditional12 ,traditional13],
          isOpen: false, isSelected : true,
          allImages:allTraditionalImages ,
          about: 'A cultural soul who redefines traditions with poise, charm, and vibrant flair.'
        },
        {
          modelName: 'Product',
          id: 'Product',
          captures: [product14 ,product11 , product6 ,product7],
          isOpen: false, isSelected : true,
          allImages: productImages ,
          about: 'A stylish eye who turns everyday products into icons with vibe and vision.'
        },
       
       
      ])

  return (
   <ImageContext.Provider  value = {{images , setImages}}>
    {children}
   </ImageContext.Provider>
  )
}

export const useImageContext = () => useContext(ImageContext)