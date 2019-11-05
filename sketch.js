let osc
let osc2
let osc3
let osc4
let osc5
let osc6
let osc7
let osc8
let osc9
let osc10
let osc11
let osc12
let osc13
let osc14
let osc15
let osc16
let osc17
let osc18
let osc19
let osc20
let osc21
let osc22
let osc23
let osc24
let osc25
let osc26
let env
let frequency = 50
let amplu = 40
let noise
let a = 0.1
let b = 0.1
let c = 0.2
let d = 0.5
let osc_type = 'sawtooth'
let opacity = 0
let c1 = 255
let c2 = 200
let c3 = 70
let rev = 0.5
let x = 750
let gb = -10
let sj = 70
let note_indicator = 0
let clr_background = 0
let clear = 0
let bl = 300
let beatstopper = 0
let square_time
let triangle_time
let sine_time
let sawtooth_time


    let am = 110.0
    let as = 116.5
    let bm = 123.5
    let cm = 130.8
    let cs = 138.6
    let dm = 146.8
    let ds = 155.6
    let em = 164.8
    let fm = 174.6
    let fs = 185.0
    let gm = 196.0
    let gs = 207.7
    let am2 = 220
    let as2 = 233.1
    let bm2 = 246.9
    let cm2 = 261.6
    let cs2 = 277.2
    let dm2 = 293.7
    let ds2 = 311.1
    let em2 = 329.6
    let fm2 = 349.2
    let fs2 = 370.0
    let gm2 = 392.0
    let gs2 = 415.3
    let am3 = 440.0
    let as3 = 466.2
    let yb = true
    let rdm_bk = 0

    let b1 = bl
    let b2 = bl
    let b3 = bl
    let b4 = bl
    let b5 = bl
    let b6 = bl
    let b7 = bl
    let b8 = bl
    let b9 = bl
    let b10 = bl
    let b11 = bl 
    let b12 = bl
    let b13 = bl
    let b14 = bl
    let b15 = bl
    let b16 = bl
    let b17 = bl
    let b18 = bl
    let b19 = bl
    let bk20 = bl
    let b21 = bl
    let b22 = bl
    let b23 = bl
    let b25 = bl
    let b26 = bl
    let b27 = bl

    let reverb

    let ba1
    let ba2
    let ba3
    let ba4
    let ba5
    let ba6
    let ba7
    let ba8
    let ba9
    let ba10
    let ba11

    let beat1



function preload() {

ba1 = loadImage('0.jpg')
ba2 = loadImage('20.jpg')
ba3 = loadImage('-20.jpg')
ba4 = loadImage('60.jpg')
ba5 = loadImage('-60.jpg')
ba6 = loadImage('100.jpg')
ba7 = loadImage('-100.jpg')
ba8 = loadImage('140.jpg')
ba9 = loadImage('-140.jpg')
ba10 = loadImage('180.jpg')
ba11 = loadImage('-180.jpg')

     beat1 = loadSound('tec1.mp3')
    beat2 = loadSound('tec2.mp3')
    beat3 = loadSound('tec3.mp3')
    beat4 = loadSound('drumo1.mp3')
    beat5 = loadSound('drumo2.mp3')
    beat6 = loadSound('drumo3.mp3')
    beat7 = loadSound('beep1.mp3')
    beat8 = loadSound('beep2.mp3')
    beat9 = loadSound('beep3.mp3')



}


