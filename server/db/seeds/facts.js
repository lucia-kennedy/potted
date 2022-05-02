exports.seed = (knex) => {
  return knex('facts').insert([
      {
        id: 1,
        fact: 'Did you know that most house plants have their roots in the tropics or subtropical regions? They are used to growing under the canopies of tall trees, which explains why they acclimatise to living under the shade of a roof in your office so well.'
      },
      {
        id: 2,
        fact: 'The practice of indoor gardening dates back to ancient times.  Initially, in ancient Egyptian, Indian and Chinese civilizations pot plants were used in outdoor settings in courtyards.'
      },
      {
        id: 3,
        fact: 'While plants cannot clean up after themselves, they are proven to be incredible cleaners. Of air, that is! A study by NASA concluded that indoor plants help to purify the air by removing volatile compounds, including carbon dioxide. These compounds, commonly found in paints, furniture, printers, cleaning supplies and even dry-cleaned clothes can have dangerous effects on our health. Indoor plants are accustomed to living in areas of low light and are therefore efficient at capturing light.'
      },
      {
        id: 4,
        fact: 'Indoor plants have an amazing ability to relieve stress. According to the ABC, urban dwellers spend 90 per cent of their time in indoor environments: resulting in a high level of exposure to indoor contaminant compounds.  This can result in increased stress levels.  Plants can reduce stress and improve our mental wellbeing.'
      },
      {
        id: 5,
        fact: 'While there is no motivation quite like Friday drinks for improved productivity among staff, one asset in the office comes close… indoor plants!  When you are in close proximity to plants, your brain is relaxed and you are able to think and communicate more clearly.  Indoor plants at work positively affect our brains by nurturing creativity and building memory retention by as much as 20 percent. With increases in creativity and memory power, its only natural that workers also show improved productivity.'
      },
      {
        id: 6,
        fact: 'From fax machines, to printers, to phone chatter to tea room clinks, offices can be noisy and distracting. According to CNN, if you work in an office and are frequently in front of computers or near printers, the peace lily plant can benefit your health. Peace lilies absorb electromagnetic radiation emitted by computers and printers and keep the air moisturised. Incorporating indoor plants is an effective way to buffer workplace noise, without making structural changes.'
      },
      {
        id: 7,
        fact: 'Being able to look at plants and flowers may speed your recovery from an illness, injury, or surgery. A 2002 review of the research revealed that people recuperating from several kinds of surgery needed less pain medication and had shorter hospital stays than people who werent looking at greenery during their recovery periods.'
      },
      {
        id: 8,
        fact: 'The wax plant, Hoya carnosa, is named after Thomas Hoy, a botanist and gardener for an English duke in the 18th century.'
      },
      {
        id: 9,
        fact: 'Philodendron, aloe and snake plants are three very low-maintenance indoor plant options for beginners that thrive in different amounts of light.'
      },
      {
        id: 10,
        fact: 'To ensure your plants get the two types of light that they need—red and blue wavelengths—gardeners can use both warm- and cool-toned fluorescent bulbs or a LED plant light.'
      },
      {
        id: 11,
        fact: 'Most indoor plants grow best between 70 and 80 degrees during the day, although some like it hot, tolerating temps up to 86 degrees.'
      },
      {
        id: 12,
        fact: 'When repotting a houseplant, make sure the soil reaches about a half inch below the pots edge.'
      },
       ]);
  };