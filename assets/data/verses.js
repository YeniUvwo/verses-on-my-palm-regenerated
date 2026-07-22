const verses = {
  "peace": [
    ["Philippians 4:6–7", "Be careful for nothing; but in every thing by prayer and supplication with thanksgiving let your requests be made known unto God. And the peace of God, which passeth all understanding, shall keep your hearts and minds through Christ Jesus."],
    ["John 14:27", "Peace I leave with you, my peace I give unto you: not as the world giveth, give I unto you. Let not your heart be troubled, neither let it be afraid."],
    ["Isaiah 26:3", "Thou wilt keep him in perfect peace, whose mind is stayed on thee: because he trusteth in thee."],
    ["Colossians 3:15", "And let the peace of God rule in your hearts, to the which also ye are called in one body; and be ye thankful."],
    ["Psalm 4:8", "I will both lay me down in peace, and sleep: for thou, Lord, only makest me dwell in safety."],
    ["Romans 5:1", "Therefore being justified by faith, we have peace with God through our Lord Jesus Christ."],
    ["Psalm 29:11", "The Lord will give strength unto his people; the Lord will bless his people with peace."],
    ["John 16:33", "These things I have spoken unto you, that in me ye might have peace."]
  ],
  "anxiety": [
    ["1 Peter 5:7", "Casting all your care upon him; for he careth for you."],
    ["Matthew 6:34", "Take therefore no thought for the morrow: for the morrow shall take thought for the things of itself."],
    ["Psalm 55:22", "Cast thy burden upon the Lord, and he shall sustain thee: he shall never suffer the righteous to be moved."],
    ["Psalm 94:19", "In the multitude of my thoughts within me thy comforts delight my soul."],
    ["Matthew 6:27", "Which of you by taking thought can add one cubit unto his stature?"],
    ["Luke 12:25–26", "And which of you with taking thought can add to his stature one cubit? If ye then be not able to do that thing which is least, why take ye thought for the rest?"],
    ["Proverbs 12:25", "Heaviness in the heart of man maketh it stoop: but a good word maketh it glad."]
  ],
  "fear": [
    ["Isaiah 41:10", "Fear thou not; for I am with thee: be not dismayed; for I am thy God."],
    ["Psalm 56:3", "What time I am afraid, I will trust in thee."],
    ["2 Timothy 1:7", "For God hath not given us the spirit of fear; but of power, and of love, and of a sound mind."],
    ["Joshua 1:9", "Be strong and of a good courage; be not afraid, neither be thou dismayed: for the Lord thy God is with thee whithersoever thou goest."],
    ["Psalm 23:4", "Yea, though I walk through the valley of the shadow of death, I will fear no evil: for thou art with me."],
    ["Psalm 27:1", "The Lord is my light and my salvation; whom shall I fear?"],
    ["Deuteronomy 31:6", "Be strong and of a good courage, fear not, nor be afraid of them: for the Lord thy God, he it is that doth go with thee."],
    ["Psalm 34:4", "I sought the Lord, and he heard me, and delivered me from all my fears."],
    ["Isaiah 43:1", "Fear not: for I have redeemed thee, I have called thee by thy name; thou art mine."],
    ["Psalm 118:6", "The Lord is on my side; I will not fear: what can man do unto me?"]
  ],
  "doubt": [
    ["Mark 9:24", "Lord, I believe; help thou mine unbelief."],
    ["James 1:5", "If any of you lack wisdom, let him ask of God, that giveth to all men liberally."],
    ["Jude 1:22", "And of some have compassion, making a difference."],
    ["John 20:29", "Blessed are they that have not seen, and yet have believed."],
    ["Proverbs 3:5", "Trust in the Lord with all thine heart; and lean not unto thine own understanding."],
    ["Hebrews 11:1", "Now faith is the substance of things hoped for, the evidence of things not seen."],
    ["Romans 10:17", "So then faith cometh by hearing, and hearing by the word of God."],
    ["Psalm 73:26", "My flesh and my heart faileth: but God is the strength of my heart, and my portion for ever."]
  ],
  "heard": [
    ["Psalm 34:17", "The righteous cry, and the Lord heareth, and delivereth them out of all their troubles."],
    ["1 John 5:14", "If we ask any thing according to his will, he heareth us."],
    ["Psalm 116:1–2", "I love the Lord, because he hath heard my voice and my supplications. Because he hath inclined his ear unto me, therefore will I call upon him as long as I live."],
    ["Jeremiah 33:3", "Call unto me, and I will answer thee, and shew thee great and mighty things, which thou knowest not."],
    ["Psalm 18:6", "In my distress I called upon the Lord, and cried unto my God: he heard my voice out of his temple."],
    ["Psalm 66:19", "But verily God hath heard me; he hath attended to the voice of my prayer."],
    ["Isaiah 65:24", "And it shall come to pass, that before they call, I will answer; and while they are yet speaking, I will hear."],
    ["Micah 7:7", "Therefore I will look unto the Lord; I will wait for the God of my salvation: my God will hear me."]
  ],
  "lonely": [
    ["Deuteronomy 31:8", "The Lord, he it is that doth go before thee; he will be with thee, he will not fail thee."],
    ["Psalm 27:10", "When my father and my mother forsake me, then the Lord will take me up."],
    ["Hebrews 13:5", "I will never leave thee, nor forsake thee."],
    ["Psalm 68:6", "God setteth the solitary in families."],
    ["Matthew 28:20", "Lo, I am with you alway, even unto the end of the world."],
    ["Isaiah 49:15–16", "Yea, they may forget, yet will I not forget thee. Behold, I have graven thee upon the palms of my hands."],
    ["Psalm 25:16", "Turn thee unto me, and have mercy upon me; for I am desolate and afflicted."]
  ],
  "grief": [
    ["Psalm 34:18", "The Lord is nigh unto them that are of a broken heart."],
    ["Matthew 5:4", "Blessed are they that mourn: for they shall be comforted."],
    ["Revelation 21:4", "And God shall wipe away all tears from their eyes."],
    ["Psalm 147:3", "He healeth the broken in heart, and bindeth up their wounds."],
    ["2 Corinthians 1:3–4", "The Father of mercies, and the God of all comfort; Who comforteth us in all our tribulation."],
    ["John 11:35", "Jesus wept."],
    ["Psalm 30:5", "Weeping may endure for a night, but joy cometh in the morning."],
    ["Isaiah 61:3", "To give unto them beauty for ashes, the oil of joy for mourning."]
  ],
  "tired": [
    ["Matthew 11:28", "Come unto me, all ye that labour and are heavy laden, and I will give you rest."],
    ["Isaiah 40:31", "They that wait upon the Lord shall renew their strength."],
    ["Psalm 23:2–3", "He maketh me to lie down in green pastures: he leadeth me beside the still waters. He restoreth my soul."],
    ["Exodus 33:14", "My presence shall go with thee, and I will give thee rest."],
    ["Psalm 62:1", "Truly my soul waiteth upon God: from him cometh my salvation."],
    ["Galatians 6:9", "And let us not be weary in well doing: for in due season we shall reap, if we faint not."],
    ["Psalm 127:2", "For so he giveth his beloved sleep."]
  ],
  "guidance": [
    ["Proverbs 3:5–6", "Trust in the Lord with all thine heart; and lean not unto thine own understanding. In all thy ways acknowledge him, and he shall direct thy paths."],
    ["Psalm 32:8", "I will instruct thee and teach thee in the way which thou shalt go."],
    ["James 1:5", "If any of you lack wisdom, let him ask of God."],
    ["Psalm 119:105", "Thy word is a lamp unto my feet, and a light unto my path."],
    ["Isaiah 30:21", "This is the way, walk ye in it."],
    ["Proverbs 16:9", "A man’s heart deviseth his way: but the Lord directeth his steps."],
    ["Psalm 25:4–5", "Shew me thy ways, O Lord; teach me thy paths. Lead me in thy truth, and teach me."],
    ["John 16:13", "When he, the Spirit of truth, is come, he will guide you into all truth."]
  ],
  "forgiveness": [
    ["1 John 1:9", "If we confess our sins, he is faithful and just to forgive us our sins."],
    ["Psalm 103:12", "As far as the east is from the west, so far hath he removed our transgressions from us."],
    ["Romans 8:1", "There is therefore now no condemnation to them which are in Christ Jesus."],
    ["Isaiah 1:18", "Though your sins be as scarlet, they shall be as white as snow."],
    ["Micah 7:18–19", "He delighteth in mercy. He will turn again, he will have compassion upon us."],
    ["Ephesians 1:7", "In whom we have redemption through his blood, the forgiveness of sins."],
    ["Colossians 3:13", "Forgiving one another, if any man have a quarrel against any: even as Christ forgave you."],
    ["Hebrews 8:12", "For I will be merciful to their unrighteousness, and their sins and their iniquities will I remember no more."]
  ],
  "hope": [
    ["Romans 15:13", "Now the God of hope fill you with all joy and peace in believing."],
    ["Jeremiah 29:11", "For I know the thoughts that I think toward you, saith the Lord, thoughts of peace, and not of evil."],
    ["Lamentations 3:22–23", "It is of the Lord’s mercies that we are not consumed. They are new every morning."],
    ["Psalm 42:11", "Hope thou in God: for I shall yet praise him."],
    ["Romans 8:28", "And we know that all things work together for good to them that love God."],
    ["Hebrews 6:19", "Which hope we have as an anchor of the soul, both sure and stedfast."],
    ["Psalm 130:5", "I wait for the Lord, my soul doth wait, and in his word do I hope."],
    ["Romans 5:3–5", "Tribulation worketh patience; And patience, experience; and experience, hope."]
  ],
  "strength": [
    ["Philippians 4:13", "I can do all things through Christ which strengtheneth me."],
    ["Psalm 46:1", "God is our refuge and strength, a very present help in trouble."],
    ["Nehemiah 8:10", "The joy of the Lord is your strength."],
    ["Isaiah 40:29", "He giveth power to the faint; and to them that have no might he increaseth strength."],
    ["2 Corinthians 12:9", "My grace is sufficient for thee: for my strength is made perfect in weakness."],
    ["Psalm 18:2", "The Lord is my rock, and my fortress, and my deliverer."],
    ["Ephesians 6:10", "Finally, my brethren, be strong in the Lord, and in the power of his might."],
    ["Psalm 28:7", "The Lord is my strength and my shield; my heart trusted in him, and I am helped."]
  ],
  "provision": [
    ["Philippians 4:19", "My God shall supply all your need according to his riches in glory by Christ Jesus."],
    ["Matthew 6:31–33", "Seek ye first the kingdom of God, and his righteousness; and all these things shall be added unto you."],
    ["Psalm 23:1", "The Lord is my shepherd; I shall not want."],
    ["Psalm 37:25", "Yet have I not seen the righteous forsaken, nor his seed begging bread."],
    ["Matthew 7:11", "How much more shall your Father which is in heaven give good things to them that ask him?"],
    ["2 Corinthians 9:8", "And God is able to make all grace abound toward you."],
    ["Psalm 34:10", "They that seek the Lord shall not want any good thing."],
    ["Deuteronomy 8:18", "But thou shalt remember the Lord thy God: for it is he that giveth thee power to get wealth."]
  ],
  "identity": [
    ["2 Corinthians 5:17", "If any man be in Christ, he is a new creature."],
    ["Ephesians 2:10", "For we are his workmanship, created in Christ Jesus unto good works."],
    ["1 Peter 2:9", "Ye are a chosen generation, a royal priesthood, an holy nation."],
    ["Romans 8:37", "Nay, in all these things we are more than conquerors through him that loved us."],
    ["Galatians 2:20", "I am crucified with Christ: nevertheless I live; yet not I, but Christ liveth in me."],
    ["Colossians 3:3", "For ye are dead, and your life is hid with Christ in God."],
    ["Ephesians 1:3", "Who hath blessed us with all spiritual blessings in heavenly places in Christ."],
    ["John 1:12", "But as many as received him, to them gave he power to become the sons of God."]
  ],
  "healing": [
    ["Psalm 103:2–3", "Bless the Lord, O my soul, and forget not all his benefits: Who forgiveth all thine iniquities; who healeth all thy diseases."],
    ["Psalm 147:3", "He healeth the broken in heart, and bindeth up their wounds."],
    ["Jeremiah 17:14", "Heal me, O Lord, and I shall be healed; save me, and I shall be saved: for thou art my praise."],
    ["Jeremiah 30:17", "For I will restore health unto thee, and I will heal thee of thy wounds, saith the Lord."],
    ["Isaiah 53:5", "But he was wounded for our transgressions, he was bruised for our iniquities: the chastisement of our peace was upon him; and with his stripes we are healed."],
    ["Exodus 15:26", "For I am the Lord that healeth thee."],
    ["Mark 5:34", "Daughter, thy faith hath made thee whole; go in peace, and be whole of thy plague."],
    ["James 5:15", "And the prayer of faith shall save the sick, and the Lord shall raise him up."],
    ["3 John 1:2", "Beloved, I wish above all things that thou mayest prosper and be in health, even as thy soul prospereth."],
    ["Revelation 21:4", "And God shall wipe away all tears from their eyes; and there shall be no more death, neither sorrow, nor crying, neither shall there be any more pain."]
  ],
  "grace": [
    ["2 Corinthians 12:9", "My grace is sufficient for thee: for my strength is made perfect in weakness."],
    ["Ephesians 2:8–9", "For by grace are ye saved through faith; and that not of yourselves: it is the gift of God."],
    ["Hebrews 4:16", "Let us therefore come boldly unto the throne of grace, that we may obtain mercy, and find grace to help in time of need."],
    ["John 1:16", "And of his fulness have all we received, and grace for grace."],
    ["Romans 3:24", "Being justified freely by his grace through the redemption that is in Christ Jesus."],
    ["Titus 2:11", "For the grace of God that bringeth salvation hath appeared to all men."],
    ["1 Peter 5:10", "But the God of all grace, who hath called us unto his eternal glory by Christ Jesus... make you perfect, stablish, strengthen, settle you."],
    ["2 Timothy 2:1", "Thou therefore, my son, be strong in the grace that is in Christ Jesus."],
    ["James 4:6", "But he giveth more grace."],
    ["Romans 5:20", "But where sin abounded, grace did much more abound."]
  ],
  "mercy": [
    ["Lamentations 3:22–23", "It is of the Lord’s mercies that we are not consumed, because his compassions fail not. They are new every morning."],
    ["Psalm 103:8", "The Lord is merciful and gracious, slow to anger, and plenteous in mercy."],
    ["Micah 7:18", "Who is a God like unto thee, that pardoneth iniquity... because he delighteth in mercy?"],
    ["Hebrews 4:16", "Let us therefore come boldly unto the throne of grace, that we may obtain mercy, and find grace to help in time of need."],
    ["Ephesians 2:4–5", "But God, who is rich in mercy, for his great love wherewith he loved us... hath quickened us together with Christ."],
    ["Titus 3:5", "Not by works of righteousness which we have done, but according to his mercy he saved us."],
    ["Psalm 86:5", "For thou, Lord, art good, and ready to forgive; and plenteous in mercy unto all them that call upon thee."],
    ["Luke 6:36", "Be ye therefore merciful, as your Father also is merciful."],
    ["Psalm 51:1", "Have mercy upon me, O God, according to thy lovingkindness."],
    ["Jude 1:21", "Keep yourselves in the love of God, looking for the mercy of our Lord Jesus Christ unto eternal life."]
  ],
  "salvation": [
    ["John 3:16", "For God so loved the world, that he gave his only begotten Son."],
    ["Romans 10:9", "If thou shalt confess with thy mouth the Lord Jesus, and shalt believe in thine heart that God hath raised him from the dead, thou shalt be saved."],
    ["Ephesians 2:8–9", "For by grace are ye saved through faith; and that not of yourselves: it is the gift of God."],
    ["Romans 3:23", "For all have sinned, and come short of the glory of God."],
    ["Romans 6:23", "For the wages of sin is death; but the gift of God is eternal life through Jesus Christ our Lord."],
    ["Acts 4:12", "Neither is there salvation in any other."],
    ["John 14:6", "I am the way, the truth, and the life: no man cometh unto the Father, but by me."],
    ["2 Corinthians 5:21", "For he hath made him to be sin for us, who knew no sin; that we might be made the righteousness of God in him."],
    ["Acts 16:31", "Believe on the Lord Jesus Christ, and thou shalt be saved."],
    ["Titus 3:5", "Not by works of righteousness which we have done, but according to his mercy he saved us."]
  ],
  "prayer": [
    ["Matthew 6:9–10", "Our Father which art in heaven, Hallowed be thy name. Thy kingdom come. Thy will be done."],
    ["Philippians 4:6", "In every thing by prayer and supplication with thanksgiving let your requests be made known unto God."],
    ["Romans 8:26", "The Spirit also helpeth our infirmities: for we know not what we should pray for as we ought."],
    ["1 Thessalonians 5:17", "Pray without ceasing."],
    ["Jeremiah 29:12", "Then shall ye call upon me, and ye shall go and pray unto me, and I will hearken unto you."],
    ["Mark 11:24", "What things soever ye desire, when ye pray, believe that ye receive them."],
    ["Colossians 4:2", "Continue in prayer, and watch in the same with thanksgiving."],
    ["James 5:16", "The effectual fervent prayer of a righteous man availeth much."]
  ],
  "wisdom": [
    ["Proverbs 4:7", "Wisdom is the principal thing; therefore get wisdom."],
    ["James 1:5", "If any of you lack wisdom, let him ask of God."],
    ["Proverbs 16:3", "Commit thy works unto the Lord, and thy thoughts shall be established."],
    ["Proverbs 9:10", "The fear of the Lord is the beginning of wisdom."],
    ["Proverbs 13:20", "He that walketh with wise men shall be wise."],
    ["James 3:17", "But the wisdom that is from above is first pure, then peaceable, gentle, and easy to be intreated."],
    ["Proverbs 15:22", "Without counsel purposes are disappointed: but in the multitude of counsellors they are established."],
    ["Ecclesiastes 7:12", "Wisdom is a defence, and money is a defence: but the excellency of knowledge is, that wisdom giveth life."]
  ],
  "love": [
    ["1 Corinthians 13:4–5", "Charity suffereth long, and is kind; charity envieth not; charity vaunteth not itself."],
    ["1 John 4:19", "We love him, because he first loved us."],
    ["John 13:34", "A new commandment I give unto you, That ye love one another."],
    ["1 John 4:8", "He that loveth not knoweth not God; for God is love."],
    ["Romans 5:8", "But God commendeth his love toward us, in that, while we were yet sinners, Christ died for us."],
    ["Colossians 3:14", "And above all these things put on charity, which is the bond of perfectness."],
    ["Proverbs 10:12", "Hatred stirreth up strifes: but love covereth all sins."],
    ["1 Peter 4:8", "And above all things have fervent charity among yourselves."]
  ],
  "gratitude": [
    ["1 Thessalonians 5:18", "In every thing give thanks: for this is the will of God in Christ Jesus concerning you."],
    ["Psalm 100:4", "Enter into his gates with thanksgiving, and into his courts with praise."],
    ["Psalm 107:1", "O give thanks unto the Lord, for he is good."],
    ["Colossians 3:17", "And whatsoever ye do in word or deed, do all in the name of the Lord Jesus, giving thanks to God."],
    ["Psalm 95:2", "Let us come before his presence with thanksgiving, and make a joyful noise unto him with psalms."],
    ["Ephesians 5:20", "Giving thanks always for all things unto God and the Father in the name of our Lord Jesus Christ."],
    ["Psalm 136:1", "O give thanks unto the Lord; for he is good: for his mercy endureth for ever."]
  ]
};

