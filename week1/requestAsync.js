const url = "https://ec2-54-64-246-136.ap-northeast-1.compute.amazonaws.com/delay-clock";
function requestCallback(url, callback) {
  const startTime = performance.now();
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const endTime = performance.now();
      const executionTime = endTime - startTime;
      console.log("Callback: Request succeeded");
      console.log(`Execution time: ${executionTime.toFixed(6)} ms`);
      callback(data);
    })
    .catch((error) => {
      console.error(`Callback error: ${error}`);
    });
}

function requestPromise(url) {
  const startTime = performance.now();
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const endTime = performance.now();
      const executionTime = endTime - startTime;
      console.log("Promise: Request succeeded");
      console.log(`Execution time: ${executionTime.toFixed(6)} ms`);
      return data;
    })
    .catch((error) => {
      console.error(`Promise error: ${error}`);
    });
}

async function requestAsyncAwait(url) {
  try {
    const startTime = performance.now();
    const response = await requestPromise(url);
    const endTime = performance.now();
    const executionTime = endTime - startTime;
    console.log("Async Await: Request succeeded");
    console.log(`Execution time: ${executionTime.toFixed()} ms`);
    console.log(response);
  } catch (error) {
    console.error(`Async Await error: ${error}`);
  }
}

requestCallback(url, console.log);
requestPromise(url).then(console.log);
requestAsyncAwait(url);
