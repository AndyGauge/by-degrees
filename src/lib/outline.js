// Each section: title (the law), year (enacted or signed), jurisdiction, spectrum
// (-5 far left … +5 far right), gesture (the punch), body (factual context),
// citation, link, eli5 (plain terms).
//
// Reading order is LEFT-TO-RIGHT along the political spectrum, not chronological.
// Ties on spectrum are broken by year ascending.
//
// Scope: U.S. federal or state policy enacted 1976–2026.

const raw = [
  // ───────────── far left (-5) ─────────────
  {
    title: 'Oregon Death with Dignity Act',
    jurisdiction: 'Oregon · Measure 16',
    year: 1994,
    spectrum: -5,
    gesture: 'The first U.S. law to let a terminally-ill adult request a lethal prescription. Voters passed it; an injunction blocked it; voters reaffirmed it in 1997.',
    body: 'Measure 16 passed 51–49 in 1994 and took effect in 1997 after the legislature sent it back to the ballot as Measure 51, where voters reaffirmed it 60–40. A qualifying patient — an Oregon resident, 18 or older, with a terminal diagnosis of under six months confirmed by two physicians — may request a prescription for self-administered lethal medication. The Oregon Health Authority publishes an annual report of every prescription written and every death.',
    citation: 'Oregon Revised Statutes 127.800–127.897. See also *Gonzales v. Oregon*, 546 U.S. 243 (2006).',
    link: 'https://www.oregon.gov/oha/ph/providerpartnerresources/evaluationresearch/deathwithdignityact/Pages/index.aspx',
    eli5: 'Oregon was the first state to let a dying adult ask a doctor for medicine to end their own life. Two votes put it on the books. Every year the state publishes who used it and why.'
  },
  {
    title: 'Measure 110',
    jurisdiction: 'Oregon · Ballot measure',
    year: 2020,
    spectrum: -5,
    gesture: 'The first U.S. state to decriminalize personal-use possession of every drug on the schedule — including heroin, meth, cocaine, and fentanyl. Possession became a $100 civil citation, waivable by calling a hotline.',
    body: 'Measure 110 passed 58–42 and took effect February 2021. It redirected cannabis tax revenue into Behavioral Health Resource Networks statewide. Overdose deaths rose sharply in the following two years, though national trends moved the same direction. In 2024 the legislature passed HB 4002 recriminalizing possession as a misdemeanor, with a deflection-to-treatment path — ending the policy before its full implementation window closed.',
    citation: 'Oregon Ballot Measure 110 (2020); HB 4002 (2024).',
    link: 'https://ballotpedia.org/Oregon_Measure_110,_Drug_Decriminalization_and_Addiction_Treatment_Initiative_(2020)',
    eli5: 'Oregon voters said: carrying a small amount of a hard drug should be a $100 ticket, not a crime. The money from legal weed would pay for treatment. Four years later the legislature walked it back.'
  },

  // ───────────── progressive (-4) ─────────────
  {
    title: 'Paid Family and Medical Leave',
    jurisdiction: 'Washington · SB 5975',
    year: 2017,
    spectrum: -4,
    gesture: 'Twelve weeks of paid leave, funded by a payroll premium split between employer and employee. Benefits began January 2020 — years before most of the coast had anything like it.',
    body: 'Washington\'s Paid Family and Medical Leave Act cleared a Democratic-controlled legislature with bipartisan support and was signed by Governor Jay Inslee in July 2017. Workers who earn at least $1,000 from Washington employers in the prior year become eligible for up to 12 weeks of paid leave (up to 16–18 combined for pregnancy and bonding) to welcome a child, care for a seriously ill family member, or handle their own serious illness. California (2002) and New Jersey (2008) had paid-leave programs earlier, but at 6 weeks; Washington\'s 12 raised the national floor.',
    citation: 'Washington Laws 2017, Ch. 5 (SB 5975); RCW Title 50A.',
    link: 'https://paidleave.wa.gov/',
    eli5: 'Washington passed 12-week paid family leave in 2017. A payroll premium splits between boss and worker; the state pays you when a baby arrives, a family member gets seriously ill, or you do.'
  },
  {
    title: 'SAFE-T Act — end of cash bail',
    jurisdiction: 'Illinois · HB 3653',
    year: 2021,
    spectrum: -4,
    gesture: 'The first U.S. state to fully abolish cash bail. Whether you walk out before trial now depends on a risk hearing, not on what you can pay.',
    body: 'The Safety, Accountability, Fairness and Equity-Today Act passed in January 2021 and was signed by Governor Pritzker the next month. The Pretrial Fairness Act portion eliminated monetary bail outright, replacing it with a release-by-default rule subject to targeted detention hearings for specific serious charges. The Illinois Supreme Court upheld it in *Rowe v. Raoul* (2023); the cash-bail ban took effect September 18, 2023. No other U.S. state has gone as far; New Jersey, New York, and New Mexico had each narrowed but not ended money bail.',
    citation: 'Illinois Public Act 101-0652 (2021); *Rowe v. Raoul*, 2023 IL 129248.',
    link: 'https://ilga.gov/legislation/publicacts/101/101-0652.htm',
    eli5: 'Illinois became the first state to end cash bail entirely. Whether you wait for trial at home or in jail is now decided at a hearing about risk, not by whether you can afford the bond.'
  },
  {
    title: 'Amendment 64 — recreational cannabis',
    jurisdiction: 'Colorado · Ballot amendment',
    year: 2012,
    spectrum: -4,
    gesture: 'On the same night Washington passed Initiative 502, Colorado legalized adult-use cannabis and built the first state agency in history to regulate a federally illegal drug.',
    body: 'Colorado voters passed Amendment 64 by 55–45 in November 2012, legalizing possession of up to an ounce for adults 21 and older and authorizing a licensed retail market. Retail sales began January 1, 2014. The state\'s Marijuana Enforcement Division became the first state regulator of a federally Schedule I substance and a template for the 24 states that followed. The conflict with federal law has been managed by the Cole Memorandum and the annual Rohrabacher–Farr rider, never by a change in federal statute.',
    citation: 'Colo. Const. art. XVIII, § 16 (2012); Washington Initiative 502 (2012).',
    link: 'https://leg.colorado.gov/sites/default/files/images/amend.64_.pdf',
    eli5: 'Colorado and Washington both legalized marijuana for adults on the same night in 2012. Stores opened in Colorado in 2014. It\'s still illegal under federal law; the two layers have been in an uneasy truce ever since.'
  },
  {
    title: 'California AB 5',
    jurisdiction: 'California',
    year: 2019,
    spectrum: -4,
    gesture: 'Codified the ABC test: a worker is presumed an employee unless the hirer can prove all three prongs. Gig platforms rewrote their business models overnight.',
    body: 'AB 5 codified the California Supreme Court\'s 2018 *Dynamex* decision: to classify a worker as an independent contractor, a company must show the worker is free from its control, performs work outside its usual business, and is independently established in that trade. Ride-share and delivery platforms spent $200M+ to pass Proposition 22 in 2020, carving themselves out. Dozens of occupational exemptions were later added by amendment.',
    citation: 'Cal. Labor Code § 2775 et seq. (AB 5, 2019); *Dynamex Operations W. v. Superior Court*, 4 Cal.5th 903 (2018).',
    link: 'https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=201920200AB5',
    eli5: 'California decided most "contractors" are actually employees unless the company can prove three specific things. Uber and DoorDash paid for a ballot measure to get themselves exempted. Everyone else lives under the new test.'
  },
  {
    title: 'Clean Election Act',
    jurisdiction: 'Maine · Question 3',
    year: 1996,
    spectrum: -3,
    gesture: 'The first comprehensive public-financing system for state campaigns in the country. Qualify with small donations; get a grant to run without private money.',
    body: 'Maine voters passed Question 3 in November 1996 by 56–44. Legislative and gubernatorial candidates who collect a threshold of $5 qualifying contributions from voters receive a fixed public grant and agree to accept no other private funds. At peak participation in the 2000s, roughly 80% of Maine legislative candidates ran as Clean Election candidates. The 2011 U.S. Supreme Court decision in *Arizona Free Enterprise Club v. Bennett* struck down the matching-funds trigger; Maine rebuilt the program with supplemental grants in 2015.',
    citation: 'Maine Revised Statutes Title 21-A, Ch. 14 (1996); *Arizona Free Enterprise Club v. Bennett*, 564 U.S. 721 (2011).',
    link: 'https://www.maine.gov/ethics/maine-clean-election-act',
    eli5: 'Maine voters in 1996 said candidates for state office could take a public grant to run — if they agreed to take no private money at all. At the peak, most Maine legislators got elected this way.'
  },

  // ───────────── left (-3) ─────────────
  {
    title: 'Oregon Health Plan',
    jurisdiction: 'Oregon',
    year: 1989,
    spectrum: -3,
    gesture: 'The first state Medicaid waiver to explicitly ration care by cost-effectiveness. A priority list of 700+ condition-treatment pairs; the legislature drew a funding line and everything below it wasn\'t covered.',
    body: 'The OHP, authored by Senate President John Kitzhaber (an ER doctor), sought federal waiver approval to expand Medicaid coverage by explicitly prioritizing treatments by cost-effectiveness and outcome. Approved by CMS in 1993 and launched in 1994, it covered hundreds of thousands of previously uninsured Oregonians. It became a national template for managed Medicaid and, later, for the Coordinated Care Organization (CCO) model adopted under the ACA.',
    citation: 'Oregon Laws 1989, Ch. 836; 42 U.S.C. § 1315 waiver, approved 1993.',
    link: 'https://www.oregon.gov/oha/HSD/OHP/Pages/index.aspx',
    eli5: 'Oregon covered more poor adults on Medicaid, but only by ranking treatments and not paying for the ones the state couldn\'t afford. It was the first time a state said this out loud.'
  },
  {
    title: 'Vote-by-Mail',
    jurisdiction: 'Oregon · Measure 60',
    year: 1998,
    spectrum: -3,
    gesture: 'The first U.S. state to conduct every election entirely by mail. Turnout rose; costs fell; the model spread.',
    body: 'Oregon voters passed Measure 60 by 69–31 in 1998, requiring all elections to be conducted by mailed ballot. Ballots arrive two to three weeks before election day; voters return them by mail or drop box; signatures are verified against registration records. Washington followed in 2011, Colorado in 2013, Utah, Hawaii, and Vermont later. Oregon has never had a contested election-integrity lawsuit prevail against the system.',
    citation: 'Oregon Ballot Measure 60 (1998); ORS 254.470.',
    link: 'https://sos.oregon.gov/elections/Pages/voteinor.aspx',
    eli5: 'Every Oregon voter gets a ballot in the mail. They fill it out, sign the envelope, and drop it at a mailbox or a drop box. No lines. Washington, Colorado, and others copied the system.'
  },
  {
    title: 'Civil Unions Act — Act 91',
    jurisdiction: 'Vermont',
    year: 2000,
    spectrum: -3,
    gesture: 'The first U.S. state to recognize same-sex unions with all state-level rights and responsibilities of marriage. Fifteen years before *Obergefell*.',
    body: 'After the Vermont Supreme Court ruled in *Baker v. State* (1999) that same-sex couples were entitled to the same legal benefits as married couples, the legislature created a parallel institution — the civil union. Act 91 was signed by Governor Howard Dean in April 2000. It established every state-level marital right except the word "marriage" itself. A handful of states followed with civil unions or domestic partnerships before Massachusetts recognized same-sex marriage in 2004; Vermont upgraded civil unions to marriage by statute in 2009.',
    citation: 'Vermont Act 91 (2000); *Baker v. State*, 744 A.2d 864 (Vt. 1999).',
    link: 'https://legislature.vermont.gov/Documents/2000/Docs/ACTS/ACT091/ACT091%20As%20Enacted.pdf',
    eli5: 'Vermont was first to give same-sex couples every state right of marriage — but called it a "civil union," not marriage. Fifteen years before the Supreme Court made same-sex marriage national.'
  },
  {
    title: 'The Affordable Care Act',
    jurisdiction: 'Federal',
    year: 2010,
    spectrum: -3,
    gesture: 'Guaranteed issue, community rating, and subsidized marketplaces. The first federal law to forbid insurers from pricing on preexisting conditions.',
    body: 'The Patient Protection and Affordable Care Act passed the Senate 60–39 and House 219–212 with no Republican votes. It required insurers to sell to any applicant, banned lifetime caps, extended dependent coverage to age 26, created income-based subsidies on state and federal marketplaces, and expanded Medicaid to 138% of the federal poverty level. *NFIB v. Sebelius* (2012) made Medicaid expansion optional; 40 states and DC had adopted it by 2024.',
    citation: 'Public Law 111–148 (2010); *NFIB v. Sebelius*, 567 U.S. 519 (2012).',
    link: 'https://www.congress.gov/bill/111th-congress/house-bill/3590',
    eli5: 'Before the ACA, an insurer could refuse you for having had cancer. After it, they can\'t. Subsidies help lower earners buy a plan, and Medicaid covers people just above poverty in states that said yes.'
  },
  {
    title: 'Respect for Marriage Act',
    jurisdiction: 'Federal',
    year: 2022,
    spectrum: -3,
    gesture: 'Repealed DOMA, required every state to recognize valid same-sex and interracial marriages performed elsewhere, and codified *Obergefell* against a future Supreme Court reversal.',
    body: 'Signed by President Biden in December 2022, the RFMA repealed the 1996 Defense of Marriage Act and required each state to give full faith and credit to marriages legally performed in any other state. It passed 61–36 in the Senate after the Dobbs opinion raised explicit concerns — in Justice Thomas\'s concurrence — that *Obergefell* could be reconsidered.',
    citation: 'Public Law 117–228 (2022); *Dobbs v. Jackson Women\'s Health Org.*, 597 U.S. 215 (2022).',
    link: 'https://www.congress.gov/bill/117th-congress/house-bill/8404',
    eli5: 'Congress wrote same-sex and interracial marriage into federal law so that if the Supreme Court ever reversed its 2015 decision, the marriages would still be recognized state-to-state.'
  },
  {
    title: 'Inflation Reduction Act',
    jurisdiction: 'Federal',
    year: 2022,
    spectrum: -3,
    gesture: 'The first federal law to authorize Medicare to negotiate drug prices. Also the largest climate investment in U.S. history — $369B over ten years.',
    body: 'Passed 51–50 in the Senate via reconciliation (Vice President Harris breaking the tie). Medicare gained authority to negotiate prices on 10 high-spend drugs starting 2026, expanding annually. Insulin capped at $35/month for Medicare enrollees. The act extended ACA subsidies, added a 15% corporate minimum tax, and funded clean-energy tax credits projected to cut emissions by ~40% from 2005 levels by 2030.',
    citation: 'Public Law 117–169 (2022).',
    link: 'https://www.congress.gov/bill/117th-congress/house-bill/5376',
    eli5: 'Medicare can finally bargain on drug prices. Insulin is capped at $35 a month for seniors. And a wall of tax credits pays you to put a heat pump or an EV charger in.'
  },

  // ───────────── center-left (-2) ─────────────
  {
    title: 'Clean Air Act Amendments',
    jurisdiction: 'Federal',
    year: 1990,
    spectrum: -2,
    gesture: 'A cap-and-trade system for acid rain. Signed by a Republican president. The template every later climate bill would argue over.',
    body: 'The 1990 amendments created Title IV: a cap on SO₂ emissions from power plants, with tradable allowances. Emissions fell faster and cheaper than predicted. The amendments also phased out CFCs under the Montreal Protocol, tightened mobile-source emissions, and created the Title V operating permit program. Signed by George H.W. Bush, negotiated with a Democratic Congress.',
    citation: 'Public Law 101–549 (1990).',
    link: 'https://www.epa.gov/clean-air-act-overview/1990-clean-air-act-amendment-summary',
    eli5: 'Acid rain was killing Appalachian forests. The 1990 law set a national cap on the chemicals that cause it and let power plants trade permits under the cap. Emissions dropped, and the template became the blueprint for every climate bill after.'
  },
  {
    title: 'Family and Medical Leave Act',
    jurisdiction: 'Federal',
    year: 1993,
    spectrum: -2,
    gesture: 'Twelve weeks of unpaid, job-protected leave for birth, adoption, or the serious illness of a family member. The first bill President Clinton signed.',
    body: 'FMLA guarantees up to 12 weeks of unpaid leave per year to eligible employees (those at firms with 50+ employees, working 1,250+ hours). Covered events include the birth or adoption of a child, the serious illness of a spouse, child, or parent, and the worker\'s own serious illness. The 2008 NDAA added military-family leave. FMLA does not require pay — a gap some states and private employers closed later.',
    citation: 'Public Law 103–3 (1993); 29 U.S.C. §§ 2601–2654.',
    link: 'https://www.dol.gov/agencies/whd/fmla',
    eli5: 'If you have a baby, adopt, or need to care for a sick family member — or you get seriously sick yourself — your employer has to give you 12 weeks off and hold your job. Your pay isn\'t guaranteed, though. Later laws filled that gap in some states.'
  },
  {
    title: 'Don\'t Ask, Don\'t Tell Repeal Act',
    jurisdiction: 'Federal',
    year: 2010,
    spectrum: -2,
    gesture: 'Ended the seventeen-year ban on gay service members serving openly. Signed after the Pentagon\'s own study said repeal would not harm readiness.',
    body: 'The 1993 DADT policy forbade the military from asking about sexual orientation, but required discharge of any service member found to be gay. Roughly 13,000 service members were discharged under it. The 2010 repeal took effect September 2011 after certification by the President, Secretary of Defense, and Chairman of the Joint Chiefs that repeal would not harm readiness. Transgender service was added in 2016, rescinded in 2017, and partially restored in 2021.',
    citation: 'Public Law 111–321 (2010).',
    link: 'https://www.congress.gov/bill/111th-congress/house-bill/2965',
    eli5: 'For nearly two decades, gay service members could serve only if they stayed in the closet; 13,000 were kicked out for not. In 2010 Congress repealed that rule and gays could serve openly.'
  },
  {
    title: 'Dodd-Frank Wall Street Reform',
    jurisdiction: 'Federal',
    year: 2010,
    spectrum: -2,
    gesture: 'The response to 2008: a Consumer Financial Protection Bureau, designated systemically-important banks, the Volcker Rule on proprietary trading, and orderly-liquidation authority for failed banks.',
    body: 'Dodd-Frank created the CFPB (conceived by Elizabeth Warren), authorized the Financial Stability Oversight Council to designate non-banks as systemically important, imposed enhanced capital and stress-testing on large banks, and required most swaps to be centrally cleared. The 2018 Economic Growth, Regulatory Relief and Consumer Protection Act rolled back enhanced oversight for banks under $250B — an off-ramp that later factored into the 2023 regional-bank failures.',
    citation: 'Public Law 111–203 (2010); Public Law 115–174 (2018).',
    link: 'https://www.congress.gov/bill/111th-congress/house-bill/4173',
    eli5: 'After 2008 Washington wrote new rules: a consumer watchdog bureau, annual stress tests on the biggest banks, and a legal way to wind down a failing one without taxpayers writing a check. In 2018 Congress loosened some of it for mid-sized banks.'
  },

  // ───────────── moderate left (-1) ─────────────
  {
    title: 'Americans with Disabilities Act',
    jurisdiction: 'Federal',
    year: 1990,
    spectrum: -1,
    gesture: 'Banned disability discrimination in employment, public services, and public accommodations. Made curb cuts, ramps, and captioning the default, not the favor.',
    body: 'Signed by George H.W. Bush after a disability-rights coalition staged the Capitol Crawl. Title I covers employment at firms with 15+ employees; Title II covers state and local government; Title III covers private businesses open to the public; Title IV covers telecommunications. The 2008 ADA Amendments Act broadened the definition of "disability" after Supreme Court decisions had narrowed it.',
    citation: 'Public Law 101–336 (1990); Public Law 110–325 (2008).',
    link: 'https://www.ada.gov/',
    eli5: 'Businesses, government offices, and most employers have to make reasonable accommodations for people with disabilities — and most new construction has to be accessible from the start. It\'s why ramps and curb cuts are everywhere.'
  },
  {
    title: 'Violence Against Women Act',
    jurisdiction: 'Federal',
    year: 1994,
    spectrum: -1,
    gesture: 'A federal framework for domestic-violence prosecution, shelters, and the VAWA civil-remedy provision. Bipartisan, then contested, then bipartisan again.',
    body: 'Title IV of the 1994 Crime Bill. VAWA funded shelters, rape crisis centers, and police training; created federal crimes for crossing state lines to commit domestic violence; and permitted tribal courts to prosecute certain non-Indian offenders (a provision added in 2013). *United States v. Morrison* (2000) struck down the civil-remedy provision as exceeding Commerce Clause authority. Reauthorized in 2000, 2005, 2013, and 2022.',
    citation: 'Public Law 103–322, Title IV (1994); *United States v. Morrison*, 529 U.S. 598 (2000).',
    link: 'https://www.justice.gov/ovw/about-office',
    eli5: 'The federal government put money and rules behind stopping domestic violence: funding for shelters, new federal crimes for domestic abusers who cross state lines, and training for police. The Supreme Court struck down one piece in 2000.'
  },
  {
    title: 'Children\'s Health Insurance Program',
    jurisdiction: 'Federal',
    year: 1997,
    spectrum: -1,
    gesture: 'A Medicaid-adjacent block grant to cover kids in families that earn too much for Medicaid and too little for private insurance. Kennedy and Hatch wrote it together.',
    body: 'Enacted as Title XXI of the Social Security Act in the Balanced Budget Act of 1997. Each state designs its program subject to federal minimums. By 2023 roughly 7M children were enrolled. CHIP has been reauthorized repeatedly, sometimes after lapses — including a 114-day gap in late 2017 during a federal-funding standoff.',
    citation: 'Public Law 105–33, Title IV (1997); 42 U.S.C. §§ 1397aa–1397mm.',
    link: 'https://www.medicaid.gov/chip/index.html',
    eli5: 'A lot of working-class families made too much for Medicaid but couldn\'t afford insurance for their kids. CHIP covers those kids. Teddy Kennedy and Orrin Hatch — a liberal and a conservative — wrote it together.'
  },

  // ───────────── center (0) ─────────────
  {
    title: 'USMCA',
    jurisdiction: 'Federal',
    year: 2020,
    spectrum: 0,
    gesture: 'Replaced NAFTA. Tightened rules-of-origin for autos to qualify for zero tariffs; added a wage floor of $16/hour for 40–45% of a vehicle\'s content.',
    body: 'The United States-Mexico-Canada Agreement took effect July 2020 with broad bipartisan support. The most substantive changes: stricter auto rules-of-origin, a labor-value-content requirement intended to pull auto production away from low-wage areas of Mexico, new protections for digital trade, updated IP rules, and a sunset clause requiring review every six years.',
    citation: 'Public Law 116–113 (2020).',
    link: 'https://ustr.gov/trade-agreements/free-trade-agreements/united-states-mexico-canada-agreement',
    eli5: 'NAFTA got rewritten. Cars now have to be built with more parts from North America — and a chunk of the labor has to pay at least $16 an hour — to ship tariff-free between the three countries.'
  },
  {
    title: 'Infrastructure Investment and Jobs Act',
    jurisdiction: 'Federal',
    year: 2021,
    spectrum: 0,
    gesture: '$550 billion in new spending on roads, bridges, transit, broadband, water, and the grid. Passed the Senate 69–30.',
    body: 'The Bipartisan Infrastructure Law authorized ~$1.2 trillion total ($550B new), including $110B for roads and bridges, $66B for rail, $65B for broadband, $55B for water infrastructure including lead pipe replacement, and $73B for power grid upgrades. The EV charging build-out (NEVI) and the Build America, Buy America provisions were embedded. 19 Senate Republicans voted yes.',
    citation: 'Public Law 117–58 (2021).',
    link: 'https://www.congress.gov/bill/117th-congress/house-bill/3684',
    eli5: 'A trillion-plus dollars for roads, bridges, rural broadband, lead-pipe replacement, EV chargers, and the electric grid. Nineteen Senate Republicans voted for it.'
  },

  // ───────────── moderate right (+1) ─────────────
  {
    title: 'Telecommunications Act',
    jurisdiction: 'Federal',
    year: 1996,
    spectrum: 1,
    gesture: 'Broke down the walls between local phone, long-distance, cable, and broadcast. Also let a single company own far more radio stations — and one did.',
    body: 'The first major overhaul of U.S. telecom law since 1934. The act deregulated cross-ownership between local and long-distance telephony, allowed cable/phone convergence, and — critically — raised the national radio ownership cap. Clear Channel (later iHeart) went from ~40 stations to over 1,200, reshaping American radio. Section 230, giving platforms broad immunity for user-generated content, was also enacted here.',
    citation: 'Public Law 104–104 (1996); 47 U.S.C. § 230.',
    link: 'https://www.congress.gov/bill/104th-congress/senate-bill/652',
    eli5: 'A 1996 law knocked down the walls between cable, phones, and broadcasters — and lifted the cap on how many radio stations one company could own. One company went from 40 stations to over a thousand. Section 230, which shields websites from most suits over what users post, also came from this bill.'
  },
  {
    title: 'No Child Left Behind',
    jurisdiction: 'Federal',
    year: 2001,
    spectrum: 1,
    gesture: 'Standardized testing every year in grades 3–8, tied to federal funding. Bush and Kennedy co-sponsored.',
    body: 'NCLB required states to test students annually in reading and math, disaggregate results by subgroup, and subject underperforming schools to escalating consequences — public reporting, choice, tutoring, restructuring. Schools were to hit 100% proficiency by 2014. By 2011 the Obama administration began issuing waivers as that target came into view; ESSA replaced NCLB in 2015 with more state discretion.',
    citation: 'Public Law 107–110 (2001).',
    link: 'https://www2.ed.gov/nclb/landing.jhtml',
    eli5: 'Starting in 2002, every kid in grades 3–8 got tested every year. Schools that didn\'t improve fast enough faced takeovers. The target was 100% proficient by 2014; nobody hit it; Congress replaced the law in 2015.'
  },

  // ───────────── center-right (+2) ─────────────
  {
    title: 'North American Free Trade Agreement',
    jurisdiction: 'Federal',
    year: 1993,
    spectrum: 2,
    gesture: 'Zero-tariff trade with Canada and Mexico. Signed by Clinton over labor opposition; passed the House with a 234–200 majority built mostly from Republicans.',
    body: 'NAFTA took effect January 1994. It eliminated tariffs on most goods, opened cross-border services and investment, and created dispute-resolution panels. The auto, agriculture, and electronics sectors reorganized along trilateral supply chains. Manufacturing employment in the U.S. declined over the following decade — debates continue about how much is attributable to NAFTA, China\'s WTO accession, or automation. Replaced by USMCA in 2020.',
    citation: 'Public Law 103–182 (1993).',
    link: 'https://www.congress.gov/bill/103rd-congress/house-bill/3450',
    eli5: 'U.S., Canadian, and Mexican goods started moving across the three borders without tariffs in 1994. Supply chains rewired. How much American manufacturing job loss NAFTA caused is still argued about thirty years later.'
  },
  {
    title: '1994 Crime Bill',
    jurisdiction: 'Federal',
    year: 1994,
    spectrum: 2,
    gesture: 'The Violent Crime Control and Law Enforcement Act. 100,000 new police officers, a federal three-strikes rule, a federal assault-weapons ban, and $9.7B for prisons.',
    body: 'The largest crime bill in U.S. history. Funded the COPS program that put 100,000 officers on the streets. Created federal three-strikes life sentences, expanded federal death-penalty eligibility to 60 offenses, funded prison construction, imposed a 10-year ban on certain semi-automatic rifles (expired 2004), and enacted truth-in-sentencing incentives that encouraged states to require 85%-of-sentence rules. Senator Biden was the floor manager; Senator Sanders voted for it; Representative Lewis voted against.',
    citation: 'Public Law 103–322 (1994).',
    link: 'https://www.congress.gov/bill/103rd-congress/house-bill/3355',
    eli5: 'A huge 1994 law pushed more cops onto the streets and more people into prison for longer. It also banned certain assault-style rifles for ten years. Joe Biden ran it through the Senate; Bernie Sanders voted yes; John Lewis voted no.'
  },
  {
    title: 'Welfare Reform — PRWORA',
    jurisdiction: 'Federal',
    year: 1996,
    spectrum: 2,
    gesture: 'Ended AFDC. Replaced it with Temporary Assistance for Needy Families: a block grant, a five-year lifetime cap, and work requirements.',
    body: 'The Personal Responsibility and Work Opportunity Reconciliation Act replaced open-ended federal welfare with a capped block grant to states (TANF). Recipients had to meet work-participation rates; lifetime benefits were limited to 60 months. Food-stamp benefits for most legal immigrants were cut. Clinton signed the third version after vetoing the first two; caseloads dropped sharply, though child poverty reductions flattened in the 2000s and during the Great Recession TANF proved a weak automatic stabilizer.',
    citation: 'Public Law 104–193 (1996).',
    link: 'https://www.congress.gov/bill/104th-congress/house-bill/3734',
    eli5: 'The federal cash-welfare program got rewritten: a five-year lifetime cap, work requirements, and money sent to states as a block grant. Caseloads dropped. How well it worked in a recession is argued over.'
  },

  // ───────────── right (+3) ─────────────
  {
    title: 'Defense of Marriage Act',
    jurisdiction: 'Federal',
    year: 1996,
    spectrum: 3,
    gesture: 'Defined marriage as one man, one woman, for every federal purpose. Allowed states to refuse recognition of same-sex marriages from other states. Signed by Clinton.',
    body: 'DOMA had two operative sections. Section 2 allowed states to refuse recognition of same-sex marriages from other states, carving an exception to the Full Faith and Credit Clause. Section 3 defined marriage for ~1,100 federal statutes — tax, Social Security, immigration — as opposite-sex only. Section 3 was struck down in *United States v. Windsor* (2013); Section 2 was rendered moot by *Obergefell* (2015) and formally repealed by the Respect for Marriage Act (2022).',
    citation: 'Public Law 104–199 (1996); *United States v. Windsor*, 570 U.S. 744 (2013).',
    link: 'https://www.congress.gov/bill/104th-congress/house-bill/3396',
    eli5: 'DOMA said the federal government only recognized opposite-sex marriages — and states could ignore same-sex ones from elsewhere. Courts struck the first part down in 2013; the second part was repealed in 2022.'
  },
  {
    title: 'Measure 11 — mandatory minimums',
    jurisdiction: 'Oregon · Ballot measure',
    year: 1994,
    spectrum: 3,
    gesture: 'Twenty-one crimes, fixed sentences, no judicial discretion, no early release, no conversion for good behavior. Applies to 15-year-olds as adults.',
    body: 'Measure 11 passed 66–34 and went into effect April 1995. It established fixed mandatory sentences for 21 violent and sex offenses — ranging from 70 months (second-degree assault) to 300 months (first-degree murder) — with no possibility of early release and automatic adult prosecution for offenders 15 and older. Oregon\'s prison population roughly doubled in the decade that followed. Voters declined to soften it in 2000 (Measure 94).',
    citation: 'Oregon Ballot Measure 11 (1994); ORS 137.700.',
    link: 'https://ballotpedia.org/Oregon_Measure_11,_Mandatory_Minimum_Sentences_Initiative_(1994)',
    eli5: 'Twenty-one serious crimes in Oregon come with a fixed sentence. Judges can\'t go under. Teens as young as 15 get tried as adults. Oregon\'s prison population roughly doubled after it passed.'
  },
  {
    title: 'USA PATRIOT Act',
    jurisdiction: 'Federal',
    year: 2001,
    spectrum: 3,
    gesture: 'Passed 45 days after September 11. National security letters, roving wiretaps, Section 215 business records, Section 702 — the legal scaffolding of the post-9/11 surveillance state.',
    body: 'Passed the House 357–66, the Senate 98–1 (Feingold, alone). The act expanded FBI National Security Letter authority, lowered the wall between intelligence and criminal investigations, authorized roving wiretaps, and, under Section 215, permitted collection of "any tangible thing" relevant to a terrorism investigation — the basis later used for bulk telephone-metadata collection, revealed in 2013 and substantially curtailed by the USA FREEDOM Act in 2015.',
    citation: 'Public Law 107–56 (2001); Public Law 114–23 (2015).',
    link: 'https://www.congress.gov/bill/107th-congress/house-bill/3162',
    eli5: 'Right after 9/11 Congress handed the FBI and NSA sweeping new surveillance powers. Section 215 was later used to collect nearly every American phone call\'s metadata. That specific use was pulled back in 2015 once Snowden made it public.'
  },
  {
    title: 'Bush Tax Cuts — EGTRRA & JGTRRA',
    jurisdiction: 'Federal',
    year: 2001,
    spectrum: 3,
    gesture: 'Ten-year cuts to every marginal rate, the child tax credit doubled, the estate tax phased out. Passed through reconciliation with a sunset.',
    body: 'The Economic Growth and Tax Relief Reconciliation Act (2001) cut the top marginal rate from 39.6% to 35%, doubled the child tax credit to $1,000, and phased out the estate tax through 2010. JGTRRA (2003) accelerated the rate cuts and dropped long-term capital gains to 15%. Both sunset at the end of 2010; the American Taxpayer Relief Act of 2012 made most of them permanent for earners under $400K. The 2017 Tax Cuts and Jobs Act is a lineal descendant.',
    citation: 'Public Law 107–16 (2001); Public Law 108–27 (2003).',
    link: 'https://www.congress.gov/bill/107th-congress/house-bill/1836',
    eli5: 'Two rounds of tax cuts in 2001 and 2003 lowered every bracket, doubled the child credit, and cut the tax on stock gains. They were supposed to expire at the end of 2010. Most were made permanent in 2012.'
  },

  // ───────────── conservative (+4) ─────────────
  {
    title: 'Partial-Birth Abortion Ban Act',
    jurisdiction: 'Federal',
    year: 2003,
    spectrum: 4,
    gesture: 'The first federal statute to ban a specific abortion procedure. Upheld by the Supreme Court in *Gonzales v. Carhart*, with no health-of-the-mother exception.',
    body: 'The act criminalized intact dilation and extraction (D&X) performed after fetal viability. The Supreme Court had struck down a similar Nebraska statute three years earlier in *Stenberg v. Carhart* (2000). In *Gonzales v. Carhart* (2007) a reshaped Court — with Justice Alito replacing O\'Connor — upheld the federal version 5–4, holding that the statute was not facially unconstitutional and that Congress could override the absence of a health exception where medical authority was divided.',
    citation: 'Public Law 108–105 (2003); *Gonzales v. Carhart*, 550 U.S. 124 (2007).',
    link: 'https://www.congress.gov/bill/108th-congress/senate-bill/3',
    eli5: 'Congress banned one specific late-term abortion procedure in 2003. The Supreme Court upheld it in 2007 — a reversal from 2000, after Justice Alito replaced Justice O\'Connor.'
  },
  {
    title: 'Arizona SB 1070',
    jurisdiction: 'Arizona',
    year: 2010,
    spectrum: 4,
    gesture: 'Required police to determine the immigration status of anyone they had "reasonable suspicion" was undocumented. Criminalized lacking immigration papers at the state level.',
    body: 'The Support Our Law Enforcement and Safe Neighborhoods Act required state and local police to check immigration status during any lawful stop where suspicion existed, made it a state crime to fail to carry federal registration documents, and criminalized soliciting work as an undocumented person. *Arizona v. United States* (2012) struck down three of its four central provisions as federally preempted but upheld the status-check requirement. Several other states — Alabama, Georgia, South Carolina, Utah — passed similar laws that were likewise constrained.',
    citation: 'Arizona Session Laws 2010, Ch. 113; *Arizona v. United States*, 567 U.S. 387 (2012).',
    link: 'https://www.azleg.gov/legtext/49leg/2r/bills/sb1070s.pdf',
    eli5: 'Arizona told its police to ask about immigration status on any stop and made it a state crime not to have papers. The Supreme Court threw out most of the law in 2012 but left the status-check part in place.'
  },

  // ───────────── far right (+5) ─────────────
  {
    title: 'Texas Heartbeat Act — SB 8',
    jurisdiction: 'Texas',
    year: 2021,
    spectrum: 5,
    gesture: 'Banned abortion after ~6 weeks. Enforced not by the state but by private civil suits — anyone could sue anyone who aided an abortion for $10,000 plus fees. The bounty design was built to evade pre-enforcement challenge.',
    body: 'SB 8 took effect September 2021. By delegating enforcement exclusively to private plaintiffs, Texas sought to defeat the standard sovereign-immunity framework for constitutional challenges — there was no state official to sue before the fact. The Supreme Court declined to block the law in *Whole Woman\'s Health v. Jackson* (2021). After *Dobbs* a year later Texas banned abortion outright through a trigger law; SB 8\'s bounty mechanism has since been cited as a template in other state legislative drafts.',
    citation: 'Tex. Health & Safety Code §§ 171.201–171.212 (2021); *Whole Woman\'s Health v. Jackson*, 595 U.S. 30 (2021).',
    link: 'https://capitol.texas.gov/tlodocs/87R/billtext/html/SB00008F.HTM',
    eli5: 'Texas banned abortion after six weeks but didn\'t use police to enforce it. Anyone anywhere could sue anyone who helped, for $10,000. The design made it hard to challenge in court before it took effect.'
  },
  {
    title: 'Florida HB 1557 — "Don\'t Say Gay"',
    jurisdiction: 'Florida',
    year: 2022,
    spectrum: 5,
    gesture: 'Banned classroom instruction on sexual orientation or gender identity in grades K–3. Expanded to all grades in 2023.',
    body: 'The Parental Rights in Education Act prohibited classroom instruction on sexual orientation or gender identity in K–3, and required any such instruction at other levels to be "age-appropriate." A 2023 expansion rolled restrictions through grade 12. Parents were given a private right of action. After litigation and a 2024 settlement with the state, the Florida Department of Education clarified that incidental mention — a teacher with a same-sex spouse, a library book — was not barred. A dozen states introduced similar bills.',
    citation: 'Florida Laws 2022, Ch. 2022-22; Florida Administrative Code 6A-10.081 (amended 2023).',
    link: 'https://www.flsenate.gov/Session/Bill/2022/1557',
    eli5: 'Florida told teachers they couldn\'t talk about being gay or trans in class — first in K-3, later through high school. Parents could sue schools that did. A 2024 settlement narrowed the rule back to formal instruction, not stray mentions.'
  },
  {
    title: 'Florida Stop WOKE Act',
    jurisdiction: 'Florida · HB 7',
    year: 2022,
    spectrum: 5,
    gesture: 'Banned workplace DEI trainings and university instruction that could make someone feel "guilt, anguish, or psychological distress" about their race, sex, or national origin.',
    body: 'The Individual Freedom Act listed eight prohibited concepts (members of one race are morally superior, unconscious bias makes someone racist, etc.) and forbade employers, public schools, and universities from teaching endorsement of them. The Eleventh Circuit affirmed in 2024 an injunction blocking enforcement against private employers on First Amendment grounds. The higher-education provisions were paired with SB 266 (2023), eliminating state DEI offices on public campuses.',
    citation: 'Florida Laws 2022, Ch. 2022-72; *Honeyfund.com v. Governor*, 94 F.4th 1272 (11th Cir. 2024).',
    link: 'https://www.flsenate.gov/Session/Bill/2022/7',
    eli5: 'Florida listed eight ideas it said schools and employers couldn\'t endorse — roughly, modern DEI concepts. A federal court blocked the employer part on free-speech grounds. The higher-ed part survives.'
  },
  {
    title: 'Texas SB 14 — ban on gender-affirming care for minors',
    jurisdiction: 'Texas',
    year: 2023,
    spectrum: 5,
    gesture: 'Prohibited puberty blockers, hormone therapy, and surgery for transgender minors. Required a one-year taper for kids already in treatment. Providers lose their license.',
    body: 'SB 14 took effect September 2023. It forbade physicians from providing gender-affirming medical care to anyone under 18, except for a narrow set of intersex conditions, and required weaning off existing care. The Texas Supreme Court upheld the law in *Loe v. Texas* (2024). By the end of 2024 more than 25 states had enacted similar restrictions. *United States v. Skrmetti* at the U.S. Supreme Court tested the constitutionality of state-level bans.',
    citation: 'Texas Laws 2023, Ch. 804 (SB 14); *Loe v. Texas*, 691 S.W.3d 421 (Tex. 2024).',
    link: 'https://capitol.texas.gov/tlodocs/88R/billtext/html/SB00014F.HTM',
    eli5: 'Texas made it illegal to prescribe puberty blockers or hormones, or perform related surgery, on anyone under 18 who is trans. Kids already in treatment had to stop. Over half the states now have similar laws.'
  },

  // ───────────── additional diversified picks ─────────────
  {
    title: 'Ranked-Choice Voting',
    jurisdiction: 'Maine · Question 5',
    year: 2016,
    spectrum: -3,
    gesture: 'The first U.S. state to use ranked-choice voting in federal elections. Voters rank; last-place candidates get eliminated; ballots transfer until someone has a majority.',
    body: 'Maine Question 5 passed in November 2016 by 52–48. The legislature tried to repeal it before it took effect; a 2018 people\'s veto restored it. The first federal use came in the 2018 U.S. House race in Maine\'s Second District, where Jared Golden won after second-round reallocation of a third-party candidate\'s ballots. Alaska adopted a top-four primary and RCV general in 2020; New York City, Minneapolis, San Francisco, and a growing list of cities use RCV for local elections.',
    citation: 'Maine Revised Statutes Title 21-A, § 723-A (2016).',
    link: 'https://www.maine.gov/sos/cec/elec/upcoming/rcv.html',
    eli5: 'Maine voters in 2016 said: rank your candidates instead of picking one. The last-place candidate gets eliminated and ballots transfer to their second choice. Repeat until someone has a real majority. The legislature tried to kill it; voters put it back.'
  },
  {
    title: 'Act 10 — public-sector bargaining',
    jurisdiction: 'Wisconsin',
    year: 2011,
    spectrum: 3,
    gesture: 'Stripped most collective-bargaining rights from public-sector unions. Teachers, snowplow drivers, and nurses kept the right to bargain base salary only — not benefits, not working conditions, not hours.',
    body: 'Signed by Governor Scott Walker in March 2011, Act 10 restricted bargaining for most public employees to wages capped at CPI, required annual recertification of unions with a majority of all eligible members (not just those voting), barred payroll dues deduction, and eliminated fair-share agreements. State capitol protests drew up to 100,000 demonstrators; fourteen Senate Democrats fled the state to deny quorum; a 2012 recall election of Walker failed. Public-sector union membership in Wisconsin fell by more than half within a decade.',
    citation: 'Wisconsin Act 10 (2011); *Madison Teachers Inc. v. Walker*, 358 Wis.2d 1 (2014).',
    link: 'https://docs.legis.wisconsin.gov/2011/related/acts/10',
    eli5: 'Wisconsin\'s 2011 law cut most bargaining rights for public-sector unions. They could still bargain over base pay, but not benefits, hours, or working conditions. Huge protests. Senate Democrats fled the state. Within a decade union membership fell by half.'
  },
  {
    title: 'Human Life Protection Act — HB 314',
    jurisdiction: 'Alabama',
    year: 2019,
    spectrum: 5,
    gesture: 'Banned nearly all abortion with no exceptions for rape or incest. Designed to force the Supreme Court to reconsider *Roe*. Three years later *Dobbs* arrived and the law took effect.',
    body: 'Signed by Governor Kay Ivey in May 2019, HB 314 made it a Class A felony — up to 99 years in prison — for a physician to perform an abortion except to prevent serious health risk to the mother. Sponsors said publicly that the statute was drafted to provoke *Roe\'s* reversal. It was enjoined pre-enforcement. After *Dobbs v. Jackson* in June 2022, the injunction was lifted and Alabama became one of the most restrictive abortion jurisdictions in the country. A 2024 Alabama Supreme Court ruling extended the state wrongful-death statute to frozen embryos, temporarily halting IVF until a narrow legislative fix.',
    citation: 'Alabama Act 2019-189 (HB 314); *Dobbs v. Jackson Women\'s Health Org.*, 597 U.S. 215 (2022); *LePage v. Center for Reproductive Medicine*, ___ So.3d ___ (Ala. 2024).',
    link: 'https://alison.legislature.state.al.us/files/Session/2019RS/HB314-enr.pdf',
    eli5: 'Alabama passed a near-total abortion ban in 2019 — no rape or incest exception — as a deliberate test case to overturn Roe v. Wade. Three years later the Supreme Court overturned Roe and the law took effect.'
  }
];

// Sort left→right by spectrum, ties broken by year ascending.
const sorted = [...raw].sort((a, b) => {
  if (a.spectrum !== b.spectrum) return a.spectrum - b.spectrum;
  return a.year - b.year;
});

export const flat = sorted.map((s, i) => {
  const num = String(i + 1).padStart(2, '0');
  return { ...s, num, orderIndex: i };
});

export const SPECTRUM_MIN = -5;
export const SPECTRUM_MAX = 5;
export const YEAR_MIN = Math.min(...flat.map((s) => s.year));
export const YEAR_MAX = Math.max(...flat.map((s) => s.year));

export function next(num) {
  const i = flat.findIndex((s) => s.num === num);
  return i >= 0 && i < flat.length - 1 ? flat[i + 1] : null;
}

export function prev(num) {
  const i = flat.findIndex((s) => s.num === num);
  return i > 0 ? flat[i - 1] : null;
}
