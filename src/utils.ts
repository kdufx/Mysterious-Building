export function AddGLTF(path: string, position: Vector3, rotation: Vector3, scale?: Vector3, parent?: Entity) {
    let entity = new Entity();
  
    let shape = new GLTFShape(path);
    entity.addComponent(shape);
  
    let transform = new Transform();
    transform.position = position;
    transform.rotation = Quaternion.Euler(rotation.x, rotation.y, rotation.z);
    transform.scale =scale?scale:Vector3.One()
   
    entity.addComponent(transform);
  
    if(parent){
      entity.setParent(parent)
    }
    // if (clip){
    //   const animator = new Animator();
    //   let animation = new AnimationState(clip);
    //   animator.addClip(animation);
    //   entity.addComponent(animator);
    //   animation.play();
    // }
  
  
    engine.addEntity(entity);
  }