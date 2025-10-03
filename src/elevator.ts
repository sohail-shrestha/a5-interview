const Elevator = () => {
  let currentFloorOfTheElevator = 0;
  let elevatorDirection: 'up' | 'down' | 'idle' = 'idle';
  let isDoorOpen: boolean = false;

  let requestQueue: number[] = [];

  const requestForAnElevator = (requestedOnFloor: number) => {
    requestQueue.push(requestedOnFloor);
  };

  const closeDoor = () => {
    isDoorOpen = false;
  };
  const desiredFloor = (floor: number) => {};

  const moveElevator = () => {};

  return {
    requestForAnElevator,
    closeDoor,
    desiredFloor,
    moveElevator,
    get requestQueue() {
      return requestQueue;
    },
    get elevatorDirection() {
      return elevatorDirection;
    },
    get isDoorOpen() {
      return isDoorOpen;
    },
    get currentFloorOfTheElevator() {
      return currentFloorOfTheElevator;
    },
    set currentFloorOfTheElevator(floor: number) {
      currentFloorOfTheElevator = floor;
    },
  };
};

export { Elevator };
