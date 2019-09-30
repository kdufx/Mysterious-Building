import {lantern3,addStick1,addStick2, lantern2} from './lantern'
export function createScene(){
    const scene = new Entity()
    const transform = new Transform({
    position: new Vector3(0, 0, 0),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
    })
    scene.addComponentOrReplace(transform)
    engine.addEntity(scene)

   

    const waterPatchFull_01 = new Entity()
    waterPatchFull_01.setParent(scene)
    const gltfShape_2 = new GLTFShape('models/WaterPatchFull_01/WaterPatchFull_01.glb')
    waterPatchFull_01.addComponentOrReplace(gltfShape_2)
    const transform_3 = new Transform({
    position: new Vector3(24, 0, 8),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
    })
    waterPatchFull_01.addComponentOrReplace(transform_3)
    engine.addEntity(waterPatchFull_01)

    const waterPatchFull_01_2 = new Entity()
    waterPatchFull_01_2.setParent(scene)
    waterPatchFull_01_2.addComponentOrReplace(gltfShape_2)
    const transform_4 = new Transform({
    position: new Vector3(8, 0, 32),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
    })
    waterPatchFull_01_2.addComponentOrReplace(transform_4)
    engine.addEntity(waterPatchFull_01_2)

    const floorBaseConcrete_01 = new Entity()
    floorBaseConcrete_01.setParent(scene)
    const gltfShape_3 = new GLTFShape('models/FloorBaseConcrete_01/FloorBaseConcrete_01.glb')
    floorBaseConcrete_01.addComponentOrReplace(gltfShape_3)
    const transform_5 = new Transform({
    position: new Vector3(8, 0, 8),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
    })
    floorBaseConcrete_01.addComponentOrReplace(transform_5)
    engine.addEntity(floorBaseConcrete_01)

    const floorBaseConcrete_01_2 = new Entity()
    floorBaseConcrete_01_2.setParent(scene)
    floorBaseConcrete_01_2.addComponentOrReplace(gltfShape_3)
    const transform_6 = new Transform({
    position: new Vector3(24, 0, 8),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
    })
    floorBaseConcrete_01_2.addComponentOrReplace(transform_6)
    engine.addEntity(floorBaseConcrete_01_2)

    const floorBaseConcrete_01_3 = new Entity()
    floorBaseConcrete_01_3.setParent(scene)
    floorBaseConcrete_01_3.addComponentOrReplace(gltfShape_3)
    const transform_7 = new Transform({
    position: new Vector3(8, 0, 24),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
    })
    floorBaseConcrete_01_3.addComponentOrReplace(transform_7)
    engine.addEntity(floorBaseConcrete_01_3)

    const floorBaseConcrete_01_4 = new Entity()
    floorBaseConcrete_01_4.setParent(scene)
    floorBaseConcrete_01_4.addComponentOrReplace(gltfShape_3)
    const transform_8 = new Transform({
    position: new Vector3(24, 0, 24),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
    })
    floorBaseConcrete_01_4.addComponentOrReplace(transform_8)
    engine.addEntity(floorBaseConcrete_01_4)

    const waterPatchFull_01_3 = new Entity()
    waterPatchFull_01_3.setParent(scene)
    waterPatchFull_01_3.addComponentOrReplace(gltfShape_2)
    const transform_9 = new Transform({
    position: new Vector3(16, 0, 32),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
    })
    waterPatchFull_01_3.addComponentOrReplace(transform_9)
    engine.addEntity(waterPatchFull_01_3)

    const waterPatchFull_01_4 = new Entity()
    waterPatchFull_01_4.setParent(scene)
    waterPatchFull_01_4.addComponentOrReplace(gltfShape_2)
    const transform_10 = new Transform({
    position: new Vector3(24, 0, 32),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
    })
    waterPatchFull_01_4.addComponentOrReplace(transform_10)
    engine.addEntity(waterPatchFull_01_4)

    const waterPatchFull_01_5 = new Entity()
    waterPatchFull_01_5.setParent(scene)
    waterPatchFull_01_5.addComponentOrReplace(gltfShape_2)
    const transform_11 = new Transform({
    position: new Vector3(32, 0, 24),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
    })
    waterPatchFull_01_5.addComponentOrReplace(transform_11)
    engine.addEntity(waterPatchFull_01_5)

    const waterPatchFull_01_6 = new Entity()
    waterPatchFull_01_6.setParent(scene)
    waterPatchFull_01_6.addComponentOrReplace(gltfShape_2)
    const transform_12 = new Transform({
    position: new Vector3(32, 0, 32),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
    })
    waterPatchFull_01_6.addComponentOrReplace(transform_12)
    engine.addEntity(waterPatchFull_01_6)

    const waterPatchFull_01_7 = new Entity()
    waterPatchFull_01_7.setParent(scene)
    waterPatchFull_01_7.addComponentOrReplace(gltfShape_2)
    const transform_13 = new Transform({
    position: new Vector3(32, 0, 16),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
    })
    waterPatchFull_01_7.addComponentOrReplace(transform_13)
    engine.addEntity(waterPatchFull_01_7)

    const waterPatchFull_01_8 = new Entity()
    waterPatchFull_01_8.setParent(scene)
    waterPatchFull_01_8.addComponentOrReplace(gltfShape_2)
    const transform_14 = new Transform({
    position: new Vector3(32, 0, 8),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
    })
    waterPatchFull_01_8.addComponentOrReplace(transform_14)
    engine.addEntity(waterPatchFull_01_8)

    const waterPatchFull_01_9 = new Entity()
    waterPatchFull_01_9.setParent(scene)
    waterPatchFull_01_9.addComponentOrReplace(gltfShape_2)
    const transform_15 = new Transform({
    position: new Vector3(8, 0, 24),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
    })
    waterPatchFull_01_9.addComponentOrReplace(transform_15)
    engine.addEntity(waterPatchFull_01_9)

    const waterPatchFull_01_10 = new Entity()
    waterPatchFull_01_10.setParent(scene)
    waterPatchFull_01_10.addComponentOrReplace(gltfShape_2)
    const transform_16 = new Transform({
    position: new Vector3(24, 0, 16),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
    })
    waterPatchFull_01_10.addComponentOrReplace(transform_16)
    engine.addEntity(waterPatchFull_01_10)

    const waterPatchFull_01_11 = new Entity()
    waterPatchFull_01_11.setParent(scene)
    waterPatchFull_01_11.addComponentOrReplace(gltfShape_2)
    const transform_17 = new Transform({
    position: new Vector3(8, 0, 8),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
    })
    waterPatchFull_01_11.addComponentOrReplace(transform_17)
    engine.addEntity(waterPatchFull_01_11)

    const waterPatchFull_01_12 = new Entity()
    waterPatchFull_01_12.setParent(scene)
    waterPatchFull_01_12.addComponentOrReplace(gltfShape_2)
    const transform_18 = new Transform({
    position: new Vector3(8, 0, 16),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
    })
    waterPatchFull_01_12.addComponentOrReplace(transform_18)
    engine.addEntity(waterPatchFull_01_12)

    const waterPatchFull_01_13 = new Entity()
    waterPatchFull_01_13.setParent(scene)
    waterPatchFull_01_13.addComponentOrReplace(gltfShape_2)
    const transform_19 = new Transform({
    position: new Vector3(16, 0, 8),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
    })
    waterPatchFull_01_13.addComponentOrReplace(transform_19)
    engine.addEntity(waterPatchFull_01_13)

    const waterPatchFull_01_14 = new Entity()
    waterPatchFull_01_14.setParent(scene)
    waterPatchFull_01_14.addComponentOrReplace(gltfShape_2)
    const transform_20 = new Transform({
    position: new Vector3(16, 0, 16),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
    })
    waterPatchFull_01_14.addComponentOrReplace(transform_20)
    engine.addEntity(waterPatchFull_01_14)

    const waterPatchFull_01_15 = new Entity()
    waterPatchFull_01_15.setParent(scene)
    waterPatchFull_01_15.addComponentOrReplace(gltfShape_2)
    const transform_21 = new Transform({
    position: new Vector3(16, 0, 24),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
    })
    waterPatchFull_01_15.addComponentOrReplace(transform_21)
    engine.addEntity(waterPatchFull_01_15)

    const waterPatchFull_01_16 = new Entity()
    waterPatchFull_01_16.setParent(scene)
    waterPatchFull_01_16.addComponentOrReplace(gltfShape_2)
    const transform_22 = new Transform({
    position: new Vector3(24, 0, 24),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
    })
    waterPatchFull_01_16.addComponentOrReplace(transform_22)
    engine.addEntity(waterPatchFull_01_16)

    //短桥
    const docksBridge_01 = new Entity()
    docksBridge_01.setParent(scene)
    const gltfShape_4 = new GLTFShape('models/DocksBridge_01/DocksBridge_01.glb')
    docksBridge_01.addComponentOrReplace(gltfShape_4)
    const transform_23 = new Transform({
    position: new Vector3(28.5, 6.7, 16),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
    })
    docksBridge_01.addComponentOrReplace(transform_23)
    engine.addEntity(docksBridge_01)

    const docksBridge_01_2 = new Entity()
    docksBridge_01_2.setParent(scene)
    docksBridge_01_2.addComponentOrReplace(gltfShape_4)
    const transform_24 = new Transform({
    position: new Vector3(28.5, 5.2, 11),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
    })
    docksBridge_01_2.addComponentOrReplace(transform_24)
    engine.addEntity(docksBridge_01_2)

    
    //长棍
    const fenceSticksEnd_01 = new Entity()
    fenceSticksEnd_01.setParent(scene)
    const gltfShape_5 = new GLTFShape('models/FenceSticksEnd_01/FenceSticksEnd_01.glb')
    fenceSticksEnd_01.addComponentOrReplace(gltfShape_5)
    const transform_25 = new Transform({
    position: new Vector3(27, 0, 6),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 8, 1)
    })
    fenceSticksEnd_01.addComponentOrReplace(transform_25)
    engine.addEntity(fenceSticksEnd_01)

    const fenceSticksEnd_02 = new Entity()
    fenceSticksEnd_02.addComponentOrReplace(gltfShape_5)
    fenceSticksEnd_02.addComponentOrReplace(new Transform({
        position: new Vector3(27, 0, 23),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 12, 1)
        }))
    engine.addEntity(fenceSticksEnd_02)


    //藤蔓
    const vines_02 = new Entity()
    const gltfShape_53 = new GLTFShape('models/Vines_02/Vines_02.glb')
    vines_02.addComponentOrReplace(gltfShape_53)
    const transform_108 = new Transform({
    position: new Vector3(30, 7, 15.5),
    rotation: Quaternion.Euler(-20,90,0),
    scale: new Vector3(3.2, 1, 1)
    })
    vines_02.addComponentOrReplace(transform_108)
    engine.addEntity(vines_02)

    const vines_02_1 = new Entity()
    vines_02_1.addComponentOrReplace(gltfShape_53)
    const transform_109 = new Transform({
    position: new Vector3(27, 7, 15.5),
    rotation: Quaternion.Euler(-20,90,0),
    scale: new Vector3(3.2, 1, 1)
    })
    vines_02_1.addComponentOrReplace(transform_109)
    engine.addEntity(vines_02_1)

    const bamboo_02 = new Entity()
    bamboo_02.setParent(scene)
    const gltfShape_6 = new GLTFShape('models/Bamboo_02/Bamboo_02.glb')
    bamboo_02.addComponentOrReplace(gltfShape_6)
    const transform_26 = new Transform({
    position: new Vector3(21.5, 0, 11.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
    })
    bamboo_02.addComponentOrReplace(transform_26)
    engine.addEntity(bamboo_02)

    const boat_01 = new Entity()
    boat_01.setParent(scene)
    const gltfShape_7 = new GLTFShape('models/Boat_01/Boat_01.glb')
    boat_01.addComponentOrReplace(gltfShape_7)
    const transform_27 = new Transform({
    position: new Vector3(19, 0, 7),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(.7, .7, .7)
    })
    boat_01.addComponentOrReplace(transform_27)
    engine.addEntity(boat_01)

    // const floor_Wood_4M = new Entity()
    // floor_Wood_4M.setParent(scene)
    // const gltfShape_8 = new GLTFShape('models/Floor_Wood_4M/Floor_Wood_4M.glb')
    // floor_Wood_4M.addComponentOrReplace(gltfShape_8)
    // const transform_28 = new Transform({
    // position: new Vector3(5, 0.5, 5),
    // rotation: new Quaternion(0, 0, 0, 1),
    // scale: new Vector3(1, 1, 1)
    // })
    // floor_Wood_4M.addComponentOrReplace(transform_28)
    // engine.addEntity(floor_Wood_4M)

    const log_Large_01 = new Entity()
    log_Large_01.setParent(scene)
    const gltfShape_9 = new GLTFShape('models/Log_Large_01/Log_Large_01.glb')
    log_Large_01.addComponentOrReplace(gltfShape_9)
    const transform_29 = new Transform({
    position: new Vector3(25, 2.5, 24),
    rotation: new Quaternion(0, 0, -0.7071067811865478, 0.7071067811865477),
    scale: new Vector3(1, 1, 1)
    })
    log_Large_01.addComponentOrReplace(transform_29)
    engine.addEntity(log_Large_01)

    //正方板
    const gltfShape_10 = new GLTFShape('models/FloorBlock_03/FloorBlock_03.glb')
    // const floorBlock_03 = new Entity()
    // floorBlock_03.setParent(scene)
    // floorBlock_03.addComponentOrReplace(gltfShape_10)
    // const transform_30 = new Transform({
    // position: new Vector3(9, 0, 12),
    // rotation: new Quaternion(0, 0, 0, 1),
    // scale: new Vector3(1, 1, 1)
    // })
    // floorBlock_03.addComponentOrReplace(transform_30)
    // engine.addEntity(floorBlock_03)
    const floorBlock_03_2 = new Entity()
    floorBlock_03_2.setParent(scene)
    floorBlock_03_2.addComponentOrReplace(gltfShape_10)
    const transform_37 = new Transform({
    position: new Vector3(9.5, 0, 16),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
    })
    floorBlock_03_2.addComponentOrReplace(transform_37)
    engine.addEntity(floorBlock_03_2)

    const floorBlock_03_3 = new Entity()
    floorBlock_03_3.setParent(scene)
    floorBlock_03_3.addComponentOrReplace(gltfShape_10)
    const transform_41 = new Transform({
    position: new Vector3(8.5, 0, 20),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
    })
    floorBlock_03_3.addComponentOrReplace(transform_41)
    engine.addEntity(floorBlock_03_3)

    const log_Large_01_2 = new Entity()
    log_Large_01_2.setParent(scene)
    log_Large_01_2.addComponentOrReplace(gltfShape_9)
    const transform_31 = new Transform({
    position: new Vector3(24, 2.5, 5.5),
    rotation: new Quaternion(0, 0, -0.7071067811865478, 0.7071067811865477),
    scale: new Vector3(1, 1, 1)
    })
    log_Large_01_2.addComponentOrReplace(transform_31)
    engine.addEntity(log_Large_01_2)

    const log_Large_01_3 = new Entity()
    log_Large_01_3.setParent(scene)
    log_Large_01_3.addComponentOrReplace(gltfShape_9)
    const transform_32 = new Transform({
    position: new Vector3(24, 2.5, 1.5),
    rotation: new Quaternion(0, 0, -0.7071067811865478, 0.7071067811865477),
    scale: new Vector3(1, 1, 1)
    })
    log_Large_01_3.addComponentOrReplace(transform_32)
    engine.addEntity(log_Large_01_3)

    const log_Large_01_4 = new Entity()
    log_Large_01_4.setParent(scene)
    log_Large_01_4.addComponentOrReplace(gltfShape_9)
    const transform_33 = new Transform({
    position: new Vector3(28.5, 2.5, 2),
    rotation: new Quaternion(0, 0, -0.7071067811865478, 0.7071067811865477),
    scale: new Vector3(1, 1, 1)
    })
    log_Large_01_4.addComponentOrReplace(transform_33)
    engine.addEntity(log_Large_01_4)

    const rockLargeMoss_01 = new Entity()
    rockLargeMoss_01.setParent(scene)
    const gltfShape_11 = new GLTFShape('models/RockLargeMoss_01/RockLargeMoss_01.glb')
    rockLargeMoss_01.addComponentOrReplace(gltfShape_11)
    const transform_34 = new Transform({
    position: new Vector3(18.5, 0, 27.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
    })
    rockLargeMoss_01.addComponentOrReplace(transform_34)
    engine.addEntity(rockLargeMoss_01)
    //小树
    const treeSycamore_03 = new Entity()
    treeSycamore_03.setParent(scene)
    const gltfShape_12 = new GLTFShape('models/TreeSycamore_03/TreeSycamore_03.glb')
    treeSycamore_03.addComponentOrReplace(gltfShape_12)
    const transform_35 = new Transform({
    position: new Vector3(13, 2.7, 24.2),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
    })
    treeSycamore_03.addComponentOrReplace(transform_35)
    engine.addEntity(treeSycamore_03)
    //长桥
    const bridge_05 = new Entity()
    bridge_05.setParent(scene)
    const gltfShape_13 = new GLTFShape('models/Bridge_05/Bridge_05.glb')
    bridge_05.addComponentOrReplace(gltfShape_13)
    const transform_36 = new Transform({
    position: new Vector3(9, 0, 7.5),
    rotation: new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865475),
    scale: new Vector3(1, 1, 1)
    })
    bridge_05.addComponentOrReplace(transform_36)
    engine.addEntity(bridge_05)

    

    const treeHouse_01 = new Entity()
    treeHouse_01.setParent(scene)
    const gltfShape_14 = new GLTFShape('models/TreeHouse_01/TreeHouse_01.glb')
    treeHouse_01.addComponentOrReplace(gltfShape_14)
    const transform_38 = new Transform({
    position: new Vector3(4, 0, 20),
    rotation: new Quaternion(0, 1, 0, 9.71445146547012e-17),
    scale: new Vector3(1, 1, 1)
    })
    treeHouse_01.addComponentOrReplace(transform_38)
    engine.addEntity(treeHouse_01)

    const bush_03 = new Entity()
    bush_03.setParent(scene)
    const gltfShape_15 = new GLTFShape('models/Bush_03/Bush_03.glb')
    bush_03.addComponentOrReplace(gltfShape_15)
    const transform_39 = new Transform({
    position: new Vector3(18, 0, 26),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
    })
    bush_03.addComponentOrReplace(transform_39)
    engine.addEntity(bush_03)

    //docks
    const docksModuleMedium_01 = new Entity()
    docksModuleMedium_01.setParent(scene)
    const gltfShape_16 = new GLTFShape('models/DocksModuleMedium_01/DocksModuleMedium_01.glb')
    docksModuleMedium_01.addComponentOrReplace(gltfShape_16)
    const transform_40 = new Transform({
    position: new Vector3(20, -0.5, 2.5),
    rotation: Quaternion.Euler(0,90,0),
    scale: new Vector3(1, 1, 1.3)
    })
    docksModuleMedium_01.addComponentOrReplace(transform_40)
    engine.addEntity(docksModuleMedium_01)

    

    

    //长板
    const fenceWoodMedium_01 = new Entity()
    fenceWoodMedium_01.setParent(scene)
    const gltfShape_18 = new GLTFShape('models/FenceWoodMedium_01/FenceWoodMedium_01.glb')
    fenceWoodMedium_01.addComponentOrReplace(gltfShape_18)
    const transform_43 = new Transform({
    position: new Vector3(6.5, 0.5, 3.5),
    rotation: new Quaternion(0, 0, 0.7071067811865476, 0.7071067811865478),
    scale: new Vector3(1, 2, 1)
    })
    fenceWoodMedium_01.addComponentOrReplace(transform_43)
    engine.addEntity(fenceWoodMedium_01)

    const fenceWoodMedium_01_2 = new Entity()
    fenceWoodMedium_01_2.setParent(scene)
    fenceWoodMedium_01_2.addComponentOrReplace(gltfShape_18)
    const transform_44 = new Transform({
    position: new Vector3(2.5, 0.5, 3.5),
    rotation: new Quaternion(0, 0, 0.7071067811865476, 0.7071067811865478),
    scale: new Vector3(1, 1, 1)
    })
    fenceWoodMedium_01_2.addComponentOrReplace(transform_44)
    engine.addEntity(fenceWoodMedium_01_2)

    const fenceWoodMedium_2 = new Entity()
    fenceWoodMedium_2.setParent(scene)
    fenceWoodMedium_2.addComponentOrReplace(gltfShape_18)
    fenceWoodMedium_2.addComponentOrReplace(new Transform({
        position: new Vector3(15.5, 0.5, 6.5),
        rotation: new Quaternion(0, 0, 0.7071067811865476, 0.7071067811865478),
        scale: new Vector3(1, 7, 1)
        }))
    engine.addEntity(fenceWoodMedium_2)

    const fenceWoodMedium_01_3 = new Entity()
    fenceWoodMedium_01_3.setParent(scene)
    fenceWoodMedium_01_3.addComponentOrReplace(gltfShape_18)
    const transform_45 = new Transform({
    position: new Vector3(4.5, 0.5, 3.5),
    rotation: new Quaternion(0, 0, 0.7071067811865476, 0.7071067811865478),
    scale: new Vector3(1, 1, 1)
    })
    fenceWoodMedium_01_3.addComponentOrReplace(transform_45)
    engine.addEntity(fenceWoodMedium_01_3)

    const fenceWoodMedium_01_4 = new Entity()
    fenceWoodMedium_01_4.setParent(scene)
    fenceWoodMedium_01_4.addComponentOrReplace(gltfShape_18)
    const transform_46 = new Transform({
    position: new Vector3(8.5, 0.5, 3.5),
    rotation: new Quaternion(0, 0, 0.7071067811865476, 0.7071067811865478),
    scale: new Vector3(1, 1, 1)
    })
    fenceWoodMedium_01_4.addComponentOrReplace(transform_46)
    engine.addEntity(fenceWoodMedium_01_4)

    const fenceWoodMedium_01_5 = new Entity()
    fenceWoodMedium_01_5.setParent(scene)
    fenceWoodMedium_01_5.addComponentOrReplace(gltfShape_18)
    const transform_47 = new Transform({
    position: new Vector3(10.5, 0.5, 3.5),
    rotation: new Quaternion(0, 0, 0.7071067811865476, 0.7071067811865478),
    scale: new Vector3(1, 1, 1)
    })
    fenceWoodMedium_01_5.addComponentOrReplace(transform_47)
    engine.addEntity(fenceWoodMedium_01_5)

    const fenceWoodMedium_01_6 = new Entity()
    fenceWoodMedium_01_6.setParent(scene)
    fenceWoodMedium_01_6.addComponentOrReplace(gltfShape_18)
    const transform_48 = new Transform({
    position: new Vector3(12.5, 0.5, 3.5),
    rotation: new Quaternion(0, 0, 0.7071067811865476, 0.7071067811865478),
    scale: new Vector3(1, 1, 1)
    })
    fenceWoodMedium_01_6.addComponentOrReplace(transform_48)
    engine.addEntity(fenceWoodMedium_01_6)

    const fenceWoodMedium_01_7 = new Entity()
    fenceWoodMedium_01_7.setParent(scene)
    fenceWoodMedium_01_7.addComponentOrReplace(gltfShape_18)
    const transform_49 = new Transform({
    position: new Vector3(14.5, 0.5, 3.5),
    rotation: new Quaternion(0, 0, 0.7071067811865476, 0.7071067811865478),
    scale: new Vector3(1, 1, 1)
    })
    fenceWoodMedium_01_7.addComponentOrReplace(transform_49)
    engine.addEntity(fenceWoodMedium_01_7)

    //箱子
    const crate_01 = new Entity()
    crate_01.setParent(scene)
    const gltfShape_19 = new GLTFShape('models/Crate_01/Crate_01.glb')
    crate_01.addComponentOrReplace(gltfShape_19)
    const transform_50 = new Transform({
    position: new Vector3(4, 0.5, 3.7),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
    })
    crate_01.addComponentOrReplace(transform_50)
    engine.addEntity(crate_01)

    

    const chineseGate_01 = new Entity()
    chineseGate_01.setParent(scene)
    const gltfShape_21 = new GLTFShape('models/ChineseGong_01/ChineseGate_01.glb')
    chineseGate_01.addComponentOrReplace(gltfShape_21)
    const transform_52 = new Transform({
    position: new Vector3(17.5, 0, 12.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
    })
    chineseGate_01.addComponentOrReplace(transform_52)
    engine.addEntity(chineseGate_01)

    const chineseGate_03 = new Entity()
    chineseGate_03.setParent(scene)
    const gltfShape_22 = new GLTFShape('models/ChineseGate_03/ChineseGate_03.glb')
    chineseGate_03.addComponentOrReplace(gltfShape_22)
    const transform_53 = new Transform({
    position: new Vector3(8.5, 0, 4.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
    })
    chineseGate_03.addComponentOrReplace(transform_53)
    engine.addEntity(chineseGate_03)

    //第一间长板
    const fenceWoodMedium_01_8 = new Entity()
    fenceWoodMedium_01_8.setParent(scene)
    fenceWoodMedium_01_8.addComponentOrReplace(gltfShape_18)
    const transform_54 = new Transform({
    position: new Vector3(24.5, 5, 6.5),
    rotation: new Quaternion(0, 0, 0.7071067811865476, 0.7071067811865478),
    scale: new Vector3(1, 1, 1)
    })
    fenceWoodMedium_01_8.addComponentOrReplace(transform_54)
    engine.addEntity(fenceWoodMedium_01_8)

    const fenceWoodMedium_01_9 = new Entity()
    fenceWoodMedium_01_9.setParent(scene)
    fenceWoodMedium_01_9.addComponentOrReplace(gltfShape_18)
    const transform_55 = new Transform({
    position: new Vector3(24.5, 5, 3.5),
    rotation: new Quaternion(0, 0, 0.7071067811865476, 0.7071067811865478),
    scale: new Vector3(1, 1, 1)
    })
    fenceWoodMedium_01_9.addComponentOrReplace(transform_55)
    engine.addEntity(fenceWoodMedium_01_9)

    const fenceWoodMedium_01_10 = new Entity()
    fenceWoodMedium_01_10.setParent(scene)
    fenceWoodMedium_01_10.addComponentOrReplace(gltfShape_18)
    const transform_56 = new Transform({
    position: new Vector3(26.5, 5, 3.5),
    rotation: new Quaternion(0, 0, 0.7071067811865476, 0.7071067811865478),
    scale: new Vector3(1, 1, 1)
    })
    fenceWoodMedium_01_10.addComponentOrReplace(transform_56)
    engine.addEntity(fenceWoodMedium_01_10)

    const fenceWoodMedium_01_11 = new Entity()
    fenceWoodMedium_01_11.setParent(scene)
    fenceWoodMedium_01_11.addComponentOrReplace(gltfShape_18)
    const transform_57 = new Transform({
    position: new Vector3(26.5, 5, 6.5),
    rotation: new Quaternion(0, 0, 0.7071067811865476, 0.7071067811865478),
    scale: new Vector3(1, 1, 1)
    })
    fenceWoodMedium_01_11.addComponentOrReplace(transform_57)
    engine.addEntity(fenceWoodMedium_01_11)

    const fenceWoodMedium_01_12 = new Entity()
    fenceWoodMedium_01_12.setParent(scene)
    fenceWoodMedium_01_12.addComponentOrReplace(gltfShape_18)
    const transform_58 = new Transform({
    position: new Vector3(30.5, 5, 3.5),
    rotation: new Quaternion(0, 0, 0.7071067811865476, 0.7071067811865478),
    scale: new Vector3(1, 1, 1)
    })
    fenceWoodMedium_01_12.addComponentOrReplace(transform_58)
    engine.addEntity(fenceWoodMedium_01_12)

    const fenceWoodMedium_01_13 = new Entity()
    fenceWoodMedium_01_13.setParent(scene)
    fenceWoodMedium_01_13.addComponentOrReplace(gltfShape_18)
    const transform_59 = new Transform({
    position: new Vector3(28.5, 5, 3.5),
    rotation: new Quaternion(0, 0, 0.7071067811865476, 0.7071067811865478),
    scale: new Vector3(1, 1, 1)
    })
    fenceWoodMedium_01_13.addComponentOrReplace(transform_59)
    engine.addEntity(fenceWoodMedium_01_13)

    // const fenceWoodMedium_01_14 = new Entity()
    // fenceWoodMedium_01_14.setParent(scene)
    // fenceWoodMedium_01_14.addComponentOrReplace(gltfShape_18)
    // const transform_60 = new Transform({
    // position: new Vector3(28, 10.5, 27.5),
    // rotation: new Quaternion(0.5000000000000001, 0.4999999999999999, 0.5000000000000001, 0.5),
    // scale: new Vector3(1, 1, 1)
    // })
    // fenceWoodMedium_01_14.addComponentOrReplace(transform_60)
    // engine.addEntity(fenceWoodMedium_01_14)

    const fenceWoodMedium_01_15 = new Entity()
    fenceWoodMedium_01_15.setParent(scene)
    fenceWoodMedium_01_15.addComponentOrReplace(gltfShape_18)
    const transform_61 = new Transform({
    position: new Vector3(30.5, 5, 6.5),
    rotation: new Quaternion(0, 0, 0.7071067811865476, 0.7071067811865478),
    scale: new Vector3(1, 1, 1)
    })
    fenceWoodMedium_01_15.addComponentOrReplace(transform_61)
    engine.addEntity(fenceWoodMedium_01_15)

    // const chineseStatueLion_01 = new Entity()
    // chineseStatueLion_01.setParent(scene)
    // const gltfShape_23 = new GLTFShape('models/ChineseStatueLion_01/ChineseStatueLion_01.glb')
    // chineseStatueLion_01.addComponentOrReplace(gltfShape_23)
    // const transform_62 = new Transform({
    // position: new Vector3(11.5, 0, 2),
    // rotation: new Quaternion(0, -1.0000000000000002, 0, -4.163336342344337e-17),
    // scale: new Vector3(1, 1, 1)
    // })
    // chineseStatueLion_01.addComponentOrReplace(transform_62)
    // engine.addEntity(chineseStatueLion_01)

    const table_04 = new Entity()
    table_04.setParent(scene)
    const gltfShape_24 = new GLTFShape('models/Table_04/Table_04.glb')
    table_04.addComponentOrReplace(gltfShape_24)
    const transform_63 = new Transform({
    position: new Vector3(27, 5, 3.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
    })
    table_04.addComponentOrReplace(transform_63)
    engine.addEntity(table_04)

    const fencePicketMedium_01 = new Entity()
    fencePicketMedium_01.setParent(scene)
    const gltfShape_25 = new GLTFShape('models/FencePicketMedium_01/FencePicketMedium_01.glb')
    fencePicketMedium_01.addComponentOrReplace(gltfShape_25)
    const transform_64 = new Transform({
    position: new Vector3(25.5, 5, 0.5),
    rotation: new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865475),
    scale: new Vector3(1, 1, 1)
    })
    fencePicketMedium_01.addComponentOrReplace(transform_64)
    engine.addEntity(fencePicketMedium_01)

    const fencePicketMedium_01_2 = new Entity()
    fencePicketMedium_01_2.setParent(scene)
    fencePicketMedium_01_2.addComponentOrReplace(gltfShape_25)
    const transform_65 = new Transform({
    position: new Vector3(30.5, 5, 6.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
    })
    fencePicketMedium_01_2.addComponentOrReplace(transform_65)
    engine.addEntity(fencePicketMedium_01_2)

    const fencePicketMedium_01_3 = new Entity()
    fencePicketMedium_01_3.setParent(scene)
    fencePicketMedium_01_3.addComponentOrReplace(gltfShape_25)
    const transform_66 = new Transform({
    position: new Vector3(30.5, 5, 3.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
    })
    fencePicketMedium_01_3.addComponentOrReplace(transform_66)
    engine.addEntity(fencePicketMedium_01_3)

    const fencePicketMedium_01_4 = new Entity()
    fencePicketMedium_01_4.setParent(scene)
    fencePicketMedium_01_4.addComponentOrReplace(gltfShape_25)
    const transform_67 = new Transform({
    position: new Vector3(30.5, 5, 0.5),
    rotation: new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865475),
    scale: new Vector3(1, 1, 1)
    })
    fencePicketMedium_01_4.addComponentOrReplace(transform_67)
    engine.addEntity(fencePicketMedium_01_4)

    const fencePicketMedium_01_5 = new Entity()
    fencePicketMedium_01_5.setParent(scene)
    fencePicketMedium_01_5.addComponentOrReplace(gltfShape_25)
    const transform_68 = new Transform({
    position: new Vector3(27.5, 5, 0.5),
    rotation: new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865475),
    scale: new Vector3(1, 1, 1)
    })
    fencePicketMedium_01_5.addComponentOrReplace(transform_68)
    engine.addEntity(fencePicketMedium_01_5)

    //街灯
    // const lampPost_04 = new Entity()
    // lampPost_04.setParent(scene)
    // const gltfShape_26 = new GLTFShape('models/LampPost_04/LampPost_04.glb')
    // lampPost_04.addComponentOrReplace(gltfShape_26)
    // const transform_69 = new Transform({
    // position: new Vector3(29.5, 5, 4.5),
    // rotation: new Quaternion(0, 0, 0, 1),
    // scale: new Vector3(1, 1, 1)
    // })
    // lampPost_04.addComponentOrReplace(transform_69)
    // engine.addEntity(lampPost_04)

    const pot_01 = new Entity()
    pot_01.setParent(scene)
    const gltfShape_27 = new GLTFShape('models/Pot_01/Pot_01.glb')
    pot_01.addComponentOrReplace(gltfShape_27)
    const transform_70 = new Transform({
    position: new Vector3(23.5, 5, 5.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
    })
    pot_01.addComponentOrReplace(transform_70)
    engine.addEntity(pot_01)
    

    const sellingGoods_03 = new Entity()
    sellingGoods_03.setParent(scene)
    const gltfShape_30 = new GLTFShape('models/SellingGoods_03/SellingGoods_03.glb')
    sellingGoods_03.addComponentOrReplace(gltfShape_30)
    const transform_73 = new Transform({
    position: new Vector3(29, 5, 2),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
    })
    sellingGoods_03.addComponentOrReplace(transform_73)
    engine.addEntity(sellingGoods_03)


   

    const log_Large_01_5 = new Entity()
    log_Large_01_5.setParent(scene)
    log_Large_01_5.addComponentOrReplace(gltfShape_9)
    const transform_76 = new Transform({
    position: new Vector3(28, 2.5, 5.5),
    rotation: new Quaternion(0, 0, -0.7071067811865478, 0.7071067811865477),
    scale: new Vector3(1, 1, 1)
    })
    log_Large_01_5.addComponentOrReplace(transform_76)
    engine.addEntity(log_Large_01_5)

    const log_Large_01_6 = new Entity()
    log_Large_01_6.setParent(scene)
    log_Large_01_6.addComponentOrReplace(gltfShape_9)
    const transform_77 = new Transform({
    position: new Vector3(25, 7.5, 24),
    rotation: new Quaternion(0, 0, -0.7071067811865478, 0.7071067811865477),
    scale: new Vector3(1, 1, 1)
    })
    log_Large_01_6.addComponentOrReplace(transform_77)
    engine.addEntity(log_Large_01_6)

    const log_Large_01_7 = new Entity()
    log_Large_01_7.setParent(scene)
    log_Large_01_7.addComponentOrReplace(gltfShape_9)
    const transform_78 = new Transform({
    position: new Vector3(30, 2.5, 29),
    rotation: new Quaternion(0, 0, -0.7071067811865478, 0.7071067811865477),
    scale: new Vector3(1, 1, 1)
    })
    log_Large_01_7.addComponentOrReplace(transform_78)
    engine.addEntity(log_Large_01_7)

    const log_Large_01_8 = new Entity()
    log_Large_01_8.setParent(scene)
    log_Large_01_8.addComponentOrReplace(gltfShape_9)
    const transform_79 = new Transform({
    position: new Vector3(24.5, 2.5, 29.5),
    rotation: new Quaternion(0, 0, -0.7071067811865478, 0.7071067811865477),
    scale: new Vector3(1, 1, 1)
    })
    log_Large_01_8.addComponentOrReplace(transform_79)
    engine.addEntity(log_Large_01_8)

    const log_Large_01_9 = new Entity()
    log_Large_01_9.setParent(scene)
    log_Large_01_9.addComponentOrReplace(gltfShape_9)
    const transform_80 = new Transform({
    position: new Vector3(30, 2.5, 24),
    rotation: new Quaternion(0, 0, -0.7071067811865478, 0.7071067811865477),
    scale: new Vector3(1, 1, 1)
    })
    log_Large_01_9.addComponentOrReplace(transform_80)
    engine.addEntity(log_Large_01_9)

    const log_Large_01_10 = new Entity()
    log_Large_01_10.setParent(scene)
    log_Large_01_10.addComponentOrReplace(gltfShape_9)
    const transform_81 = new Transform({
    position: new Vector3(30, 7.5, 24),
    rotation: new Quaternion(0, 0, -0.7071067811865478, 0.7071067811865477),
    scale: new Vector3(1, 1, 1)
    })
    log_Large_01_10.addComponentOrReplace(transform_81)
    engine.addEntity(log_Large_01_10)

    const log_Large_01_11 = new Entity()
    log_Large_01_11.setParent(scene)
    log_Large_01_11.addComponentOrReplace(gltfShape_9)
    const transform_82 = new Transform({
    position: new Vector3(30, 7.5, 29),
    rotation: new Quaternion(0, 0, -0.7071067811865478, 0.7071067811865477),
    scale: new Vector3(1, 1, 1)
    })
    log_Large_01_11.addComponentOrReplace(transform_82)
    engine.addEntity(log_Large_01_11)

    const log_Large_01_12 = new Entity()
    log_Large_01_12.setParent(scene)
    log_Large_01_12.addComponentOrReplace(gltfShape_9)
    const transform_83 = new Transform({
    position: new Vector3(24.5, 7.5, 29.5),
    rotation: new Quaternion(0, 0, -0.7071067811865478, 0.7071067811865477),
    scale: new Vector3(1, 1, 1)
    })
    log_Large_01_12.addComponentOrReplace(transform_83)
    engine.addEntity(log_Large_01_12)


    const fenceWoodMedium_01_16 = new Entity()
    fenceWoodMedium_01_16.setParent(scene)
    fenceWoodMedium_01_16.addComponentOrReplace(gltfShape_18)
    const transform_84 = new Transform({
    position: new Vector3(28.5, 5, 6.5),
    rotation: new Quaternion(0, 0, 0.7071067811865476, 0.7071067811865478),
    scale: new Vector3(1, 1, 1)
    })
    fenceWoodMedium_01_16.addComponentOrReplace(transform_84)
    engine.addEntity(fenceWoodMedium_01_16)

    

    // const fenceWoodMedium_01_18 = new Entity()
    // fenceWoodMedium_01_18.setParent(scene)
    // fenceWoodMedium_01_18.addComponentOrReplace(gltfShape_18)
    // const transform_86 = new Transform({
    // position: new Vector3(32, 10.5, 25.5),
    // rotation: new Quaternion(0.5000000000000001, 0.4999999999999999, 0.5000000000000001, 0.5),
    // scale: new Vector3(1, 1, 1)
    // })
    // fenceWoodMedium_01_18.addComponentOrReplace(transform_86)
    // engine.addEntity(fenceWoodMedium_01_18)

    const rockBig_07 = new Entity()
    rockBig_07.setParent(scene)
    const gltfShape_33 = new GLTFShape('models/RockBig_07/RockBig_07.glb')
    rockBig_07.addComponentOrReplace(gltfShape_33)
    const transform_87 = new Transform({
    position: new Vector3(12.5, 0, 26.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
    })
    rockBig_07.addComponentOrReplace(transform_87)
    engine.addEntity(rockBig_07)

    const rockSand_01 = new Entity()
    rockSand_01.setParent(scene)
    const gltfShape_34 = new GLTFShape('models/RockSand_01/RockSand_01.glb')
    rockSand_01.addComponentOrReplace(gltfShape_34)
    const transform_88 = new Transform({
    position: new Vector3(9.5, 0, 24),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
    })
    rockSand_01.addComponentOrReplace(transform_88)
    engine.addEntity(rockSand_01)

    const tree_Forest_Pink_01 = new Entity()
    tree_Forest_Pink_01.setParent(scene)
    const gltfShape_35 = new GLTFShape('models/Tree_Forest_Pink_01/Tree_Forest_Pink_01.glb')
    tree_Forest_Pink_01.addComponentOrReplace(gltfShape_35)
    const transform_89 = new Transform({
    position: new Vector3(4, 0, 13.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
    })
    tree_Forest_Pink_01.addComponentOrReplace(transform_89)
    engine.addEntity(tree_Forest_Pink_01)

    const tree_Forest_Pink_02 = new Entity()
    tree_Forest_Pink_02.setParent(scene)
    const gltfShape_36 = new GLTFShape('models/Tree_Forest_Pink_02/Tree_Forest_Pink_02.glb')
    tree_Forest_Pink_02.addComponentOrReplace(gltfShape_36)
    const transform_90 = new Transform({
    position: new Vector3(17.5, 0, 15),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
    })
    tree_Forest_Pink_02.addComponentOrReplace(transform_90)
    engine.addEntity(tree_Forest_Pink_02)

    const tree_Forest_Pink_04 = new Entity()
    tree_Forest_Pink_04.setParent(scene)
    const gltfShape_37 = new GLTFShape('models/Tree_Forest_Pink_04/Tree_Forest_Pink_04.glb')
    tree_Forest_Pink_04.addComponentOrReplace(gltfShape_37)
    const transform_91 = new Transform({
    position: new Vector3(22, 0, 28),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
    })
    tree_Forest_Pink_04.addComponentOrReplace(transform_91)
    engine.addEntity(tree_Forest_Pink_04)

    const grassPatchSmall_04 = new Entity()
    grassPatchSmall_04.setParent(scene)
    const gltfShape_38 = new GLTFShape('models/GrassPatchSmall_04/GrassPatchSmall_04.glb')
    grassPatchSmall_04.addComponentOrReplace(gltfShape_38)
    const transform_92 = new Transform({
    position: new Vector3(4, 0, 13.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
    })
    grassPatchSmall_04.addComponentOrReplace(transform_92)
    engine.addEntity(grassPatchSmall_04)

    const grassPatchSmall_05 = new Entity()
    grassPatchSmall_05.setParent(scene)
    const gltfShape_39 = new GLTFShape('models/GrassPatchSmall_05/GrassPatchSmall_05.glb')
    grassPatchSmall_05.addComponentOrReplace(gltfShape_39)
    const transform_93 = new Transform({
    position: new Vector3(21, 0, 12.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
    })
    grassPatchSmall_05.addComponentOrReplace(transform_93)
    engine.addEntity(grassPatchSmall_05)

   

    

    

    // const chineseLantern_03_2 = new Entity()
    // chineseLantern_03_2.setParent(scene)
    // chineseLantern_03_2.addComponentOrReplace(gltfShape_40)
    // const transform_97 = new Transform({
    // position: new Vector3(28.5, 6, 4.5),
    // rotation: new Quaternion(0, 0, 0, 1),
    // scale: new Vector3(1, 1, 1)
    // })
    // chineseLantern_03_2.addComponentOrReplace(transform_97)
    // engine.addEntity(chineseLantern_03_2)

    

    const mushroom_01 = new Entity()
    mushroom_01.setParent(scene)
    const gltfShape_44 = new GLTFShape('models/Mushroom_01/Mushroom_01.glb')
    mushroom_01.addComponentOrReplace(gltfShape_44)
    const transform_99 = new Transform({
    position: new Vector3(20.5, 0, 15),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
    })
    mushroom_01.addComponentOrReplace(transform_99)
    engine.addEntity(mushroom_01)

    const plant_05 = new Entity()
    plant_05.setParent(scene)
    const gltfShape_45 = new GLTFShape('models/Plant_05/Plant_05.glb')
    plant_05.addComponentOrReplace(gltfShape_45)
    const transform_100 = new Transform({
    position: new Vector3(19, 0, 26),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
    })
    plant_05.addComponentOrReplace(transform_100)
    engine.addEntity(plant_05)

    


    const grass05 = new Entity()
    grass05.setParent(scene)
    const gltfShape_51 = new GLTFShape('models/Grass_05/Grass05.glb')
    grass05.addComponentOrReplace(gltfShape_51)
    const transform_106 = new Transform({
    position: new Vector3(21, 0, 24),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
    })
    grass05.addComponentOrReplace(transform_106)
    engine.addEntity(grass05)

    const grassPatchLarge_05 = new Entity()
    grassPatchLarge_05.setParent(scene)
    const gltfShape_52 = new GLTFShape('models/GrassPatchLarge_05/GrassPatchLarge_05.glb')
    grassPatchLarge_05.addComponentOrReplace(gltfShape_52)
    const transform_107 = new Transform({
    position: new Vector3(17.5, 0, 12.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1.5, 1.1, 1.1)
    })
    grassPatchLarge_05.addComponentOrReplace(transform_107)
    engine.addEntity(grassPatchLarge_05)

    

    //藤蔓
    // const vines_01 = new Entity()
    // vines_01.setParent(scene)
    // const gltfShape_54 = new GLTFShape('models/Vines_01/Vines_01.glb')
    // vines_01.addComponentOrReplace(gltfShape_54)
    // const transform_109 = new Transform({
    // position: new Vector3(31, 2.5, 17.5),
    // rotation: new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865477),
    // scale: new Vector3(1, 1, 1)
    // })
    // vines_01.addComponentOrReplace(transform_109)
    // engine.addEntity(vines_01)

    

    const constructionDebris_01 = new Entity()
    constructionDebris_01.setParent(scene)
    const gltfShape_60 = new GLTFShape('models/ConstructionDebris_01/ConstructionDebris_01.glb')
    constructionDebris_01.addComponentOrReplace(gltfShape_60)
    const transform_115 = new Transform({
    position: new Vector3(25, 5, 2),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
    })
    constructionDebris_01.addComponentOrReplace(transform_115)
    engine.addEntity(constructionDebris_01)

  

    

    const vegetation_01 = new Entity()
    vegetation_01.setParent(scene)
    const gltfShape_62 = new GLTFShape('models/Vegetation_01/Vegetation_01.glb')
    vegetation_01.addComponentOrReplace(gltfShape_62)
    const transform_118 = new Transform({
    position: new Vector3(24, 0, 10.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
    })
    vegetation_01.addComponentOrReplace(transform_118)
    engine.addEntity(vegetation_01)


    //==========================room2=====================
    const shelf_01 = new Entity()
    shelf_01.setParent(scene)
    const gltfShape_46 = new GLTFShape('models/Shelf_01/Shelf_01.glb')
    shelf_01.addComponentOrReplace(gltfShape_46)
    const transform_101 = new Transform({
        position: new Vector3(29, 9.9, 31),
        rotation: new Quaternion(0, -1.0000000000000009, 0, -1.249000902703301e-16),
        scale: new Vector3(1, 1, 1)
    })
    shelf_01.addComponentOrReplace(transform_101)
    engine.addEntity(shelf_01)
    
    //黑书架
    const shelf_02 = new Entity()
    shelf_02.setParent(scene)
    const gltfShape_47 = new GLTFShape('models/Shelf_02/Shelf_02.glb')
    shelf_02.addComponentOrReplace(gltfShape_47)
    const transform_102 = new Transform({
    position: new Vector3(31,9.9, 29),
    rotation: Quaternion.Euler(0,90,0),
    scale: new Vector3(1, 1, 1)
    })
    shelf_02.addComponentOrReplace(transform_102)
    engine.addEntity(shelf_02)

    
    
    //椅子
    const bench_02 = new Entity()
    bench_02.setParent(scene)
    const gltfShape_29 = new GLTFShape('models/Bench_02/Bench_02.glb')
    bench_02.addComponentOrReplace(gltfShape_29)
    const transform_72 = new Transform({
    position: new Vector3(28.5, 9.9, 25.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
    })
    bench_02.addComponentOrReplace(transform_72)
    engine.addEntity(bench_02)
    //room2 木板
    const fenceWoodMedium_01_17 = new Entity()
    fenceWoodMedium_01_17.setParent(scene)
    fenceWoodMedium_01_17.addComponentOrReplace(gltfShape_18)
    const transform_85 = new Transform({
    position: new Vector3(22, 9.9, 32),
    rotation: Quaternion.Euler(0,-90,90),
    scale: new Vector3(1, 5, 3.2)
    })
    fenceWoodMedium_01_17.addComponentOrReplace(transform_85)
    engine.addEntity(fenceWoodMedium_01_17)

    

   
    //金花
    const plant_01 = new Entity()
    plant_01.setParent(scene)
    const gltfShape_50 = new GLTFShape('models/Plant_01/Plant_01.glb')
    plant_01.addComponentOrReplace(gltfShape_50)
    const transform_105 = new Transform({
    position: new Vector3(26, 10.5, 30.8),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
    })
    plant_01.addComponentOrReplace(transform_105)
    engine.addEntity(plant_01)

    const pot_02_1 = new Entity()
    pot_02_1.setParent(plant_01)
    pot_02_1.addComponentOrReplace(new GLTFShape('models/Pot_02/Pot_02.glb'))
    pot_02_1.addComponentOrReplace(new Transform({
    position: new Vector3(0,-.5,0),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
    }))
    engine.addEntity(pot_02_1)

    //烟囱
    const column_Vertical_Wood_Large = new Entity()
    column_Vertical_Wood_Large.setParent(scene)
    const gltfShape_56 = new GLTFShape('models/Column_Vertical_Wood_Large/Column_Vertical_Wood_Large.glb')
    column_Vertical_Wood_Large.addComponentOrReplace(gltfShape_56)
    const transform_111 = new Transform({
        position: new Vector3(30.5, 9.9, 30.7),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 3, 1)
    })
    column_Vertical_Wood_Large.addComponentOrReplace(transform_111)
    engine.addEntity(column_Vertical_Wood_Large)
    let lt3=lantern3(new Vector3(31, 16.2, 31.2),null,1.5)
    let st2=addStick2(new Vector3(),Quaternion.Euler(90,0,-45),null)
    st2.addComponentOrReplace(new Transform({position:new Vector3(30.5, 18, 30.7),rotation:Quaternion.Euler(90,0,-45),scale:new Vector3(.15,1.7,.15)}))

    lantern3(new Vector3(30, 16.2, 30.2),null,1.5)

    //room2 栅栏大
    const fenceWoodLarge_01 = new Entity()
    fenceWoodLarge_01.setParent(scene)
    const gltfShape_55 = new GLTFShape('models/FenceWoodLarge_01/FenceWoodLarge_01.glb')
    fenceWoodLarge_01.addComponentOrReplace(gltfShape_55)
    const transform_110 = new Transform({
    position: new Vector3(31.5, 9.9, 22),
    rotation: Quaternion.Euler(0,90,0),
    scale: new Vector3(2.4, 1, 1)
    })
    fenceWoodLarge_01.addComponentOrReplace(transform_110)
    engine.addEntity(fenceWoodLarge_01)

    const fenceWoodLarge_01_2 = new Entity()
    fenceWoodLarge_01_2.setParent(scene)
    fenceWoodLarge_01_2.addComponentOrReplace(gltfShape_55)
    fenceWoodLarge_01_2.addComponentOrReplace(new Transform({
        position: new Vector3(31.5, 9.9, 31.5),
        rotation: Quaternion.Euler(0,-90,0),
        scale: new Vector3(2.4, 1, 1)
        }))
    engine.addEntity(fenceWoodLarge_01_2)
    const fenceWoodLarge_01_3 = new Entity()
    fenceWoodLarge_01_3.setParent(scene)
    fenceWoodLarge_01_3.addComponentOrReplace(gltfShape_55)
    fenceWoodLarge_01_3.addComponentOrReplace(new Transform({
        position: new Vector3(31.5, 9.9, 31.5),
        rotation: Quaternion.Euler(0,0,0),
        scale: new Vector3(2.4, 1, 1)
        }))
    engine.addEntity(fenceWoodLarge_01_3)
    const fenceWoodLarge_01_4 = new Entity()
    fenceWoodLarge_01_4.setParent(scene)
    fenceWoodLarge_01_4.addComponentOrReplace(gltfShape_55)
    fenceWoodLarge_01_4.addComponentOrReplace(new Transform({
        position: new Vector3(22.5, 9.9, 31.5),
        rotation: Quaternion.Euler(0,180,0),
        scale: new Vector3(2.4, 1, 1)
        }))
    engine.addEntity(fenceWoodLarge_01_4)

    //room2 栅栏小
    // const fenceWoodSmall_01 = new Entity()
    // fenceWoodSmall_01.setParent(scene)
    // const gltfShape_57 = new GLTFShape('models/FenceWoodSmall_01/FenceWoodSmall_01.glb')
    // fenceWoodSmall_01.addComponentOrReplace(gltfShape_57)
    // const transform_112 = new Transform({
    // position: new Vector3(25.5, 9.9, 24.5),
    // rotation: new Quaternion(0, 0, 0, 1),
    // scale: new Vector3(1, 1, 1)
    // })
    // fenceWoodSmall_01.addComponentOrReplace(transform_112)
    // engine.addEntity(fenceWoodSmall_01)

    const plantPot_04 = new Entity()
    plantPot_04.setParent(scene)
    const gltfShape_58 = new GLTFShape('models/PlantPot_04/PlantPot_04.glb')
    plantPot_04.addComponentOrReplace(gltfShape_58)
    const transform_113 = new Transform({
    position: new Vector3(30.5, 9.9, 26),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
    })
    plantPot_04.addComponentOrReplace(transform_113)
    engine.addEntity(plantPot_04)

    const plantPot_03 = new Entity()
    plantPot_03.setParent(scene)
    const gltfShape_59 = new GLTFShape('models/PlantPot_03/PlantPot_03.glb')
    plantPot_03.addComponentOrReplace(gltfShape_59)
    const transform_114 = new Transform({
    position: new Vector3(30.5, 9.9, 24),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
    })
    plantPot_03.addComponentOrReplace(transform_114)
    engine.addEntity(plantPot_03)


    //=========================/=room2=/====================
    createRoom3()
}

function createRoom3(){

    // let hight=0.5//14
    let hight=14
    //==========================room3=====================

    const fenceWood = new Entity()
    fenceWood.addComponentOrReplace(new GLTFShape('models/FenceWoodMedium_01/FenceWoodMedium_01.glb'))
    const transform_85 = new Transform({
    // position: new Vector3(.5, 15, 32),
    position: new Vector3(.2, hight, 23.3),
    rotation: Quaternion.Euler(0,-180,90),
    scale: new Vector3(1, 4.2, 2.8)
    })
    fenceWood.addComponentOrReplace(transform_85)
    engine.addEntity(fenceWood)

    //中国庭
    const chinesePergola_01 = new Entity()
    const gltfShape_61 = new GLTFShape('models/ChinesePergola_01/ChinesePergola_01.glb')
    chinesePergola_01.addComponentOrReplace(gltfShape_61)
    const transform_116 = new Transform({
    position: new Vector3(3.7, hight, 27.3),
    rotation: Quaternion.Euler(0,90,0),
    scale: new Vector3(.85, .85, .85)
    })
    chinesePergola_01.addComponentOrReplace(transform_116)
    engine.addEntity(chinesePergola_01)

    

    //桌子
    const table_03 = new Entity()
    table_03.setParent(chinesePergola_01)
    const gltfShape_28 = new GLTFShape('models/Table_06/Table_06.glb')
    table_03.addComponentOrReplace(gltfShape_28)
    const transform_71 = new Transform({
    position: new Vector3(0, .7, 0),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
    })
    table_03.addComponentOrReplace(transform_71)
    engine.addEntity(table_03)

    //盆栽
    const geckoBush_01 = new Entity()
    geckoBush_01.setParent(table_03)
    const gltfShape_43 = new GLTFShape('models/GeckoBush_01/GeckoBush_01.glb')
    geckoBush_01.addComponentOrReplace(gltfShape_43)
    const transform_98 = new Transform({
    position: new Vector3(0, .6, 0),
    rotation: Quaternion.Euler(0,180,0),
    scale: new Vector3(.5, .5, .5)
    })
    geckoBush_01.addComponentOrReplace(transform_98)
    engine.addEntity(geckoBush_01)

    const chineseFlag_02 = new Entity()
    chineseFlag_02.setParent(chinesePergola_01)
    const gltfShape_20 = new GLTFShape('models/ChineseFlag_02/ChineseFlag_02.glb')
    chineseFlag_02.addComponentOrReplace(gltfShape_20)
    const transform_51 = new Transform({
    position: new Vector3(3.2, 0, 4.5),
    rotation: Quaternion.Euler(0, 0, 0),
    scale: new Vector3(1.2, 1.2, 1.2)
    })
    chineseFlag_02.addComponentOrReplace(transform_51)
    engine.addEntity(chineseFlag_02)

    const fencePicketMedium_01 = new Entity()
    const gltfShape_25 = new GLTFShape('models/FencePicketMedium_01/FencePicketMedium_01.glb')
    fencePicketMedium_01.addComponentOrReplace(gltfShape_25)
    const transform_64 = new Transform({
    position: new Vector3(-4.9,0, -3.9),
    rotation: Quaternion.Euler(0,-90,0),
    scale: new Vector3(1, 1, 1.7)
    })
    fencePicketMedium_01.setParent(chinesePergola_01)
    fencePicketMedium_01.addComponentOrReplace(transform_64)
    engine.addEntity(fencePicketMedium_01)

    const fencePicketMedium_02 = new Entity()
    fencePicketMedium_02.addComponentOrReplace(gltfShape_25)
    fencePicketMedium_02.setParent(chinesePergola_01)
    fencePicketMedium_02.addComponentOrReplace(new Transform({
        position: new Vector3(4.3,0, -3.9),
        rotation: Quaternion.Euler(0,90,0),
        scale: new Vector3(1, 1, 1.7)
        }))
    engine.addEntity(fencePicketMedium_02)

    const fencePicketMedium_03 = new Entity()
    fencePicketMedium_03.addComponentOrReplace(gltfShape_25)
    fencePicketMedium_03.setParent(chinesePergola_01)
    fencePicketMedium_03.addComponentOrReplace(new Transform({
        position: new Vector3(4.5,0, 5.5),
        rotation: Quaternion.Euler(0,0,0),
        scale: new Vector3(1, 1, 1.7)
        }))
    engine.addEntity(fencePicketMedium_03)
    const fencePicketMedium_04 = new Entity()
    fencePicketMedium_04.addComponentOrReplace(gltfShape_25)
    fencePicketMedium_04.setParent(chinesePergola_01)
    fencePicketMedium_04.addComponentOrReplace(new Transform({
        position: new Vector3(4.5,0, -3.7),
        rotation: Quaternion.Euler(0,180,0),
        scale: new Vector3(1, 1, 1.7)
        }))
    engine.addEntity(fencePicketMedium_04)
    const fencePicketMedium_05 = new Entity()
    fencePicketMedium_05.addComponentOrReplace(gltfShape_25)
    fencePicketMedium_05.setParent(chinesePergola_01)
    fencePicketMedium_05.addComponentOrReplace(new Transform({
        position: new Vector3(-5,0, 5.5),
        rotation: Quaternion.Euler(0,0,0),
        scale: new Vector3(1, 1, 1.7)
        }))
    engine.addEntity(fencePicketMedium_05)
    const fencePicketMedium_06 = new Entity()
    fencePicketMedium_06.addComponentOrReplace(gltfShape_25)
    fencePicketMedium_06.setParent(chinesePergola_01)
    fencePicketMedium_06.addComponentOrReplace(new Transform({
        position: new Vector3(-5,0, -3.7),
        rotation: Quaternion.Euler(0,180,0),
        scale: new Vector3(1, 1, 1.7)
        }))
    engine.addEntity(fencePicketMedium_06)

    //木桩
    const log_Large_01_13 = new Entity()
    let log_Large_glb=new GLTFShape('models/Log_Large_01/Log_Large_01.glb')
    log_Large_01_13.addComponentOrReplace(log_Large_glb)
    const transform_117 = new Transform({
    position: new Vector3(2.5, 3, 30.5),
    rotation: new Quaternion(0, 0, -0.7071067811865478, 0.7071067811865477),
    scale: new Vector3(8, 1, 1)
    })
    log_Large_01_13.addComponentOrReplace(transform_117)
    engine.addEntity(log_Large_01_13)
    const log_Large_01_14 = new Entity()
    log_Large_01_14.addComponentOrReplace(log_Large_glb)
    log_Large_01_14.addComponentOrReplace(new Transform({
        position: new Vector3(2.5, 2, 24.5),
        rotation: new Quaternion(0, 0, -0.7071067811865478, 0.7071067811865477),
        scale: new Vector3(5, 1, 1)
        }))
    engine.addEntity(log_Large_01_14)
    const log_Large_01_15 = new Entity()
    log_Large_01_15.addComponentOrReplace(log_Large_glb)
    log_Large_01_15.addComponentOrReplace(new Transform({
        position: new Vector3(6.3, 2, 24.5),
        rotation: new Quaternion(0, 0, -0.7071067811865478, 0.7071067811865477),
        scale: new Vector3(5, 1, 1)
        }))
    engine.addEntity(log_Large_01_15)
    const log_Large_01_16 = new Entity()
    log_Large_01_16.addComponentOrReplace(log_Large_glb)
    log_Large_01_16.addComponentOrReplace(new Transform({
        position: new Vector3(6.3, 2, 30.5),
        rotation: new Quaternion(0, 0, -0.7071067811865478, 0.7071067811865477),
        scale: new Vector3(5, 1, 1)
        }))
    engine.addEntity(log_Large_01_16)

    //灯笼
    let lt3= lantern3(new Vector3(-3.9, 2.5, 5),chinesePergola_01)
    addStick1(new Vector3(-3.5, 1.9, 5),chinesePergola_01,3.7)
    addStick2(new Vector3(-3.5, 3.7, 5),Quaternion.Euler(90,0,90),chinesePergola_01)
    lantern3(new Vector3(-3.1, 2.5, 5),chinesePergola_01)
    
    lantern3(new Vector3(5, 17.2, 28),null,3)
    let st= addStick2(new Vector3(),Quaternion.Euler(90,0,45),null,1.6)
    st.addComponentOrReplace(new Transform({position:new Vector3(4, 21.2, 29),rotation:Quaternion.Euler(90,0,45),scale:new Vector3(.3,4,.3)}))

    // lantern3(new Vector3(-1, 0, -1),lt4)

    
}