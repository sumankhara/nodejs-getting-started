let count = 0
const intervalId = setInterval(
    () => {
        console.log('Hello World');
        count += 1;

        if(count === 5){
            console.log('Done');
            clearInterval(intervalId);
        }
    },
    1000
);