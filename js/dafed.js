(function() {
    /*
      Zadatak:
        Izračunati zbir svih celih brojeva u zadatom opsegu N i K, pri čemu je N uvek manje od K. N i K mogu biti i negativni.
        Primer 1:
          N = 4
          K = 11
          Rešenje: 4 + 5 + 6 + 7 + 8 + 9 + 10 + 11 = 60
        
        Primer 2:
          N = -3
          K = 2
          Rešenje: -3 + (-2) + (-1) + 0 + 1 + 2 = -3
    */
    // var N = 4;
    // var K = 11;
    // var suma = 0;

    // for(var i = N; i <= K; i++) {
    //   suma += i;
    // }

    // console.log(suma);
    function sumOfNum(n, k) {
        var element = 0;
        for (var i = n; i <= k; i++) {
            element = element + i;
            //console.log(element)

        }
        return element;
    }
    sumOfNum(4, 11);
    // console.log(sumOfNum(4, 11));
    // console.log(sumOfNum(-3, 2));
}());
//===========================================================================
(function() {
    /*
      Zadatak:
        Izračunati zbir svih celih brojeva u zadatom opsegu N i K, pri čemu je N uvek manje od K. N i K mogu biti i negativni.
        Dodatni zahtev #1: Napraviti proveru da li je N manje od K, 
                        ako nije ispisati u konzoli poruku korisniku da je uneti opseg pogrešan i ne izvršavati dalju logiku.
        Dodatni zahtev #2: Napraviti proveru da li su N i K zaista brojevi, ako jesu nastaviti sa logikom, u suprotnom vratiti poruku o grešci.
        
        Primer 1:
          N = 4
          K = 11
          Rešenje: 4 + 5 + 6 + 7 + 8 + 9 + 10 + 11 = 60
        
        Primer 2:
          N = -3
          K = 2
          Rešenje: -3 + (-2) + (-1) + 0 + 1 + 2 = -3
    */

    function sumOfNum(n, k) {
        var element = 0;
        if (n > k || typeof n !== 'number' || typeof k !== 'number') {
            return 'N is biger then K. Stop loop'
        } else {
            for (var i = n; i <= k; i++) {
                element = element + i;
                // console.log(element)

            }
        }
        return element;
    }
    sumOfNum('b', 11);
    // console.log(sumOfNum(-3, 2));

}());
(function() {

    /*
      Zadatak:
        Koliko komada proizvoda možemo da kupimo ako znamo koliko para imamo na računu i koliko košta jedan proizvod?
        Koristiti neku od petlji.
    */
    //   var balansNaRacunu = 200;
    // var cenaProizvoda = 14;

    // var kupljenoKomada = 0;

    // //sve dok na racunu imamo vise ili tacno toliko para koliko proizvod kosta, kupi taj proizvod
    // while( balansNaRacunu - cenaProizvoda >= 0 ) {
    //   balansNaRacunu -= cenaProizvoda;
    //   kupljenoKomada++;
    //}

    function getQuanity(balansNaRacunu, cenaProizvoda) {
        var kolicina = 0;
        while (balansNaRacunu - cenaProizvoda >= 0) {
            balansNaRacunu = balansNaRacunu - cenaProizvoda;
            kolicina++;
        }
        return kolicina;
    };
    getQuanity(214, 14);
    // console.log(getQuanity(214, 14))

}());
//==========================================================================
(function() {

    /*
      Zadatak:
        Zadat je niz celih brojeva. Razvrstati njegove elemente prema parnosti i smestiti ih u respektivne nizove.
        Primer:
          var niz = [34, 5, 3, 78, 9, 12, 11];
          Na kraju nam treba:
          var parni = [34, 78, 12];
          var neparni = [5, 3, 9, 11];
          
       HINT: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder_()
    */
    // var niz = [34, 5, 3, 78, 9, 12, 11];
    // var parni = [];
    // var neparni = [];

    // for(var i = 0; i < niz.length; i++) {
    //   if(niz[i] % 2 === 0) {
    //     parni.push( niz[i] );
    //   } else {
    //     neparni.push( niz[i] );
    //   }
    // }

    // console.log("Parni: ", parni);
    // console.log("Neparni: ", neparni);

    var niz = [34, 5, 3, 78, 9, 12, 11];
    //filter
    // function razvrstatiElemente(sort) {
    //     var parni = [];
    //     var neparni = [];

    //     sort.filter(function(element) {
    //         if (element % 2 === 0) {
    //             parni.push(element);
    //         } else {
    //             neparni.push(element);
    //         }

    //         //console.log(parni);
    //     });
    //     return { parni, neparni };
    // };
    //reduce
    // function razvrstatiElemente(sort) {
    //     return sort.reduce(function(agg, element) {
    //         console.log('agg', agg, element)
    //         if (agg.parni === undefined) {
    //             agg.parni = [];
    //         }
    //         if (agg.neparni === undefined) {
    //             agg.neparni = [];
    //         }
    //         if (element % 2 === 0) {
    //             agg.parni.push(element);
    //         } else {
    //             agg.neparni.push(element);
    //         }
    //         return agg;
    //         //console.log(parni);
    //     }, {});

    // };
    //console.log(razvrstatiElemente(niz));

    function razvrstatiElemente(sort) {

        return niz.reduce(function(agg, element) {
            // Proveravamo parnost trenutnog elementa i smeštamo ga u odgovarajući niz
            if (element % 2 === 0) {
                agg.parni.push(element);
            } else {
                agg.neparni.push(element);
            }
            return agg;

        }, {
            parni: [],
            neparni: []
        });
    };
    razvrstatiElemente(niz);
}());
//========================================================================================================================
(function() {
    /*
      Kao ulazna vrednost zadat je niz celih brojeva. Proveriti da li u tom nizu postoje bar 2 ista elementa.
      Ukoliko postoje bar 2 ista elementa vratiti true vrednost, u suprotnom false. Primeri:
      
      var niz = [3, 6, 7, 8]; // false
      var niz = [1, 3, 1, 5]; // true
      
      Napisati i funkciju za to.
    */
    //var niz = [3, 6, 7, 8]; // false
    var niz = [1, 3, 6, 5]; // true

    function checkEquality(arrElements) {
        for (var i = 0; i < arrElements.length; i++) {
            for (var j = 1; j < arrElements.length; j++) {
                if (arrElements[i] === arrElements[j]) {
                    return true;
                }
            }
            return false;
        }
    };
    checkEquality(niz);
}());

