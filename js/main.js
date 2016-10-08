var container = document.getElementById('container')
var imageIcons = [
  "img/man.png",
  "img/dog.png",
  "img/princess.png",
  "img/unicorn.png",
  "img/penguin.png",
  "img/teemo.png"
]

var btn = document.getElementById('btn')
var form = document.getElementById('form')

function addTimestamp (){
  var today = new Date()
  var month, day, year, hour, minute, dayNight
  month = today.getMonth()
  day = today.getDate()
  year = today.getFullYear()
  hour = today.getHours()
  minute = today.getMinutes()
  if ( hour >= 12 ) {
    dayNight = "PM"
    hour -= 12
  } else if (hour === 0) {
    dayNight = "AM"
    hour += 12
  } else {
    dayNight = "AM"
  }

  if ( minute < 10 ) {
   minute = "0" + minute
  }
  var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  return months[month] + " " + day + ", " + year + " | " + hour + ":" + minute + " " + dayNight
}

function getComment(e){
  e.preventDefault()
  var username = document.getElementById('username').value
  var commentBox = document.getElementById('comment-box').value
  commentBox = commentBox.replace(/\r?\n/g, '<br>');
  if ((username.trim() != "") && (commentBox.trim() != "") ) {
    var commentDiv = document.createElement('div')
    var imageDiv = document.createElement('div')
    var userImage = document.createElement('img')
    var commentInfo = document.createElement('div')
    var commentName = document.createElement('h5')
    var hr = document.createElement('hr')
    var commentText = document.createElement('p')
    var timestamp = document.createElement('p')
    var rNum = Math.floor( Math.random() * 6 )

    commentDiv.className = 'comment'
    imageDiv.className = 'image'
    userImage.className = 'user-image'
    userImage.setAttribute('width', '150')
    userImage.setAttribute('height', '150')
    userImage.setAttribute('src', imageIcons[rNum])
    commentInfo.className = 'comment-info'
    commentName.className = 'comment-name'
    commentText.className = 'comment-text'
    timestamp.className = 'timestamp'

    commentName.textContent = username
    commentText.innerHTML = commentBox
    timestamp.textContent = addTimestamp()

    imageDiv.appendChild(userImage)
    commentInfo.appendChild(commentName)
    commentInfo.appendChild(hr)
    commentInfo.appendChild(commentText)
    commentInfo.appendChild(timestamp)
    commentDiv.appendChild(imageDiv)
    commentDiv.appendChild(commentInfo)
    container.insertBefore(commentDiv, form)

    document.getElementById('username').value = ""
    document.getElementById('comment-box').value = ""
  }


}

btn.addEventListener('click', getComment)