function setup() {

   

    let canvas = createCanvas(windowWidth, windowHeight)
    canvas.parent('p5')

    osc = new p5.Oscillator()
    osc.setType(osc_type)

    osc2 = new p5.Oscillator()
    osc2.setType(osc_type)

    osc3 = new p5.Oscillator()
    osc3.setType(osc_type)

    osc4 = new p5.Oscillator()
    osc4.setType(osc_type)

    osc5 = new p5.Oscillator()
    osc5.setType(osc_type)

    osc6 = new p5.Oscillator()
    osc6.setType(osc_type)

    osc7 = new p5.Oscillator()
    osc7.setType(osc_type)

    osc8 = new p5.Oscillator()
    osc8.setType(osc_type)

    osc9 = new p5.Oscillator()
    osc9.setType(osc_type)

    osc10 = new p5.Oscillator()
    osc10.setType(osc_type)

     osc11 = new p5.Oscillator()
    osc11.setType(osc_type)

     osc12 = new p5.Oscillator()
    osc12.setType(osc_type)

    osc13 = new p5.Oscillator()
    osc13.setType(osc_type)

    osc14 = new p5.Oscillator()
    osc14.setType(osc_type)

    osc15 = new p5.Oscillator()
    osc15.setType(osc_type)

    osc16 = new p5.Oscillator()
    osc16.setType(osc_type)

    osc17 = new p5.Oscillator()
    osc17.setType(osc_type)

    osc18 = new p5.Oscillator()
    osc18.setType(osc_type)

    osc19 = new p5.Oscillator()
    osc19.setType(osc_type)

    osc20 = new p5.Oscillator()
    osc20.setType(osc_type)

    osc21 = new p5.Oscillator()
    osc21.setType(osc_type)

    osc22 = new p5.Oscillator()
    osc22.setType(osc_type)

    osc23 = new p5.Oscillator()
    osc23.setType(osc_type)

    osc24 = new p5.Oscillator()
    osc24.setType(osc_type)

    osc25 = new p5.Oscillator()
    osc25.setType(osc_type)

    osc26 = new p5.Oscillator()
    osc26.setType(osc_type)


     reverb = new p5.Reverb()
    osc.disconnect()
    reverb.process(osc, rev, 2)

     reverb2 = new p5.Reverb()
    osc2.disconnect()
    reverb2.process(osc2, rev, 2)

     reverb3 = new p5.Reverb()
    osc3.disconnect()
    reverb3.process(osc3, rev, 2)

    reverb4 = new p5.Reverb()
    osc4.disconnect()
    reverb4.process(osc4, rev, 2)

     reverb5 = new p5.Reverb()
    osc5.disconnect()
    reverb5.process(osc5, rev, 2)

     reverb6 = new p5.Reverb()
    osc6.disconnect()
    reverb6.process(osc6, rev, 2)

    reverb7 = new p5.Reverb()
    osc7.disconnect()
    reverb7.process(osc7, rev, 2)

     reverb8 = new p5.Reverb()
    osc8.disconnect()
    reverb8.process(osc8, rev, 2)

     reverb9 = new p5.Reverb()
    osc9.disconnect()
    reverb9.process(osc9, rev, 2)

    reverb10 = new p5.Reverb()
    osc10.disconnect()
    reverb10.process(osc10, rev, 2)

     reverb11 = new p5.Reverb()
    osc11.disconnect()
    reverb11.process(osc11, rev, 2)

     reverb12 = new p5.Reverb()
    osc12.disconnect()
    reverb12.process(osc12, rev, 2)

    reverb13 = new p5.Reverb()
    osc13.disconnect()
    reverb13.process(osc13, rev, 2)

     reverb14 = new p5.Reverb()
    osc14.disconnect()
    reverb14.process(osc14, rev, 2)

     reverb15 = new p5.Reverb()
    osc15.disconnect()
    reverb15.process(osc15, rev, 2)

    reverb16 = new p5.Reverb()
    osc16.disconnect()
    reverb16.process(osc16, rev, 2)

     reverb17 = new p5.Reverb()
    osc17.disconnect()
    reverb17.process(osc17, rev, 2)

     reverb18 = new p5.Reverb()
    osc18.disconnect()
    reverb18.process(osc18, rev, 2)

    reverb19 = new p5.Reverb()
    osc19.disconnect()
    reverb19.process(osc19, rev, 2)

     reverb20 = new p5.Reverb()
    osc20.disconnect()
    reverb20.process(osc20, rev, 2)

     reverb21 = new p5.Reverb()
    osc21.disconnect()
    reverb21.process(osc21, rev, 2)

    reverb22 = new p5.Reverb()
    osc22.disconnect()
    reverb22.process(osc22, rev, 2)

     reverb23 = new p5.Reverb()
    osc23.disconnect()
    reverb23.process(osc23, rev, 2)

     reverb24 = new p5.Reverb()
    osc24.disconnect()
    reverb24.process(osc24, rev, 2)

    reverb25 = new p5.Reverb()
    osc25.disconnect()
    reverb25.process(osc25, rev, 2)

     reverb26 = new p5.Reverb()
    osc26.disconnect()
    reverb26.process(osc26, rev, 2)

    
    osc.amp(amplu)

    osc2.amp(amplu)
    
    osc3.amp(amplu)
    
    osc4.amp(amplu)
    
    osc5.amp(amplu)
    
    osc6.amp(amplu)
    
    osc7.amp(amplu)
    
    osc8.amp(amplu)
    
    osc9.amp(amplu)
    
    osc10.amp(amplu)
    
    osc11.amp(amplu)
    
    osc12.amp(amplu)

    osc13.amp(amplu)

    osc14.amp(amplu)

    osc15.amp(amplu)

    osc16.amp(amplu)

    osc17.amp(amplu)

    osc18.amp(amplu)

    osc19.amp(amplu)

    osc20.amp(amplu)

    osc21.amp(amplu)

    osc22.amp(amplu)

    osc23.amp(amplu)

    osc24.amp(amplu)

    osc25.amp(amplu)

    osc26.amp(amplu)
    
 //noise
   noise = new p5.Noise()
   noise.setType('white')



    env = new p5.Envelope()
    env.setADSR(a, b, c, d)

    env2 = new p5.Envelope()
    env2.setADSR(a, b, c, d)

    env3 = new p5.Envelope()
    env3.setADSR(a, b, c, d)

    env4 = new p5.Envelope()
    env4.setADSR(a, b, c, d)

    env5 = new p5.Envelope()
    env5.setADSR(a, b, c, d)

    env6 = new p5.Envelope()
    env6.setADSR(a, b, c, d)

    env7 = new p5.Envelope()
    env7.setADSR(a, b, c, d)

    env8 = new p5.Envelope()
    env8.setADSR(a, b, c, d)

    env9 = new p5.Envelope()
    env9.setADSR(a, b, c, d)

    env10 = new p5.Envelope()
    env10.setADSR(a, b, c, d)

    env11 = new p5.Envelope()
    env11.setADSR(a, b, c, d)

    env12 = new p5.Envelope()
    env12.setADSR(a, b, c, d)

    env13 = new p5.Envelope()
    env13.setADSR(a, b, c, d)

    env14 = new p5.Envelope()
    env14.setADSR(a, b, c, d)

    env15 = new p5.Envelope()
    env15.setADSR(a, b, c, d)
    
    env16 = new p5.Envelope()
    env16.setADSR(a, b, c, d)
    
    env17 = new p5.Envelope()
    env17.setADSR(a, b, c, d)
    
    env18 = new p5.Envelope()
    env18.setADSR(a, b, c, d)
    
    env19 = new p5.Envelope()
    env19.setADSR(a, b, c, d)
    
    env20 = new p5.Envelope()
    env20.setADSR(a, b, c, d)

    env21 = new p5.Envelope()
    env21.setADSR(a, b, c, d)

    env22 = new p5.Envelope()
    env22.setADSR(a, b, c, d)

    env23 = new p5.Envelope()
    env23.setADSR(a, b, c, d)

    env24 = new p5.Envelope()
    env24.setADSR(a, b, c, d)

    env25 = new p5.Envelope()
    env25.setADSR(a, b, c, d)

    env26 = new p5.Envelope()
    env26.setADSR(a, b, c, d)

    //background
        if (yb == false) {

        fill(255,70, 200, 255)
        rect(0, 0, width, height)

        }

        if (yb == true) {

        if (rdm_bk == 0) {
     rdm_bk = rdm_bk + random(1, 10)
     print(rdm_bk)
        }

    }
    

}



           function keyTyped() {
                
                    if (key == 'z') {
                        note_indicator = 1
                        clr_background = 1

                    }
                    if (key == 'x') {
                        note_indicator = 2
                        clr_background = 2
                    }
                    if (key == 'c') {
                        note_indicator = 3
                        clr_background = 3

                    }
                    if (key == 'v') {
                        note_indicator = 4
                        clr_background = 4
                    }
                    if (key == 'b') {
                        note_indicator = 5
                        clr_background = 5

                    }
                    if (key == 'n') {
                        note_indicator = 6
                        clr_background = 6
                    }
                    if (key == 'm') {
                        note_indicator = 7
                        clr_background = 7

                    }
                    if (key == 'a') {
                        note_indicator = 8
                        clr_background = 8
                    }
                    if (key == 's') {
                        note_indicator = 9
                        clr_background = 9

                    }
                    if (key == 'd') {
                        note_indicator = 10
                        clr_background = 10
                    }
                    if (key == 'f') {
                        note_indicator = 11
                        clr_background = 11

                    }
                    if (key == 'g') {
                        note_indicator = 12
                        clr_background = 12
                    }
                    if (key == 'h') {
                        note_indicator = 13
                        clr_background = 1

                    }
                    if (key == 'j') {
                        note_indicator = 14
                        clr_background = 2
                    }
                    if (key == 'k') {
                        note_indicator = 15
                        clr_background = 3

                    }
                    if (key == 'l') {
                        note_indicator = 16
                        clr_background =  4
                    }
                    if (key == 'q') {
                        note_indicator = 17
                        clr_background = 5

                    }
                    if (key == 'w') {
                        note_indicator = 18
                        clr_background = 6
                    }
                    if (key == 'e') {
                        note_indicator = 19
                        clr_background = 7

                    }
                    if (key == 'r') {
                        note_indicator = 20
                        clr_background = 8
                    }
                    if (key == 't') {
                        note_indicator = 21
                        clr_background = 9

                    }
                    if (key == 'y') {
                        note_indicator = 22
                        clr_background = 10
                    }
                    if (key == 'u') {
                        note_indicator = 23
                        clr_background = 11

                    }
                    if (key == 'i') {
                        note_indicator = 24
                        clr_background = 12
                    }
                    if (key == 'o') {
                        note_indicator = 25
                        clr_background = 1

                    }
                    if (key == 'p') {
                        note_indicator = 26
                        clr_background = 2
                    }
                    
                }



