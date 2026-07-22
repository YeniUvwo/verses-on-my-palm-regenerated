


const readingEncouragements = {
  peace: 'You do not have to force peace. Bring your heart to God and let Him steady you.',
  anxiety: 'You are not carrying this alone. God cares about every concern weighing on you.',
  fear: 'Fear may be present, but God is nearer. You can take the next step with Him.',
  doubt: 'Your questions do not push God away. Bring them honestly and let faith grow gently.',
  heard: 'Your prayer has reached God. Even in silence, you have His full attention.',
  lonely: 'You may feel alone, but you have not been abandoned. God is present with you now.',
  grief: 'You do not have to rush your healing. God stays close to the brokenhearted.',
  tired: 'You are allowed to rest. God does not measure your worth by how much you accomplish.',
  guidance: 'You do not need the whole path today. Ask God to make the next step clear.',
  forgiveness: 'Your failure is not greater than God’s mercy. Grace gives you somewhere new to begin.',
  hope: 'This season is not the end of your story. God is still at work beyond what you see.',
  strength: 'You do not have to feel strong to be carried by God. His strength meets you here.',
  provision: 'God sees what you need. Keep moving faithfully without allowing fear to lead you.',
  identity: 'You are more than your mistakes, opinions or comparisons. God calls you His own.',
  salvation: 'You do not have to earn God’s welcome. Jesus has already made a way for you.',
  prayer: 'God is not waiting for impressive words. Begin honestly, and speak from your heart.',
  wisdom: 'You are allowed to pause before deciding. God gives wisdom to those who ask Him.',
  love: 'God’s love can soften what hurt has hardened. Let His love begin its work in you.',
  gratitude: 'There is still goodness worth noticing. Let one small thank-you become worship.'
};

const feelings = [
  ['Anxious','anxiety','A quiet place for a racing mind.','◌'],['Afraid','fear','Courage for what is ahead.','◇'],['Doubtful','doubt','Bring your questions without shame.','?'],['Lonely','lonely','You are not abandoned.','○'],['Grieving','grief','Comfort for a hurting heart.','☂'],['Tired','tired','Rest for your body and soul.','≈'],['Guilty','forgiveness','Grace is still available.','✦'],['Confused','guidance','Ask God for the next step.','↗'],['Hopeless','hope','Light for a dark season.','☼'],['Weak','strength','Strength beyond your own.','△'],['Worried about provision','provision','Trust God with what you need.','⌂'],['Thankful','gratitude','Turn gratitude into worship.','♡']
];

const browseGroups = [
  ['By Feeling','feelings','Start with what you feel today.','♡'],
  ['By Topic','topics','Faith, peace, wisdom, family and more.','•'],
  ['By Promise','promises','Hold on to what God has said.','✦'],
  ['By Prayer','prayers','Pray with words rooted in Scripture.','○'],
  ['By Person','people','Learn through lives in the Bible.','◇'],
  ['By Book','books','Discover key verses across Scripture.','▤'],
  ['By Occasion','occasions','Words for life’s important moments.','⌁'],
  ['Memory Collections','collections','Keep essential verses close.','☆']
];

const topics = [
  ['Peace','peace'],['Anxiety','anxiety'],['Faith and doubt','doubt'],['God hears you','heard'],['Fear','fear'],['Hope','hope'],['Strength','strength'],['Wisdom','wisdom'],['Guidance','guidance'],['Forgiveness','forgiveness'],['Provision','provision'],['Identity in Christ','identity'],['Salvation','salvation'],['Prayer','prayer'],['Love','love'],['Gratitude','gratitude'],['Loneliness','lonely'],['Grief','grief'],['Rest','tired']
];

