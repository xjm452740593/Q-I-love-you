const words = [
    '我爱你', 'I Love You', 'Σ\'αγαπώ', 'أنا أحبك', 'Ma armastan sind',
    'Аз те обичам', 'Kocham Cię', 'Jeg elsker dig', 'Ich liebe dich',
    'Я тебя люблю', 'Je t\'aime', 'Rakastan sinua', '사랑해', 'Ik hou van je',
    'Já tě miluju', 'Te iubesc', 'Te iubesc', 'Eu te amo', 'あいしてる', 
    'Jag älskar dig', 'Ljubim te', 'ฉันรักเธอนะ', 'Te amo', 'Σ\'αγαπώ', 
    'Љубовта', 'Ti voglio bene', 'عشق', 'Dragoste', 'Anh yêu em', 
    'Renmen', 'ፍቅር', 'munaña', 'Sevgi', 'Љубав', 
    'karout', 'Es tevi Milu', 'Te sakam', 'Inhobbok', 'Miluji te', 
    'Volim te', 'chit pa de', 'Khoi huk chau', 'saya Cinta Mu', 'bi chamd hairtai', 
    'сүйүү', 'Ma tumilai maya garchu', 'Tora dost daram', 'Mahal kita', 'Me do wo', 
    'Ina sonki', 'Ch\'an Rak Khun', 'Nagligivaget', 'Asavakit', 'e\'g elska tig', 
    'T Dua Shume', 'Volim Te', 'Ljubim te', 'Jag lskar dig', 'Seni seviyorum', 
    'ja vas kokhaju', 'Rwy\'n dy garu di', 'ana bayanoo', 'wise cas'];
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
