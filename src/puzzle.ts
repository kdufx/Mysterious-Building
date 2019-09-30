import utils from "../node_modules/decentraland-ecs-utils/index"
// import {gameCanvas} from'./game'
export function createPuzzle(gameCanvas){
   puzzle1()
   puzzle2()
   puzzle3(gameCanvas)
}

export enum Stone {
    BLUE = "1",
    YELLOW = "2",
    WHITE = "3",
    RED = "4"
  }

const dock = new Entity()
let isPuzzle1Move=false
export class puzzle1Anima implements ISystem {
    direct:Vector3
    // constructor(gameData){
    //     this.game = gameData
    // }
    update(dt: number) {
      if(!isPuzzle1Move) return
      let transform= dock.getComponent(Transform)
      if(transform.position.y<-0.2){
        this.direct=Vector3.Up().scale(0.02)
    }else if(transform.position.y>4.5){
        this.direct=Vector3.Down().scale(0.02)
      }
      transform.translate(this.direct)
    }
  }

function puzzle1(){
    const stick = new Entity()
    stick.addComponent(new GLTFShape('models/FenceSticksEnd_01/FenceSticksEnd_01.glb'))
    stick.addComponent(new Transform({position:new Vector3(22, -0.5, 3.5),scale:new Vector3(1,6,1)}))
   
    engine.addEntity(stick)

    let box=new Entity()
    box.addComponent(new BoxShape())
    box.addComponent(new Transform({position:new Vector3(0, .5,0),scale:new Vector3(.5,.1,.5)}))
    let m=new Material()
    m.albedoColor=Color3.FromHexString('#3F231B')
    box.addComponent(m)
    box.setParent(stick)
    engine.addEntity(box)
    
    let lever=new Entity()
    lever.addComponent(new BoxShape())
    // m.albedoColor=Color3.Red()//FromHexString('#3F231B')
    // lever.addComponent(new Transform({position:new Vector3(-.7, 0,0),rotation:Quaternion.Euler(90,-20,90), scale:new Vector3(0.1,1.1,.1)}))
    lever.addComponent(new Transform({position:new Vector3(21.7, 2.5, 3.5),rotation:Quaternion.Euler(90,-20,90), scale:new Vector3(0.1,.9,.1)}))
    lever.addComponent(m)
    lever.addComponent(new OnClick((e)=>{
        let rotation=lever.getComponent(Transform).rotation
        if(isPuzzle1Move){
            isPuzzle1Move=false
            lever.addComponentOrReplace(new utils.RotateTransformComponent(rotation,Quaternion.Euler(90,-20,90),1))
        }else{
            isPuzzle1Move=true
            lever.addComponentOrReplace(new utils.RotateTransformComponent(rotation,Quaternion.Euler(90,20,90),1))
        }
    }))
    // lever.setParent(box)
    engine.addEntity(lever)

    
    const gltfShape_17 = new GLTFShape('models/DocksModuleSmall_01/DocksModuleSmall_01.glb')
    dock.addComponentOrReplace(gltfShape_17)
    const transform_42 = new Transform({
    position: new Vector3(22.5, -0.5, 2.5),
    rotation: new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865475),
    scale: new Vector3(1, 1, 1)
    })
    dock.addComponentOrReplace(transform_42)
    engine.addEntity(dock)

}