const prayers = {
  anxiety:'Father, my thoughts feel louder than my faith today. I place every fear and unfinished concern into Your hands. Guard my heart with Your peace and help me take the next step with You. Amen.',
  fear:'God, I am afraid, but I choose to trust that You are with me. Steady my heart, give me courage and remind me that fear does not have the final word. Amen.',
  doubt:'God, You already know my questions. I do not want to pretend. Meet me in my doubt, give me wisdom, and help my small faith grow. Lord, I believe; help my unbelief. Amen.',
  heard:'Father, thank You that I do not have to find perfect words before I come to You. You hear the cry beneath my words. Help me trust Your attention, Your wisdom and Your timing. Amen.',
  lonely:'Lord, draw near to me in this lonely place. Remind me that Your presence is real even when I cannot feel it. Lead me toward safe people and help me rest in Your faithful love. Amen.',
  grief:'God of all comfort, hold me in this pain. Give me permission to grieve and strength for one day at a time. Let Your presence be close when words are not enough. Amen.',
  tired:'Jesus, I come to You tired. Quiet what can wait, restore what has been drained and teach me to receive rest without guilt. Amen.',
  guidance:'Lord, I need Your wisdom. Close the doors that are not for me, make the right path clear and give me courage to obey what You show me. Amen.',
  forgiveness:'Merciful God, I confess where I have fallen short. Thank You that Your grace is greater than my failure. Help me receive forgiveness and walk differently from here. Amen.',
  hope:'God of hope, breathe life into the places where I have stopped expecting good. Help me trust Your character while I wait for what I cannot yet see. Amen.',
  strength:'Lord, I have reached the edge of my own strength. Be my refuge, renew me and carry me through what I cannot carry alone. Amen.',
  provision:'Father, You know what I need. Help me work faithfully, ask wisely and trust You without panic. Provide in the way that is best, and make me generous even while I wait. Amen.',
  identity:'Father, teach me to see myself through what You have spoken, not through shame, comparison or fear. Help me live as someone loved, chosen and made new in Christ. Amen.',
  salvation:'Jesus, I believe You are the Son of God. I turn from sin and place my trust in Your death and resurrection. Forgive me, make me new and teach me to follow You. Amen.',
  prayer:'Father, thank You that I can come as I am. Let Your will shape my desires, give me what I need today, forgive me and help me forgive others. Amen.',
  wisdom:'God, give me wisdom that is pure, peaceful and practical. Help me listen well, think clearly and choose what honours You. Amen.',
  love:'God, teach me to love with patience, truth and kindness. Heal selfishness in me and let Your love shape the way I treat others. Amen.',
  gratitude:'Thank You, Lord, for gifts I noticed and gifts I missed. Keep my heart awake to Your goodness and let gratitude become worship. Amen.',
  peace:'Prince of Peace, settle my heart. Help me release control, receive Your presence and carry Your peace into the rest of this day. Amen.'
};

const newHere = [
  ['Who is Jesus?','Jesus is the Son of God, the clearest picture of God’s love and the Saviour who died and rose again.','salvation'],
  ['What is salvation?','Salvation is God’s gift of forgiveness and new life, received by grace through faith in Jesus.','salvation'],
  ['How do I pray?','Prayer is honest conversation with God. You can begin with gratitude, truth, a request and a willingness to listen.','prayer'],
  ['Where do I start reading?','Begin with the Gospel of John to meet Jesus, then read Psalms for prayer and Proverbs for everyday wisdom.','wisdom'],
  ['Who is the Holy Spirit?','The Holy Spirit is God present with believers—comforting, guiding, teaching and transforming us.','guidance'],
  ['What is grace?','Grace is God giving us love, welcome and help that we could never earn.','forgiveness']
];

const routes = {home:renderHome,encouragement:renderEncouragement,pray:renderPray,browse:renderBrowse,new:renderNew,search:renderSearch,saved:renderSaved,settings:renderSettings};
const app=document.querySelector('#app');
const saved=new Set(JSON.parse(localStorage.getItem('vomp-saved')||'[]'));
let previousRoute='home';

