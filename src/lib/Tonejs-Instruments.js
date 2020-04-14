/**
* @fileoverview A sample library and quick-loader for tone.js
*
* @author N.P. Brosowsky (nbrosowsky@gmail.com)
* https://github.com/nbrosowsky/tonejs-instruments
*/

import Tone from 'tone'
import { NotesMap } from '@/config/notes'

let mapFile = (name) => {
  let file = ''
  NotesMap.forEach(note => {
    if (note.name == name) {
      file = note.file
    }
  })
  return file
}

var SampleLibrary = {
    minify: false,
    ext: '.[mp3|ogg]', // use setExt to change the extensions on all files // do not change this variable //
    // baseUrl: 'http://lc-SAs97Sjr.cn-n1.lcfile.com', // leancloud file
    baseUrl: '/static/samples/',
    list: ['bass-electric','bassoon','cello','clarinet','contrabass','flute','french-horn','guitar-acoustic','guitar-electric','guitar-nylon', 'harmonium','harp','organ','piano','saxophone','trombone','trumpet','tuba','violin','xylophone'],
    onload: null,

    setExt: function (newExt) {
        var i
        for (i = 0; i <= this.list.length - 1; i++) {
            for (var property in this[this.list[i]]) {
                this[this.list[i]][property] = this[this.list[i]][property].replace(this.ext, newExt)
            }
        }
        this.ext = newExt;
        return console.log("sample extensions set to " + this.ext)
    },

    load: function (arg) {
        var t, rt, i;
        (arg) ? t = arg: t = {};
        t.instruments = t.instruments || this.list;
        t.baseUrl = t.baseUrl || this.baseUrl;
        t.onload = t.onload || this.onload;

        // update extensions if arg given
        if (t.ext) {
            if (t.ext != this.ext) {
                this.setExt(t.ext)
            }
            t.ext = this.ext
        }

        rt = {};

        // if an array of instruments is passed...
        if (Array.isArray(t.instruments)) {
            for (i = 0; i <= t.instruments.length - 1; i++) {
                var newT = this[t.instruments[i]];
                //Minimize the number of samples to load
                if (this.minify === true || t.minify === true) {
                    var minBy = 1;
                    if (Object.keys(newT).length >= 17) {
                        minBy = 2
                    }
                    if (Object.keys(newT).length >= 33) {
                        minBy = 4
                    }
                    if (Object.keys(newT).length >= 49) {
                        minBy = 6
                    }

                    var filtered = Object.keys(newT).filter(function (_, i) {
                        return i % minBy != 0;
                    })
                    filtered.forEach(function (f) {
                        delete newT[f]
                    })

                }

                rt[t.instruments[i]] = new Tone.Sampler(
                    newT, {
                        baseUrl: t.baseUrl + t.instruments[i] + "/",
                        onload: t.onload
                    }
                )
            }

            return rt

            // if a single instrument name is passed...
        } else {
            newT = this[t.instruments];

            //Minimize the number of samples to load
            if (this.minify === true || t.minify === true) {
                minBy = 1;
                if (Object.keys(newT).length >= 17) {
                    minBy = 2
                }
                if (Object.keys(newT).length >= 33) {
                    minBy = 4
                }
                if (Object.keys(newT).length >= 49) {
                    minBy = 6
                }

                filtered = Object.keys(newT).filter(function (_, i) {
                    return i % minBy != 0;
                })
                filtered.forEach(function (f) {
                    delete newT[f]
                })
            }
            // cdn 路径适配
            // if (t.instruments == 'piano') {
            //     t.instruments = ''
            // }
            var s = new Tone.Sampler(
                newT, {
                    baseUrl: t.baseUrl + t.instruments + "/",
                    onload: t.onload
                }
            )
            return s
        }

    },

    'piano': {
        'A2': mapFile('A2'),
        'A3': mapFile('A3'),
        'A4': mapFile('A4'),
        'A5': mapFile('A5'),
        'A6': mapFile('A6'),

        'A#3': mapFile('A#3'),
        'A#4': mapFile('A#4'),
        'A#5': mapFile('A#5'),
        'A#6': mapFile('A#6'),
        'B2':  mapFile('B2'),
        'B3':  mapFile('B3'),
        'B4':  mapFile('B4'),
        'B5':  mapFile('B5'),
        'B6':  mapFile('B6'),
        'C2':  mapFile('C2'),
        'C3':  mapFile('C3'),
        'C4':  mapFile('C4'),
        'C5':  mapFile('C5'),
        'C6':  mapFile('C6'),
        'C7':  mapFile('C7'),
        'C#2': mapFile('C#2'),
        'C#3': mapFile('C#3'),
        'C#4': mapFile('C#4'),
        'C#5': mapFile('C#5'),
        'C#6': mapFile('C#6'),
        'D0':  mapFile('D0'),
        'D1':  mapFile('D1'),
        'D2':  mapFile('D2'),
        'D3':  mapFile('D3'),
        'D4':  mapFile('D4'),
        'D5':  mapFile('D5'),
        'D6':  mapFile('D6'),
        'D#2': mapFile('D#2'),
        'D#3': mapFile('D#3'),
        'D#4': mapFile('D#4'),
        'D#5': mapFile('D#5'),
        'D#6': mapFile('D#6'),
        'E2':  mapFile('E2'),
        'E3':  mapFile('E3'),
        'E4':  mapFile('E4'),
        'E5':  mapFile('E5'),
        'E6':  mapFile('E6'),
        'F2':  mapFile('F2'),
        'F3':  mapFile('F3'),
        'F4':  mapFile('F4'),
        'F5':  mapFile('F5'),
        'F6':  mapFile('F6'),
        'F#2': mapFile('F#2'),
        'F#3': mapFile('F#3'),
        'F#4': mapFile('F#4'),
        'F#5': mapFile('F#5'),
        'F#6': mapFile('F#6'),
        'G2':  mapFile('G2'),
        'G3':  mapFile('G3'),
        'G4':  mapFile('G4'),
        'G5':  mapFile('G5'),
        'G6':  mapFile('G6'),
        'G#2': mapFile('G#2'),
        'G#3': mapFile('G#3'),
        'G#4': mapFile('G#4'),
        'G#5': mapFile('G#5'),
        'G#6': mapFile('G#6')
    }
}

export default SampleLibrary