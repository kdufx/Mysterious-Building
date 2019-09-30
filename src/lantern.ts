import {AddGLTF} from './utils'
export function createLantern(){

    

    
    
    
    let lt3= lantern3(new Vector3(30.4, 7, 1))
    addStick1(new Vector3(-.4,-.2,0),lt3)
    addStick2(new Vector3(-.4,1.3,0),Quaternion.Euler(90,0,90),lt3)
    lantern3(new Vector3(-.8,0,0),lt3)
    //平行X
    let lt3_1= lantern3(new Vector3(30.4, 7, 6))
    addStick1(new Vector3(-.4,-.2,0),lt3_1)
    addStick2(new Vector3(-.4,1.3,0),Quaternion.Euler(90,0,90),lt3_1)
    lantern3(new Vector3(-.8,0,0),lt3_1)
    //平行Z
    // let lt3_2= lantern3(new Vector3(23.5, 7, .4))
    // addStick1(new Vector3(0,-.2,0.5),lt3_2)
    // addStick2(new Vector3(0,1.3,0.5),Quaternion.Euler(90,0,0),lt3_2)
    // lantern3(new Vector3(0,0,1),lt3_2)
    //短
    let lt3_2= lantern3(new Vector3(23.5, 6, .8))
    addStick1(new Vector3(0,0.2,0.4),lt3_2,2.5)
    addStick2(new Vector3(0,1.3,0.4),Quaternion.Euler(90,0,0),lt3_2)
    lantern3(new Vector3(0,0,.8),lt3_2)
    // let lt3_2= addStick1(new Vector3(23.5, 5, 1),null,2.5)
    // lantern3(new Vector3(.5, .2, ),lt3_2)
    // addStick2(new Vector3(0,1.3,0.5),Quaternion.Euler(90,0,0),lt3_2)
    // lantern3(new Vector3(0,0,1),lt3_2)


    //room1->room2
    
    lantern1(new Vector3(30, 6.1, 7.5))
    lantern2(new Vector3(30, 6.4, 9.5))
    lantern1(new Vector3(30, 6.8, 11.5))
    lantern2(new Vector3(30, 7.2, 13.5))
    lantern1(new Vector3(30, 7.9, 15.5))
    lantern2(new Vector3(30, 8.5, 17.5))
    lantern1(new Vector3(30, 9.3, 19.5))

    lantern1(new Vector3(27, 6.2, 8.5))
    lantern2(new Vector3(27, 6.5, 10.5))
    lantern1(new Vector3(27, 7.0, 12.5))
    lantern2(new Vector3(27, 7.5, 14.5))
    lantern1(new Vector3(27, 8.15, 16.5))
    lantern2(new Vector3(27, 9, 18.5))
    lantern1(new Vector3(27, 10.2, 20.5))

    //room2 
    let lt3_3= lantern3(new Vector3(30.6, 12.45, 23))
    addStick1(new Vector3(-.35,-.4,0),lt3_3,3.7)
    addStick2(new Vector3(-.35,1.3,0),Quaternion.Euler(90,0,90),lt3_3)
    lantern3(new Vector3(-.7,0,0),lt3_3)
    let lt3_4= lantern3(new Vector3(27.5, 12.45, 23))
    addStick1(new Vector3(-.35,-.4,0),lt3_4,3.7)
    addStick2(new Vector3(-.35,1.3,0),Quaternion.Euler(90,0,90),lt3_4)
    lantern3(new Vector3(-.7,0,0),lt3_4)

    let lt3_5= lantern3(new Vector3(25, 12.45, 30))
    addStick1(new Vector3(0,-.4,0.35),lt3_5,3.7)
    addStick2(new Vector3(0,1.3,0.35),Quaternion.Euler(90,0,0),lt3_5)
    lantern3(new Vector3(0,0,.7),lt3_5)
}
//竖棍s
export function addStick1(position, parent?:Entity,height?:number){
    let stick=new Entity()
    stick.addComponent(new BoxShape())
    stick.addComponent(new Transform({position:position,scale:new Vector3(.1,height?height:3.3,.1)}))
    let m=new Material()
    m.albedoColor=Color3.FromHexString('#3F231B')
    if(parent) stick.setParent(parent)
    stick.addComponent(m)
    engine.addEntity(stick)
    return stick
}
export function addStick2(position,rotation?, parent?:Entity,width?:number){
    let stick=new Entity()
    stick.addComponent(new BoxShape())
    stick.addComponent(new Transform({position:position,rotation:rotation?rotation:Quaternion.Zero(), scale:new Vector3(.1,width?width:1,.1)}))
    let m=new Material()
    m.albedoColor=Color3.FromHexString('#3F231B')
    if(parent) stick.setParent(parent)
    stick.addComponent(m)
    engine.addEntity(stick)
    return stick
}