function esc(v){return String(v).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]))}
function setRoute(route,param=''){previousRoute=currentRoute();location.hash=param?`${route}/${encodeURIComponent(param)}`:route;}
function currentRoute(){return location.hash.slice(1).split('/')[0]||'home'}
function getParam(){return decodeURIComponent(location.hash.slice(1).split('/').slice(1).join('/'))}
function pageHead(title,copy,back='home'){return `<div class="page-head"><button class="back-button" data-route="${back}" aria-label="Go back">←</button><div><h1>${esc(title)}</h1><p>${esc(copy)}</p></div></div>`}
function choiceCard(title,copy,symbol,route,param=''){return `<button class="choice-card" data-route="${route}" ${param?`data-param="${esc(param)}"`:''}><span class="symbol">${symbol}</span><span><strong>${esc(title)}</strong><small>${esc(copy)}</small></span></button>`}
function verseId(ref){return ref.toLowerCase().replace(/[^a-z0-9]+/g,'-')}
function verseCards(list){return `<div class="verse-list">${list.map(([ref,text])=>{const id=verseId(ref);return `<article class="verse-card"><p class="verse-text">“${esc(text)}”</p><span class="verse-ref">${esc(ref)} · KJV</span><div class="verse-actions"><button class="small-button ${saved.has(id)?'saved':''}" data-save="${id}" data-ref="${esc(ref)}" data-text="${esc(text)}">${saved.has(id)?'♥ Saved':'♡ Save'}</button><button class="small-button" data-copy="${esc(text+' — '+ref)}">Copy</button></div></article>`}).join('')}</div>`}
function prayerCard(key){return `<section class="section-block"><div class="section-title-row"><div><span class="eyebrow">Pray</span><h2>A prayer for this moment</h2></div></div><div class="prayer-card"><p>${esc(prayers[key]||prayers.prayer)}</p><small>Take your time. You can change these words and make them your own.</small></div></section>`}

