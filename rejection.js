process.on('unhandledRejection', error => {
    // Will print "unhandledRejection err is not defined"
    console.log('unhandledRejection', error.message);
  });
  new Promise((_, reject) => reject(new Error('woops')))
  .catch(error => { console.log('caught', err.message); });
  