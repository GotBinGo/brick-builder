import { getMeasurementsFromDimensions } from 'utils';
import { base } from 'utils/constants';


export class RollOverBrick extends THREE.Mesh {
  constructor(color, dimensions) {
    const { width, height, depth } = getMeasurementsFromDimensions(dimensions);
    const rollOverGeo = new THREE.BoxGeometry( width, height, depth );
    const mat = new THREE.MeshBasicMaterial( { color: 0x08173D, opacity: 0.5, transparent: true } );
    super(rollOverGeo, mat);
    this.dimensions = dimensions;
    this.rotated = null;
    this.translation = 0;
  }

  setShape(dimensions) {
    const { width, height, depth } = getMeasurementsFromDimensions(dimensions);
    this.geometry = new THREE.BoxGeometry( width, height, depth );
    this.dimensions = dimensions;
    this.translation = 0;
    // if (!!this) {
    //   this.rotateY( -this.rotated );
    // }
    this.rotated = null;
    console.log('set shape, reset');
  }

  rotate(angle) {

      // this.rotateY( angle/2 );
      this.rotation.y +=angle;
      // this.rotated = angle;
    }

}