function renderHome(){app.innerHTML=`<section class="hero"><span class="eyebrow">God's Word for where you are</span><h1>What do you need today?</h1><p>You do not need to know where to look. Begin with what is on your heart, and we will gently lead you into Scripture.</p></section><section class="home-grid"><button class="door" data-route="encouragement"><span class="door-arrow" aria-hidden="true"><svg viewBox="0 0 24 24" focusable="false"><path d="M7 17 17 7M9 7h8v8"/></svg></span><span class="door-icon">♡</span><div><h2>I need encouragement</h2><p>Find Scripture for what you are feeling.</p></div></button><button class="door" data-route="pray"><span class="door-arrow" aria-hidden="true"><svg viewBox="0 0 24 24" focusable="false"><path d="M7 17 17 7M9 7h8v8"/></svg></span><span class="door-icon">○</span><div><h2>I want to pray</h2><p>Begin even when you do not know what to say.</p></div></button><button class="door" data-route="browse"><span class="door-arrow" aria-hidden="true"><svg viewBox="0 0 24 24" focusable="false"><path d="M7 17 17 7M9 7h8v8"/></svg></span><span class="door-icon">▤</span><div><h2>Browse Scripture</h2><p>Explore by topic, promise, person and more.</p></div></button><button class="door" data-route="new"><span class="door-arrow" aria-hidden="true"><svg viewBox="0 0 24 24" focusable="false"><path d="M7 17 17 7M9 7h8v8"/></svg></span><span class="door-icon">✦</span><div><h2>I’m new here</h2><p>A simple place to begin with God and the Bible.</p></div></button><button class="door" data-route="search"><span class="door-arrow" aria-hidden="true"><svg viewBox="0 0 24 24" focusable="false"><path d="M7 17 17 7M9 7h8v8"/></svg></span><span class="door-icon">⌕</span><div><h2>Search</h2><p>Use plain words: “I cannot sleep” or “God feels far.”</p></div></button></section><section class="feature-strip"><button class="feature-card" data-route="topic" data-param="doubt"><strong>When you have doubts</strong><span>Your questions are not too much for God.</span></button><button class="feature-card" data-route="topic" data-param="heard"><strong>God hears you</strong><span>You do not need perfect words to be heard.</span></button></section>`}
function renderEncouragement(){app.innerHTML=pageHead('How are you feeling?','Choose the closest word. You do not have to explain everything.','home')+`<div class="choice-grid">${feelings.map(([a,b,c,d])=>choiceCard(a,c,d,'topic',b)).join('')}</div>`}
function renderPray(){app.innerHTML=pageHead('Let’s pray','Prayer can be honest, short and unfinished. God is not waiting for perfect words.','home')+`<div class="choice-grid">${choiceCard("I don’t know what to pray",'Begin with a simple guided prayer.','○','topic','heard')}${choiceCard('Pray about something','Choose what is on your heart.','♡','topics')}${choiceCard('Pray through Scripture','Let a Bible verse shape your words.','▤','topic','prayer')}${choiceCard('When God feels silent','Bring doubt and waiting into the light.','?','topic','doubt')}${choiceCard('The Lord’s Prayer','Learn the pattern Jesus gave.','✦','reading','lords-prayer')}${choiceCard('Learn to pray','A gentle four-part guide.','↗','reading','learn-prayer')}</div>`}
function renderBrowse(){app.innerHTML=pageHead('Browse Scripture','There is more here, but you will only see one clear choice at a time.','home')+`<div class="choice-grid">${browseGroups.map(([a,b,c,d])=>choiceCard(a,c,d,b)).join('')}</div>`}
function renderTopics(){app.innerHTML=pageHead('Browse by topic','Choose one place to begin.','browse')+`<div class="choice-grid">${topics.map(([a,b])=>choiceCard(a,'Verses and a short prayer.','•','topic',b)).join('')}</div>`}
function renderTopic(){
  const key=getParam();
  const title=topics.find(x=>x[1]===key)?.[0]||feelings.find(x=>x[1]===key)?.[0]||key;
  const intros={
    doubt:'Doubt does not disqualify you from coming to God. There is room for honest questions and growing faith.',
    heard:'God hears the prayer you whisper, the prayer you cannot finish and the ache you cannot name.'
  };
  const backRoute=previousRoute==='home'?'home':previousRoute==='topics'?'topics':previousRoute==='browse'?'browse':'encouragement';
  app.innerHTML=pageHead(title,intros[key]||'Pause here and receive what your heart needs today.',backRoute)+`
    <section class="section-block">
      <div class="reading-card">
        <span class="eyebrow">For your heart today</span>
        <p>${esc(readingEncouragements[key]||'God is with you here. Take one quiet step toward Him today.')}</p>
      </div>
    </section>
    ${prayerCard(key)}
    <section class="section-block">
      <div class="section-title-row"><div><span class="eyebrow">Scripture</span><h2>Keep these words close</h2></div></div>
      ${verseCards(verses[key]||verses.hope)}
    </section>`;
}
function renderNew(){app.innerHTML=pageHead('I’m new here','No pressure. No assumed knowledge. Begin with the question that matters most to you.','home')+`<div class="choice-grid">${newHere.map(([a,b,c])=>choiceCard(a,b,'✦','reading',a)).join('')}</div><section class="section-block"><div class="reading-card"><span class="eyebrow">A simple first step</span><h2>Meet Jesus in the Gospel of John</h2><p>Read one chapter at a time. Before you begin, pray: “God, help me see who Jesus is.” You do not need to understand everything immediately.</p></div></section>`}
function renderReading(){const key=getParam();if(key==='lords-prayer'){app.innerHTML=pageHead('The Lord’s Prayer','A simple pattern Jesus gave His disciples.','pray')+`<div class="reading-card"><h2>Our Father</h2><ol><li><strong>Begin with who God is.</strong> “Our Father which art in heaven, Hallowed be thy name.”</li><li><strong>Welcome His will.</strong> “Thy kingdom come. Thy will be done.”</li><li><strong>Ask for today’s needs.</strong> “Give us this day our daily bread.”</li><li><strong>Receive and give forgiveness.</strong> “Forgive us our debts, as we forgive our debtors.”</li><li><strong>Ask for help against temptation.</strong> “Lead us not into temptation, but deliver us from evil.”</li></ol></div>${prayerCard('prayer')}`;return}if(key==='learn-prayer'){app.innerHTML=pageHead('Learn to pray','Use four simple movements. You can spend one sentence on each.','pray')+`<div class="reading-card"><h2>Adoration. Confession. Thanksgiving. Supplication.</h2><ol><li><strong>Adoration:</strong> Tell God what is true about Him.</li><li><strong>Confession:</strong> Speak honestly about where you have fallen short.</li><li><strong>Thanksgiving:</strong> Name something you are grateful for.</li><li><strong>Supplication:</strong> Ask for what you and others need.</li></ol><p>Prayer does not need to sound impressive. Honesty is a better beginning than eloquence.</p></div>`;return}const item=newHere.find(x=>x[0]===key);app.innerHTML=pageHead(item?.[0]||'Start here',item?.[1]||'Take one gentle step at a time.','new')+`${prayerCard(item?.[2]||'prayer')}${verseCards(verses[item?.[2]||'salvation'])}`}
function renderGeneric(title,items,back='browse'){app.innerHTML=pageHead(title,'A curated starting point—not an overwhelming catalogue.',back)+`<div class="choice-grid">${items.map(([a,b,c='•'])=>choiceCard(a,b,c,'topic',inferKey(a))).join('')}</div>`}
function inferKey(a){const s=a.toLowerCase();const match=topics.find(([t])=>s.includes(t.toLowerCase()));if(match)return match[1];if(s.includes('jesus'))return 'salvation';if(s.includes('prayer'))return 'prayer';if(s.includes('david'))return 'hope';if(s.includes('hospital'))return 'strength';if(s.includes('travel'))return 'guidance';if(s.includes('wedding'))return 'love';if(s.includes('business')||s.includes('exam')||s.includes('proverb'))return 'wisdom';return 'hope'}
function renderSearch(){app.innerHTML=pageHead('Search','Type a feeling, need, Bible topic or a plain-language sentence.','home')+`<div class="search-wrap"><input id="searchInput" class="search-box" type="search" placeholder="Try “I feel afraid” or “Does God hear me?”" autocomplete="off"><p class="search-help">Search works on this device. Nothing you type is sent anywhere.</p><div id="results"></div></div>`;document.querySelector('#searchInput').addEventListener('input',e=>showResults(e.target.value));}
function showResults(q){const box=document.querySelector('#results');q=q.trim().toLowerCase();if(!q){box.innerHTML='';return}const aliases={scared:'fear',afraid:'fear',worried:'anxiety',anxious:'anxiety','cannot sleep':'peace','can\'t sleep':'peace',listen:'heard',hear:'heard','need help':'heard','i need help':'heard','help me':'heard','please help me':'heard','i need prayer':'prayer','i need god':'salvation','i do not know what to do':'guidance',"i don't know what to do":'guidance',silent:'doubt',question:'doubt',unbelief:'doubt',alone:'lonely',sad:'grief',money:'provision',business:'wisdom',work:'wisdom',lost:'guidance',shame:'forgiveness'};let keys=Object.keys(verses).filter(k=>k.includes(q)||topics.some(([t,key])=>key===k&&t.toLowerCase().includes(q)));Object.entries(aliases).forEach(([term,key])=>{if(q.includes(term)&&!keys.includes(key))keys.push(key)});if(!keys.length){box.innerHTML='<div class="empty-state">I could not find an exact match, but you do not have to leave empty-handed. Start with God Hears You, prayer, peace or guidance.</div>';return}box.innerHTML=keys.slice(0,6).map(k=>`<section class="result-group"><h3>${esc(topics.find(x=>x[1]===k)?.[0]||k)}</h3>${verseCards(verses[k].slice(0,2))}<button class="small-button" data-route="topic" data-param="${k}">Open full section →</button></section>`).join('');}
function renderSaved(){const stored=JSON.parse(localStorage.getItem('vomp-saved-data')||'{}');const list=Object.entries(stored).map(([,v])=>[v.ref,v.text]);app.innerHTML=pageHead('Saved','Your saved verses remain on this device.','home')+(list.length?verseCards(list):'<div class="empty-state">You have not saved a verse yet. Tap ♡ Save beneath any Scripture to keep it here.</div>')}
function renderSettings(){app.innerHTML=pageHead('Reading settings','Make the experience comfortable for your eyes and attention.','home')+`<div class="settings-list"><div class="setting-row"><div><strong>Appearance</strong><br><small>Light or dark reading mode</small></div><button id="themeToggle">${document.body.classList.contains('dark')?'Use light':'Use dark'}</button></div><div class="setting-row"><div><strong>Text size</strong><br><small>Adjust Scripture and body text</small></div><select id="fontSize"><option value="16">Smaller</option><option value="17">Default</option><option value="19">Larger</option><option value="21">Largest</option></select></div><div class="setting-row"><div><strong>Saved content</strong><br><small>Stored only in this browser</small></div><button id="clearSaved">Clear saved</button></div></div>`;document.querySelector('#fontSize').value=localStorage.getItem('vomp-font')||'17';document.querySelector('#themeToggle').onclick=()=>{document.body.classList.toggle('dark');localStorage.setItem('vomp-theme',document.body.classList.contains('dark')?'dark':'light');renderSettings()};document.querySelector('#fontSize').onchange=e=>{document.documentElement.style.setProperty('--font-size',e.target.value+'px');localStorage.setItem('vomp-font',e.target.value)};document.querySelector('#clearSaved').onclick=()=>{saved.clear();localStorage.removeItem('vomp-saved');localStorage.removeItem('vomp-saved-data');toast('Saved verses cleared')};}

