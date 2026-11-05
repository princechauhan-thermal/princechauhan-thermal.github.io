window.SITE = {
  person: {
    name: "Prince Chauhan",
    role: "Thermal engineer",
    location: "Bengaluru",
    email: "princechauhan92652@gmail.com",
    linkedin: "https://www.linkedin.com/in/prince-chauhan-470031166/",
    resume: "assets/Prince_Chauhan_Resume.pdf",
    lede: [
      "Liquid-cooled battery and charger systems holding multi-pack platforms in their window from −10 to 55 °C, at supercharge rates."
    ],
    envelope: { low: "−10 °C", high: "+55 °C", span: "65 °C" }
  },

  // About me: the first thing on the page (Prince, 2026-11-06).
  about: [
    "Thermal engineer at SUN Mobility since 2023, designing battery and charger thermal management (BTMS and CTMS) for battery-swap and fast-charging stations from 20 to 110 kWh.",
    "I size cooling from heat-load first principles, prove it in the chamber and on site, and write the control logic that runs it."
  ],

  // Challenges conquered: each row is a problem the hardware met and what
  // came of it. Every claim is one already made in the projects below.
  challenges: [
    { challenge: "Hold multi-pack batteries in their window through a supercharge at 50 °C ambient", outcome: "25–35 °C held · 100+ swaps · zero thermal faults" },
    { challenge: "A supplied chiller delivering well under its rated capacity", outcome: "Caught by measurement; loop re-sized from first principles for ~18% lower thermal resistance" },
    { challenge: "Charger rectifiers derating above 50 °C, faster than their datasheet", outcome: "Found on test and fed back to the supplier" },
    { challenge: "Control logic that had to be right before any hardware existed", outcome: "Four-mode scheme verified on an ECU simulator; faults found pre-hardware" }
  ],

  // Working towards: direction, not claims. The one tool named is the one
  // Prince confirmed using (Siemens NX Space Systems Thermal).
  next: {
    title: "Working towards intelligent thermal systems",
    lines: [
      "Thermal systems that sense, predict and adapt: control driven by live data rather than fixed set-points.",
      "The same first-principles discipline applied to spacecraft thermal control: orbital thermal modelling in Siemens NX Space Systems Thermal, building on MITx Astronautics & Human Spaceflight."
    ]
  },

  projects: [
    {
      code: "TH-01",
      title: "Supercharge architecture",
      sentence: "Held packs at 25–35 °C through a 110 kWh supercharge at peak-summer ambient — 100-plus swaps, no thermal fault.",
      role: "System architecture, validation",
      scale: "650 kg packs · 110 kWh · 50 °C",
      outcome: "100+ swaps, zero faults",
      year: "2024",
      figs: [
        { n: 1, src: "assets/media/prawaas-loop.svg", title: "Supercharge coolant loop", caption: "Coolant loop with DAQ instrumentation" }
      ]
    },
    {
      code: "TH-02",
      title: "Liquid-cooled charger & battery",
      sentence: "One coolant-loop architecture for battery packs and charger rectifiers, sized from heat-load first principles; testing caught a chiller under its rated capacity and rectifiers derating early above 50 °C.",
      role: "Thermal design, loop sizing, supplier validation",
      scale: "20–110 kWh · −10 to 55 °C",
      outcome: "~18% thermal-resistance cut",
      year: "2023–2025",
      figs: [
        { n: 2, src: "assets/media/architecture-loop.svg", title: "BTMS/CTMS architecture", caption: "Platform coolant-loop topology" },
        { n: 3, src: "assets/media/btms-capacity.svg", title: "Chiller capacity", caption: "Measured vs rated, normalised" },
        { n: 4, src: "assets/media/ctms-loop.svg", title: "Charger cooling loop", caption: "Redundant-pump liquid loop" },
        { n: 5, src: "assets/media/rectifier-derating.svg", title: "Rectifier derating", caption: "Measured vs datasheet, normalised" }
      ]
    },
    {
      code: "TH-03",
      title: "Air-cooled chargers",
      // Only the award is stated: Prince chose not to publish numbers here.
      sentence: "An air-cooled charging station, taken from proof of concept to station design.",
      role: "Air-cool station & POC team",
      scale: "Charging station",
      outcome: "Best Team Award, Q3 FY2025–26",
      year: "2025",
      figs: []
    },
    {
      code: "TH-04",
      title: "Control systems & SORs",
      sentence: "The governing spec and a four-mode control scheme, verified against an ECU simulator before hardware.",
      role: "Spec owner, simulator author",
      scale: "BTMS + CTMS · CAN 2.0",
      outcome: "Pre-hardware fault detection",
      year: "2024",
      figs: [
        { n: 6, src: "assets/media/sor-states.svg", title: "Operating-mode state machine", caption: "Four modes plus fault state" }
      ]
    }
  ],

  earlier: [
    { title: "Formula Bharat chassis optimisation", clause: "National win, chassis FEA, 15% mass cut", year: "2018–2022" },
    { title: "3 kW solar-tree system", clause: "~50% cost, ~80% footprint vs fixed array", year: "2022–2023" }
  ],

  // Straight from the résumé. There is no 2022–23 employment row: the solar-tree
  // build was an independent project and is listed under Earlier, not here.
  experience: [
    { year: "2023–present", role: "Thermal engineer", org: "SUN Mobility", place: "Electric Vehicles Dept · Bengaluru" },
    { year: "2018–2022", role: "Simulation engineer", org: "GTU Motorsports", place: "Formula Bharat · Gujarat" }
  ],

  patents: [
    { number: "IN 202441065103", title: "Thermal management of chargers", status: "Filed" },
    { number: "IN 202441065106", title: "Thermal management of energy storage devices", status: "Filed" }
  ],
  patentNote: "Covers India's first automated multi-pack thermal management system for a swapping station.",
  awards: [
    { year: "2025", name: "InvenZone Award", note: "Contribution to intellectual property" },
    { year: "2025", name: "Best Team Award", note: "Air-cool station & POC team" }
  ],

  // Photographs, not figures — so no FIG. number. The certificate is cropped
  // above its signatory block: the signature, seal and signing colleague's name
  // are out of frame rather than painted over.
  awardMedia: [
    {
      src: "assets/media/award-certificate.jpg",
      tag: "Best Team Award",
      caption: "Air-cool station & POC team, Q3 FY2025–26",
      alt: "SUN Mobility certificate of recognition, Best Team Award, awarded to Prince Chauhan"
    },
    {
      src: "assets/media/award-trophy.jpg",
      tag: "InvenZone Award",
      caption: "Awarded for intellectual-property contribution",
      alt: "InvenZone Awards 2025 trophy awarded to Prince Chauhan"
    }
  ],

  // His own words, from the high-ambient work. Kept because a stated engineering
  // position is the one thing a generic portfolio cannot fake.
  position: "A design that doesn't violate thermodynamics will hold at higher ambient. The answer is usually clarity, not complexity.",

  skills: [
    { domain: "Thermal design", tokens: ["BTMS", "CTMS", "heat-load estimation", "coolant-loop sizing", "radiator/chiller selection", "thermal-runaway prevention"] },
    { domain: "Simulation", tokens: ["ANSYS Fluent", "Siemens NX Space Systems Thermal (spacecraft)", "SolidWorks", "PTC Creo", "FEA"] },
    { domain: "Test & validation", tokens: ["chamber testing (−10 to 60 °C)", "IR thermography", "DAQ", "DOE", "RCA"] },
    { domain: "Systems & embedded", tokens: ["ECU simulation", "BMS architecture", "state-machine design", "CAN protocol"] }
  ],

  education: [
    { year: "2022", qual: "B.E., Automobile Engineering", inst: "LJIET, Gujarat", focus: "Heat transfer · Thermodynamics · Fluid mechanics" },
    { year: "2024", qual: "Astronautics & Human Spaceflight", inst: "MITx", focus: "" }
  ],

  contact: {
    availability: "Open to thermal roles in aerospace and spacecraft.",
    updated: "2026-11"
  },

  // The portrait enters as the drawing set's TITLE BLOCK — the cell that records
  // who drew the sheets — rather than as a seventh figure. That is why it carries
  // an attribution tag and no FIG. number. If the file is absent the whole block
  // is skipped at runtime, so the page never shows a hole or a broken image.
  portrait: {
    src: "assets/media/portrait.jpg",
    tag: "Drawn by",
    name: "Prince Chauhan",
    caption: "As built — to scale.",
    alt: "Portrait of Prince Chauhan, thermal engineer"
  }
};
