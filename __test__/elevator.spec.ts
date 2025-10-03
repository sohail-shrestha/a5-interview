import { expect, test } from 'vitest';
import { Elevator } from '../src/elevator';

test('Handle queue for calling an elevator', () => {
  const elevator = Elevator();
  elevator.currentFloorOfTheElevator = 4;
  elevator.requestForAnElevator(3);
  elevator.requestForAnElevator(5);
  elevator.moveElevator();
  const queue = [3, 5];
  expect(elevator.requestQueue).toEqual([3, 5]);
});