function route(){const r=currentRoute();document.querySelectorAll('.mobile-nav button').forEach(b=>b.classList.toggle('active',b.dataset.route===r));if(routes[r])routes[r]();else if(r==='topic')renderTopic();else if(r==='topics')renderTopics();else if(r==='reading')renderReading();else if(r==='feelings')renderEncouragement();else if(r==='promises')renderGeneric('Promises of God',[['God’s presence','He will not leave you.'],['Peace','Peace beyond circumstances.'],['Provision','Trust God with your needs.'],['Guidance','Wisdom for the next step.'],['Forgiveness','Grace after failure.'],['Hope','A future held by God.']]);else if(r==='prayers')renderGeneric('Prayers in Scripture',[['The Lord’s Prayer','A pattern from Jesus.'],['David’s prayers','Honest words from the Psalms.'],['Hannah’s prayer','Trust through longing.'],['Paul’s prayers','Prayers for spiritual growth.']]);else if(r==='people')renderGeneric('People in the Bible',[['Jesus','Saviour, teacher and Son of God.'],['David','Worship, courage and repentance.'],['Esther','Courage for a defining moment.'],['Paul','Grace, mission and endurance.'],['Ruth','Loyalty, loss and restoration.'],['Moses','Calling, leadership and trust.']]);else if(r==='books')renderGeneric('Books of the Bible',[['John','Meet Jesus.'],['Psalms','Prayers for every emotion.'],['Proverbs','Wisdom for daily life.'],['Romans','Grace, faith and new life.'],['Philippians','Joy and peace in Christ.'],['James','Practical, living faith.']]);else if(r==='occasions')renderGeneric('Scripture for occasions',[['Starting a business','Wisdom, diligence and integrity.'],['Wedding','Love, covenant and faithfulness.'],['Exams','Peace, wisdom and discipline.'],['Travel','Protection and guidance.'],['New year','Hope and fresh beginnings.'],['Hospital visit','Healing, comfort and presence.']]);else if(r==='collections')renderGeneric('Memory verse collections',[['10 verses every Christian should know','A simple essential collection.'],['Promises for difficult days','Words to carry through hardship.'],['Verses for children','Short, clear and memorable.'],['Words of Jesus','Keep Christ’s teaching close.'],['Psalms for prayer','Borrow words when yours are few.'],['Proverbs for daily living','Wisdom for ordinary decisions.']]);else renderHome();window.scrollTo(0,0);app.focus({preventScroll:true})}

