import { createScene } from "./scene";
import { createLantern } from "./lantern";
import { createPuzzle, puzzle1Anima ,puzzle3Anima} from "./puzzle";

 const gameCanvas=new UICanvas()
createScene()
createLantern()
createPuzzle(gameCanvas)

//add system

engine.addSystem(new puzzle1Anima())
engine.addSystem(new puzzle3Anima())