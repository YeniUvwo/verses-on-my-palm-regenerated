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