function windowResized() {
    resizeCanvas(windowWidth, windowHeight)

}

//     let frequency = map(mouseY, 0, height, 2000, 50)
//     osc.freq(frequency)

//     let pan = map(mouseX, 0, width, -1, 1)
//     osc.pan(pan)
// }

function keyPressed() {

    if (keyCode === 90) {

        osc.start()
        osc.amp(env)
        env.triggerAttack()

      osc.freq(am)
    }

    if (keyCode === 88) {

        osc2.start()
        osc2.amp(env2)
        env2.triggerAttack()

      osc2.freq(as)
    }

    if (keyCode === 67) {

        osc3.start()
        osc3.amp(env3)
        env3.triggerAttack()

      osc3.freq(bm)
    }

    if (keyCode === 86) {

        osc4.start()
        osc4.amp(env4)
        env4.triggerAttack()

      osc4.freq(cm)
    }

     if (keyCode === 66) {

        osc5.start()
        osc5.amp(env5)
        env5.triggerAttack()

      osc5.freq(cs)
    }

     if (keyCode === 78) {

        osc6.start()
        osc6.amp(env6)
        env6.triggerAttack()

      osc6.freq(dm)
    }

     if (keyCode === 77) {

        osc7.start()
        osc7.amp(env7)
        env7.triggerAttack()

      osc7.freq(ds)
    }

     if (keyCode === 65) {

        osc8.start()
        osc8.amp(env8)
        env8.triggerAttack()

      osc8.freq(em)
    }

    if (keyCode === 83) {

        osc9.start()
        osc9.amp(env9)
        env9.triggerAttack()

      osc9.freq(fm)
    }

     if (keyCode === 68) {

        osc10.start()
        osc10.amp(env10)
        env10.triggerAttack()

      osc10.freq(fs)
    }

     if (keyCode === 70) {

        osc11.start()
        osc11.amp(env11)
        env11.triggerAttack()

      osc11.freq(gm)
    }

     if (keyCode === 71) {

        osc12.start()
        osc12.amp(env12)
        env12.triggerAttack()

      osc12.freq(gs)
    }

    if (keyCode === 72) {

        osc13.start()
        osc13.amp(env13)
        env13.triggerAttack()

      osc13.freq(am2)
    }

    if (keyCode === 74) {

        osc14.start()
        osc14.amp(env14)
        env14.triggerAttack()

      osc14.freq(as2)
    }

    if (keyCode === 75) {

        osc15.start()
        osc15.amp(env15)
        env15.triggerAttack()

      osc15.freq(bm2)
    }

    if (keyCode === 76) {

        osc16.start()
        osc16.amp(env16)
        env16.triggerAttack()

      osc16.freq(cm2)
    }

    if (keyCode === 81) {

        osc17.start()
        osc17.amp(env17)
        env17.triggerAttack()

      osc17.freq(cs2)
    }

    if (keyCode === 87) {

        osc18.start()
        osc18.amp(env18)
        env18.triggerAttack()

      osc18.freq(dm2)
    }

    if (keyCode === 69) {

        osc19.start()
        osc19.amp(env19)
        env19.triggerAttack()

      osc19.freq(ds2)
    }

    if (keyCode === 82) {

        osc20.start()
        osc20.amp(env20)
        env20.triggerAttack()

      osc20.freq(em2)
    }

    if (keyCode === 84) {

        osc21.start()
        osc21.amp(env21)
        env21.triggerAttack()

      osc21.freq(fm2)
    }

    if (keyCode === 89) {

        osc22.start()
        osc22.amp(env22)
        env22.triggerAttack()

      osc22.freq(fs2)
    }

    if (keyCode === 85) {

        osc23.start()
        osc23.amp(env23)
        env23.triggerAttack()

      osc23.freq(gm2)
    }

    if (keyCode === 73) {

        osc24.start()
        osc24.amp(env24)
        env24.triggerAttack()

      osc24.freq(gs2)
    }

    if (keyCode === 79) {

        osc25.start()
        osc25.amp(env25)
        env25.triggerAttack()

      osc25.freq(am3)
    }

    if (keyCode === 80) {

        osc26.start()
        osc26.amp(env26)
        env26.triggerAttack()

      osc26.freq(as3)
    }
    

        //background
        if (yb == false) {

             opacity = opacity + 5

             print(opacity)
             fill(c1, c2, c3, opacity)
             rect(0, 0, width, height)

             if (opacity >= 100) {
            
            opacity = 0

            c1 = random(0, 255)
            c2 = random(0, 255)
            c3 = random(0, 255)

            print('im ok')

       }

       print(mouseX, mouseY)

     }
}

