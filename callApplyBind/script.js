const album = {
  name: "Purpose",
  artist: "justin",
};

function getDetails(year = "Not Available", firstSong = "Not Available") {
  console.log(
    this.name +
      " is writtened and composed by " +
      this.artist +
      " in " +
      year +
      " and first song released was " +
      firstSong
  );
}

const album2 = {
  name: "Justice",
  artist: "justin",
};

getDetails.call(album2);
getDetails.call(album);
getDetails.apply(album, [2016, "Sorry"]);
getDetails.apply(album2, [2021, "Peaches"]);

const getInfo1 = getDetails.bind(album);
getInfo1(2016, "Company");

const getInfo2 = getDetails.bind(album2);
getInfo2(2021, "Anyone");

// const bookLH99 = bookNew.bind(lufthansa);
// bookLH99(998, "SriNidhi");
