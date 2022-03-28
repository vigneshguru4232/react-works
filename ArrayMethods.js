const details = [
  {
    fname: "vignesh",
    lname: "guru",
    place: "ponneri",
    totmarks: 50,
  },
  {
    fname: "Adhitiya",
    lname: "",
    place: "tiruvallur",
    totmarks: 40,
  },
  {
    fname: "Keerthi",
    lname: "vasan",
    place: "ponneri",
    totmarks: 40,
  },
  {
    fname: "monish",
    lname: "kumar",
    place: "minjur",
    totmarks: 30,
  },
  {
    fname: "Jaga",
    lname: "priyan",
    place: "kavarapettai",
    totmarks: 20,
  },
];

//filter

// const fiteredDetail = details.filter(detail=>detail.fname =="vignesh")

// console.log("filtername",fiteredDetail);//output:filtername[ { fname: 'vignesh', lname: 'guru', place: 'chennai' } ]

// const placeDetail = details.filter(detail=>detail.place =="ponnei")

// console.log("filterplace",placeDetail);//output:filterplace[{ fname: 'vignesh', lname: 'guru', place: 'ponneri' },{ fname: 'Keerthi', lname: 'vasan', place: 'ponneri' }]

//map

// const fname = details.map(detail=>detail.fname)
// console.log("names",fname);//output: names [ 'vignesh', 'Adhitiya', 'Keerthi', 'monish' ]

// const place  = details.map(detail=>detail.place)
// console.log("place",place);//output: place [ 'ponneri', 'tiruvallur', 'ponneri', 'minjur' ]

//find

// const nameFinding = details.find(detail=>detail.fname=="vignesh")
// console.log("namefinding",nameFinding);//namefinding { fname: 'vignesh', lname: 'guru', place: 'ponneri' }

// const findLastName = details.find(detail=>detail.lname=="kumar");
// console.log('findall',findLastName)//findall { fname: 'monish', lname: 'kumar', place: 'minjur' }

//foreach

// const findingNames = details.forEach((detail) => {detail.fname});

// console.log("finding names=====",findingNames);

//map:

// const totalmarks = details.map(detail =>(detail.totmarks));
// console.log(totalmarks);
// const sum = totalmarks.reduce((prev,curr) => prev + curr, 0);
// console.log(sum);

//foreach :

const adding = (...marks) => {
  marks.reduce((prev, curr) => prev + curr, 0);
};

const totalmarks = details.forEach((detail) => {
  function sum(...args) {
    var total = 0;
    args.forEach(arg => {
      total += arg;
    });
    console.log(total);
  }
  
  sum(4,7);
  
});
