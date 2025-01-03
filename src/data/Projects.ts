type Project = {
  title: string,
  image: string,
  year: string,
  company: string,
  link?: string,
  techs?: string[],
  longDesc: string
};

type Timespan = {
  title: string,
  entries: Record<string, Project>
};

type Category = {
  route: string,
  label: string,
  background: string,
  projects: Record<string, Timespan>
};

const PROJECTS: Record<string, Category> = {
  "software": {
    "route": "/professional",
    "label": "Professional",
    "background": "bgsoftware",
    "projects": {
      "timespan1": {
        "title": "2021 - 2024",
        "entries": {
          "vrchatapi": {
            "title": "VRChat API",
            "image": "/img/logo/vrchat.png",
            "year": "2021-2024",
            "company": "VRChat",
            "link": "https://hello.vrchat.com/",
            "techs": [
              "Node.js",
              "Docker",
              "Redisearch",
              "MongoDB"
            ],
            "longDesc": `
               <p class="pb-4">VRChat is a VR social platform in which users can socialize using their phones, desktop PCs, VR headsets, or even full-body tracking systems. On top of that, users can adopt new appearances through their own custom-made "avatars" as well as visit worlds created either by themselves or by others.</p>
               <p>As an API engineer for VRChat, I was responsible for maintaining the REST API, and its various databases. The systems I most interacted with enabled friends to find and visit each other, create or join groups, and share current locations.</p>
            `
          },
          "vrchatclient": {
            "title": "VRChat Unity Client",
            "image": "/img/logo/vrchat.png",
            "year": "2021-2024",
            "company": "VRChat",
            "link": "https://hello.vrchat.com/",
            "techs": [
              "Unity",
              "C#",
              "Nuke Build"
            ],
            "longDesc": `
              <p class="pb-4">Though my primary role at VRChat was as an API engineer, I on numerous occasions worked in the Unity client to help speed along the implementation of new features or fix long-standing bugs.</p>
              <p>As an example, much of the security for the Instance system, which prevented users from accessing instances (or "rooms") they weren't allowed to, required extra work client-side to complete.</p>
            `
          }
        }
      },
      "timespan2": {
        "title": "2018 - 2020",
        "entries": {
          "questmode": {
            "title": "Quest Mode",
            "image": "/img/logo/quest-mode.png",
            "year": "2018-2020",
            "company": "Opera Event",
            "techs": [
              "TypeScript",
              "Angular",
              "Ruby on Rails",
              "MongoDB"
            ],
            "longDesc": `
              <p class="pb-4">Quest Mode was an influencer engagement tool which allows one's fans to go on "quests" (micro-sponsorships) in order to earn rewards, such as free tips to the influencer, free subscriptions to the influencer's Twitch channel, and/or free damage Boss in the integrated minigame, Boss Battles.</p>
              <p>Quest Mode is an Angular Material application powered by a monolithic Ruby on Rails API (where most of my work was done). As of October 2020, over 1.5 million sponsorship events have been recorded through various forms of attribution.</p>
            `
          },
          "imp": {
            "title": "IMP",
            "image": "/img/logo/imp.jpg",
            "year": "2018-2020",
            "company": "Opera Event",
            "techs": [
              "TypeScript",
              "Angular",
              "Ruby on Rails",
              "MongoDB"
            ],
            "longDesc": `
              <p class="pb-4">The Influencer Management Portant (or "IMP") is a web-based multitenant portal designed to allow influencers, their teams, and any number of sponsors, to all connect with each other, set requirements, ensure team/brand compliance, and set tasks for the influencer to accomplish.</p>
              <p>IMP is an Angular Material application powered by a monolithic Ruby on Rails API, both of which I've worked on. First launched in late 2018, IMP is now home to over 50,000 influencers, around 20 teams, and 10 sponsors. Features include programmatic compliance via quests and goals which reward the influencer, a store and raffle system influencers can spend their rewards, on-stream carousels, Twitch chat bot commands, and timed messages.</p>
            `
          },
          "gatherbot": {
            "title": "Twitch Chat Bots",
            "image": "/img/logo/gatherbot.png",
            "year": "2018-2020",
            "company": "Opera Event",
            "techs": [
              "Golang",
              "Kubernetes",
              "RabbitMQ",
              "MongoDB"
            ],
            "longDesc": `
              <p class="pb-4">Written in Go, the Opera Event Twitch chat bots are a set of bots built within a high volume, multipurpose chat processing pipeline which handles almost 500 chat messages per second (with room to grow) for the purposes of analytics, command processing, and timed message tracking.</p>
              <p>Using a microservices architecture, RabbitMQ for messaging, and Redis for caching, and deployed into a Kubernetes cluster, the pipeline listened redundantly and losslessly to over 50,000 Twitch channels 24/7. Additionally, the chat pipeline could process commands from a streamer, their team, or any number of their sponsors all within milliseconds, track the state and timers of thousands of timed messages, and store every single incoming message (almost 1TB per month!) into Elasticsearch for later analysis.</p>
            `
          }
        }
      }
    }
  },

  "personal": {
    "route": "/personal",
    "label": "Personal",
    "background": "bghardware",
    "projects": {
      "webServer": {
        "title": "Web/Server",
        "entries": {
          "codenifty": {
            "title": "Code Nifty",
            "image": "/img/logo/code-nifty.jpg",
            "year": "2020-Present",
            "company": "Personal",
            "techs": [
              "JavaScript",
              "React.js",
              "Nginx",
              "Tailwind CSS"
            ],
            "longDesc": `
              <p>Code Nifty is a React site designed as a repository of my previous and current works and accomplishments. (It's this site right here!) Please enjoy your visit. Might I suggest the VR section below?</p>
            `
          },
          "bitbossbattles": {
            "title": "Bit Boss Battles",
            "image": "/img/logo/boss-battles.png",
            "year": "2017-2024",
            "company": "Personal",
            "techs": [
              "JavaScript",
              "jQuery",
              "Node.js",
              "MongoDB"
            ],
            "longDesc": `
              <p class="pb-4">Boss Battles is an on-stream minigame for Twitch livestreamers. Fans contribute bits, subscriptions, or tips to damage the Boss. The fan who deals the final blow becomes the next Boss.</p>
              <p class="pb-4">Developed using Bootstrap, jQuery, and served by Node.js, Bit Boss Battles launched as a personal project on Feb 19, 2017 and quickly gained popularity, reaching thousands of streamers within just 3 months. Shortly thereafter, Boss Battles was aquired by Opera Event for equity stake in the company as well as a position on the team. In September of that same year, skin customization and additional game modes were added. Analytics estimated that, from September 2017 to 2018, Boss Battles processed over $5 million in contributions through Twitch.</p>
              <p class="pb-4">Finally, following a shutdown due to Twitch deprecating certain APIs in 2021, I reacquired Bit Boss Battles from Opera Event, updated the Node.js engine, fixed the broken interfaces, and re-opened it within the span of only 2 days.</p>
              <p>Bit Boss Battles has since been shut down again due to fiscal challenges.</p>
            `
          }
        }
      },
      "mod": {
        "title": "Mods",
        "entries": {
          "drafttwitchviewers": {
            "title": "Draft Twitch Viewers",
            "image": "/img/logo/draft-twitch-viewers.png",
            "year": "2015-2016",
            "company": "Kerbal Space Program",
            "techs": [
              "Unity",
              "C#",
              "Photoshop"
            ],
            "longDesc": `
              <p class="pb-4">Draft Twitch Viewers is a mod for Kerbal Space Program. Twitch livestreamers using the mod could select viewers of the channel to be drafted into the game as Kerbals. Additionally, in career mode, viewers might be found as tourists or Kerbonauts trapped in space through the game's contract system.</p>
              <p>Support by myself for the mod has since been dropped, but the mod lives on as a fork of the original repo maintained by LinuxGuruGamer. Visit the forked repo here: <a href="https://github.com/linuxgurugamer/DraftTwitchViewers" target="_blank">https://github.com/linuxgurugamer/DraftTwitchViewers</a></p>
            `
          },
          "kerbalmechanics": {
            "title": "Kerbal Mechanics",
            "image": "/img/logo/kerbal-mechanics.png",
            "year": "2015",
            "company": "Kerbal Space Program",
            "techs": [
              "Unity",
              "C#",
              "Blender",
              "Photoshop"
            ],
            "longDesc": `
              <p class="pb-4">Kerbal Mechanics ("KM" for short) was a mod for Kerbal Space Program which provided some extra challenge by adding rocket part failure events and the ability to choose the quality of parts. Players can build using higher quality parts which are more expensive but less likely to fail, or cheaper, lower quality parts which might fail more often.</p>
              <p class="pb-4">KM also featured an option to fix broken parts either properly by carrying rocket parts with the vessel, or improperly by kicking the part (and possibly causing the part to destroy itself).</p>
              <p>Support by myself for the mod has since been dropped.</p>
            `
          }
        }
      },
      "3dmodels": {
        "title": "3D Modeling",
        "entries": {
          "nesmodel": {
            "title": "1:1 Scale Model",
            "image": "/img/hobby/nes-model.png",
            "year": "2019",
            "company": "NES",
            "longDesc": `
              <p>Accurate to a quarter millimeter, this 1:1 scale 3D model of the original Nintendo Entertainment System's plastic case includes every detail of the real parts.</p>
            `
          },
          "protowaterblock": {
            "title": "Prototype Waterblock",
            "image": "/img/hobby/prototype-waterblock.jpg",
            "year": "2019",
            "company": "NES PC",
            "longDesc": `
              <p>A prototype water cooling block for the MSI Aero ITX RTX 2060. A plastic 3D print was made to test the feasibility of the design as well as the fit to the GPU's PCB. Although the seal was difficult to install, the water flow and the fit worked out great.</p>
              <p>The part was designed as part of a larger project, which is to fit a fully-fledged high performance PC inside a case which externally looks exactly like that of the Nintendo Entertainment System.</p>
            `
          },
          "crescentrose": {
            "title": "Crescent Rose",
            "image": "/img/hobby/crescent-rose.png",
            "year": "2013",
            "company": "RWBY (Anime)",
            "longDesc": `
              <p>One of my earliest 3D models, Crescent Rose is the weapon of Ruby Rose in the western anime <i>RWBY</i>, developed by Monty Oum under Rooster Teeth. This render shows Crescent Rose missing its scope, which was later added, but no renders were saved after that point and the original model has since been lost.</p>
            `
          }
        }
      },
      "hardware": {
        "title": "Hardware",
        "entries": {
          "4mbrom": {
            "title": "4MB Sega Genesis ROM",
            "image": "/img/hw/4mb-genesis-rom.png",
            "year": "2019",
            "company": "Sega Genesis",
            "longDesc": `
              <p>Developed as a personal challenge, this 4 megabyte Sega Genesis ROM cartridge features a 5v to 3.3v regulator powering 3 bidirectional digital level translators for the 3.3v NOR ROM IC's 22 address lines, 16 data lines, and approximately 5 control lines. An 8-pin programming and utility header is also built in.</p>
              <p>5 protoype boards currently exist, but as of summer 2020, the means to program and test them has not yet been fabricated...</p>
            `
          },
          "1grom": {
            "title": "1GB Sega Genesis ROM (Design)",
            "image": "/img/hw/1gb-genesis-rom.png",
            "year": "2019",
            "company": "Sega Genesis",
            "longDesc": `
              <p>In order to experiment with the concept of bank switching, which allows for expansion of the ROM size beyond the addressable limits of the console, I designed this 1GB Sega Genesis ROM. It features 4 256MB NOR ROMs at 3.3v, a 5v to 3.3v regulator powering the necessary 4 bidirectional digital level shifters. Lastly, to power the bank switching system, 2 dual NOR ICs, 1 8 bit latch, and a 2-to-4 demultiplexer are used.</p>
              <p>Given the Sega Genesis has a specific pin which goes low when writing to a very specific address range ($A13000-$A130FF), the ROM can latch the first 8 bits on the write operation and then use 5 of the output pins for higher addresses within a single ROM, and the last 2 for demuxing into 4 chip-enable pins. It's theoretically very easy to replace the demux with a 3-to-8 in order to double the space up to 2GB.</p>
              <p>This design hasn't yet been prototyped as of summer 2020.</p>
            `
          }
        }
      },
      "vr": {
        "title": "VR",
        "entries": {
          "owlt": {
            "title": "Overwatch League Theater",
            "image": "/img/hobby/owlt.png",
            "year": "2019",
            "company": "World - VRChat",
            "longDesc": `
              <p>The Overwatch League Theater was a VRChat world designed to allow friends who can't be together to watch the 2019 Overwatch League season. Featuring a large HD screen, holdable flags for each team, and an up-to-date season schedule and scoreboard in the back, the OWLT could house up to 25 people in a single instance.</p>
              <p>Since the move from Twitch to YouTube for season 3, the OWLT is no longer operable, though I recently handed out the source model files to another individual.</p>
            `
          }
        }
      }
    }
  }
};

export default PROJECTS;
export type {
  Project,
  Timespan,
  Category
};