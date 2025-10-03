import { expect, test, vi } from 'vitest';
import { Elevator, FloorQueue, IQueue } from '../src';

test('ElevatorController run processes floors in correct order', () => {
  const consoleSpy = vi.spyOn(console, 'log');

  const floorQueue: IQueue = new FloorQueue(0);
  const elevator = new Elevator(floorQueue);

  elevator.goTo(2);
  elevator.goTo(8);
  elevator.goTo(1);

  elevator.run();

  expect(consoleSpy).toHaveBeenNthCalledWith(1, 'Elevator is in floor 1');
  expect(consoleSpy).toHaveBeenNthCalledWith(2, 'Elevator is in floor 2');
  expect(consoleSpy).toHaveBeenNthCalledWith(3, 'Elevator is in floor 8');
  expect(consoleSpy).toHaveBeenCalledTimes(3);

  consoleSpy.mockRestore();
});