document.addEventListener('click',e=>{const routeBtn=e.target.closest('[data-route]');if(routeBtn){setRoute(routeBtn.dataset.route,routeBtn.dataset.param||'');return}const saveBtn=e.target.closest('[data-save]');if(saveBtn){const id=saveBtn.dataset.save;const data=JSON.parse(localStorage.getItem('vomp-saved-data')||'{}');if(saved.has(id)){saved.delete(id);delete data[id];toast('Removed from saved')}else{saved.add(id);data[id]={ref:saveBtn.dataset.ref,text:saveBtn.dataset.text};toast('Verse saved')}localStorage.setItem('vomp-saved',JSON.stringify([...saved]));localStorage.setItem('vomp-saved-data',JSON.stringify(data));route();return}const copyBtn=e.target.closest('[data-copy]');if(copyBtn){navigator.clipboard?.writeText(copyBtn.dataset.copy);toast('Verse copied')}});
function toast(msg){const t=document.querySelector('#toast');t.textContent=msg;t.classList.add('show');clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>t.classList.remove('show'),1800)}
window.addEventListener('hashchange',route);
if(localStorage.getItem('vomp-theme')==='dark')document.body.classList.add('dark');document.documentElement.style.setProperty('--font-size',(localStorage.getItem('vomp-font')||'17')+'px');
if('serviceWorker'in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('./service-worker.js'));
route();
