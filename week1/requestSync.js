const request = require("sync-request");

const url = "https://ec2-54-64-246-136.ap-northeast-1.compute.amazonaws.com/delay-clock";

function requestSync(url) {
  const startTime = performance.now();
  try {
    const response = request("GET", url);
    if (response.statusCode === 200) {
      const endTime = performance.now();
      const executionTime = endTime - startTime;
      console.log("Sync: Request succeeded");
      console.log(`Execution time: ${executionTime.toFixed(6)} ms`);
    } else {
      console.error("Sync Request Failed");
    }
  } catch (error) {
    console.error("Sync Request Error:", error.message);
  }
}

requestSync(url);
requestSync(url);
requestSync(url);
