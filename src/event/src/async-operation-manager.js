/**
 * Async Operation Manager to schedule asynchronous operations.
 */
export class AsyncOperationManager {

    /**
     * Simulate an asynchronous operation.
     *
     * @param delay Delay time (in milliseconds)
     */
    simulateAsyncOperation(delay) {
        if (typeof delay != 'number') {
            throw new TypeError("Input format is wrong!");
        }
        setTimeout(() => {
            console.log(`Async operation completed after ${delay} ms`);
        }, delay);
    }

    /**
     * Schedule a task that logs a message.
     */
    scheduleImmediate() {
        setImmediate(() => {
            console.log("Immediate task executed");
        });
    }
}

const manager = new AsyncOperationManager();
manager.simulateAsyncOperation(200);
process.nextTick(() => {
    console.log("Microtask executed immediately");
});
manager.scheduleImmediate();

// 1. simulateAsyncOperation pushed to stack
// 2. setTimeout pushed to stack
// 3. setTimeout popped from stack
// 4. setTimeout registered in web api
// 5. simulateAsyncOperation popped from stack
// 6. nextTick pushed to stack
// 7. nextTick popped from stack
// 8. console.log("Microtask executed immediately") moved to microtask queue
// 9. console.log("Microtask executed immediately") removed from microtask queue
// 10. console.log("Microtask executed immediately") pushed to stack
// 11. console.log("Microtask executed immediately") executed
// 12. console.log("Microtask executed immediately") popped from stack
// 13. scheduleImmediate pushed to stack
// 14. setImmediate pushed to stack
// 15. setImmediate popped from stack
// 16. scheduleImmediate popped from stack
// 17. console.log("Immediate task executed") moved to macrotask queue
// 18. console.log("Immediate task executed") removed from macrotask queue
// 19. console.log("Immediate task executed") pushed to stack
// 20. console.log("Immediate task executed") executed
// 21. console.log("Immediate task executed") popped from stack
// 22. timeout is over
// 23. console.log(`Async operation completed after ${delay} ms`) moved to macrotask queue
// 24. console.log(`Async operation completed after ${delay} ms`) removed from macrotask queue
// 25. console.log(`Async operation completed after ${delay} ms`) pushed to stack
// 26. console.log(`Async operation completed after ${delay} ms`) executed
// 27. console.log(`Async operation completed after ${delay} ms`) popped from stack