const docksBridge = new Entity()
let isPuzzle2Open=false
function puzzle2(){
    //花盆
    const pot_02 = new Entity()
    const gltfShape_31 = new GLTFShape('models/Pot_02/Pot_02.glb')
    pot_02.addComponentOrReplace(gltfShape_31)
    pot_02.addComponent(new AudioSource(new AudioClip('sounds/move_object1.mp3')))
    const transform_74 = new Transform({
    position: new Vector3(27, 6.12, 3.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(.6, .6, .6)
    })
    pot_02.addComponent(new OnClick(()=>{
        let rotation=pot_02.getComponent(Transform).rotation
        pot_02.getComponent(AudioSource).playOnce()
        if(isPuzzle2Open){
            
            engine.removeEntity(docksBridge)
            pot_02.addComponentOrReplace(new utils.RotateTransformComponent(rotation,Quaternion.Euler(0,0,0),1))
        }else{
            //开启
            createBridge()
            pot_02.addComponentOrReplace(new utils.RotateTransformComponent(rotation,Quaternion.Euler(0,45,0),1))
        }
        setTimeout(() => {
            m.emissiveColor=isPuzzle2Open?Color3.Black():Color3.Red()
            isPuzzle2Open=!isPuzzle2Open
        }, 1000);
    }))
    pot_02.addComponentOrReplace(transform_74)
    engine.addEntity(pot_02)

    const flower_03 = new Entity()
    flower_03.setParent(pot_02)
    const gltfShape_32 = new GLTFShape('models/Flower_03/Flower_03.glb')
    flower_03.addComponentOrReplace(gltfShape_32)
    const transform_75 = new Transform({
    position: new Vector3(0, 0.2, 0),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
    })
    flower_03.addComponentOrReplace(transform_75)
    engine.addEntity(flower_03)

    const shape=new Entity()
    shape.addComponent(new BoxShape)
    let m=new Material()
    m.albedoColor=Color3.Gray()
    
    shape.addComponent(m)
    shape.addComponent(new Transform({
        position: new Vector3(27, 6.11, 3.5),
        rotation: Quaternion.Euler(0,45,0),
        scale: new Vector3(.35, .01, .35)
    }))
    // shape.setParent(pot_02)
    engine.addEntity(shape)
    let createBridge=function(){
        docksBridge.addComponentOrReplace(new GLTFShape('models/DocksBridge_01/DocksBridge_01.glb'))
        const transform_25 = new Transform({
        position: new Vector3(28.5, 8, 21),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
        })
        docksBridge.addComponentOrReplace(transform_25)
        engine.addEntity(docksBridge)
    }
}

const yellowStone = new Entity()
const blueStone = new Entity()
const redStone = new Entity()
const whiteStone = new Entity()
const chinesePig = new Entity()
//悬浮木块
const logPath = new Entity()

let  tapStones=''
let  targetStones='4321'
let isPuzzle3Open=false
export class puzzle3Anima implements ISystem {
    direct1:Vector3
    direct2:Vector3
    // constructor(gameData){
    //     this.game = gameData
    // }
    update(dt: number) {
      if(!isPuzzle3Open) return
      let transform= logPath.getComponent(Transform)
        if(transform.position.y<9.51){
            this.direct1=Vector3.Up().scale(0.02)
            this.direct2=Vector3.Left().scale(0.05)
        }else if(transform.position.y>14){
            this.direct1=Vector3.Down().scale(0.02)
            this.direct2=Vector3.Right().scale(0.05)
        }
        transform.translate(this.direct1)
        transform.translate(this.direct2)
    }
  }
function puzzle3(gameCanvas){
    //书卷
    const parchement_01 = new Entity()
    const gltfShape_48 = new GLTFShape('models/Parchement_01/Parchement_01.glb')
    parchement_01.addComponentOrReplace(gltfShape_48)
    const transform_103 = new Transform({
    position: new Vector3(28.75, 10.8, 30.8),
    // position: new Vector3(28.75, .8, 30.8),
    rotation: Quaternion.Euler(90,0,0),
    scale: new Vector3(1, 1, 1)
    })
    parchement_01.addComponent(new OnClick(()=>{
        postitHintRect.visible = true
        // setTimeout(() => {
        //     postitHintRect.visible = false
            
        // }, 5000);
    }))
    parchement_01.addComponentOrReplace(transform_103)
    engine.addEntity(parchement_01)

    const postitHintRect = new UIContainerRect(gameCanvas)
    postitHintRect.width = "100%"
    postitHintRect.height = "100%"
    postitHintRect.visible = false
    const coinHintImage = new UIImage(postitHintRect, new Texture("images/pl3.png"))
    let w=750,h=422
    coinHintImage.sourceWidth = w
    coinHintImage.sourceHeight = h
    coinHintImage.width = w
    coinHintImage.height = h

    let panelCloseButton = new UIImage(postitHintRect, new Texture("images/button_close.png"))
    panelCloseButton.sourceWidth = 92
    panelCloseButton.sourceHeight = 92
    panelCloseButton.positionX = w*0.45
    panelCloseButton.positionY = h*0.45
    panelCloseButton.width = 32
    panelCloseButton.height = 32
    panelCloseButton.onClick = new OnClick(event=>{
        postitHintRect.visible = false
    })

    
    //圆桌
    const woodRoundTable_01 = new Entity()
    const gltfShape_49 = new GLTFShape('models/WoodRoundTable_01/WoodRoundTable_01.glb')
    woodRoundTable_01.addComponentOrReplace(gltfShape_49)
    const transform_104 = new Transform({
    position: new Vector3(27, 10.1, 26.5),
    // position: new Vector3(27, .5, 26.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
    })
    woodRoundTable_01.addComponentOrReplace(transform_104)
    engine.addEntity(woodRoundTable_01)

    
    yellowStone.addComponentOrReplace(new GLTFShape('models/Glowing_Stone_02/Glowing_Stone_02.glb'))
    yellowStone.addComponent(new AudioSource(new AudioClip('sounds/pop.mp3')))

    yellowStone.addComponent(new OnClick(()=>{
        // yellowStone.getComponent(AudioSource).playOnce()
        let position=yellowStone.getComponent(Transform).position
        yellowStone.addComponentOrReplace(new utils.MoveTransformComponent(position,new Vector3(0,0,0),3))
        // setTimeout(() => {
            
        // }, 3100);
        checkStone(Stone.YELLOW)
    }))
    yellowStone.setParent(woodRoundTable_01)
    yellowStone.addComponentOrReplace(new Transform({
        position: new Vector3(.2, .7, 0),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(.5, .5, .5)
        }))
    engine.addEntity(yellowStone)

    
    blueStone.addComponentOrReplace(new GLTFShape('models/Glowing_Stone_01/Glowing_Stone_01.glb'))
    blueStone.addComponent(new AudioSource(new AudioClip('sounds/pop.mp3')))

    blueStone.addComponent(new OnClick(()=>{
        // blueStone.getComponent(AudioSource).playOnce()
        let position=blueStone.getComponent(Transform).position
        blueStone.addComponentOrReplace(new utils.MoveTransformComponent(position,new Vector3(0,0,0),3))
        // setTimeout(() => {
            
        // }, 3100);
        checkStone(Stone.BLUE)
        
    }))
    blueStone.setParent(woodRoundTable_01)
    blueStone.addComponentOrReplace(new Transform({
        position: new Vector3(-.1, .7, .2),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(.5, .5, .5)
        }))
    engine.addEntity(blueStone)

    
    redStone.addComponentOrReplace(new GLTFShape('models/Glowing_Stone_04/Glowing_Stone_04.glb'))
    redStone.addComponent(new AudioSource(new AudioClip('sounds/access_granted.mp3')))

    redStone.addComponent(new OnClick(()=>{
        // redStone.getComponent(AudioSource).playOnce()
        let position=redStone.getComponent(Transform).position
        redStone.addComponentOrReplace(new utils.MoveTransformComponent(position,new Vector3(0,0,0),3))
        // setTimeout(() => {
        // }, 3100);
        checkStone(Stone.RED)
    }))
    redStone.setParent(woodRoundTable_01)
    redStone.addComponentOrReplace(new Transform({
        position: new Vector3(-0.1, .7, -.2),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(.5, .5, .5)
        }))
    engine.addEntity(redStone)

    
    whiteStone.addComponentOrReplace(new GLTFShape('models/Glowing_Stone_03/Glowing_Stone_03.glb'))
    whiteStone.addComponent(new AudioSource(new AudioClip('sounds/pop.mp3')))

    whiteStone.addComponent(new OnClick(()=>{
        let position=whiteStone.getComponent(Transform).position
        whiteStone.addComponentOrReplace(new utils.MoveTransformComponent(position,new Vector3(0,0,0),3))
        checkStone(Stone.WHITE)
    }))
    whiteStone.setParent(woodRoundTable_01)
    whiteStone.addComponentOrReplace(new Transform({
        position: new Vector3(0, .7, 0),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(.5, .5, .5)
        }))
    engine.addEntity(whiteStone)

    
    const gltfShape_63 = new GLTFShape('models/Log_Path_01/Log_Path_01.glb')
    logPath.addComponentOrReplace(gltfShape_63)
    const transform_119 = new Transform({
        position: new Vector3(21, 9.5, 28),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    logPath.addComponentOrReplace(transform_119)
    engine.addEntity(logPath)

    
    chinesePig.setParent(woodRoundTable_01)
    const gltfShape = new GLTFShape('models/ChineseStatuePig_02/ChineseStatuePig_02.glb')
    chinesePig.addComponentOrReplace(gltfShape)
    const transform_2 = new Transform({
        position: new Vector3(0, -1, 0),
        rotation:Quaternion.Euler(0,-90,0),
        scale: new Vector3(.5, .5, .5)
    })
    chinesePig.addComponentOrReplace(transform_2)
    engine.addEntity(chinesePig)
}

function resetStone(){
    whiteStone.getComponent(AudioSource).playOnce()
    blueStone.getComponent(Transform).position.set(-.1, .7, .2)
    yellowStone.getComponent(Transform).position.set(.2, .7, 0)
    redStone.getComponent(Transform).position.set(-0.1, .7, -.2)
    whiteStone.getComponent(Transform).position.set(0,.7,0)
    
}
function checkStone(stone){
    tapStones+=stone
    // log(tapStones)
    if(tapStones.length>=4){
        setTimeout(() => {
            if(tapStones==targetStones){
                log('win')
                redStone.getComponent(AudioSource).playOnce()
                isPuzzle3Open=true
                chinesePig.addComponentOrReplace(new utils.MoveTransformComponent(chinesePig.getComponent(Transform).position,new Vector3(0,.75,0),3))
    
            }else{
                resetStone()
                tapStones=''
            }
            return
        }, 3100);
    }
}