//============================================================================================
(function() {
    /*
      7. Zadatak:
        Cene različitih proizvoda su zadate u vidu niza. Za proizvode čija je cena manja od 50 dodati porez od 18% u suprotnom porez od 8%.
        Izračunati krajnji trošak (sabrati cene i njihov porez).
    */
    // var POREZ1 = 0.18;
    // var POREZ2 = 0.08;
    // var ukupniTrosak = 0;

    // for (var i = 0; i < cene.length; i++) {
    //     if (cene[i] < 50) {
    //         ukupniTrosak += cene[i] + (cene[i] * POREZ1); 
    //     } else {
    //         ukupniTrosak += cene[i] + (cene[i] * POREZ2); 
    //     }
    // }
    var cene = [3, 45, 89, 56, 13, 456, 78, 4];

    var POREZ1 = 0.18; // Uppercase notacija se često koristi da označi varijable koje bi trebalo da imaju ulogu konstanti.
    // Znači zamisao je da se njihove vrednosti koriste u operacijama ali da se ne menjaju. 
    // One su i dalje najobičnije promenljive i što se tiče JavaScript engine-a vrednosti se mogu menjati, ali je stvar dogovora među ljudima da se drugačije tretiraju.
    // U ES6 standardu uvedena je nova ključna reč "const" koja se koristi umesto "var" upravo u tu svrhu. Pri deklaraciji im se mora dodeliti neka vrednost
    // koja se ne može više menjati
    var POREZ2 = 0.08;
    var ukupniTrosak = 0;

    function getEndPrice(price) {
        var POREZ1 = 0.18;
        var POREZ2 = 0.08;

        var smalerThen50 = price.filter(function(element) {
            return element < 50;
        }).map(function(element) {
            return element = (element * POREZ1) + element;
        });
        console.log('>>>>1', smalerThen50);


        var bigerThen50 = price.filter(function(element) {
            return element > 50;
        }).map(function(element) {
            return element = (element * POREZ2) + element;
        });
        console.log('>>>>2', bigerThen50)


        var joinTwoArr = smalerThen50.concat(bigerThen50);

        var endCost = joinTwoArr.reduce(function(agg, element) {
            // console.log('element', element);
            return agg = agg + element;
            // console.log('element2', element);
        }, 0);
        console.log('>>>>3', JSON.stringify(endCost));
        return endCost;
    };
    console.log('==================')
    console.log(getEndPrice(cene));
}());
//=============================================================================
(function() {
    /*
      Objects warmup.
      
      Stigli su nam podaci sa servera. Podaci su u vidu objekta koji čuva informacije o kursu i između ostalog niz ocena polaznika.
      
      Problem: Ukoliko ispišemo ocene kako jesu korisniku neće biti jasno u kom su rasponu (1 - 10).
      
      Zadatak: Napisati funkciju koja će kao jedini parametar da prima objekat sa rezultatima. Funkcija treba da vrati NOVI NIZ
      čiji će elementi biti elementi niza sa ocenama unutar objekta plus sufiks "/10".
      Na taj način ako je ocena npr 3 u novom nizu će biti string "3/10".
      
      Rešenje možete praviti pomoću bilo koje petlje ili metode.
    */
    /* 
    // for
    var noviNiz = [];
  
    for(var i = 0; i < results.ocene_polaznika.length; i++) {
      noviNiz.push(results.ocene_polaznika[i] + "/10");
    }
  
    return noviNiz;
    //*/

    /* 
    //forEach
    var noviNiz = [];
  
    results.ocene_polaznika.forEach(function(el) {
      noviNiz.push(el + "/10");
    });
  
    return noviNiz;
    //*/
    var test_objekat = {
        naziv: "Osnovni kurs JavaScripta",
        trajanje_nedelja: 8,
        predavac: {
            ime: "Nenad",
            prezime: "Pavlov"
        },
        ocene_polaznika: [3, 5, 7, 2, 8, 1, 9, 2, 9, 10, 3, 6, 3, 2, 7, 3, 5, 6, 10, 9, 1, 9],
        organizacija: "DaFED"
    };

    function getDescriptiveRates(results) {
        var ocenePolaznika = results.ocene_polaznika.map(function(element) {
            return element + '/10';
        });
        return ocenePolaznika;
    }
    getDescriptiveRates(test_objekat);
    console.log(JSON.stringify(getDescriptiveRates(test_objekat)));
}());
//=============================================================================================
(function() {
    /*
      Objects warmup.
      
      Stigli su nam podaci sa servera. Podaci su u vidu objekta koji čuva informacije o kursu i između ostalog niz ocena polaznika.
      
      Problem: Želimo da izračunamo prosečnu ocenu.
      
      Zadatak: Napisati funkciju koja će kao jedini parametar da prima objekat sa rezultatima. Funkcija treba da vrati prosečnu ocenu.
      
      Rešenje možete praviti pomoću bilo koje petlje ili metode. Vežbe radi možete uraditi sa for, while, forEach().
      Po želji i potrebi možete praviti još funkcija.
    */
    //reduce
    var test_objekat = {
        naziv: "Osnovni kurs JavaScripta",
        trajanje_nedelja: 5,
        predavac: {
            ime: "Nenad",
            prezime: "Pavlov"
        },
        ocene_polaznika: [3, 5, 7, 2, 8, 1, 9, 2, 9, 10, 3, 6, 3, 2, 7, 3, 5, 6, 10, 9, 1, 9],
        organizacija: "DaFED"
    };

    function getAverageRating(results) {
        var averageMarks = results.ocene_polaznika.reduce(function(agg, element) {
            return (agg + element);
        }, 0) / results.ocene_polaznika.length;

        return averageMarks.toFixed(2);
    }
    console.log(getAverageRating(test_objekat));
    //     function getAverageRatingFor(results) {
    //   var ratesArray = results.ocene_polaznika;
    //   var average = 0;
    //   for(var i = 0; i < ratesArray.length; i++) {
    //     average += ratesArray[i];
    //   }
    //   return average / ratesArray.length;
    // }
    // function getAverageRatingForEach(results) {
    //   var ratesArray = results.ocene_polaznika;
    //   var average = 0;
    //   ratesArray.forEach(function(rate) {
    //     average += rate;
    //   });
    //   return average / ratesArray.length;
    // }
    // function getAverageRatingReduce(results) {
    //   var ratesArray = results.ocene_polaznika;
    //   return ratesArray.reduce(function(accumulator, rate) {
    //     accumulator += rate;
    //     return accumulator;
    //   }, 0) / ratesArray.length;
    // }
    // console.log(getAverageRatingFor(test_objekat));
    // console.log(getAverageRatingForEach(test_objekat));
    // console.log(getAverageRatingReduce(test_objekat));
}());

