const getData = () => {
  console.log("Fetching Data...");
};

function debounceFn(fn, d) {
  return function () {
    setTimeout(() => {
      fn().apply(this, arguments);
    }, d);
  };
}

const delayedData = debounceFn(getData, 500);
