var coll = document.getElementsByClassName("collapsible");
for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");

        var content = this.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }

    });
}

function getTime() {
    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    let time = hours + ":" + minutes;
    return time;
}

function firstBotMessage() {
    let firstMessage = "How's it going?"
    document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';

    let time = getTime();

    $("#chat-timestamp").append(time);
    document.getElementById("userInput").scrollIntoView(false);
}

firstBotMessage();

function getBotResponse(userText) {
    let botResponse;

    if (userText.includes("hello") || userText.includes("hi")) {
        botResponse = ["Hello there!", "Hi!", "Hey!"][Math.floor(Math.random() * 3)];
    } else if (userText.includes("how are you")) {
        botResponse = ["I'm doing well, thanks for asking. How about you?", "Great, thanks for asking!"][Math.floor(Math.random() * 2)];
    } else if (userText.includes("good") || userText.includes("well")) {
        botResponse = ["Glad to hear that!", "Awesome!"][Math.floor(Math.random() * 2)];
    } else if (userText.includes("bad") || userText.includes("not good")) {
        botResponse = ["Oh no! Is there anything I can do to help?", "Sorry to hear that."][Math.floor(Math.random() * 2)];
    } else if (userText.includes("what's your name")) {
        botResponse = ["My name is ChatBot, what's yours?", "I'm ChatBot, nice to meet you!"][Math.floor(Math.random() * 2)];
    } else if (userText.includes("15") || userText.includes("my bmi is 15")) {
        botResponse = ["5 sets of 10 push-ups, squats and lunges", "5 sets of 10 sit-ups", "5 sets of 10 of weight lifting (Weight depends on own ability)"][Math.floor(Math.random() * 3)];
    } else if (userText.includes("16") || userText.includes("my bmi is 16")) {
        botResponse = ["4 sets of 10 push-ups, squats and lunges", "4 sets of 10 sit-ups", "4 sets of 10 of weight lifting (Weight depends on own ability)"][Math.floor(Math.random() * 3)];
    } else if (userText.includes("17") || userText.includes("my bmi is 17")) {
        botResponse = ["3 sets of 10 push-ups, squats and lunges", "3 sets of 10 sit-ups", "3 sets of 10 of weight lifting (Weight depends on own ability)"][Math.floor(Math.random() * 3)];
    } else if (userText.includes("18") || userText.includes("my bmi is 18")) {
        botResponse = ["10-15 minutes of stretching exercises to improve flexibility and mobility.", "15-20 minutes of bodyweight exercises such as push-ups, squats, and lunges to improve strength.", "30-45 minutes of moderate-intensity aerobic exercise such as brisk walking, cycling, or swimming to improve cardiovascular health and burn calories."][Math.floor(Math.random() * 3)];
    } else if (userText.includes("19") || userText.includes("my bmi is 19")) {
        botResponse = ["10-15 minutes of stretching exercises to improve flexibility and mobility.", "20-30 minutes of bodyweight exercises such as push-ups, squats, and lunges to improve strength.", "30-60 minutes of moderate-intensity aerobic exercise such as brisk walking, cycling, or swimming to improve cardiovascular health and burn calories."][Math.floor(Math.random() * 3)];
    } else if (userText.includes("20") || userText.includes("my bmi is 20")) {
        botResponse = ["10-15 minutes of stretching exercises to improve flexibility and mobility.", "20-30 minutes of bodyweight exercises such as push-ups, squats, and lunges to improve strength.", "30-60 minutes of moderate-intensity aerobic exercise such as brisk walking, cycling, or swimming to improve cardiovascular health and burn calories."][Math.floor(Math.random() * 3)];
    } else if (userText.includes("21") || userText.includes("my bmi is 21")) {
        botResponse = ["10-15 minutes of stretching exercises to improve flexibility and mobility.", "20-30 minutes of bodyweight exercises such as push-ups, squats, and lunges to improve strength.", "30-60 minutes of moderate-intensity aerobic exercise such as brisk walking, cycling, or swimming to improve cardiovascular health and burn calories."][Math.floor(Math.random() * 3)];
    } else if (userText.includes("22") || userText.includes("my bmi is 22")) {
        botResponse = ["10-15 minutes of stretching exercises to improve flexibility and mobility.", "20-30 minutes of bodyweight exercises such as push-ups, squats, and lunges to improve strength.", "30-60 minutes of moderate-intensity aerobic exercise such as brisk walking, cycling, or swimming to improve cardiovascular health and burn calories."][Math.floor(Math.random() * 3)];
    } else if (userText.includes("23") || userText.includes("my bmi is 23")) {
        botResponse = ["10-15 minutes of stretching exercises to improve flexibility and mobility.", "20-30 minutes of bodyweight exercises such as push-ups, squats, and lunges to improve strength.", "30-60 minutes of moderate-intensity aerobic exercise such as brisk walking, cycling, or swimming to improve cardiovascular health and burn calories."][Math.floor(Math.random() * 3)];
    } else if (userText.includes("24") || userText.includes("my bmi is 24")) {
        botResponse = ["10-15 minutes of stretching exercises to improve flexibility and mobility.", "20-30 minutes of bodyweight exercises such as push-ups, squats, and lunges to improve strength.", "30-60 minutes of moderate-intensity aerobic exercise such as brisk walking, cycling, or swimming to improve cardiovascular health and burn calories."][Math.floor(Math.random() * 3)];
    } else if (userText.includes("25") || userText.includes("my bmi is 25")) {
        botResponse = ["60 minutes of moderate-intensity aerobic exercise such as brisk walking, cycling, or swimming to improve cardiovascular health and burn calories.", "25 minutes of skipping rope.", "20 minutes of High Intensity Interval Training (HIIT)."][Math.floor(Math.random() * 3)];
    } else if (userText.includes("26") || userText.includes("my bmi is 26")) {
        botResponse = ["60 minutes of moderate-intensity aerobic exercise such as brisk walking, cycling, or swimming to improve cardiovascular health and burn calories.", "25 minutes of skipping rope.", "20 minutes of High Intensity Interval Training (HIIT)."][Math.floor(Math.random() * 3)];
    } else if (userText.includes("27") || userText.includes("my bmi is 27")) {
        botResponse = ["60 minutes of moderate-intensity aerobic exercise such as brisk walking, cycling, or swimming to improve cardiovascular health and burn calories.", "25 minutes of skipping rope.", "20 minutes of High Intensity Interval Training (HIIT)."][Math.floor(Math.random() * 3)];
    } else if (userText.includes("28") || userText.includes("my bmi is 28")) {
        botResponse = ["60 minutes of moderate-intensity aerobic exercise such as brisk walking, cycling, or swimming to improve cardiovascular health and burn calories.", "30 minutes of skipping rope.", "25 minutes of High Intensity Interval Training (HIIT)."][Math.floor(Math.random() * 3)];
    } else if (userText.includes("29") || userText.includes("my bmi is 29")) {
        botResponse = ["60-70 minutes of moderate-intensity aerobic exercise such as brisk walking, cycling, or swimming to improve cardiovascular health and burn calories.", "30 minutes of skipping rope.", "25 minutes of High Intensity Interval Training (HIIT)."][Math.floor(Math.random() * 3)];
    } else if (userText.includes("30") || userText.includes("my bmi is 30")) {
        botResponse = ["60-70 minutes of moderate-intensity aerobic exercise such as brisk walking, cycling, or swimming to improve cardiovascular health and burn calories.", "30 minutes of skipping rope.", "25 minutes of High Intensity Interval Training (HIIT)."][Math.floor(Math.random() * 3)];
    } else if (userText.includes("31") || userText.includes("my bmi is 31")) {
        botResponse = ["60-70 minutes of moderate-intensity aerobic exercise such as brisk walking, cycling, or swimming to improve cardiovascular health and burn calories.", "30 minutes of skipping rope.", "25 minutes of High Intensity Interval Training (HIIT)."][Math.floor(Math.random() * 3)];
    } else if (userText.includes("32") || userText.includes("my bmi is 32")) {
        botResponse = ["60-80 minutes of moderate-intensity aerobic exercise such as brisk walking, cycling, or swimming to improve cardiovascular health and burn calories.", "30 minutes of skipping rope.", "30 minutes of High Intensity Interval Training (HIIT)."][Math.floor(Math.random() * 3)];
    } else if (userText.includes("33") || userText.includes("my bmi is 33")) {
        botResponse = ["60-80 minutes of moderate-intensity aerobic exercise such as brisk walking, cycling, or swimming to improve cardiovascular health and burn calories.", "30 minutes of skipping rope.", "30 minutes of High Intensity Interval Training (HIIT)."][Math.floor(Math.random() * 3)];
    } else if (userText.includes("34") || userText.includes("my bmi is 34")) {
        botResponse = ["60-90 minutes of moderate-intensity aerobic exercise such as brisk walking, cycling, or swimming to improve cardiovascular health and burn calories.", "30-40 minutes of skipping rope.", " 30 minutes of High Intensity Interval Training (HIIT)."][Math.floor(Math.random() * 3)];
    } else if (userText.includes("35") || userText.includes("my bmi is 35")) {
        botResponse = ["60-90 minutes of moderate-intensity aerobic exercise such as brisk walking, cycling, or swimming to improve cardiovascular health and burn calories.", "30-40 minutes of skipping rope.", " 30 minutes of High Intensity Interval Training (HIIT)."][Math.floor(Math.random() * 3)];
    } else if (userText.includes("my name is")) {
        let userName = userText.split("my name is ")[1].trim();
        botResponse = ["Nice to meet you, " + userName + "!", "Hello, " + userName + "!"][Math.floor(Math.random() * 3)];
    } else if (userText.includes("bye") || userText.includes("goodbye")) {
        botResponse = ["Goodbye! Have a great day!", "See you later!"][Math.floor(Math.random() * 2)];
    } else if (userText.includes("exercise") || userText.includes("workout") || userText.includes("working out")) {
      botResponse = ["what would you like to know about exercising", "exercising is good for you!"][Math.floor(Math.random() * 2)];
    } else if (userText.includes("my bmi is too high") || userText.includes("lose weight") || userText.includes("lower bmi") || userText.includes("i am fat")|| userText.includes("sad")) {
        botResponse = ["I'm sorry to hear that! Please tell me your bmi so that i can give you a personalised exercise plan!"][Math.floor(Math.random() * 1)];
    } else {
        botResponse = ["I'm sorry, I don't understand. Can you please try again?", "I'm not sure I understand. Could you please rephrase that?"][Math.floor(Math.random() * 2)];
    }

    return botResponse;
}


function getResponse() {
    let userText = $("#textInput").val();

    if (userText == "") {
        userText = "How may I help you?";
    }

    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        let botResponse = getBotResponse(userText);
        let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
        $("#chatbox").append(botHtml);
        document.getElementById("chat-bar-bottom").scrollIntoView(true);
    }, 1000)

}

function sendButton() {
    getResponse();
}

function heartButton() {
    buttonSendText("Heart clicked!")
}

$("#textInput").keypress(function (e) {
    if (e.which == 13) {
        getResponse();
    }
});
