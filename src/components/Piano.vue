<style lang="less">
@images: "../assets/images/keyboard";
@import url('../assets/style/variable.less');
.component-autopiano { width: 74%; margin: auto; position: relative; color: #000;
  #audioEffectCanvas { display: none; }
  .piano-scroll-wrap { width: 100%; overflow: scroll; }
  .piano-wrap.visible { opacity: 1; }
  .piano-wrap { /*width: 90%;*/ margin: 20px auto; /*box-shadow: 5px 5px 20px 5px #888;*/ border-radius: 5px; position: relative; overflow: hidden; opacity: 0;
    .piano-band { width: 100%; height: 40px; line-height: 40px; background:#000;  box-shadow:inset 0px -1px 2px rgba(255,255,255,0.4),0 2px 3px rgba(0,0,0,0.4); border-width: 3px 2px 2px; border-style:solid; border-color: #555 #222 #111 #777; position: relative;
      .piano-band-img { width: 130px; height:100%; position: absolute; top: 0; left: 50%; transform: translateX(-50%); }
      .piano-tip { position: absolute; top: 50%; right: 20px; transform: translateY(-50%); color: #fff; font-size: 14px; }
    }
    .piano-key-wrap { width: 100%; height: 100%; overflow: hidden; position: relative; border-radius: 10px; background:url("@{images}/pressed_keyboard_full.png"); background-size: contain; background-repeat: no-repeat;
      .piano-key {
        &:hover { cursor: pointer; }
      }
      // .wkey { display: inline-block; width: 7.1015%; height: 99.75%margin-right: -.15rem; ; marg-leftin- 1005auto; background:url("@{images}/unpressed_ivory.png"); background-size: contain; background-repeat: no-repeat; border-radius: 0 0 5px 5px; position: relative;
      //   &:active { top: -1%; height: 99%;  background:transparent; }
      // }
      // .wkey-active { top: -1%; height: 99%; background: transparent;
      //   &:before { content:""; border-width:250px 5px 0px; border-style:solid; border-color:transparent; position: absolute; left: 0; bottom: 0; }
      //   &:after { content:""; border-width:250px 5px 0px; border-style:solid; border-color:transparent; position: absolute; right: 0; bottom: 0; }
      // }
      // .wkey-active.show { top: -1%; height: 99%; background: transparent; }



      .wkey-1 { display: inline-block; width: 7.1015%; height: 100%; margin-left: .05rem; margin-right: -.3rem; background:url("@{images}/unpressed_ivory.png"); background-size: 100%; background-repeat: no-repeat; border-radius: 0 0 5px 5px; position: relative; }
      .wkey-1.show { top: -1%; height: 99%;  background: transparent; }

      .wkey-2 { display: inline-block; width: 7.1015%; height: 100%; margin-right: -.2305rem; background:url("@{images}/unpressed_ivory.png"); background-size: 100%; background-repeat: no-repeat; border-radius: 0 0 5px 5px; position: relative; }
      .wkey-2.show { top: -1%; height: 99%;  background: transparent; }

      .wkey-3 { display: inline-block; width: 7.1015%; height: 100%; margin-left: -.015rem; background:url("@{images}/unpressed_ivory.png"); background-size: 100%; background-repeat: no-repeat; border-radius: 0 0 5px 5px; position: relative; }
      .wkey-3.show { top: -1%; height: 99%;  background: transparent; }
      
      .wkey-4 { display: inline-block; width: 7.1015%; height: 100%; margin-left: -.25rem; background:url("@{images}/unpressed_ivory.png"); background-size: 100%; background-repeat: no-repeat; border-radius: 0 0 5px 5px; position: relative; }
      .wkey-4.show { top: -1%; height: 99%;  background: transparent; }

      .wkey-5 { display: inline-block; width: 7.1015%; height: 100%; margin-left: -.25rem; background:url("@{images}/unpressed_ivory.png"); background-size: 100%; background-repeat: no-repeat; border-radius: 0 0 5px 5px; position: relative; }
      .wkey-5.show { top: -1%; height: 99%;  background: transparent; }

      .wkey-6 { display: inline-block; width: 7.1015%; height: 100%; margin-left: -.25rem; background:url("@{images}/unpressed_ivory.png"); background-size: 100%; background-repeat: no-repeat; border-radius: 0 0 5px 5px; position: relative; }
      .wkey-6.show { top: -1%; height: 99%;  background: transparent; }

      .wkey-7 { display: inline-block; width: 7.1015%; height: 100%; margin-left: -.25rem; background:url("@{images}/unpressed_ivory.png"); background-size: 100%; background-repeat: no-repeat; border-radius: 0 0 5px 5px; position: relative; }
      .wkey-7.show { top: -1%; height: 99%;  background: transparent; }

      .wkey-8 { display: inline-block; width: 7.1015%; height: 100%; margin-left: -.25rem; margin-right: -.2305rem; background:url("@{images}/unpressed_ivory.png"); background-size: 100%; background-repeat: no-repeat; border-radius: 0 0 5px 5px; position: relative; }
      .wkey-8.show { top: -1%; height: 99%;  background: transparent; }

      .wkey-9 { display: inline-block; width: 7.1015%; height: 100%; margin-right: -.2305rem; background:url("@{images}/unpressed_ivory.png"); background-size: 100%; background-repeat: no-repeat; border-radius: 0 0 5px 5px; position: relative; }
      .wkey-9.show { top: -1%; height: 99%;  background: transparent; }
      
      .wkey-10 { display: inline-block; width: 7.1015%; height: 100%; margin-right: -.25rem; margin-left: -0.05rem; background:url("@{images}/unpressed_ivory.png"); background-size: 100%; background-repeat: no-repeat; border-radius: 0 0 5px 5px; position: relative; }
      .wkey-10.show { top: -1%; height: 99%;  background: transparent; }

      .wkey-11 { display: inline-block; width: 7.1015%; height: 100%; margin-left: .55; margin-right: -.2505rem; background:url("@{images}/unpressed_ivory.png"); background-size: 100%; background-repeat: no-repeat; border-radius: 0 0 5px 5px; position: relative; }
      .wkey-11.show { top: -1%; height: 99%;  background: transparent; }

      .wkey-12 { display: inline-block; width: 7.1015%; height: 100%; margin-right: -.2305rem; background:url("@{images}/unpressed_ivory.png"); background-size: 100%; background-repeat: no-repeat; border-radius: 0 0 5px 5px; position: relative; }
      .wkey-12.show { top: -1%; height: 99%;  background: transparent; }

      .wkey-13 { display: inline-block; width: 7.1015%; height: 100%; margin-right: -.2305rem; background:url("@{images}/unpressed_ivory.png"); background-size: 100%; background-repeat: no-repeat; border-radius: 0 0 5px 5px; position: relative; }
      .wkey-13.show { top: -1%; height: 99%;  background: transparent; }

      .wkey-14 { display: inline-block; width: 7.1015%; height: 100%; margin-left: -.115rem; background:url("@{images}/unpressed_ivory.png"); background-size: 100%; background-repeat: no-repeat; border-radius: 0 0 5px 5px; position: relative; }
      .wkey-14.show { top: -1%; height: 99%;  background: transparent; }
      


      .bkey-c1 { display: inline-block; width: 10%; height: 68.5%; left: 4.05%; background:url("@{images}/super_dflat_gflat.png"); background-size: contain; background-repeat: no-repeat; /* border-color:#666 #222 #111 #555; border-radius:0 0 2px 2px; box-shadow:inset 0px -1px 2px rgba(255,255,255,0.4),0 2px 3px rgba(0,0,0,0.4); */ position: absolute; top: -0.25%; overflow: hidden; }
      .bkey-c1.show {display: inline-block; width: 10%; height: 68.5%; left: 4.05%; background:url("@{images}/super_dflat_gflat_pressed.png"); background-size: contain; background-repeat: no-repeat; /* height:101%; border-bottom-width:2px; box-shadow:inset 0px -1px 1px rgba(255,255,255,0.4),0 1px 0px rgba(0,0,0,0.8),0 2px 2px rgba(0,0,0,0.4),0 -1px 0px #000; */ position: absolute; }

      .bkey-d1 { display: inline-block; width: 10%; height: 68.5%; left: 12.35%; background:url("@{images}/super_bflat_eflat.png"); background-size: contain; background-repeat: no-repeat; /* border-color:#666 #222 #111 #555; border-radius:0 0 2px 2px; box-shadow:inset 0px -1px 2px rgba(255,255,255,0.4),0 2px 3px rgba(0,0,0,0.4); */ position: absolute; top: -0.25%; overflow: hidden; }
      .bkey-d1.show {display: inline-block; width: 10%; height: 68.5%; left: 12.35%; background:url("@{images}/super_bflat_eflat_pressed.png"); background-size: contain; background-repeat: no-repeat; /* height:101%; border-bottom-width:2px; box-shadow:inset 0px -1px 1px rgba(255,255,255,0.4),0 1px 0px rgba(0,0,0,0.8),0 2px 2px rgba(0,0,0,0.4),0 -1px 0px #000; */ position: absolute; }

      .bkey-f1 { display: inline-block; width: 10%; height: 68.5%; left: 25.35%; background:url("@{images}/super_dflat_gflat.png"); background-size: contain; background-repeat: no-repeat; /* border-color:#666 #222 #111 #555; border-radius:0 0 2px 2px; box-shadow:inset 0px -1px 2px rgba(255,255,255,0.4),0 2px 3px rgba(0,0,0,0.4); */ position: absolute; top: -0.25%; overflow: hidden; }
      .bkey-f1.show {display: inline-block; width: 10%; height: 68.5%; left: 25.35%; background:url("@{images}/super_dflat_gflat_pressed.png"); background-size: contain; background-repeat: no-repeat; /* height:101%; border-bottom-width:2px; box-shadow:inset 0px -1px 1px rgba(255,255,255,0.4),0 1px 0px rgba(0,0,0,0.8),0 2px 2px rgba(0,0,0,0.4),0 -1px 0px #000; */ position: absolute; }

      .bkey-g1 { display: inline-block; width: 10%; height: 68.5%; left: 33.15%; background:url("@{images}/super_aflat.png"); background-size: contain; background-repeat: no-repeat; /* border-color:#666 #222 #111 #555; border-radius:0 0 2px 2px; box-shadow:inset 0px -1px 2px rgba(255,255,255,0.4),0 2px 3px rgba(0,0,0,0.4); */ position: absolute; top: -0.25%; overflow: hidden; }
      .bkey-g1.show {display: inline-block; width: 10%; height: 68.5%; left: 33.15%; background:url("@{images}/super_aflat_pressed.png"); background-size: contain; background-repeat: no-repeat; /* height:101%; border-bottom-width:2px; box-shadow:inset 0px -1px 1px rgba(255,255,255,0.4),0 1px 0px rgba(0,0,0,0.8),0 2px 2px rgba(0,0,0,0.4),0 -1px 0px #000; */ position: absolute; }

      .bkey-a1 { display: inline-block; width: 10%; height: 68.5%; left: 40.95%; background:url("@{images}/super_bflat_eflat.png"); background-size: contain; background-repeat: no-repeat; /* border-color:#666 #222 #111 #555; border-radius:0 0 2px 2px; box-shadow:inset 0px -1px 2px rgba(255,255,255,0.4),0 2px 3px rgba(0,0,0,0.4); */ position: absolute; top: -0.25%; overflow: hidden; }
      .bkey-a1.show {display: inline-block; width: 10%; height: 68.5%; left: 40.95%; background:url("@{images}/super_bflat_eflat_pressed.png"); background-size: contain; background-repeat: no-repeat; /* height:101%; border-bottom-width:2px; box-shadow:inset 0px -1px 1px rgba(255,255,255,0.4),0 1px 0px rgba(0,0,0,0.8),0 2px 2px rgba(0,0,0,0.4),0 -1px 0px #000; */ position: absolute; }


      .bkey-c2 { display: inline-block; width: 10%; height: 68.5%; left: 54.05%; background:url("@{images}/super_dflat_gflat.png"); background-size: contain; background-repeat: no-repeat; /* border-color:#666 #222 #111 #555; border-radius:0 0 2px 2px; box-shadow:inset 0px -1px 2px rgba(255,255,255,0.4),0 2px 3px rgba(0,0,0,0.4); */ position: absolute; top: -0.25%; overflow: hidden; }
      .bkey-c2.show {display: inline-block; width: 10%; height: 68.5%; left: 54.05%; background:url("@{images}/super_dflat_gflat_pressed.png"); background-size: contain; background-repeat: no-repeat; /* height:101%; border-bottom-width:2px; box-shadow:inset 0px -1px 1px rgba(255,255,255,0.4),0 1px 0px rgba(0,0,0,0.8),0 2px 2px rgba(0,0,0,0.4),0 -1px 0px #000; */ position: absolute; }

      .bkey-d2 { display: inline-block; width: 10%; height: 68.5%; left: 62.35%; background:url("@{images}/super_bflat_eflat.png"); background-size: contain; background-repeat: no-repeat; /* border-color:#666 #222 #111 #555; border-radius:0 0 2px 2px; box-shadow:inset 0px -1px 2px rgba(255,255,255,0.4),0 2px 3px rgba(0,0,0,0.4); */ position: absolute; top: -0.25%; overflow: hidden; }
      .bkey-d2.show {display: inline-block; width: 10%; height: 68.5%; left: 62.35%; background:url("@{images}/super_bflat_eflat_pressed.png"); background-size: contain; background-repeat: no-repeat; /* height:101%; border-bottom-width:2px; box-shadow:inset 0px -1px 1px rgba(255,255,255,0.4),0 1px 0px rgba(0,0,0,0.8),0 2px 2px rgba(0,0,0,0.4),0 -1px 0px #000; */ position: absolute; }

      .bkey-f2 { display: inline-block; width: 10%; height: 68.5%; left: 75.35%; background:url("@{images}/super_dflat_gflat.png"); background-size: contain; background-repeat: no-repeat; /* border-color:#666 #222 #111 #555; border-radius:0 0 2px 2px; box-shadow:inset 0px -1px 2px rgba(255,255,255,0.4),0 2px 3px rgba(0,0,0,0.4); */ position: absolute; top: -0.25%; overflow: hidden; }
      .bkey-f2.show {display: inline-block; width: 10%; height: 68.5%; left: 75.35%; background:url("@{images}/super_dflat_gflat_pressed.png"); background-size: contain; background-repeat: no-repeat; /* height:101%; border-bottom-width:2px; box-shadow:inset 0px -1px 1px rgba(255,255,255,0.4),0 1px 0px rgba(0,0,0,0.8),0 2px 2px rgba(0,0,0,0.4),0 -1px 0px #000; */ position: absolute; }

      .bkey-g2 { display: inline-block; width: 10%; height: 68.5%; left: 83.15%; background:url("@{images}/super_aflat.png"); background-size: contain; background-repeat: no-repeat; /* border-color:#666 #222 #111 #555; border-radius:0 0 2px 2px; box-shadow:inset 0px -1px 2px rgba(255,255,255,0.4),0 2px 3px rgba(0,0,0,0.4); */ position: absolute; top: -0.25%; overflow: hidden; }
      .bkey-g2.show {display: inline-block; width: 10%; height: 68.5%; left: 83.15%; background:url("@{images}/super_aflat_pressed.png"); background-size: contain; background-repeat: no-repeat; /* height:101%; border-bottom-width:2px; box-shadow:inset 0px -1px 1px rgba(255,255,255,0.4),0 1px 0px rgba(0,0,0,0.8),0 2px 2px rgba(0,0,0,0.4),0 -1px 0px #000; */ position: absolute; }

      .bkey-a2 { display: inline-block; width: 10%; height: 68.5%; left: 90.85%; background:url("@{images}/super_bflat_eflat.png"); background-size: contain; background-repeat: no-repeat; /* border-color:#666 #222 #111 #555; border-radius:0 0 2px 2px; box-shadow:inset 0px -1px 2px rgba(255,255,255,0.4),0 2px 3px rgba(0,0,0,0.4); */ position: absolute; top: -0.25%; overflow: hidden; }
      .bkey-a2.show {display: inline-block; width: 10%; height: 68.5%; left: 90.85%; background:url("@{images}/super_dflat_gflat_pressed.png"); background-size: contain; background-repeat: no-repeat; /* height:101%; border-bottom-width:2px; box-shadow:inset 0px -1px 1px rgba(255,255,255,0.4),0 1px 0px rgba(0,0,0,0.8),0 2px 2px rgba(0,0,0,0.4),0 -1px 0px #000; */ position: absolute; }


      //.wkey-disable { display: none; }
      .wkey.auto-key-active { /* box-shadow:0 2px 2px rgba(0,0,0,0.4); top: 0%; height: 100%; */ background: @c-yellow !important;
        &:before { content:""; /*border-width:250px 5px 0px; */ border-style:solid; border-color:transparent; position: absolute; top: 0; left: 0; }
        &:after { content:""; /*border-width:250px 5px 0px; */ border-style:solid; border-color:transparent; position: absolute; right: 0; left: 0; }
      }
    }
  }
}
</style>

<template>
  <div class="component-autopiano" ref="PianoComponent">
    <div class="piano-scroll-wrap">
      <div class="piano-wrap responsive-section-a" :class="{'visible': pianoShow}">

        <div class="piano-key-wrap">
          <!--<div class="piano-key wkey" v-for="note in Notes" :key="note.keyCode" :data-keyCode="note.keyCode"
            :data-name="note.name" v-if="note.type=='white'" @click.stop="clickPianoKey($event, note.keyCode)">
          </div>-->

          <div class="piano-key wkey-1" v-for="note in Notes" :key="note.keyCode" :data-keyCode="note.keyCode"
            :data-name="note.name" v-if="note.type=='white' && note.id == 8" 
            :class="{'show': isW1Active}" @click.stop="clickPianoKeyW1($event, note.keyCode)">
          </div>

          <div class="piano-key wkey-2" v-for="note in Notes" :key="note.keyCode" :data-keyCode="note.keyCode"
            :data-name="note.name" v-if="note.type=='white' && note.id == 9" 
            :class="{'show': isW2Active}" @click.stop="clickPianoKeyW2($event, note.keyCode)">
          </div>

          <div class="piano-key wkey-3" v-for="note in Notes" :key="note.keyCode" :data-keyCode="note.keyCode"
            :data-name="note.name" v-if="note.type=='white' && note.id == 10" 
            :class="{'show': isW3Active}" @click.stop="clickPianoKeyW3($event, note.keyCode)">
          </div>

          <div class="piano-key wkey-4" v-for="note in Notes" :key="note.keyCode" :data-keyCode="note.keyCode"
            :data-name="note.name" v-if="note.type=='white' && note.id == 26" 
            :class="{'show': isW4Active}" @click.stop="clickPianoKeyW4($event, note.keyCode)">
          </div>

          <div class="piano-key wkey-5" v-for="note in Notes" :key="note.keyCode" :data-keyCode="note.keyCode"
            :data-name="note.name" v-if="note.type=='white' && note.id == 32" 
            :class="{'show': isW5Active}" @click.stop="clickPianoKeyW5($event, note.keyCode)">
          </div>

          <div class="piano-key wkey-6" v-for="note in Notes" :key="note.keyCode" :data-keyCode="note.keyCode"
            :data-name="note.name" v-if="note.type=='white' && note.id == 14" 
            :class="{'show': isW6Active}" @click.stop="clickPianoKeyW6($event, note.keyCode)">
          </div>

          <div class="piano-key wkey-7" v-for="note in Notes" :key="note.keyCode" :data-keyCode="note.keyCode"
            :data-name="note.name" v-if="note.type=='white' && note.id == 27" 
            :class="{'show': isW7Active}" @click.stop="clickPianoKeyW7($event, note.keyCode)">
          </div>

          <div class="piano-key wkey-8" v-for="note in Notes" :key="note.keyCode" :data-keyCode="note.keyCode"
            :data-name="note.name" v-if="note.type=='white' && note.id == 29" 
            :class="{'show': isW8Active}" @click.stop="clickPianoKeyW8($event, note.keyCode)">
          </div>

          <div class="piano-key wkey-9" v-for="note in Notes" :key="note.keyCode" :data-keyCode="note.keyCode"
            :data-name="note.name" v-if="note.type=='white' && note.id == 34" 
            :class="{'show': isW9Active}" @click.stop="clickPianoKeyW9($event, note.keyCode)">
          </div>

          <div class="piano-key wkey-10" v-for="note in Notes" :key="note.keyCode" :data-keyCode="note.keyCode"
            :data-name="note.name" v-if="note.type=='white' && note.id == 30" 
            :class="{'show': isW10Active}" @click.stop="clickPianoKeyW10($event, note.keyCode)">
          </div>

          <div class="piano-key wkey-11" v-for="note in Notes" :key="note.keyCode" :data-keyCode="note.keyCode"
            :data-name="note.name" v-if="note.type=='white' && note.id == 18" 
            :class="{'show': isW11Active}" @click.stop="clickPianoKeyW11($event, note.keyCode)">
          </div>

          <div class="piano-key wkey-12" v-for="note in Notes" :key="note.keyCode" :data-keyCode="note.keyCode"
            :data-name="note.name" v-if="note.type=='white' && note.id == 24" 
            :class="{'show': isW12Active}" @click.stop="clickPianoKeyW12($event, note.keyCode)">
          </div>

          <div class="piano-key wkey-13" v-for="note in Notes" :key="note.keyCode" :data-keyCode="note.keyCode"
            :data-name="note.name" v-if="note.type=='white' && note.id == 25" 
            :class="{'show': isW13Active}" @click.stop="clickPianoKeyW13($event, note.keyCode)">
          </div>

          <div class="piano-key wkey-14" v-for="note in Notes" :key="note.keyCode" :data-keyCode="note.keyCode"
            :data-name="note.name" v-if="note.type=='white' && note.id == 28" 
            :class="{'show': isW14Active}" @click.stop="clickPianoKeyW14($event, note.keyCode)">
          </div>
          
          
            <div class="piano-key bkey-c1" v-for="note in Notes" :key="note.keyCode" :data-keyCode="note.keyCode"
              :data-name="note.name" v-if="note.type=='black' && note.id == 36"
              :class="{'show': isc1Active}" @click.stop="clickPianoKeyc1($event, note.keyCode)">
            </div>

            <div class="piano-key bkey-d1" v-for="note in Notes" :key="note.keyCode" :data-keyCode="note.keyCode"
              :data-name="note.name" v-if="note.type=='black' && note.id == 37"
              :class="{'show': isd1Active}" @click.stop="clickPianoKeyd1($event, note.keyCode)">
            </div>

            <div class="piano-key bkey-f1" v-for="note in Notes" :key="note.keyCode" :data-keyCode="note.keyCode"
              :data-name="note.name" v-if="note.type=='black' && note.id == 38"
              :class="{'show': isf1Active}" @click.stop="clickPianoKeyf1($event, note.keyCode)">
            </div>

            <div class="piano-key bkey-g1" v-for="note in Notes" :key="note.keyCode" :data-keyCode="note.keyCode"
              :data-name="note.name" v-if="note.type=='black' && note.id == 39"
              :class="{'show': isg1Active}" @click.stop="clickPianoKeyg1($event, note.keyCode)">
            </div>

            <div class="piano-key bkey-a1" v-for="note in Notes" :key="note.keyCode" :data-keyCode="note.keyCode"
              :data-name="note.name" v-if="note.type=='black' && note.id == 40"
              :class="{'show': isa1Active}" @click.stop="clickPianoKeya1($event, note.keyCode)">
            </div>

            <div class="piano-key bkey-c2" v-for="note in Notes" :key="note.keyCode" :data-keyCode="note.keyCode"
              :data-name="note.name" v-if="note.type=='black' && note.id == 41"
              :class="{'show': isc2Active}" @click.stop="clickPianoKeyc2($event, note.keyCode)">
            </div>

            <div class="piano-key bkey-d2" v-for="note in Notes" :key="note.keyCode" :data-keyCode="note.keyCode"
              :data-name="note.name" v-if="note.type=='black' && note.id == 42"
              :class="{'show': isd2Active}" @click.stop="clickPianoKeyd2($event, note.keyCode)">
            </div>

            <div class="piano-key bkey-f2" v-for="note in Notes" :key="note.keyCode" :data-keyCode="note.keyCode"
              :data-name="note.name" v-if="note.type=='black' && note.id == 43"
              :class="{'show': isf2Active}" @click.stop="clickPianoKeyf2($event, note.keyCode)">
            </div>

            <div class="piano-key bkey-g2" v-for="note in Notes" :key="note.keyCode" :data-keyCode="note.keyCode"
              :data-name="note.name" v-if="note.type=='black' && note.id == 44"
              :class="{'show': isg2Active}" @click.stop="clickPianoKeyg2($event, note.keyCode)">
            </div>

            <div class="piano-key bkey-a2" v-for="note in Notes" :key="note.keyCode" :data-keyCode="note.keyCode"
              :data-name="note.name" v-if="note.type=='black' && note.id == 45"
              :class="{'show': isa2Active}" @click.stop="clickPianoKeya2($event, note.keyCode)">
            </div>

        </div>
      </div>
    </div>

    <canvas id="audioEffectCanvas" ref="audioEffectCanvas">您的浏览器不支持<pre>Canvas</pre>。请升级到最新版的chrome、firefox、edge等浏览器。</canvas>

  </div>
</template>

<script>
import Vue from 'vue'
import Tone from 'tone'
import Observe from 'observe'
import { Notes, OBEvent } from 'config'
import SmapleLibrary from '@/lib/Tonejs-Instruments'
import { debounce } from '@/lib/wutils'
import pianoAutoPlayMixin from '@/mixins/pianoAutoPlayMixin'
import xmlAutoPlayMixin from '@/mixins/xmlAutoPlayMixin'
import midiAutoPlayMixin from '@/mixins/midiAutoPlayMixin'

let noteSet = new Set();

export default {
  name: 'Piano',
  mixins: [pianoAutoPlayMixin, xmlAutoPlayMixin, midiAutoPlayMixin],
  components: {},
  data() {
    return {
      DEV: false,
      pianoShow: false,
      bandImg: require('../assets/images/band.png'),
      enableBlackKey: false,
      showKeyName: true,
      showNoteName: false,
      Notes: Notes,
      synth: null,
      keydownTimer: null,
      keyLock: false,
      lastKeyCode: '',
      lastKeyTime: 0,
      isc1Active: false,
      isd1Active: false,
      isf1Active: false,
      isg1Active: false,
      isa1Active: false,
      isc2Active: false,
      isd2Active: false,
      isf2Active: false,
      isg2Active: false,
      isa2Active: false,
      isW1Active: false,
      isW2Active: false,
      isW3Active: false,
      isW4Active: false,
      isW5Active: false,
      isW6Active: false,
      isW7Active: false,
      isW8Active: false,
      isW9Active: false,
      isW10Active: false,
      isW11Active: false,
      isW12Active: false,
      isW13Active: false,
      isW14Active: false,

    }
  },
  mounted() {
    this.initPiano()
  },
  beforeDestroy() {
    this.keydownTimer = null
  },
  methods: {
    // 钢琴初始化
    async initPiano() {
      setTimeout(() => {
        this.computeEleSize()
        this.pianoShow = true
      }, 300)
      this.bindKeyBoradEvent()
      this.setListener()
      this.synth = SmapleLibrary.load({
        instruments: "piano"
      }).toMaster()
      // this.synth = new Tone.PolySynth( 10 ).toMaster()
    },
    computeEleSize() {
      let wkey_width = $('.piano-key-wrap').width() / 15;
      let wkey_height = wkey_width * 5.80;
      //let bkey_height = wkey_height * 0.675;
      $('.piano-key-wrap').height(wkey_height);
      //$('.bkey').height(bkey_height);
    },
    setListener() {
      window.onresize = this.computeEleSize
      window.onorientationchange = this.computeEleSize
      // 数字简谱自动播放
      Observe.$on(OBEvent.AUTO_PLAY_NUM_SCORE, (scorename) => {
        this.playScoreByName(scorename)
      })
      // XML乐谱自动播放
      Observe.$on(OBEvent.AUTO_PLAY_XML_SCORE, (musicScore) => {
        this.addToPlayQueue(musicScore)
        // try {
        //   this.playXMLScore(musicScore)
        // } catch (e) {
        //   console.log(e)
        // }
      })
      // MIDI 自动播放
      Observe.$on(OBEvent.AUTO_PLAY_MIDI, (midiUrl) => {
        this.loadMidiAndPlay(midiUrl)
      })
      // 暂停自动播放
      Observe.$on(OBEvent.STOP_AUTO_PLAY, (scoreItem) => {
        this.pauseAutoPlay(scoreItem)
        this.pauseXMLPlay()
        this.pauseXMLPlay()
        this.stopMidiPlay()
      })
    },
    getNoteByKeyCode(keyCode) {
      // 改为更高性能的写法
      let target
      let len = this.Notes.length || 0
      for (let i = 0; i < len; i++) {
        let note = this.Notes[i]
        if (note.keyCode == keyCode) {
          target = note
          break
        }
      }
      return target
    },
    getNoteByName(name = 'C4') {
      // 改为更高性能的写法
      let target
      let len = this.Notes.length || 0
      for (let i = 0; i < len; i++) {
        let note = this.Notes[i]
        if (note.name == name) {
          target = note
          break
        }
      }
      return target
    },
    // 键盘操作 核心代码
    bindKeyBoradEvent() {
      const ShiftKeyCode = 16
      document.addEventListener('keydown', (e) => {
        let keyCode = e.keyCode;
        if (this.DEV) console.log('keydown', keyCode);
        // 按住Shfit键，则启用黑色按键
        if (keyCode == ShiftKeyCode) {
          this.enableBlackKey = true
        }
        if (this.enableBlackKey) keyCode = 'b' + keyCode
        if (keyCode == this.lastKeyCode) {
          // 连续触发同一个键时，应节流 + 延音
          if (!this.keyLock) {
            this.playNoteByKeyCode(keyCode)
            // 这里应该延音，解决中...
            this.lastKeyCode = keyCode
            this.keyLock = true
          }
          if (this.keydownTimer) {
            clearTimeout(this.keydownTimer)
            this.keydownTimer = null
          }
          this.keydownTimer = setTimeout(() => {
            this.keyLock = false
          }, 120)
        } else {
          this.playNoteByKeyCode(keyCode)
          this.lastKeyCode = keyCode
        }
      }, false)

      document.addEventListener('keyup', (e) => {
        // console.log('keyup');
        let keyCode = e.keyCode;
        // 松开Shfit键，则禁用黑色按键
        if (keyCode == ShiftKeyCode) {
          this.enableBlackKey = false;
        }
        $(`.wkey`).removeClass('wkey-active')
        $(`.bkey`).removeClass('bkey-active')
      }, false)
    },


    clickPianoKeyW1(e, keyCode) {
      let pressedNote = this.getNoteByKeyCode(keyCode)
      if (pressedNote) {
        this.playNote(pressedNote.name)
        this.isW1Active = !this.isW1Active;
        console.log(pressedNote.name)
      }
    },

    clickPianoKeyW2(e, keyCode) {
      let pressedNote = this.getNoteByKeyCode(keyCode)
      if (pressedNote) {
        this.playNote(pressedNote.name)
        this.isW2Active = !this.isW2Active;
        console.log(pressedNote.name)
      }
    },

    clickPianoKeyW3(e, keyCode) {
      let pressedNote = this.getNoteByKeyCode(keyCode)
      if (pressedNote) {
        this.playNote(pressedNote.name)
        this.isW3Active = !this.isW3Active;
        console.log(name)
        noteSet.add(name);
      }
    },

    clickPianoKeyW4(e, keyCode) {
      let pressedNote = this.getNoteByKeyCode(keyCode)
      if (pressedNote) {
        this.playNote(pressedNote.name)
        this.isW4Active = !this.isW4Active;
        console.log(name)
        noteSet.add(name);
      }
    },

    clickPianoKeyW5(e, keyCode) {
      let pressedNote = this.getNoteByKeyCode(keyCode)
      if (pressedNote) {
        this.playNote(pressedNote.name)
        this.isW5Active = !this.isW5Active;
        console.log(name)
        noteSet.add(name);
      }
    },

    clickPianoKeyW6(e, keyCode) {
      let pressedNote = this.getNoteByKeyCode(keyCode)
      if (pressedNote) {
        this.playNote(pressedNote.name)
        this.isW6Active = !this.isW6Active;
        console.log(name)
        noteSet.add(name);
      }
    },

    clickPianoKeyW7(e, keyCode) {
      let pressedNote = this.getNoteByKeyCode(keyCode)
      if (pressedNote) {
        this.playNote(pressedNote.name)
        this.isW7Active = !this.isW7Active;
        console.log(name)
        noteSet.add(name);
      }
    },

    clickPianoKeyW8(e, keyCode) {
      let pressedNote = this.getNoteByKeyCode(keyCode)
      if (pressedNote) {
        this.playNote(pressedNote.name)
        this.isW8Active = !this.isW8Active;
        console.log(name)
        noteSet.add(name);
      }
    },

    clickPianoKeyW9(e, keyCode) {
      let pressedNote = this.getNoteByKeyCode(keyCode)
      if (pressedNote) {
        this.playNote(pressedNote.name)
        this.isW9Active = !this.isW9Active;
        console.log(name)
        noteSet.add(name);
      }
    },

    clickPianoKeyW10(e, keyCode) {
      let pressedNote = this.getNoteByKeyCode(keyCode)
      if (pressedNote) {
        this.playNote(pressedNote.name)
        this.isW10Active = !this.isW10Active;
        console.log(name)
        noteSet.add(name);
      }
    },

    clickPianoKeyW11(e, keyCode) {
      let pressedNote = this.getNoteByKeyCode(keyCode)
      if (pressedNote) {
        this.playNote(pressedNote.name)
        this.isW11Active = !this.isW11Active;
        console.log(name)
        noteSet.add(name);
      }
    },

    clickPianoKeyW12(e, keyCode) {
      let pressedNote = this.getNoteByKeyCode(keyCode)
      if (pressedNote) {
        this.playNote(pressedNote.name)
        this.isW12Active = !this.isW12Active;
        console.log(name)
        noteSet.add(name);
      }
    },

    clickPianoKeyW13(e, keyCode) {
      let pressedNote = this.getNoteByKeyCode(keyCode)
      if (pressedNote) {
        this.playNote(pressedNote.name)
        this.isW13Active = !this.isW13Active;
        console.log(name)
        noteSet.add(name);
      }
    },

    clickPianoKeyW14(e, keyCode) {
      let pressedNote = this.getNoteByKeyCode(keyCode)
      if (pressedNote) {
        this.playNote(pressedNote.name)
        this.isW14Active = !this.isW14Active;
        console.log(name)
        noteSet.add(name);
      }
    },

    clickPianoKeyc1(e, keyCode) {
      let pressedNote = this.getNoteByKeyCode(keyCode)
      if (pressedNote) {
        this.playNote(pressedNote.name)
        this.isc1Active = !this.isc1Active;
        console.log(name)
      }
    },

    clickPianoKeyd1(e, keyCode) {
      let pressedNote = this.getNoteByKeyCode(keyCode)
      if (pressedNote) {
        this.playNote(pressedNote.name)
        this.isd1Active = !this.isd1Active;
        console.log(name)
      }
    },

    clickPianoKeyf1(e, keyCode) {
      let pressedNote = this.getNoteByKeyCode(keyCode)
      if (pressedNote) {
        this.playNote(pressedNote.name)
        this.isf1Active = !this.isf1Active;
        console.log(name)
      }
    },

    clickPianoKeyg1(e, keyCode) {
      let pressedNote = this.getNoteByKeyCode(keyCode)
      if (pressedNote) {
        this.playNote(pressedNote.name)
        this.isg1Active = !this.isg1Active;
        console.log(name)
      }
    },

    clickPianoKeya1(e, keyCode) {
      let pressedNote = this.getNoteByKeyCode(keyCode)
      if (pressedNote) {
        this.playNote(pressedNote.name)
        this.isa1Active = !this.isa1Active;
        console.log(name)
      }
    },

    clickPianoKeyc2(e, keyCode) {
      let pressedNote = this.getNoteByKeyCode(keyCode)
      if (pressedNote) {
        this.playNote(pressedNote.name)
        this.isc2Active = !this.isc2Active;
        console.log(name)
      }
    },

    clickPianoKeyd2(e, keyCode) {
      let pressedNote = this.getNoteByKeyCode(keyCode)
      if (pressedNote) {
        this.playNote(pressedNote.name)
        this.isd2Active = !this.isd2Active;
        console.log(name)
      }
    },

    clickPianoKeyf2(e, keyCode) {
      let pressedNote = this.getNoteByKeyCode(keyCode)
      if (pressedNote) {
        this.playNote(pressedNote.name)
        this.isf2Active = !this.isf2Active;
        console.log(name)
      }
    },

    clickPianoKeyg2(e, keyCode) {
      let pressedNote = this.getNoteByKeyCode(keyCode)
      if (pressedNote) {
        this.playNote(pressedNote.name)
        this.isg2Active = !this.isg2Active;
        console.log(name)
      }
    },

    clickPianoKeya2(e, keyCode) {
      let pressedNote = this.getNoteByKeyCode(keyCode)
      if (pressedNote) {
        this.playNote(pressedNote.name)
        this.isa2Active = !this.isa2Active;
        console.log(name)
      }
    },

    playNoteByKeyCode(keyCode) {
      let pressedNote = this.getNoteByKeyCode(keyCode)
      if (pressedNote) {
        this.playNote(pressedNote.name)
        let keyType = pressedNote.type;
        if (keyType == 'white') {
          $(`[data-keyCode=${pressedNote.keyCode}]`).addClass('wkey-active');
        } else if (keyType == 'black') {
          $(`[data-keyCode=${pressedNote.keyCode}]`).addClass('bkey-active');
        }
      }
    },
    // 触发单个音符播放
    playNote(notename = 'C4', duration = '1n') {
      if (!this.synth) return
      try {
        this.synth.triggerAttackRelease(notename, duration);
      } catch (e) {}
    }
  }
}
</script>