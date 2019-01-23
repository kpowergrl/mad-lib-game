  //eslint-disable-next-line
  function madlibstory() {
    
    // get the inputs by id
    var pluralnoun1Input = document.getElementById('pluralnoun1');
    var verb1Input = document.getElementById('verbing1');
    var noun1Input = document.getElementById('noun1');
    var noun2Input = document.getElementById('noun2');
    var pluralNoun2Input = document.getElementById('pluralnoun2');
    var partofbody1Input = document.getElementById('partofbody1');
    var noun3Input = document.getElementById('noun3');
    var verb2Input = document.getElementById('verbing2');
    var partofbody2Input = document.getElementById('partofbody2');
    var verb3Input = document.getElementById('verbing3');
    var noun4Input = document.getElementById('noun4');
    var noun5Input = document.getElementById('noun5');
    var partofbody3Input = document.getElementById('partofbody3');
    var adverbInput = document.getElementById('adverb');
    var partofbody4Input = document.getElementById('partofbody4');
    




    //get the values out of inputs
    var pluralnoun1 = pluralnoun1Input.value;
    var verb1 = verb1Input.value;
    var noun1 = noun1Input.value;
    var noun2 = noun2Input.value;
    var pluralnoun2 = pluralNoun2Input.value;
    var partofbody1 = partofbody1Input.value;
    var noun3 = noun3Input.value;
    var verb2 = verb2Input.value;
    var partofbody2 = partofbody2Input.value;
    var verb3 = verb3Input.value;
    var noun4 = noun4Input.value;
    var noun5 = noun5Input.value;
    var partofbody3 = partofbody3Input.value;
    var adverb = adverbInput.value;
    var partofbody4 = partofbody4Input.value;

    
    console.log (pluralnoun1, verb1, noun1, noun2, pluralnoun2, partofbody1, noun3, verb2, partofbody2, verb3, noun4, noun5, partofbody3, adverb, partofbody4);


    // make greeting
    var story = 'I was home alone and scared out of my ' + pluralnoun1 + ' I could hear the wind ' + verb1 + ' and off in the distance a/an' + noun1 + ' was howling.  I crossed the room, locked the ' + noun2 + ' , and climbed into bed, pulling the ' + pluralnoun2 + ' over my ' + partofbody1 + ' . Then it happened, I could hear a/an ' + noun3 + + verb2 + ' up the stairs. My ' + partofbody2 + ' started to chatter and my kneess began ' + verb3 + ' . The ' + noun4 + ' was thrust open and there was a huge ' + noun5 + ' with hair all over his ' + partofbody3 + ' . It was my father. "Hi, we are home", he said ' + adverb + ' "Hope you were not afraid of staying home alone." "No," I said, lying through my ' + partofbody4 + 

    console.log(story);


    // //display greeting
    var finalstory = document.getElementById('finalstory');
    finalstory.textContent = story;
        

    // remove prompt


}

// TODO: validate name inputs
// TODO: clear inputs after greet?
// Many say that _________ storming is __________ and
// does not __________. 