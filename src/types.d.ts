export interface IQueue {
  add: (floor: number) => void;
  next: () => number | undefined;
  hasNext: () => boolean;
}

export interface IController {
  goTo(floor: number): void;
  run(): void;
}