export function lantern3(position,parent?:Entity,scale?:number){
    //圆红
    const chineseLantern_03 = new Entity()
    const gltfShape_40 = new GLTFShape('models/ChineseLantern_03/ChineseLantern_03.glb')
    chineseLantern_03.addComponentOrReplace(gltfShape_40)
    let sc=scale?scale:1
    const transform_94 = new Transform({
    position: position,
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(sc, sc, sc)
    })
    
    chineseLantern_03.addComponentOrReplace(transform_94)
    if(parent) chineseLantern_03.setParent(parent)
    engine.addEntity(chineseLantern_03)
    let stick=new Entity()
    stick.addComponent(new BoxShape())
    stick.addComponent(new Transform({position:new Vector3(0,.8,0),scale:new Vector3(.01,1,.01)}))
    let m=new Material()
    m.albedoColor=Color3.Red()//FromHexString('#2A1610')
    stick.setParent(chineseLantern_03)
    stick.addComponent(m)
    engine.addEntity(stick)
    return chineseLantern_03
}

export function lantern2(position,parent?:Entity){
    //扁黄
    const chineseLantern_02 = new Entity()
    const gltfShape_42 = new GLTFShape('models/ChineseLantern_02/ChineseLantern_02.glb')
    chineseLantern_02.addComponentOrReplace(gltfShape_42)
    const transform_96 = new Transform({
    position: position,
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
    })
    chineseLantern_02.addComponentOrReplace(transform_96)
    if(parent) chineseLantern_02.setParent(parent)
    engine.addEntity(chineseLantern_02)

    let stick=new Entity()
    stick.addComponent(new BoxShape())
    stick.addComponent(new Transform({position:new Vector3(0,.5,0),scale:new Vector3(.01,.6,.01)}))
    let m=new Material()
    m.albedoColor=Color3.FromHexString('#2A1610')
    stick.setParent(chineseLantern_02)
    stick.addComponent(m)
    engine.addEntity(stick)
    return chineseLantern_02
}
export function lantern1(position,parent?:Entity){
    //扁红
    const chineseLantern_01 = new Entity()
    const gltfShape_41 = new GLTFShape('models/ChineseLantern_01/ChineseLantern_01.glb')
    chineseLantern_01.addComponentOrReplace(gltfShape_41)
    const transform_95 = new Transform({
    position: position,
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
    })
    chineseLantern_01.addComponentOrReplace(transform_95)
    if(parent) chineseLantern_01.setParent(parent)
    engine.addEntity(chineseLantern_01)
    let stick=new Entity()
    stick.addComponent(new BoxShape())
    stick.addComponent(new Transform({position:new Vector3(0,.5,0),scale:new Vector3(.01,.6,.01)}))
    let m=new Material()
    m.albedoColor=Color3.FromHexString('#2A1610')
    stick.setParent(chineseLantern_01)
    stick.addComponent(m)
    engine.addEntity(stick)
    return chineseLantern_01
}