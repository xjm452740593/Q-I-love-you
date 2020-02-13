const words = [
    '我爱你', 'I Love You', 'Σ\'αγαπώ', ' أنا أحبك', 'Ma armastan sind',
    'Аз те обичам', 'Kocham Cię', 'Jeg elsker dig', 'Ich liebe dich',
    'Я тебя люблю', 'Je t\'aime', 'Rakastan sinua', '사랑해', 'Ik hou van je',
    'Já tě miluju', 'Te iubesc', 'Te iubesc', 'Eu te amo', 'あいしてる', 
    'Jag älskar dig', 'Ljubim te', 'ฉันรักเธอนะ', 'Te amo', 'Σ\'αγαπώ', 
    'Љубовта', 'Ti voglio bene', 'عشق', 'Dragoste', 'Anh yêu em', 
    'Renmen', 'ፍቅር', 'munaña', 'Sevgi', 'Љубав', 
    'karout', 'amà', 'amôr', 'kærleiki', 'mborayhu', 
    'Upendo', 'sòòyayyàà', 'ljubav', 'Սեր', 'сүю', 
    'сүйүү', 'tia', 'aroha', 'KHAIR', 'प्रेम', 
    'kjærlighet', 'munay', 'jecel', 'Kärlek', 'soymek', 
    'Mahal', 'ярату', 'محبت', 'sopp', 'uthando', 
    'ความรัก', 'Aşk', 'Tình yêu', 'ליבע'];
const dom = {
    love: document.querySelector('.love')
}

dom.love.style.setProperty('--particles', words.length)

words.forEach((word, i) => {
    let span = document.createElement('span')
    span.style.setProperty('--n', i + 1)
    span.innerText = word
    dom.love.appendChild(span)
})