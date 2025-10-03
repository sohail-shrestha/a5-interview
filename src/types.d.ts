export interface IQueue {
  // Adds a floor to the queue.
  add: (floor: number) => void;
  // Gets next floor from a queue, removing the floor.
  next: () => number | undefined;
  // Checks if there is next floor in the queue.
  hasNext: () => boolean;
}

export interface IController {
  // Adds a floor for the elevator to go to.
  goTo(floor: number): void;
  // Runs the elevator, so it reaches all floor in the queue.
  run(): void;
}