const scriptureCollections = {
  "book-john": {
    title: "John",
    copy: "Meet Jesus through the signs, words and claims that reveal His power and supremacy.",
    icon: "cross",
    verses: [
      ["John 1:1–3", "In the beginning was the Word, and the Word was with God, and the Word was God. All things were made by him; and without him was not any thing made that was made."],
      ["John 1:14", "And the Word was made flesh, and dwelt among us, and we beheld his glory."],
      ["John 3:16", "For God so loved the world, that he gave his only begotten Son."],
      ["John 5:21", "For as the Father raiseth up the dead, and quickeneth them; even so the Son quickeneth whom he will."],
      ["John 6:35", "And Jesus said unto them, I am the bread of life: he that cometh to me shall never hunger."],
      ["John 8:12", "I am the light of the world: he that followeth me shall not walk in darkness, but shall have the light of life."],
      ["John 10:11", "I am the good shepherd: the good shepherd giveth his life for the sheep."],
      ["John 10:30", "I and my Father are one."],
      ["John 11:25", "I am the resurrection, and the life: he that believeth in me, though he were dead, yet shall he live."],
      ["John 14:6", "I am the way, the truth, and the life: no man cometh unto the Father, but by me."],
      ["John 14:9", "He that hath seen me hath seen the Father."],
      ["John 17:5", "And now, O Father, glorify thou me with thine own self with the glory which I had with thee before the world was."],
      ["John 20:28", "And Thomas answered and said unto him, My Lord and my God."],
      ["John 20:31", "These are written, that ye might believe that Jesus is the Christ, the Son of God; and that believing ye might have life through his name."]
    ]
  },
  "book-psalms": {
    title: "Psalms",
    copy: "Prayers and songs for worship, sorrow, trust, repentance and praise.",
    icon: "music",
    verses: [
      ["Psalm 3:3", "But thou, O Lord, art a shield for me; my glory, and the lifter up of mine head."],
      ["Psalm 16:11", "Thou wilt shew me the path of life: in thy presence is fulness of joy."],
      ["Psalm 23:1", "The Lord is my shepherd; I shall not want."],
      ["Psalm 27:1", "The Lord is my light and my salvation; whom shall I fear?"],
      ["Psalm 34:18", "The Lord is nigh unto them that are of a broken heart."],
      ["Psalm 46:1", "God is our refuge and strength, a very present help in trouble."],
      ["Psalm 51:10", "Create in me a clean heart, O God; and renew a right spirit within me."],
      ["Psalm 63:1", "O God, thou art my God; early will I seek thee: my soul thirsteth for thee."],
      ["Psalm 91:1–2", "He that dwelleth in the secret place of the most High shall abide under the shadow of the Almighty."],
      ["Psalm 103:1", "Bless the Lord, O my soul: and all that is within me, bless his holy name."],
      ["Psalm 119:105", "Thy word is a lamp unto my feet, and a light unto my path."],
      ["Psalm 121:1–2", "I will lift up mine eyes unto the hills, from whence cometh my help. My help cometh from the Lord."],
      ["Psalm 139:23–24", "Search me, O God, and know my heart: try me, and know my thoughts."],
      ["Psalm 150:6", "Let every thing that hath breath praise the Lord. Praise ye the Lord."]
    ]
  },
  "book-proverbs": {
    title: "Proverbs",
    copy: "Wisdom from Proverbs for character, speech, work, relationships and daily decisions.",
    icon: "lamp",
    verses: [
      ["Proverbs 1:7", "The fear of the Lord is the beginning of knowledge."],
      ["Proverbs 3:5–6", "Trust in the Lord with all thine heart; and lean not unto thine own understanding."],
      ["Proverbs 4:23", "Keep thy heart with all diligence; for out of it are the issues of life."],
      ["Proverbs 9:10", "The fear of the Lord is the beginning of wisdom."],
      ["Proverbs 10:12", "Hatred stirreth up strifes: but love covereth all sins."],
      ["Proverbs 12:18", "The tongue of the wise is health."],
      ["Proverbs 13:20", "He that walketh with wise men shall be wise."],
      ["Proverbs 15:1", "A soft answer turneth away wrath."],
      ["Proverbs 16:3", "Commit thy works unto the Lord, and thy thoughts shall be established."],
      ["Proverbs 16:9", "A man's heart deviseth his way: but the Lord directeth his steps."],
      ["Proverbs 18:10", "The name of the Lord is a strong tower: the righteous runneth into it, and is safe."],
      ["Proverbs 22:6", "Train up a child in the way he should go."],
      ["Proverbs 27:17", "Iron sharpeneth iron; so a man sharpeneth the countenance of his friend."],
      ["Proverbs 31:30", "Favour is deceitful, and beauty is vain: but a woman that feareth the Lord, she shall be praised."]
    ]
  },
  "book-romans": {
    title: "Romans",
    copy: "The gospel of grace, justification by faith and new life in Christ—entirely from Romans.",
    icon: "scroll",
    verses: [
      ["Romans 1:16", "For I am not ashamed of the gospel of Christ: for it is the power of God unto salvation."],
      ["Romans 3:23–24", "For all have sinned, and come short of the glory of God; Being justified freely by his grace."],
      ["Romans 5:1", "Therefore being justified by faith, we have peace with God through our Lord Jesus Christ."],
      ["Romans 5:8", "But God commendeth his love toward us, in that, while we were yet sinners, Christ died for us."],
      ["Romans 6:23", "For the wages of sin is death; but the gift of God is eternal life through Jesus Christ our Lord."],
      ["Romans 8:1", "There is therefore now no condemnation to them which are in Christ Jesus."],
      ["Romans 8:18", "The sufferings of this present time are not worthy to be compared with the glory which shall be revealed in us."],
      ["Romans 8:28", "And we know that all things work together for good to them that love God."],
      ["Romans 8:37", "In all these things we are more than conquerors through him that loved us."],
      ["Romans 10:9", "If thou shalt confess with thy mouth the Lord Jesus, and shalt believe in thine heart, thou shalt be saved."],
      ["Romans 12:1–2", "Present your bodies a living sacrifice, holy, acceptable unto God... be ye transformed by the renewing of your mind."],
      ["Romans 12:21", "Be not overcome of evil, but overcome evil with good."],
      ["Romans 15:13", "Now the God of hope fill you with all joy and peace in believing."]
    ]
  },
  "book-philippians": {
    title: "Philippians",
    copy: "Joy, humility, contentment and peace in Christ—entirely from Philippians.",
    icon: "joy",
    verses: [
      ["Philippians 1:6", "He which hath begun a good work in you will perform it until the day of Jesus Christ."],
      ["Philippians 1:21", "For to me to live is Christ, and to die is gain."],
      ["Philippians 2:3", "In lowliness of mind let each esteem other better than themselves."],
      ["Philippians 2:5", "Let this mind be in you, which was also in Christ Jesus."],
      ["Philippians 2:9–11", "God also hath highly exalted him, and given him a name which is above every name."],
      ["Philippians 3:10", "That I may know him, and the power of his resurrection."],
      ["Philippians 3:13–14", "Forgetting those things which are behind... I press toward the mark."],
      ["Philippians 4:4", "Rejoice in the Lord alway: and again I say, Rejoice."],
      ["Philippians 4:6–7", "Be careful for nothing... and the peace of God, which passeth all understanding, shall keep your hearts and minds."],
      ["Philippians 4:8", "Whatsoever things are true... honest... just... pure... lovely... think on these things."],
      ["Philippians 4:11", "I have learned, in whatsoever state I am, therewith to be content."],
      ["Philippians 4:13", "I can do all things through Christ which strengtheneth me."],
      ["Philippians 4:19", "But my God shall supply all your need according to his riches in glory by Christ Jesus."]
    ]
  },
  "book-james": {
    title: "James",
    copy: "Practical faith, endurance, wisdom, speech and obedient living—entirely from James.",
    icon: "steps",
    verses: [
      ["James 1:2–3", "Count it all joy when ye fall into divers temptations; Knowing this, that the trying of your faith worketh patience."],
      ["James 1:5", "If any of you lack wisdom, let him ask of God."],
      ["James 1:12", "Blessed is the man that endureth temptation."],
      ["James 1:19", "Let every man be swift to hear, slow to speak, slow to wrath."],
      ["James 1:22", "But be ye doers of the word, and not hearers only."],
      ["James 1:27", "Pure religion and undefiled before God... is this, To visit the fatherless and widows in their affliction."],
      ["James 2:17", "Faith, if it hath not works, is dead, being alone."],
      ["James 3:5", "The tongue is a little member, and boasteth great things."],
      ["James 3:17", "The wisdom that is from above is first pure, then peaceable, gentle, and easy to be intreated."],
      ["James 4:7", "Submit yourselves therefore to God. Resist the devil, and he will flee from you."],
      ["James 4:8", "Draw nigh to God, and he will draw nigh to you."],
      ["James 4:10", "Humble yourselves in the sight of the Lord, and he shall lift you up."],
      ["James 5:16", "The effectual fervent prayer of a righteous man availeth much."]
    ]
  },

  "book-genesis": {
    title: "Genesis",
    copy: "Creation, covenant, faith and God’s faithfulness—entirely from Genesis.",
    icon: "globe",
    verses: [
      ["Genesis 1:1", "In the beginning God created the heaven and the earth."],
      ["Genesis 1:27", "So God created man in his own image."],
      ["Genesis 12:2", "I will make of thee a great nation, and I will bless thee."],
      ["Genesis 15:6", "And he believed in the Lord; and he counted it to him for righteousness."],
      ["Genesis 22:14", "And Abraham called the name of that place Jehovahjireh."],
      ["Genesis 28:15", "Behold, I am with thee, and will keep thee in all places whither thou goest."],
      ["Genesis 50:20", "Ye thought evil against me; but God meant it unto good."]
    ]
  },
  "book-isaiah": {
    title: "Isaiah",
    copy: "God’s holiness, comfort, salvation and the promised Messiah—entirely from Isaiah.",
    icon: "sun",
    verses: [
      ["Isaiah 6:3", "Holy, holy, holy, is the Lord of hosts: the whole earth is full of his glory."],
      ["Isaiah 7:14", "Behold, a virgin shall conceive, and bear a son, and shall call his name Immanuel."],
      ["Isaiah 9:6", "For unto us a child is born, unto us a son is given."],
      ["Isaiah 40:31", "They that wait upon the Lord shall renew their strength."],
      ["Isaiah 41:10", "Fear thou not; for I am with thee: be not dismayed; for I am thy God."],
      ["Isaiah 43:2", "When thou passest through the waters, I will be with thee."],
      ["Isaiah 53:5", "He was wounded for our transgressions, he was bruised for our iniquities."],
      ["Isaiah 55:8–9", "My thoughts are not your thoughts, neither are your ways my ways, saith the Lord."]
    ]
  },
  "book-matthew": {
    title: "Matthew",
    copy: "The King, His kingdom and His teaching—entirely from Matthew.",
    icon: "cross",
    verses: [
      ["Matthew 1:21", "Thou shalt call his name JESUS: for he shall save his people from their sins."],
      ["Matthew 5:14", "Ye are the light of the world."],
      ["Matthew 6:33", "Seek ye first the kingdom of God, and his righteousness."],
      ["Matthew 7:7", "Ask, and it shall be given you; seek, and ye shall find."],
      ["Matthew 11:28", "Come unto me, all ye that labour and are heavy laden, and I will give you rest."],
      ["Matthew 16:16", "Thou art the Christ, the Son of the living God."],
      ["Matthew 28:18", "All power is given unto me in heaven and in earth."],
      ["Matthew 28:20", "Lo, I am with you alway, even unto the end of the world."]
    ]
  },
  "book-luke": {
    title: "Luke",
    copy: "The compassion, salvation and humanity of Jesus—entirely from Luke.",
    icon: "heart",
    verses: [
      ["Luke 1:37", "For with God nothing shall be impossible."],
      ["Luke 2:11", "Unto you is born this day in the city of David a Saviour, which is Christ the Lord."],
      ["Luke 4:18", "The Spirit of the Lord is upon me, because he hath anointed me to preach the gospel to the poor."],
      ["Luke 6:31", "As ye would that men should do to you, do ye also to them likewise."],
      ["Luke 9:23", "If any man will come after me, let him deny himself, and take up his cross daily, and follow me."],
      ["Luke 15:7", "Joy shall be in heaven over one sinner that repenteth."],
      ["Luke 18:27", "The things which are impossible with men are possible with God."],
      ["Luke 19:10", "For the Son of man is come to seek and to save that which was lost."]
    ]
  },
  "book-acts": {
    title: "Acts",
    copy: "The Holy Spirit, the early church and bold witness—entirely from Acts.",
    icon: "flame",
    verses: [
      ["Acts 1:8", "Ye shall receive power, after that the Holy Ghost is come upon you: and ye shall be witnesses unto me."],
      ["Acts 2:21", "Whosoever shall call on the name of the Lord shall be saved."],
      ["Acts 2:38", "Repent, and be baptized every one of you in the name of Jesus Christ for the remission of sins."],
      ["Acts 4:12", "Neither is there salvation in any other."],
      ["Acts 4:31", "They were all filled with the Holy Ghost, and they spake the word of God with boldness."],
      ["Acts 16:31", "Believe on the Lord Jesus Christ, and thou shalt be saved."],
      ["Acts 17:28", "For in him we live, and move, and have our being."],
      ["Acts 20:35", "It is more blessed to give than to receive."]
    ]
  },
  "book-ephesians": {
    title: "Ephesians",
    copy: "Grace, identity, unity and spiritual strength—entirely from Ephesians.",
    icon: "shield",
    verses: [
      ["Ephesians 1:3", "Who hath blessed us with all spiritual blessings in heavenly places in Christ."],
      ["Ephesians 1:7", "In whom we have redemption through his blood, the forgiveness of sins."],
      ["Ephesians 2:8–9", "For by grace are ye saved through faith; and that not of yourselves: it is the gift of God."],
      ["Ephesians 2:10", "For we are his workmanship, created in Christ Jesus unto good works."],
      ["Ephesians 3:20", "Able to do exceeding abundantly above all that we ask or think."],
      ["Ephesians 4:32", "Be ye kind one to another, tenderhearted, forgiving one another."],
      ["Ephesians 6:10", "Be strong in the Lord, and in the power of his might."],
      ["Ephesians 6:11", "Put on the whole armour of God."]
    ]
  },
  "book-colossians": {
    title: "Colossians",
    copy: "The supremacy of Christ and life rooted in Him—entirely from Colossians.",
    icon: "crown",
    verses: [
      ["Colossians 1:13–14", "Who hath delivered us from the power of darkness... In whom we have redemption through his blood."],
      ["Colossians 1:16", "By him were all things created, that are in heaven, and that are in earth."],
      ["Colossians 1:17", "He is before all things, and by him all things consist."],
      ["Colossians 2:6–7", "As ye have therefore received Christ Jesus the Lord, so walk ye in him: Rooted and built up in him."],
      ["Colossians 3:2", "Set your affection on things above, not on things on the earth."],
      ["Colossians 3:12", "Put on therefore... bowels of mercies, kindness, humbleness of mind, meekness, longsuffering."],
      ["Colossians 3:17", "Whatsoever ye do in word or deed, do all in the name of the Lord Jesus."],
      ["Colossians 3:23", "Whatsoever ye do, do it heartily, as to the Lord, and not unto men."]
    ]
  },
  "book-1-peter": {
    title: "1 Peter",
    copy: "Hope, holiness and steadfast faith through suffering—entirely from 1 Peter.",
    icon: "anchor",
    verses: [
      ["1 Peter 1:3", "Hath begotten us again unto a lively hope by the resurrection of Jesus Christ from the dead."],
      ["1 Peter 1:15–16", "Be ye holy; for I am holy."],
      ["1 Peter 2:9", "Ye are a chosen generation, a royal priesthood, an holy nation."],
      ["1 Peter 2:24", "Who his own self bare our sins in his own body on the tree."],
      ["1 Peter 3:15", "Be ready always to give an answer to every man that asketh you a reason of the hope that is in you."],
      ["1 Peter 4:8", "Above all things have fervent charity among yourselves."],
      ["1 Peter 5:7", "Casting all your care upon him; for he careth for you."],
      ["1 Peter 5:10", "The God of all grace... make you perfect, stablish, strengthen, settle you."]
    ]
  },
  "person-abraham": {
    title: "Abraham",
    copy: "Faith, obedience and trusting God’s promise through Abraham’s life.",
    icon: "star",
    verses: [
      ["Genesis 12:1–2", "Get thee out of thy country... and I will make of thee a great nation."],
      ["Genesis 15:6", "And he believed in the Lord; and he counted it to him for righteousness."],
      ["Genesis 17:1", "Walk before me, and be thou perfect."],
      ["Genesis 22:8", "My son, God will provide himself a lamb for a burnt offering."],
      ["Romans 4:20–21", "He staggered not at the promise of God through unbelief... being fully persuaded that, what he had promised, he was able also to perform."],
      ["Hebrews 11:8", "By faith Abraham, when he was called to go out... obeyed."]
    ]
  },
  "person-joseph": {
    title: "Joseph",
    copy: "Integrity, endurance, forgiveness and God’s purpose through Joseph’s life.",
    icon: "steps",
    verses: [
      ["Genesis 39:2", "And the Lord was with Joseph, and he was a prosperous man."],
      ["Genesis 39:9", "How then can I do this great wickedness, and sin against God?"],
      ["Genesis 41:16", "It is not in me: God shall give Pharaoh an answer of peace."],
      ["Genesis 45:5", "God did send me before you to preserve life."],
      ["Genesis 50:20", "Ye thought evil against me; but God meant it unto good."],
      ["Psalm 105:19", "Until the time that his word came: the word of the Lord tried him."]
    ]
  },
  "person-moses": {
    title: "Moses",
    copy: "Calling, courage, leadership and dependence on God through Moses’ life.",
    icon: "mountain",
    verses: [
      ["Exodus 3:12", "Certainly I will be with thee."],
      ["Exodus 4:12", "Now therefore go, and I will be with thy mouth, and teach thee what thou shalt say."],
      ["Exodus 14:14", "The Lord shall fight for you, and ye shall hold your peace."],
      ["Exodus 33:14", "My presence shall go with thee, and I will give thee rest."],
      ["Deuteronomy 31:8", "The Lord, he it is that doth go before thee; he will be with thee."],
      ["Hebrews 11:27", "He endured, as seeing him who is invisible."]
    ]
  },
  "person-joshua": {
    title: "Joshua",
    copy: "Courage, obedience and strength for stepping into God’s assignment.",
    icon: "shield",
    verses: [
      ["Joshua 1:5", "As I was with Moses, so I will be with thee: I will not fail thee, nor forsake thee."],
      ["Joshua 1:8", "This book of the law shall not depart out of thy mouth... then thou shalt make thy way prosperous."],
      ["Joshua 1:9", "Be strong and of a good courage... for the Lord thy God is with thee whithersoever thou goest."],
      ["Joshua 3:5", "Sanctify yourselves: for to morrow the Lord will do wonders among you."],
      ["Joshua 23:14", "Not one thing hath failed of all the good things which the Lord your God spake concerning you."],
      ["Joshua 24:15", "As for me and my house, we will serve the Lord."]
    ]
  },
  "person-ruth": {
    title: "Ruth",
    copy: "Loyalty, courage and restoration through Ruth’s faithful choices.",
    icon: "heart",
    verses: [
      ["Ruth 1:16", "Whither thou goest, I will go; and where thou lodgest, I will lodge."],
      ["Ruth 2:12", "A full reward be given thee of the Lord God of Israel, under whose wings thou art come to trust."],
      ["Ruth 2:20", "Blessed be he of the Lord, who hath not left off his kindness to the living and to the dead."],
      ["Ruth 3:11", "All the city of my people doth know that thou art a virtuous woman."],
      ["Ruth 4:14", "Blessed be the Lord, which hath not left thee this day without a kinsman."],
      ["Matthew 1:5", "Boaz begat Obed of Ruth; and Obed begat Jesse."]
    ]
  },
  "person-esther": {
    title: "Esther",
    copy: "Courage, wisdom and purpose for a defining moment through Esther’s story.",
    icon: "crown",
    verses: [
      ["Esther 2:17", "The king loved Esther above all the women."],
      ["Esther 4:14", "Who knoweth whether thou art come to the kingdom for such a time as this?"],
      ["Esther 4:16", "I also and my maidens will fast likewise; and so will I go in unto the king."],
      ["Esther 5:2", "She obtained favour in his sight."],
      ["Esther 8:16", "The Jews had light, and gladness, and joy, and honour."],
      ["Esther 9:22", "The month which was turned unto them from sorrow to joy."]
    ]
  },
  "person-daniel": {
    title: "Daniel",
    copy: "Conviction, prayer and faithfulness under pressure through Daniel’s life.",
    icon: "shield",
    verses: [
      ["Daniel 1:8", "Daniel purposed in his heart that he would not defile himself."],
      ["Daniel 2:20", "Blessed be the name of God for ever and ever: for wisdom and might are his."],
      ["Daniel 3:17–18", "Our God whom we serve is able to deliver us... But if not... we will not serve thy gods."],
      ["Daniel 6:10", "He kneeled upon his knees three times a day, and prayed, and gave thanks before his God."],
      ["Daniel 6:22", "My God hath sent his angel, and hath shut the lions' mouths."],
      ["Daniel 9:9", "To the Lord our God belong mercies and forgivenesses."]
    ]
  },
  "person-mary": {
    title: "Mary",
    copy: "Surrender, trust and worship through Mary’s response to God.",
    icon: "heart",
    verses: [
      ["Luke 1:28", "Hail, thou that art highly favoured, the Lord is with thee."],
      ["Luke 1:35", "The Holy Ghost shall come upon thee, and the power of the Highest shall overshadow thee."],
      ["Luke 1:37", "For with God nothing shall be impossible."],
      ["Luke 1:38", "Behold the handmaid of the Lord; be it unto me according to thy word."],
      ["Luke 1:46–47", "My soul doth magnify the Lord, And my spirit hath rejoiced in God my Saviour."],
      ["Luke 2:19", "Mary kept all these things, and pondered them in her heart."]
    ]
  },
  "person-peter": {
    title: "Peter",
    copy: "Calling, failure, restoration and bold faith through Peter’s journey.",
    icon: "anchor",
    verses: [
      ["Matthew 4:19", "Follow me, and I will make you fishers of men."],
      ["Matthew 16:16", "Thou art the Christ, the Son of the living God."],
      ["Luke 22:32", "I have prayed for thee, that thy faith fail not: and when thou art converted, strengthen thy brethren."],
      ["John 21:17", "Lord, thou knowest all things; thou knowest that I love thee."],
      ["Acts 4:13", "They marvelled; and they took knowledge of them, that they had been with Jesus."],
      ["1 Peter 5:7", "Casting all your care upon him; for he careth for you."]
    ]
  },
  "occasion-waiting": {
    title: "Waiting",
    copy: "Scripture for trusting God when the answer, direction or breakthrough has not come yet.",
    icon: "clock",
    verses: [
      ["Psalm 27:14", "Wait on the Lord: be of good courage, and he shall strengthen thine heart."],
      ["Psalm 37:7", "Rest in the Lord, and wait patiently for him."],
      ["Psalm 130:5", "I wait for the Lord, my soul doth wait, and in his word do I hope."],
      ["Isaiah 40:31", "They that wait upon the Lord shall renew their strength."],
      ["Lamentations 3:25–26", "The Lord is good unto them that wait for him... It is good that a man should both hope and quietly wait for the salvation of the Lord."],
      ["Habakkuk 2:3", "Though it tarry, wait for it; because it will surely come, it will not tarry."],
      ["Romans 8:25", "If we hope for that we see not, then do we with patience wait for it."],
      ["Galatians 6:9", "Let us not be weary in well doing: for in due season we shall reap, if we faint not."],
      ["James 5:7", "Be patient therefore, brethren, unto the coming of the Lord."],
      ["Hebrews 10:36", "Ye have need of patience, that, after ye have done the will of God, ye might receive the promise."]
    ]
  },
  "psalms-prayer": {
    title: "Psalms for Prayer",
    copy: "Only Psalms—chosen to help you pray through fear, sorrow, repentance, trust and praise.",
    icon: "prayer",
    verses: [
      ["Psalm 5:3", "My voice shalt thou hear in the morning, O Lord; in the morning will I direct my prayer unto thee."],
      ["Psalm 18:2", "The Lord is my rock, and my fortress, and my deliverer."],
      ["Psalm 23:1–4", "The Lord is my shepherd; I shall not want... Yea, though I walk through the valley of the shadow of death, I will fear no evil."],
      ["Psalm 27:7–8", "Hear, O Lord, when I cry with my voice... Thy face, Lord, will I seek."],
      ["Psalm 34:4", "I sought the Lord, and he heard me, and delivered me from all my fears."],
      ["Psalm 42:11", "Why art thou cast down, O my soul? hope thou in God."],
      ["Psalm 46:10", "Be still, and know that I am God."],
      ["Psalm 51:10–12", "Create in me a clean heart, O God; and renew a right spirit within me."],
      ["Psalm 61:1–2", "Hear my cry, O God; attend unto my prayer... lead me to the rock that is higher than I."],
      ["Psalm 63:1", "O God, thou art my God; early will I seek thee."],
      ["Psalm 86:11", "Teach me thy way, O Lord; I will walk in thy truth: unite my heart to fear thy name."],
      ["Psalm 91:1–2", "He that dwelleth in the secret place of the most High shall abide under the shadow of the Almighty."],
      ["Psalm 103:1–2", "Bless the Lord, O my soul, and forget not all his benefits."],
      ["Psalm 121:1–2", "My help cometh from the Lord, which made heaven and earth."],
      ["Psalm 130:1–2", "Out of the depths have I cried unto thee, O Lord. Lord, hear my voice."],
      ["Psalm 139:23–24", "Search me, O God, and know my heart... and lead me in the way everlasting."],
      ["Psalm 143:8", "Cause me to hear thy lovingkindness in the morning; for in thee do I trust."]
    ]
  },
  "essential-verses": {
    title: "Essential Memory Verses",
    copy: "Foundational verses every believer can carry through daily life.",
    icon: "star",
    verses: [
      ["Genesis 1:1", "In the beginning God created the heaven and the earth."],
      ["Psalm 23:1", "The Lord is my shepherd; I shall not want."],
      ["Psalm 119:105", "Thy word is a lamp unto my feet, and a light unto my path."],
      ["Proverbs 3:5–6", "Trust in the Lord with all thine heart; and lean not unto thine own understanding."],
      ["Isaiah 41:10", "Fear thou not; for I am with thee: be not dismayed; for I am thy God."],
      ["Matthew 6:33", "Seek ye first the kingdom of God, and his righteousness."],
      ["John 3:16", "For God so loved the world, that he gave his only begotten Son."],
      ["John 14:6", "I am the way, the truth, and the life."],
      ["Romans 3:23", "For all have sinned, and come short of the glory of God."],
      ["Romans 6:23", "The gift of God is eternal life through Jesus Christ our Lord."],
      ["Romans 8:28", "All things work together for good to them that love God."],
      ["Romans 10:9", "If thou shalt confess with thy mouth the Lord Jesus... thou shalt be saved."],
      ["1 Corinthians 10:13", "God is faithful, who will not suffer you to be tempted above that ye are able."],
      ["2 Corinthians 5:17", "If any man be in Christ, he is a new creature."],
      ["Galatians 5:22–23", "The fruit of the Spirit is love, joy, peace, longsuffering, gentleness, goodness, faith, meekness, temperance."],
      ["Ephesians 2:8–9", "For by grace are ye saved through faith; and that not of yourselves: it is the gift of God."],
      ["Philippians 4:6–7", "Be careful for nothing... and the peace of God... shall keep your hearts and minds."],
      ["Philippians 4:13", "I can do all things through Christ which strengtheneth me."],
      ["Philippians 4:19", "My God shall supply all your need according to his riches in glory by Christ Jesus."],
      ["2 Timothy 1:7", "God hath not given us the spirit of fear; but of power, and of love, and of a sound mind."],
      ["Hebrews 11:1", "Faith is the substance of things hoped for, the evidence of things not seen."],
      ["James 1:5", "If any of you lack wisdom, let him ask of God."],
      ["1 Peter 5:7", "Casting all your care upon him; for he careth for you."],
      ["1 John 1:9", "If we confess our sins, he is faithful and just to forgive us our sins."]
    ]
  },
  "difficult-days": {
    title: "Promises for Difficult Days",
    copy: "Promises of God’s presence, strength, help, peace and faithful care.",
    icon: "shield",
    verses: [
      ["Deuteronomy 31:8", "The Lord, he it is that doth go before thee; he will be with thee, he will not fail thee."],
      ["Psalm 34:17–18", "The righteous cry, and the Lord heareth... The Lord is nigh unto them that are of a broken heart."],
      ["Psalm 46:1", "God is our refuge and strength, a very present help in trouble."],
      ["Psalm 55:22", "Cast thy burden upon the Lord, and he shall sustain thee."],
      ["Isaiah 40:31", "They that wait upon the Lord shall renew their strength."],
      ["Isaiah 41:10", "Fear thou not; for I am with thee."],
      ["Isaiah 43:2", "When thou passest through the waters, I will be with thee."],
      ["Matthew 11:28", "Come unto me, all ye that labour and are heavy laden, and I will give you rest."],
      ["John 14:27", "Peace I leave with you, my peace I give unto you."],
      ["Romans 8:28", "All things work together for good to them that love God."],
      ["Romans 8:38–39", "Nothing shall be able to separate us from the love of God, which is in Christ Jesus our Lord."],
      ["2 Corinthians 12:9", "My grace is sufficient for thee: for my strength is made perfect in weakness."],
      ["Philippians 4:19", "My God shall supply all your need according to his riches in glory by Christ Jesus."],
      ["Hebrews 13:5", "I will never leave thee, nor forsake thee."],
      ["1 Peter 5:7", "Casting all your care upon him; for he careth for you."]
    ]
  },
  "children-verses": {
    title: "Verses for Children",
    copy: "Short, clear verses about God’s love, kindness, obedience, courage and trust.",
    icon: "heart",
    verses: [
      ["Psalm 56:3", "What time I am afraid, I will trust in thee."],
      ["Psalm 119:105", "Thy word is a lamp unto my feet, and a light unto my path."],
      ["Proverbs 3:5", "Trust in the Lord with all thine heart."],
      ["Proverbs 15:1", "A soft answer turneth away wrath."],
      ["Matthew 5:16", "Let your light so shine before men."],
      ["Matthew 19:14", "Suffer little children, and forbid them not, to come unto me."],
      ["Luke 6:31", "As ye would that men should do to you, do ye also to them likewise."],
      ["John 3:16", "For God so loved the world, that he gave his only begotten Son."],
      ["Ephesians 4:32", "Be ye kind one to another, tenderhearted, forgiving one another."],
      ["Ephesians 6:1", "Children, obey your parents in the Lord: for this is right."],
      ["Philippians 4:4", "Rejoice in the Lord alway."],
      ["Philippians 4:13", "I can do all things through Christ which strengtheneth me."],
      ["Colossians 3:20", "Children, obey your parents in all things: for this is well pleasing unto the Lord."],
      ["1 Thessalonians 5:17", "Pray without ceasing."],
      ["1 John 4:19", "We love him, because he first loved us."]
    ]
  },
  "words-of-jesus": {
    title: "Words of Jesus",
    copy: "The direct teachings, invitations and promises of Jesus from the Gospels.",
    icon: "cross",
    verses: [
      ["Matthew 5:14", "Ye are the light of the world."],
      ["Matthew 6:33", "Seek ye first the kingdom of God, and his righteousness."],
      ["Matthew 7:7", "Ask, and it shall be given you; seek, and ye shall find."],
      ["Matthew 11:28", "Come unto me, all ye that labour and are heavy laden, and I will give you rest."],
      ["Matthew 22:37–39", "Thou shalt love the Lord thy God with all thy heart... Thou shalt love thy neighbour as thyself."],
      ["Matthew 28:19–20", "Go ye therefore, and teach all nations... and, lo, I am with you alway."],
      ["Mark 8:34", "Whosoever will come after me, let him deny himself, and take up his cross, and follow me."],
      ["Luke 6:31", "As ye would that men should do to you, do ye also to them likewise."],
      ["John 6:35", "I am the bread of life."],
      ["John 8:12", "I am the light of the world."],
      ["John 10:11", "I am the good shepherd."],
      ["John 11:25", "I am the resurrection, and the life."],
      ["John 13:34", "That ye love one another; as I have loved you."],
      ["John 14:6", "I am the way, the truth, and the life."],
      ["John 14:27", "Peace I leave with you, my peace I give unto you."],
      ["John 15:5", "I am the vine, ye are the branches."],
      ["John 16:33", "In the world ye shall have tribulation: but be of good cheer; I have overcome the world."]
    ]
  },
  "proverbs-daily": {
    title: "Proverbs for Daily Living",
    copy: "Only Proverbs—practical wisdom for thoughts, speech, work, money and relationships.",
    icon: "lamp",
    verses: [
      ["Proverbs 3:5–6", "Trust in the Lord with all thine heart... and he shall direct thy paths."],
      ["Proverbs 4:23", "Keep thy heart with all diligence; for out of it are the issues of life."],
      ["Proverbs 10:4", "He becometh poor that dealeth with a slack hand: but the hand of the diligent maketh rich."],
      ["Proverbs 10:12", "Hatred stirreth up strifes: but love covereth all sins."],
      ["Proverbs 11:25", "The liberal soul shall be made fat: and he that watereth shall be watered also himself."],
      ["Proverbs 12:18", "The tongue of the wise is health."],
      ["Proverbs 13:20", "He that walketh with wise men shall be wise."],
      ["Proverbs 14:29", "He that is slow to wrath is of great understanding."],
      ["Proverbs 15:1", "A soft answer turneth away wrath."],
      ["Proverbs 15:22", "In the multitude of counsellors they are established."],
      ["Proverbs 16:3", "Commit thy works unto the Lord, and thy thoughts shall be established."],
      ["Proverbs 16:9", "A man's heart deviseth his way: but the Lord directeth his steps."],
      ["Proverbs 17:22", "A merry heart doeth good like a medicine."],
      ["Proverbs 18:21", "Death and life are in the power of the tongue."],
      ["Proverbs 19:11", "The discretion of a man deferreth his anger."],
      ["Proverbs 22:1", "A good name is rather to be chosen than great riches."],
      ["Proverbs 27:17", "Iron sharpeneth iron; so a man sharpeneth the countenance of his friend."]
    ]
  }
};

