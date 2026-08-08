const questions = [
    {
        question: "What is the capital city of Nigeria?",
        answers: [
            "Lagos",
            "Kano",
            "Abuja",
            "Kaduna"
        ],
        correct: 2
    },

    {
        question: "How many states are there in Nigeria?",
        answers: [
            "30",
            "36",
            "40",
            "35"
        ],
        correct: 1
    },

    {
        question: "What are the colours of the Nigerian flag?",
        answers: [
            "Green and White",
            "Green and Red",
            "Blue and White",
            "Red and White"
        ],
        correct: 0
    },

    {
        question: "At what age can a Nigerian citizen vote?",
        answers: [
            "16 years",
            "17 years",
            "18 years",
            "21 years"
        ],
        correct: 2
    },

    {
        question: "What is the supreme law of Nigeria?",
        answers: [
            "The Constitution",
            "The Police Act",
            "The Education Act",
            "The Election Act"
        ],
        correct: 0
    },

    {
        question: "Which arm of government makes laws?",
        answers: [
            "Executive",
            "Judiciary",
            "Legislature",
            "Police"
        ],
        correct: 2
    },

    {
        question: "Which arm of government interprets laws?",
        answers: [
            "Executive",
            "Judiciary",
            "Legislature",
            "Military"
        ],
        correct: 1
    },

    {
        question: "What is democracy?",
        answers: [
            "Government by the people",
            "Government by soldiers",
            "Government by one person",
            "Government by kings"
        ],
        correct: 0
    },

    {
        question: "Which body conducts elections in Nigeria?",
        answers: [
            "NIMC",
            "INEC",
            "NYSC",
            "EFCC"
        ],
        correct: 1
    },

    {
        question: "What should a good citizen do?",
        answers: [
            "Break the law",
            "Avoid paying taxes",
            "Obey the law and respect others",
            "Destroy public property"
        ],
        correct: 2
    },
    {
        question: "When did Nigeria gain independence?",
        answers: [
            "1960",
            "1963",
            "1970",
            "1957"
        ],
        correct: 0
    },

    {
        question: "What is the name of Nigeria's national legislature?",
        answers: [
            "National Assembly",
            "Federal Council",
            "National Court",
            "State Council"
        ],
        correct: 0
    },

    {
        question: "What are the two chambers of the National Assembly?",
        answers: [
            "Senate and House of Representatives",
            "Senate and Supreme Court",
            "House of Assembly and Senate",
            "Council and Senate"
        ],
        correct: 0
    },

    {
        question: "Who is the head of the Federal Executive?",
        answers: [
            "President",
            "Chief Justice",
            "Senate President",
            "Speaker"
        ],
        correct: 0
    },

    {
        question: "Which arm of government is headed by the President?",
        answers: [
            "Executive",
            "Judiciary",
            "Legislature",
            "Traditional Council"
        ],
        correct: 0
    },

    {
        question: "Which institution interprets the Constitution?",
        answers: [
            "Courts",
            "INEC",
            "Police",
            "National Assembly"
        ],
        correct: 0
    },

    {
        question: "What does INEC stand for?",
        answers: [
            "Independent National Electoral Commission",
            "International National Election Council",
            "Independent Nigerian Electoral Council",
            "Internal National Election Commission"
        ],
        correct: 0
    },

    {
        question: "What is the minimum voting age in Nigeria?",
        answers: [
            "16",
            "17",
            "18",
            "21"
        ],
        correct: 2
    },

    {
        question: "Which of these is a fundamental human right?",
        answers: [
            "Right to life",
            "Right to steal",
            "Right to bribe",
            "Right to destroy property"
        ],
        correct: 0
    },

    {
        question: "Freedom of expression is an example of a...",
        answers: [
            "Fundamental right",
            "Tax",
            "Crime",
            "Election"
        ],
        correct: 0
    },

    {
        question: "Which of these is a civic responsibility?",
        answers: [
            "Obeying the law",
            "Destroying public property",
            "Buying votes",
            "Avoiding taxes"
        ],
        correct: 0
    },

    {
        question: "Why do citizens pay taxes?",
        answers: [
            "To support public services",
            "To avoid elections",
            "To become politicians",
            "To receive votes"
        ],
        correct: 0
    },

    {
        question: "Which of these promotes national unity?",
        answers: [
            "Tolerance",
            "Tribalism",
            "Hatred",
            "Violence"
        ],
        correct: 0
    },

    {
        question: "What does rule of law mean?",
        answers: [
            "Everyone is subject to the law",
            "Only leaders obey laws",
            "Only judges obey laws",
            "Nobody obeys laws"
        ],
        correct: 0
    },

    {
        question: "Which of these is a democratic value?",
        answers: [
            "Equality",
            "Violence",
            "Corruption",
            "Intimidation"
        ],
        correct: 0
    },

    {
        question: "What is citizenship?",
        answers: [
            "Legal membership of a country",
            "Owning a business",
            "Being a student",
            "Living in a hotel"
        ],
        correct: 0
    },

    {
        question: "Which of these can strengthen democracy?",
        answers: [
            "Free and fair elections",
            "Vote buying",
            "Election violence",
            "Rigging"
        ],
        correct: 0
    },

    {
        question: "What is an election?",
        answers: [
            "A process of choosing leaders",
            "A court case",
            "A tax payment",
            "A school examination"
        ],
        correct: 0
    },

    {
        question: "What should voters do before voting?",
        answers: [
            "Register and follow electoral rules",
            "Sell their votes",
            "Destroy ballot boxes",
            "Fight opponents"
        ],
        correct: 0
    },

    {
        question: "What is patriotism?",
        answers: [
            "Love and service to one's country",
            "Hatred of citizens",
            "Refusal to obey laws",
            "Destroying public property"
        ],
        correct: 0
    },

    {
        question: "Which is an example of public property?",
        answers: [
            "Public school",
            "Private phone",
            "Family car",
            "Personal house"
        ],
        correct: 0
    },

    {
        question: "What should citizens do with public property?",
        answers: [
            "Protect it",
            "Destroy it",
            "Steal it",
            "Sell it"
        ],
        correct: 0
    },

    {
        question: "Which agency is associated with road safety in Nigeria?",
        answers: [
            "FRSC",
            "INEC",
            "JAMB",
            "NYSC"
        ],
        correct: 0
    },

    {
        question: "What does FRSC stand for?",
        answers: [
            "Federal Road Safety Corps",
            "Federal Roads Security Council",
            "Federal Road Service Commission",
            "Federal Road Safety Council"
        ],
        correct: 0
    },

    {
        question: "Which institution conducts population census in Nigeria?",
        answers: [
            "National Population Commission",
            "INEC",
            "JAMB",
            "NYSC"
        ],
        correct: 0
    },

    {
        question: "What does NYSC stand for?",
        answers: [
            "National Youth Service Corps",
            "Nigerian Youth Social Council",
            "National Young Students Corps",
            "Nigerian Youth Service Commission"
        ],
        correct: 0
    },

    {
        question: "Which of these is a national symbol of Nigeria?",
        answers: [
            "National Flag",
            "School uniform",
            "Football jersey",
            "Market sign"
        ],
        correct: 0
    },

    {
        question: "What does the green colour on the Nigerian flag represent?",
        answers: [
            "Agriculture",
            "Peace",
            "War",
            "Justice"
        ],
        correct: 0
    },

    {
        question: "What does the white colour on the Nigerian flag represent?",
        answers: [
            "Peace",
            "Agriculture",
            "Power",
            "Wealth"
        ],
        correct: 0
    },

    {
        question: "Which day is Nigeria's Independence Day?",
        answers: [
            "October 1",
            "June 12",
            "May 29",
            "January 1"
        ],
        correct: 0
    },
    {
        question: "Which country shares a border with Nigeria to the west?",
        answers: [
            "Benin",
            "Cameroon",
            "Chad",
            "Ghana"
        ],
        correct: 0
    },

    {
        question: "Which country lies to the east of Nigeria?",
        answers: [
            "Cameroon",
            "Benin",
            "Ghana",
            "Togo"
        ],
        correct: 0
    },

    {
        question: "What is accountability?",
        answers: [
            "Being responsible for one's actions",
            "Avoiding responsibility",
            "Hiding information",
            "Breaking laws"
        ],
        correct: 0
    },

    {
        question: "What is transparency in governance?",
        answers: [
            "Openness and clarity",
            "Secret dealings",
            "Vote buying",
            "Corruption"
        ],
        correct: 0
    },

    {
        question: "Which of these is a good leadership quality?",
        answers: [
            "Integrity",
            "Dishonesty",
            "Greed",
            "Corruption"
        ],
        correct: 0
    },

    {
        question: "What is integrity?",
        answers: [
            "Honesty and strong moral principles",
            "Cheating",
            "Bribery",
            "Deception"
        ],
        correct: 0
    },

    {
        question: "Which behaviour promotes peaceful coexistence?",
        answers: [
            "Dialogue",
            "Violence",
            "Hatred",
            "Discrimination"
        ],
        correct: 0
    },

    {
        question: "What should a citizen do when a crime occurs?",
        answers: [
            "Report it to appropriate authorities",
            "Hide it",
            "Join the crime",
            "Destroy evidence"
        ],
        correct: 0
    },

    {
        question: "Which of these is corruption?",
        answers: [
            "Bribery",
            "Honesty",
            "Accountability",
            "Transparency"
        ],
        correct: 0
    },

    {
        question: "What is bribery?",
        answers: [
            "Offering or receiving something improperly to influence action",
            "Paying legal taxes",
            "Helping a neighbour",
            "Voting"
        ],
        correct: 0
    },

    {
        question: "What is vote buying?",
        answers: [
            "Offering benefits to influence a person's vote",
            "Registering to vote",
            "Counting votes",
            "Learning about candidates"
        ],
        correct: 0
    },

    {
        question: "Which practice can undermine elections?",
        answers: [
            "Vote buying",
            "Secret ballot",
            "Voter education",
            "Peaceful voting"
        ],
        correct: 0
    },

    {
        question: "Why is voter education important?",
        answers: [
            "It helps voters understand their rights and duties",
            "It encourages violence",
            "It stops elections",
            "It replaces registration"
        ],
        correct: 0
    },

    {
        question: "What is the secret ballot?",
        answers: [
            "Voting privately",
            "Voting publicly",
            "Selling a vote",
            "Counting votes at home"
        ],
        correct: 0
    },

    {
        question: "Which of these supports a free election?",
        answers: [
            "Freedom to choose candidates",
            "Intimidation",
            "Vote buying",
            "Violence"
        ],
        correct: 0
    },

    {
        question: "What should political candidates respect?",
        answers: [
            "Electoral laws",
            "Violence",
            "Vote buying",
            "False results"
        ],
        correct: 0
    },

    {
        question: "What is civic education?",
        answers: [
            "Learning about citizenship, rights and responsibilities",
            "Learning only mathematics",
            "Learning to trade",
            "Learning only sports"
        ],
        correct: 0
    },

    {
        question: "Why should citizens know their rights?",
        answers: [
            "To understand and protect them",
            "To break laws",
            "To avoid duties",
            "To control courts"
        ],
        correct: 0
    },

    {
        question: "Rights should be exercised with...",
        answers: [
            "Respect for the rights of others",
            "Violence",
            "Hatred",
            "Discrimination"
        ],
        correct: 0
    },

    {
        question: "Which is a responsibility toward the environment?",
        answers: [
            "Keeping it clean",
            "Dumping waste everywhere",
            "Burning public property",
            "Polluting rivers"
        ],
        correct: 0
    },

    {
        question: "What should citizens do to support community development?",
        answers: [
            "Participate positively",
            "Destroy projects",
            "Steal materials",
            "Ignore problems"
        ],
        correct: 0
    },

    {
        question: "What is national unity?",
        answers: [
            "People working together as one nation",
            "People fighting over differences",
            "One group controlling everyone",
            "Rejecting diversity"
        ],
        correct: 0
    },

    {
        question: "Which value encourages fairness?",
        answers: [
            "Justice",
            "Corruption",
            "Nepotism",
            "Dishonesty"
        ],
        correct: 0
    },

    {
        question: "What is equality?",
        answers: [
            "Treating people fairly and without unlawful discrimination",
            "Giving everyone different rights",
            "Favouring one group",
            "Ignoring laws"
        ],
        correct: 0
    },

    {
        question: "What is tolerance?",
        answers: [
            "Respecting differences among people",
            "Forcing everyone to agree",
            "Hating other groups",
            "Rejecting dialogue"
        ],
        correct: 0
    },

    {
        question: "What is a peaceful way to resolve conflict?",
        answers: [
            "Dialogue",
            "Violence",
            "Threats",
            "Revenge"
        ],
        correct: 0
    },

    {
        question: "Which of these can help prevent discrimination?",
        answers: [
            "Respect for diversity",
            "Tribalism",
            "Hate speech",
            "Exclusion"
        ],
        correct: 0
    },

    {
        question: "What should a responsible citizen do during emergencies?",
        answers: [
            "Follow lawful safety instructions",
            "Spread panic",
            "Destroy property",
            "Ignore authorities"
        ],
        correct: 0
    },
    {
        question: "What should you do if you find someone's lost property?",
        answers: [
            "Return it or hand it to the appropriate authority",
            "Keep it",
            "Sell it",
            "Hide it"
        ],
        correct: 0
    },

    {
        question: "Which institution is responsible for Nigeria's monetary policy?",
        answers: [
            "Central Bank of Nigeria",
            "INEC",
            "FRSC",
            "NYSC"
        ],
        correct: 0
    },

    {
        question: "What does CBN stand for?",
        answers: [
            "Central Bank of Nigeria",
            "Council Bank of Nigeria",
            "Central Banking Network",
            "Citizens Bank of Nigeria"
        ],
        correct: 0
    },

    {
        question: "Which of these is a duty of government?",
        answers: [
            "Providing public services",
            "Promoting crime",
            "Destroying infrastructure",
            "Ignoring citizens"
        ],
        correct: 0
    },

    {
        question: "What is good governance?",
        answers: [
            "Responsible, transparent and accountable government",
            "Government through corruption",
            "Government without laws",
            "Government through violence"
        ],
        correct: 0
    },

    {
        question: "Which of these can improve public trust?",
        answers: [
            "Accountability",
            "Corruption",
            "Secrecy",
            "Nepotism"
        ],
        correct: 0
    },

    {
        question: "What is nepotism?",
        answers: [
            "Favouring relatives unfairly",
            "Treating everyone equally",
            "Paying taxes",
            "Voting secretly"
        ],
        correct: 0
    },

    {
        question: "What should citizens do about public funds?",
        answers: [
            "Demand responsible use",
            "Steal them",
            "Hide them",
            "Use them for private gain"
        ],
        correct: 0
    },

    {
        question: "Which of these is an example of civic participation?",
        answers: [
            "Taking part in community activities",
            "Ignoring community needs",
            "Destroying public facilities",
            "Promoting violence"
        ],
        correct: 0
    },

    {
        question: "Why are laws important?",
        answers: [
            "They help maintain order and protect rights",
            "They encourage crime",
            "They remove all responsibilities",
            "They stop citizenship"
        ],
        correct: 0
    },

    {
        question: "What does respect for diversity mean?",
        answers: [
            "Accepting people with different backgrounds and views",
            "Rejecting everyone different",
            "Forcing one culture on all",
            "Promoting discrimination"
        ],
        correct: 0
    },

    {
        question: "Which of these is a peaceful civic action?",
        answers: [
            "Joining a lawful community meeting",
            "Destroying property",
            "Attacking opponents",
            "Stealing"
        ],
        correct: 0
    },

    {
        question: "What is responsible use of social media?",
        answers: [
            "Sharing verified and respectful information",
            "Spreading rumours",
            "Harassing people",
            "Sharing private information without permission"
        ],
        correct: 0
    },

    {
        question: "What should you do before sharing a news claim online?",
        answers: [
            "Verify the information",
            "Share immediately",
            "Add false details",
            "Hide the source"
        ],
        correct: 0
    },

    {
        question: "Which value is important for public service?",
        answers: [
            "Service to the public",
            "Personal greed",
            "Dishonesty",
            "Corruption"
        ],
        correct: 0
    },

    {
        question: "What is a peaceful protest?",
        answers: [
            "A lawful expression of concerns without violence",
            "Destroying property",
            "Attacking people",
            "Stealing"
        ],
        correct: 0
    },

    {
        question: "What is the main purpose of civic responsibility?",
        answers: [
            "To contribute to a peaceful and orderly society",
            "To promote conflict",
            "To avoid all duties",
            "To weaken communities"
        ],
        correct: 0
    },

    {
        question: "A good citizen should treat other citizens with...",
        answers: [
            "Respect",
            "Hatred",
            "Violence",
            "Discrimination"
        ],
        correct: 0
    },

    {
        question: "What is the best response to a disagreement in a democracy?",
        answers: [
            "Respectful dialogue",
            "Violence",
            "Threats",
            "Silencing everyone"
        ],
        correct: 0
    },

    {
        question: "Which Nigerian institution manages national identity registration?",
        answers: [
            "National Identity Management Commission",
            "Independent National Electoral Commission",
            "Federal Road Safety Corps",
            "National Population Commission"
        ],
        correct: 0
    },

    {
        question: "What does NIMC stand for?",
        answers: [
            "National Identity Management Commission",
            "National Information Management Council",
            "Nigerian Identity Management Council",
            "National Identification Monitoring Commission"
        ],
        correct: 0
    },

    {
        question: "Which value encourages people to keep promises and tell the truth?",
        answers: [
            "Honesty",
            "Corruption",
            "Violence",
            "Discrimination"
        ],
        correct: 0
    },

    {
        question: "How many geopolitical zones does Nigeria have?",
        answers: [
            "6",
            "5",
            "7",
            "8"
        ],
        correct: 0
    },

    {
        question: "How many Local Government Areas are in Nigeria?",
        answers: [
            "774",
            "360",
            "109",
            "36"
        ],
        correct: 0
    },

    {
        question: "Which continent is Nigeria located in?",
        answers: [
            "Africa",
            "Asia",
            "Europe",
            "Australia"
        ],
        correct: 0
    },

    {
        question: "What is a fundamental purpose of government?",
        answers: [
            "Protecting citizens and maintaining order",
            "Encouraging violence",
            "Promoting corruption",
            "Ignoring laws"
        ],
        correct: 0
    },

    {
        question: "Which institution is the highest court in Nigeria?",
        answers: [
            "Supreme Court",
            "Federal High Court",
            "Magistrate Court",
            "Customary Court"
        ],
        correct: 0
    },

    {
        question: "What is justice?",
        answers: [
            "Fair treatment according to the law",
            "Favouritism",
            "Revenge",
            "Corruption"
        ],
        correct: 0
    },

    {
        question: "Why is national unity important?",
        answers: [
            "It promotes peace and development",
            "It promotes conflict",
            "It encourages discrimination",
            "It weakens communities"
        ],
        correct: 0
    },

    {
        question: "What should citizens do when they disagree with government policies?",
        answers: [
            "Use lawful and peaceful means to express their views",
            "Destroy public property",
            "Use violence",
            "Break the law"
        ],
        correct: 0
    }
];
    {
        question: "Why should citizens respect traffic rules?",
        answers: [
            "To improve road safety",
            "To delay everyone",
            "To encourage accidents",
            "To avoid responsibility"
        ],
        correct: 0
    },

    {
        question: "Which of these is an example of honesty?",
        answers: [
            "Returning lost property",
            "Keeping stolen property",
            "Cheating",
            "Lying"
        ],
        correct: 0
    };