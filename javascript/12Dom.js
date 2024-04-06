DOM
Document Object Model

document.getElementsByTagName('h1')[0]
<h1>​I'm AAKASH HANDA​</h1>​
document.getElementsByTagName('h1')[0].innerText
"I'm AAKASH HANDA"
document.getElementsByTagName('h1')[0].innerText = "I m from Developer Funnel"
'I m from Developer Funnel'
document.getElementsByTagName('h1')[0].style.color='red'
'red'
document.getElementsByTagName('h1')[0].style.visibility = 'hidden'
'hidden'
document.getElementsByTagName('h1')[0].style.visibility = 'visible'
'visible'

document.getElementsByClassName('scroll')
HTMLCollection(5) [a.scroll, a.scroll, a.scroll, a.scroll, a.scroll]0: a.scroll1: a.scroll2: a.scroll3: a.scroll4: a.scrolllength: 5[[Prototype]]: HTMLCollection
document.getElementsByClassName('scroll')[1]
<a href=​"#youtube" class=​"scroll">​Youtube​</a>​
document.getElementsByClassName('scroll')[1].innerText="Video"
'Video'