function keyReleased() {

    if (keyCode === 90){
   env.triggerRelease()
    osc.stop()

    }

    if (keyCode === 88){
   env2.triggerRelease()
    osc2.stop()

    }

    if (keyCode === 67){
   env3.triggerRelease()
    osc3.stop()

    }

    if (keyCode === 86){
   env4.triggerRelease()
    osc4.stop()

    }

    if (keyCode === 66){
   env5.triggerRelease()
    osc5.stop()

    }

    if (keyCode === 78){
   env6.triggerRelease()
    osc6.stop()

    }

    if (keyCode === 77){
   env7.triggerRelease()
    osc7.stop()

    }

    if (keyCode === 65){
   env8.triggerRelease()
    osc8.stop()

    }

    if (keyCode === 83){
   env9.triggerRelease()
    osc9.stop()

    }

    if (keyCode === 68){
   env10.triggerRelease()
    osc10.stop()

    }

    if (keyCode === 70){
   env11.triggerRelease()
    osc11.stop()

    }

    if (keyCode === 71){
   env12.triggerRelease()
    osc12.stop()

    }

    if (keyCode === 72){
   env13.triggerRelease()
    osc13.stop()

    }

    if (keyCode === 74){
   env14.triggerRelease()
    osc14.stop()

    }

    if (keyCode === 75){
   env15.triggerRelease()
    osc15.stop()

    }


    if (keyCode === 76){
   env16.triggerRelease()
    osc16.stop()

    }


    if (keyCode === 81){
   env17.triggerRelease()
    osc17.stop()

    }


    if (keyCode === 87){
   env18.triggerRelease()
    osc18.stop()

    }


    if (keyCode === 69){
   env19.triggerRelease()
    osc19.stop()

    }


    if (keyCode === 82){
   env20.triggerRelease()
    osc20.stop()

    }

    if (keyCode === 84){
   env21.triggerRelease()
    osc21.stop()

    }


    if (keyCode === 89){
   env22.triggerRelease()
    osc22.stop()

    }

    if (keyCode === 85){
   env23.triggerRelease()
    osc23.stop()

    }


    if (keyCode === 73){
   env24.triggerRelease()
    osc24.stop()

    }


    if (keyCode === 79){
   env25.triggerRelease()
    osc25.stop()

    }

    if (keyCode === 80){
   env26.triggerRelease()
    osc26.stop()

    }  

     // for (let beet = 49; beet < 57; beet++) {
     //        if (keyCode === )

     //    {

    if (keyCode === 49) {

            beat1.play()
            beat1.loop()

            beatstopper = beatstopper + 1
            if (beatstopper >= 2) {
                beat1.stop()
                beatstopper = 0
            }
    }
    if (keyCode === 50) {
            beat2.play()
            beat2.loop()
            beat2.setVolume(0.2)
            

             beatstopper = beatstopper + 1
            if (beatstopper >= 2) {
                beat2.stop()
                beatstopper = 0
            }
    }
    if (keyCode === 51) {
             beat3.play()
             beat3.loop()

              beatstopper = beatstopper + 1
            if (beatstopper >= 2) {
                beat3.stop()
                beatstopper = 0
            }
        
    }
    if (keyCode === 52) {
             beat4.play()
             beat4.loop()
              beatstopper = beatstopper + 1
            if (beatstopper >= 2) {
                beat4.stop()
                beatstopper = 0
            }
    }
    if (keyCode === 53) {
            beat5.play()
            beat5.loop()
             beatstopper = beatstopper + 1
            if (beatstopper >= 2) {
                beat5.stop()
               
                beatstopper = 0
            }
    }
    if (keyCode === 54) {
            beat6.play() 
            beat6.loop()

             beatstopper = beatstopper + 1
            if (beatstopper >= 2) {
                beat6.stop()
                beatstopper = 0
            }       
    }
    if (keyCode === 55) {
            beat7.play()
            beat7.loop()

             beatstopper = beatstopper + 1
            if (beatstopper >= 2) {
                beat7.stop()
                beatstopper = 0
            }
    }
    if (keyCode === 56) {
            beat8.play()
            beat8.loop()

             beatstopper = beatstopper + 1
            if (beatstopper >= 2) {
                beat8.stop()
                
                beatstopper = 0
            }
    }
    if (keyCode === 57) {
            beat9.play()
            beat9.loop()

             beatstopper = beatstopper + 1
            if (beatstopper >= 2) {
                beat9.stop()
                beatstopper = 0
            }
      }

      if (keyCode === 219) {
        sine_time = true
        square_time = false
        sawtooth_time = false
        triangle_time = false
      } 
      if (keyCode === 221){
        square_time = true
        triangle_time = false
        sine_time = false
        sawtooth_time = false
      }
      if (keyCode === 189) {
        sawtooth_time = true
        square_time = false
        sine_time = false
        triangle_time = false
      }
      if (keyCode === 287){
        triangle_time = true
        square_time = false
        sawtooth_time = false
        square_time = false
      }

        


}

