


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
  ['Anxious','anxiety','A quiet place for a racing mind.','cloud'],
  ['Afraid','fear','Courage for what is ahead.','shield'],
  ['Doubtful','doubt','Bring your questions without shame.','question'],
  ['Lonely','lonely','You are not abandoned.','person'],
  ['Grieving','grief','Comfort for a hurting heart.','tear'],
  ['Tired','tired','Rest for your body and soul.','moon'],
  ['Guilty','forgiveness','Grace is still available.','heart'],
  ['Confused','guidance','Ask God for the next step.','compass'],
  ['Hopeless','hope','Light for a dark season.','sun'],
  ['Weak','strength','Strength beyond your own.','mountain'],
  ['Worried about provision','provision','Trust God with what you need.','home'],
  ['Thankful','gratitude','Turn gratitude into worship.','spark']
];

const browseGroups = [
  ['By Feeling','feelings','Start with what you feel today.','heart'],
  ['By Topic','topics','Faith, peace, wisdom, family and more.','grid'],
  ['By Promise','promises','Hold on to what God has said.','shield'],
  ['By Prayer','prayers','Pray with words rooted in Scripture.','prayer'],
  ['By Person','people','Learn through lives in the Bible.','person'],
  ['By Book','books','Discover defining verses from each book.','book'],
  ['By Occasion','occasions','Words for life’s important moments.','calendar'],
  ['Memory Collections','collections','Keep essential verses close.','star']
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
function icon(name='spark'){
  const paths={
    arrow:'<path d="M7 17 17 7M9 7h8v8"/>',
    back:'<path d="m15 18-6-6 6-6"/>',
    heart:'<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.7-7.5 1.1-1.1a5.5 5.5 0 0 0 0-7.8Z"/>',
    shield:'<path d="M12 3 5 6v5c0 4.7 2.8 8 7 10 4.2-2 7-5.3 7-10V6l-7-3Z"/>',
    question:'<circle cx="12" cy="12" r="9"/><path d="M9.8 9a2.5 2.5 0 1 1 3.8 2.1c-.9.5-1.6 1.1-1.6 2.4M12 17h.01"/>',
    person:'<circle cx="12" cy="8" r="3"/><path d="M5 21c.8-4 3.1-6 7-6s6.2 2 7 6"/>',
    tear:'<path d="M12 3s6 6.4 6 11a6 6 0 0 1-12 0c0-4.6 6-11 6-11Z"/>',
    moon:'<path d="M20 15.2A8.5 8.5 0 0 1 8.8 4 8.5 8.5 0 1 0 20 15.2Z"/>',
    compass:'<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5 5-2Z"/>',
    sun:'<circle cx="12" cy="12" r="3.5"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    mountain:'<path d="m3 20 6-10 3 4 2-3 7 9H3Z"/>',
    home:'<path d="m3 11 9-7 9 7M5 10v10h14V10M9 20v-6h6v6"/>',
    spark:'<path d="m12 3 1.4 5.6L19 10l-5.6 1.4L12 17l-1.4-5.6L5 10l5.6-1.4L12 3Z"/>',
    cloud:'<path d="M7 18h10a4 4 0 0 0 .5-8A6 6 0 0 0 6 8.5 4.5 4.5 0 0 0 7 18Z"/>',
    grid:'<rect x="4" y="4" width="6" height="6" rx="1"/><rect x="14" y="4" width="6" height="6" rx="1"/><rect x="4" y="14" width="6" height="6" rx="1"/><rect x="14" y="14" width="6" height="6" rx="1"/>',
    prayer:'<path d="M9 4c1.5 2 2 4 2 6v10M15 4c-1.5 2-2 4-2 6v10M8 12h8M7 20h10"/>',
    book:'<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H11v16H6.5A2.5 2.5 0 0 0 4 21.5v-16ZM20 5.5A2.5 2.5 0 0 0 17.5 3H13v16h4.5a2.5 2.5 0 0 1 2.5 2.5v-16Z"/>',
    calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M8 3v4M16 3v4M3 10h18"/>',
    star:'<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z"/>',
    cross:'<path d="M12 3v18M7 8h10"/>',
    music:'<path d="M9 18V6l10-2v12M9 10l10-2"/><circle cx="6" cy="18" r="3"/><circle cx="16" cy="16" r="3"/>',
    lamp:'<path d="M9 18h6M10 22h4M8 14c-1.3-1.1-2-2.7-2-4.5A6 6 0 0 1 18 9.5c0 1.8-.7 3.4-2 4.5-.8.7-1 1.4-1 2H9c0-.6-.2-1.3-1-2Z"/>',
    scroll:'<path d="M7 4h11a2 2 0 0 1 2 2v12H8a4 4 0 0 0-4 4V7a3 3 0 0 1 3-3Z"/><path d="M8 18a4 4 0 0 1 4 4H4"/>',
    joy:'<circle cx="12" cy="12" r="9"/><path d="M8 10h.01M16 10h.01M8 15c1.2 1.2 2.5 1.8 4 1.8s2.8-.6 4-1.8"/>',
    steps:'<path d="M4 20h5v-5h5v-5h6"/>'
  };
  return `<svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">${paths[name]||paths.spark}</svg>`;
}
function arrowIcon(direction='forward'){return icon(direction==='back'?'back':'arrow')}
function pageHead(title,copy,back='home'){return `<div class="page-head"><button class="back-button arrow-button" data-route="${back}" aria-label="Go back">${arrowIcon('back')}</button><div><h1>${esc(title)}</h1><p>${esc(copy)}</p></div></div>`}
function choiceCard(title,copy,symbol,route,param=''){return `<button class="choice-card" data-route="${route}" ${param?`data-param="${esc(param)}"`:''}><span class="symbol">${icon(symbol)}</span><span class="choice-copy"><strong>${esc(title)}</strong><small>${esc(copy)}</small></span><span class="card-arrow arrow-button" aria-hidden="true">${arrowIcon()}</span></button>`}
function verseId(ref){return ref.toLowerCase().replace(/[^a-z0-9]+/g,'-')}
function verseCards(list){return `<div class="verse-list">${list.map(([ref,text])=>{const id=verseId(ref);return `<article class="verse-card"><p class="verse-text">“${esc(text)}”</p><span class="verse-ref">${esc(ref)} · KJV</span><div class="verse-actions"><button class="small-button ${saved.has(id)?'saved':''}" data-save="${id}" data-ref="${esc(ref)}" data-text="${esc(text)}">${saved.has(id)?'♥ Saved':'♡ Save'}</button><button class="small-button" data-copy="${esc(text+' — '+ref)}">Copy</button></div></article>`}).join('')}</div>`}
function prayerCard(key){return `<section class="section-block"><div class="section-title-row"><div><span class="eyebrow">Pray</span><h2>A prayer for this moment</h2></div></div><div class="prayer-card"><p>${esc(prayers[key]||prayers.prayer)}</p><small>God already knows your heart. Pray honestly and believe He hears you.</small></div></section>`}

function renderHome(){app.innerHTML=`<section class="hero"><span class="eyebrow">God's Word for where you are</span><h1>What do you need today?</h1></section><section class="home-grid"><button class="door" data-route="encouragement"><span class="door-arrow" aria-hidden="true">${arrowIcon()}</span><span class="door-icon">${icon('heart')}</span><div><h2>I need encouragement</h2><p>Find Scripture for what you are feeling.</p></div></button><button class="door" data-route="pray"><span class="door-arrow" aria-hidden="true">${arrowIcon()}</span><span class="door-icon">${icon('prayer')}</span><div><h2>I want to pray</h2><p>Begin even when you do not know what to say.</p></div></button><button class="door" data-route="browse"><span class="door-arrow" aria-hidden="true">${arrowIcon()}</span><span class="door-icon">${icon('book')}</span><div><h2>Browse Scripture</h2><p>Explore by topic, promise, person and more.</p></div></button><button class="door" data-route="new"><span class="door-arrow" aria-hidden="true">${arrowIcon()}</span><span class="door-icon">${icon('spark')}</span><div><h2>I’m new here</h2><p>A simple place to begin with God and the Bible.</p></div></button><button class="door" data-route="search"><span class="door-arrow" aria-hidden="true">${arrowIcon()}</span><span class="door-icon">${icon('compass')}</span><div><h2>Search</h2><p>Use plain words: “I cannot sleep” or “God feels far.”</p></div></button></section><section class="feature-strip"><button class="feature-card" data-route="topic" data-param="doubt"><span class="feature-icon">${icon('question')}</span><span><strong>When you have doubts</strong><small>Your questions are not too much for God.</small></span><span class="feature-arrow arrow-button">${arrowIcon()}</span></button><button class="feature-card" data-route="topic" data-param="heard"><span class="feature-icon">${icon('prayer')}</span><span><strong>God hears you</strong><small>You do not need perfect words to be heard.</small></span><span class="feature-arrow arrow-button">${arrowIcon()}</span></button></section>`}
function renderEncouragement(){app.innerHTML=pageHead('How are you feeling?','Choose the closest word. You do not have to explain everything.','home')+`<div class="choice-grid">${feelings.map(([a,b,c,d])=>choiceCard(a,c,d,'topic',b)).join('')}</div>`}
function renderPray(){app.innerHTML=pageHead('Let’s pray','Prayer can be honest, short and unfinished. God is not waiting for perfect words.','home')+`<div class="choice-grid">${choiceCard("I don’t know what to pray",'Begin with a simple guided prayer.','prayer','topic','heard')}${choiceCard('Pray about something','Choose what is on your heart.','heart','topics')}${choiceCard('Pray through Scripture','Let a Bible verse shape your words.','book','topic','prayer')}${choiceCard('When God feels silent','Bring doubt and waiting into the light.','question','topic','doubt')}${choiceCard('The Lord’s Prayer','Learn the pattern Jesus gave.','cross','reading','lords-prayer')}${choiceCard('Learn to pray','A gentle four-part guide.','steps','reading','learn-prayer')}</div>`}
function renderBrowse(){app.innerHTML=pageHead('Browse Scripture','There is more here, but you will only see one clear choice at a time.','home')+`<div class="choice-grid">${browseGroups.map(([a,b,c,d])=>choiceCard(a,c,d,b)).join('')}</div>`}
function renderTopics(){app.innerHTML=pageHead('Browse by topic','Choose one place to begin.','browse')+`<div class="choice-grid">${topics.map(([a,b])=>choiceCard(a,'Verses and a short prayer.','book','topic',b)).join('')}</div>`}
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
function renderNew(){app.innerHTML=pageHead('I’m new here','No pressure. No assumed knowledge. Begin with the question that matters most to you.','home')+`<div class="choice-grid">${newHere.map(([a,b,c])=>choiceCard(a,b,'spark','reading',a)).join('')}</div><section class="section-block"><div class="reading-card"><span class="eyebrow">A simple first step</span><h2>Meet Jesus in the Gospel of John</h2><p>Read one chapter at a time. Before you begin, pray: “God, help me see who Jesus is.” You do not need to understand everything immediately.</p></div></section>`}
function renderReading(){const key=getParam();if(key==='lords-prayer'){app.innerHTML=pageHead('The Lord’s Prayer','A simple pattern Jesus gave His disciples.','pray')+`<div class="reading-card"><h2>Our Father</h2><ol><li><strong>Begin with who God is.</strong> “Our Father which art in heaven, Hallowed be thy name.”</li><li><strong>Welcome His will.</strong> “Thy kingdom come. Thy will be done.”</li><li><strong>Ask for today’s needs.</strong> “Give us this day our daily bread.”</li><li><strong>Receive and give forgiveness.</strong> “Forgive us our debts, as we forgive our debtors.”</li><li><strong>Ask for help against temptation.</strong> “Lead us not into temptation, but deliver us from evil.”</li></ol></div>${prayerCard('prayer')}`;return}if(key==='learn-prayer'){app.innerHTML=pageHead('Learn to pray','Use four simple movements. You can spend one sentence on each.','pray')+`<div class="reading-card"><h2>Adoration. Confession. Thanksgiving. Supplication.</h2><ol><li><strong>Adoration:</strong> Tell God what is true about Him.</li><li><strong>Confession:</strong> Speak honestly about where you have fallen short.</li><li><strong>Thanksgiving:</strong> Name something you are grateful for.</li><li><strong>Supplication:</strong> Ask for what you and others need.</li></ol><p>Prayer does not need to sound impressive. Honesty is a better beginning than eloquence.</p></div>`;return}const item=newHere.find(x=>x[0]===key);app.innerHTML=pageHead(item?.[0]||'Start here',item?.[1]||'Take one gentle step at a time.','new')+`${prayerCard(item?.[2]||'prayer')}${verseCards(verses[item?.[2]||'salvation'])}`}
function renderCollectionList(title,copy,items){app.innerHTML=pageHead(title,copy,'browse')+`<div class="choice-grid">${items.map(item=>choiceCard(item.title,item.copy,item.icon,'collection',item.key)).join('')}</div>`}
function renderCollection(){const item=scriptureCollections[getParam()];if(!item){renderBrowse();return}app.innerHTML=pageHead(item.title,item.copy,previousRoute==='collections'||previousRoute==='books'?'browse':previousRoute)+`<section class="section-block collection-intro"><div class="reading-card"><span class="symbol collection-icon">${icon(item.icon)}</span><p>${esc(item.copy)}</p></div></section><section class="section-block"><div class="section-title-row"><div><span class="eyebrow">Scripture</span><h2>Keep these words close</h2></div></div>${verseCards(item.verses)}</section>`}
function renderGeneric(title,items,back='browse'){app.innerHTML=pageHead(title,'Choose a section to explore. Every card now opens content that matches its title.',back)+`<div class="choice-grid">${items.map(([a,b,iconName='book',key])=>choiceCard(a,b,iconName,scriptureCollections[key]?'collection':'topic',key)).join('')}</div>`}
function renderSearch(){app.innerHTML=pageHead('Search','Type a feeling, need, Bible topic or a plain-language sentence.','home')+`<div class="search-wrap"><input id="searchInput" class="search-box" type="search" placeholder="Try “I feel afraid” or “Does God hear me?”" autocomplete="off"><p class="search-help">Search works on this device. Nothing you type is sent anywhere.</p><div id="results"></div></div>`;document.querySelector('#searchInput').addEventListener('input',e=>showResults(e.target.value));}
function showResults(q){const box=document.querySelector('#results');q=q.trim().toLowerCase();if(!q){box.innerHTML='';return}const aliases={scared:'fear',afraid:'fear',worried:'anxiety',anxious:'anxiety','cannot sleep':'peace','can\'t sleep':'peace',listen:'heard',hear:'heard','need help':'heard','i need help':'heard','help me':'heard','please help me':'heard','i need prayer':'prayer','i need god':'salvation','i do not know what to do':'guidance',"i don't know what to do":'guidance',silent:'doubt',question:'doubt',unbelief:'doubt',alone:'lonely',sad:'grief',money:'provision',business:'wisdom',work:'wisdom',lost:'guidance',shame:'forgiveness'};let keys=Object.keys(verses).filter(k=>k.includes(q)||topics.some(([t,key])=>key===k&&t.toLowerCase().includes(q)));Object.entries(aliases).forEach(([term,key])=>{if(q.includes(term)&&!keys.includes(key))keys.push(key)});if(!keys.length){box.innerHTML='<div class="empty-state">I could not find an exact match, but you do not have to leave empty-handed. Start with God Hears You, prayer, peace or guidance.</div>';return}box.innerHTML=keys.slice(0,6).map(k=>`<section class="result-group"><h3>${esc(topics.find(x=>x[1]===k)?.[0]||k)}</h3>${verseCards(verses[k].slice(0,2))}<button class="small-button open-section-button" data-route="topic" data-param="${k}"><span>Open full section</span><span class="inline-arrow arrow-button" aria-hidden="true">${arrowIcon()}</span></button></section>`).join('');}
function renderSaved(){const stored=JSON.parse(localStorage.getItem('vomp-saved-data')||'{}');const list=Object.entries(stored).map(([,v])=>[v.ref,v.text]);app.innerHTML=pageHead('Saved','Your saved verses remain on this device.','home')+(list.length?verseCards(list):'<div class="empty-state">You have not saved a verse yet. Tap ♡ Save beneath any Scripture to keep it here.</div>')}
function renderSettings(){app.innerHTML=pageHead('Reading settings','Make the experience comfortable for your eyes and attention.','home')+`<div class="settings-list"><div class="setting-row"><div><strong>Appearance</strong><br><small>Light or dark reading mode</small></div><button id="themeToggle">${document.body.classList.contains('dark')?'Use light':'Use dark'}</button></div><div class="setting-row"><div><strong>Text size</strong><br><small>Adjust Scripture and body text</small></div><select id="fontSize"><option value="16">Smaller</option><option value="17">Default</option><option value="19">Larger</option><option value="21">Largest</option></select></div><div class="setting-row"><div><strong>Saved content</strong><br><small>Stored only in this browser</small></div><button id="clearSaved">Clear saved</button></div></div>`;document.querySelector('#fontSize').value=localStorage.getItem('vomp-font')||'17';document.querySelector('#themeToggle').onclick=()=>{document.body.classList.toggle('dark');localStorage.setItem('vomp-theme',document.body.classList.contains('dark')?'dark':'light');renderSettings()};document.querySelector('#fontSize').onchange=e=>{document.documentElement.style.setProperty('--font-size',e.target.value+'px');localStorage.setItem('vomp-font',e.target.value)};document.querySelector('#clearSaved').onclick=()=>{saved.clear();localStorage.removeItem('vomp-saved');localStorage.removeItem('vomp-saved-data');toast('Saved verses cleared')};}

function route(){
  const r=currentRoute();
  document.querySelectorAll('.mobile-nav button').forEach(b=>b.classList.toggle('active',b.dataset.route===r));
  if(routes[r])routes[r]();
  else if(r==='topic')renderTopic();
  else if(r==='topics')renderTopics();
  else if(r==='reading')renderReading();
  else if(r==='collection')renderCollection();
  else if(r==='feelings')renderEncouragement();
  else if(r==='promises')renderGeneric('Promises of God',[
    ['God’s presence','Verses that promise He will not leave you.','shield','difficult-days'],
    ['Peace','Promises of peace beyond circumstances.','heart','peace'],
    ['Provision','God’s faithful care for what you need.','home','provision'],
    ['Guidance','Wisdom and direction for the next step.','compass','guidance'],
    ['Forgiveness','Promises of mercy and a clean beginning.','heart','forgiveness'],
    ['Hope','A future held securely by God.','sun','hope']
  ]);
  else if(r==='prayers')renderGeneric('Prayers in Scripture',[
    ['Psalms for Prayer','Only Psalms for fear, sorrow, trust, repentance and praise.','prayer','psalms-prayer'],
    ['The Lord’s Prayer','The pattern Jesus gave His disciples.','cross','words-of-jesus'],
    ['Prayers for difficult days','Scripture to pray when strength is low.','shield','difficult-days'],
    ['Prayer and God’s response','Verses about asking, listening and trusting.','prayer','prayer']
  ]);
  else if(r==='people')renderGeneric('People in the Bible',[
    ['Jesus','His supremacy, power, words and saving work.','cross','book-john'],
    ['David','Psalms of worship, courage, repentance and trust.','music','book-psalms'],
    ['Paul','Grace, faith and new life through his letter to Rome.','scroll','book-romans'],
    ['James','Practical faith taught by the brother of Jesus.','steps','book-james']
  ]);
  else if(r==='books')renderCollectionList('Books of the Bible','Each card contains defining verses from that book only.',[
    {title:'John',copy:'Meet Jesus—His power, identity and supremacy.',icon:'cross',key:'book-john'},
    {title:'Psalms',copy:'Prayer, worship and honest words for every emotion.',icon:'music',key:'book-psalms'},
    {title:'Proverbs',copy:'Wisdom for character, speech, work and relationships.',icon:'lamp',key:'book-proverbs'},
    {title:'Romans',copy:'Grace, justification by faith and new life in Christ.',icon:'scroll',key:'book-romans'},
    {title:'Philippians',copy:'Joy, peace, humility and contentment in Christ.',icon:'joy',key:'book-philippians'},
    {title:'James',copy:'Practical, obedient and enduring faith.',icon:'steps',key:'book-james'}
  ]);
  else if(r==='occasions')renderGeneric('Scripture for Occasions',[
    ['Starting a business','Wisdom, diligence and integrity from Proverbs.','lamp','book-proverbs'],
    ['Wedding','Scripture about patient, faithful love.','heart','love'],
    ['Exams','Wisdom, peace and strength for focused work.','lamp','wisdom'],
    ['Travel','God’s presence and guidance for the journey.','compass','guidance'],
    ['New year','Hope and courage for a fresh beginning.','sun','hope'],
    ['Hospital visit','Comfort, strength and God’s nearness.','shield','difficult-days']
  ]);
  else if(r==='collections')renderCollectionList('Memory Verse Collections','Every collection contains exactly what its title promises.',[
    {title:'Essential Memory Verses',copy:'Foundational verses every believer can keep close.',icon:'star',key:'essential-verses'},
    {title:'Promises for Difficult Days',copy:'God’s presence, strength, help and faithful care.',icon:'shield',key:'difficult-days'},
    {title:'Verses for Children',copy:'Short verses about love, kindness, courage and trust.',icon:'heart',key:'children-verses'},
    {title:'Words of Jesus',copy:'Direct teachings and promises from the Gospels.',icon:'cross',key:'words-of-jesus'},
    {title:'Psalms for Prayer',copy:'Only Psalms—words to borrow when yours are few.',icon:'prayer',key:'psalms-prayer'},
    {title:'Proverbs for Daily Living',copy:'Only Proverbs—wisdom for ordinary decisions.',icon:'lamp',key:'proverbs-daily'}
  ]);
  else renderHome();
  window.scrollTo(0,0);
  app.focus({preventScroll:true});
}

document.addEventListener('click',e=>{const routeBtn=e.target.closest('[data-route]');if(routeBtn){setRoute(routeBtn.dataset.route,routeBtn.dataset.param||'');return}const saveBtn=e.target.closest('[data-save]');if(saveBtn){const id=saveBtn.dataset.save;const data=JSON.parse(localStorage.getItem('vomp-saved-data')||'{}');if(saved.has(id)){saved.delete(id);delete data[id];toast('Removed from saved')}else{saved.add(id);data[id]={ref:saveBtn.dataset.ref,text:saveBtn.dataset.text};toast('Verse saved')}localStorage.setItem('vomp-saved',JSON.stringify([...saved]));localStorage.setItem('vomp-saved-data',JSON.stringify(data));route();return}const copyBtn=e.target.closest('[data-copy]');if(copyBtn){navigator.clipboard?.writeText(copyBtn.dataset.copy);toast('Verse copied')}});
function toast(msg){const t=document.querySelector('#toast');t.textContent=msg;t.classList.add('show');clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>t.classList.remove('show'),1800)}
window.addEventListener('hashchange',route);
if(localStorage.getItem('vomp-theme')==='dark')document.body.classList.add('dark');document.documentElement.style.setProperty('--font-size',(localStorage.getItem('vomp-font')||'17')+'px');
if('serviceWorker'in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('./service-worker.js'));
route();
