var getText = function() {
  // returns an array with time represented in text
  var result = ['it', 'is']

  dateTime = (new Date()).toString().split(' ')
  var [day, mon, date, year, time, gmt, tZone] = dateTime

  var [hour, min, sec] = time.split(':')

  if (parseInt(hour) > 12) {
    hour -= 12
  } 

  min = Math.round(parseInt(min)/5)*5

  var toPast = 'past'

  if (parseInt(min) > 30) {
    toPast = 'to'
    min = 60 - min
    hour = parseInt(hour) + 1
  }

  if (parseInt(hour) > 12) {
    hour -= 12
  } 

  var minText = {
    0: undefined,
    5: 'five',
    10: 'ten',
    15: 'quarter',
    20: 'twenty',
    30: 'half'
  }

  var hourText = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'fiveH',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'tenH',
    11: 'elevent',
    12: 'twelve'
  }

  if (minText[min]) {
    if (min === 25) {
      result.push(minText['20'])
      result.push(minText['5'])
    } else {
      result.push(minText[min])
    }
    if (minText[min] !== 'quarter' && minText[min] !== 'half') {
      result.push('minutes')
    }
    result.push(toPast)
  }
  result.push(hourText[hour])
  result.push('oclock')

  return result
}

var styleText = function(arr) {
  // remove selected class from all clock-text
  $('.clock-text').removeClass('selected')

  // add selected class to appropriate elements
  arr.forEach(function(word) {
    $('.'+word).addClass('selected')
  })
}

var text = getText()
styleText(text)

setInterval(function() {
  text = getText()
  styleText(text)
}, 60000)
