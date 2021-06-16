/* Adblock */
#detect-adblock-zone{width:100%;z-index:99;position:fixed;bottom:0;}
#detect-adblock{background:#ffffff;border-left:4px solid #ed1b24;color:#000000;text-align:center;padding:10px 20px;position:relative;bottom:-150px;opacity:0;font-size:100%;line-height:1.5em;border-radius:5px;width:100%;max-width:800px;height:auto;z-index:99;box-shadow:0 5px 15px rgba(0,0,0,0.5);margin:0 auto;}
#detect-adblock p{margin:0}
#detect-adblock.show{pointer-events:auto;opacity:1;bottom:0;}
.detect-adblock-note{text-decoration:underline;}
.detect-adblock-title{text-decoration:underline;font-weight:700;font-size:15px;animation-name:blinker;animation-duration:3s;animation-timing-function:linear;animation-iteration-count:infinite;}
.close-detect-adblock:hover{color:#1C90F3;box-shadow:0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);transform:scale(1,1);}
#detect-adblock.show{animation:detect-adblock-anim ease-out 1s;animation-iteration-count:1;transform-origin:50% 50%;-webkit-animation:detect-adblock-anim ease-out 1s;-webkit-animation-iteration-count:1;-webkit-transform-origin:50% 50%;-moz-animation:detect-adblock-anim ease-out 1s;-moz-animation-iteration-count:1;-moz-transform-origin:50% 50%;-o-animation:detect-adblock-anim ease-out 1s;-o-animation-iteration-count:1;-o-transform-origin:50% 50%;-ms-animation:detect-adblock-anim ease-out 1s;-ms-animation-iteration-count:1;-ms-transform-origin:50% 50%}
.close-detect-adblock{background:#fff;color:#E23A3A;text-align:center;position:absolute;top:-15px;right:5%;font-size:24px;cursor:pointer;width:30px;height:30px;line-height:30px;border-radius:100%;transition:all 0.3s cubic-bezier(.25,.8,.25,1);box-shadow:0 1px 3px rgba(0,0,0,0.12),0 1px 2px rgba(0,0,0,0.24)}
@keyframes detect-adblock-anim{0%{opacity:0.3;transform:translate(0px,80px)}100%{opacity:1;transform:translate(0px,0px)}}
@keyframes blinker{0%{opacity:1.0;}50%{opacity:0.0;}100%{opacity:1.0;}}
@media only screen and (max-width:640px){
#detect-adblock-zone,#detect-adblock,.close-detect-adblock{display:none;}}
