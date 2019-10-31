let osc
let env
let frequency = 50
let amplu = 10
let noise
let a = 0.1
let b = 0.1
let c = 0.2
let d = 0.5
let osc_type = 'square'
let opacity = 0
let c1 = 255
let c2 = 200
let c3 = 70



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


    let reverb



    let be1
    let ba2
    let ba3
    let ba4
    let ba5
    let ba6
    let ba7
    let ba8
    let ba9
    let ba10

function preload() {

be1 = loadImage('back.jpg')
ba2 = loadImage('back2.jpg')
ba3 = loadImage('back3.jpg')
ba4 = loadImage('back4.jpg')
ba5 = loadImage('back5.jpg')
ba6 = loadImage('back6.jpg')
ba7 = loadImage('back7.jpg')
ba8 = loadImage('back8.jpg')
ba9 = loadImage('back9.jpg')
ba10 = loadImage('back10.jpg')


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
    reverb.process(osc, .5, 2)




    
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





function draw() {

        



        if (rdm_bk <= 1 && rdm_bk > 0) {

                image(be1, 0, 0, width, height)

        }

        if (rdm_bk <= 2 && rdm_bk >1) {

                image(ba2, 0, 0, width, height)

        }

        if (rdm_bk <= 3 && rdm_bk > 2) {

                image(ba3, 0, 0, width, height)

        }

        if (rdm_bk <= 4  && rdm_bk > 3) {

                image(ba4, 0, 0, width, height)

        }

        if (rdm_bk <= 5 && rdm_bk > 4) {

                image(ba5, 0, 0, width, height)

        }

        if (rdm_bk <= 6 && rdm_bk >5) {


                image(ba6, 0, 0, width, height)

        }

        if (rdm_bk <= 7 && rdm_bk > 6) {

                image(ba7, 0, 0, width, height)

        }

        if (rdm_bk <= 8 && rdm_bk > 7) {

                    image(ba8, 0, 0, width, height)

        }

        if (rdm_bk <= 9 && rdm_bk > 8) {

                image(ba9, 0, 0, width, height)

        }

        if (rdm_bk <= 10 && rdm_bk >9) {

               image(ba10, 0, 0, width, height)     
        }



        //type
        push()
        noFill()
        fill(255)
        rect(40, 700 , 25 ,25)
        pop()
        push()
        noFill()
        fill(255)
        rect(68, 700 , 25 ,25)
        pop()

        //keys

        push()
        noFill()
        fill(250, 255, 250)
        rect( 40, 40, 50, 200)
        fill(0)
        textSize(30)
        text('B', 55, 90)
        pop()

        push()
        noFill()
        fill(250, 255, 250)
        rect( 40*2+13, 40, 50, 200)
        pop()

        push()
        noFill()
        fill(250, 255, 250)
        rect( 40*3+26, 40, 50, 200)
        pop()


        push()
        noFill()
        fill(250, 255, 250)
        rect( 40*4+39, 40, 50, 200)
        pop()

        push()
        noFill()
        fill(250, 255, 250)
        rect( 40*5+52, 40, 50, 200)
        pop()

        push()
        noFill()
        fill(250, 255, 250)
        rect( 40*6+65, 40, 50, 200)
        pop()


        push()
        noFill()
        fill(250, 255, 250)
        rect( 40*7+78, 40, 50, 200)
        pop()

        push()
        noFill()
        fill(250, 255, 250)
        rect( 40*8+91, 40, 50, 200)
        pop()

        push()
        noFill()
        fill(250, 255, 250)
        rect( 40*9+104, 40, 50, 200)
        pop()


        push()
        noFill()
        fill(250, 255, 250)
        rect( 40*10+117, 40, 50, 200)
        pop()


            //r2

        push()
        noFill()
        fill(250, 255, 250)
        rect( 40, 40+220, 50, 200)
        pop()

        push()
        noFill()
        fill(250, 255, 250)
        rect( 40*2+13, 40+220, 50, 200)
        pop()

        push()
        noFill()
        fill(250, 255, 250)
        rect( 40*3+26, 40+220, 50, 200)
        pop()


        push()
        noFill()
        fill(250, 255, 250)
        rect( 40*4+39, 40+220, 50, 200)
        pop()

        push()
        noFill()
        fill(250, 255, 250)
        rect( 40*5+52, 40+220, 50, 200)
        pop()

        push()
        noFill()
        fill(250, 255, 250)
        rect( 40*6+65, 40+220, 50, 200)
        pop()


        push()
        noFill()
        fill(250, 255, 250)
        rect( 40*7+78, 40+220, 50, 200)
        pop()

        push()
        noFill()
        fill(250, 255, 250)
        rect( 40*8+91, 40+220, 50, 200)
        pop()

        push()
        noFill()
        fill(250, 255, 250)
        rect( 40*9+104, 40+220, 50, 200)
        pop()


        //R3

        push()
        noFill()
        fill(250, 255, 250)
        rect( 40, 40+440, 50, 200)
        pop()

        push()
        noFill()
        fill(250, 255, 250)
        rect( 40*2+13, 40+440, 50, 200)
        pop()

        push()
        noFill()
        fill(250, 255, 250)
        rect( 40*3+26, 40+440, 50, 200)
        pop()


        push()
        noFill()
        fill(250, 255, 250)
        rect( 40*4+39, 40+440, 50, 200)
        pop()

        push()
        noFill()
        fill(250, 255, 250)
        rect( 40*5+52, 40+440, 50, 200)
        pop()

        push()
        noFill()
        fill(250, 255, 250)
        rect( 40*6+65, 40+440, 50, 200)
        pop()

         push()
        noFill()
        fill(250, 255, 250)
        rect( 40*7+78, 40+440, 50, 200)
        fill(0)
        textSize(30)
        text('A', )
        pop()





        

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)

}


// function mouseClicked() {
//     osc.start()
// }

// function mousePressed() {
    
//     osc.amp(env)
//     env.triggerAttack()

//     mouseDragged()
// }

// function mouseReleased() {
//     env.triggerRelease()
//     osc.stop()
// }

// function mouseDragged() {
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

     }

    
       



}

//color changer

 




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

    


}


function touchStarted() {

    mousePressed()
    mouseClicked()
}

function touchEnded() {
    mouseReleased()
}
