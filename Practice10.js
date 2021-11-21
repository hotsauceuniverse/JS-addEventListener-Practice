//addEventListener = document내에 특정요소에 event를 등록할때 사용

let counter = 0 
const listener = function () {
  header.textContent = `클릭 횟수 : ${++counter}`
}

const header = document.createElement('h1')
header.style.userSelect = 'none'
header.textContent = `클릭 횟수 : 0`

const p = document.createElement('p')
p.textContent = `이벤트 연결 상태 : 해제`

const connectButton = document.createElement('button')
connectButton.textContent = `이벤트 연결 버튼`
connectButton.addEventListener('click', function () {
  header.addEventListener('click', listener) 
  p.textContent = `이벤트 연결상태 : 연결`
})

const disconnectButton = document.createElement('button')
disconnectButton.textContent = `이벤트 해제 버튼`
disconnectButton.addEventListener('click', function () {
  header.removeEventListener('click', listener) 
  p.textContent = `이벤트 연결상태 : 해제`
})

document.body.appendChild(header)
document.body.appendChild(connectButton)
document.body.appendChild(disconnectButton)
document.body.appendChild(p)