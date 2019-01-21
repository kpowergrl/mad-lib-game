  //eslint-disable-next-line
  function madlibstory() {
    
    // get the inputs by id
    var noun1Input = document.getElementById('noun-1');
    var noun2Input = document.getElementById('noun-2');
    var verbInput = document.getElementById('verb');
    
    //get the values out of inputs
    var noun1 = noun1Input.value;
    var noun2 = noun2Input.value;
    var verb = verbInput.value;
    
    console.log(noun1, noun2, verb);


    // make greeting
    var story = 'Many say that ' + noun1 + ' storming is ' + noun2 + ' and does not ' + verb + '!';
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