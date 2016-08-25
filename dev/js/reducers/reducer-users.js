/*
 * The users reducer will always return an array of users no matter what
 * You need to return something, so if there are no users then just return an empty array
 * */

 export default function() {
     return [
         {
             id: 1,
             first: "Ulquiorra",
             last: "Schiffer",
             age: 26,
             description: "Ulquiorra Cifer (ウルキオラ・シファー, Urukiora Shifā)[2] is the Cuatro (4th) Espada in Aizen's army of Arrancar.",
             thumbnail: "http://vignette1.wikia.nocookie.net/bleach/images/f/f7/267Ulquiorra_profile.png/revision/latest/scale-to-width-down/250?cb=20140605165650&path-prefix=en"
         },
         {
             id: 2,
             first: "Aizen",
             last: "Sosuke",
             age: 31,
             description: "Sōsuke Aizen (藍染 惣右介, Aizen Sōsuke) is the former captain of the 5th Division in the Gotei 13.",
             thumbnail: "http://vignette4.wikia.nocookie.net/bleach/images/a/ab/Aizen.png/revision/latest/scale-to-width-down/250?cb=20140321023221&path-prefix=en"
         },
         {
             id: 3,
             first: "Askin",
             last: "Nakk Le Vaar",
             age: 72,
             description: "Askin Nakk Le Vaar (アスキン・ナックルヴァール, Asukin Nakkuruvāru) is a Quincy and a member of the Wandenreich's Sternritter with the designation D - The Deathdealing.",
             thumbnail: "http://vignette1.wikia.nocookie.net/vsbattles/images/3/3f/Askin-0.png/revision/latest?cb=20151226150513"
         }
     ]
 }
