import type { IController, IQueue } from 'types';

class FloorQueue implements IQueue {
  currentFloor: number;
  queue: number[] = [];
  constructor(currentFloor: number) {
    this.currentFloor = currentFloor;
  }

  public add(floor: number) {
    if (this.queue.includes(floor) || floor === this.currentFloor) return; // avoid duplicates
    this.queue.push(floor);
    this.sortQueue();
  }

  sortQueue() {
    // implement process.nextTick
    this.queue.sort();
  }
  public next(): number | undefined {
    if (this.queue.length === 0) return undefined;
    const nextFloor = this.queue.shift()!;
    this.currentFloor = nextFloor; // update current floor
    this.sortQueue(); // reorder remaining based on new position
    return nextFloor;
  }

  public hasNext() {
    return !!this.queue[0];
  }
}
class ElevatorController implements IController {
  floorQueue: IQueue;
  constructor(floorQueue: IQueue) {
    this.floorQueue = floorQueue;
  }

  public goTo(floor: number) {
    this.floorQueue.add(floor);
  }
  public run() {
    while (this.floorQueue.hasNext()) {
      console.log(`Elevator is in floor ${this.floorQueue.next()}`);
    }
  }
}

class Elevator extends ElevatorController {}

export { Elevator, ElevatorController, FloorQueue };