function draw() {

        if (square_time == true){
            osc_type = 'square'
        }

        if (triangle_time == true){
            osc_type = 'triangle'
        } 

        if (sine_time == true) {
            osc_type = "sine"
        } 

        if (sawtooth_time == true) {
            osc_type = 'sawtooth'
        }

print(osc_type)

      

        image(ba1, 0, 0, width, height)

        if (clr_background == 1) {
            image(ba2, 0, 0, width, height, 0, 0, 0, 0,)
            clear = clear + 1

        }

         if (clr_background == 2) {
            image(ba3, 0, 0, width, height, 0, 0, 0, 0,)
            clear = clear + 1

        }
         if (clr_background == 3) {
            image(ba4, 0, 0, width, height, 0, 0, 0, 0,)
            clear = clear + 1

        }
         if (clr_background == 4) {
            image(ba5, 0, 0, width, height, 0, 0, 0, 0,)
            clear = clear + 1

        }
         if (clr_background == 5) {
            image(ba6, 0, 0, width, height, 0, 0, 0, 0,)
            clear = clear + 1

        }
         if (clr_background == 6) {
            image(ba7, 0, 0, width, height, 0, 0, 0, 0,)
            clear = clear + 1

        }
         if (clr_background == 7) {
            image(ba8, 0, 0, width, height, 0, 0, 0, 0,)
            clear = clear + 1

        }
         if (clr_background == 8) {
            image(ba9, 0, 0, width, height, 0, 0, 0, 0,)
            clear = clear + 1

        }
         if (clr_background == 9) {
            image(ba10, 0, 0, width, height, 0, 0, 0, 0,)
            clear = clear + 1

        }
         if (clr_background == 10) {
            image(ba11, 0, 0, width, height, 0, 0, 0, 0,)
            clear = clear + 1

        }
         if (clr_background == 11) {
            image(ba1, 0, 0, width, height, 0, 0, 0, 0,)
            clear = clear + 1

        }
         if (clr_background == 12) {
            image(ba2, 0, 0, width, height, 0, 0, 0, 0,)
            clear = clear + 1

        }



        //WAVEFORM

    

        //keys and wave
        push()

        for (let y = 1; y < 27; y++) {


            fill(255, 255, 255, 30)
            rect(y * 70, 850, 60, 30)
            fill(255)
            textSize(30)

             if (y == 1) {
            text('A', y * sj  + 5 - gb, 875)
            if (note_indicator == 1) {
                fill(70, 255, 120)
                rect(y * sj, 875, 60, 5)

                noFill()   
                fill(255, 255, 255, 100)
                rect(y *sj, 0, 20, b1)
                 b1 = b1 - 5
              
            } else {
                b1 = 300
            }
           }


             if (y == 2) {
            text('Bb', y * sj + 5 - gb, 875)
            if (note_indicator == 2) {
                fill(70, 255, 120)
                rect(y * sj, 875, 60, 5)

                    noFill()   
                fill(255, 255, 255, 100)
                rect(y *sj, 0, 20, b2)
                b2 = b2 - 5
            } else {
                b2 = 300
            }
           }


             if (y == 3) {
            text('B', y * sj + 5 - gb, 875)
            if (note_indicator == 3) {
                fill(70, 255, 120)
                rect(y * sj, 875, 60, 5)
            
                    noFill()   
                fill(255, 255, 255, 100)
                rect(y *sj, 0, 20, b3)
                b3 = b3 - 5
            } else {
                b3 = 300
            }
           }


             if (y == 4) {
            text('C', y * sj + 5 - gb, 875)
            if (note_indicator == 4) {
                fill(70, 255, 120)
                rect(y * sj, 875, 60, 5)
            
                    noFill()   
                fill(255, 255, 255, 100)
                rect(y *sj, 0, 20, b4)
                b4 = b4 - 5
            } else {
                b4 = 300
            }
           }


            if (y == 5) {
            text('C#', y * sj + 5 - gb, 875)
            if (note_indicator == 5) {
                fill(70, 255, 120)
                rect(y * sj, 875, 60, 5)
            
                    noFill()   
                fill(255, 255, 255, 100)
                rect(y *sj, 0, 20, b5)
                b5 = b5 - 5
            } else {
                b5 = 300
            }
           }


             if (y == 6) {
            text('D', y * sj + 5 - gb, 875)
            if (note_indicator == 6) {
                fill(70, 255, 120)
                rect(y * sj, 875, 60, 5)
            
                    noFill()   
                fill(255, 255, 255, 100)
                rect(y *sj, 0, 20, b6)
                b6 = b6 - 5
            } else {
                b6 = 300
            }
           }


             if (y == 7) {
            text('Eb', y * sj + 5 - gb, 875)
            if (note_indicator == 7) {
                fill(70, 255, 120)
                rect(y * sj, 875, 60, 5)

                    noFill()   
                fill(255, 255, 255, 100)
                rect(y *sj, 0, 20, b7)
                b7 = b7 - 5
            } else {
                b7 = 300
            }
           }


             if (y == 8) {
            text('E', y * sj + 5 - gb, 875)
            if (note_indicator == 8) {
                fill(70, 255, 120)
                rect(y * sj, 875, 60, 5)
            
             noFill()   
                fill(255, 255, 255, 100)
                rect(y *sj, 0, 20, b8)
                b8 = b8 - 5
            } else {
                b8 = 300
            }
           }

            if (y == 9) {
            text('F', y * sj + 5 - gb, 875)
            if (note_indicator == 9) {
                fill(70, 255, 120)
                rect(y * sj, 875, 60, 5)

                    noFill()   
                fill(255, 255, 255, 100)
                rect(y *sj, 0, 20, b9)
                b9 = b9 - 5
            } else {
                b9 = 300
            }
           }


             if (y == 10) {
            text('F#', y * sj + 5 - gb, 875)
            if (note_indicator == 10) {
                fill(70, 255, 120)
                rect(y * sj, 875, 60, 5)
                    
                    noFill()   
                fill(255, 255, 255, 100)
                rect(y *sj, 0, 20, b10)
                b10 = b10 - 5
            } else {
                b10 = 300
            }
           }


             if (y == 11) {
            text('G', y * sj + 5 - gb, 875)
            if (note_indicator == 11) {
                fill(70, 255, 120)
                rect(y * sj, 875, 60, 5)
            
            
                    noFill()   
                fill(255, 255, 255, 100)
                rect(y *sj, 0, 20, b11)
                b11 = b11 - 5
            } else {
                b11 = 300
            }
           }



             if (y == 12) {
            text('G#', y * sj + 5 - gb, 875)
            if (note_indicator == 12) {
                fill(70, 255, 120)
                rect(y * sj, 875, 60, 5)
                    
                    noFill()   
                fill(255, 255, 255, 100)
                rect(y *sj, 0, 20, b12)
                b12 = b12 - 5
            } else {
                b12 = 300
            }
           }


           if (y == 13) {
            text('A', y * sj + 5 - gb, 875)
            if (note_indicator == 13) {
                fill(70, 255, 120)
                rect(y * sj, 875, 60, 5)
                    
                     noFill()   
                fill(255, 255, 255, 100)
                rect(y *sj, 0, 20, b13)
                b13 = b13 - 5
            } else {
                b13 = 300
            }
           }


             if (y == 14) {
            text('Bb', y * sj + 5 - gb, 875)
            if (note_indicator == 14) {
                fill(70, 255, 120)
                rect(y * sj, 875, 60, 5)
                    
                     noFill()   
                fill(255, 255, 255, 100)
                rect(y *sj, 0, 20, b14)
                b14 = b14 - 5
            } else {
                b14 = 300
            }
           }


            if (y == 15) {
            text('B', y * sj + 5 - gb, 875)
            if (note_indicator == 15) {
                fill(70, 255, 120)
                rect(y * sj, 875, 60, 5)
                    
                     noFill()   
                fill(255, 255, 255, 100)
                rect(y *sj, 0, 20, b15)
                b15 = b15 - 5
            } else {
                b15 = 300
            }
           }



             if (y == 16) {
            text('C', y * sj + 5 - gb, 875)
            if (note_indicator == 16) {
                fill(70, 255, 120)
                rect(y * sj, 875, 60, 5)
                    
                     noFill()   
                fill(255, 255, 255, 100)
                rect(y *sj, 0, 20, b16)
                b16 = b16 - 5
            } else {
                b16 = 300
            }
           }



             if (y == 17) {
            text('C#', y * sj + 5 - gb, 875)
            if (note_indicator == 17) {
                fill(70, 255, 120)
                rect(y * sj, 875, 60, 5)
                    
                     noFill()   
                fill(255, 255, 255, 100)
                rect(y *sj, 0, 20, b17)
                b17 = b17 - 5
            } else {
                b17 = 300
            }
           }




             if (y == 18) {
            text('D', y * sj + 5 - gb, 875)
            if (note_indicator == 18) {
                fill(70, 255, 120)
                rect(y * sj, 875, 60, 5)
            
                     noFill()   
                fill(255, 255, 255, 100)
                rect(y *sj, 0, 20, b18)
                b18 = b18 - 5
            } else {
                b18 = 300
            }
           }


           if (y == 19) {
            text('Eb', y * sj + 5 - gb, 875)
            if (note_indicator == 19) {
                fill(70, 255, 120)
                rect(y * sj, 875, 60, 5)
                    
                     noFill()   
                fill(255, 255, 255, 100)
                rect(y *sj, 0, 20, b19)
                b19 = b19 - 5
            } else {
                b19 = 300
            }
           }


             if (y == 20) {
            text('E', y * sj + 5 - gb, 875)
            if (note_indicator == 20) {
                fill(70, 255, 120)
                rect(y * sj, 875, 60, 5)
                    
                     noFill()   
                fill(255, 255, 255, 100)
                rect(y *sj, 0, 20, bk20)
                bk20 = bk20 - 5
            } else {
                bk20 = 300
            }
           }


            if (y == 21) {
            text('F', y * sj + 5 - gb, 875)
            if (note_indicator == 21) {
                fill(70, 255, 120)
                rect(y * sj, 875, 60, 5)
                    
                     noFill()   
                fill(255, 255, 255, 100)
                rect(y *sj, 0, 20, b21)
                b21 = b21 - 5
            } else {
                b21 = 300
            }
           }


             if (y == 22) {
            text('F#', y * sj + 5 - gb, 875)
            if (note_indicator == 22) {
                fill(70, 255, 120)
                rect(y * sj, 875, 60, 5)
                    
                     noFill()   
                fill(255, 255, 255, 100)
                rect(y *sj, 0, 20, b22)
                b22 = b22 - 5
            } else {
                b22 = 300
            }
           }


             if (y == 23) {
            text('G', y * sj + 5 - gb, 875)
            if (note_indicator == 23) {
                fill(70, 255, 120)
                rect(y * sj, 875, 60, 5)
                    
                     noFill()   
                fill(255, 255, 255, 100)
                rect(y *sj, 0, 20, b23)
                b23 = b23 - 5
            } else {
                b23 = 300
            }
           }


             if (y == 24) {
            text('G#', y * sj + 5 - gb, 875)
            if (note_indicator == 24) {
                fill(70, 255, 120)
                rect(y * sj, 875, 60, 5)
                    
                     noFill()   
                fill(255, 255, 255, 100)
                rect(y *sj, 0, 20, b33)
                b33 = b33 - 5
            } else {
                b33 = 300
            }
           }


           if (y == 25) {
            text('A', y * sj + 5 - gb, 875)
            if (note_indicator == 25) {
                fill(70, 255, 120)
                rect(y * sj, 875, 60, 5)
                    
                     noFill()   
                fill(255, 255, 255, 100)
                rect(y *sj, 0, 20, b25)
                b25 = b25 - 5
            } else {
                b25 = 300
            }
           }


             if (y == 26) {
            text('Bb', y * sj + 5 - gb, 875)
            if (note_indicator == 26) {
                fill(70, 255, 120)
                rect(y * sj, 875, 60, 5)
                    
                     noFill()   
                fill(255, 255, 255, 100)
                rect(y *sj, 0, 20, b26)
                b26 = b26 - 5
            } else {
                b26 = 300
            }
           }


            if (y == 27) {
            text('B', y * sj + 5 - gb, 875)
            if (note_indicator == 27) {
                fill(70, 255, 120)
                rect(y * sj, 875, 60, 5)
                    
                     noFill()   
                fill(255, 255, 255, 100)
                rect(y *sj, 0, 20, b27)
                b27 = b27 - 5
            } else {
                b27 = 300
            }
           }

        }

    for (let bebo = 2; bebo < 11; bebo++) {

        pop()
        print(note_indicator)
        push()
        fill(255,255,255, 50)
        rect(bebo * 40, 900, 30,30)
        fill(255)
        textSize(25)
        text(bebo - 1, bebo * 40 + 6, 925)
    }

    for (let sele = 1; sele < 5; sele++) {

        fill(255, 255, 255, 25)
        rect(sele * 40 + 1400, 900, 30, 30)
        fill(255)
        textSize(25)
        if (sele == 1) {
            text('[', sele * 40 + 1400 + 5, 915 )}
        if (sele == 2) {
            text(']', sele * 40 + 1400 + 5, 915 )
        }
        if (sele == 3) {
            text('-', sele * 40 + 1400 + 5, 915 )}
        if (sele == 4) {
            text('=', sele * 40 + 1400 + 5, 915 )
        }
        

    }




}



function touchStarted() {

    mousePressed()
    mouseClicked()
}

function touchEnded() {
    mouseReleased()
}
