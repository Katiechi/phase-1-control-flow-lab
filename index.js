function scuberGreetingForFeet(feet){
  // Write your code here!
  if(feet <= 400){
    return `This one is on me!`
  }
  else if(feet > 2000 && feet < 2500){
    return `I will gladly take your thirty bucks.`
  }
  else if(feet > 2500){
    return `No can do.`
  }

}
console.log(scuberGreetingForFeet(300))

function ternaryCheckCity(response){
  // Write your code here!
return response === 'NYC'? `Ok, sounds good.`: `No go.`
}
console.log(ternaryCheckCity("NYC"))


function switchOnCharmFromTip(message){
  // Write your code here!
  switch(message){
    case 'generous':
    return `Thank you so much.`
    case 'not as generous':
    return `Thank you.`
    default:
      return `Bye.`
  }


}
console.log(switchOnCharmFromTip('generous'))