//======================================================
(function() {
    /*
      Dobili smo sirove podatke i zaduženje da izvučemo određenu statistiku. 
      Naš zadatak: Izračunati koliko godina iskustva imaju svi ljudi ukupno.
      
      Možete koristiti šta god vam je zgodno - for, while, forEach.
    */
    var people = [{
            name: 'Joe Schmoe',
            yearsExperience: 1,
            department: 'IT'
        },
        {
            name: 'Sally Sallerson',
            yearsExperience: 15,
            department: 'Engineering'
        },
        {
            name: 'Bill Billson',
            yearsExperience: 5,
            department: 'Engineering'
        },
        {
            name: 'Jane Janet',
            yearsExperience: 11,
            department: 'Management'
        },
        {
            name: 'Bob Hope',
            yearsExperience: 9,
            department: 'IT'
        }
    ];
    // function getTotalExperienceFor(results) {
    //   var sum = 0;
    //   for(var i = 0; i < results.length; i++) {
    //     sum += results[i].yearsExperience;
    //   }
    //   return sum;
    // }
    // function getTotalExperienceForEach(results) {
    //   var sum = 0;
    //   results.forEach(function(employee){
    //     sum += employee.yearsExperience;
    //   });
    //   return sum;
    // }
    function getTotalExperience(results) {

        var sumOfExpirience = results.reduce(function(agg, element) {
            //console.log('agg,el', agg, element.yearsExperience);
            return agg = agg + element.yearsExperience;

        }, 0);
        return sumOfExpirience;

    }
    // Ovako ćemo na kraju da ispišemo sumu godina iskustva ukoliko koristimo chrome konzolu ili jsbin
    console.log(getTotalExperience(people)); // 41
}());
(function() {
    //===============================================================================
    /*

    Telemarketing kompanija (oni što zovu na fiksni pa nude koješta) nas je unajmila da im pomognemo oko obrade velike količine podataka.

    Naš posao je napišemo 3 funkcije za različite svrhe.

    1. Treba da vrati novi niz koji će sadržati objekte kao svoje elemente sa podacima ljudi koji ispunjavaju kriterijum da su strariji ili imaju zadati broj godina.

    2. Za posebne svrhe treba im mogućnost filtriranja ljudi u određenom starosnom opsegu. Takođe funkcija vraća novi niz čiji su elementi objekti.

    3. Na kraju, radi lakšeg pregleda i zvanja, žele da imaju funkciju poput 2. ali da elementi novog niza kojeg funkcija vraća budu stringovi sačinjeni samo od imena, prezimena i broja telefona ljudi koji ispunjavaju kriterijum starosnog opsega.

    Poslali su nam test set podataka kako bismo imali uvid u format koji koriste i da bismo mogli da testiramo naše rešenje.

    Zadatak rešiti na način po sopstvenoj želji.

    */

    var test_data = [{
            name: "Buck",
            lastname: "Gilbert",
            age: 38,
            phone: 423912
        },
        {
            name: "Rowan",
            lastname: "Read",
            age: 108,
            phone: 174232
        },
        {
            name: "Darren",
            lastname: "Harlan",
            age: 28,
            phone: 7536435
        },
        {
            name: "Hyram",
            lastname: "Styles",
            age: 15,
            phone: 423912
        },
        {
            name: "Kev",
            lastname: "Levitt",
            age: 18,
            phone: 428999
        },
        {
            name: "Sidney",
            lastname: "Attwood",
            age: 32,
            phone: 788675
        },
        {
            name: "Brenden",
            lastname: "Langdon",
            age: 53,
            phone: 9990099
        }
    ];

    // 1. Isfiltrirati osobe koje su starije ili imaju zadati broj godina 

    function getOlderThan(data, age) {
        var olderThen = data.filter(function(element) {
            //console.log(element)
            return element.age >= age
        });
        return olderThen;
        //return data.filter((person) => person.age >= age); //ili samo ovo
    };
    console.log(getOlderThan(test_data, 18)); // Primer. Uključiti i one koji imaju 18

    // + -----------------------------------------------------------+
    //  2. Isfiltrirati osobe čije su godine u zadatom rasponu (inclusive - i oni koji imaju jednako godina sa donjim ili gornjim limitom)

    function getInBetween(data, start_age, end_age) {
        return data.filter(function(element) {
            return element.age >= start_age && element.age <= end_age
        });
    }
    console.log(getInBetween(test_data, 20, 53)); // Primer. Uključiti i one koji imaju 20 i 53

    /* + -----------------------------------------------------------+
    // 3. Isfiltrirati osobe čije su godine u zadatom rasponu (inclusive, važi isto kao kod 2.) i izvući samo njihovo ime, prezime i broj telefona u vidu jednog string, npr:

    Za recimo ovaj objekat:
      {
    		name: "Brenden",
    		lastname: "Langdon",
    		age: 53,
    		phone: 9990099
    	}
      
    Želimo da dobijemo string:

    "Brenden Langdon - 9990099"

    Dakle, šablon za kreiranje stringa je ime + razmak + prezime + crta + broj telefona

    */

    function getNamesAndPhone(data, start_age, end_age) {
        return data.filter(function(element) {
            return element.age >= start_age && element.age <= end_age
        }).map(function(element) {
            return element.name + ' ' + element.lastname + ' - ' + element.phone;
        });
    }
    console.log(getNamesAndPhone(test_data, 20, 53)); // Primer. Uključiti i one koji imaju 20 i 53
}());
///12=================