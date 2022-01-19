// Utility Logic

function noInputtedWord(word, text) {
  return ((text.trim().length === 0) || (word.trim().length === 0));
}

// Business Logic

function wordCounter(text) {
  if (text.trim().length === 0) {
    return 0;
  }
  let wordCount = 0;
  const wordArray = text.split(" ");
  wordArray.forEach(function(element) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  return wordCount;
}

function numberOfOccurrencesInText(word, text) {
  if (noInputtedWord(word, text)) {
    return 0;
  }
  const wordArray = text.split(" ");
  let wordCount = 0;
  wordArray.forEach(function(element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++;
    }
  });
  return wordCount;
}

function mostUsedWordsInText(text) {
  let topArr = ["", 0, "", 0, "", 0];
  
  if (text.trim().length === 0) {
    return 0;
  } else {
    textArray = text.split(" ");

    textArray.forEach(function(word) {
      let topCandidate = numberOfOccurrencesInText(word, text);
      if (topCandidate > topArr[1]) {
        topArr.unshift(topCandidate);
        topArr.unshift(word);
        topArr.splice(6, 2);
      } else if (topCandidate > topArr[3]) {
        topArr.splice(2, 0, word);
        topArr.splice(3, 0, topCandidate);
        topArr.splice(6, 2);
      } else if ((numberOfOccurrencesInText(word, text) > topArr[5])) {
        topArr.splice(4, 0, word);
        topArr.splice(5, 0, topCandidate);
        topArr.splice(6, 2);
      }
    });
    return topArr;
  }
} 

// UI Logic

function boldPassage(word, text) {
  if (noInputtedWord(word, text)) {
    return "";
  }
  let htmlString = "<p>";
  let textArray = text.split(" ");
  textArray.forEach(function(element, index) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      htmlString = htmlString.concat("<b>" + element + "</b>");
    } else {
      htmlString = htmlString.concat(element);
    }
    if (index !== (textArray.length - 1)) {
      htmlString = htmlString.concat(" ");
    }
  });
  return htmlString + "</p>";
};

function listTopWords(text) {
  let topArray = (mostUsedWordsInText(text));
  $("ul#top-list").append("<li>" + topArray[0] + ": " + topArray[1] + "</li>");
  if (topArray[3] > 0) {
    $("ul#top-list").append("<li>" + topArray[2] + ": " + topArray[3] + "</li>")
  }
  if ((topArray[5] > 0) && (topArray[5] != topArray[3])) {
    $("ul#top-list").append("<li>" + topArray[4] + ": " + topArray[5] + "</li>")
  }
};



$(document).ready(function(){
  $("form#word-counter").submit(function(event){
    event.preventDefault();
    const passage = $("#text-passage").val();
    const word = $("#word").val();
    const wordCount = wordCounter(passage);
    const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
    $("#total-count").html(wordCount);
    $("#selected-count").html(occurrencesOfWord);
    $("#bolded-passage").html(boldPassage(word, passage));
    listTopWords(passage);
  });
});