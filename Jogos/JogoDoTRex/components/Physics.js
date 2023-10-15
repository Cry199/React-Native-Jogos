import Matter from 'matter-js';
import Constants from '../components/Constants';

const Physics = (entities, { touches, time }) => {
    
    let engine = entities.physics.engine;
    let dino = entities.dino.body;

    touches.filter(t => t.type === "press").forEach(t => {
      Matter.Body.applyForce(dino, dino.position, { x: 0.0, y: -0.1 });
    });


    for (let i = 1; i <= 4; i++) 
    {
      let cactus = entities["cactus" + i].body;

      if (cactus.position.x <= -160 * (Constants.CACTUS_WIDTH / 2)) {
        Matter.Body.setPosition(cactus, { x: Constants.MAX_WIDTH * 2 - Constants.CACTUS_WIDTH / 2, y: cactus.position.y });
      } 
      else 
      {
        Matter.Body.translate(cactus, { x: -5, y: 0 });
      }
    }

    Matter.Engine.update(engine, time.delta);
 
    return entities;
}

export default Physics;