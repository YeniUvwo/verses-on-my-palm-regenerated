const verses = {
  peace:[
    ['Philippians 4:6–7','Be careful for nothing; but in every thing by prayer and supplication with thanksgiving let your requests be made known unto God. And the peace of God, which passeth all understanding, shall keep your hearts and minds through Christ Jesus.'],
    ['John 14:27','Peace I leave with you, my peace I give unto you: not as the world giveth, give I unto you. Let not your heart be troubled, neither let it be afraid.'],
    ['Isaiah 26:3','Thou wilt keep him in perfect peace, whose mind is stayed on thee: because he trusteth in thee.']
  ],
  anxiety:[
    ['1 Peter 5:7','Casting all your care upon him; for he careth for you.'],
    ['Matthew 6:34','Take therefore no thought for the morrow: for the morrow shall take thought for the things of itself.'],
    ['Psalm 55:22','Cast thy burden upon the Lord, and he shall sustain thee: he shall never suffer the righteous to be moved.']
  ],
  fear:[
    ['Isaiah 41:10','Fear thou not; for I am with thee: be not dismayed; for I am thy God.'],
    ['Psalm 56:3','What time I am afraid, I will trust in thee.'],
    ['2 Timothy 1:7','For God hath not given us the spirit of fear; but of power, and of love, and of a sound mind.']
  ],
  doubt:[
    ['Mark 9:24','Lord, I believe; help thou mine unbelief.'],
    ['James 1:5','If any of you lack wisdom, let him ask of God, that giveth to all men liberally.'],
    ['Jude 1:22','And of some have compassion, making a difference.'],
    ['John 20:29','Blessed are they that have not seen, and yet have believed.']
  ],
  heard:[
    ['Psalm 34:17','The righteous cry, and the Lord heareth, and delivereth them out of all their troubles.'],
    ['1 John 5:14','If we ask any thing according to his will, he heareth us.'],
    ['Psalm 116:1–2','I love the Lord, because he hath heard my voice and my supplications. Because he hath inclined his ear unto me, therefore will I call upon him as long as I live.'],
    ['Jeremiah 33:3','Call unto me, and I will answer thee, and shew thee great and mighty things, which thou knowest not.']
  ],
  lonely:[
    ['Deuteronomy 31:8','The Lord, he it is that doth go before thee; he will be with thee, he will not fail thee.'],
    ['Psalm 27:10','When my father and my mother forsake me, then the Lord will take me up.'],
    ['Hebrews 13:5','I will never leave thee, nor forsake thee.']
  ],
  grief:[
    ['Psalm 34:18','The Lord is nigh unto them that are of a broken heart.'],
    ['Matthew 5:4','Blessed are they that mourn: for they shall be comforted.'],
    ['Revelation 21:4','And God shall wipe away all tears from their eyes.']
  ],
  tired:[
    ['Matthew 11:28','Come unto me, all ye that labour and are heavy laden, and I will give you rest.'],
    ['Isaiah 40:31','They that wait upon the Lord shall renew their strength.'],
    ['Psalm 23:2–3','He maketh me to lie down in green pastures: he leadeth me beside the still waters. He restoreth my soul.']
  ],
  guidance:[
    ['Proverbs 3:5–6','Trust in the Lord with all thine heart; and lean not unto thine own understanding. In all thy ways acknowledge him, and he shall direct thy paths.'],
    ['Psalm 32:8','I will instruct thee and teach thee in the way which thou shalt go.'],
    ['James 1:5','If any of you lack wisdom, let him ask of God.']
  ],
  forgiveness:[
    ['1 John 1:9','If we confess our sins, he is faithful and just to forgive us our sins.'],
    ['Psalm 103:12','As far as the east is from the west, so far hath he removed our transgressions from us.'],
    ['Romans 8:1','There is therefore now no condemnation to them which are in Christ Jesus.']
  ],
  hope:[
    ['Romans 15:13','Now the God of hope fill you with all joy and peace in believing.'],
    ['Jeremiah 29:11','For I know the thoughts that I think toward you, saith the Lord, thoughts of peace, and not of evil.'],
    ['Lamentations 3:22–23','It is of the Lord’s mercies that we are not consumed. They are new every morning.']
  ],
  strength:[
    ['Philippians 4:13','I can do all things through Christ which strengtheneth me.'],
    ['Psalm 46:1','God is our refuge and strength, a very present help in trouble.'],
    ['Nehemiah 8:10','The joy of the Lord is your strength.']
  ],
  provision:[
    ['Philippians 4:19','My God shall supply all your need according to his riches in glory by Christ Jesus.'],
    ['Matthew 6:31–33','Seek ye first the kingdom of God, and his righteousness; and all these things shall be added unto you.'],
    ['Psalm 23:1','The Lord is my shepherd; I shall not want.']
  ],
  identity:[
    ['2 Corinthians 5:17','If any man be in Christ, he is a new creature.'],
    ['Ephesians 2:10','For we are his workmanship, created in Christ Jesus unto good works.'],
    ['1 Peter 2:9','Ye are a chosen generation, a royal priesthood, an holy nation.']
  ],
  salvation:[
    ['John 3:16','For God so loved the world, that he gave his only begotten Son.'],
    ['Romans 10:9','If thou shalt confess with thy mouth the Lord Jesus, and shalt believe in thine heart that God hath raised him from the dead, thou shalt be saved.'],
    ['Ephesians 2:8–9','For by grace are ye saved through faith; and that not of yourselves: it is the gift of God.']
  ],
  prayer:[
    ['Matthew 6:9–10','Our Father which art in heaven, Hallowed be thy name. Thy kingdom come. Thy will be done.'],
    ['Philippians 4:6','In every thing by prayer and supplication with thanksgiving let your requests be made known unto God.'],
    ['Romans 8:26','The Spirit also helpeth our infirmities: for we know not what we should pray for as we ought.']
  ],
  wisdom:[
    ['Proverbs 4:7','Wisdom is the principal thing; therefore get wisdom.'],
    ['James 1:5','If any of you lack wisdom, let him ask of God.'],
    ['Proverbs 16:3','Commit thy works unto the Lord, and thy thoughts shall be established.']
  ],
  love:[
    ['1 Corinthians 13:4–5','Charity suffereth long, and is kind; charity envieth not; charity vaunteth not itself.'],
    ['1 John 4:19','We love him, because he first loved us.'],
    ['John 13:34','A new commandment I give unto you, That ye love one another.']
  ],
  gratitude:[
    ['1 Thessalonians 5:18','In every thing give thanks: for this is the will of God in Christ Jesus concerning you.'],
    ['Psalm 100:4','Enter into his gates with thanksgiving, and into his courts with praise.'],
    ['Psalm 107:1','O give thanks unto the Lord, for he is good.']
  ]
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

function renderHome(){app.innerHTML=`<section class="hero"><span class="eyebrow">God's Word for where you are</span><h1>What do you need today?</h1><p>You do not need to know where to look. Begin with what is on your heart, and we will gently lead you into Scripture.</p></section><section class="home-grid"><button class="door" data-route="encouragement"><span class="door-arrow">↗</span><span class="door-icon">♡</span><div><h2>I need encouragement</h2><p>Find Scripture for what you are feeling.</p></div></button><button class="door" data-route="pray"><span class="door-arrow">↗</span><span class="door-icon">○</span><div><h2>I want to pray</h2><p>Begin even when you do not know what to say.</p></div></button><button class="door" data-route="browse"><span class="door-arrow">↗</span><span class="door-icon">▤</span><div><h2>Browse Scripture</h2><p>Explore by topic, promise, person and more.</p></div></button><button class="door" data-route="new"><span class="door-arrow">↗</span><span class="door-icon">✦</span><div><h2>I’m new here</h2><p>A simple place to begin with God and the Bible.</p></div></button><button class="door" data-route="search"><span class="door-arrow">↗</span><span class="door-icon">⌕</span><div><h2>Search</h2><p>Use plain words: “I cannot sleep” or “God feels far.”</p></div></button></section><section class="feature-strip"><button class="feature-card" data-route="topic" data-param="doubt"><strong>When you have doubts</strong><span>Your questions are not too much for God.</span></button><button class="feature-card" data-route="topic" data-param="heard"><strong>God hears you</strong><span>You do not need perfect words to be heard.</span></button></section>`}
function renderEncouragement(){app.innerHTML=pageHead('How are you feeling?','Choose the closest word. You do not have to explain everything.','home')+`<div class="choice-grid">${feelings.map(([a,b,c,d])=>choiceCard(a,c,d,'topic',b)).join('')}</div>`}
function renderPray(){app.innerHTML=pageHead('Let’s pray','Prayer can be honest, short and unfinished. God is not waiting for perfect words.','home')+`<div class="choice-grid">${choiceCard("I don’t know what to pray",'Begin with a simple guided prayer.','○','topic','heard')}${choiceCard('Pray about something','Choose what is on your heart.','♡','topics')}${choiceCard('Pray through Scripture','Let a Bible verse shape your words.','▤','topic','prayer')}${choiceCard('When God feels silent','Bring doubt and waiting into the light.','?','topic','doubt')}${choiceCard('The Lord’s Prayer','Learn the pattern Jesus gave.','✦','reading','lords-prayer')}${choiceCard('Learn to pray','A gentle four-part guide.','↗','reading','learn-prayer')}</div>`}
function renderBrowse(){app.innerHTML=pageHead('Browse Scripture','There is more here, but you will only see one clear choice at a time.','home')+`<div class="choice-grid">${browseGroups.map(([a,b,c,d])=>choiceCard(a,c,d,b)).join('')}</div>`}
function renderTopics(){app.innerHTML=pageHead('Browse by topic','Choose one place to begin.','browse')+`<div class="choice-grid">${topics.map(([a,b])=>choiceCard(a,'Verses and a short prayer.','•','topic',b)).join('')}</div>`}
function renderTopic() {
    const key = getParam();

    const title =
        topics.find(item => item[1] === key)?.[0]
        || feelings.find(item => item[1] === key)?.[0]
        || key;

    const intros = {
        doubt:
            'Doubt does not disqualify you from coming to God. Scripture makes room for honest questions and growing faith.',

        heard:
            'God hears the prayer you whisper, the prayer you cannot finish and the ache you do not know how to name.'
    };

    app.innerHTML =
        pageHead(
            title,
            intros[key]
                || 'Read slowly. One verse may be enough for today.',
            previousRoute === 'home'
                ? 'home'
                : 'encouragement'
        )
        + prayerCard(key)
        + `
            <section>
                <div class="section-title-row">
                    <div>
                        <span class="eyebrow">Scripture</span>
                        <h2>Keep these words close</h2>
                    </div>
                </div>

                ${verseCards(verses[key] || verses.hope)}
            </section>

            <section class="section-block">
                <div class="reading-card">
                    <h3>Hold onto this</h3>

                    <p>
                        ${
                            key === 'doubt'
                                ? 'Faith is not pretending you never have questions. It is choosing to bring those questions to God instead of hiding from Him.'
                                : key === 'heard'
                                    ? 'God’s answer may not arrive in the form or timing you expect, but His attention is not absent. You are invited to keep coming.'
                                    : 'You do not have to absorb every verse at once. Choose one, repeat it slowly and carry it into the rest of your day.'
                        }
                    </p>
                </div>
            </section>
        `;
}
function renderNew(){app.innerHTML=pageHead('I’m new here','No pressure. No assumed knowledge. Begin with the question that matters most to you.','home')+`<div class="choice-grid">${newHere.map(([a,b,c])=>choiceCard(a,b,'✦','reading',a)).join('')}</div><section class="section-block"><div class="reading-card"><span class="eyebrow">A simple first step</span><h2>Meet Jesus in the Gospel of John</h2><p>Read one chapter at a time. Before you begin, pray: “God, help me see who Jesus is.” You do not need to understand everything immediately.</p></div></section>`}
function renderReading(){const key=getParam();if(key==='lords-prayer'){app.innerHTML=pageHead('The Lord’s Prayer','A simple pattern Jesus gave His disciples.','pray')+`<div class="reading-card"><h2>Our Father</h2><ol><li><strong>Begin with who God is.</strong> “Our Father which art in heaven, Hallowed be thy name.”</li><li><strong>Welcome His will.</strong> “Thy kingdom come. Thy will be done.”</li><li><strong>Ask for today’s needs.</strong> “Give us this day our daily bread.”</li><li><strong>Receive and give forgiveness.</strong> “Forgive us our debts, as we forgive our debtors.”</li><li><strong>Ask for help against temptation.</strong> “Lead us not into temptation, but deliver us from evil.”</li></ol></div>${prayerCard('prayer')}`;return}if(key==='learn-prayer'){app.innerHTML=pageHead('Learn to pray','Use four simple movements. You can spend one sentence on each.','pray')+`<div class="reading-card"><h2>Adoration. Confession. Thanksgiving. Supplication.</h2><ol><li><strong>Adoration:</strong> Tell God what is true about Him.</li><li><strong>Confession:</strong> Speak honestly about where you have fallen short.</li><li><strong>Thanksgiving:</strong> Name something you are grateful for.</li><li><strong>Supplication:</strong> Ask for what you and others need.</li></ol><p>Prayer does not need to sound impressive. Honesty is a better beginning than eloquence.</p></div>`;return}const item=newHere.find(x=>x[0]===key);app.innerHTML=pageHead(item?.[0]||'Start here',item?.[1]||'Take one gentle step at a time.','new')+`${prayerCard(item?.[2]||'prayer')}${verseCards(verses[item?.[2]||'salvation'])}`}
function renderGeneric(title,items,back='browse'){app.innerHTML=pageHead(title,'A curated starting point—not an overwhelming catalogue.',back)+`<div class="choice-grid">${items.map(([a,b,c='•'])=>choiceCard(a,b,c,'topic',inferKey(a))).join('')}</div>`}
function inferKey(a){const s=a.toLowerCase();const match=topics.find(([t])=>s.includes(t.toLowerCase()));if(match)return match[1];if(s.includes('jesus'))return 'salvation';if(s.includes('prayer'))return 'prayer';if(s.includes('david'))return 'hope';if(s.includes('hospital'))return 'strength';if(s.includes('travel'))return 'guidance';if(s.includes('wedding'))return 'love';if(s.includes('business')||s.includes('exam')||s.includes('proverb'))return 'wisdom';return 'hope'}
function renderSearch(){app.innerHTML=pageHead('Search','Type a feeling, need, Bible topic or a plain-language sentence.','home')+`<div class="search-wrap"><input id="searchInput" class="search-box" type="search" placeholder="Try “I feel afraid” or “Does God hear me?”" autocomplete="off"><p class="search-help">Search works on this device. Nothing you type is sent anywhere.</p><div id="results"></div></div>`;document.querySelector('#searchInput').addEventListener('input',e=>showResults(e.target.value));}
function showResults(q){const box=document.querySelector('#results');q=q.trim().toLowerCase();if(!q){box.innerHTML='';return}const aliases={scared:'fear',afraid:'fear',worried:'anxiety',anxious:'anxiety','cannot sleep':'peace','can\'t sleep':'peace',listen:'heard',hear:'heard',silent:'doubt',question:'doubt',unbelief:'doubt',alone:'lonely',sad:'grief',money:'provision',business:'wisdom',work:'wisdom',lost:'guidance',shame:'forgiveness'};let keys=Object.keys(verses).filter(k=>k.includes(q)||topics.some(([t,key])=>key===k&&t.toLowerCase().includes(q)));Object.entries(aliases).forEach(([term,key])=>{if(q.includes(term)&&!keys.includes(key))keys.push(key)});if(!keys.length){box.innerHTML='<div class="empty-state">No exact match yet. Try a simpler word such as fear, peace, doubt, work, grief or prayer.</div>';return}box.innerHTML=keys.slice(0,6).map(k=>`<section class="result-group"><h3>${esc(topics.find(x=>x[1]===k)?.[0]||k)}</h3>${verseCards(verses[k].slice(0,2))}<button class="small-button" data-route="topic" data-param="${k}">Open full section →</button></section>`).join('');}
function renderSaved(){const stored=JSON.parse(localStorage.getItem('vomp-saved-data')||'{}');const list=Object.entries(stored).map(([,v])=>[v.ref,v.text]);app.innerHTML=pageHead('Saved','Your saved verses remain on this device.','home')+(list.length?verseCards(list):'<div class="empty-state">You have not saved a verse yet. Tap ♡ Save beneath any Scripture to keep it here.</div>')}
function renderSettings(){app.innerHTML=pageHead('Reading settings','Make the experience comfortable for your eyes and attention.','home')+`<div class="settings-list"><div class="setting-row"><div><strong>Appearance</strong><br><small>Light or dark reading mode</small></div><button id="themeToggle">${document.body.classList.contains('dark')?'Use light':'Use dark'}</button></div><div class="setting-row"><div><strong>Text size</strong><br><small>Adjust Scripture and body text</small></div><select id="fontSize"><option value="16">Smaller</option><option value="17">Default</option><option value="19">Larger</option><option value="21">Largest</option></select></div><div class="setting-row"><div><strong>Saved content</strong><br><small>Stored only in this browser</small></div><button id="clearSaved">Clear saved</button></div></div>`;document.querySelector('#fontSize').value=localStorage.getItem('vomp-font')||'17';document.querySelector('#themeToggle').onclick=()=>{document.body.classList.toggle('dark');localStorage.setItem('vomp-theme',document.body.classList.contains('dark')?'dark':'light');renderSettings()};document.querySelector('#fontSize').onchange=e=>{document.documentElement.style.setProperty('--font-size',e.target.value+'px');localStorage.setItem('vomp-font',e.target.value)};document.querySelector('#clearSaved').onclick=()=>{saved.clear();localStorage.removeItem('vomp-saved');localStorage.removeItem('vomp-saved-data');toast('Saved verses cleared')};}

function route(){const r=currentRoute();document.querySelectorAll('.mobile-nav button').forEach(b=>b.classList.toggle('active',b.dataset.route===r));if(routes[r])routes[r]();else if(r==='topic')renderTopic();else if(r==='topics')renderTopics();else if(r==='reading')renderReading();else if(r==='feelings')renderEncouragement();else if(r==='promises')renderGeneric('Promises of God',[['God’s presence','He will not leave you.'],['Peace','Peace beyond circumstances.'],['Provision','Trust God with your needs.'],['Guidance','Wisdom for the next step.'],['Forgiveness','Grace after failure.'],['Hope','A future held by God.']]);else if(r==='prayers')renderGeneric('Prayers in Scripture',[['The Lord’s Prayer','A pattern from Jesus.'],['David’s prayers','Honest words from the Psalms.'],['Hannah’s prayer','Trust through longing.'],['Paul’s prayers','Prayers for spiritual growth.']]);else if(r==='people')renderGeneric('People in the Bible',[['Jesus','Saviour, teacher and Son of God.'],['David','Worship, courage and repentance.'],['Esther','Courage for a defining moment.'],['Paul','Grace, mission and endurance.'],['Ruth','Loyalty, loss and restoration.'],['Moses','Calling, leadership and trust.']]);else if(r==='books')renderGeneric('Books of the Bible',[['John','Meet Jesus.'],['Psalms','Prayers for every emotion.'],['Proverbs','Wisdom for daily life.'],['Romans','Grace, faith and new life.'],['Philippians','Joy and peace in Christ.'],['James','Practical, living faith.']]);else if(r==='occasions')renderGeneric('Scripture for occasions',[['Starting a business','Wisdom, diligence and integrity.'],['Wedding','Love, covenant and faithfulness.'],['Exams','Peace, wisdom and discipline.'],['Travel','Protection and guidance.'],['New year','Hope and fresh beginnings.'],['Hospital visit','Healing, comfort and presence.']]);else if(r==='collections')renderGeneric('Memory verse collections',[['10 verses every Christian should know','A simple essential collection.'],['Promises for difficult days','Words to carry through hardship.'],['Verses for children','Short, clear and memorable.'],['Words of Jesus','Keep Christ’s teaching close.'],['Psalms for prayer','Borrow words when yours are few.'],['Proverbs for daily living','Wisdom for ordinary decisions.']]);else renderHome();window.scrollTo(0,0);app.focus({preventScroll:true})}

document.addEventListener('click',e=>{const routeBtn=e.target.closest('[data-route]');if(routeBtn){setRoute(routeBtn.dataset.route,routeBtn.dataset.param||'');return}const saveBtn=e.target.closest('[data-save]');if(saveBtn){const id=saveBtn.dataset.save;const data=JSON.parse(localStorage.getItem('vomp-saved-data')||'{}');if(saved.has(id)){saved.delete(id);delete data[id];toast('Removed from saved')}else{saved.add(id);data[id]={ref:saveBtn.dataset.ref,text:saveBtn.dataset.text};toast('Verse saved')}localStorage.setItem('vomp-saved',JSON.stringify([...saved]));localStorage.setItem('vomp-saved-data',JSON.stringify(data));route();return}const copyBtn=e.target.closest('[data-copy]');if(copyBtn){navigator.clipboard?.writeText(copyBtn.dataset.copy);toast('Verse copied')}});
function toast(msg){const t=document.querySelector('#toast');t.textContent=msg;t.classList.add('show');clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>t.classList.remove('show'),1800)}
window.addEventListener('hashchange',route);
if(localStorage.getItem('vomp-theme')==='dark')document.body.classList.add('dark');document.documentElement.style.setProperty('--font-size',(localStorage.getItem('vomp-font')||'17')+'px');
if('serviceWorker'in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('./service-worker.js'));
route();
