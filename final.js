const aboutMeBtn = document.getElementById('about-me-btn')
const amyHobbyesBtn = document.getElementById('my-hobbyes-btn')
const myGoalBtn = document.getElementById('my-goal-btn')

const hobbyes = ['Sport', 'guitar', 'Coding']


const showHobbyes = () =>{
  clearContent()

  const ul = document.createElement('ul')

  hobbyess.forEach((hobbyes, index) => {
    const li = document.createElement('li')
ul.append(li)
  })
}

amyHobbyesBtn.addEventListener('click', showHobbyes )

const customAlert = (HobbyText) => {
    const HobbyDiv = document.createElement('div');
    HobbyDiv.className = 'HobbyDiv';
    document.body.append(HobbyDiv);

    const aboutMeText = document.createElement('p')
    aboutMeText.textContent = hobbyes;
    contentDiv.append(HobbyText)


    aboutBnt.addEventListener('click', () => {
        HobbyDiv.remove();
})
}

aboutMeBtn.addEventListener('click', () => {
    customAlert('My name is Iskander')
})

amyHobbyesBtn.addEventListener('click', () =>{
    customAlert({hobbyes})
})

myGoalBtn.addEventListener('click', () =>{
    customAlert('My goal...')
})
