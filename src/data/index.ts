export interface PixelArtEntry {
  src: string
  title: string
  description?: string
  date: string
  tags: string[]
  aliases?: string[]
}

const entries: PixelArtEntry[] = [
  {
    src: "2020/20201010-lospecdaily.png",
    title: "Lospec Dailies prompt: #magic",
    description: `
      Palette: [MonoMetalic](https://lospec.com/palette-list/monometalic)
    `,
    date: "2020-10-10 22:48 UTC+1100",
    tags: [
      "lospecdailies",
      "magic",
      "lospec_palette_of_the_day",
      "monometalic",
    ],
  },
  {
    src: "2020/20201012-lospecdaily.png",
    title: "Lospec Dailies prompt: #landscape",
    description: `
      Palette: [Nintendo Gameboy (Black Zero)](https://lospec.com/palette-list/nintendo-gameboy-black-zero)
    `,
    date: "2020-10-12 23:29 UTC+1100",
    tags: [
      "lospecdailies",
      "landscape",
      "lospec_palette_of_the_day",
      "nintendo-gameboy-black-zero",
    ],
  },
  {
    src: "2020/20201014-lospecdaily.png",
    title: "Lospec Dailies prompt: #rock",
    description: `
      Palette: [1bit Monitor Glow](https://lospec.com/palette-list/1bit-monitor-glow)
    `,
    date: "2020-10-14 00:23 UTC+1100",
    tags: [
      "lospecdailies",
      "rock",
      "lospec_palette_of_the_day",
      "1bit-monitor-glow",
    ],
  },
  {
    src: "2020/20201015-lospecdaily.png",
    title: "Lospec Dailies prompt: #dog",
    description: `
      Palette: [Cave Rock](https://lospec.com/palette-list/cave-rock)
    `,
    date: "2020-10-15 23:59 UTC+1100",
    tags: ["lospecdailies", "dog", "lospec_palette_of_the_day", "cave-rock"],
  },
  {
    src: "2020/20201017-lospecdaily.png",
    title: "Lospec Dailies prompt: #tree",
    description: `
      Palette: [Touhou PC-9801](https://lospec.com/palette-list/touhou-pc-9801)
    `,
    date: "2020-10-17 19:50 UTC+1100",
    tags: [
      "lospecdailies",
      "tree",
      "lospec_palette_of_the_day",
      "touhou-pc-9801",
    ],
  },
  {
    src: "2020/20201018-lospecdaily.png",
    title: "Lospec Dailies prompt: #create",
    description: `
      Palette: [Arbitration-26 Palette](https://lospec.com/palette-list/arbitration-26)
    `,
    date: "2020-10-18 17:51 UTC+1100",
    tags: [
      "lospecdailies",
      "create",
      "lospec_palette_of_the_day",
      "arbitration-26",
    ],
  },
  {
    src: "2020/20201019-lospecdaily.png",
    title: "Lospec Dailies prompt: #fish",
    description: `
      Palette: [gamer19](https://lospec.com/palette-list/gamer19)
    `,
    date: "2020-10-19 21:06 UTC+1100",
    tags: ["lospecdailies", "fish", "lospec_palette_of_the_day", "gamer19"],
  },
  {
    src: "2020/20201020-lospecdaily.png",
    title: "Lospec Dailies prompt: #dog",
    description: `
      Palette: [Golden 6](https://lospec.com/palette-list/golden-6)
    `,
    date: "2020-10-20 00:48 UTC+1100",
    tags: ["lospecdailies", "dog", "lospec_palette_of_the_day", "golden-6"],
  },
  {
    src: "2020/20201024-pixeldailies.png",
    title: "Pixel Dailies prompt: #television",
    description: `
      Palette: [EG32](https://lospec.com/palette-list/eg32)
      Trivia: First pixel art that I've created in [GIMP](https://www.gimp.org/)
    `,
    date: "2020-10-24 23:59 UTC+1100",
    tags: ["pixel_dailies", "television", "lospec_palette_of_the_day", "eg32"],
  },
  {
    src: "2020/20201104-pixeldailies.png",
    title: "Pixel Dailies prompt: #halloween",
    description: `
      Palette: [DRZ15A](https://lospec.com/palette-list/drz15a)

      Bit belated, but Happy Halloween!
    `,
    date: "2020-11-04 00:49 UTC+1100",
    tags: ["pixel_dailies", "halloween", "lospec_palette_of_the_day", "drz15a"],
  },
  {
    src: "2020/20201106-lospecdaily.png",
    title: "Lospec Dailies prompt: #mushroom",
    description: `
      Palette: [Lux3k](https://lospec.com/palette-list/lux3k)
    `,
    date: "2020-11-06 23:58 UTC+1100",
    tags: ["lospecdailies", "mushroom", "lospec_palette_of_the_day", "lux3k"],
  },
  {
    src: "2020/20201108-lospecdaily.png",
    title: "Lospec Dailies prompt: #clouds",
    description: `
      Palette: [Bubblegum 16](https://lospec.com/palette-list/bubblegum-16)
    `,
    date: "2020-11-08 00:19 UTC+1100",
    tags: [
      "lospecdailies",
      "clouds",
      "lospec_palette_of_the_day",
      "bubblegum-16",
    ],
  },
  {
    src: "2020/20201108-vic-covid19-press.png",
    title: '"Everyone right to go?"',
    description: `
      Palette: Sampled from a past press conference: #490172, #D8C8E3, 
      #F9F9FE, #000000, #262926, #797977, #C8C7D1, #EDC4A6

      With today's press conference came the announcement that the border between 
      Metro and Regional Victoria along with the 25km travel limit will be lifted from 
      11:59 PM tonight as Victoria recorded its ninth consecutive day of zero 
      new coronavirus cases and no deaths. 
      
      We also bid farewell to the signature purple wall which had been a 
      feature across Daniel Andrews' 120 consecutive press conferences. 
      The wall which bore the words "Staying Apart Keeps Us Together"
      has now been replaced with another saying "Stay Safe, Stay Open"
    `,
    date: "2020-11-08 23:09 UTC+1100",
    tags: ["covid-19"],
  },
  {
    src: "2020/20201108-vic-covid19-pressv2.png",
    title: "Recolour of 20201108-vic-covid19-press",
    description: `
      Featuring the new wall as seen at the press conference on November 8 2020.

      Palette: Sampled from a past press conference: #D7D8D3, #3C8897,
      #F9F9FE, #000000, #2D2F3F, #797977, #C8C7D1, #EDC4A6
    `,
    date: "2020-11-08 23:27 UTC+1100",
    tags: ["covid-19"],
  },
  {
    src: "2020/20201110-pixeldailies.png",
    title: "Pixel Dailies prompt: #Birds",
    description: `
      Palette: #4F4948, #D9B670, #9EA29F, #EDF0EB
      Restriction: 4 colors max

      One of the peregrine falcon chicks from Collins St, Melbourne.
      Their feathers have changed a lot recently but they still have some fluff.

      You can find the livestream at https://www.367collinsfalcons.com.au/

    `,
    date: "2020-11-10 00:13 UTC+1100",
    tags: ["pixel_dailies", "bird"],
  },
  {
    src: "2020/20201111-lospecdaily.png",
    title: "Lospec Dailies prompt: #house",
    description: `
      Palette: [Slurry GB](https://lospec.com/palette-list/slurry-gb)
    `,
    date: "2020-11-11 13:42 UTC+1100",
    tags: ["lospecdailies", "house", "lospec_palette_of_the_day", "slurry-gb"],
  },
  {
    src: "2020/20201114-lospecdaily.png",
    title: "Lospec Dailies prompt: #water",
    description: `
      Palette: [Kirby 15](https://lospec.com/palette-list/kirby-15)
    `,
    date: "2020-11-14 23:23 UTC+1100",
    tags: ["lospecdailies", "water", "lospec_palette_of_the_day", "kirby-15"],
  },
  {
    src: "2020/20201116-pixeldailies.png",
    title: "Pixel Dailies prompt: Set of #ChocolateDesserts",
    description: `
      Palette: [Endesga 36](https://lospec.com/palette-list/endesga-36)
      Restriction: Each dessert must be 32x32 pixels or less and contain chocolate
    `,
    date: "2020-11-16 01:04 UTC+1100",
    tags: [
      "pixel_dailies",
      "ChocolateDesserts",
      "set",
      "food",
      "lospec_palette_of_the_day",
      "endesga-36",
    ],
  },
  {
    src: "2020/20201117-pixeldailies.png",
    title: "Pixel Dailies prompt: #cityscape",
    description: `
      Palette: [Endesga 36](https://lospec.com/palette-list/endesga-36)
    `,
    date: "2020-11-17 01:11 UTC+1100",
    tags: ["pixel_dailies", "cityscape", "endesga-36"],
  },
  {
    src: "2020/20201119-diagram.png",
    title: "C4 Container Diagram",
    description: `
      Palette: #ffffff, #428dd4, #07437b, #999999, #686868

      I may have made this to mess with someone.
      You can learn more about the C4 model for visualising software architecture
      at [c4model.com](https://c4model.com/)
    `,
    date: "2020-11-19 13:56 UTC+1100",
    tags: ["diagram"],
  },
  {
    src: "2020/20201120-pixeldailies.png",
    title: "Pixel Dailies prompt: #waffle",
    description: `
      Palette: [Cheese Palette](https://lospec.com/palette-list/cheese-palette)
    `,
    date: "2020-11-20 01:13 UTC+1100",
    tags: [
      "pixel_dailies",
      "waffle",
      "lospec_palette_of_the_day",
      "cheese-palette",
    ],
  },
  {
    src: "2020/20201121-pixeldailies.png",
    title: "Pixel Dailies prompt: #scarab",
    description: `
      Palette: [Irenaart 22](https://lospec.com/palette-list/irenaart-22)
    `,
    date: "2020-11-21 23:23 UTC+1100",
    tags: [
      "pixel_dailies",
      "scarab",
      "lospec_palette_of_the_day",
      "irenaart-22",
    ],
  },
  {
    src: "2020/20201122-lospecdaily.png",
    title: "Lospec Dailies prompt: #landscape",
    description: `
      Palette: [DarkPastel-36](https://lospec.com/palette-list/darkpastel-36)

      The Nobbies, Phillip Island, Australia
    `,
    date: "2020-11-22 23:25 UTC+1100",
    tags: [
      "lospecdailies",
      "landscape",
      "lospec_palette_of_the_day",
      "darkpastel-36",
    ],
  },
  {
    src: "2020/20201124-lospecdaily.png",
    title: "Lospec Dailies prompt: #bird",
    description: `
      Palette: [Combi 16](https://lospec.com/palette-list/combi-16)

      House sparrow
    `,
    date: "2020-11-24 23:02 UTC+1100",
    tags: ["lospecdailies", "bird", "lospec_palette_of_the_day", "combi-16"],
  },
  {
    src: "2020/20201126-lospecdaily.png",
    title: "Lospec Dailies prompt: #fire",
    description: `
      Palette: [Golden Helmet](https://lospec.com/palette-list/golden-helmet)
    `,
    date: "2020-11-26 23:12 UTC+1100",
    tags: [
      "lospecdailies",
      "fire",
      "lospec_palette_of_the_day",
      "golden-helmet",
    ],
  },
  {
    src: "2020/20201128-pixeldailies.png",
    title: "Pixel Dailies prompt: Set of #bears",
    description: `
      Palette: [Endesga 36](https://lospec.com/palette-list/endesga-36)
      Restriction: 32x32px or less per bear
    `,
    date: "2020-11-28 23:02 UTC+1100",
    tags: ["pixel_dailies", "set", "bear", "endesga-36"],
  },
  {
    src: "2020/20201130-noprompt.png",
    title: "No prompt, just feels",
    description: `
      Been struggling with getting the layout right. So far I have a grid with
      more grids inside it but I haven't yet figured out how to constrain the
      height of the inner grid.

      Palette: [1bit black and white](https://lospec.com/palette-list/1bit-black-and-white)
    `,
    date: "2020-11-30 10:20 UTC+1100",
    tags: ["css", "text-only", "1bit-black-and-white"],
  },
  {
    src: "2020/20201201-lospecdaily.png",
    title: "Lospec Dailies prompt: #insect",
    description: `
      Palette: [15P DX](https://lospec.com/palette-list/15p-dx)

      Featuring Sewaddle, the Sewing Pokémon
    `,
    date: "2020-12-01 01:08 UTC+1100",
    tags: ["lospecdailies", "insect", "lospec_palette_of_the_day", "15p-dx"],
  },
  {
    src: "2020/20201202-pixeldailies.png",
    title: "Pixel Dailies prompt: #badger",
    description: `
      Palette: [Starmancer](https://lospec.com/palette-list/starmancer)
    `,
    date: "2020-12-02 22:52 UTC+1100",
    tags: [
      "pixel_dailies",
      "badger",
      "lospec_palette_of_the_day",
      "starmancer",
    ],
  },
  {
    src: "2020/20201203-lospecdaily.png",
    title: "Lospec Dailies prompt: #tree",
    description: `
      Palette: [Pollen8](https://lospec.com/palette-list/pollen8)

      Following [Pixel_red_cat's tree tutorial](https://www.reddit.com/gallery/j9bi2a)
    `,
    date: "2020-12-03 21:07 UTC+1100",
    tags: ["lospecdailies", "tree", "lospec_palette_of_the_day", "pollen8"],
  },
  {
    src: "2020/20201205-lospecdaily.png",
    title: "Lospec Dailies prompt: #weapon",
    description: `
      Palette: [Draxalette](https://lospec.com/palette-list/draxalette)
    `,
    date: "2020-12-05 21:44 UTC+1100",
    tags: [
      "lospecdailies",
      "weapon",
      "lospec_palette_of_the_day",
      "draxalette",
    ],
  },
  {
    src: "2020/20201206-pixeldailies.png",
    title: "Pixel Dailies prompt: #RockFormation",
    description: `
      Palette: [Draxalette](https://lospec.com/palette-list/draxalette)

      Uluru, Australia
    `,
    date: "2020-12-05 21:44 UTC+1100",
    tags: ["pixel_dailies", "rock_formation", "landscape", "draxalette"],
  },
  {
    src: "2020/20201207-diagram.png",
    title: "PlantUML Sequence Diagram",
    description: `
      Palette: #000000, #FFFFFF, #EEEEEE, #A80036, #FEFECE
    `,
    date: "2020-12-07 15:53 UTC+1100",
    tags: ["diagram"],
  },
  {
    src: "2020/20201208-pixeldailies.png",
    title: "Pixel Dailies prompt: #Road",
    description: `
      Palette: [Apollo](https://lospec.com/palette-list/apollo)
      Restriction: Use one-point perspective
    `,
    date: "2020-12-08 00:13 UTC+1100",
    tags: ["pixel_dailies", "road", "lospec_palette_of_the_day", "apollo"],
  },
  {
    src: "2020/20201210-noprompt.png",
    title: "Windowsill with a half-eaten apple and ants",
    description: `
      Palette: [Apollo](https://lospec.com/palette-list/apollo)
    `,
    date: "2020-12-10 00:07 UTC+1100",
    tags: ["no_prompt", "apple", "tree", "apollo"],
  },
  {
    src: "2020/20201210-lospecdaily.png",
    title: "Lospec Dailies prompt: #cat",
    description: `
      Palette: [Nanner 32](https://lospec.com/palette-list/nanner-32)

      no talk me im angy
    `,
    date: "2020-12-10 23:00 UTC+1100",
    tags: ["lospecdailies", "cat", "lospec_palette_of_the_day", "nanner-32"],
  },
  {
    src: "2020/20201211-pixeldailies.png",
    title: "Pixel Dailies prompt: #WaterBottle",
    description: `
      Palette: [Nanner 32](https://lospec.com/palette-list/nanner-32)
    `,
    date: "2020-12-11 22:52 UTC+1100",
    tags: ["pixel_dailies", "waterbottle", "water", "nanner-32"],
  },
  {
    src: "2020/20201213-lospecdaily.png",
    title: "Lospec Dailies prompt: #mushroom",
    description: `
      Palette: [Tropica33](https://lospec.com/palette-list/tropica33)
    `,
    date: "2020-12-13 23:59 UTC+1100",
    tags: [
      "lospecdailies",
      "mushroom",
      "lospec_palette_of_the_day",
      "tropica33",
    ],
  },
  {
    src: "2020/20201216-pixeldailies.png",
    title: "Pixel Dailies prompt: #PowerSource",
    description: `
      Palette: [Apollo](https://lospec.com/palette-list/apollo)
    `,
    date: "2020-12-16 00:20 UTC+1100",
    tags: ["pixel_dailies", "wind", "sunset", "apollo"],
  },
  {
    src: "2020/20201218-pixeldailies.png",
    title: "Pixel Dailies prompt: #sour",
    description: `
      Palette: [Endesga 36](https://lospec.com/palette-list/endesga-36)
    `,
    date: "2020-12-18 23:58 UTC+1100",
    tags: ["pixel_dailies", "sour", "glass", "endesga-36"],
  },
  {
    src: "2020/20201219-pixeldailies.png",
    title: "Pixel Dailies prompt: #pagoda",
    description: `
      Palette: [Apollo](https://lospec.com/palette-list/apollo)
    `,
    date: "2020-12-19 22:17 UTC+1100",
    tags: ["pixel_dailies", "pagoda", "building", "apollo"],
  },
  {
    src: "2020/20201222-pixeldailies.png",
    title: "Pixel Dailies prompt: #reindeer",
    description: `
      Palette: [Dreamscape8](https://lospec.com/palette-list/dreamscape8)
    `,
    date: "2020-12-22 23:00 UTC+1100",
    tags: [
      "pixel_dailies",
      "christmas",
      "reindeer",
      "lospec_palette_of_the_day",
      "dreamscape8",
    ],
  },
  {
    src: "2020/20201223-pixeldailies.png",
    title: "Pixel Dailies prompt: #present",
    description: `
      Palette: [Apollo](https://lospec.com/palette-list/apollo)
      Restriction: You can only use the colours; gold, white, red and green
    `,
    date: "2020-12-23 23:51 UTC+1100",
    tags: ["pixel_dailies", "christmas", "present", "apollo"],
  },
  {
    src: "2020/20201225-pixeldailies.png",
    title: "Pixel Dailies prompt: #HolidayFood",
    description: `
      Palette: [Apollo](https://lospec.com/palette-list/apollo)

      Roast turkey with roast pumpkin, peas and mashed potatoes.
      Thing at the top is supposed to be a gravy boat but I have no
      idea what those look like from this perspective.
    `,
    date: "2020-12-25 18:00 UTC+1100",
    tags: ["pixel_dailies", "christmas", "food", "apollo"],
  },
  {
    src: "2020/20201225-pixeldailies2.png",
    title: "Pixel Dailies prompt: Set of #Ornaments",
    description: `
      Palette: [Apollo](https://lospec.com/palette-list/apollo)
      Restriction: 16x16px per ornament
    `,
    date: "2020-12-23 23:51 UTC+1100",
    tags: ["pixel_dailies", "christmas", "set", "ornaments", "apollo"],
  },
  {
    src: "2020/20201226-pixeldailies.png",
    title: "Pixel Dailies prompt: #candle",
    description: `
      Palette: [Apollo](https://lospec.com/palette-list/apollo)
      Restriction: 32x32px
    `,
    date: "2020-12-26 22:19 UTC+1100",
    tags: ["pixel_dailies", "christmas", "candle", "apollo"],
  },
  {
    src: "2020/20201227-pixeldailies.png",
    title: "Pixel Dailies prompt: #PineTree",
    description: `
      Palette: [Apollo](https://lospec.com/palette-list/apollo)
    `,
    date: "2020-12-27 21:52 UTC+1100",
    tags: ["pixel_dailies", "christmas", "tree", "apollo"],
  },
  {
    src: "2020/20201228-pixeldailies.png",
    title: "Pixel Dailies prompt: #snowy",
    description: `
      Palette: [Apollo](https://lospec.com/palette-list/apollo)
    `,
    date: "2020-12-28 23:51 UTC+1100",
    tags: ["pixel_dailies", "snowy", "landscape", "apollo"],
  },
  {
    src: "2020/20201229-noprompt.png",
    title: "No prompt, only a feature release",
    description: `
      This site now has an RSS feed. You can find it in the footer below or at [pakkudon.github.io/pixel-art-gallery/feed.xml](https://pakkudon.github.io/pixel-art-gallery/feed.xml).
      I also don't have an RSS reader so I don't know if this is marked up correctly or if the posts are in the right order. If there's any issues feel free to raise them in the repo.

      Palette: [Apollo](https://lospec.com/palette-list/apollo)
    `,
    date: "2020-12-29 21:48 UTC+1100",
    tags: ["noprompt", "update", "apollo"],
  },
  {
    src: "2020/20201229-pixeldailies.png",
    title: "Pixel Dailies prompt: #ribbon",
    description: `
      Palette: [Apollo](https://lospec.com/palette-list/apollo)
    `,
    date: "2020-12-29 22:52 UTC+1100",
    tags: ["pixel_dailies", "ribbon", "apollo"],
  },
  {
    src: "2020/20201230-pixeldailies.png",
    title: "Pixel Dailies prompt: #countdown",
    description: `
      Palette: [Apollo](https://lospec.com/palette-list/apollo)
    `,
    date: "2020-12-30 22:37 UTC+1100",
    tags: ["pixel_dailies", "countdown", "apollo"],
  },
  {
    src: "2020/20201231-noprompt.png",
    title: "Fireworks attempt for the last pixel art for 2020.",
    description: `
      Thanks to those that have been following along. See you next year!
      Palette: [Apollo](https://lospec.com/palette-list/apollo)
    `,
    date: "2020-12-31 23:45 UTC+1100",
    tags: ["noprompt", "fireworks", "apollo"],
  },
  {
    src: "2021/20210101-pixeldailies.png",
    title: "Pixel Dailies prompt: #ox",
    description: `
      Palette: [Apollo](https://lospec.com/palette-list/apollo)
    `,
    date: "2021-01-01 23:36 UTC+1100",
    tags: ["pixel_dailies", "ox", "apollo"],
  },
  {
    src: "2021/20210103-pixeldailies.png",
    title: "Pixel Dailies prompt: #camping",
    description: `
      Palette: [Pico-8 Secret Palette](https://lospec.com/palette-list/pico-8-secret-palette)
    `,
    date: "2021-01-03 23:59 UTC+1100",
    tags: [
      "pixel_dailies",
      "camping",
      "lospec_palette_of_the_day",
      "pico-8-secret-palette",
    ],
  },
  {
    src: "2021/20210107-pixeldailies.png",
    title: "Pixel Dailies prompt: #drupe",
    description: `
      Palette: [Zughy 32](https://lospec.com/palette-list/zughy-32)
    `,
    date: "2021-01-07 18:15 UTC+1100",
    tags: ["pixel_dailies", "drupe", "fruit", "zughy-32"],
  },
  {
    src: "2021/20210108-lospecdaily.png",
    title: "Lospec Dailies prompt: #water",
    description: `
      Palette: [Fantasy 16](https://lospec.com/palette-list/fantasy-16)
    `,
    date: "2021-01-08 18:01 UTC+1100",
    tags: ["lospecdailies", "water", "lospec_palette_of_the_day", "fantasy-16"],
  },
  {
    src: "2021/20210109-pixeldailies.png",
    title: "Pixel Dailies prompt: #birdcage",
    description: `
      Palette: [Apollo](https://lospec.com/palette-list/apollo)
    `,
    date: "2021-01-09 23:44 UTC+1100",
    tags: ["pixel_dailies", "birdcage", "flowers", "apollo"],
  },
  {
    src: "2021/20210111-pixeldailies.png",
    title: "Pixel Dailies prompt: #DoorWay",
    description: `
      Palette: [Draxalette](https://lospec.com/palette-list/draxalette)
    `,
    date: "2021-01-11 23:59 UTC+1100",
    tags: ["pixel_dailies", "doorway", "draxalette"],
  },
  {
    src: "2021/20210114-pixeldailies.png",
    title: "Pixel Dailies prompt: Something that has been #repurposed",
    description: `
      Palette: [ReWild 64](https://lospec.com/palette-list/rewild-64)
    `,
    date: "2021-01-14 00:54 UTC+1100",
    tags: [
      "pixel_dailies",
      "repurposed",
      "glass",
      "plant",
      "teapot",
      "rewild-64",
    ],
  },
  {
    src: "2021/20210115-pixeldailies.png",
    title: "Pixel Dailies prompt: #caramel",
    description: `
      Palette: [Apollo](https://lospec.com/palette-list/apollo)
    `,
    date: "2021-01-15 00:05 UTC+1100",
    tags: ["pixel_dailies", "caramel", "dessert", "food", "apollo"],
  },
  {
    src: "2021/20210115-pixeldailies2.png",
    title: "Pixel Dailies prompt: #vent",
    description: `
      Palette: [Starmancer](https://lospec.com/palette-list/starmancer)
    `,
    date: "2021-01-15 23:41 UTC+1100",
    tags: ["pixel_dailies", "vent", "amongus", "starmancer"],
    aliases: ["202101152-pixeldailies"],
  },
  {
    src: "2021/20210116-lospecdaily.png",
    title: "Lospec Dailies prompt: #bird",
    description: `
      Palette: [Apollo](https://lospec.com/palette-list/apollo)

      Peregrine falcon
    `,
    date: "2021-01-16 02:18 UTC+1100",
    tags: ["lospecdailies", "bird", "apollo"],
  },
  {
    src: "2021/20210117-pixeldailies.png",
    title: "Pixel Dailies prompt: #Diamond",
    description: `
      Palette: [Blues GB](https://lospec.com/palette-list/blues-gb)
    `,
    date: "2021-01-17 23:53 UTC+1100",
    tags: ["pixel_dailies", "diamond", "blues-gb"],
  },
  {
    src: "2021/20210119-pixeldailies.png",
    title: "Pixel Dailies prompt: #billboard",
    description: `
      Palette: [Apollo](https://lospec.com/palette-list/apollo)
    `,
    date: "2021-01-19 23:17 UTC+1100",
    tags: ["pixel_dailies", "billboard", "apollo"],
  },
  {
    src: "2021/20210120-pixeldailies.png",
    title: "Pixel Dailies prompt: Set of #lamps",
    description: `
      Palette: [Apollo](https://lospec.com/palette-list/apollo)
      Restriction: 24x32px per lamp
    `,
    date: "2021-01-20 23:51 UTC+1100",
    tags: ["pixel_dailies", "lamp", "set", "apollo"],
  },
  {
    src: "2021/20210122-pixeldailies.png",
    title: "Pixel Dailies prompt: #mohawk",
    description: `
      Palette: [Endesga 64](https://lospec.com/palette-list/endesga-64)

      Sulfur-crested cockatoo
    `,
    date: "2021-01-22 21:20 UTC+1100",
    tags: ["pixel_dailies", "mohawk", "endesga-64"],
  },
  {
    src: "2021/20210123-noprompt.png",
    title: "Practicing clouds",
    description: `
      Palette: [Apollo](https://lospec.com/palette-list/apollo)
    `,
    date: "2021-01-23 21:59 UTC+1100",
    tags: ["noprompt", "cloud", "apollo"],
  },
  {
    src: "2021/20210124-pixeldailies.png",
    title: "Pixel Dailies prompt: #WildLife",
    description: `
      Palette: [Apollo](https://lospec.com/palette-list/apollo)
    `,
    date: "2021-01-24 23:47 UTC+1100",
    tags: ["pixel_dailies", "wildlife", "sunset", "apollo"],
  },
  {
    src: "2021/20210126-lospecdaily.png",
    title: "Lospec Dailies prompt: #clouds",
    description: `
      Palette: [Isa's True Master Palette](https://lospec.com/palette-list/isas-true-master-palette)
    `,
    date: "2021-01-26 23:59 UTC+1100",
    tags: [
      "lospecdailies",
      "cloud",
      "sunset",
      "lospec_palette_of_the_day",
      "isas-true-master-palette",
    ],
  },
  {
    src: "2021/20210127-pixeldailies.png",
    title:
      "Pixel Dailies prompt: #HiddenObjectGame. Pixel a small scene and hide an object in it for everyone to find!",
    description: `
      Palette: [Zughy 32](https://lospec.com/palette-list/zughy-32)

      🥭🦜🥭🥭
    `,
    date: "2021-01-27 23:14 UTC+1100",
    tags: ["pixel_dailies", "bird", "mango", "zughy-32"],
  },
  {
    src: "2021/20210128-pixeldailies.png",
    title: "Pixel Dailies prompt: #cog",
    description: `
      Palette: [Pokemon (SGB)](https://lospec.com/palette-list/pokemon-sgb)

      Featuring Klink, the Gear Pokémon
    `,
    date: "2021-01-28 22:42 UTC+1100",
    tags: ["pixel_dailies", "cog", "pokemon", "pokemon-sgb"],
  },
  {
    src: "2021/20210129-pixeldailies.png",
    title: "Pixel Dailies prompt: #support",
    description: `
      Palette: [Blues GB](https://lospec.com/palette-list/blues-gb)

      [Reference image](https://windows10spotlight.com/images/d178df0c01377a2d5b67a01dabddf6a9)
    `,
    date: "2021-01-29 22:57 UTC+1100",
    tags: ["pixel_dailies", "landscape", "mountain", "blues-gb"],
  },
  {
    src: "2021/20210130-pixeldailies.png",
    title: "Pixel Dailies prompt: #halo",
    description: `
      Palette: [Apollo](https://lospec.com/palette-list/apollo)

      Halo around a full moon on a cloudy night
    `,
    date: "2021-01-30 23:38 UTC+1100",
    tags: ["pixel_dailies", "halo", "moon", "sky", "apollo"],
  },
  {
    src: "2021/20210131-pixeldailies.png",
    title: "Pixel Dailies prompt: #MagicalWand",
    description: `
      Palette: [Apollo](https://lospec.com/palette-list/apollo)

      Sealing Wand from Cardcaptor Sakura Clear Card
    `,
    date: "2021-01-31 23:43 UTC+1100",
    tags: ["pixel_dailies", "wand", "apollo"],
  },
  {
    src: "2021/20210201-pixeldailies.png",
    title: "Pixel Dailies prompt: #Springs",
    description: `
      Palette: [MarshMellow32](https://lospec.com/palette-list/marshmellow32)
    `,
    date: "2021-02-01 23:20 UTC+1100",
    tags: ["pixel_dailies", "springs", "marshmellow32"],
  },
  {
    src: "2021/20210203-pixeldailies.png",
    title: "Pixel Dailies prompt: #ShootingStar",
    description: `
      Palette: [SLSO8](https://lospec.com/palette-list/slso8)
    `,
    date: "2021-02-03 23:06 UTC+1100",
    tags: ["pixel_dailies", "stars", "night", "slso8"],
  },
  {
    src: "2021/20210204-pixeldailies.png",
    title: "Pixel Dailies prompt: #carbohydrates",
    description: `
      Palette: [Apollo](https://lospec.com/palette-list/apollo)
    `,
    date: "2021-02-04 23:06 UTC+1100",
    tags: ["pixel_dailies", "donuts", "food", "apollo"],
  },
  {
    src: "2021/20210205-pixeldailies.png",
    title: "Pixel Dailies prompt: #blossom",
    description: `
      Palette: [Endesga 64](https://lospec.com/palette-list/endesga-64)
    `,
    date: "2021-02-05 23:47 UTC+1100",
    tags: ["pixel_dailies", "blossom", "flower", "endesga-64"],
  },
  {
    src: "2021/20210207-noprompt.png",
    title: "Hazelnut Mille Feuille",
    description: `
      Palette: [Endesga 36](https://lospec.com/palette-list/endesga-36)

      I have no idea how to draw pastry cream swirls in this angle
    `,
    date: "2021-02-07 23:38 UTC+1100",
    tags: ["noprompt", "cake", "food", "endesga-36"],
  },
  {
    src: "2021/20210207-pixeldailies.png",
    title: "Pixel Dailies prompt: #Sculpture",
    description: `
      Palette: [2-bit Grayscale](https://lospec.com/palette-list/2-bit-grayscale)
      Restriction: 5 colous max

      Cow Up a Tree, Docklands, Victoria
    `,
    date: "2021-02-07 23:58 UTC+1100",
    tags: ["pixel_dailies", "Sculpture", "2-bit-grayscale"],
  },
  {
    src: "2021/20210209-pixeldailies.png",
    title: "Pixel Dailies prompt: #topiary",
    description: `
      Palette: [15P DX](https://lospec.com/palette-list/15p-dx)
    `,
    date: "2021-02-09 22:27 UTC+1100",
    tags: ["pixel_dailies", "topiary", "plant", "dog", "15p-dx"],
  },
  {
    src: "2021/20210211-pixeldailies.png",
    title: "Pixel Dailies prompt: #paperwork",
    description: `
      Palette: [Apollo](https://lospec.com/palette-list/apollo)
    `,
    date: "2021-02-11 00:15 UTC+1100",
    tags: ["pixel_dailies", "paperwork", "coffee", "apollo"],
  },
  {
    src: "2021/20210212-pixeldailies.png",
    title: "Pixel Dailies prompt: #HansomCab",
    description: `
      Palette: [Apollo](https://lospec.com/palette-list/apollo)
    `,
    date: "2021-02-12 23:02 UTC+1100",
    tags: ["pixel_dailies", "hansomcab", "apollo"],
  },
  {
    src: "2021/20210212-noprompt.png",
    title: "#HansomCab? More like #HandsomeCrab",
    description: `
      Palette: [Apollo](https://lospec.com/palette-list/apollo)
    `,
    date: "2021-02-12 23:25 UTC+1100",
    tags: ["noprompt", "crab", "apollo"],
  },
  {
    src: "2021/20210213-pixeldailies.png",
    title: "Pixel Dailies prompt: #abyss",
    description: `
      Palette: [Seafoam](https://lospec.com/palette-list/seafoam)
    `,
    date: "2021-02-13 23:29 UTC+1100",
    tags: ["pixel_dailies", "abyss", "underwater", "seafoam"],
  },
  {
    src: "2021/20210214-noprompt.png",
    title: "Dinner by the beach featuring that crab from 20210212-noprompt",
    description: `
      Palette: [Apollo](https://lospec.com/palette-list/apollo)
    `,
    date: "2021-02-14 23:59 UTC+1100",
    tags: ["noprompt", "crab", "valentines", "apollo"],
  },
  {
    src: "2021/20210215-pixeldailies.png",
    title: "Pixel Dailies prompt: #lovebirds",
    description: `
      Palette: [Apollo](https://lospec.com/palette-list/apollo)
    `,
    date: "2021-02-15 23:59 UTC+1100",
    tags: ["pixel_dailies", "lovebirds", "bird", "apollo"],
  },
  {
    src: "2021/20210219-pixeldailies.png",
    title: "Pixel Dailies prompt: #TrainStation",
    description: `
      Palette: [Apollo](https://lospec.com/palette-list/apollo)
    `,
    date: "2021-02-19 23:56 UTC+1100",
    tags: ["pixel_dailies", "trainstation", "apollo"],
  },
  {
    src: "2021/20210222-pixeldailies.png",
    title: "Pixel Dailies prompt: #Bunny",
    description: `
      Palette: [Apollo](https://lospec.com/palette-list/apollo)
    `,
    date: "2021-02-22 00:35 UTC+1100",
    tags: ["pixel_dailies", "bunny", "apollo"],
  },
  {
    src: "2021/20210224-pixeldailies.png",
    title: "Pixel Dailies prompt: #dam",
    description: `
      Palette: [Tranquility Plus 39](https://lospec.com/palette-list/tranquility-plus-39)
    `,
    date: "2021-02-24 00:17 UTC+1100",
    tags: ["pixel_dailies", "dam", "landscape", "tranquility-plus-39"],
  },
  {
    src: "2021/20210226-pixeldailies.png",
    title: "Pixel Dailies prompt: #red",
    description: `
      Palette: [Earth Vibes](https://lospec.com/palette-list/earth-vibes)

      Featuring Red from Transistor (2014)
    `,
    date: "2021-02-26 23:02 UTC+1100",
    tags: ["pixel_dailies", "red", "transistor", "earth-vibes"],
  },
  {
    src: "2021/20210228-pixeldailies.png",
    title: "Pixel Dailies prompt: #Pokemon",
    description: `
      Palette: [Endesga 36](https://lospec.com/palette-list/endesga-36)

      Featuring Pikachu, the 25th Pokemon, for Pokemon's 25th Anniversary.
    `,
    date: "2021-02-28 23:38 UTC+1100",
    tags: ["pixel_dailies", "pokemon", "endesga-36"],
  },
  {
    src: "2021/20210303-pixeldailies.png",
    title: "Pixel Dailies prompt: #MarineLife",
    description: `
      Palette: [Earth Vibes](https://lospec.com/palette-list/earth-vibes)

      Humpback whale breaching surface
    `,
    date: "2021-03-03 23:53 UTC+1100",
    tags: [
      "pixel_dailies",
      "MarineLife",
      "whale",
      "ocean",
      "water",
      "earth-vibes",
    ],
  },
  {
    src: "2021/20210304-pixeldailies.png",
    title: "Pixel Dailies prompt: #cereal",
    description: `
      Palette: [Endesga 36](https://lospec.com/palette-list/endesga-36)
    `,
    date: "2021-03-04 23:59 UTC+1100",
    tags: ["pixel_dailies", "cereal", "food", "endesga-36"],
  },
  {
    src: "2021/20210305-pixeldailies.png",
    title: "Pixel Dailies prompt: #cracks",
    description: `
      Palette: [Endesga 36](https://lospec.com/palette-list/endesga-36)
    `,
    date: "2021-03-05 20:22 UTC+1100",
    tags: ["pixel_dailies", "cracks", "ceramic", "kintsugi", "endesga-36"],
  },
  {
    src: "2021/20210306-pixeldailies.png",
    title: "Pixel Dailies prompt: #mint",
    description: `
      Palette: [Paper 8](https://lospec.com/palette-list/paper-8)
    `,
    date: "2021-03-06 23:59 UTC+1100",
    tags: ["pixel_dailies", "mint", "ice-cream", "paper-8"],
  },
  {
    src: "2021/20210308-pixeldailies.png",
    title: "Pixel Dailies prompt: #Plushy",
    description: `
      Palette: [Apollo](https://lospec.com/palette-list/apollo)
    `,
    date: "2021-03-08 23:21 UTC+1100",
    tags: ["pixel_dailies", "Plushy", "penguin", "apollo"],
  },
  {
    src: "2021/20210309-pixeldailies.png",
    title: "Pixel Dailies prompt: #boiling",
    description: `
      Palette: [Apollo](https://lospec.com/palette-list/apollo)
    `,
    date: "2021-03-09 23:58 UTC+1100",
    tags: ["pixel_dailies", "boiling", "cookware", "apollo"],
  },
  {
    src: "2021/20210312-pixeldailies.png",
    title: "Pixel Dailies prompt: #kiwi",
    description: `      
      Palette: [Earth Vibes](https://lospec.com/palette-list/earth-vibes)
    `,
    date: "2021-03-12 22:55 UTC+1100",
    tags: ["pixel_dailies", "kiwi", "bird", "earth-vibes"],
  },
  {
    src: "2021/20210313-pixeldailies.png",
    title: "Pixel Dailies prompt: #vanity",
    description: `
      Palette: [Endesga 36](https://lospec.com/palette-list/endesga-36)
    `,
    date: "2021-03-13 23:17 UTC+1100",
    tags: ["pixel_dailies", "vanity", "endesga-36"],
  },
  {
    src: "2021/20210314-noprompt.png",
    title: "Strawberry souffle pancake with cream",
    description: `
      Palette: [Apollo](https://lospec.com/palette-list/apollo)

      Belatedly realised yesterday's post (20210313-pixeldailies) was my 100th pixel art entry.

      Just wanted to give a big thank you to those of you that have been following along and supporting me along the way. It means a lot :D

      See you at the next one. 👋
    `,
    date: "2021-03-14 23:57 UTC+1100",
    tags: ["dessert", "food", "belated_milestone_post", "apollo"],
  },
  {
    src: "2021/20210315-pixeldailies.png",
    title: "Pixel Dailies prompt: #Dirt",
    description: `
      Palette: [Apollo](https://lospec.com/palette-list/apollo)
    `,
    date: "2021-03-15 23:59 UTC+1100",
    tags: ["pixel_dailies", "dirt", "plant", "apollo"],
  },
  {
    src: "2021/20210316-pixeldailies.png",
    title: "Pixel Dailies prompt: #banana",
    description: `
      Palette: [Endesga 64](https://lospec.com/palette-list/endesga-64)
    `,
    date: "2021-03-16 23:57 UTC+1100",
    tags: ["pixel_dailies", "banana", "food", "endesga-64"],
  },
  {
    src: "2021/20210317-pixeldailies.png",
    title: "Pixel Dailies prompt: #mineral",
    description: `
      Palette: [Apollo](https://lospec.com/palette-list/apollo)

      Dumortierite quartz
    `,
    date: "2021-03-17 22:59 UTC+1100",
    tags: ["pixel_dailies", "mineral", "apollo"],
  },
  {
    src: "2021/20210318-noprompt.png",
    title: "Sailboat silhouette",
    description: `
      Palette: [Earth Vibes](https://lospec.com/palette-list/earth-vibes)
    `,
    date: "2021-03-18 23:42 UTC+1100",
    tags: ["boat", "water", "earth-vibes"],
  },
  {
    src: "2021/20210318-pixeldailies.png",
    title: "Pixel Dailies prompt: #NegativeSpace",
    description: `
      Palette: [Earth Vibes](https://lospec.com/palette-list/earth-vibes)
    `,
    date: "2021-03-18 23:58 UTC+1100",
    tags: [
      "pixel_dailies",
      "NegativeSpace",
      "cityscape",
      "sunset",
      "earth-vibes",
    ],
  },
  {
    src: "2021/20210319-pixeldailies.png",
    title: "Pixel Dailies prompt: #nocturnal",
    description: `
      Palette: [Apollo](https://lospec.com/palette-list/apollo)
    `,
    date: "2021-03-19 23:58 UTC+1100",
    tags: ["pixel_dailies", "nocturnal", "owl", "apollo"],
  },
  {
    src: "2021/20210320-pixeldailies.png",
    title: "Pixel Dailies prompt: #DeskCaddy",
    description: `
      Palette: [Apollo](https://lospec.com/palette-list/apollo)
    `,
    date: "2021-03-20 23:59 UTC+1100",
    tags: ["pixel_dailies", "DeskCaddy", "apollo"],
  },
  {
    src: "2021/20210324-pixeldailies.png",
    title: "Pixel Dailies prompt: #TextBox",
    description: `
      Palette: [Endesga 36](https://lospec.com/palette-list/endesga-36)
    `,
    date: "2021-03-24 00:18 UTC+1100",
    tags: ["pixel_dailies", "TextBox", "earth", "endesga-36"],
  },
  {
    src: "2021/20210328-pixeldailies.png",
    title: "Pixel Dailies prompt: #Extinct",
    description: `
      Palette: [Apollo](https://lospec.com/palette-list/apollo)
    `,
    date: "2021-03-28 23:59 UTC+1100",
    tags: ["pixel_dailies", "Extinct", "mammoth", "apollo"],
  },
  {
    src: "2021/20210329-pixeldailies.png",
    title: "Pixel Dailies prompt: #CardGame",
    description: `
      Palette: [Ice Cream GB](https://lospec.com/palette-list/ice-cream-gb)
      Restriction: 5 colours max
    `,
    date: "2021-03-29 23:52 UTC+1100",
    tags: ["pixel_dailies", "CardGame", "ice-cream-gb"],
  },
  {
    src: "2021/20210330-pixeldailies.png",
    title: "Pixel Dailies prompt: #Daffodils",
    description: `
      Palette: [Endesga 36](https://lospec.com/palette-list/endesga-36)
    `,
    date: "2021-03-30 23:59 UTC+1100",
    tags: ["pixel_dailies", "Daffodils", "flower", "endesga-36"],
  },
  {
    src: "2021/20210331-pixeldailies.png",
    title: "Pixel Dailies prompt: #windmill",
    description: `
      Palette: [Tranquility Fantasy 23](https://lospec.com/palette-list/tranquil-fantasy-23)
    `,
    date: "2021-03-31 23:59 UTC+1100",
    tags: ["pixel_dailies", "windmill", "tranquil-fantasy-23"],
  },
  {
    src: "2021/20210402-pixeldailies.png",
    title: "Pixel Dailies prompt: #carrot",
    description: `
      Palette: [15P DX](https://lospec.com/palette-list/15p-dx)
    `,
    date: "2021-04-02 23:55 UTC+1100",
    tags: ["pixel_dailies", "carrot", "15p-dx"],
  },
  {
    src: "2021/20210407-pixeldailies.png",
    title: "Pixel Dailies prompt: #PunchCard",
    description: `
      Palette: [Apollo](https://lospec.com/palette-list/apollo)
    `,
    date: "2021-04-07 22:55 UTC+1000",
    tags: ["pixel_dailies", "PunchCard", "apollo"],
  },
  {
    src: "2021/20210408-pixeldailies.png",
    title: "Pixel Dailies prompt: #mole",
    description: `
      Palette: [Apollo](https://lospec.com/palette-list/apollo)
    `,
    date: "2021-04-08 23:59 UTC+1000",
    tags: ["pixel_dailies", "mole", "OMORI", "apollo"],
  },
  {
    src: "2021/20210411-pixeldailies.png",
    title: "Pixel Dailies prompt: #Gate",
    description: `
      Palette: [Earth Vibes](https://lospec.com/palette-list/earth-vibes)
    `,
    date: "2021-04-11 23:50 UTC+1000",
    tags: ["pixel_dailies", "Gate", "earth-vibes"],
  },
  {
    src: "2021/20210412-pixeldailies.png",
    title: "Pixel Dailies prompt: #Spice",
    description: `
      Palette: [Zughy 32](https://lospec.com/palette-list/zughy-32)
    `,
    date: "2021-04-12 23:59 UTC+1000",
    tags: ["pixel_dailies", "Spice", "vanilla", "zughy-32"],
  },
  {
    src: "2021/20210417-pixeldailies.png",
    title: "Pixel Dailies prompt: #turntable",
    description: `
      Palette: [Apollo](https://lospec.com/palette-list/apollo)
    `,
    date: "2021-04-17 23:58 UTC+1000",
    tags: ["pixel_dailies", "turntable", "apollo"],
  },
  {
    src: "2021/20210423-pixeldailies.png",
    title: "Pixel Dailies prompt: #HomeMade",
    description: `
      Palette: [Apollo](https://lospec.com/palette-list/apollo)
    `,
    date: "2021-04-23 23:59 UTC+1000",
    tags: ["pixel_dailies", "HomeMade", "tea", "apollo"],
  },
  {
    src: "2021/20210425-cat.png",
    title: "Siamese cat",
    description: `
      Palette: [Apollo](https://lospec.com/palette-list/apollo)

      Based off one of my coworker's plushies.
    `,
    date: "2021-04-25 00:51 UTC+1000",
    tags: ["noprompt", "cat", "apollo"],
  },
  {
    src: "2021/20210425-pixeldailies.png",
    title: "Pixel Dailies prompt: #Brick",
    description: `
    Palette: [Zughy 32](https://lospec.com/palette-list/zughy-32)
    `,
    date: "2021-04-25 23:56 UTC+1000",
    tags: ["pixel_dailies", "Brick", "zughy-32"],
  },
  {
    src: "2021/20210426-pixeldailies.png",
    title: "Pixel Dailies prompt: #Cookies",
    description: `
      Palette: [Apollo](https://lospec.com/palette-list/apollo)
    `,
    date: "2021-04-26 23:59 UTC+1000",
    tags: ["pixel_dailies", "Cookies", "apollo"],
  },
  {
    src: "2021/20210512-pixeldailies.png",
    title: "Pixel Dailies prompt: #distraction",
    description: `
      Palette: [Apollo](https://lospec.com/palette-list/apollo)
    `,
    date: "2021-05-12 00:01 UTC+1000",
    tags: ["pixel_dailies", "distraction", "slack", "apollo"],
  },
  {
    src: "2021/20210516-pixeldailies.png",
    title: "Pixel Dailies prompt: #Bookworm",
    description: `
      Palette: [SLSO8](https://lospec.com/palette-list/slso8)
    `,
    date: "2021-05-16 21:26 UTC+1000",
    tags: ["pixel_dailies", "Bookworm", "window", "slso8"],
  },
  {
    src: "2021/20210519-pixeldailies.png",
    title: "Pixel Dailies prompt: #ElementalCreature",
    description: `
      Palette: [SLSO8](https://lospec.com/palette-list/slso8)

      Sky whale?
    `,
    date: "2021-05-19 00:06 UTC+1000",
    tags: [
      "pixel_dailies",
      "ElementalCreature",
      "sky",
      "whale",
      "sunset",
      "slso8",
    ],
  },
  {
    src: "2021/20210522-pixeldailies.png",
    title: "Pixel Dailies prompt: #isopod",
    description: `
      Palette: [Apollo](https://lospec.com/palette-list/apollo)
    `,
    date: "2021-05-22 23:40 UTC+1000",
    tags: ["pixel_dailies", "isopod", "apollo"],
  },
  {
    src: "2021/20210526-pixeldailies.png",
    title: "Pixel Dailies prompt: #imposing",
    description: `
      Palette: [Tranquil Fantasy 23](https://lospec.com/palette-list/tranquil-fantasy-23)
    `,
    date: "2021-05-26 23:52 UTC+1000",
    tags: [
      "pixel_dailies",
      "imposing",
      "clouds",
      "sky",
      "storm",
      "tranquil-fantasy-23",
    ],
  },
  {
    src: "2021/20210529-pixeldailies.png",
    title: "Pixel Dailies prompt: #pineapple",
    description: `
      Palette: [Paper 8](https://lospec.com/palette-list/paper-8)
    `,
    date: "2021-05-29 22:41 UTC+1000",
    tags: ["pixel_dailies", "pineapple", "food", "paper-8"],
  },
  {
    src: "2021/20210620-pixeldailies.png",
    title: "Pixel Dailies prompt: Set of 3 #RedFruits",
    description: `
      Palette: [Apollo](https://lospec.com/palette-list/apollo)
      Restriction: Each fruit has a different size,16x16px,  24x24px, 32x32px
    `,
    date: "2021-06-20 23:59 UTC+1000",
    tags: ["pixel_dailies", "fruit", "set", "food", "apollo"],
  },
  {
    src: "2021/20210624-pixeldailies.png",
    title: "Pixel Dailies prompt: #cobweb",
    description: `
      Palette: [SLSO8](https://lospec.com/palette-list/slso8)
    `,
    date: "2021-06-24 23:59 UTC+1000",
    tags: ["pixel_dailies", "cobweb", "lamp", "slso8"],
  },
  {
    src: "2021/20210626-pixeldailies.png",
    title: "Pixel Dailies prompt: #neon",
    description: `
    Palette: [Zughy 32](https://lospec.com/palette-list/zughy-32)
    `,
    date: "2021-06-26 23:25 UTC+1000",
    tags: ["pixel_dailies", "neon", "zughy-32"],
  },
  {
    src: "2021/20210628-pixeldailies.png",
    title: "Pixel Dailies prompt: #GiantMonster",
    description: `
      Palette: [Apollo](https://lospec.com/palette-list/apollo)

      SOMETHING taunts SUNNY as he falls.
    `,
    date: "2021-06-28 00:10 UTC+1000",
    tags: ["pixel_dailies", "GiantMonster", "OMORI", "apollo"],
  },
  {
    src: "2021/20210628-pixeldailies2.png",
    title: "Pixel Dailies prompt: #FoodStall",
    description: `
      Palette: [Apollo](https://lospec.com/palette-list/apollo)
    `,
    date: "2021-06-28 23:59 UTC+1000",
    tags: ["pixel_dailies", "FoodStall", "cart", "apollo"],
  },
  {
    src: "2021/20210704-pixeldailies.png",
    title: "Pixel Dailies prompt: #ComputerGlitch",
    description: `
    Palette: [Endesga 36](https://lospec.com/palette-list/endesga-36)
    `,
    date: "2021-07-04 22:40 UTC+1000",
    tags: ["pixel_dailies", "ComputerGlitch", "windows", "endesga-36"],
  },
  {
    src: "2021/20210711-pixeldailies.png",
    title: "Pixel Dailies prompt: #Cotton",
    description: `
      Palette: [Oil 6](https://lospec.com/palette-list/oil-6)
    `,
    date: "2021-07-11 23:35 UTC+1000",
    tags: ["pixel_dailies", "Cotton", "plant", "oil-6"],
  },
  {
    src: "2021/20210717-pixeldailies.png",
    title: "Pixel Dailies prompt: #gum",
    description: `
      Palette: [DarkPastel-36](https://lospec.com/palette-list/darkpastel-36)
    `,
    date: "2021-07-17 23:59 UTC+1000",
    tags: ["pixel_dailies", "gum", "plant", "tree", "darkpastel-36"],
  },
  {
    src: "2021/20210719-pixeldailies.png",
    title: "Pixel Dailies prompt: Set of #parrots",
    description: `
      Palette: [Earth Vibes](https://lospec.com/palette-list/earth-vibes)
    `,
    date: "2021-07-19 23:53 UTC+1000",
    tags: [
      "pixel_dailies",
      "bird",
      "set",
      "parrot",
      "rainbow lorikeet",
      "earth-vibes",
    ],
  },
  {
    src: "2021/20210721-sunny.png",
    title: "Sunny",
    description: `
      Palette: [Endesga 36](https://lospec.com/palette-list/endesga-36)

      Belated pixel art for [Sunny's birthday](https://twitter.com/OMORI_GAME/status/1417378744734527497)
    `,
    date: "2021-07-21 00:50 UTC+1000",
    tags: ["OMORI", "endesga-36"],
  },
  {
    src: "2021/20210722-pixeldailies.png",
    title: "Pixel Dailies prompt: #ThrowingKnife",
    description: `
      Palette: [Nyx8](https://lospec.com/palette-list/nyx8)
    `,
    date: "2021-07-22 23:58 UTC+1000",
    tags: ["pixel_dailies", "ThrowingKnife", "nyx8"],
  },
  {
    src: "2021/20210724-lospecdaily.png",
    title: "Lospec Dailies prompt: #coral",
    description: `
      Palette: [Explorers16](https://lospec.com/palette-list/explorers16)
    `,
    date: "2021-07-24 17:44 UTC+1000",
    tags: [
      "lospecdailies",
      "coral",
      "lospec_palette_of_the_day",
      "explorers16",
    ],
  },
  {
    src: "2021/20210724-pixeldailies.png",
    title: "Pixel Dailies prompt: #Study of #DappledLight",
    description: `
      Palette: [Moor](https://lospec.com/palette-list/moor)
    `,
    date: "2021-07-24 23:59 UTC+1000",
    tags: ["pixel_dailies", "DappledLight", "tree", "moor"],
  },
  {
    src: "2021/20210810-pixeldailies.png",
    title: "Pixel Dailies prompt: #duck",
    description: `
      Palette: [Nanner 32](https://lospec.com/palette-list/nanner-32)
    `,
    date: "2021-08-10 23:55 UTC+1000",
    tags: ["pixel_dailies", "duck", "bird", "water", "nanner-32"],
  },
  {
    src: "2021/20210813-pixeldailies.png",
    title: "Pixel Dailies prompt: #BirchTree",
    description: `
      Palette: [Zughy 32](https://lospec.com/palette-list/zughy-32)
    `,
    date: "2021-08-13 23:39 UTC+1000",
    tags: ["pixel_dailies", "BirchTree", "tree", "zughy-32"],
  },
  {
    src: "2021/20210817-pixeldailies.png",
    title: "Pixel Dailies prompt: #groceries",
    description: `
      Palette: [Apollo](https://lospec.com/palette-list/apollo)
    `,
    date: "2021-08-17 23:46 UTC+1000",
    tags: ["pixel_dailies", "groceries", "fruit", "apollo"],
  },
  {
    src: "2021/20210821-pixeldailies.png",
    title: "Pixel Dailies prompt: #porthole",
    description: `
      Palette: [Whimsical 20](https://lospec.com/palette-list/whimsical-20)
    `,
    date: "2021-08-21 23:59 UTC+1000",
    tags: ["pixel_dailies", "porthole", "seascape", "whimsical-20"],
  },
  {
    src: "2021/20210903-pixeldailies.png",
    title: "Pixel Dailies prompt: Set of #trees",
    description: `
      Palette: [Sunshine Valley](https://lospec.com/palette-list/sunshine-valley)
      Restriction: each tree must be 12x18px
    `,
    date: "2021-09-03 22:59 UTC+1000",
    tags: ["pixel_dailies", "set", "trees", "seasons", "sunshine-valley"],
  },
  {
    src: "2021/20210905-pixeldailies.png",
    title: "Pixel Dailies prompt: #Floral",
    description: `
      Palette: [Twilight 5](https://lospec.com/palette-list/twilight-5)
      Restriction: Twilight 5 palette
    `,
    date: "2021-09-05 23:39 UTC+1000",
    tags: ["pixel_dailies", "Floral", "flowers", "twilight-5"],
  },
  {
    src: "2021/20210909-pixeldailies.png",
    title: "Pixel Dailies prompt: #bookstore",
    description: `
      Palette: [Nostalgia48](https://lospec.com/palette-list/nostalgia48)
    `,
    date: "2021-09-09 23:51 UTC+1000",
    tags: ["pixel_dailies", "bookstore", "interior", "nostalgia48"],
  },
  {
    src: "2021/20210917-pixeldailies.png",
    title: "Pixel Dailies prompt: #diner",
    description: `
      Palette: [WATT32](https://lospec.com/palette-list/watt32)
    `,
    date: "2021-09-17 23:58 UTC+1000",
    tags: ["pixel_dailies", "diner", "watt32"],
  },
  {
    src: "2021/20210918-pixeldailies.png",
    title: "Pixel Dailies prompt: #cat",
    description: `
      Palette: [Apollo](https://lospec.com/palette-list/apollo)
      Restriction: 32x32px or less

      Featuring Sakamoto from Nichijou
    `,
    date: "2021-09-18 22:05 UTC+1000",
    tags: ["pixel_dailies", "cat", "nichijou", "apollo"],
  },
  {
    src: "2021/20210919-pixeldailies.png",
    title: "Pixel Dailies prompt: #Origami",
    description: `
      Palette: [SLSO8](https://lospec.com/palette-list/slso8)
    `,
    date: "2021-09-19 23:53 UTC+1000",
    tags: ["pixel_dailies", "Origami", "crane", "slso8"],
  },
  {
    src: "2021/20210925-lospecdaily.png",
    title: "Lospec Dailies prompt: #clouds",
    description: `
      Palette: [Grape Soda Arcade](https://lospec.com/palette-list/grape-soda-arcade)
    `,
    date: "2021-09-25 23:55 UTC+1000",
    tags: [
      "lospecdailies",
      "clouds",
      "lospec_palette_of_the_day",
      "grape-soda-arcade",
    ],
  },
  {
    src: "2021/20211001-pointe-de-pen-hir.png",
    title: "Pointe de Pen-Hir, Camaret-sur-Mer, France",
    description: `
      Palette: [Sweet Canyon Extended 64](https://lospec.com/palette-list/sweet-canyon-extended-64)

      Largest drawing so far. Started back on 2020-12-13. Took a while trying to pick a palette,
      then took a while longer trying to figure out how to draw all the different textures

      [Reference image](https://windows10spotlight.com/images/d7ab09721ad573de49ac62f34bd73d80)
    `,
    date: "2021-10-01 23:33 UTC+1000",
    tags: ["landscape", "sweet-canyon-extended-64"],
  },
  {
    src: "2021/20211002-pixeldailies.png",
    title: "Pixel Dailies prompt: #illusion",
    description: `
      Palette: [2-bit Grayscale Palette](https://lospec.com/palette-list/2-bit-grayscale)
    `,
    date: "2021-10-02 14:25 UTC+1000",
    tags: ["pixel_dailies", "illusion", "2-bit-grayscale"],
  },
  {
    src: "2021/20211003-pixeldailies.png",
    title: "Pixel Dailies prompt: #PumpkinHouse",
    description: `
      Palette: [Dreamscape8](https://lospec.com/palette-list/dreamscape8)
      Restriction: Dreamscape8 palette
    `,
    date: "2021-10-03 23:54 UTC+1100",
    tags: [
      "pixel_dailies",
      "PumpkinHouse",
      "pumpkin",
      "halloween",
      "dreamscape8",
    ],
  },
  {
    src: "2021/20211007-pixeldailies.png",
    title: "Pixel Dailies prompt: #lavender",
    description: `
      Palette: [Moor](https://lospec.com/palette-list/moor)
    `,
    date: "2021-10-07 00:05 UTC+1100",
    tags: ["pixel_dailies", "lavender", "plant", "moor"],
  },
  {
    src: "2021/20211010-rabbit.png",
    title: "Redraw of 20201010-lospecdaily",
    description: `
      Palette: [MonoMetalic](https://lospec.com/palette-list/monometalic)

      One year on. Same subject, same palette. See [20201010-lospecdaily](20201010-lospecdaily).
      Thanks to everyone who's been following along over the past year. I appreciate you all.
      See you at the 200th post :D
    `,
    date: "2021-10-10 13:20 UTC+1100",
    tags: ["rabbit", "redraw", "monometalic"],
  },
  {
    src: "2021/20211011-on-tap.png",
    title: "On Tap, Caroline Springs",
    description: `
      Palette: [Sunshine Valley](https://lospec.com/palette-list/sunshine-valley)

      Happy Pixel Art Day everyone!
    `,
    date: "2021-10-11 22:44 UTC+1100",
    tags: ["noprompt", "sculpture", "water", "sunshine-valley"],
  },
  {
    src: "2021/20211016-pixeldailies.png",
    title: "Pixel Dailies prompt: #flammable",
    description: `
      Palette: [Endesga 36](https://lospec.com/palette-list/endesga-36)
    `,
    date: "2021-10-16 20:07 UTC+1100",
    tags: ["pixel_dailies", "flammable", "steel", "endesga-36"],
  },
  {
    src: "2021/20211024-wheat-field.png",
    title: "Wheat Field",
    description: `
      Palette: [Wheat Field](https://lospec.com/palette-list/wheat-field)
    `,
    date: "2021-10-24 13:20 UTC+1100",
    tags: ["landscape", "wheat", "imaginary", "wheat-field"],
  },
  {
    src: "2021/20211105-pixeldailies.png",
    title: "Pixel Dailies prompt: #walrus",
    description: `
      Palette: [Apollo](https://lospec.com/palette-list/apollo)
    `,
    date: "2021-11-05 01:21 UTC+1100",
    tags: ["pixel_dailies", "walrus", "apollo"],
  },
  {
    src: "2021/20211106-pixeldailies.png",
    title: "Pixel Dailies prompt: #victory",
    description: `
      Palette: [Nostalgia48](https://lospec.com/palette-list/nostalgia48)

      Celeste Chapter 7 ending screen.
    `,
    date: "2021-11-06 23:48 UTC+1100",
    tags: ["pixel_dailies", "victory", "celeste", "nostalgia48"],
  },
  {
    src: "2021/20211109-pixeldailies.png",
    title: "Pixel Dailies prompt: #porcupine",
    description: `
      Palette: [MATT36](https://lospec.com/palette-list/matt36)
    `,
    date: "2021-11-09 23:57 UTC+1100",
    tags: ["pixel_dailies", "porcupine", "matt36"],
  },
  {
    src: "2021/20211112-pixeldailies.png",
    title: "Pixel Dailies prompt: #ants",
    description: `
      Palette: [MistyShore28](https://lospec.com/palette-list/mistyshore28)
    `,
    date: "2021-11-12 23:45 UTC+1100",
    tags: ["pixel_dailies", "ants", "mistyshore28"],
  },
  {
    src: "2021/20211122-pixeldailies.png",
    title: "Pixel Dailies prompt: #InsideThePokeball",
    description: `
      Palette: [Nostalgia48](https://lospec.com/palette-list/nostalgia48)
    `,
    date: "2021-11-22 00:51 UTC+1100",
    tags: [
      "pixel_dailies",
      "InsideThePokeball",
      "pokemon",
      "piplup",
      "nostalgia48",
    ],
  },
  {
    src: "2021/20211123-pixeldailies.png",
    title: "Pixel Dailies prompt: #mist",
    description: `
      Palette: [JustParchment8](https://lospec.com/palette-list/justparchment8)
    `,
    date: "2021-11-23 23:47 UTC+1100",
    tags: ["pixel_dailies", "mist", "landscape", "justparchment8"],
  },
  {
    src: "2021/20211127-pixeldailies.png",
    title: "Pixel Dailies prompt: #dagger",
    description: `
      Palette: [Punolite Plus Plus](https://lospec.com/palette-list/punolite-plus-plus)
      Restriction: 32x32 pixels or less
    `,
    date: "2021-11-27 23:25 UTC+1100",
    tags: ["pixel_dailies", "dagger", "punolite-plus-plus"],
  },
  {
    src: "2021/20211129-pixeldailies.png",
    title: "Pixel Dailies prompt: #Vegetation",
    description: `
      Palette: [Nostalgia48](https://lospec.com/palette-list/nostalgia48)
    `,
    date: "2021-11-29 23:59 UTC+1100",
    tags: ["pixel_dailies", "Vegetation", "nostalgia48"],
  },
  {
    src: "2021/20211204-pixeldailies.png",
    title: "Pixel Dailies prompt: #CannedFood",
    description: `
      Palette: [Nostalgia48](https://lospec.com/palette-list/nostalgia48)
    `,
    date: "2021-12-04 23:34 UTC+1100",
    tags: ["pixel_dailies", "CannedFood", "food", "nostalgia48"],
  },
  {
    src: "2021/20211205-pixeldailies.png",
    title: "Pixel Dailies prompt: #Icy",
    description: `
      Palette: [IcyWitch](https://lospec.com/palette-list/icywitch)
      Restriction: IcyWitch palette
    `,
    date: "2021-12-05 23:47 UTC+1100",
    tags: ["pixel_dailies", "Icy", "landscape", "icywitch"],
  },
  {
    src: "2021/20211206-pixeldailies.png",
    title: "Pixel Dailies prompt: #TrappedInABottle",
    description: `
      Palette: [Sweet Canyon 32](https://lospec.com/palette-list/sweet-canyon-32)
    `,
    date: "2021-12-06 23:52 UTC+1100",
    tags: [
      "pixel_dailies",
      "TrappedInABottle",
      "ship",
      "glass",
      "sweet-canyon-32",
    ],
  },
  {
    src: "2021/20211211-xiao-long-bao.png",
    title: "Xiao long bao",
    description: `
      Palette: [Apollo](https://lospec.com/palette-list/apollo)
    `,
    date: "2021-12-11 23:09 UTC+1100",
    tags: ["noprompt", "food", "apollo"],
  },
  {
    src: "2021/20211220-pixeldailies.png",
    title: "Pixel Dailies prompt: #Crystal",
    description: `
      Palette: [Nostalgia48](https://lospec.com/palette-list/nostalgia48)
    `,
    date: "2021-12-20 23:44 UTC+1100",
    tags: ["pixel_dailies", "Crystal", "nostalgia48"],
  },
  {
    src: "2021/20211224-pixeldailies.png",
    title: "Pixel Dailies prompt: #forest",
    description: `
      Palette: [Nostalgia48](https://lospec.com/palette-list/nostalgia48)
    `,
    date: "2021-12-24 20:25 UTC+1100",
    tags: ["pixel_dailies", "forest", "snow", "nostalgia48"],
  },
  {
    src: "2021/20211225-pixeldailies.png",
    title: "Pixel Dailies prompt: #Grinch",
    description: `
      Palette: [Endesga 36](https://lospec.com/palette-list/endesga-36)
      Restriction: 32x32px
    `,
    date: "2021-12-25 18:09 UTC+1100",
    tags: ["pixel_dailies", "Grinch", "endesga-36"],
  },
  {
    src: "2021/20211226-pixeldailies.png",
    title: "Pixel Dailies prompt: #Wreath",
    description: `
      Palette: [Sunshine Valley](https://lospec.com/palette-list/sunshine-valley)
    `,
    date: "2021-12-26 22:04 UTC+1100",
    tags: ["pixel_dailies", "Wreath", "sunshine-valley"],
  },
  {
    src: "2021/20211228-bossa-nova-carlton.png",
    title: "Bossa Nova, Carlton",
    description: `
      Palette: [Sunshine Valley](https://lospec.com/palette-list/sunshine-valley)
    `,
    date: "2021-12-28 22:00 UTC+1100",
    tags: ["noprompt", "restaurant", "cafe", "melbourne", "sunshine-valley"],
  },
  {
    src: "2021/20211229-pixeldailies.png",
    title: "Pixel Dailies prompt: #deer",
    description: `
      Palette: [Apollo](https://lospec.com/palette-list/apollo)
    `,
    date: "2021-12-29 00:11 UTC+1100",
    tags: ["pixel_dailies", "deer", "apollo"],
  },
  {
    src: "2021/20211231-pixeldailies.png",
    title: "Pixel Dailies prompt: #analogue",
    description: `
      Palette: [Apollo](https://lospec.com/palette-list/apollo)

      Last pixel art for the year. Thanks again to those
      of you that have been following along. See you in 2022!
    `,
    date: "2021-12-31 23:35 UTC+1100",
    tags: ["pixel_dailies", "analogue", "watch", "apollo"],
  },
  {
    src: "2022/20220101-pixeldailies.png",
    title: "Pixel Dailies prompt: #YearInReview",
    description: `
      Palette: [Sweet Canyon 32](https://lospec.com/palette-list/sweet-canyon-32)

      From [Pixel Dailies](https://twitter.com/Pixel_Dailies/status/1476893400775344129):
      > Pixel something you did in 2021 that you're proud of, enjoyed, or are eager to share

      Featuring a miniature of [20211001-pointe-de-pen-hir](20211001-pointe-de-pen-hir),
      the first 192x108px image in this gallery.
    `,
    date: "2022-01-01 23:42 UTC+1100",
    tags: [
      "pixel_dailies",
      "YearInReview",
      "meta",
      "redraw",
      "sweet-canyon-32",
    ],
  },
  {
    src: "2022/20220102-pixeldailies.png",
    title: "Pixel Dailies prompt: #Stripes",
    description: `
      Palette: [Sweet Canyon 32](https://lospec.com/palette-list/sweet-canyon-32)
    `,
    date: "2022-01-02 23:45 UTC+1100",
    tags: ["pixel_dailies", "Stripes", "bee", "sweet-canyon-32"],
  },
  {
    src: "2022/20220103-pixeldailies.png",
    title: "Pixel Dailies prompt: #Box",
    description: `
      Palette: [AYY4](https://lospec.com/palette-list/ayy4)

      Restriction: 4 colour AYY4 palette
    `,
    date: "2022-01-03 22:27 UTC+1100",
    tags: ["pixel_dailies", "Box", "cat", "ayy4"],
  },
  {
    src: "2022/20220104-pixeldailies.png",
    title: "Pixel Dailies prompt: #meter",
    description: `
      Palette: [Sunshine Valley](https://lospec.com/palette-list/sunshine-valley)
    `,
    date: "2022-01-04 23:05 UTC+1100",
    tags: ["pixel_dailies", "meter", "sunshine-valley"],
  },
  {
    src: "2022/20220105-pixeldailies.png",
    title: "Pixel Dailies prompt: #EnergyDrink",
    description: `
      Palette: [Smoke: It's OK to feel](https://lospec.com/palette-list/smoke-its-ok-to-feel)
    `,
    date: "2022-01-05 22:40 UTC+1100",
    tags: [
      "pixel_dailies",
      "EnergyDrink",
      "coffee",
      "drink",
      "smoke-its-ok-to-feel",
    ],
  },
  {
    src: "2022/20220106-pixeldailies.png",
    title: "Pixel Dailies prompt: #Lakehouse",
    description: `
      Palette: [Sunshine Valley](https://lospec.com/palette-list/sunshine-valley)
    `,
    date: "2022-01-06 22:56 UTC+1100",
    tags: ["pixel_dailies", "Lakehouse", "water", "sunshine-valley"],
  },
  {
    src: "2022/20220107-pixeldailies.png",
    title: "Pixel Dailies prompt: #team",
    description: `
      Palette: [Endesga 36](https://lospec.com/palette-list/endesga-36)
    `,
    date: "2022-01-07 20:08 UTC+1100",
    tags: ["pixel_dailies", "team", "amongus", "endesga-36"],
  },
  {
    src: "2022/20220108-pixeldailies.png",
    title: "Pixel Dailies prompt: #tent",
    description: `
      Palette: [Apollo](https://lospec.com/palette-list/apollo)
    `,
    date: "2022-01-08 23:20 UTC+1100",
    tags: ["pixel_dailies", "tent", "apollo"],
  },
  {
    src: "2022/20220110-pixeldailies.png",
    title: "Pixel Dailies prompt: #herbs",
    description: `
      Palette: [Apollo](https://lospec.com/palette-list/apollo)

      Chives, mint, bay leaves, rosemary
    `,
    date: "2022-01-10 23:26 UTC+1100",
    tags: ["pixel_dailies", "herbs", "apollo"],
  },
  {
    src: "2022/20220112-pixeldailies.png",
    title: "Pixel Dailies prompt: set of #EggRecipes",
    description: `
      Palette: [Lux3k](https://lospec.com/palette-list/lux3k)
      Restriction: 32x32px or less per food that includes egg

      Fried eggs, pancakes, omelette rice and tamago sushi
    `,
    date: "2022-01-12 23:46 UTC+1100",
    tags: ["pixel_dailies", "EggRecipes", "food", "set", "lux3k"],
  },
  {
    src: "2022/20220115-pixeldailies.png",
    title: "Pixel Dailies prompt: #combo",
    description: `
      Palette: [Endesga 36](https://lospec.com/palette-list/endesga-36)
    `,
    date: "2022-01-15 23:25 UTC+1100",
    tags: ["pixel_dailies", "combo", "food", "endesga-36"],
  },
  {
    src: "2022/20220117-pixeldailies.png",
    title: "Pixel Dailies prompt: #StillLife",
    description: `
      Palette: [Apollo](https://lospec.com/palette-list/apollo)
      Challenge: reference a natural or man-made object in your own house
    `,
    date: "2022-01-17 22:11 UTC+1100",
    tags: ["pixel_dailies", "StillLife", "drink", "apollo"],
  },
  {
    src: "2022/20220124-pixeldailies.png",
    title: "Pixel Dailies prompt: #Raven",
    description: `
      Palette: [Nyx8](https://lospec.com/palette-list/nyx8)
    `,
    date: "2022-01-24 22:17 UTC+1100",
    tags: ["pixel_dailies", "Raven", "bird", "nyx8"],
  },
  {
    src: "2022/20220126-lospecdaily.png",
    title: "Lospec Dailies prompt: #forest",
    description: `
      Palette: [Camouflage-7](https://lospec.com/palette-list/camouflage-7)
    `,
    date: "2022-01-26 21:46 UTC+1100",
    tags: [
      "lospecdailies",
      "forest",
      "lospec_palette_of_the_day",
      "camouflage-7",
    ],
  },
  {
    src: "2022/20220127-pixeldailies.png",
    title: "Pixel Dailies prompt: #home",
    description: `
      Palette: [Nostalgia48](https://lospec.com/palette-list/nostalgia48)
    `,
    date: "2022-01-27 23:58 UTC+1100",
    tags: ["pixel_dailies", "home", "nostalgia48"],
  },
  {
    src: "2022/20220128-pixeldailies.png",
    title: "Pixel Dailies prompt: #Possum",
    description: `
      Palette: [Apollo](https://lospec.com/palette-list/apollo)
    `,
    date: "2022-01-28 23:58 UTC+1100",
    tags: ["pixel_dailies", "Possum", "animal", "apollo"],
  },
  {
    src: "2022/20220203-pixeldailies.png",
    title: "Pixel Dailies prompt: #Barricade",
    description: `
      Palette: [Apollo](https://lospec.com/palette-list/apollo)
    `,
    date: "2022-02-03 00:10 UTC+1100",
    tags: ["pixel_dailies", "Barricade", "apollo"],
  },
  {
    src: "2022/20220207-noprompt.png",
    title: "Lychee Sponge Cake",
    description: `
      Palette: [AAP-64](https://lospec.com/palette-list/aap-64)
    `,
    date: "2022-02-07 23:58 UTC+1100",
    tags: ["noprompt", "cake", "food", "aap-64"],
  },
  {
    src: "2022/20220212-crepe.png",
    title:
      "Crepe with fresh strawberries, raspberry coulis, vanilla ice cream and pistachio",
    description: `
      Palette: [ZyKro-48](https://lospec.com/palette-list/zykro-48)
    `,
    date: "2022-02-12 23:04 UTC+1100",
    tags: ["noprompt", "crepe", "food", "zykro-48"],
  },
  {
    src: "2022/20220212-pixeldailies.png",
    title: "Pixel Dailies prompt: #celebration",
    description: `
      Palette: [Sweet Canyon 32](https://lospec.com/palette-list/sweet-canyon-32)

      200th post. Thanks again for following along! See you at the 300th post.
    `,
    date: "2022-02-12 23:45 UTC+1100",
    tags: ["pixel_dailies", "celebration", "candle", "sweet-canyon-32"],
  },
  {
    src: "2022/20220213-pixeldailies.png",
    title: "Pixel Dailies prompt: #seashore",
    description: `
      Palette: [Nostalgia48](https://lospec.com/palette-list/nostalgia48)
    `,
    date: "2022-02-13 23:55 UTC+1100",
    tags: ["pixel_dailies", "seashore", "beach", "nostalgia48"],
  },
  {
    src: "2022/20220214-pixeldailies.png",
    title: "Pixel Dailies prompt: Set of #textures",
    description: `
      Palette: [Sunshine Valley](https://lospec.com/palette-list/sunshine-valley)

      From top-left:
      wood, grass, stone
      sand, snow, water
      cheese, cake, chocolate
    `,
    date: "2022-02-14 23:47 UTC+1100",
    tags: ["pixel_dailies", "textures", "isometric", "set", "sunshine-valley"],
  },
  {
    src: "2022/20220217-pixeldailies.png",
    title: "Pixel Dailies prompt: #JuiceBox",
    description: `
      Palette: [superficial-35](https://lospec.com/palette-list/superficial-35)
    `,
    date: "2022-02-17 00:10 UTC+1100",
    tags: ["pixel_dailies", "JuiceBox", "superficial-35"],
  },
  {
    src: "2022/20220217-pixeldailies2.png",
    title: "Pixel Dailies prompt: #pyramid",
    description: `
      Palette: [Wheat Field](https://lospec.com/palette-list/wheat-field)
    `,
    date: "2022-02-17 23:59 UTC+1100",
    tags: ["pixel_dailies", "pyramid", "landscape", "wheat-field"],
  },
  {
    src: "2022/20220220-pixeldailies.png",
    title: "Pixel Dailies prompt: #Dark",
    description: `
      Palette: [Apollo](https://lospec.com/palette-list/apollo)
    `,
    date: "2022-02-20 22:55 UTC+1100",
    tags: ["pixel_dailies", "Dark", "candle", "apollo"],
  },
  {
    src: "2022/20220223-pixeldailies.png",
    title: "Pixel Dailies prompt: #halberd",
    description: `
      Palette: [Apollo](https://lospec.com/palette-list/apollo)
    `,
    date: "2022-02-23 23:54 UTC+1100",
    tags: ["pixel_dailies", "halberd", "weapon", "apollo"],
  },
  {
    src: "2022/20220227-pixeldailies.png",
    title: "Pixel Dailies prompt: #Tarnished",
    description: `
      Palette: [AAP-64](https://lospec.com/palette-list/aap-64)
    `,
    date: "2022-02-27 22:14 UTC+1100",
    tags: ["pixel_dailies", "Tarnished", "ring", "aap-64"],
  },
  {
    src: "2022/20220303-pixeldailies.png",
    title: "Pixel Dailies prompt: #Barrel",
    description: `
      Palette: [comfy52](https://lospec.com/palette-list/comfy52)

      [Reference image](https://www.dreamstime.com/stock-photo-red-wine-grapes-barrel-old-wooden-table-image44545937)
    `,
    date: "2022-03-03 00:35 UTC+1100",
    tags: ["pixel_dailies", "Barrel", "wood", "glass", "wine", "comfy52"],
  },
  {
    src: "2022/20220305-pixeldailies.png",
    title: "Pixel Dailies prompt: #ruins",
    description: `
      Palette: [Wheat Field](https://lospec.com/palette-list/wheat-field)
      Restriction: 30x24px or less
    `,
    date: "2022-03-05 16:27 UTC+1100",
    tags: ["pixel_dailies", "ruins", "cube", "wheat-field"],
  },
  {
    src: "2022/20220306-pixeldailies.png",
    title: "Pixel Dailies prompt: #Arid",
    description: `
      Palette: [golden-sunset](https://lospec.com/palette-list/golden-sunset)
      Restriction: golden-sunset palette
    `,
    date: "2022-03-06 23:44 UTC+1100",
    tags: ["pixel_dailies", "Arid", "desert", "golden-sunset"],
  },
  {
    src: "2022/20220307-pixeldailies.png",
    title: "Pixel Dailies prompt: #Crooked",
    description: `
      Palette: [WATT32](https://lospec.com/palette-list/watt32)
    `,
    date: "2022-03-07 23:40 UTC+1100",
    tags: ["pixel_dailies", "Crooked", "tower", "building", "watt32"],
  },
  {
    src: "2022/20220308-pixeldailies.png",
    title: "Pixel Dailies prompt: #pizza",
    description: `
      Palette: [superficial-35](https://lospec.com/palette-list/superficial-35)
    `,
    date: "2022-03-08 23:59 UTC+1100",
    tags: ["pixel_dailies", "pizza", "food", "superficial-35"],
  },
  {
    src: "2022/20220309-pixeldailies.png",
    title: "Pixel Dailies prompt: Set of #fungi",
    description: `
      Palette: [superficial-35](https://lospec.com/palette-list/superficial-35)
      Restriction: 30x30px or less per fungus
    `,
    date: "2022-03-09 23:59 UTC+1100",
    tags: ["pixel_dailies", "set", "fungi", "superficial-35"],
  },
  {
    src: "2022/20220310-pixeldailies.png",
    title: "Pixel Dailies prompt: #wolf",
    description: `
      Palette: [SLSO8](https://lospec.com/palette-list/slso8)
    `,
    date: "2022-03-10 23:55 UTC+1100",
    tags: ["pixel_dailies", "wolf", "moon", "night", "slso8"],
  },
  {
    src: "2022/20220311-pixeldailies.png",
    title: "Pixel Dailies prompt: #teetering",
    description: `
      Palette: [Polxel-43](https://lospec.com/palette-list/polxel-43)

      [Reference image](https://photos.com/featured/rocks-balancing-on-driftwood-sea-in-dimitri-otis.html)
    `,
    date: "2022-03-11 23:29 UTC+1100",
    tags: ["pixel_dailies", "teetering", "rock", "beach", "polxel-43"],
  },
  {
    src: "2022/20220312-pixeldailies.png",
    title: "Pixel Dailies prompt: #warped",
    description: `
      Palette: [Smoke: It's OK to feel](https://lospec.com/palette-list/smoke-its-ok-to-feel)
    `,
    date: "2022-03-12 22:16 UTC+1100",
    tags: ["pixel_dailies", "warped", "clock", "smoke-its-ok-to-feel"],
  },
  {
    src: "2022/20220313-pixeldailies.png",
    title: "Pixel Dailies prompt: #Aquatic",
    description: `
      Palette: [Sweet Canyon 32](https://lospec.com/palette-list/sweet-canyon-32)
    `,
    date: "2022-03-13 23:45 UTC+1100",
    tags: ["pixel_dailies", "Aquatic", "water", "coral", "sweet-canyon-32"],
  },
  {
    src: "2022/20220314-pixeldailies.png",
    title: "Pixel Dailies prompt: #PocketWatch",
    description: `
      Palette: [Moor](https://lospec.com/palette-list/moor)
    `,
    date: "2022-03-14 23:57 UTC+1100",
    tags: ["pixel_dailies", "PocketWatch", "clock", "moor"],
  },
  {
    src: "2022/20220315-pixeldailies.png",
    title: "Pixel Dailies prompt: #windswept",
    description: `
      Palette: [Polxel-43](https://lospec.com/palette-list/polxel-43)
    `,
    date: "2022-03-15 23:25 UTC+1100",
    tags: ["pixel_dailies", "windswept", "dandelion", "polxel-43"],
  },
  {
    src: "2022/20220316-pixeldailies.png",
    title: "Pixel Dailies prompt: #garland",
    description: `
      Palette: [Tranquility Plus 39](https://lospec.com/palette-list/tranquility-plus-39)
    `,
    date: "2022-03-16 23:59 UTC+1100",
    tags: ["pixel_dailies", "garland", "flower", "tranquility-plus-39"],
  },
  {
    src: "2022/20220317-pixeldailies.png",
    title: "Pixel Dailies prompt: #gold",
    description: `
      Palette: [Golden 6](https://lospec.com/palette-list/golden-6)
    `,
    date: "2022-03-17 23:59 UTC+1100",
    tags: ["pixel_dailies", "gold", "golden-6"],
  },
  {
    src: "2022/20220318-pixeldailies.png",
    title: "Pixel Dailies prompt: #aviary",
    description: `
      Palette: [Sunshine Valley](https://lospec.com/palette-list/sunshine-valley)
    `,
    date: "2022-03-18 23:52 UTC+1100",
    tags: ["pixel_dailies", "aviary", "bird", "sunshine-valley"],
  },
  {
    src: "2022/20220319-pixeldailies.png",
    title: "Pixel Dailies prompt: #TreasureMap",
    description: `
      Palette: [superficial-35](https://lospec.com/palette-list/superficial-35)
    `,
    date: "2022-03-19 23:51 UTC+1100",
    tags: ["pixel_dailies", "TreasureMap", "map", "superficial-35"],
  },
  {
    src: "2022/20220320-pixeldailies.png",
    title: "Pixel Dailies prompt: #Rusty",
    description: `
      Palette: [superficial-35](https://lospec.com/palette-list/superficial-35)
    `,
    date: "2022-03-20 23:51 UTC+1100",
    tags: ["pixel_dailies", "Rusty", "car", "superficial-35"],
  },
  {
    src: "2022/20220321-pixeldailies.png",
    title: "Pixel Dailies prompt: #LunchBox",
    description: `
      Palette: [Endesga 64](https://lospec.com/palette-list/endesga-64)
    `,
    date: "2022-03-21 23:58 UTC+1100",
    tags: ["pixel_dailies", "LunchBox", "food", "bento", "endesga-64"],
  },
  {
    src: "2022/20220322-pixeldailies.png",
    title: "Pixel Dailies prompt: #RedPanda",
    description: `
      Palette: [Sunshine Valley](https://lospec.com/palette-list/sunshine-valley)

      [Reference image](https://www.shutterstock.com/image-photo/red-panda-curled-asleep-tree-1424043)
    `,
    date: "2022-03-22 23:59 UTC+1100",
    tags: ["pixel_dailies", "RedPanda", "panda", "animal", "sunshine-valley"],
  },
  {
    src: "2022/20220323-pixeldailies.png",
    title: "Pixel Dailies prompt: #glider",
    description: `
      Palette: [superficial-35](https://lospec.com/palette-list/superficial-35)
    `,
    date: "2022-03-23 23:59 UTC+1100",
    tags: ["pixel_dailies", "glider", "landscape", "superficial-35"],
  },
  {
    src: "2022/20220325-pixeldailies.png",
    title: "Pixel Dailies prompt: #sky",
    description: `
      Palette: [golden-sunset](https://lospec.com/palette-list/golden-sunset)
      Restriction: Don't use blue colours.
    `,
    date: "2022-03-25 23:57 UTC+1100",
    tags: ["pixel_dailies", "sky", "sunset", "golden-sunset"],
  },
  {
    src: "2022/20220326-pixeldailies.png",
    title: "Pixel Dailies prompt: #Kirby",
    description: `
      Palette: [Pink Puff GB](https://lospec.com/palette-list/pink-puff-gb)
    `,
    date: "2022-03-26 23:09 UTC+1100",
    tags: ["pixel_dailies", "Kirby", "pink-puff-gb"],
  },
  {
    src: "2022/20220327-pixeldailies.png",
    title: "Pixel Dailies prompt: #Shrub",
    description: `
      Palette: [superficial-35](https://lospec.com/palette-list/superficial-35)

      Featuring ambusher from LISA: The Painful
    `,
    date: "2022-03-27 22:24 UTC+1100",
    tags: ["pixel_dailies", "Shrub", "LISA", "superficial-35"],
  },
  {
    src: "2022/20220328-pixeldailies.png",
    title: "Pixel Dailies prompt: #construction",
    description: `
      Palette: [Nanner 32](https://lospec.com/palette-list/nanner-32)
    `,
    date: "2022-03-28 23:56 UTC+1100",
    tags: ["pixel_dailies", "construction", "nanner-32"],
  },
  {
    src: "2022/20220329-pixeldailies.png",
    title: "Pixel Dailies prompt: #BirdsEyeView",
    description: `
      Palette: [Sunshine Valley](https://lospec.com/palette-list/sunshine-valley)

      Pixel a small scene from a straight-down perspective.
    `,
    date: "2022-03-29 23:53 UTC+1100",
    tags: ["pixel_dailies", "BirdsEyeView", "suburban", "sunshine-valley"],
  },
  {
    src: "2022/20220330-pixeldailies.png",
    title: "Pixel Dailies prompt: #seal",
    description: `
      Palette: [Apollo](https://lospec.com/palette-list/apollo)

      Featuring Spheal, the Clap Pokémon
    `,
    date: "2022-03-30 23:13 UTC+1100",
    tags: ["pixel_dailies", "seal", "pokemon", "apollo"],
  },
  {
    src: "2022/20220331-pixeldailies.png",
    title: "Pixel Dailies prompt: #ShoppingMall",
    description: `
      Palette: [Apollo](https://lospec.com/palette-list/apollo)

      Level 3 Emporium, Melbourne
    `,
    date: "2022-03-31 23:55 UTC+1100",
    tags: ["pixel_dailies", "ShoppingMall", "apollo"],
  },
  {
    src: "2022/20220404-pixeldailies.png",
    title: "Pixel Dailies prompt: #CastleInTheSky",
    description: `
      Palette: [Polxel-43](https://lospec.com/palette-list/polxel-43)
    `,
    date: "2022-04-04 23:38 UTC+1000",
    tags: ["pixel_dailies", "CastleInTheSky", "sky", "cloud", "polxel-43"],
  },
  {
    src: "2022/20220411-pixeldailies.png",
    title: "Pixel Dailies prompt: #Puzzle",
    description: `
      Palette: [Sunshine Valley](https://lospec.com/palette-list/sunshine-valley)
    `,
    date: "2022-04-11 23:26 UTC+1000",
    tags: ["pixel_dailies", "Puzzle", "jigsaw", "sunshine-valley"],
  },
  {
    src: "2022/20220414-pixeldailies.png",
    title: "Pixel Dailies prompt: #ExplodedView",
    description: `
      Palette: [Apollo](https://lospec.com/palette-list/apollo)
    `,
    date: "2022-04-14 23:00 UTC+1000",
    tags: ["pixel_dailies", "ExplodedView", "phone", "apollo"],
  },
  {
    src: "2022/20220415-pixeldailies.png",
    title: "Pixel Dailies prompt: #HairAccessory",
    description: `
      Palette: [New Worlds 46](https://lospec.com/palette-list/new-worlds-46)

      Featuring Tomoe Mami from Puella Magi Madoka Magica
    `,
    date: "2022-04-15 22:26 UTC+1000",
    tags: [
      "pixel_dailies",
      "HairAccessory",
      "pmmm",
      "tomoe-mami",
      "new-worlds-46",
    ],
  },
  {
    src: "2022/20220417-pixeldailies.png",
    title: "Pixel Dailies prompt: #FirstPersonHands",
    description: `
      Palette: [New Worlds 46](https://lospec.com/palette-list/new-worlds-46)
    `,
    date: "2022-04-17 00:10 UTC+1000",
    tags: [
      "pixel_dailies",
      "FirstPersonHands",
      "sushi",
      "food",
      "new-worlds-46",
    ],
  },
  {
    src: "2022/20220418-pixeldailies.png",
    title: "Pixel Dailies prompt: #IsometricRoom",
    description: `
      Palette: [Nostalgia48](https://lospec.com/palette-list/nostalgia48)
    `,
    date: "2022-04-18 20:35 UTC+1000",
    tags: ["pixel_dailies", "IsometricRoom", "nostalgia48"],
  },
  {
    src: "2022/20220420-pixeldailies.png",
    title: "Pixel Dailies prompt: #shattered",
    description: `
      Palette: [SLSO8](https://lospec.com/palette-list/slso8)
    `,
    date: "2022-04-20 21:55 UTC+1000",
    tags: ["pixel_dailies", "shattered", "moon", "night", "sky", "slso8"],
  },
  {
    src: "2022/20220421-pixeldailies.png",
    title: "Pixel Dailies prompt: #HealingItem",
    description: `
      Palette: [Nostalgia48](https://lospec.com/palette-list/nostalgia48)
    `,
    date: "2022-04-21 22:54 UTC+1000",
    tags: ["pixel_dailies", "HealingItem", "fairy", "glass", "nostalgia48"],
  },
  {
    src: "2022/20220422-pixeldailies.png",
    title: "Pixel Dailies prompt: #prize",
    description: `
      Palette: [Smoke: It's OK to feel](https://lospec.com/palette-list/smoke-its-ok-to-feel)
    `,
    date: "2022-04-22 23:46 UTC+1000",
    tags: ["pixel_dailies", "prize", "trophy", "smoke-its-ok-to-feel"],
  },
  {
    src: "2022/20220424-pixeldailies.png",
    title: "Pixel Dailies prompt: #garnish",
    description: `
      Palette: [New Worlds 46](https://lospec.com/palette-list/new-worlds-46)
    `,
    date: "2022-04-24 00:38 UTC+1000",
    tags: ["pixel_dailies", "garnish", "food", "new-worlds-46"],
  },
  {
    src: "2022/20220424-hot-chocolate.png",
    title: "Mork Campfire Hot Chocolate",
    description: `
      Palette: [New Worlds 46](https://lospec.com/palette-list/new-worlds-46)
    `,
    date: "2022-04-24 20:38 UTC+1000",
    tags: ["noprompt", "chocolate", "drink", "new-worlds-46"],
  },
  {
    src: "2022/20220425-pixeldailies.png",
    title: "Pixel Dailies prompt: #Table",
    description: `
      Palette: [New Worlds 46](https://lospec.com/palette-list/new-worlds-46)
    `,
    date: "2022-04-25 12:41 UTC+1000",
    tags: ["pixel_dailies", "Table", "furniture", "new-worlds-46"],
  },
  {
    src: "2022/20220427-pixeldailies.png",
    title: "Pixel Dailies prompt: #phonebooth",
    description: `
      Palette: [superficial-35](https://lospec.com/palette-list/superficial-35)
    `,
    date: "2022-04-27 23:59 UTC+1000",
    tags: ["pixel_dailies", "phonebooth", "superficial-35"],
  },
]

export default entries
