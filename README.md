# Elevator System

A TypeScript implementation of an elevator control system that handles multiple floor requests efficiently.

## Project Structure

```plaintext
interview/
├── src/                    # Source code directory
│   ├── elevator.ts         # Main elevator implementation
|   ├── types.d.ts.         # Type definitions       
│   └── index.ts            # Entry point    
├── __test__/              # Test directory
│   └── elevator.spec.ts  # Elevator system tests
├── package.json          # Project dependencies and scripts
├── pnpm-lock.yaml       # pnpm lock file
└── tsconfig.json        # TypeScript configuration
```

## Getting Started

### Prerequisites

- Node.js (v20 or higher)
- pnpm (v10 or higher)

### Installing pnpm

If you don't have pnpm installed, you can install it using npm:

```bash
npm install -g pnpm
```

### Installing Dependencies

Clone the repository and install the dependencies:

```bash
# Clone the repository
git clone https://github.com/sohail-shrestha/a5-interview.git
cd a5-interview

# Install dependencies
pnpm install
```

## Running Tests

This project uses Vitest for testing. To run the tests:

```bash
# Run tests once
pnpm test

```

## Implementation Details

The elevator system consists of three main classes:

### FloorQueue

- Manages the queue of floor requests
- Sorts floors based on proximity to current position
- Prevents duplicate floor requests

### ElevatorController

- Handles elevator movement logic
- Processes floor requests sequentially
- Manages door state

### Elevator

- Main interface for the elevator system
- Coordinates between components

## Testing

The test suite (`__test__/elevator.spec.ts`) verifies:

- Floor request handling
- Queue management and sorting
- Elevator movement logic
- Door operations

## Development

To start development:

1. Make your changes in the `src` directory
2. Run tests in watch mode: `pnpm test`
3. Ensure all tests pass before committing

## Scripts

- `pnpm test` - Run all tests
