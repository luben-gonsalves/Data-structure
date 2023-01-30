function promiseAllSettled(iterable) {
  return new Promise((resolve, reject) => {
    const results = new Array(iterable.length);
    let unresolved = iterable.length;

    if (unresolved === 0) {
      resolve(results);
      return;
    }

    iterable.forEach(async (item, index) => {
      try {
        const value = await item;
        results[index] = {
          status: "fulfilled",
          value,
        };
        unresolved -= 1;
      } catch (err) {
        results[index] = {
          status: "rejected",
          value: err,
        };
        unresolved -= 1;
      }

      if (unresolved === 0) {
        resolve(results);
      }
    });
  });
}
