//   - This file is part of LichessHelper Extension
//  <https://github.com/gerwld/LichessHelper-extension/blob/main/README.md>,
//   - Copyright (C) 2023-present LichessHelper Extension
//   -
//   - LichessHelper Extension is a software: you can redistribute it, but you are not allowed to modify it under the terms of the Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0) License.
//   -
//   - LichessHelper Extension is distributed in the hope that it will be useful,
//   - but WITHOUT ANY WARRANTY; without even the implied warranty of
//   - MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//   - Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0) License for more details.
//   -
//   - You should have received a copy of the Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0) License
//   - along with LichessHelper Extension.  If not, see <https://creativecommons.org/licenses/by-nc-nd/4.0/>.
(()=>{"use strict";{let o,r,t,e,a,s;const S=["roboto","poppins","caprasimo","playfair","merriweather","noto_sans","nunito","montserrat","pixelify","gabarito","roboto_condensed","inter"],E=["night_owl","purple_dark","kittens","ws_type","srl","modern"],x=["anime","dani_maccari","itchy","itchy2","marble","mom_still_loves_them","kiwen_suwi","pjaworski","cburnett","cburnett_jp","pjaworski_ice","pjaworski_metal","pjaworski_forest","pjaworski_bluelake","pjaworski_bluelake2","pjaworski_purple","pjaworski_pink","new_metropol","ancient_set","32bit_lucas312","letters","pjaworskim_mramor","pjaworskim_metal","pjaworskim_blue","pjaworski_muesli"],k=["anime","arcade","gray_eyes","peppermint","blackwhite","green2","polarizer","darkblue","purple","disa_board","middaysun","teal","disa_night","overheated_stain","webpunk","glass","paperice","wood","26brown","deepblue","losangeles","softlightblue","26dmblue","dmblue2","midblue","softpurple","autumn","field","nightindesert","someunix","bluenblack","iceberg","revo","twilight","dbhc","jelly","softbrown"],q=chrome||browser;function c(){(document.getElementById("board")||document.getElementById("board-single"))?.querySelector("canvas")&&location.reload()}function i(t){-1!==E.indexOf(t)&&m(`/assets/graphs/themes/${t}.css`,!0,t),E.filter(e=>e!==t).forEach(e=>document.getElementById(e)?.remove())}function d(t){-1!==S.indexOf(t)&&m(`/assets/graphs/fonts/${t}.css`,!0,t),S.filter(e=>e!==t).forEach(e=>document.getElementById(e)?.remove())}function m(e,r,a){fetch(q.runtime.getURL(e)).then(e=>e.text()).then(e=>{var t=document.getElementById(a),o=document.createElement("style");o.textContent=e,o.setAttribute("id",a),r&&!t?document.head.appendChild(o):!r&&t instanceof Node&&document.head.removeChild(t)}).catch(e=>{})}function u(e,t,o){var r=document.getElementById(o),a=document.createElement("style");a.textContent=e,a.setAttribute("id",o),t&&!r?document.head.appendChild(a):!t&&r instanceof Node&&document.head.removeChild(r)}q.storage.local.get("formState",e=>{e=e.formState.disabled?{show_aside:!0}:e.formState;i(e.theme),d(e.font)});let n;function p(t){clearInterval(e),t&&!n&&(e=setInterval(function(){var e=document.querySelector("cg-container");t&&e&&!n&&(n=!0,console.log('[LichessHelper]: Removed Board EL "wheel"'),e.addEventListener("wheel",function(e){e.stopPropagation()},!0))},20))}function _(o){function e(){var e=document.querySelector("section.mchat"),t=window.pageYOffset||document.documentElement.scrollTop;o&&5<t&&e&&window.scrollTo(0,0)}clearInterval(a),clearInterval(s),o?(a=setInterval(function(){document.querySelector("section.mchat")&&o&&!document.getElementById("prevent_scroll")&&(console.log('[LichessHelper]: Found Match Mode. Set 100vh Fix."'),m("/assets/graphs/prevent_scroll.css",!0,"prevent_scroll"))},20),s=setInterval(e,1e3),e()):m("/assets/graphs/prevent_scroll.css",!1,"prevent_scroll")}function h(e){clearInterval(o);var t=window.location.href&&window.location.href.includes("/home")||"https://chess.com"===window.location.href||"https://chess.com/"===window.location.href;e&&t?o=setInterval(function(){var e=document.querySelector(".tv-player-component"),t=document.querySelector(".layout-column-two").querySelectorAll(".v5-section");e&&(e.remove(),t)&&t.length&&t.forEach(e=>{e.querySelector('[href*="/member"].v5-header-name')&&e.remove(),e.querySelector('[href*="/tv"].v5-header-name')&&e.remove()})},200):clearInterval(o)}function g(e){clearInterval(r);var t=window.location.href&&window.location.href.includes("/play/")||window.location.href&&window.location.href.includes("/game/");e&&t?r=setInterval(function(){var e=document.querySelector(".toggle-custom-game-button");document.querySelector('[data-cy="time-selector-category-30"')||"More Time Controls"!=e?.innerText||e.click()},20):e||("Fewer Time Controls"==(t=document.querySelector(".toggle-custom-game-button"))?.innerText&&t.click(),clearInterval(r))}function b(o){var e=document.createElementNS("http://www.w3.org/2000/svg","svg"),t=o?"coordinates_inj coordinates_inj__flipped":"coordinates_inj coordinates_inj__normal";e.setAttribute("version","1.1"),e.setAttribute("class",t),e.setAttribute("viewBox","0 0 100 100");for(let t=0;t<8;t++){var r,a=document.createElementNS("http://www.w3.org/2000/svg","g");t%2!=0&&((r=document.createElement("text")).setAttribute("font-size","0"),r.setAttribute("transform","matrix(1 0 0 1 0 0)"),a.appendChild(r));for(let e=7;0<=e;e--){var s=document.createElementNS("http://www.w3.org/2000/svg","text");s.setAttribute("transform","matrix(1 0 0 1 "+(8.1+12.4*t)+" "+(11.5+12.4*e)+")"),s.setAttribute("font-size","3.4px"),s.textContent=o?String.fromCharCode(104-t)+(e+1):String.fromCharCode(97+t)+(8-e),a.appendChild(s)}e.appendChild(a)}return e}function f(e){clearInterval(t),u("coords {display: none!important}",e,"board_vis-l3"),e&&!document?.querySelectorAll("cg-board")[0]?.querySelector(".coordinates_inj")?t=setInterval(async function(){var e,t,o=document.querySelectorAll("cg-board");o?.length&&o[0]&&!o[0].querySelector(".coordinates_inj")&&(e=b(),t=b(!0),o[0].appendChild(e),o[0].appendChild(t))},20):e||clearInterval(t)}function y(e){if(e){let t=!1;e=document.createElement("div");function o(){document.exitFullscreen&&document.fullscreenElement?document?.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen()}e.innerHTML='<button class="fullscreen_pgl">Enter Full Screen</button><style>.fullscreen_pgl {position: fixed;  bottom: 0;  right: 10px;  z-index: 10;  border-radius: 0;    border-top-left-radius: 0px;    border-top-right-radius: 0px;  border: 1px solid #404040;  padding: 3px 6px;  background: linear-gradient(to bottom, hsl(37, 7%, 25%), hsl(37, 5%, 22%) 100%);  color: #ccc;  border-top-left-radius: 2px;  border-top-right-radius: 2px;  font-size: 0.96rem; opacity: 0.7; min-height: 26px; display: block;} .fullscreen_pgl:hover {opacity: 1}</style>',e.addEventListener("click",function(){var e=document.querySelector(".fullscreen_pgl");t?(e.innerHTML="Enter Full Screen",o()):(e.innerHTML="Exit Full Screen",(e=document.documentElement).requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen()),t=!t},!1),document.querySelector(".fullscreen_pgl")||document.querySelector("body").appendChild(e),document.addEventListener("fullscreenchange",function(){var e=document.querySelector(".fullscreen_pgl");!document.fullscreenElement&&t&&(e.innerHTML="Enter Full Screen",o(document.documentElement),t=!1)},!1)}else document.querySelectorAll(".fullscreen_pgl")?.forEach(e=>e.remove())}q.storage.local.onChanged.addListener((e,t)=>{e.formState&&e.formState.newValue&&e.formState.oldValue&&JSON.stringify({...e.formState.newValue})!==JSON.stringify({...e.formState.oldValue})&&(v({...e.formState.oldValue}),!1===e.formState.newValue.disable_board_scroll&&!0===e.formState.oldValue.disable_board_scroll||!0===e.formState.newValue.disabled&&!1===e.formState.oldValue.disabled||e.formState.newValue.board_100vh!==e.formState.oldValue.board_100vh)&&(console.log("[LichessHelper]: Reloading to apply settings."),location.reload())});let l=!1;function v(o){q.storage.local.get("formState",async e=>{var t=e.formState.disabled?{show_aside:!0}:e.formState;i(t.theme),d(t.font),async function(t,e,o){var r=JSON.parse(localStorage.getItem("boardOptionsCache"));!o&&r&&"arcade"!==r?.animationType&&"natural"!==r?.animationType&&await new Promise(e=>setTimeout(e,200)),t!==e&&o&&(c(),u("#board-single, #board {opacity: 0!important; transition: opacity 0ms linear 0ms!important}",!0,"board_l3_appear"),setTimeout(()=>{document.getElementById("board_l3_appear")?.remove()},100)),-1!==x.indexOf(t)&&m(`/assets/graphs/pieces/${t}.css`,!0,t),x.filter(e=>e!==t).forEach(e=>document.getElementById(e)?.remove())}(t.pieces,o.pieces,l),async function(t,e,o){var r=JSON.parse(localStorage.getItem("boardOptionsCache"));!o&&r&&"arcade"!==r?.animationType&&"natural"!==r?.animationType&&await new Promise(e=>setTimeout(e,200)),t!==e&&o&&(c(),u("#board-single, #board {opacity: 0!important; transition: opacity 0ms linear 0ms!important}",!0,"board_l3_appear"),setTimeout(()=>{document.getElementById("board_l3_appear")?.remove()},100)),-1!==k.indexOf(t)&&m(`/assets/graphs/boards/${t}.css`,!0,t),k.filter(e=>e!==t).forEach(e=>document.getElementById(e)?.remove())}(t.board,o.board,l),l||(l=!0,setTimeout(()=>{document.getElementById("board_l3_appear")?.remove()},200)),1==o?.disabled&&0==e?.formState?.disabled&&"boolean"==typeof o?.disabled&&"boolean"==typeof e?.formState?.disabled&&c(),document.body.style.transition="all 0s!important",document.documentElement.style.opacity=1,m("/assets/graphs/coor_each.css",t.coor_each,"coor_each"),m("/assets/graphs/block_images.css",t.block_images,"block_images"),m("/assets/graphs/disable_aboutme.css",t.disable_aboutme,"disable_aboutme"),m("/assets/graphs/board_100vh.css",t.board_100vh,"board_100vh"),m("/assets/graphs/aside_hide.css",!t.show_aside,"aside_hide"),m("/assets/graphs/aside_smaller.css",t.show_aside__smaller,"aside_smaller"),m("/assets/graphs/aside_grayscale.css",t.show_aside__grayscale,"aside_grayscale"),m("/assets/graphs/add_hyperbullet.css",t.add_hyperbullet,"add_hyperbullet"),m("/assets/graphs/coor_bigger.css",t.coor_bigger,"coor_bigger"),m("/assets/graphs/bigger_controls.css",t.bigger_controls,"bigger_controls"),m("/assets/graphs/disable_cursor.css",t.disable_cursor,"disable_cursor"),m("/assets/graphs/disable_chat.css",t.disable_chat,"disable_chat"),m("/assets/graphs/disable_chat_unless.css",t.disable_chat_unless,"disable_chat_unless"),m("/assets/graphs/single_resign.css",t.single_resign,"single_resign"),m("/assets/graphs/coor_each__less.css",t.coor_each__less,"coor_each__less"),m("/assets/graphs/focus_mode.css",t.focus_mode,"focus_mode"),m("/assets/graphs/modern_mode.css",t.modern_mode,"modern_mode"),m("/assets/graphs/hide_chat.css",t.hide_chat,"hide_chat"),f(t.coor_each),h(t.disable_stream),g(t.add_hyperbullet),y(t.add_fullscreen),p(t.disable_board_scroll),_(t.prevent_scroll)})}var w;(w=0)&&!isNaN(w)&&(document.body.style.opacity=0,setTimeout(()=>document.body.style.opacity=1,w)),document.addEventListener("DOMContentLoaded",v,!1),document.addEventListener("DOMContentLoaded",function(){u(".coordinates_inj {opacity: 0;} .coordinates_inj__flipped {display: none} #board-single, #board {transition: opacity 200ms ease 50ms}",!0,"BASE_STYLES"),u("#board-single, #board {opacity: 0!important; transition: opacity 0ms linear 0ms!important}",!0,"board_l3_appear"),setTimeout(()=>{u("cg-board {animation: none!important;}",!0,"anim_none_fix")},300)},!1)}})();