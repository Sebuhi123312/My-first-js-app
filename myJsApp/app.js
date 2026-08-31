function createGreeting(firstName, lastName, timeOfDay) {

    let fullName = `${firstName} ${lastName}`
    let timeReturn = ''

    switch(timeOfDay) {
        case 'morning':
            timeReturn ='good morning'
            break
        case 'afternoon':
            timeReturn ='good afternoon'
            break
        case 'evening':
            timeReturn ='good evening'
            break
        default:
            timeReturn = null
            break
    }
  
  return `${timeReturn}, ${fullName}`
}