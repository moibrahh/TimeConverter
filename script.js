document.getElementById("convert-btn").addEventListener("click", () => {
    const inputTime = document.getElementById("input-time").value;
    const inputTimeZone = document.getElementById("input-timezone").value;
    const targetTimeZone = document.getElementById("target-timezone").value;
  
    // Use moment-timezone to convert the input time to the target time zone
    const inputDateTime = moment.tz(`2000-01-01 ${inputTime}`, inputTimeZone);
    const targetTime = inputDateTime.clone().tz(targetTimeZone).format("hh:mm:ss A"); // "A" for AM/PM
  
    // Display the converted time
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = `Converted Time in ${targetTimeZone}: ${targetTime}`;
});

document.getElementById("use-current-time-btn").addEventListener("click", () => {
    // Get the user's current time and time zone
    const currentDateTime = new Date();
    const currentTime = currentDateTime.toISOString().slice(11, 19); // Format to HH:mm:ss
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  
    // Set the input box and time zone dropdown to current time and user's time zone
    document.getElementById("input-time").value = currentTime;
    document.getElementById("input-timezone").value = userTimeZone;
  });

  